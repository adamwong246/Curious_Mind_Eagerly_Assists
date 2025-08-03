export interface EconomicAnalysis {
  estimatedCost: number;
  estimatedRevenue: number;
  budget: number;
  isValid: boolean;
  violations: string[];
  breakdown: Record<string, number>;
}

export interface CostEstimate {
  cost: number;
  revenue: number;
  breakdown: {
    lines: number;
    complexity: number;
    apiCalls: number;
    storageOps: number;
    mlOps: number;
  };
}
