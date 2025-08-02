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
/lock - Disable autonomous mode
/unlock - Enable autonomous mode
/google-auth - Start Google OAuth flow
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

  async processLLMFallback(input: string): Promise<string> {

    try {
      // Get context and generate LLM response
      const context = await this.memory.getRelevantContext(input);
      
      // Try with simpler context if first attempt fails
      try {
        const llmResponse = await this.llm.generateResponse(input, context);
        await this.memory.storeInteraction(`[FALLBACK] ${input}`, llmResponse);
        return `[Fallback] ${llmResponse}`;
      } catch (error) {
        console.error(`${COLORS.system}[Warning] Retrying with reduced context...${COLORS.reset}`);
        const llmResponse = await this.llm.generateResponse(input, []);
        await this.memory.storeInteraction(`[FALLBACK] ${input}`, llmResponse);
        return `[Fallback] ${llmResponse}`;
      }
    } catch (error) {
      const errorMsg = `LLM fallback failed: ${error instanceof Error ? error.message : String(error)}`;
      await this.memory.storeInteraction(
        `[ERROR] ${input}`,
        errorMsg
      );
      return `[System] ${errorMsg}`;
    }
  }


  private isSelfImproving = false;
  private autonomousEnabled = true;

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
      const prompt = `Conduct a self-evaluation. Identify areas for improvement in:
      1. Code quality
      2. Architectural decisions
      3. Knowledge gaps
      4. Performance bottlenecks
      
      Be concise and actionable.`;
      
      const analysis = await this.processInput(prompt);
      const improvementPlan = await this.processInput(
        `Based on this analysis: ${analysis}\nCreate a concrete improvement plan.`
      );
      
      await this.memory.storeInteraction(
        "Self-evaluation", 
        `Analysis: ${analysis}\nPlan: ${improvementPlan}`
      );
      
      console.log("Self-improvement cycle completed");
    } finally {
      this.isSelfImproving = false;
    }
  }

  async startSelfImprovementLoop(intervalMinutes = 60): Promise<void> {
    setInterval(() => this.selfEvaluate(), intervalMinutes * 60 * 1000);
    await this.selfEvaluate(); // Run immediately
  }
}
