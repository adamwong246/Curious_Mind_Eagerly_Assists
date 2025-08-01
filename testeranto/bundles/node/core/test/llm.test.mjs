import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  LLMIntegration
} from "../chunk-J73C7AW2.mjs";
import {
  Node_default
} from "../chunk-ONFOCOPL.mjs";

// test/llm.test.ts
var implementation = {
  suites: {
    Default: "LLMIntegration Test Suite"
  },
  givens: {
    Default: () => {
      const llm = new LLMIntegration();
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
    }
  },
  thens: {
    verifyResponse: () => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (!response || typeof response !== "string") {
        throw new Error("Invalid response from LLM");
      }
      return store;
    },
    verifyResponseContent: (expected) => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (!response.includes(expected)) {
        throw new Error(`Response does not contain "${expected}"`);
      }
      return store;
    }
  }
};
var specification = (Suite, Given, When, Then) => [
  Suite.Default("Basic Operations", {
    emptyTest: Given.Default(
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
  })
];
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
  specification,
  implementation,
  adapter
);
export {
  llm_test_default as default
};
