/**
 * Dimensions of wellbeing being tracked and optimized.
 * Used for goal-setting and metric tracking.
 */
export type WellbeingDimension = 
  | 'physical'      // Bodily health and functioning
  | 'emotional'     // Mood and affect regulation
  | 'social'        // Relationships and connections  
  | 'intellectual'  // Learning and cognitive growth
  | 'financial'     // Economic security
  | 'productivity'; // Task completion efficiency

export type CognitiveDomain =
  | 'memory'
  | 'reasoning'
  | 'creativity'
  | 'emotional'
  | 'self-monitoring'
  | 'goal-formation'
  | 'ethical';

export interface DiaryEntry {
  timestamp: Date;
  type: 'observation'|'reflection'|'goal'|'question'|'metric';
  author: 'ai'|'human';
  state: 'active'|'resolved'|'archived';
  priority: number;
  focus: CognitiveDomain[];
  content: string;
  related: string[]; // Timestamps of related entries
}

export interface Goal {
  id: string;
  description: string;
  formalSpec: string; // Z3-compatible logical definition
  priority: number; // 1-10 scale
  deadline?: Date;
  successConditions: string[];
  failureConditions: string[];
  progressMetrics: {
    current: number;
    target: number;
    unit: string; // "%", "count", "$", etc.
    trend?: number; // Rate of progress (-1 to 1)
    confidence?: number; // 0-1 likelihood of success
  };
  relatedEntries: string[]; // Linked diary entries
  dependencies: string[]; // Other goal IDs this depends on
  verificationProof?: string; // Z3 proof of achievability
  
  // Autonomous tracking
  lastEvaluated?: Date;
  evaluationFrequency?: number; // Hours between checks
  requiredResources?: {
    compute?: number;
    budget?: number;
    dependencies?: string[]; 
  };
  activeStrategies?: string[]; // Tactic IDs being used
  historicalStrategies?: {
    strategy: string;
    effectiveness: number;
    duration: number;
  }[];
}
