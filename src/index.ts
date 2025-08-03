import * as dotenv from 'dotenv';
import express from 'express';

// ANSI color codes
export const COLORS = {
  vanilla: '\x1b[36m', // Cyan
  llm: '\x1b[35m', // Magenta
  system: '\x1b[33m', // Yellow
  reset: '\x1b[0m'
};
dotenv.config();

import { Nucleus } from './nucleus';
import { MemoryManager } from './memory';
import { LLMIntegration } from './llm';
import { Logger } from './logger';

const app = express();
app.use(express.json());

class UntitledAI {
  private nucleus: Nucleus;
  private memory: MemoryManager;
  private llm: LLMIntegration;
  private server: express.Express;
  private serverPort: number;
  private unhandledInputs: Array<{
    input: string;
    timestamp: Date;
    count: number;
  }> = [];

  constructor() {
    this.memory = new MemoryManager();
    this.llm = new LLMIntegration();
    this.nucleus = new Nucleus(this.memory, this.llm);
    this.server = express();
    this.serverPort = parseInt(process.env.PORT || '3000');
    
    this.setupServer();
  }

  private getTimeOfDay(): 'morning'|'afternoon'|'evening' {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    return 'evening';
  }

  private getLastInteractionHours(memory: MemoryManager): number | undefined {
    if (memory.social.getInteractionPatterns().frequency === 0) {
      return undefined;
    }
    const lastInteraction = memory.social.getInteractionPatterns().timeBetweenInteractions;
    return lastInteraction ? lastInteraction / (1000 * 60 * 60) : undefined;
  }
  
  private setupServer() {
    this.server.use(express.json());

    // Google OAuth routes
    this.server.get('/auth/google/callback', async (req, res) => {
      try {
        const { code } = req.query;
        if (!code) {
          return res.status(400).send('Missing authorization code');
        }
        
        await this.memory.google.setCredentials(code as string);
        res.send('Google authentication successful! You can close this window.');
      } catch (error) {
        console.error('Google auth callback error:', error);
        res.status(500).send('Authentication failed');
      }
    });

    // API routes
    this.server.post('/api/chat', async (req, res) => {
      try {
        const { message } = req.body;
        const response = await this.nucleus.processInput(message);
        res.json({ response });
      } catch (error) {
        res.status(500).json({ error: 'Failed to process message' });
      }
    });
  }

  async initialize() {
    try {
      // Initialize ChromaDB with retries
      let initialized = false;
      let retries = 3;
      while (!initialized && retries > 0) {
          try {
              initialized = await this.memory.initialize();
              if (!initialized) {
                  throw new Error('ChromaDB initialization failed');
              }
          } catch (error) {
              retries--;
              Logger.error(`ChromaDB init attempt ${3-retries}/3 failed: ${error}`);
              await new Promise(resolve => setTimeout(resolve, 2000));
          }
      }
      if (!initialized) {
        console.error(`${COLORS.system}[Error] Failed to initialize ChromaDB${COLORS.reset}`);
        console.log('Make sure ChromaDB is running:');
        console.log('docker run -p 8000:8000 chromadb/chroma');
        process.exit(1);
      }

      // Initialize core components
      await this.memory.initialize();
      await this.llm.initialize();

      // Skip LLM connectivity check on startup
      Logger.debug('Skipping LLM pre-check - will verify on first use');

      this.server.listen(this.serverPort, () => {
        console.log(`Server running on port ${this.serverPort}`);
        console.log(`OAuth callback URL: http://localhost:${this.serverPort}/auth/google/callback`);
      });

      console.log('Untitled AI initialized with ChromaDB vector memory');
      console.log('Type /lock to disable autonomous mode, /unlock to enable');
    } catch (error) {
      console.error(`${COLORS.system}[Error] Initialization failed: ${error instanceof Error ? error.message : String(error)}${COLORS.reset}`);
      process.exit(1);
    }
  }
}

const ai = new UntitledAI();

// Initialize and set up CLI
async function main() {
  try {
    
    await ai.initialize();
    
    
    console.log('AI ready. Type /lock to disable autonomous mode, /unlock to enable');
    
    // Set up controlled stdin listener
    const showPrompt = () => process.stdout.write('> ');
    showPrompt();
    
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', async (data) => {
      // Ignore empty inputs
      const input = data.toString().trim();
      if (!input) {
        showPrompt();
        return;
      }
      // const input = data.toString().trim();
      
      if (input === '/profile') {
        console.log(await ai.memory.profile.getProfileSnapshot());
      } else if (input.startsWith('/update ')) {
        const [_, dimension, value] = input.match(/^\/update (\w+) (\d+)$/) || [];
        if (dimension && value) {
          await ai.memory.profile.updateDimension(
            dimension as keyof ProfileDimension,
            parseInt(value)
          );
          console.log(`Updated ${dimension} to ${value}`);
        }
      } else if (input === '/lock') {
        ai.nucleus.disableAutonomousMode();
        console.log('Autonomous mode disabled');
      } else if (input === '/google-auth') {
        try {
          const authUrl = await ai.memory.google.getAuthUrl();
          console.log('1. Visit this URL in your browser:');
          console.log(authUrl);
          console.log('\n2. After approving, you will be redirected back to the local server');
          console.log('3. No need to manually enter any codes - it will happen automatically');
        } catch (error) {
          console.error('Auth setup error:', error instanceof Error ? error.message : String(error));
          console.log('Did you set up the .env file correctly?');
        }
      } else if (input === '/google-emails') {
        const { emails } = await ai.memory.google.getRecentEmails(5);
        emails.forEach(email => {
          console.log(`[${email.date}] ${email.from}: ${email.subject}`);
          console.log(`  ${email.snippet}\n`);
        });
      } else if (input === '/google-contacts') {
        const { contacts } = await ai.memory.google.getContacts(10);
        contacts.forEach(contact => {
          console.log(`${contact.name}: ${contact.email} ${contact.phone ? `(${contact.phone})` : ''}`);
        });
      } else if (input === '/google-calendar') {
        const events = await ai.memory.google.getCalendarEvents(5);
        events.forEach(event => {
          console.log(`${event.start} - ${event.end}: ${event.summary}`);
          if (event.attendees.length) {
            console.log(`  Attendees: ${event.attendees.join(', ')}`);
          }
        });
      } else if (input.startsWith('/google-send ')) {
        const [_, to, subject, ...bodyParts] = input.split(' ');
        const body = bodyParts.join(' ');
        await ai.memory.google.sendEmail(to, subject, body);
        console.log('Email sent successfully');
      } else if (input === '/unlock') {
        ai.nucleus.enableAutonomousMode();
        console.log('Autonomous mode enabled');
      } else if (input.startsWith('/scrape ')) {
        const url = input.substring(8).trim();
        if (!url.startsWith('http')) {
          console.log('Please provide a valid URL starting with http/https');
          return;
        }

        console.log(`Scraping ${url}...`);
        try {
          const success = await ai.memory.scrapeAndStoreWebpage(url);
          if (success) {
            console.log('Successfully scraped and stored webpage');
            const { shortTerm } = await ai.memory.getMemoryStats();
            console.log(`Total interactions in memory: ${shortTerm}`);
          } else {
            console.log('Scrape failed - check logs for details');
          }
        } catch (error) {
          console.log('Scrape failed with error:', error instanceof Error ? error.message : String(error));
        }
      } else if (input === '/chroma-status') {
        const { connected } = await ai.memory.checkChromaStatus();
        console.log(`ChromaDB: ${connected ? '✅ Connected' : '❌ Not connected'}`);
      } else if (input === '/unhandled') {
        const patterns = ai.unhandledInputs.sort((a, b) => b.count - a.count);
        if (patterns.length === 0) {
          console.log('No unhandled patterns recorded');
        } else {
          console.log('Unhandled patterns needing handlers:');
          patterns.forEach((p, i) => {
            console.log(`${i+1}. "${p.input}"`);
            console.log(`   Count: ${p.count}, Last: ${p.timestamp.toLocaleString()}`);
          });
        }
      } else if (input === '/memstats') {
        const { shortTerm, lastStored, scrapedCount } = await ai.memory.getMemoryStats();
        console.log(`Memory Stats:
- Short-term: ${shortTerm} interactions
- Scraped pages: ${scrapedCount}
- Last stored: ${lastStored?.toLocaleString() || 'never'}`);
      } else if (input.startsWith('/show-scrape ')) {
        const url = input.substring('/show-scrape '.length).trim();
        const scrapes = await ai.memory.getScrapedContent(url);
        
        if (scrapes.length === 0) {
          console.log('No scraped content found' + (url ? ` for ${url}` : ''));
          return;
        }
        
        console.log(`Found ${scrapes.length} scraped pages:`);
        scrapes.forEach((scrape, i) => {
          console.log(`\n${i+1}. ${scrape.url}`);
          console.log(`   Scraped at: ${scrape.timestamp.toLocaleString()}`);
          console.log(`   Content preview: ${scrape.content.substring(0, 100)}...`);
        });
      } else if (input) {
        Logger.info(`User input: "${input}"`);
        
        try {
          // First try vanilla handlers
          const handled = await ai.nucleus.processInput(input);
            
          if (handled) {
            process.stdout.write('\n> ');
            return;
          }
        } catch (error) {
          Logger.error(`Command processing failed: ${error}`);
          console.log(`${COLORS.system}[Error] Command failed: ${error instanceof Error ? error.message : String(error)}${COLORS.reset}`);
          process.stdout.write('\n> ');
          return;
        }

          Logger.info('No vanilla handler matched for input');
          console.log(`${COLORS.system}[Notice] I don't have a handler for that yet. This interaction has been logged for future improvement.${COLORS.reset}`);
          
          // Track unhandled input
          const existing = ai.unhandledInputs.find(u => u.input === input);
          if (existing) {
            existing.count++;
            existing.timestamp = new Date();
          } else {
            ai.unhandledInputs.push({
              input,
              timestamp: new Date(),
              count: 1
            });
          }
        
        process.stdout.write('\n> ');
      }
    });
    
    // Start self-improvement loop
    // await ai.nucleus.startSelfImprovementLoop();
    
  } catch (err) {
    console.error('Failed to initialize AI:', err);
    process.exit(1);
  }
}

main();
