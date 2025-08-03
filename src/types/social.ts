export interface PersonalFact {
  subject: string;
  detail: string;
  importance?: number;
}

export interface Interaction {
  timestamp: Date;
  content: string;
  sentiment?: number;
}

export interface InteractionPatterns {
  frequency: number;
  topics: string[];
  sentimentTrend: number;
  timeBetweenInteractions: number;
}
