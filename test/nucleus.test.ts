import Testeranto from "testeranto/src/Node";
import { Ibdd_in, Ibdd_out, ITestImplementation, ITestSpecification } from 'testeranto';
import { Nucleus } from '../src/nucleus';
import { MemoryManager } from '../src/memory';
import { LLMIntegration } from '../src/llm';

type I = Ibdd_in<
  null,
  { memory: MemoryManager, llm: LLMIntegration },
  { nucleus: Nucleus, input: string },
  string,
  () => { memory: MemoryManager, llm: LLMIntegration },
  (store: { nucleus: Nucleus, input: string }) => { nucleus: Nucleus, input: string },
  (store: { nucleus: Nucleus, input: string }) => { nucleus: Nucleus, input: string }
>;

type O = Ibdd_out<
  { Default: ['Nucleus Test Suite'] },
  { Default: [] },
  {
    processInput: [string];
    toggleAutonomous: [boolean];
  },
  {
    verifyResponse: [];
    verifyAutonomousState: [boolean];
  }
>;

const implementation: ITestImplementation<I, O> = {
  suites: {
    Default: 'Nucleus Test Suite'
  },
  givens: {
    Default: async () => {
      const memory = new MemoryManager();
      if (typeof memory.connect !== 'function') {
        throw new Error('Memory manager connect method missing');
      }
      await memory.connect();
      return {
        memory,
        llm: new LLMIntegration()
      };
    }
  },
  whens: {
    processInput: (input: string) => (store) => {
      store.input = input;
      return store;
    },
    toggleAutonomous: (enabled: boolean) => (store) => {
      store.nucleus[enabled ? 'enableAutonomousMode' : 'disableAutonomousMode']();
      return store;
    }
  },
  thens: {
    verifyResponse: () => async (store) => {
      const response = await store.nucleus.processInput(store.input);
      if (!response || typeof response !== 'string') {
        throw new Error('Invalid response from Nucleus');
      }
      return store;
    },
    verifyAutonomousState: (expected: boolean) => (store) => {
      const actual = store.nucleus['autonomousEnabled'];
      if (actual !== expected) {
        throw new Error(`Expected autonomous=${expected}, got ${actual}`);
      }
      return store;
    }
  }
};

const specification: ITestSpecification<I, O> = (Suite, Given, When, Then) => [
  Suite.Default('Initialization', {
    basicTest: Given.Default(
      ['Should initialize successfully'],
      [],
      []
    )
  })
];

const adapter = {
  beforeEach: async (subject, initializer) => {
    const { memory, llm } = await initializer(); // Wait for initialization
    if (!memory || typeof memory.connect !== 'function') {
      throw new Error('Memory manager not properly initialized');
    }
    await memory.connect();
    return { 
      nucleus: new Nucleus(memory, llm),
      input: 'test input'
    };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {},
  beforeAll: async () => ({
    memory: new MemoryManager(),
    llm: new LLMIntegration()
  }),
  assertThis: (x) => x
};


export default Testeranto(
  Nucleus.prototype,
  specification,
  implementation,
  adapter,
)
