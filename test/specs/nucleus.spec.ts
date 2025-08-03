import { ITestSpecification } from "testeranto/src/CoreTypes";
import { Ibdd_out } from "testeranto/src/CoreTypes";

type O = Ibdd_out<
  { 
    Default: ["Core Nucleus Functionality"],
    Autonomous: ["Autonomous Mode Tests"],
    Coverage: ["Handler Coverage Tests"] 
  },
  { 
    Default: [],
    Initialized: ["With initialized components"],
    WithContext: ["With conversation context"] 
  },
  {
    processInput: [string, string[]?];
    toggleAutonomous: [boolean];
    getCoverage: [];
    getUnhandled: [];
    setContext: [string[]];
  },
  {
    verifyResponse: [string?];
    verifyAutonomousState: [boolean];
    verifyCoverage: [number];
    verifyUnhandledCount: [number];
    verifyHandlerMatch: [string];
    verifyContextUsed: [boolean];
  }
>;

export const NucleusSpecification: ITestSpecification<O> = (Suite, Given, When, Then) => [
  Suite.Default("Core Functionality", {
    initTest: Given.Default(
      ["Should initialize with required components"],
      [],
      []
    ),
    helpTest: Given.Default(
      ["Should properly handle help command"],
      [When.processInput("/help")],
      [Then.verifyHandlerMatch("help"), Then.verifyResponse("Available commands")]
    ),
    contextTest: Given.WithContext(
      ["Should use conversation context when available"],
      [When.processInput("follow up", ["previous message"])],
      [Then.verifyContextUsed(true)]
    ),
  }),

  Suite.Autonomous("Autonomous Mode", {
    enableTest: Given.Default(
      ["Should enable autonomous mode"],
      [When.toggleAutonomous(true)],
      [Then.verifyAutonomousState(true)]
    ),
    disableTest: Given.Default(
      ["Should disable autonomous mode"],
      [When.toggleAutonomous(false)],
      [Then.verifyAutonomousState(false)]
    ),
  }),

  Suite.Coverage("Handler Coverage", {
    coverageTest: Given.Default(
      ["Should track handler coverage percentage"],
      [When.processInput("/help"), When.getCoverage()],
      [Then.verifyCoverage(1)]
    ),
    unhandledTest: Given.Default(
      ["Should track unhandled input patterns"],
      [When.processInput("unknown command"), When.getUnhandled()],
      [Then.verifyUnhandledCount(1)]
    ),
  }),
];
