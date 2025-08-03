import { ITestSpecification } from "testeranto/src/CoreTypes";
import { Ibdd_out } from "testeranto/src/CoreTypes";

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

export const EconomicVerifierSpecification: ITestSpecification<O> = (Suite, Given, When, Then) => [
  Suite.Default('Cost Analysis', {
    validTest: Given.Default(
      ['Should accept low-cost changes'],
      [When.analyzeCode('// Simple code change')],
      [Then.verifyAnalysis({ 
        isValid: true, 
        violations: [],
        breakdown: {
          lines: 1,
          complexity: 1,
          apiCalls: 0,
          storageOps: 0,
          mlOps: 0
        }
      })]
    ),

    budgetEdgeTest: Given.Default(
      ['Should warn near budget threshold'],
      [When.analyzeCode(`// Large but valid change\n${'x++;'.repeat(500)}`)],
      [Then.verifyAnalysis({
        isValid: true,
        violations: [],
        warnings: ['High cost: 850 (85% of budget)']
      })]
    ),
    complexTest: Given.Default(
      ['Should account for complexity'],
      [When.analyzeCode('if (x) { while(y) { z++; } }')],
      [Then.verifyAnalysis({ isValid: true, violations: [] })]
    ),
    apiTest: Given.Default(
      ['Should detect API calls'],
      [When.analyzeCode('api.fetchData()')],
      [Then.verifyAnalysis({ isValid: true, violations: [] })]
    ),
    mlTest: Given.Default(
      ['Should detect ML operations'],
      [When.analyzeCode('model.predict(input)')],
      [Then.verifyAnalysis({ isValid: true, violations: [] })]
    ),
    expensiveTest: Given.Default(
      ['Should reject expensive changes'],
      [When.analyzeCode(`
        // Complex ML-heavy code
        ${'api.callExternal()\n'.repeat(50)}
        ${'model.predict(x)\n'.repeat(20)}
        while(true) { processData(); }
      `)],
      [Then.verifyAnalysis({ 
        isValid: false, 
        violations: [
          'Estimated cost ${expected} exceeds budget 1000',
          'Estimated cost ${expected} exceeds reserve 500'
        ] 
      })]
    )
  })
];
