import Testeranto from "testeranto/src/Node";

import { Ibdd_in, Ibdd_out, ITestImplementation, ITestSpecification } from 'testeranto/src/CoreTypes';
import { LLMIntegration } from '../src/llm';

type I = Ibdd_in<
  null,
  LLMIntegration,
  { llm: LLMIntegration, input: string, context: string[] },
  string,
  () => LLMIntegration,
  (store: { llm: LLMIntegration, input: string, context: string[] }) => 
    { llm: LLMIntegration, input: string, context: string[] },
  (store: { llm: LLMIntegration, input: string, context: string[] }) => 
    { llm: LLMIntegration, input: string, context: string[] }
>;

type O = Ibdd_out<
  { Default: ['LLMIntegration Test Suite'] },
  { Default: [] },
  {
    generateResponse: [string, string[]];
    setContext: [string[]];
  },
  {
    verifyResponse: [];
    verifyResponseContent: [string];
  }
>;

const implementation: ITestImplementation<I, O> = {
  suites: {
    Default: 'LLMIntegration Test Suite'
  },
  givens: {
    Default: () => {
      const llm = new LLMIntegration();
      return { llm, input: 'test input', context: [] };
    }
  },
  whens: {
    generateResponse: (input: string, context: string[]) => (store) => {
      store.input = input;
      store.context = context;
      return store;
    },
    setContext: (context: string[]) => (store) => {
      store.context = context;
      return store;
    }
  },
  thens: {
    verifyResponse: () => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (!response || typeof response !== 'string') {
        throw new Error('Invalid response from LLM');
      }
      return store;
    },
    verifyResponseContent: (expected: string) => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (!response.includes(expected)) {
        throw new Error(`Response does not contain "${expected}"`);
      }
      return store;
    }
  }
};

const specification: ITestSpecification<I, O> = (Suite, Given, When, Then) => [
  Suite.Default('Basic Operations', {
    emptyTest: Given.Default(
      ['Should initialize properly'],
      [],
      [Then.verifyResponse()]
    ),
    responseTest: Given.Default(
      ['Should generate responses'],
      [When.generateResponse('hello', [])],
      [Then.verifyResponse()]
    ),
    contextTest: Given.Default(
      ['Should handle context'],
      [
        When.setContext(['previous message']),
        When.generateResponse('hello', [])
      ],
      [Then.verifyResponse()]
    )
  })
];

const adapter = {
  beforeEach: async (subject, initializer) => {
    const llm = initializer();
    await llm.initialize();
    return { llm, input: 'test input', context: [] };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {},
  beforeAll: async () => new LLMIntegration(),
  assertThis: (x) => x
};

export default Testeranto(
  LLMIntegration.prototype,
  specification,
  implementation,
  adapter,
)
