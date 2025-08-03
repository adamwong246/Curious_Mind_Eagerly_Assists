import { ITestSpecification } from "testeranto/src/CoreTypes";
import { Ibdd_out } from "testeranto/src/CoreTypes";

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

export const LLMSpecification: ITestSpecification<O> = (Suite, Given, When, Then) => [
  Suite.Default('Core Operations', {
    initTest: Given.Default(
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
  }),
  Suite.Default('Self-Improvement', {
    analysisTest: Given.Default(
      ['Should analyze unhandled patterns'],
      [When.analyzeUnhandled(['unknown command'])],
      [Then.verifyAnalysis()]
    ),
    handlerTest: Given.Default(
      ['Should suggest handlers'],
      [When.suggestHandler('how are you')],
      [Then.verifyHandlerSuggestion()]
    )
  })
];
