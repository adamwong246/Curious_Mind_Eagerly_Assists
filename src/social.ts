export class SocialEngine {
  private personalFacts: Map<string, string> = new Map();
  private interactionHistory: Array<{
    timestamp: Date;
    content: string;
    sentiment?: number;
  }> = [];

  generateGreeting(timeOfDay: 'morning'|'afternoon'|'evening', lastInteractionHours?: number): string {
    const greetings = {
      morning: ["Good morning!", "Rise and shine!", "Morning to you!"],
      afternoon: ["Good afternoon!", "Hello there!", "Afternoon greetings!"], 
      evening: ["Good evening!", "Hi again!", "Evening to you!"]
    };
    
    const timeGreetings = greetings[timeOfDay];
    const baseGreeting = timeGreetings[Math.floor(Math.random() * timeGreetings.length)];
    
    if (lastInteractionHours === undefined) {
      return `${baseGreeting} How can I assist you today?`;
    }

    if (lastInteractionHours > 24) {
      const welcomeBackPhrases = [
        "It's been a while!",
        "Long time no see!",
        "Welcome back after your time away!"
      ];
      return `${welcomeBackPhrases[Math.floor(Math.random() * welcomeBackPhrases.length)]} ${baseGreeting}`;
    } else {
      const quickReturnPhrases = [
        "Back so soon?",
        "That was quick!",
        "You're keeping me busy today!"
      ];
      return `${quickReturnPhrases[Math.floor(Math.random() * quickReturnPhrases.length)]} ${baseGreeting}`;
    }
  }

  rememberPersonalFact(fact: {subject: string; detail: string, importance?: number}): void {
    this.personalFacts.set(fact.subject, fact.detail);
    this.recordInteraction(`Remembered fact: ${fact.subject}`);
  }

  recordInteraction(content: string, sentiment?: number): void {
    this.interactionHistory.push({
      timestamp: new Date(),
      content,
      sentiment
    });
    
    // Keep only last 100 interactions
    if (this.interactionHistory.length > 100) {
      this.interactionHistory.shift();
    }
  }

  recallFact(subject: string): string | undefined {
    return this.personalFacts.get(subject);
  }

  getInteractionPatterns(): {
    frequency: number;
    topics: string[];
    sentimentTrend: number;
    timeBetweenInteractions: number;
  } {
    const allText = this.interactionHistory
      .map(i => i.content)
      .join(' ')
      .toLowerCase();

    // Topic extraction
    const topics = allText.match(/\w+/g) || [];
    const frequency = topics.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Sentiment analysis (simple vanilla approach)
    const sentimentSum = this.interactionHistory.reduce((sum, i) => {
      return sum + (i.sentiment || 0);
    }, 0);
    const avgSentiment = this.interactionHistory.length > 0 ? 
      sentimentSum / this.interactionHistory.length : 0;

    // Time between interactions
    let avgTimeBetween = 0;
    if (this.interactionHistory.length > 1) {
      const times = this.interactionHistory
        .map(i => i.timestamp.getTime())
        .sort();
      const diffs = times.slice(1).map((t, i) => t - times[i]);
      avgTimeBetween = diffs.reduce((a, b) => a + b, 0) / diffs.length;
    }

    return {
      frequency: this.interactionHistory.length,
      topics: Object.entries(frequency)
        .sort((a,b) => b[1] - a[1])
        .slice(0,3)
        .map(([word]) => word),
      sentimentTrend: avgSentiment,
      timeBetweenInteractions: avgTimeBetween
    };
  }

  getRecentTopics(count = 3): string[] {
    const patterns = this.getInteractionPatterns();
    return patterns.topics.slice(0, count);
  }
}
