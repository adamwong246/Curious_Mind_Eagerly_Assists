import Testeranto from "testeranto/src/Node";
import { Ibdd_in, Ibdd_out, ITestImplementation, ITestSpecification } from 'testeranto/src/CoreTypes';
import { MemoryManager } from '../src/memory';

type I = Ibdd_in<
  null,
  MemoryManager,
  { manager: MemoryManager, query: string },
  string[],
  () => MemoryManager,
  (store: { manager: MemoryManager, query: string }) => { manager: MemoryManager, query: string },
  (store: { manager: MemoryManager, query: string }) => { manager: MemoryManager, query: string }
>;

type O = Ibdd_out<
  { Default: ['MemoryManager Test Suite'] },
  { Default: [] },
  {
    storeMessage: [string, string];
    getContext: [string];
  },
  {
    verifyMessageCount: [number];
    verifyMessageContent: [string];
  }
>;

const implementation: ITestImplementation<I, O> = {
  suites: {
    Default: 'MemoryManager Test Suite'
  },
  givens: {
    Default: () => {
      const manager = new MemoryManager();
      return { manager, query: 'test query' };
    }
  },
  whens: {
    storeMessage: (input: string, output: string) => (store) => {
      store.manager.storeInteraction(input, output);
      return store;
    },
    getContext: (query: string) => (store) => {
      store.query = query;
      return store;
    }
  },
  thens: {
    verifyMessageCount: (expected: number) => (store) => {
      const actual = store.manager.getRelevantContext(store.query).length;
      if (actual !== expected) {
        throw new Error(`Expected ${expected} messages, got ${actual}`);
      }
      return store;
    },
    verifyMessageContent: (expected: string) => (store) => {
      const messages = store.manager.getRelevantContext(store.query);
      if (!messages.some(msg => msg.includes(expected))) {
        throw new Error(`Expected message containing "${expected}" not found`);
      }
      return store;
    }
  }
};

const specification: ITestSpecification<I, O> = (Suite, Given, When, Then) => [
  Suite.Default('Basic Operations', {
    emptyTest: Given.Default(
      ['Should start with empty memory'],
      [],
      [Then.verifyMessageCount(0)]
    ),
    storeTest: Given.Default(
      ['Should store messages'],
      [When.storeMessage('hello', 'hi there')],
      [Then.verifyMessageCount(1), Then.verifyMessageContent('hello')]
    ),
    contextTest: Given.Default(
      ['Should retrieve context'],
      [
        When.storeMessage('msg1', 'response1'),
        When.storeMessage('msg2', 'response2'),
        When.getContext('test')
      ],
      [Then.verifyMessageCount(2)]
    )
  })
];

const adapter = {
  beforeEach: async (subject, initializer) => {
    const manager = initializer();
    await manager.connect();
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
  specification,
  implementation,
  adapter,
)
