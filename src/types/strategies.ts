import type { AutonomousStrategy } from './autonomy';

export interface StrategyCatalog {
  [category: string]: AutonomousStrategy[];
}

export interface StrategyEvaluation {
  strategyId: string;
  score: number;
  factors: {
    goalAlignment: number;
    resourceEfficiency: number;
    riskProfile: number;
    historicalSuccess: number;
  };
}

export interface StrategyAdjustment {
  strategyId: string;
  adjustment: 'increase'|'decrease'|'replace';
  reason: string;
  newParameters?: Record<string, any>;
}
