import { createRequire } from 'module';const require = createRequire(import.meta.url);

// src/memory.ts
var MemoryManager = class {
  constructor() {
    this.memory = [];
    this.selfDialogueBuffer = [];
    this.autonomousEnabled = true;
  }
  isAutonomousEnabled() {
    return this.autonomousEnabled;
  }
  setAutonomousMode(enabled) {
    this.autonomousEnabled = enabled;
  }
  async getRelevantContext(query) {
    return [
      ...this.memory.slice(-5),
      ...this.selfDialogueBuffer.slice(-2)
    ];
  }
  async storeSelfDialogue(thought) {
    this.selfDialogueBuffer.push(thought);
    if (this.selfDialogueBuffer.length > 10) {
      this.selfDialogueBuffer.shift();
    }
  }
  async connect() {
    try {
      this.memory = [];
      this.selfDialogueBuffer = [];
      return true;
    } catch (error) {
      console.error("Memory connection failed:", error);
      throw error;
    }
  }
  async storeInteraction(input, output) {
    this.memory.push(`Input: ${input}
Output: ${output}`);
  }
};

export {
  MemoryManager
};
