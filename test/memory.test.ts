import { MemorySpecification } from "./specs/memory.spec";

import Testeranto from "testeranto/src/Node";
import { Ibdd_in, Ibdd_out, ITestImplementation, ITestSpecification } from 'testeranto/src/CoreTypes';
import { MemoryManager } from '../src/memory';

type I = Ibdd_in<
  null,
  MemoryManager,
  { manager: MemoryManager, query: string, url?: string },
  string[] | boolean,
  () => MemoryManager,
  (store: { manager: MemoryManager, query: string, url?: string }) => 
    { manager: MemoryManager, query: string, url?: string },
  (store: { manager: MemoryManager, query: string, url?: string }) => 
    { manager: MemoryManager, query: string, url?: string }
>;

type O = Ibdd_out<
  { Default: ['MemoryManager Test Suite'] },
  { Default: [] },
  {
    storeInteraction: [string, string];
    getContext: [string];
    scrapePage: [string];
    getStats: [];
    getScraped: [string?];
  },
  {
    verifyContextCount: [number];
    verifyContextContent: [string];
    verifyScrapeSuccess: [];
    verifyStats: [];
    verifyScrapedContent: [string?];
  }
>;

const implementation: ITestImplementation<I, O> = {
  suites: {
    Default: 'MemoryManager Test Suite'
  },
  givens: {
    Default: async () => {
      const manager = new MemoryManager();
      // Stub initialization
      if (typeof manager.initialize === 'function') {
        await manager.initialize();
      }
      return { manager, query: 'test query' };
    }
  },
  whens: {
    storeInteraction: (input: string, output: string) => (store) => {
      store.manager.storeInteraction(input, output);
      return store;
    },
    getContext: (query: string) => (store) => {
      store.query = query;
      return store;
    },
    scrapePage: (url: string) => (store) => {
      store.url = url;
      return store;
    },
    getStats: () => (store) => store,
    getScraped: (url?: string) => (store) => {
      store.url = url;
      return store;
    }
  },
  thens: {
    verifyContextCount: (expected: number) => async (store) => {
      const context = await store.manager.getRelevantContext(store.query);
      if (context.length !== expected) {
        throw new Error(`Expected ${expected} messages, got ${context.length}`);
      }
      return store;
    },
    verifyContextContent: (expected: string) => (store) => {
      const messages = store.manager.getRelevantContext(store.query);
      if (!messages.some(msg => msg.includes(expected))) {
        throw new Error(`Expected message containing "${expected}" not found`);
      }
      return store;
    },
    verifyScrapeSuccess: () => async (store) => {
      if (!store.url) throw new Error('No URL specified');
      const success = await store.manager.scrapeAndStoreWebpage(store.url);
      if (!success) {
        throw new Error('Scrape failed');
      }
      return store;
    },
    verifyStats: () => async (store) => {
      const stats = await store.manager.getMemoryStats();
      if (typeof stats.shortTerm !== 'number') {
        throw new Error('Invalid stats returned');
      }
      return store;
    },
    verifyScrapedContent: (url?: string) => async (store) => {
      const content = await store.manager.getScrapedContent(url);
      if (!Array.isArray(content)) {
        throw new Error('Invalid scraped content format');
      }
      return store;
    }
  }
};


const adapter = {
  beforeEach: async (subject, initializer) => {
    const manager = initializer();
    await manager.initialize();
    return { manager, query: 'test query' };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {},
  beforeAll: async () => new MemoryManager(),
  assertThis: (x) => x
};

export default Testeranto(
  MemoryManager.prototype,
  MemorySpecification,
  implementation,
  adapter,
)
