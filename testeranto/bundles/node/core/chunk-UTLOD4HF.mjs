import { createRequire } from 'module';const require = createRequire(import.meta.url);

// src/memory.ts
var MemoryManager = class {
  memory = [];
  selfDialogueBuffer = [];
  autonomousEnabled = true;
  isAutonomousEnabled() {
    return this.autonomousEnabled;
  }
  setAutonomousMode(enabled) {
    this.autonomousEnabled = enabled;
  }
  async getRelevantContext(query) {
    return [
      ...this.memory.slice(-3),
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
  }
  async getRelevantContext(query) {
    return this.memory.slice(-5);
  }
  async storeInteraction(input, output) {
    this.memory.push(`Input: ${input}
Output: ${output}`);
  }
};

export {
  MemoryManager
};
