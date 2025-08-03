import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  LLMIntegration
} from "../chunk-VLEWZBUB.mjs";
import "../chunk-X2NKHCUU.mjs";
import {
  Node_default,
  init_cjs_shim
} from "../chunk-LFLTOQ4W.mjs";

// test/llm.test.ts
init_cjs_shim();

// test/specs/llm.spec.ts
init_cjs_shim();
var LLMSpecification = (Suite, Given, When, Then) => [
  Suite.Default("Core Operations", {
    initTest: Given.Default(
      ["Should initialize properly"],
      [],
      [Then.verifyResponse()]
    ),
    responseTest: Given.Default(
      ["Should generate responses"],
      [When.generateResponse("hello", [])],
      [Then.verifyResponse()]
    ),
    contextTest: Given.Default(
      ["Should handle context"],
      [
        When.setContext(["previous message"]),
        When.generateResponse("hello", [])
      ],
      [Then.verifyResponse()]
    )
  }),
  Suite.Default("Self-Improvement", {
    analysisTest: Given.Default(
      ["Should analyze unhandled patterns"],
      [When.analyzeUnhandled(["unknown command"])],
      [Then.verifyAnalysis()]
    ),
    handlerTest: Given.Default(
      ["Should suggest handlers"],
      [When.suggestHandler("how are you")],
      [Then.verifyHandlerSuggestion()]
    )
  })
];

// test/llm.test.ts
var implementation = {
  suites: {
    Default: "LLMIntegration Test Suite"
  },
  givens: {
    Default: async () => {
      const llm = new LLMIntegration();
      if (typeof llm.initialize === "function") {
        await llm.initialize();
      }
      return { llm, input: "test input", context: [] };
    }
  },
  whens: {
    generateResponse: (input, context) => (store) => {
      store.input = input;
      store.context = context;
      return store;
    },
    setContext: (context) => (store) => {
      store.context = context;
      return store;
    },
    analyzeUnhandled: (patterns) => (store) => {
      store.input = `Analyze these unhandled patterns:
${patterns.join("\n")}`;
      return store;
    },
    suggestHandler: (pattern) => (store) => {
      store.input = `Suggest a handler for: ${pattern}`;
      return store;
    }
  },
  thens: {
    verifyResponse: () => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (typeof response !== "string") {
        throw new Error(`Expected string response, got ${typeof response}`);
      }
      return store;
    },
    verifyResponseContent: (expected) => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (!response.includes(expected)) {
        throw new Error(`Response does not contain "${expected}"`);
      }
      return store;
    },
    verifyAnalysis: () => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (!response.includes("pattern") && !response.includes("handler")) {
        throw new Error("Analysis response missing pattern/handler suggestions");
      }
      return store;
    },
    verifyHandlerSuggestion: () => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (!response.includes("pattern") || !response.includes("handler")) {
        throw new Error("Handler suggestion missing required components");
      }
      return store;
    }
  }
};
var adapter = {
  beforeEach: async (subject, initializer) => {
    const llm = initializer();
    await llm.initialize();
    return { llm, input: "test input", context: [] };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {
  },
  beforeAll: async () => new LLMIntegration(),
  assertThis: (x) => x
};
var llm_test_default = Node_default(
  LLMIntegration.prototype,
  LLMSpecification,
  implementation,
  adapter
);
export {
  llm_test_default as default
};
