import { MemoryManager } from './memory';
import { LLMIntegration } from './llm';
import { Logger } from './logger';

// ANSI color codes
const COLORS = {
  system: '\x1b[33m', // Yellow
  llm: '\x1b[35m', // Magenta  
  vanilla: '\x1b[0m',
  reset: '\x1b[0m'
};

export class Nucleus {
  constructor(
    private memory: MemoryManager,
    private llm: LLMIntegration
  ) {}

  private vanillaHandlers: Array<{
    name: string;
    pattern: RegExp;
    handler: (input: string) => Promise<string>;
  }> = [
    {
      name: 'help',
      pattern: /^\/help$/i,
      handler: async () => {
        const helpText = `
Available Commands:
/help - Show this help message
/profile - Show profile snapshot
/update [dimension] [value] - Update health metric (e.g. "/update emotional 75")
/lock - Disable autonomous mode
/unlock - Enable autonomous mode
/google-auth - Start Google OAuth flow
/google-emails - Show recent emails
/google-contacts - Show contacts
/google-calendar - Show upcoming events
/google-send [to] [subject] [body] - Send email
/scrape [url] - Scrape and store webpage
/chroma-status - Check ChromaDB status
/unhandled - Show unhandled input patterns
/memstats - Show memory statistics
/show-scrape [url] - View scraped webpage content
`;
        console.log(`${COLORS.vanilla}${helpText}${COLORS.reset}`);
        return helpText;
      }
    },
    {
      name: 'greetings',
      pattern: /^(hello|hi|hey|greetings|good (morning|afternoon|evening))\b/i,
      handler: async () => {
        const greeting = this.memory.social.generateGreeting(
          this.getTimeOfDay(),
          this.getLastInteractionHours()
        );
        console.log(`${COLORS.vanilla}${greeting}${COLORS.reset}`);
        return greeting;
      }
    },
    {
      name: 'fact_recording',
      pattern: /my (favorite|least favorite) (\w+) is (\w+)/i,
      handler: async (input) => {
        const match = input.match(/my (favorite|least favorite) (\w+) is (\w+)/i);
        if (!match) {
          const error = '[System] Invalid fact format';
          console.log(`${COLORS.system}${error}${COLORS.reset}`);
          return error;
        }
        
        const [_, preference, category, value] = match;
        this.memory.social.rememberPersonalFact({
          subject: `${preference} ${category}`,
          detail: value
        });
        const response = `I'll remember your ${preference} ${category} is ${value}`;
        console.log(`${COLORS.vanilla}${response}${COLORS.reset}`);
        return response;
      }
    },
    {
      name: 'memory_query',
      pattern: /(what|what's|remember) my (favorite|least favorite) (\w+)\??/i,
      handler: async (input) => {
        const match = input.match(/(what|what's|remember) my (favorite|least favorite) (\w+)\??/i);
        if (!match) {
          const error = '[System] Invalid query format';
          console.log(`${COLORS.system}${error}${COLORS.reset}`);
          return error;
        }
        
        const [_, __, preference, category] = match;
        const fact = this.memory.social.recallFact(`${preference} ${category}`);
        const response = fact 
          ? `Your ${preference} ${category} is ${fact}`
          : `I don't recall your ${preference} ${category}`;
        console.log(`${COLORS.vanilla}${response}${COLORS.reset}`);
        return response;
      }
    }
  ];

  private getTimeOfDay(): 'morning'|'afternoon'|'evening' {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 18) return 'afternoon';
    return 'evening';
  }

  private getLastInteractionHours(): number | undefined {
    const patterns = this.memory.social.getInteractionPatterns();
    return patterns.frequency > 0 
      ? patterns.timeBetweenInteractions / (1000 * 60 * 60)
      : undefined;
  }

  async processInput(input: string): Promise<boolean> {
    Logger.debug(`Processing input: "${input}"`);
    
    try {
      // Try vanilla handlers first
      for (const handler of this.vanillaHandlers) {
        if (handler.pattern.test(input)) {
          Logger.debug(`Matched vanilla handler: ${handler.name}`);
          try {
            const response = await handler.handler(input);
            await this.memory.storeInteraction(input, response);
            return true;
          } catch (error) {
            Logger.error(`Vanilla handler failed: ${error}`);
            return false;
          }
        }
      }
      
      Logger.debug('No vanilla handler matched');
      return false;
    } catch (error) {
      const errorMsg = `Error processing input: ${error instanceof Error ? error.message : String(error)}`;
      await this.memory.storeInteraction(`[ERROR] ${input}`, errorMsg);
      return false;
    }
  }

  async processLLMRequest(prompt: string, context: string[] = []): Promise<string> {
    if (!this.autonomousEnabled) {
      return "[System] Autonomous mode is currently disabled";
    }

    try {
      const response = await this.llm.generateResponse(prompt, context);
      await this.memory.storeInteraction(`[LLM] ${prompt}`, response);
      return response;
    } catch (error) {
      const errorMsg = `LLM request failed: ${error instanceof Error ? error.message : String(error)}`;
      await this.memory.storeInteraction(
        `[LLM_ERROR] ${prompt}`,
        errorMsg
      );
      return `[System] ${errorMsg}`;
    }
  }


  private isSelfImproving = false;
  private autonomousEnabled = true;
  private unhandledInputs: Array<{
    input: string;
    timestamp: Date;
    count: number;
  }> = [];


  private async analyzeUnhandledInputs(): Promise<string> {
    if (this.unhandledInputs.length === 0) {
      return "No unhandled inputs to analyze";
    }
    
    return this.getUnhandledPatterns()
      .map(u => `${u.input} (${u.count}x, last: ${u.timestamp.toLocaleTimeString()})`)
      .join('\n');
  }

  enableAutonomousMode(): void {
    this.autonomousEnabled = true;
  }

  disableAutonomousMode(): void {
    this.autonomousEnabled = false;
  }

  async selfEvaluate(): Promise<void> {
    if (!this.autonomousEnabled || this.isSelfImproving) return;
    this.isSelfImproving = true;
    
    try {
      // 1. Analyze recent unhandled inputs
      const unhandledPatterns = await this.analyzeUnhandledInputs();
      
      // 2. Generate vanilla handler suggestions
      const handlerSuggestions = await this.processLLMRequest(
        `Analyze these unhandled input patterns and suggest new vanilla handlers:\n${unhandledPatterns}`
      );
      
      // 3. Propose code changes
      const codeChanges = await this.processLLMRequest(
        `Based on these handler suggestions, propose concrete code changes to implement them:\n${handlerSuggestions}`
      );
      
      await this.memory.storeInteraction(
        "Self-evaluation", 
        `Unhandled patterns: ${unhandledPatterns}\n\n` +
        `Suggested handlers: ${handlerSuggestions}\n\n` +
        `Proposed changes: ${codeChanges}`
      );
      
      Logger.system(`Self-improvement cycle completed. New handlers suggested: ${handlerSuggestions.split('\n').length}`);
    } finally {
      this.isSelfImproving = false;
    }
  }

  async startSelfImprovementLoop(intervalMinutes = 60): Promise<void> {
    setInterval(() => this.selfEvaluate(), intervalMinutes * 60 * 1000);
    await this.selfEvaluate(); // Run immediately
  }
}
