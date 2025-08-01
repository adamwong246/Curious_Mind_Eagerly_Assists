import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  LLMIntegration
} from "../chunk-J73C7AW2.mjs";
import {
  MemoryManager
} from "../chunk-DLVBJJMX.mjs";
import {
  Node_default
} from "../chunk-ONFOCOPL.mjs";

// src/nucleus.ts
var Nucleus = class {
  constructor(memory, llm) {
    this.memory = memory;
    this.llm = llm;
    this.isSelfImproving = false;
    this.autonomousEnabled = true;
  }
  async processInput(input) {
    const context = await this.memory.getRelevantContext(input);
    const response = await this.llm.generateResponse(input, context);
    await this.memory.storeInteraction(input, response);
    return response;
  }
  enableAutonomousMode() {
    this.autonomousEnabled = true;
  }
  disableAutonomousMode() {
    this.autonomousEnabled = false;
  }
  async selfEvaluate() {
    if (!this.autonomousEnabled || this.isSelfImproving)
      return;
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
        `Based on this analysis: ${analysis}
Create a concrete improvement plan.`
      );
      await this.memory.storeInteraction(
        "Self-evaluation",
        `Analysis: ${analysis}
Plan: ${improvementPlan}`
      );
      console.log("Self-improvement cycle completed");
    } finally {
      this.isSelfImproving = false;
    }
  }
  async startSelfImprovementLoop(intervalMinutes = 60) {
    setInterval(() => this.selfEvaluate(), intervalMinutes * 60 * 1e3);
    await this.selfEvaluate();
  }
};

// test/nucleus.test.ts
var implementation = {
  suites: {
    Default: "Nucleus Test Suite"
  },
  givens: {
    Default: async () => {
      const memory = new MemoryManager();
      if (typeof memory.connect !== "function") {
        throw new Error("Memory manager connect method missing");
      }
      await memory.connect();
      return {
        memory,
        llm: new LLMIntegration()
      };
    }
  },
  whens: {
    processInput: (input) => (store) => {
      store.input = input;
      return store;
    },
    toggleAutonomous: (enabled) => (store) => {
      store.nucleus[enabled ? "enableAutonomousMode" : "disableAutonomousMode"]();
      return store;
    }
  },
  thens: {
    verifyResponse: () => async (store) => {
      const response = await store.nucleus.processInput(store.input);
      if (!response || typeof response !== "string") {
        throw new Error("Invalid response from Nucleus");
      }
      return store;
    },
    verifyAutonomousState: (expected) => (store) => {
      const actual = store.nucleus["autonomousEnabled"];
      if (actual !== expected) {
        throw new Error(`Expected autonomous=${expected}, got ${actual}`);
      }
      return store;
    }
  }
};
var specification = (Suite, Given, When, Then) => [
  Suite.Default("Initialization", {
    basicTest: Given.Default(
      ["Should initialize successfully"],
      [],
      []
    )
  })
];
var adapter = {
  beforeEach: async (subject, initializer) => {
    const { memory, llm } = await initializer();
    if (!memory || typeof memory.connect !== "function") {
      throw new Error("Memory manager not properly initialized");
    }
    await memory.connect();
    return {
      nucleus: new Nucleus(memory, llm),
      input: "test input"
    };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {
  },
  beforeAll: async () => ({
    memory: new MemoryManager(),
    llm: new LLMIntegration()
  }),
  assertThis: (x) => x
};
var nucleus_test_default = Node_default(
  Nucleus.prototype,
  specification,
  implementation,
  adapter
);
export {
  nucleus_test_default as default
};
