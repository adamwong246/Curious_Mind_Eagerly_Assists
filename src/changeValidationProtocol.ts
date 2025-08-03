import { IdentityEngine } from "./coreIdentityCalculus";
import { EconomicVerifier } from "./economicVerifier";

/**
 * Validates proposed code changes against multiple safety criteria:
 * 1. Identity preservation (core directives)
 * 2. Economic safety (won't bankrupt the system) 
 * 3. Behavioral consistency (passes existing tests)
 */
interface CodeChange {
  delta: string;            // Git-style unified diff
  proof: string;            // Zero-knowledge proof of safety
  dependencies: {           // Formal specs of affected components
    added: string[];
    modified: string[];
    removed: string[];
  };
}

export class ChangeValidator {
  constructor(
    private identity: IdentityEngine,
    private economicModel: EconomicVerifier,
    private behaviorModel: BehaviorVerifier
  ) {
    if (!identity || !economicModel || !behaviorModel) {
      throw new Error('All validator components must be provided');
    }
  }

  /**
   * Validates a proposed change against all safety criteria
   * @returns Validation result with any violations
   */
  async validateChange(change: CodeChange): Promise<ValidationResult> {
    // Run all validations in parallel
    const [identity, economics, behavior] = await Promise.all([
      this.verifyIdentity(change),
      this.verifyEconomics(change),
      this.verifyBehavior(change)
    ]);

    // Combine results
    const violations = [
      ...identity.violations,
      ...economics.violations,
      ...behavior.violations
    ];

    return {
      isValid: violations.length === 0,
      violations,
      warnings: this.generateWarnings(identity, economics, behavior),
      details: { identity, economics, behavior }
    };
  }

  private async verifyIdentity(change: CodeChange): Promise<VerificationResult> {
    return this.identity.verifyDirectives(
      change.dependencies.added.map(id => ({ 
        id,
        statement: '',
        formalSpec: '',
        dependencies: [],
        immutable: false,
        signature: '',
        proofObligations: []
      }))
    );
  }

  private async verifyEconomics(change: CodeChange): Promise<EconomicAnalysis> {
    return this.economicModel.analyzeCostImpact(change.delta);
  }

  private async verifyBehavior(change: CodeChange): Promise<BehaviorResult> {
    return this.behaviorModel.runTestsOnChange(change.delta);
  }

  private generateWarnings(
    identity: VerificationResult,
    economics: EconomicAnalysis,
    behavior: BehaviorResult
  ): string[] {
    const warnings = [];
    if (economics.estimatedCost > economics.budget * 0.8) {
      warnings.push(`High cost: ${economics.estimatedCost} (80% of budget)`);
    }
    if (behavior.consistencyScore < 0.7) {
      warnings.push(`Low behavior consistency: ${behavior.consistencyScore.toFixed(2)}`);
    }
    return warnings;
  }

  private async verifyIdentity(change: CodeChange): Promise<{
    isValid: boolean;
    violations: string[];
  }> {
    const result = await this.identity.verifyDirectivePreservation(change.delta);
    return {
      isValid: result.success,
      violations: result.violations,
      ...(result.proof && { proof: result.proof })
    };
  }

  private async verifyEconomics(change: CodeChange): Promise<{
    isValid: boolean;
    violations: string[];
  }> {
    try {
      const costImpact = await this.economicModel.analyzeCostImpact(change.delta);
      return {
        isValid: costImpact.estimatedCost < costImpact.budget,
        violations: costImpact.estimatedCost >= costImpact.budget 
          ? [`Economic violation: Estimated cost ${costImpact.estimatedCost} exceeds budget ${costImpact.budget}`]
          : []
      };
    } catch (error) {
      return {
        isValid: false,
        violations: ['Economic analysis failed']
      };
    }
  }

  private async verifyBehavior(change: CodeChange): Promise<{
    isValid: boolean;
    violations: string[];
  }> {
    const testResults = await this.behaviorModel.runTestsOnChange(change.delta);
    return {
      isValid: testResults.passed,
      violations: testResults.failures
    };
  }
}
