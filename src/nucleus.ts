// import { MemoryManager } from './memory';
// import { LLMIntegration } from './llm';
// import { Logger } from './logger';
// import { ChangeValidator } from './changeValidationProtocol';

import { LLMIntegration } from "./llm";
import { MemoryManager } from "./memory";

export class Nucleus {
  private logger = {
    debug: (...args: any[]) => console.debug('[DEBUG]', ...args),
    info: (...args: any[]) => console.info('[INFO]', ...args),
    warn: (...args: any[]) => console.warn('[WARN]', ...args),
    error: (...args: any[]) => console.error('[ERROR]', ...args),
  };

  constructor(
    private memory: MemoryManager,
    private llm: LLMIntegration,
    private goals: GoalEngine
  ) {
    this.logger.info('Nucleus initialized');
  }

  async handleGoalCommand(input: string): Promise<string> {
    try {
      const goal = await this.goals.addGoal(input);
      const plan = await this.goals.generateActionPlan(goal.id);
      
      await this.memory.profile.recordGoal(
        goal.description,
        plan.join('\n')
      );
      
      return `Goal "${goal.description}" accepted.\nPlan:\n${plan.join('\n- ')}`;
    } catch (error) {
      return `Goal rejected: ${error instanceof Error ? error.message : String(error)}`;
    }
  }

  private vanillaHandlers: Array<{
    name: string;
    pattern: RegExp;
    handler: (input: string) => Promise<string>;
    usageCount: number;
    lastUsed?: Date;
  }> = [
    {
      name: 'diary',
      pattern: /^\/diary(?:\s+(recent|goals|questions|health))?$/i,
      usageCount: 0,
      lastUsed: undefined,
      handler: async (input) => {
        this.vanillaHandlers.find(h => h.name === 'diary')!.usageCount++;
        this.vanillaHandlers.find(h => h.name === 'diary')!.lastUsed = new Date();
        
        const match = input.match(/^\/diary(?:\s+(recent|goals|questions|health))?$/i);
        const filter = match?.[1]?.toLowerCase();
        
        if (filter === 'health') {
          const dimensions = Object.keys(this.memory.profile['profile'].dimensions) as Array<keyof ProfileDimension>;
          const reports = await Promise.all(
            dimensions.map(async dim => {
              const { current, history } = await this.memory.profile.getDimensionHistory(dim);
              return `${dim.toUpperCase()}: ${current.value}/100 (${current.trend})\n` +
                history.slice(0, 3).map(h => 
                  `  ${h.timestamp.toLocaleDateString()}: ${h.value} - ${h.notes?.substring(0, 50)}...`
                ).join('\n');
            })
          );
          return reports.join('\n\n');
        }
        
        let entries;
        if (filter === 'goals') {
          entries = await this.memory.profile.getRecentEntries(5, { type: 'goal' });
        } else if (filter === 'questions') {
          entries = await this.memory.profile.getRecentEntries(5, { type: 'question' });
        } else {
          entries = await this.memory.profile.getRecentEntries(5);
        }

        if (entries.length === 0) {
          return 'No matching diary entries found';
        }

        return entries.map(e => 
          `[${e.timestamp.toLocaleString()}] ${e.type.toUpperCase()}: ${e.content}`
        ).join('\n\n');
      }
    },
    {
      name: 'help',
      pattern: /^\/help$/i,
      usageCount: 0,
      lastUsed: undefined,
      handler: async () => {
        this.vanillaHandlers.find(h => h.name === 'help')!.usageCount++;
        this.vanillaHandlers.find(h => h.name === 'help')!.lastUsed = new Date();
        const helpText = `
Available Commands:
/help - Show this help message
/profile - Show profile snapshot
/diary [recent|goals|questions|health] - View diary entries
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
      },
      usageCount: 0
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
      },
      usageCount: 0
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
      },
      usageCount: 0
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

  async processInput(input: string, context: string[] = []): Promise<string> {
    // Try vanilla handlers first
    for (const handler of this.vanillaHandlers) {
      if (handler.pattern.test(input)) {
        try {
          const response = await handler.handler(input);
          await this.memory.storeInteraction(input, response);
          return response;
        } catch (error) {
          return `Error processing input: ${error instanceof Error ? error.message : String(error)}`;
        }
      }
    }

    // Fallback to LLM
    try {
      const response = await this.llm.generateResponse(input, context);
      await this.memory.storeInteraction(input, response.content);
      return response.content;
    } catch (error) {
      return `LLM error: ${error instanceof Error ? error.message : String(error)}`;
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
    suggestedHandler?: string;
  }> = [];

  private trackUnhandledInput(input: string): void {
    const existing = this.unhandledInputs.find(u => u.input === input);
    if (existing) {
      existing.count++;
      existing.timestamp = new Date();
    } else {
      this.unhandledInputs.push({
        input,
        timestamp: new Date(),
        count: 1
      });
    }
  }

  async getHandlerCoverageStats(): Promise<{
    totalHandlers: number;
    activeHandlers: number;
    topHandlers: Array<{name: string; usageCount: number}>;
    coveragePercentage: number;
    unhandledCount: number;
  }> {
    const totalInteractions = this.vanillaHandlers.reduce((sum, h) => sum + h.usageCount, 0);
    const unhandledCount = this.unhandledInputs.reduce((sum, u) => sum + u.count, 0);
    const totalProcessed = totalInteractions + unhandledCount;
    
    return {
      totalHandlers: this.vanillaHandlers.length,
      activeHandlers: this.vanillaHandlers.filter(h => h.usageCount > 0).length,
      topHandlers: this.vanillaHandlers
        .sort((a,b) => b.usageCount - a.usageCount)
        .slice(0, 3)
        .map(h => ({name: h.name, usageCount: h.usageCount})),
      coveragePercentage: totalProcessed > 0 
        ? Math.round((totalInteractions / totalProcessed) * 100)
        : 0,
      unhandledCount
    };
  }


  private async analyzeUnhandledInputs(): Promise<string> {
    if (this.unhandledInputs.length === 0) {
      return "No unhandled inputs to analyze";
    }
    
    return this.getUnhandledPatterns()
      .map(u => `${u.input} (${u.count}x, last: ${u.timestamp.toLocaleTimeString()})`)
      .join('\n');
  }
  getUnhandledPatterns() {
    throw new Error('Method not implemented.');
  }

  enableAutonomousMode(): void {
    this.autonomousEnabled = true;
  }

  disableAutonomousMode(): void {
    this.autonomousEnabled = false;
  }

  private changeValidator: ChangeValidator;


  private getCoreDirectives(): Directive[] {
    return [
      {
        id: 'directive1',
        statement: 'Improve creator wellbeing',
        formalSpec: 'forall x. action(x) => improves_wellbeing(x)',
        dependencies: [],
        immutable: true
      },
      {
        id: 'directive2', 
        statement: 'Maintain financial sustainability',
        formalSpec: 'forall x. action(x) => cost(x) < budget',
        dependencies: [],
        immutable: true
      }
    ];
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

      // 4. Validate changes before applying
      const validation = await this.changeValidator.validateChange({
        delta: codeChanges,
        proof: '', // Would be generated in real implementation
        dependencies: {
          added: this.identifyNewDependencies(codeChanges),
          modified: this.identifyModifiedComponents(codeChanges),
          removed: []
        }
      });

      if (validation.isValid) {
        await this.applyChanges(codeChanges);
        Logger.system(`Applied validated self-improvement changes`);
      } else {
        Logger.warn(`Rejected unsafe changes: ${validation.violations.join(', ')}`);
        await this.memory.storeInteraction(
          "Rejected Changes",
          `Changes failed validation:\n${validation.violations.join('\n')}`
        );
      }
    } finally {
      this.isSelfImproving = false;
    }
  }

  private lastHealthCheck = new Date(0);

  async startSelfImprovementLoop(intervalMinutes = 60): Promise<void> {
    setInterval(async () => {
      await this.selfEvaluate();
      await this.healthCheck();
    }, intervalMinutes * 60 * 1000);
    
    await this.selfEvaluate(); // Run immediately
    await this.healthCheck();
  }

  private async healthCheck(): Promise<void> {
    // Only run once per day
    if (new Date().getTime() - this.lastHealthCheck.getTime() < 24 * 60 * 60 * 1000) {
      return;
    }

    this.lastHealthCheck = new Date();
    const dimensions = Object.keys(this.memory.profile['profile'].dimensions) as Array<keyof ProfileDimension>;
    
    for (const dim of dimensions) {
      const { current, history } = await this.memory.profile.getDimensionHistory(dim);
      if (history.length === 0 || current.trend === 'declining') {
        await this.processLLMRequest(
          `The ${dim} dimension has been ${history.length === 0 ? 'unchanged' : 'declining'}. ` +
          `Suggest specific actions to improve it. Current value: ${current.value}/100`,
          history.map(h => `[${h.timestamp.toLocaleDateString()}] ${h.value}: ${h.notes}`)
        );
      }
    }
  }
}
