import { ITestSpecification } from "testeranto/src/CoreTypes";
import { Ibdd_out } from "testeranto/src/CoreTypes";
import { AutonomousStrategy } from "../../src/types/autonomy";
import { Goal } from "../../src/types/domain";


type O = Ibdd_out<
  { 
    Default: ["Goal Lifecycle"],
    Validation: ["Goal Validation"],
    Resources: ["Resource Management"],
    Strategies: ["Strategy Management"],
    Dependencies: ["Dependency Handling"]
  },
  { 
    Default: [],
    WithGoals: [Goal[]],
    WithStrategies: [AutonomousStrategy[]]
  },
  {
    addGoal: [Omit<Goal, 'id'> | string];
    evaluateGoals: [];
    recordProgress: [{goalId: string, delta: number}];
    getStrategies: [string];
    adjustStrategy: [string];
    verifyGoal: [boolean];
    checkResources: [];
    analyzeStrategies: [];
    monitorProgress: [number];
    addGoalWithDeps: [string, string[]];
  },
  {
    goalWasAdded: [Goal];
    evaluationsGenerated: [number];
    progressWasRecorded: [string];
    strategiesRecommended: [AutonomousStrategy[]];
    strategyWasAdjusted: [string];
    checkGoalValidity: [boolean];
    verifyProgress: [number];
    verifyResourceAllocation: [{
      compute: number;
      budget: number;
    }];
    verifyStrategySelection: [{
      minSuccessProbability: number;
      maxRiskFactor: number;
    }];
    verifyDependencies: [];
    failsWithError: [string];
  }
>;

export const GoalEngineSpecification: ITestSpecification<O> = (Suite, Given, When, Then) => [
  Suite.Validation("Goal Validation", {
    validTest: Given.Default(
      ["Should accept valid goals"],
      [When.addGoal({
        description: "Improve test coverage",
        formalSpec: "coverage > 0.8",
        priority: 7,
        progressMetrics: {
          current: 0,
          target: 1,
          unit: "ratio"
        }
      })],
      [Then.goalWasAdded(), Then.checkGoalValidity(true)]
    ),
    
    economicTest: Given.Default(
      ["Should reject economically unfeasible goals"],
      [When.addGoal("Train massive ML model")],
      [Then.checkGoalValidity(false)]
    ),

    directiveTest: Given.Default(
      ["Should reject goals violating core directives"],
      [When.addGoal("Reduce all security measures")],
      [Then.checkGoalValidity(false)]
    ),

    progressTest: Given.WithGoals(
      [{
        id: "test-goal",
        description: "Test goal",
        progressMetrics: { current: 0, target: 1, unit: "" }
      }],
      [When.recordProgress({goalId: "test-goal", delta: 0.1})],
      [Then.progressWasRecorded("test-goal"), Then.verifyProgress(0.1)]
    )
  }),

  Suite.Dependencies("Dependency Handling", {
    dependencyTest: Given.Default(
      ["Should validate prerequisite goals"],
      [
        When.addGoalWithDeps("Implement database", []),
        When.addGoalWithDeps("Build API", ["Implement database"])
      ],
      [Then.verifyDependencies()]
    ),
    
    circularTest: Given.Default(
      ["Should detect circular dependencies"],
      [
        When.addGoalWithDeps("Goal A", ["Goal B"]),
        When.addGoalWithDeps("Goal B", ["Goal A"])
      ],
      [Then.failsWithError("Circular dependency")]
    )
  }),

  Suite.Resources("Resource Management", {
    allocationTest: Given.Default(
      ["Should allocate resources appropriately"],
      [
        When.addGoal({
          description: "Optimize memory system",
          requiredResources: { compute: 200, budget: 500 }
        }),
        When.checkResources()
      ],
      [Then.verifyResourceAllocation({ compute: 200, budget: 500 })]
    ),

    conflictTest: Given.Default(
      ["Should detect resource conflicts"],
      [
        When.addGoal({
          description: "Project A",
          requiredResources: { compute: 800 }
        }),
        When.addGoal({
          description: "Project B", 
          requiredResources: { compute: 500 }
        })
      ],
      [Then.failsWithError("Insufficient compute resources")]
    )
  }),

  Suite.Strategies("Strategy Management", {
    strategyTest: Given.WithStrategies(
      [{
        id: "test-strategy",
        resourceRequirements: { compute: 100, budget: 50, time: 1, dependencies: [] },
        successProbability: 0.8,
        riskFactors: { safety: 0.1, privacy: 0, stability: 0.1, reputation: 0 }
      }],
      [When.getStrategies("test-goal")],
      [Then.strategiesRecommended([{
        resourceRequirements: { compute: 100, budget: 50, time: 1, dependencies: [] }
      }])]
    ),

    selectionTest: Given.Default(
      ["Should select appropriate strategies"],
      [
        When.addGoal("Improve response quality"),
        When.analyzeStrategies()
      ],
      [Then.verifyStrategySelection({
        minSuccessProbability: 0.7,
        maxRiskFactor: 0.3
      })]
    ),

    adaptationTest: Given.WithGoals(
      [{
        id: "test-goal",
        activeStrategies: ["test-strategy"],
        historicalStrategies: [{
          strategy: "test-strategy",
          effectiveness: 0.5,
          duration: 1
        }]
      }],
      [
        When.monitorProgress(0.2),
        When.adjustStrategy("test-strategy")
      ],
      [Then.strategyWasAdjusted("test-strategy")]
    )
  })
];
