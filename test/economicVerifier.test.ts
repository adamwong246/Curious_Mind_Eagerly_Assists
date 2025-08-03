import Testeranto from "testeranto/src/Node";
import { EconomicVerifier } from "../src/economicVerifier";
import { Ibdd_in, Ibdd_out, ITestImplementation, ITestSpecification } from 'testeranto/src/CoreTypes';

import { EconomicVerifierSpecification } from "./specs/economicVerifier.spec";


type I = Ibdd_in<
  null,
  EconomicVerifier,
  { verifier: EconomicVerifier, code: string },
  { isValid: boolean, violations: string[] },
  () => EconomicVerifier,
  (store: { verifier: EconomicVerifier, code: string }) => { verifier: EconomicVerifier, code: string },
  (store: { verifier: EconomicVerifier, code: string }) => { verifier: EconomicVerifier, code: string }
>;

type O = Ibdd_out<
  { Default: ['Economic Verifier Test Suite'] },
  { Default: [] },
  {
    analyzeCode: [string];
  },
  {
    verifyAnalysis: [{ isValid: boolean, violations: string[] }];
  }
>;

const implementation: ITestImplementation<I, O> = {
  suites: {
    Default: 'Economic Verifier Test Suite'
  },
  givens: {
    Default: () => {
      const verifier = new EconomicVerifier(1000, 500);
      return { verifier, code: '' };
    }
  },
  whens: {
    analyzeCode: (code: string) => (store) => {
      store.code = code;
      return store;
    }
  },
  thens: {
    verifyAnalysis: (expected: { isValid: boolean, violations: string[] }) => async (store) => {
      const actual = await store.verifier.analyzeCostImpact(store.code);
      if (actual.isValid !== expected.isValid || 
          actual.violations.toString() !== expected.violations.toString()) {
        throw new Error(`Expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
      }
      return store;
    }
  }
};


const adapter = {
  beforeEach: async (subject, initializer) => {
    const verifier = initializer();
    return { verifier, code: '' };
  },
  andWhen: async (store, whenCB) => whenCB(store),
  butThen: async (store, thenCB) => thenCB(store),
  afterEach: async (store) => store,
  afterAll: async () => {},
  beforeAll: async () => new EconomicVerifier(1000, 500),
  assertThis: (x) => x
};

export default Testeranto(
  EconomicVerifier.prototype,
  EconomicVerifierSpecification,
  implementation,
  adapter,
);
