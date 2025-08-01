type WellbeingDimension = 'physical'|'emotional'|'social'|'intellectual'|'financial'|'productivity';
type CognitiveDomain = 'memory'|'reasoning'|'creativity'|'emotional'|'self-monitoring'|'goal-formation'|'ethical';

interface DiaryEntry {
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

export class ProfileManager {
  private profile: {
    owner: 'ai'|'human';
    dimensions: Record<WellbeingDimension, WellbeingMetric>;
    traits: Record<string, string>;
    goals: Goal[];
    diaryEntries: DiaryEntry[];
  };

  constructor() {
    this.profile = {
      dimensions: {
        physical: { value: 50, lastUpdated: new Date(), trend: 'stable' },
        emotional: { value: 50, lastUpdated: new Date(), trend: 'stable' },
        social: { value: 50, lastUpdated: new Date(), trend: 'stable' },
        intellectual: { value: 50, lastUpdated: new Date(), trend: 'stable' },
        financial: { value: 50, lastUpdated: new Date(), trend: 'stable' },
        productivity: { value: 50, lastUpdated: new Date(), trend: 'stable' }
      },
      traits: {},
      preferences: {},
      goals: []
    };
  }

  async updateDimension(
    dimension: keyof ProfileDimension,
    value: number,
    notes?: string
  ): Promise<void> {
    const current = this.profile.dimensions[dimension];
    const trend = 
      value > current.value ? 'improving' :
      value < current.value ? 'declining' : 'stable';

    this.profile.dimensions[dimension] = {
      value,
      lastUpdated: new Date(),
      trend
    };

    if (notes) {
      this.recordObservation(`${dimension} update: ${notes}`);
    }
  }

  async recordObservation(observation: string): Promise<void> {
    const entry: DiaryEntry = {
      timestamp: new Date(),
      type: 'observation',
      author: 'ai',
      state: 'active',
      priority: 3,
      focus: ['self-monitoring'],
      content: observation,
      related: []
    };
    this.profile.diaryEntries.push(entry);
  }

  getSocialContext(): string[] {
    const skills = this.profile.traits.social_skills || {};
    return [
      `Social skills: ${Object.entries(skills)
        .map(([k,v]) => `${k}:${v}`)
        .join(', ')}`,
      `Recent topics: ${this.social?.getRecentTopics().join(', ') || 'none'}`
    ];
  }

  async getProfileSnapshot(): Promise<string> {
    const dimensions = Object.entries(this.profile.dimensions)
      .map(([key, metric]) => 
        `${key}: ${metric.value}/100 (${metric.trend}, last updated ${metric.lastUpdated.toLocaleDateString()})`
      )
      .join('\n');

    return `Adam Wong's Profile Snapshot:
    
Health Dimensions:
${dimensions}

Key Traits:
${Object.entries(this.profile.traits).map(([k,v]) => `- ${k}: ${v}`).join('\n')}

Current Goals:
${this.profile.goals.map(g => `- ${g}`).join('\n')}`;
  }

  // TODO: Add methods for periodic health check-ins
  // TODO: Add integration with memory system
  // TODO: Add goal tracking
}
