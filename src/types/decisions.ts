import type { AutonomousStrategy } from './autonomy';

export interface DecisionPoint {
  timestamp: Date;
  goalId: string;
  options: AutonomousStrategy[];
  selected?: string;
  rationale?: string;
}

export interface DecisionLog {
  decisions: DecisionPoint[];
  outcomes: DecisionOutcome[];
}

export interface DecisionOutcome {
  decisionId: string;
  success: boolean;
  progressImpact: number;
  resourceUsage: {
    compute: number;
    budget: number;
    time: number;
  };
  lessonsLearned?: string;
}
