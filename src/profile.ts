import { CognitiveDomain } from "./types/core";


export class ProfileManager {
  timestamp: Date;
  type: 'observation'|'reflection'|'goal'|'question'|'metric';
  author: 'ai'|'human';
  state: 'active'|'resolved'|'archived';
  priority: number;
  focus: CognitiveDomain[];
  content: string;
  related: string[]; // Timestamps of related entries
}

interface WellbeingMetric {
  value: number;
  lastUpdated: Date;
  trend: 'improving'|'stable'|'declining';
  notes: string[]; // Linked diary entry timestamps
}

interface Goal {
  description: string;
  targetDate?: Date;
  progress: number;
  relatedEntries: string[]; // Diary entry timestamps
}
