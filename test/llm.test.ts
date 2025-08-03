import { LLMSpecification } from "./specs/llm.spec";

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
    analyzeUnhandled: [string[]];
    suggestHandler: [string];
  },
  {
    verifyResponse: [];
    verifyResponseContent: [string];
    verifyAnalysis: [];
    verifyHandlerSuggestion: [];
  }
>;

const implementation: ITestImplementation<I, O> = {
  suites: {
    Default: 'LLMIntegration Test Suite'
  },
  givens: {
    Default: async () => {
      const llm = new LLMIntegration();
      // Stub initialization
      if (typeof llm.initialize === 'function') {
        await llm.initialize();
      }
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
    },
    analyzeUnhandled: (patterns: string[]) => (store) => {
      store.input = `Analyze these unhandled patterns:\n${patterns.join('\n')}`;
      return store;
    },
    suggestHandler: (pattern: string) => (store) => {
      store.input = `Suggest a handler for: ${pattern}`;
      return store;
    }
  },
  thens: {
    verifyResponse: () => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (typeof response !== 'string') {
        throw new Error(`Expected string response, got ${typeof response}`);
      }
      return store;
    },
    verifyResponseContent: (expected: string) => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (!response.includes(expected)) {
        throw new Error(`Response does not contain "${expected}"`);
      }
      return store;
    },
    verifyAnalysis: () => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (!response.includes('pattern') && !response.includes('handler')) {
        throw new Error('Analysis response missing pattern/handler suggestions');
      }
      return store;
    },
    verifyHandlerSuggestion: () => async (store) => {
      const response = await store.llm.generateResponse(store.input, store.context);
      if (!response.includes('pattern') || !response.includes('handler')) {
        throw new Error('Handler suggestion missing required components');
      }
      return store;
    }
  }
};


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
  LLMSpecification,
  implementation,
  adapter,
)
