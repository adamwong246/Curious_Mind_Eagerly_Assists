import { createRequire } from 'module';const require = createRequire(import.meta.url);
import {
  MemoryManager
} from "../chunk-FNDFDSAX.mjs";
import "../chunk-X2NKHCUU.mjs";
import {
  Node_default,
  init_cjs_shim
} from "../chunk-LFLTOQ4W.mjs";

// test/memory.test.ts
init_cjs_shim();

// test/specs/memory.spec.ts
init_cjs_shim();
var MemorySpecification = (Suite, Given, When, Then) => [
  Suite.Default("Core Operations", {
    emptyTest: Given.Default(
      ["Should start with empty memory"],
      [],
      [Then.verifyStats()]
    ),
    storeTest: Given.Default(
      ["Should store interactions"],
      [When.storeInteraction("hello", "hi there")],
      [Then.verifyContextCount(1), Then.verifyContextContent("hello")]
    ),
    contextTest: Given.Default(
      ["Should retrieve context"],
      [
        When.storeInteraction("msg1", "response1"),
        When.storeInteraction("msg2", "response2"),
        When.getContext("test")
      ],
      [Then.verifyContextCount(2)]
    )
  }),
  Suite.Default("Web Scraping", {
    scrapeTest: Given.Default(
      ["Should scrape web pages"],
      [When.scrapePage("http://example.com")],
      [Then.verifyScrapeSuccess()]
    ),
    statsTest: Given.Default(
      ["Should get memory stats"],
      [When.getStats()],
      [Then.verifyStats()]
    ),
    contentTest: Given.Default(
      ["Should retrieve scraped content"],
      [
        When.scrapePage("http://example.com"),
        When.getScraped("http://example.com")
      ],
      [Then.verifyScrapedContent()]
    )
  })
];

// test/memory.test.ts
var implementation = {
  suites: {
    Default: "MemoryManager Test Suite"
  },
  givens: {
    Default: async () => {
      const manager = new MemoryManager();
      if (typeof manager.initialize === "function") {
        await manager.initialize();
      }
      return { manager, query: "test query" };
    }
  },
  whens: {
    storeInteraction: (input, output) => (store) => {
      store.manager.storeInteraction(input, output);
      return store;
    },
    getContext: (query) => (store) => {
      store.query = query;
      return store;
    },
    scrapePage: (url) => (store) => {
      store.url = url;
      return store;
    },
    getStats: () => (store) => store,
    getScraped: (url) => (store) => {
      store.url = url;
      return store;
    }
  },
  thens: {
    verifyContextCount: (expected) => async (store) => {
      const context = await store.manager.getRelevantContext(store.query);
      if (context.length !== expected) {
        throw new Error(`Expected ${expected} messages, got ${context.length}`);
      }
      return store;
    },
    verifyContextContent: (expected) => (store) => {
      const messages = store.manager.getRelevantContext(store.query);
      if (!messages.some((msg) => msg.includes(expected))) {
        throw new Error(`Expected message containing "${expected}" not found`);
      }
      return store;
    },
    verifyScrapeSuccess: () => async (store) => {
      if (!store.url)
        throw new Error("No URL specified");
      const success = await store.manager.scrapeAndStoreWebpage(store.url);
      if (!success) {
        throw new Error("Scrape failed");
      }
      return store;
    },
    verifyStats: () => async (store) => {
      const stats = await store.manager.getMemoryStats();
      if (typeof stats.shortTerm !== "number") {
        throw new Error("Invalid stats returned");
      }
      return store;
    },
    verifyScrapedContent: (url) => async (store) => {
      const content = await store.manager.getScrapedContent(url);
      if (!Array.isArray(content)) {
        throw new Error("Invalid scraped content format");
      }
      return store;
    }
  }
};
var adapter = {
  beforeEach: async (subject, initializer) => {
    const manager = initializer();
    await manager.initialize();
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
  MemorySpecification,
  implementation,
  adapter
);
export {
  memory_test_default as default
};
