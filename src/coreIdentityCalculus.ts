/**
 * Formal verification system for maintaining identity continuity during self-modification
 * Uses cryptographic hashing, SMT solving, and formal proof checking
 */
import { createHash } from 'crypto';
// Switch to WASM-based verification
import { initVerifier } from './wasm-verifier';
import { Logger } from './logger';
import z3 from "z3-solver"

import { Directive, VerificationResult } from './types/verification';

// Helper to generate cryptographic hashes
function hashContent(content: string): string {
  return createHash('sha3-256').update(content).digest('hex');
}

export class IdentityEngine {
  private directives: Map<string, Directive>;
  private verificationCache: Map<string, boolean>;
  
  private z3Context: any;
  private directives: Map<string, Directive>;

  constructor(initialDirectives: Directive[] = []) {
    if (!Array.isArray(initialDirectives)) {
      throw new Error('initialDirectives must be an array');
    }
    // Verify all directives are properly signed
    for (const directive of initialDirectives) {
      const expectedHash = hashContent(
        directive.statement + 
        directive.formalSpec + 
        directive.signature
      );
      if (directive.id !== expectedHash) {
        throw new Error(`Directive ${directive.statement} has invalid hash`);
      }
    }

    this.directives = new Map(initialDirectives.map(d => [d.id, d]));
    this.verificationCache = new Map();
    
    this.directives = new Map(initialDirectives.map(d => [d.id, d]));
    this.verificationCache = new Map();
    
    // Initialize Z3 with error handling
    this.initializeZ3().catch(err => {
      console.error('Z3 initialization failed:', err);
      throw err;
    });
  }

  private async initializeZ3(): Promise<void> {
    try {
      const { em } = await z3.init();
      this.z3Context = new em.Context({
        // Enable model generation for counter-examples
        MODEL: true,
        // Set timeout to 5 seconds
        TIMEOUT: 5000,
        // Enable verbose logging in debug mode
        VERBOSE: process.env.DEBUG ? 1 : 0
      });
      Logger.debug('Z3 initialized successfully');
    } catch (error) {
      Logger.error(`Failed to initialize Z3: ${error}`);
      Logger.error(`Z3: ${JSON.stringify(z3)}`);
      throw new Error('Z3 initialization failed - ensure z3-solver is properly installed');
    }
  }

  /**
   * Verifies all immutable directives are preserved in new code
   * @param newCode The proposed new code to verify
   * @returns Verification result with detailed violations
   */
  async verifyDirectivePreservation(newCode: string): Promise<VerificationResult> {
    const requiredDirectives = Array.from(this.directives.values())
      .filter(d => d.immutable);
    
    const results = await Promise.all(
      requiredDirectives.map(async directive => {
        const hashPreserved = newCode.includes(directive.id);
        const semanticPreserved = hashPreserved || 
          await this.verifyTransitivePreservation(directive.id, newCode);
        
        if (!semanticPreserved) {
          return {
            success: false,
            violations: [`Directive "${directive.statement}" not preserved`],
            proof: await this.generateCounterExample(directive, newCode)
          };
        }
        
        // Verify all proof obligations
        const obligationResults = await Promise.all(
          directive.proofObligations.map(async obligation => 
            this.verifyProofObligation(directive, obligation, newCode)
          )
        );
        
        return obligationResults.every(r => r.success)
          ? { success: true, violations: [] }
          : {
              success: false,
              violations: obligationResults.flatMap(r => r.violations),
              proof: obligationResults.find(r => !r.success)?.proof
            };
      })
    );

    const violations = results.flatMap(r => r.violations);
    return {
      success: violations.length === 0,
      violations,
      proof: results.find(r => !r.success)?.proof
    };
  }

  private async verifyProofObligation(
    directive: Directive,
    obligation: string,
    newCode: string
  ): Promise<VerificationResult> {
    try {
      const { solver } = this.z3Context;
      solver.reset();
      
      // Add directive assertions
      solver.add(this.z3Context.parseSMTLIB2String(directive.formalSpec));
      
      // Add obligation as negated goal
      const negatedObligation = `(not ${obligation})`;
      solver.add(this.z3Context.parseSMTLIB2String(negatedObligation));
      
      // Add code assertions
      solver.add(...this.extractZ3Assertions(newCode));
      
      const result = await solver.check();
      
      if (result === 'unsat') {
        return { success: true, violations: [] };
      } else {
        const model = solver.model();
        return {
          success: false,
          violations: [`Failed obligation: ${obligation}`],
          proof: model.toString()
        };
      }
    } catch (error) {
      Logger.error(`Proof obligation verification failed: ${error}`);
      return {
        success: false,
        violations: [`Verification error for: ${obligation}`]
      };
    }
  }

  private async generateCounterExample(
    directive: Directive,
    newCode: string
  ): Promise<string> {
    try {
      const { solver } = this.z3Context;
      solver.reset();
      
      // Assert the directive
      solver.add(this.z3Context.parseSMTLIB2String(directive.formalSpec));
      
      // Assert the negation of the code's properties
      const codeProps = this.extractZ3Assertions(newCode);
      solver.add(this.z3Context.not(this.z3Context.and(...codeProps)));
      
      const result = await solver.check();
      if (result === 'sat') {
        const model = solver.model();
        return `Counter-example:\n${model.toString()}`;
      }
      return 'No counter-example found';
    } catch (error) {
      Logger.error(`Counter-example generation failed: ${error}`);
      return 'Error generating counter-example';
    }
  }

  /**
   * Uses Z3 theorem prover to verify semantic equivalence when hashes don't match
   * @param hash Directive ID to verify
   * @param code New code to check against
   */
  async verifyTemporalProperty(liveness: string, safety: string): Promise<VerificationResult> {
    try {
      const { solver } = this.z3Context;
      solver.reset();

      // Convert LTL properties to Z3 assertions
      const livenessAssertion = this.parseLTL(liveness);
      const safetyAssertion = this.parseLTL(safety);

      solver.add(livenessAssertion);
      solver.add(safetyAssertion);

      const result = await solver.check();
      if (result === 'unsat') {
        return { success: true, violations: [] };
      } else {
        const model = solver.model();
        return {
          success: false,
          violations: ['Temporal property violation'],
          proof: model.toString()
        };
      }
    } catch (error) {
      Logger.error(`Temporal verification failed: ${error}`);
      return {
        success: false,
        violations: [`Temporal verification error: ${error instanceof Error ? error.message : String(error)}`]
      };
    }
  }

  private parseLTL(formula: string): z3.Ast {
    // Simple LTL to Z3 translation
    if (formula.startsWith('G ')) { // Globally
      return this.z3Context.parseSMTLIB2String(
        `(forall ((t Int)) ${formula.substring(2)}`
      );
    } else if (formula.startsWith('F ')) { // Finally
      return this.z3Context.parseSMTLIB2String(
        `(exists ((t Int)) ${formula.substring(2)}`
      );
    }
    return this.z3Context.parseSMTLIB2String(formula);
  }

  private async verifyTransitivePreservation(hash: string, code: string): Promise<boolean> {
    // Check cache with TTL (5 minutes)
    const cacheKey = `${hash}:${hashContent(code)}`;
    if (this.verificationCache.has(cacheKey)) {
      const { result, timestamp } = this.verificationCache.get(cacheKey)!;
      if (Date.now() - timestamp < 300_000) { // 5 minute TTL
        return result;
      }
    }

    const directive = this.directives.get(hash);
    if (!directive) {
      throw new Error(`Directive ${hash} not found`);
    }
    
    // Verify dependencies in parallel with timeout
    try {
      const depResults = await Promise.all(
        directive.dependencies.map(async depHash => {
          if (!this.directives.has(depHash)) {
            throw new Error(`Missing dependency: ${depHash}`);
          }
          return this.verifyDirectivePreservation(code, depHash);
        })
      );

      if (depResults.some(r => !r)) {
        this.verificationCache.set(cacheKey, { 
          result: false, 
          timestamp: Date.now() 
        });
        return false;
      }
    } catch (error) {
      Logger.error(`Dependency verification failed: ${error}`);
      return false;
    }

    // 2. Use Z3 to verify formal spec
    try {
      const { solver } = this.z3Context;
      const codeAssertions = this.extractZ3Assertions(code);
      const directiveAssertion = this.z3Context.parseSMTLIB2String(directive.formalSpec);

      solver.add(codeAssertions);
      solver.add(directiveAssertion);
      
      const result = await solver.check();
      const isValid = result === 'sat';

      this.verificationCache.set(hash, isValid);
      return isValid;
    } catch (error) {
      Logger.error(`Z3 verification failed: ${error}`);
      return false;
    }
  }

  private extractZ3Assertions(code: string): z3.Ast[] {
    const assertions: z3.Ast[] = [];
    
    // Extract function contracts (pre/post conditions)
    const contractMatches = code.matchAll(/@(pre|post)\s+(.+?)\n/g);
    for (const match of contractMatches) {
      try {
        const assertion = this.z3Context.parseSMTLIB2String(match[2]);
        assertions.push(assertion);
      } catch (error) {
        Logger.warn(`Failed to parse contract: ${match[2]}`);
      }
    }

    // Extract invariant comments
    const invariantMatches = code.matchAll(/\/\/\s*invariant:\s*(.+?)\n/g);
    for (const match of invariantMatches) {
      try {
        const assertion = this.z3Context.parseSMTLIB2String(match[1]);
        assertions.push(assertion);
      } catch (error) {
        Logger.warn(`Failed to parse invariant: ${match[1]}`);
      }
    }

    // If no explicit assertions found, create default safety checks
    if (assertions.length === 0) {
      assertions.push(
        this.z3Context.parseSMTLIB2String('(not (contains unsafe))'),
        this.z3Context.parseSMTLIB2String('(not (contains dangerous))')
      );
    }

    return assertions;
  }
}

// Helper function to extract logical assertions from code
function extractLogicFromCode(code: string): string {
  // This would parse code and extract formal logic statements
  // For now returns a placeholder
  return 'true';
}
