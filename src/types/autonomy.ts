export interface AutonomousStrategy {
  id: string;
  description: string;
  applicableGoals: string[]; // Goal IDs or types
  activationConditions: string; // Z3 expression
  successProbability: number; // 0-1
  resourceRequirements: {
    compute: number;
    budget: number;
    time: number;
    dependencies: string[]; // Required capabilities
  };
  riskFactors: {
    safety: number; // 0-1
    privacy: number;
    stability: number;
    reputation: number;
  };
  constraints: {
    maxFrequency?: number; // Times per day
    cooldown?: number; // Hours between uses
    blackoutPeriods?: string[]; // Times when unavailable
  };
  monitoringRequirements: {
    metrics: string[];
    frequency: number; // Check every X hours
  };
  parameters?: Record<string, any>; // Strategy-specific configuration
  historicalPerformance?: {
    successRate: number;
    avgProgress: number;
    lastUsed: Date;
  };
}

export type StrategySelectionCriteria = {
  minSuccessProbability?: number;
  maxRiskFactor?: number;
  resourceLimits?: {
    compute?: number;
    budget?: number;
    time?: number;
  };
  requiredTags?: string[];
};

export interface GoalEvaluation {
  goalId: string;
  timestamp: Date;
  progress: number; // 0-1
  confidence: number; // 0-1
  recommendedActions: {
    strategy: string;
    rationale: string;
    expectedImpact: number;
  }[];
  resourceAllocation: {
    compute: number;
    budget: number;
    time: number;
  };
}

export interface AutonomousState {
  activeGoals: string[];
  resourceBudget: {
    remaining: {
      compute: number;
      budget: number;
      time: number;
    };
    total: {
      compute: number;
      budget: number;
      time: number;
    };
  };
  strategyHistory: {
    goalId: string;
    strategyId: string;
    startTime: Date;
    endTime?: Date;
    outcome?: number; // 0-1
  }[];
}
