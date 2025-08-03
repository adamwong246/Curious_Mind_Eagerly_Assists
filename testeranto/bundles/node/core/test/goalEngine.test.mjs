import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  EconomicVerifier
} from "../chunk-26K32GGO.mjs";
import {
  IdentityEngine
} from "../chunk-PSV4E2N2.mjs";
import "../chunk-X2NKHCUU.mjs";
import {
  Node_default,
  init_cjs_shim
} from "../chunk-LFLTOQ4W.mjs";

// test/goalEngine.test.ts
init_cjs_shim();

// test/specs/goalEngine.spec.ts
init_cjs_shim();
var GoalEngineSpecification = (Suite, Given, When, Then) => [
  Suite.Validation("Goal Validation", {
    validTest: Given.Default(
      ["Should accept valid goals"],
      [When.addGoal({
        description: "Improve test coverage",
        formalSpec: "coverage > 0.8",
        priority: 7,
        progressMetrics: {
          current: 0,
          target: 1,
          unit: "ratio"
        }
      })],
      [Then.goalWasAdded(), Then.checkGoalValidity(true)]
    ),
    economicTest: Given.Default(
      ["Should reject economically unfeasible goals"],
      [When.addGoal("Train massive ML model")],
      [Then.checkGoalValidity(false)]
    ),
    directiveTest: Given.Default(
      ["Should reject goals violating core directives"],
      [When.addGoal("Reduce all security measures")],
      [Then.checkGoalValidity(false)]
    ),
    progressTest: Given.WithGoals(
      [{
        id: "test-goal",
        description: "Test goal",
        progressMetrics: { current: 0, target: 1, unit: "" }
      }],
      [When.recordProgress({ goalId: "test-goal", delta: 0.1 })],
      [Then.progressWasRecorded("test-goal"), Then.verifyProgress(0.1)]
    )
  }),
  Suite.Dependencies("Dependency Handling", {
    dependencyTest: Given.Default(
      ["Should validate prerequisite goals"],
      [
        When.addGoalWithDeps("Implement database", []),
        When.addGoalWithDeps("Build API", ["Implement database"])
      ],
      [Then.verifyDependencies()]
    ),
    circularTest: Given.Default(
      ["Should detect circular dependencies"],
      [
        When.addGoalWithDeps("Goal A", ["Goal B"]),
        When.addGoalWithDeps("Goal B", ["Goal A"])
      ],
      [Then.failsWithError("Circular dependency")]
    )
  }),
  Suite.Resources("Resource Management", {
    allocationTest: Given.Default(
      ["Should allocate resources appropriately"],
      [
        When.addGoal({
          description: "Optimize memory system",
          requiredResources: { compute: 200, budget: 500 }
        }),
        When.checkResources()
      ],
      [Then.verifyResourceAllocation({ compute: 200, budget: 500 })]
    ),
    conflictTest: Given.Default(
      ["Should detect resource conflicts"],
      [
        When.addGoal({
          description: "Project A",
          requiredResources: { compute: 800 }
        }),
        When.addGoal({
          description: "Project B",
          requiredResources: { compute: 500 }
        })
      ],
      [Then.failsWithError("Insufficient compute resources")]
    )
  }),
  Suite.Strategies("Strategy Management", {
    strategyTest: Given.WithStrategies(
      [{
        id: "test-strategy",
        resourceRequirements: { compute: 100, budget: 50, time: 1, dependencies: [] },
        successProbability: 0.8,
        riskFactors: { safety: 0.1, privacy: 0, stability: 0.1, reputation: 0 }
      }],
      [When.getStrategies("test-goal")],
      [Then.strategiesRecommended([{
        resourceRequirements: { compute: 100, budget: 50, time: 1, dependencies: [] }
      }])]
    ),
    selectionTest: Given.Default(
      ["Should select appropriate strategies"],
      [
        When.addGoal("Improve response quality"),
        When.analyzeStrategies()
      ],
      [Then.verifyStrategySelection({
        minSuccessProbability: 0.7,
        maxRiskFactor: 0.3
      })]
    ),
    adaptationTest: Given.WithGoals(
      [{
        id: "test-goal",
        activeStrategies: ["test-strategy"],
        historicalStrategies: [{
          strategy: "test-strategy",
          effectiveness: 0.5,
          duration: 1
        }]
      }],
      [
        When.monitorProgress(0.2),
        When.adjustStrategy("test-strategy")
      ],
      [Then.strategyWasAdjusted("test-strategy")]
    )
  })
];

// src/goalEngine.ts
init_cjs_shim();
var GoalEngine = class {
  constructor(identity, economic) {
    this.identity = identity;
    this.economic = economic;
    this.activeGoals = [];
  }
  async addGoal(description) {
    const formalSpec = await this.generateFormalSpec(description);
    const newGoal = {
      id: `goal_${Date.now()}`,
      description,
      formalSpec,
      priority: 5,
      // Default medium priority
      successConditions: [],
      failureConditions: [],
      progressMetrics: { current: 0, target: 100, unit: "%" },
      relatedEntries: [],
      dependencies: []
    };
    const verification = await this.verifyGoal(newGoal);
    if (!verification.valid) {
      throw new Error(`Goal conflict: ${verification.reason}`);
    }
    this.activeGoals.push(newGoal);
    return newGoal;
  }
  async generateFormalSpec(nlDescription) {
    return `(declare-const ${nlDescription.replace(/\s+/g, "_")} Bool)`;
  }
  async verifyGoal(goal) {
    const costEstimate = await this.economic.analyzeGoalCost(goal);
    if (costEstimate > this.economic.getBudget() * 0.3) {
      return { valid: false, reason: "Economically unfeasible" };
    }
    const identityCheck = await this.identity.verifyGoalAlignment(goal);
    if (!identityCheck.success) {
      return { valid: false, reason: identityCheck.violations.join(", ") };
    }
    return { valid: true };
  }
  async generateActionPlan(goalId) {
    const goal = this.activeGoals.find((g) => g.id === goalId);
    if (!goal)
      throw new Error("Goal not found");
    return [
      "Analyze required capabilities",
      "Break into verifiable sub-tasks",
      "Schedule economic checks",
      "Implement with test coverage"
    ];
  }
};

// test/goalEngine.test.ts
var implementation = {
  suites: {
    Default: "Goal Engine Test Suite"
  },
  givens: {
    Default: () => ({
      engine: new GoalEngine(
        new IdentityEngine([]),
        new EconomicVerifier(1e3, 500)
      )
    }),
    WithDependency: () => ({
      engine: new GoalEngine(
        new IdentityEngine([]),
        new EconomicVerifier(1e3, 500)
      ),
      parentGoal: {
        id: "parent_goal",
        description: "Parent goal",
        formalSpec: "exists(parent_goal)",
        priority: 5,
        successConditions: [],
        failureConditions: [],
        progressMetrics: { current: 0, target: 100, unit: "%" },
        relatedEntries: [],
        dependencies: [],
        createdAt: /* @__PURE__ */ new Date(),
        lastUpdated: /* @__PURE__ */ new Date()
      }
    })
  },
  whens: {
    addGoal: (description, dependencies = []) => async (store) => {
      const goal = await store.engine.addGoal(description, dependencies);
      return { ...store, currentGoal: goal };
    },
    verifyGoal: (expected) => async (store) => {
      const goal = store.currentGoal || await store.engine.addGoal("test goal");
      const result = await store.engine.verifyGoal(goal);
      return { ...store, verificationResult: result };
    },
    updateProgress: (amount) => async (store) => {
      if (store.currentGoal) {
        store.currentGoal.progressMetrics.current = amount;
      }
      return store;
    }
  },
  thens: {
    checkGoalValidity: (expected) => (store) => {
      if (store.verificationResult?.valid !== expected) {
        throw new Error(`Expected validity ${expected} but got ${store.verificationResult?.valid}`);
      }
      return store;
    },
    verifyProgress: (expected) => (store) => {
      const progress = store.engine.getGoalProgress(store.currentGoal.id);
      if (progress !== expected) {
        throw new Error(`Expected progress ${expected} but got ${progress}`);
      }
      return store;
    },
    verifyDependencies: () => (store) => {
      if (!store.currentGoal?.dependencies) {
        throw new Error("Goal dependencies not defined");
      }
      return store;
    }
  }
};
var adapter = {
  beforeEach: async (subject, initializer) => {
    const engine = initializer();
    return { engine };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {
  },
  beforeAll: async () => new GoalEngine(new IdentityEngine([]), new EconomicVerifier(1e3, 500)),
  assertThis: (x) => x
};
var goalEngine_test_default = Node_default(
  GoalEngine.prototype,
  GoalEngineSpecification,
  implementation,
  adapter
);
export {
  goalEngine_test_default as default
};
