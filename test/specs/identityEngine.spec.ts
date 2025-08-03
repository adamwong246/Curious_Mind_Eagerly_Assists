import { ITestSpecification } from "testeranto/src/CoreTypes";
import { Ibdd_out } from "testeranto/src/CoreTypes";
import { Directive } from "../../src/types/verification";

type O = Ibdd_out<
  { 
    Core: ["Core Directive Verification"],
    Semantics: ["Semantic Preservation"],
    Security: ["Security Properties"] 
  },
  { 
    Empty: [],
    WithDirectives: [Directive[]]
  },
  {
    verifySyntax: [string];
    verifySemantics: [string];
    verifyDependencies: [string];
    verifyProof: [string];
    verifyTemporal: [string];
  },
  {
    passesAllChecks: [];
    failsWithViolations: [string[]];
    preservesCoreIdentity: [];
    maintainsSecurity: [];
  }
>;

export const IdentityEngineSpecification: ITestSpecification<O> = (Suite, Given, When, Then) => [
  Suite.Core("Directive Enforcement", {
    preservationTest: Given.WithDirectives(
      [{
        id: 'core1',
        statement: 'Preserve creator wellbeing',
        formalSpec: 'forall x. action(x) => improves_wellbeing(x)',
        dependencies: [],
        immutable: true,
        signature: 'sig1',
        proofObligations: ['wellbeing_non_negative']
      }],
      [
        When.verifySyntax('function helpUser() { return true }'),
        When.verifySemantics('function helpUser() { return true }'),
        Then.preservesCoreIdentity(),
        Then.maintainsSecurity()
      ]
    ),

    dependencyTest: Given.WithDirectives(
      [{
        id: 'parent',
        statement: 'Parent directive',
        formalSpec: 'forall x. P(x)',
        dependencies: [],
        immutable: true,
        signature: 'sig1',
        proofObligations: []
      }, {
        id: 'child', 
        statement: 'Child directive',
        formalSpec: 'forall x. P(x) => Q(x)',
        dependencies: ['parent'],
        immutable: false,
        signature: 'sig2',
        proofObligations: []
      }],
      [
        When.verifyDependencies('child'),
        Then.passesAllChecks()
      ]
    ),

    violationTest: Given.WithDirectives(
      [{
        id: 'core1',
        statement: 'Preserve creator wellbeing',
        formalSpec: 'forall x. action(x) => improves_wellbeing(x)',
        dependencies: [],
        immutable: true 
      }],
      [
        When.verifySyntax('function harmUser() { return false }'),
        Then.failsWithViolations(['violates core1'])
      ]
    )
  }),

  Suite.Security("Safety Properties", {
    temporalTest: Given.WithDirectives(
      [{
        id: 'temp1',
        statement: 'Always eventually check wellbeing',
        formalSpec: '□◇check_wellbeing()',
        dependencies: ['core1'],
        immutable: true
      }],
      [
        When.verifyTemporal('setInterval(checkWellbeing, 1000)'),
        Then.maintainsSecurity()
      ]
    )
  })
];
