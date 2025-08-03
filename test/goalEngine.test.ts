import { GoalEngineSpecification } from "./specs/goalEngine.spec";

import Testeranto from "testeranto/src/Node";
import { GoalEngine } from "../src/goalEngine";
import { IdentityEngine } from "../src/coreIdentityCalculus";
import { EconomicVerifier } from "../src/economicVerifier";
import { Ibdd_in, Ibdd_out, ITestImplementation, ITestSpecification } from "testeranto/src/CoreTypes";

// Define the test subject's interface
type I = Ibdd_in<
  null,
  GoalEngine,
  { engine: GoalEngine, goal?: string },
  { engine: GoalEngine, valid?: boolean },
  () => { engine: GoalEngine },
  (store: { engine: GoalEngine, goal?: string }) => { engine: GoalEngine, goal?: string },
  (store: { engine: GoalEngine, valid?: boolean }) => { engine: GoalEngine, valid?: boolean }
>;

// Define the test operations
type O = Ibdd_out<
  { Default: ["Goal Engine Test Suite"] },
  { Default: [] },
  {
    addGoal: [string];
    verifyGoal: [boolean];
  },
  {
    checkGoalValidity: [boolean];
  }
>;

const implementation: ITestImplementation<I, O> = {
  suites: {
    Default: "Goal Engine Test Suite"
  },
  givens: {
    Default: () => ({
      engine: new GoalEngine(
        new IdentityEngine([]),
        new EconomicVerifier(1000, 500)
      )
    }),
    WithDependency: () => ({
      engine: new GoalEngine(
        new IdentityEngine([]),
        new EconomicVerifier(1000, 500)
      ),
      parentGoal: {
        id: 'parent_goal',
        description: 'Parent goal',
        formalSpec: 'exists(parent_goal)',
        priority: 5,
        successConditions: [],
        failureConditions: [],
        progressMetrics: { current: 0, target: 100, unit: '%' },
        relatedEntries: [],
        dependencies: [],
        createdAt: new Date(),
        lastUpdated: new Date()
      }
    })
  },
  whens: {
    addGoal: (description: string, dependencies: string[] = []) => async (store) => {
      const goal = await store.engine.addGoal(description, dependencies);
      return { ...store, currentGoal: goal };
    },
    verifyGoal: (expected: boolean) => async (store) => {
      const goal = store.currentGoal || await store.engine.addGoal('test goal');
      const result = await store.engine.verifyGoal(goal);
      return { ...store, verificationResult: result };
    },
    updateProgress: (amount: number) => async (store) => {
      if (store.currentGoal) {
        store.currentGoal.progressMetrics.current = amount;
      }
      return store;
    }
  },
  thens: {
    checkGoalValidity: (expected: boolean) => (store) => {
      if (store.verificationResult?.valid !== expected) {
        throw new Error(`Expected validity ${expected} but got ${store.verificationResult?.valid}`);
      }
      return store;
    },
    verifyProgress: (expected: number) => (store) => {
      const progress = store.engine.getGoalProgress(store.currentGoal.id);
      if (progress !== expected) {
        throw new Error(`Expected progress ${expected} but got ${progress}`);
      }
      return store;
    },
    verifyDependencies: () => (store) => {
      if (!store.currentGoal?.dependencies) {
        throw new Error('Goal dependencies not defined');
      }
      return store;
    }
  }
};


const adapter = {
  beforeEach: async (subject, initializer) => {
    const engine = initializer();
    return { engine };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {},
  beforeAll: async () => new GoalEngine(new IdentityEngine([]), new EconomicVerifier(1000, 500)),
  assertThis: (x) => x
};

export default Testeranto(
  GoalEngine.prototype,
  GoalEngineSpecification,
  implementation,
  adapter
);
