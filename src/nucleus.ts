import { MemoryManager } from './memory';
import { LLMIntegration } from './llm';

export class Nucleus {
  constructor(
    private memory: MemoryManager,
    private llm: LLMIntegration
  ) {}

  async processInput(input: string): Promise<string> {
    // Retrieve relevant memories
    const context = await this.memory.getRelevantContext(input);
    
    // Generate response with LLM
    const response = await this.llm.generateResponse(input, context);
    
    // Store interaction in memory
    await this.memory.storeInteraction(input, response);
    
    return response;
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
