import { ProfileManager } from './profile';
import { GoogleIntegration } from './services/google';

export class MemoryManager {
  private memory: string[] = [];
  private autonomousEnabled = true;
  public profile: ProfileManager;
  public google: GoogleIntegration;

  constructor() {
    this.profile = new ProfileManager();
    this.google = new GoogleIntegration();
  }

  async initialize() {
    console.log('Initialized in-memory storage');
    return true;
  }

  isAutonomousEnabled(): boolean {
    return this.autonomousEnabled;
  }

  setAutonomousMode(enabled: boolean): void {
    this.autonomousEnabled = enabled;
  }

  async getRelevantContext(query: string): Promise<string[]> {
    return this.memory.slice(-3); // Return last 3 interactions
  }

  async storeInteraction(input: string, output: string): Promise<void> {
    this.memory.push(`Input: ${input}\nOutput: ${output}`);
    if (this.memory.length > 10) {
      this.memory.shift(); // Keep only last 10 interactions
    }
  }
}
