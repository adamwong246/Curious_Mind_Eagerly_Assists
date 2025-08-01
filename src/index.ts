import * as dotenv from 'dotenv';
import express from 'express';
dotenv.config();

import { Nucleus } from './nucleus';
import { MemoryManager } from './memory';
import { LLMIntegration } from './llm';

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
    await this.memory.initialize();
    await this.llm.initialize();

    this.server.listen(this.serverPort, () => {
      console.log(`Server running on port ${this.serverPort}`);
      console.log(`OAuth callback URL: http://localhost:${this.serverPort}/auth/google/callback`);
    });

    console.log('Untitled AI initialized (in-memory mode)');
    console.log('Type /lock to disable autonomous mode, /unlock to enable');
  }
}

const ai = new UntitledAI();

// Initialize and set up CLI
async function main() {
  try {
    await ai.initialize();
    console.log('AI ready. Type /lock to disable autonomous mode, /unlock to enable');
    
    // Set up stdin listener
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', async (data) => {
      const input = data.toString().trim();
      
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
        try {
          const response = await ai.nucleus.processInput(input);
          console.log('AI:', response);
        } catch (err) {
          console.error('Error processing input:', err);
        }
      }
    });
    
    // Start self-improvement loop
    await ai.nucleus.startSelfImprovementLoop();
    
  } catch (err) {
    console.error('Failed to initialize AI:', err);
    process.exit(1);
  }
}

main();
