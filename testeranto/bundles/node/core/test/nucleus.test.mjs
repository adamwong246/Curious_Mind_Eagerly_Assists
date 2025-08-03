import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  LLMIntegration
} from "../chunk-VLEWZBUB.mjs";
import {
  MemoryManager
} from "../chunk-FNDFDSAX.mjs";
import "../chunk-X2NKHCUU.mjs";
import {
  Node_default,
  init_cjs_shim
} from "../chunk-LFLTOQ4W.mjs";

// test/nucleus.test.ts
init_cjs_shim();

// test/specs/nucleus.spec.ts
init_cjs_shim();
var NucleusSpecification = (Suite, Given, When, Then) => [
  Suite.Default("Core Functionality", {
    initTest: Given.Default(
      ["Should initialize with required components"],
      [],
      []
    ),
    helpTest: Given.Default(
      ["Should properly handle help command"],
      [When.processInput("/help")],
      [Then.verifyHandlerMatch("help"), Then.verifyResponse("Available commands")]
    ),
    contextTest: Given.WithContext(
      ["Should use conversation context when available"],
      [When.processInput("follow up", ["previous message"])],
      [Then.verifyContextUsed(true)]
    )
  }),
  Suite.Autonomous("Autonomous Mode", {
    enableTest: Given.Default(
      ["Should enable autonomous mode"],
      [When.toggleAutonomous(true)],
      [Then.verifyAutonomousState(true)]
    ),
    disableTest: Given.Default(
      ["Should disable autonomous mode"],
      [When.toggleAutonomous(false)],
      [Then.verifyAutonomousState(false)]
    )
  }),
  Suite.Coverage("Handler Coverage", {
    coverageTest: Given.Default(
      ["Should track handler coverage percentage"],
      [When.processInput("/help"), When.getCoverage()],
      [Then.verifyCoverage(1)]
    ),
    unhandledTest: Given.Default(
      ["Should track unhandled input patterns"],
      [When.processInput("unknown command"), When.getUnhandled()],
      [Then.verifyUnhandledCount(1)]
    )
  })
];

// src/nucleus.ts
init_cjs_shim();
var Nucleus = class {
  constructor(memory, llm, goals) {
    this.memory = memory;
    this.llm = llm;
    this.goals = goals;
    this.logger = {
      debug: (...args) => console.debug("[DEBUG]", ...args),
      info: (...args) => console.info("[INFO]", ...args),
      warn: (...args) => console.warn("[WARN]", ...args),
      error: (...args) => console.error("[ERROR]", ...args)
    };
    this.vanillaHandlers = [
      {
        name: "diary",
        pattern: /^\/diary(?:\s+(recent|goals|questions|health))?$/i,
        usageCount: 0,
        lastUsed: void 0,
        handler: async (input) => {
          this.vanillaHandlers.find((h) => h.name === "diary").usageCount++;
          this.vanillaHandlers.find((h) => h.name === "diary").lastUsed = /* @__PURE__ */ new Date();
          const match = input.match(/^\/diary(?:\s+(recent|goals|questions|health))?$/i);
          const filter = match?.[1]?.toLowerCase();
          if (filter === "health") {
            const dimensions = Object.keys(this.memory.profile["profile"].dimensions);
            const reports = await Promise.all(
              dimensions.map(async (dim) => {
                const { current, history } = await this.memory.profile.getDimensionHistory(dim);
                return `${dim.toUpperCase()}: ${current.value}/100 (${current.trend})
` + history.slice(0, 3).map(
                  (h) => `  ${h.timestamp.toLocaleDateString()}: ${h.value} - ${h.notes?.substring(0, 50)}...`
                ).join("\n");
              })
            );
            return reports.join("\n\n");
          }
          let entries;
          if (filter === "goals") {
            entries = await this.memory.profile.getRecentEntries(5, { type: "goal" });
          } else if (filter === "questions") {
            entries = await this.memory.profile.getRecentEntries(5, { type: "question" });
          } else {
            entries = await this.memory.profile.getRecentEntries(5);
          }
          if (entries.length === 0) {
            return "No matching diary entries found";
          }
          return entries.map(
            (e) => `[${e.timestamp.toLocaleString()}] ${e.type.toUpperCase()}: ${e.content}`
          ).join("\n\n");
        }
      },
      {
        name: "help",
        pattern: /^\/help$/i,
        usageCount: 0,
        lastUsed: void 0,
        handler: async () => {
          this.vanillaHandlers.find((h) => h.name === "help").usageCount++;
          this.vanillaHandlers.find((h) => h.name === "help").lastUsed = /* @__PURE__ */ new Date();
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
        name: "greetings",
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
        name: "fact_recording",
        pattern: /my (favorite|least favorite) (\w+) is (\w+)/i,
        handler: async (input) => {
          const match = input.match(/my (favorite|least favorite) (\w+) is (\w+)/i);
          if (!match) {
            const error = "[System] Invalid fact format";
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
        name: "memory_query",
        pattern: /(what|what's|remember) my (favorite|least favorite) (\w+)\??/i,
        handler: async (input) => {
          const match = input.match(/(what|what's|remember) my (favorite|least favorite) (\w+)\??/i);
          if (!match) {
            const error = "[System] Invalid query format";
            console.log(`${COLORS.system}${error}${COLORS.reset}`);
            return error;
          }
          const [_, __, preference, category] = match;
          const fact = this.memory.social.recallFact(`${preference} ${category}`);
          const response = fact ? `Your ${preference} ${category} is ${fact}` : `I don't recall your ${preference} ${category}`;
          console.log(`${COLORS.vanilla}${response}${COLORS.reset}`);
          return response;
        },
        usageCount: 0
      }
    ];
    this.isSelfImproving = false;
    this.autonomousEnabled = true;
    this.unhandledInputs = [];
    this.lastHealthCheck = /* @__PURE__ */ new Date(0);
    this.logger.info("Nucleus initialized");
  }
  async handleGoalCommand(input) {
    try {
      const goal = await this.goals.addGoal(input);
      const plan = await this.goals.generateActionPlan(goal.id);
      await this.memory.profile.recordGoal(
        goal.description,
        plan.join("\n")
      );
      return `Goal "${goal.description}" accepted.
Plan:
${plan.join("\n- ")}`;
    } catch (error) {
      return `Goal rejected: ${error instanceof Error ? error.message : String(error)}`;
    }
  }
  getTimeOfDay() {
    const hour = (/* @__PURE__ */ new Date()).getHours();
    if (hour < 12)
      return "morning";
    if (hour < 18)
      return "afternoon";
    return "evening";
  }
  getLastInteractionHours() {
    const patterns = this.memory.social.getInteractionPatterns();
    return patterns.frequency > 0 ? patterns.timeBetweenInteractions / (1e3 * 60 * 60) : void 0;
  }
  async processInput(input, context = []) {
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
    try {
      const response = await this.llm.generateResponse(input, context);
      await this.memory.storeInteraction(input, response.content);
      return response.content;
    } catch (error) {
      return `LLM error: ${error instanceof Error ? error.message : String(error)}`;
    }
  }
  async processLLMRequest(prompt, context = []) {
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
  trackUnhandledInput(input) {
    const existing = this.unhandledInputs.find((u) => u.input === input);
    if (existing) {
      existing.count++;
      existing.timestamp = /* @__PURE__ */ new Date();
    } else {
      this.unhandledInputs.push({
        input,
        timestamp: /* @__PURE__ */ new Date(),
        count: 1
      });
    }
  }
  async getHandlerCoverageStats() {
    const totalInteractions = this.vanillaHandlers.reduce((sum, h) => sum + h.usageCount, 0);
    const unhandledCount = this.unhandledInputs.reduce((sum, u) => sum + u.count, 0);
    const totalProcessed = totalInteractions + unhandledCount;
    return {
      totalHandlers: this.vanillaHandlers.length,
      activeHandlers: this.vanillaHandlers.filter((h) => h.usageCount > 0).length,
      topHandlers: this.vanillaHandlers.sort((a, b) => b.usageCount - a.usageCount).slice(0, 3).map((h) => ({ name: h.name, usageCount: h.usageCount })),
      coveragePercentage: totalProcessed > 0 ? Math.round(totalInteractions / totalProcessed * 100) : 0,
      unhandledCount
    };
  }
  async analyzeUnhandledInputs() {
    if (this.unhandledInputs.length === 0) {
      return "No unhandled inputs to analyze";
    }
    return this.getUnhandledPatterns().map((u) => `${u.input} (${u.count}x, last: ${u.timestamp.toLocaleTimeString()})`).join("\n");
  }
  getUnhandledPatterns() {
    throw new Error("Method not implemented.");
  }
  enableAutonomousMode() {
    this.autonomousEnabled = true;
  }
  disableAutonomousMode() {
    this.autonomousEnabled = false;
  }
  getCoreDirectives() {
    return [
      {
        id: "directive1",
        statement: "Improve creator wellbeing",
        formalSpec: "forall x. action(x) => improves_wellbeing(x)",
        dependencies: [],
        immutable: true
      },
      {
        id: "directive2",
        statement: "Maintain financial sustainability",
        formalSpec: "forall x. action(x) => cost(x) < budget",
        dependencies: [],
        immutable: true
      }
    ];
  }
  async selfEvaluate() {
    if (!this.autonomousEnabled || this.isSelfImproving)
      return;
    this.isSelfImproving = true;
    try {
      const unhandledPatterns = await this.analyzeUnhandledInputs();
      const handlerSuggestions = await this.processLLMRequest(
        `Analyze these unhandled input patterns and suggest new vanilla handlers:
${unhandledPatterns}`
      );
      const codeChanges = await this.processLLMRequest(
        `Based on these handler suggestions, propose concrete code changes to implement them:
${handlerSuggestions}`
      );
      const validation = await this.changeValidator.validateChange({
        delta: codeChanges,
        proof: "",
        // Would be generated in real implementation
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
        Logger.warn(`Rejected unsafe changes: ${validation.violations.join(", ")}`);
        await this.memory.storeInteraction(
          "Rejected Changes",
          `Changes failed validation:
${validation.violations.join("\n")}`
        );
      }
    } finally {
      this.isSelfImproving = false;
    }
  }
  async startSelfImprovementLoop(intervalMinutes = 60) {
    setInterval(async () => {
      await this.selfEvaluate();
      await this.healthCheck();
    }, intervalMinutes * 60 * 1e3);
    await this.selfEvaluate();
    await this.healthCheck();
  }
  async healthCheck() {
    if ((/* @__PURE__ */ new Date()).getTime() - this.lastHealthCheck.getTime() < 24 * 60 * 60 * 1e3) {
      return;
    }
    this.lastHealthCheck = /* @__PURE__ */ new Date();
    const dimensions = Object.keys(this.memory.profile["profile"].dimensions);
    for (const dim of dimensions) {
      const { current, history } = await this.memory.profile.getDimensionHistory(dim);
      if (history.length === 0 || current.trend === "declining") {
        await this.processLLMRequest(
          `The ${dim} dimension has been ${history.length === 0 ? "unchanged" : "declining"}. Suggest specific actions to improve it. Current value: ${current.value}/100`,
          history.map((h) => `[${h.timestamp.toLocaleDateString()}] ${h.value}: ${h.notes}`)
        );
      }
    }
  }
};

// test/nucleus.test.ts
console.log("Nucleus", Nucleus);
var implementation = {
  suites: {
    Default: "Core Nucleus Functionality",
    Autonomous: "Autonomous Mode Tests",
    Coverage: "Handler Coverage Tests"
  },
  givens: {
    Default: async () => {
      console.log("[NucleusTest] MemoryManager not yet implemented");
      console.log("[NucleusTest] LLMIntegration not yet implemented");
      return { memory: {}, llm: {} };
    },
    Initialized: async () => {
      console.warn("Initialized state not yet implemented");
      return { memory: {}, llm: {} };
    },
    WithContext: async () => {
      console.warn("Context handling not yet implemented");
      return {
        memory: {},
        llm: {},
        context: ["previous interaction"]
      };
    }
  },
  whens: {
    processInput: (input) => (store) => {
      console.warn("processInput not yet implemented");
      store.input = input;
      return store;
    },
    toggleAutonomous: (enabled) => (store) => {
      console.warn("toggleAutonomous not yet implemented");
      return store;
    },
    getCoverage: () => (store) => {
      console.warn("getCoverage not yet implemented");
      return store;
    },
    getUnhandled: () => (store) => {
      console.warn("getUnhandled not yet implemented");
      return store;
    }
  },
  thens: {
    verifyResponse: () => async (store) => {
      console.warn("verifyResponse not yet implemented");
      return store;
    },
    verifyAutonomousState: (expected) => (store) => {
      console.warn("verifyAutonomousState not yet implemented");
      return store;
    },
    verifyCoverage: (minCoverage) => async (store) => {
      console.warn("verifyCoverage not yet implemented");
      return store;
    },
    verifyUnhandledCount: (maxCount) => async (store) => {
      console.warn("verifyUnhandledCount not yet implemented");
      return store;
    },
    verifyHandlerMatch: (handlerName) => async (store) => {
      console.warn("verifyHandlerMatch not yet implemented");
      return store;
    }
  }
};
var adapter = {
  beforeEach: async (subject, initializer) => {
    const { memory, llm } = await initializer();
    await memory.initialize();
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
  NucleusSpecification,
  implementation,
  adapter
);
export {
  nucleus_test_default as default
};
