import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MemoryManager
} from "../chunk-DLVBJJMX.mjs";
import {
  Node_default
} from "../chunk-ONFOCOPL.mjs";

// test/memory.test.ts
var implementation = {
  suites: {
    Default: "MemoryManager Test Suite"
  },
  givens: {
    Default: () => {
      const manager = new MemoryManager();
      return { manager, query: "test query" };
    }
  },
  whens: {
    storeMessage: (input, output) => (store) => {
      store.manager.storeInteraction(input, output);
      return store;
    },
    getContext: (query) => (store) => {
      store.query = query;
      return store;
    }
  },
  thens: {
    verifyMessageCount: (expected) => (store) => {
      const actual = store.manager.getRelevantContext(store.query).length;
      if (actual !== expected) {
        throw new Error(`Expected ${expected} messages, got ${actual}`);
      }
      return store;
    },
    verifyMessageContent: (expected) => (store) => {
      const messages = store.manager.getRelevantContext(store.query);
      if (!messages.some((msg) => msg.includes(expected))) {
        throw new Error(`Expected message containing "${expected}" not found`);
      }
      return store;
    }
  }
};
var specification = (Suite, Given, When, Then) => [
  Suite.Default("Basic Operations", {
    emptyTest: Given.Default(
      ["Should start with empty memory"],
      [],
      [Then.verifyMessageCount(0)]
    ),
    storeTest: Given.Default(
      ["Should store messages"],
      [When.storeMessage("hello", "hi there")],
      [Then.verifyMessageCount(1), Then.verifyMessageContent("hello")]
    ),
    contextTest: Given.Default(
      ["Should retrieve context"],
      [
        When.storeMessage("msg1", "response1"),
        When.storeMessage("msg2", "response2"),
        When.getContext("test")
      ],
      [Then.verifyMessageCount(2)]
    )
  })
];
var adapter = {
  beforeEach: async (subject, initializer) => {
    const manager = initializer();
    await manager.connect();
    return { manager, query: "test query" };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {
  },
  beforeAll: async () => new MemoryManager(),
  assertThis: (x) => x
};
var memory_test_default = Node_default(
  MemoryManager.prototype,
  specification,
  implementation,
  adapter
);
export {
  memory_test_default as default
};
