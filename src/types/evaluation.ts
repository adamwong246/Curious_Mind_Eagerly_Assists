export interface ProgressUpdate {
  goalId: string;
  timestamp: Date;
  delta: number;
  unit: string;
  source: string; // What caused the progress
  confidenceImpact: number; // -1 to 1
}

export interface GoalHealthCheck {
  goalId: string;
  timestamp: Date;
  healthScore: number; // 0-1
  issues: {
    description: string;
    severity: 'low'|'medium'|'high';
    suggestedActions: string[];
  }[];
  resourceUtilization: {
    allocated: {
      compute: number;
      budget: number;
      time: number;
    };
    used: {
      compute: number;
      budget: number;
      time: number;
    };
  };
}

export interface StrategyEffectivenessReport {
  strategyId: string;
  goalId: string;
  periodStart: Date;
  periodEnd: Date;
  effectiveness: number; // 0-1
  progressAttributed: number;
  resourcesConsumed: {
    compute: number;
    budget: number;
    time: number;
  };
  recommendations: {
    adjustParameters?: Record<string, any>;
    frequencyAdjustment?: number;
    cooldownAdjustment?: number;
  };
}
