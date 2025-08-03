export interface Directive {
  id: string;               // Cryptographic hash of signed content
  statement: string;        // Human-readable directive
  formalSpec: string;       // First-order logic representation  
  dependencies: string[];   // Other directive IDs this depends on
  immutable: boolean;       // Whether this can ever be modified
  signature: string;        // Digital signature of (statement + formalSpec)
  proofObligations: string[]; // Required properties to verify
}

export interface VerificationResult {
  success: boolean;
  violations: string[];
  proof?: string;
}

export interface CodeChange {
  delta: string;            // Git-style unified diff
  proof: string;            // Zero-knowledge proof of safety
  dependencies: {           // Formal specs of affected components
    added: string[];
    modified: string[];
    removed: string[];
  };
}

export interface ValidationResult {
  /** Overall validity of the change */
  isValid: boolean;
  
  /** Critical issues that must be fixed */
  violations: string[];
  
  /** Non-critical suggestions for improvement */  
  warnings: string[];
  
  details: {
    /** Formal proof results */
    identity: VerificationResult;
    
    /** Cost/benefit analysis */
    economics: EconomicAnalysis;
    
    /** Behavior consistency checks */
    behavior: BehaviorResult;
  };
}

/** Result of behavioral consistency checks */
export interface BehaviorResult {
  consistencyScore: number;
  deviationPatterns: string[];
  predictedImpact: {
    shortTerm: number;
    longTerm: number;
  };
}
