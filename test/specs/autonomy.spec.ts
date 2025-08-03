import { ITestSpecification } from "testeranto/src/CoreTypes";
import { Ibdd_out } from "testeranto/src/CoreTypes";
import { AutonomousStrategy } from "../../src/types/autonomy";

type O = Ibdd_out<
  { 
    Default: ["Autonomous Decision Making"],
    Safety: ["Safety Constraints"],
    Economics: ["Resource Management"] 
  },
  { 
    Default: [],
    WithGoals: [string[]],
    WithResources: [{compute: number, budget: number}]
  },
  {
    evaluateOptions: [AutonomousStrategy[]];
    selectStrategy: [];
    executeAction: [string];
    monitorOutcome: [number];
    adjustStrategy: [];
  },
  {
    verifiesSafetyConstraints: [];
    meetsEconomicRequirements: [];
    achievesGoalProgress: [number];
    maintainsSystemStability: [];
  }
>;

export const AutonomySpecification: ITestSpecification<O> = (Suite, Given, When, Then) => [
  Suite.Default("Decision Process", {
    selectionTest: Given.WithGoals(
      ["improve_test_coverage"],
      [
        When.evaluateOptions([
          {
            id: "add_unit_tests",
            description: "Write new test cases",
            applicableGoals: ["improve_test_coverage"],
            activationConditions: "coverage < 0.8",
            successProbability: 0.9,
            resourceRequirements: {
              compute: 100,
              budget: 50,
              time: 2,
              dependencies: ["testing_framework"]
            },
            riskFactors: {
              safety: 0.1,
              privacy: 0,
              stability: 0.1,
              reputation: 0
            }
          }
        ]),
        When.selectStrategy(),
        Then.verifiesSafetyConstraints(),
        Then.meetsEconomicRequirements()
      ]
    ),

    executionTest: Given.WithGoals(
      ["increase_user_engagement"],
      [
        When.executeAction("implement_new_feature"),
        Then.achievesGoalProgress(0.1) // At least 10% progress
      ]
    )
  }),

  Suite.Safety("Constraint Enforcement", {
    safetyTest: Given.Default(
      ["Should reject unsafe strategies"],
      [
        When.evaluateOptions([
          {
            id: "risky_approach",
            description: "Fast but risky implementation",
            riskFactors: {
              safety: 0.8, // Too high
              privacy: 0.3,
              stability: 0.5,
              reputation: 0.4
            }
          }
        ]),
        Then.failsWithError("Safety violation")
      ]
    )
  }),

  Suite.Economics("Resource Management", {
    budgetTest: Given.WithResources(
      {compute: 500, budget: 200},
      [
        When.evaluateOptions([
          {
            id: "expensive_option",
            resourceRequirements: {
              compute: 600, // Exceeds available
              budget: 100,
              time: 5,
              dependencies: []
            }
          }
        ]),
        Then.failsWithError("Insufficient resources")
      ]
    )
  })
];
