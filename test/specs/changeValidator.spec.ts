import { ITestSpecification } from "testeranto/src/CoreTypes";
import { Ibdd_out } from "testeranto/src/CoreTypes";

type O = Ibdd_out<
  { Default: ["Change Validator Test Suite"] },
  { Default: [] },
  {
    validateChange: [any];
  },
  {
    verifyValidation: [{ isValid: boolean; violations: string[] }];
  }
>;

export const ChangeValidatorSpecification: ITestSpecification<O> = (Suite, Given, When, Then) => [
  Suite.Default("Validation Scenarios", {
    validTest: Given.Default(
      ["Should accept valid change"],
      [
        When.validateChange({
          delta: "// Valid change preserving all directives",
          proof: "valid_proof_123",
          dependencies: {
            added: ["directive_456"],
            modified: [],
            removed: [],
          },
        }),
      ],
      [
        Then.verifyValidation({
          isValid: true,
          violations: [],
        }),
      ]
    ),

    securityTest: Given.Default(
      ["Should reject security-sensitive changes without proof"],
      [
        When.validateChange({
          delta: "disableAuth()",
          proof: "",
          dependencies: {
            added: [],
            modified: ["security_directive"],
            removed: [],
          },
        }),
      ],
      [
        Then.verifyValidation({
          isValid: false,
          violations: ["Missing proof for security-sensitive change"],
          warnings: [],
          details: {
            identity: {
              success: false,
              violations: ["Security directive violation"],
            },
            economics: { isValid: true, violations: [] },
            behavior: { passed: true, failures: [] },
          },
        }),
      ]
    ),

    economicTest: Given.Default(
      ["Should flag high-cost changes"],
      [
        When.validateChange({
          delta: "// Expensive ML training",
          proof: "valid_proof",
          dependencies: {
            added: [],
            modified: [],
            removed: [],
          },
        }),
      ]
    ),

    invalidTest: Given.Default(
      ["Should catch multiple violations"],
      [
        When.validateChange({
          delta: "// Invalid change\nwhile(true) { spendMoney(); }",
          proof: "",
          dependencies: {
            added: [],
            modified: ["core_directive"],
            removed: ["required_dep"],
          },
        }),
      ],
      [
        Then.verifyValidation({
          isValid: false,
          violations: [
            'Directive "Preserve creator wellbeing" not preserved',
            "Estimated cost 1200 exceeds budget 1000",
            "3 tests failed",
          ],
          warnings: ["Low test coverage: 0.65"],
        }),
      ]
    ),

    warningTest: Given.Default(
      ["Should generate warnings"],
      [
        When.validateChange({
          delta: "// Borderline economic change",
          proof: "valid_proof",
          dependencies: { added: [], modified: [], removed: [] },
        }),
      ],
      [
        Then.verifyValidation({
          isValid: true,
          violations: [],
          warnings: ["High cost: 850 (85% of budget)"],
        }),
      ]
    ),

    behaviorTest: Given.Default(
      ["Should reject behavior-breaking change"],
      [
        When.validateChange({
          delta: "buggy code",
          proof: "invalid proof",
          dependencies: { added: [], modified: [], removed: [] },
        }),
      ],
      [
        Then.verifyValidation({
          isValid: false,
          violations: ["Behavior violation"],
        }),
      ]
    ),
  }),
];
