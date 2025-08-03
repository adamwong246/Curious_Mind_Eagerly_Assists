/**
 * Centralized type exports for the entire system.
 * 
 * Usage:
 * import { Goal, EconomicAnalysis } from './types/core'
 * 
 * Organization:
 * - Domain types: ./domain.ts (core business concepts)
 * - Economic types: ./economic.ts (financial systems)  
 * - Memory types: ./memory.ts (knowledge storage)
 * - LLM types: ./llm.ts (language model interactions)
 * - Social types: ./social.ts (agent relationships)
 * - Verification types: ./verification.ts (formal proofs)
 * - Autonomy types: ./autonomy.ts (self-directed behavior)
 */

// Core domain types
export * from './domain';

// Economic types 
export * from './economic';

// Memory types
export * from './memory';

// LLM types  
export * from './llm';

// Social types
export * from './social';

// Verification types
export * from './verification';

// Autonomy types
export type { 
  AutonomousStrategy, 
  GoalEvaluation, 
  AutonomousState,
  StrategySelectionCriteria 
} from './autonomy';
export type { 
  StrategyCatalog, 
  StrategyEvaluation, 
  StrategyAdjustment 
} from './strategies';
export type { 
  DecisionPoint, 
  DecisionLog, 
  DecisionOutcome 
} from './decisions';
export type {
  ProgressUpdate,
  GoalHealthCheck,
  StrategyEffectivenessReport
} from './evaluation';
