import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  EconomicVerifier
} from "../chunk-26K32GGO.mjs";
import {
  Node_default,
  init_cjs_shim
} from "../chunk-LFLTOQ4W.mjs";

// test/economicVerifier.test.ts
init_cjs_shim();

// test/specs/economicVerifier.spec.ts
init_cjs_shim();
var EconomicVerifierSpecification = (Suite, Given, When, Then) => [
  Suite.Default("Cost Analysis", {
    validTest: Given.Default(
      ["Should accept low-cost changes"],
      [When.analyzeCode("// Simple code change")],
      [Then.verifyAnalysis({
        isValid: true,
        violations: [],
        breakdown: {
          lines: 1,
          complexity: 1,
          apiCalls: 0,
          storageOps: 0,
          mlOps: 0
        }
      })]
    ),
    budgetEdgeTest: Given.Default(
      ["Should warn near budget threshold"],
      [When.analyzeCode(`// Large but valid change
${"x++;".repeat(500)}`)],
      [Then.verifyAnalysis({
        isValid: true,
        violations: [],
        warnings: ["High cost: 850 (85% of budget)"]
      })]
    ),
    complexTest: Given.Default(
      ["Should account for complexity"],
      [When.analyzeCode("if (x) { while(y) { z++; } }")],
      [Then.verifyAnalysis({ isValid: true, violations: [] })]
    ),
    apiTest: Given.Default(
      ["Should detect API calls"],
      [When.analyzeCode("api.fetchData()")],
      [Then.verifyAnalysis({ isValid: true, violations: [] })]
    ),
    mlTest: Given.Default(
      ["Should detect ML operations"],
      [When.analyzeCode("model.predict(input)")],
      [Then.verifyAnalysis({ isValid: true, violations: [] })]
    ),
    expensiveTest: Given.Default(
      ["Should reject expensive changes"],
      [When.analyzeCode(`
        // Complex ML-heavy code
        ${"api.callExternal()\n".repeat(50)}
        ${"model.predict(x)\n".repeat(20)}
        while(true) { processData(); }
      `)],
      [Then.verifyAnalysis({
        isValid: false,
        violations: [
          "Estimated cost ${expected} exceeds budget 1000",
          "Estimated cost ${expected} exceeds reserve 500"
        ]
      })]
    )
  })
];

// test/economicVerifier.test.ts
var implementation = {
  suites: {
    Default: "Economic Verifier Test Suite"
  },
  givens: {
    Default: () => {
      const verifier = new EconomicVerifier(1e3, 500);
      return { verifier, code: "" };
    }
  },
  whens: {
    analyzeCode: (code) => (store) => {
      store.code = code;
      return store;
    }
  },
  thens: {
    verifyAnalysis: (expected) => async (store) => {
      const actual = await store.verifier.analyzeCostImpact(store.code);
      if (actual.isValid !== expected.isValid || actual.violations.toString() !== expected.violations.toString()) {
        throw new Error(`Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
      }
      return store;
    }
  }
};
var adapter = {
  beforeEach: async (subject, initializer) => {
    const verifier = initializer();
    return { verifier, code: "" };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {
  },
  beforeAll: async () => new EconomicVerifier(1e3, 500),
  assertThis: (x) => x
};
var economicVerifier_test_default = Node_default(
  EconomicVerifier.prototype,
  EconomicVerifierSpecification,
  implementation,
  adapter
);
export {
  economicVerifier_test_default as default
};
