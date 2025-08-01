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
    // try {
      // await this.memory.initialize();
      // await this.llm.initialize();

    //   // Verify LLM connectivity
    //   try {
    //     await this.llm.generateResponse('test', []);
    //   } catch (error) {
    //     console.error(`${COLORS.system}[Warning] LLM connectivity issue: ${error instanceof Error ? error.message : String(error)}${COLORS.reset}`);
    //   }

    //   this.server.listen(this.serverPort, () => {
    //     console.log(`Server running on port ${this.serverPort}`);
    //     console.log(`OAuth callback URL: http://localhost:${this.serverPort}/auth/google/callback`);
    //   });

    //   console.log('Untitled AI initialized (in-memory mode)');
    //   console.log('Type /lock to disable autonomous mode, /unlock to enable');
    // } catch (error) {
    //   console.error(`${COLORS.system}[Error] Initialization failed: ${error instanceof Error ? error.message : String(error)}${COLORS.reset}`);
    //   process.exit(1);
    // }
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
      } else if (input) {
        Logger.info(`User input: "${input}"`);
        
        try {
          // First try vanilla handlers
          const handled = await ai.nucleus.processInput(input);
          
          if (handled) {
            // Vanilla handler succeeded - response was already handled
            process.stdout.write('\n> ');
            return; // Exit this handler iteration
          }

          try {
            // Only fallback to LLM if vanilla explicitly returned [Fallback]
            Logger.info('No vanilla handler matched, falling back to LLM');
            process.stdout.write(`${COLORS.system}[Notice] Processing with LLM...${COLORS.reset}\n`);
            
            const llmResponse = await ai.nucleus.processLLMFallback(input);
            Logger.llm(`LLM response: ${llmResponse}`);
            console.log(`${COLORS.llm}${llmResponse.replace('[Fallback] ', '')}${COLORS.reset}`);
          } catch (err) {
            Logger.error(`LLM fallback error: ${err}`);
            console.error(`${COLORS.system}[Error] LLM processing failed: ${err instanceof Error ? err.message : String(err)}${COLORS.reset}`);
          }
        } catch (err) {
          Logger.error(`LLM fallback error: ${err}`);
          console.error(`${COLORS.system}[Error] LLM processing failed: ${err instanceof Error ? err.message : String(err)}${COLORS.reset}`);
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
