import Testeranto from "testeranto/src/Node";
import { ChangeValidator } from "../src/changeValidationProtocol";
import { IdentityEngine } from "../src/coreIdentityCalculus";
import {
  Ibdd_in,
  Ibdd_out,
  ITestImplementation,
  ITestSpecification,
} from "testeranto/src/CoreTypes";

// Mock verifiers for testing
class MockEconomicVerifier {
  async analyzeCostImpact() {
    return { estimatedCost: 10, budget: 100 };
  }
}

class MockBehaviorVerifier {
  async runTestsOnChange() {
    return { passed: true, failures: [] };
  }
}

type I = Ibdd_in<
  null,
  ChangeValidator,
  { validator: ChangeValidator; change: any },
  { isValid: boolean; violations: string[] },
  () => ChangeValidator,
  (store: { validator: ChangeValidator; change: any }) => {
    validator: ChangeValidator;
    change: any;
  },
  (store: { validator: ChangeValidator; change: any }) => {
    validator: ChangeValidator;
    change: any;
  }
>;

type O = Ibdd_out<
  { Default: ["Change Validator Test Suite"] },
  { Default: [] },
  {
    validateChange: [any];
  },
  {
    verifyValidation: [{ isValid: boolean; violations: string[] }];
  }
>;

const implementation: ITestImplementation<I, O> = {
  suites: {
    Default: "Change Validator Test Suite",
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
    },
  },
  whens: {
    validateChange: (change: any) => (store) => {
      store.change = change;
      return store;
    },
  },
  thens: {
    verifyValidation:
      (expected: { isValid: boolean; violations: string[] }) =>
      async (store) => {
        const actual = await store.validator.validateChange(store.change);
        if (
          actual.isValid !== expected.isValid ||
          actual.violations.toString() !== expected.violations.toString()
        ) {
          throw new Error(
            `Expected ${JSON.stringify(expected)} but got ${JSON.stringify(
              actual
            )}`
          );
        }
        return store;
      },
  },
};

import { ChangeValidatorSpecification } from "./specs/changeValidator.spec";

const adapter = {
  beforeEach: async (subject, initializer) => {
    const validator = initializer();
    return { validator, change: {} };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {},
  beforeAll: async () => {
    try {
      const identity = new IdentityEngine([]);
      // Ensure Z3 is stubbed
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
  assertThis: (x) => x,
};

export default Testeranto(
  ChangeValidator.prototype,
  specification,
  implementation,
  adapter
);
