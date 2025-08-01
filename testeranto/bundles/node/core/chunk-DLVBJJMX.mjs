import { createRequire } from 'module';const require = createRequire(import.meta.url);

// src/profile.ts
var ProfileManager = class {
  constructor() {
    this.profile = {
      dimensions: {
        physical: { value: 50, lastUpdated: /* @__PURE__ */ new Date(), trend: "stable" },
        emotional: { value: 50, lastUpdated: /* @__PURE__ */ new Date(), trend: "stable" },
        social: { value: 50, lastUpdated: /* @__PURE__ */ new Date(), trend: "stable" },
        intellectual: { value: 50, lastUpdated: /* @__PURE__ */ new Date(), trend: "stable" },
        financial: { value: 50, lastUpdated: /* @__PURE__ */ new Date(), trend: "stable" },
        productivity: { value: 50, lastUpdated: /* @__PURE__ */ new Date(), trend: "stable" }
      },
      traits: {},
      preferences: {},
      goals: []
    };
  }
  async updateDimension(dimension, value, notes) {
    const current = this.profile.dimensions[dimension];
    const trend = value > current.value ? "improving" : value < current.value ? "declining" : "stable";
    this.profile.dimensions[dimension] = {
      value,
      lastUpdated: /* @__PURE__ */ new Date(),
      trend
    };
    if (notes) {
      this.recordObservation(`${dimension} update: ${notes}`);
    }
  }
  async recordObservation(observation) {
    const timestamped = `[${(/* @__PURE__ */ new Date()).toISOString()}] ${observation}`;
  }
  async getProfileSnapshot() {
    const dimensions = Object.entries(this.profile.dimensions).map(
      ([key, metric]) => `${key}: ${metric.value}/100 (${metric.trend}, last updated ${metric.lastUpdated.toLocaleDateString()})`
    ).join("\n");
    return `Adam Wong's Profile Snapshot:
    
Health Dimensions:
${dimensions}

Key Traits:
${Object.entries(this.profile.traits).map(([k, v]) => `- ${k}: ${v}`).join("\n")}

Current Goals:
${this.profile.goals.map((g) => `- ${g}`).join("\n")}`;
  }
  // TODO: Add methods for periodic health check-ins
  // TODO: Add integration with memory system
  // TODO: Add goal tracking
};

// src/memory.ts
var MemoryManager = class {
  constructor() {
    this.memory = [];
    this.autonomousEnabled = true;
    this.profile = new ProfileManager();
  }
  async initialize() {
    console.log("Initialized in-memory storage");
    return true;
  }
  isAutonomousEnabled() {
    return this.autonomousEnabled;
  }
  setAutonomousMode(enabled) {
    this.autonomousEnabled = enabled;
  }
  async getRelevantContext(query) {
    return this.memory.slice(-3);
  }
  async storeInteraction(input, output) {
    this.memory.push(`Input: ${input}
Output: ${output}`);
    if (this.memory.length > 10) {
      this.memory.shift();
    }
  }
};

export {
  MemoryManager
};
