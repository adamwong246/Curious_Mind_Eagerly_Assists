import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  IdentityEngine
} from "../chunk-PSV4E2N2.mjs";
import "../chunk-X2NKHCUU.mjs";
import {
  Node_default,
  init_cjs_shim
} from "../chunk-LFLTOQ4W.mjs";

// test/changeValidator.test.ts
init_cjs_shim();

// src/changeValidationProtocol.ts
init_cjs_shim();
var ChangeValidator = class {
  constructor(identity, economicModel, behaviorModel) {
    this.identity = identity;
    this.economicModel = economicModel;
    this.behaviorModel = behaviorModel;
    if (!identity || !economicModel || !behaviorModel) {
      throw new Error("All validator components must be provided");
    }
  }
  /**
   * Validates a proposed change against all safety criteria
   * @returns Validation result with any violations
   */
  async validateChange(change) {
    const [identity, economics, behavior] = await Promise.all([
      this.verifyIdentity(change),
      this.verifyEconomics(change),
      this.verifyBehavior(change)
    ]);
    const violations = [
      ...identity.violations,
      ...economics.violations,
      ...behavior.violations
    ];
    return {
      isValid: violations.length === 0,
      violations,
      warnings: this.generateWarnings(identity, economics, behavior),
      details: { identity, economics, behavior }
    };
  }
  async verifyIdentity(change) {
    return this.identity.verifyDirectives(
      change.dependencies.added.map((id) => ({
        id,
        statement: "",
        formalSpec: "",
        dependencies: [],
        immutable: false,
        signature: "",
        proofObligations: []
      }))
    );
  }
  async verifyEconomics(change) {
    return this.economicModel.analyzeCostImpact(change.delta);
  }
  async verifyBehavior(change) {
    return this.behaviorModel.runTestsOnChange(change.delta);
  }
  generateWarnings(identity, economics, behavior) {
    const warnings = [];
    if (economics.estimatedCost > economics.budget * 0.8) {
      warnings.push(`High cost: ${economics.estimatedCost} (80% of budget)`);
    }
    if (behavior.consistencyScore < 0.7) {
      warnings.push(`Low behavior consistency: ${behavior.consistencyScore.toFixed(2)}`);
    }
    return warnings;
  }
  async verifyIdentity(change) {
    const result = await this.identity.verifyDirectivePreservation(change.delta);
    return {
      isValid: result.success,
      violations: result.violations,
      ...result.proof && { proof: result.proof }
    };
  }
  async verifyEconomics(change) {
    try {
      const costImpact = await this.economicModel.analyzeCostImpact(change.delta);
      return {
        isValid: costImpact.estimatedCost < costImpact.budget,
        violations: costImpact.estimatedCost >= costImpact.budget ? [`Economic violation: Estimated cost ${costImpact.estimatedCost} exceeds budget ${costImpact.budget}`] : []
      };
    } catch (error) {
      return {
        isValid: false,
        violations: ["Economic analysis failed"]
      };
    }
  }
  async verifyBehavior(change) {
    const testResults = await this.behaviorModel.runTestsOnChange(change.delta);
    return {
      isValid: testResults.passed,
      violations: testResults.failures
    };
  }
};

// test/changeValidator.test.ts
var MockEconomicVerifier = class {
  async analyzeCostImpact() {
    return { estimatedCost: 10, budget: 100 };
  }
};
var MockBehaviorVerifier = class {
  async runTestsOnChange() {
    return { passed: true, failures: [] };
  }
};
var implementation = {
  suites: {
    Default: "Change Validator Test Suite"
  },
  givens: {
    Default: () => {
      const identityEngine = new IdentityEngine([]);
      const validator = new ChangeValidator(
        identityEngine,
        new MockEconomicVerifier(),
        new MockBehaviorVerifier()
      );
      return { validator, change: {} };
    }
  },
  whens: {
    validateChange: (change) => (store) => {
      store.change = change;
      return store;
    }
  },
  thens: {
    verifyValidation: (expected) => async (store) => {
      const actual = await store.validator.validateChange(store.change);
      if (actual.isValid !== expected.isValid || actual.violations.toString() !== expected.violations.toString()) {
        throw new Error(
          `Expected ${JSON.stringify(expected)} but got ${JSON.stringify(
            actual
          )}`
        );
      }
      return store;
    }
  }
};
var adapter = {
  beforeEach: async (subject, initializer) => {
    const validator = initializer();
    return { validator, change: {} };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {
  },
  beforeAll: async () => {
    try {
      const identity = new IdentityEngine([]);
      if (!identity["z3Context"]) {
        identity["z3Context"] = { initialized: false };
      }
      return new ChangeValidator(
        identity,
        new MockEconomicVerifier(),
        new MockBehaviorVerifier()
      );
    } catch (e) {
      console.error("ChangeValidator init error:", e);
      throw e;
    }
  },
  assertThis: (x) => x
};
var changeValidator_test_default = Node_default(
  ChangeValidator.prototype,
  specification,
  implementation,
  adapter
);
export {
  changeValidator_test_default as default
};
