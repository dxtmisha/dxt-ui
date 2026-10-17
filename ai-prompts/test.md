---
name: test
description: Guidelines and standards for writing industrial-grade, comprehensive unit tests using Vitest, covering all execution paths, edge cases, boundaries, types, SSR safety, and reactivity.
---

# Task: Industrial-Grade Unit Test Creation and Refinement

Act as a Principal QA Automation Engineer and Senior Software Architect. Your mission is to author, rewrite, or deeply refine unit test suites for functions, classes, composables, or components in the `dxt-ui` monorepo.

Tests in this repository must **never be superficial smoke checks**. They must serve as an executable specification of the contract, guaranteeing mathematical correctness, edge-case resilience, security, and regression protection.

---

## 1. Core Testing Principles (The DXT Quality Standard)

1. **Zero Superficiality**:
   - A test suite consisting of only 1–2 trivial "happy path" checks is considered incomplete and unacceptable.
   - Every public method, argument branch, error condition, and boundary value must have dedicated test cases.
2. **Test Contracts, Never Legitimate Bugs**:
   - Never write or adapt test assertions to accommodate or pass broken code.
   - If the code behaves incorrectly (e.g., returning `/^/` when it should match nothing, or dropping `$1` when capturing groups are absent), **do NOT assert the broken output** — report the defect or fix the implementation so the test asserts the correct specification contract.
3. **Strict Isolation & Determinism**:
   - Every test must be completely independent. Never rely on the side-effects or execution order of preceding tests.
   - For stateful objects (such as `RegExp` with the `g` flag, instances of classes, or reactive stores), always reset state (`regex.lastIndex = 0`), instantiate fresh instances, or clean up in `beforeEach` / `afterEach`.
4. **Targeted Execution & Clean Passes**:
   - Always execute the specific test file:
     ```bash
     npx vitest run <path-to-test-file>
     ```
   - 100% test pass rate is strictly required (0 errors, 0 failures, 0 uncaught exceptions, and 0 framework/Vue warnings).
   - Never commit `it.only`, `it.skip`, or commented-out assertions.
5. **Context & Purpose Awareness (Anti-Overengineering Guard / Учёт среды использования и назначения)**:
   - Tests must evaluate the entity strictly in the context of its **actual environment, real consumers, and intended purpose**.
   - **Ban on "All-Life-Cases" Paranoia (Запрет тестов «на все случаи жизни»)**: Do NOT write tests for absurd, impossible, or contrived edge cases that never occur in real usage. Forcing production code to accommodate unrealistic scenarios causes **code bloat, unnecessary defensive checks, performance degradation, and over-engineering (`избыточный код / оверинжиниринг`)**.
   - **Pragmatic Contract Verification**: Focus on real contracts and valid domain boundaries (such as `0`, `false`, `null`, empty strings, Unicode diacritics, XSS where HTML is generated, lifecycle disposal). If an entity is an internal helper or strictly typed utility, do not write tests demanding runtime defenses against impossible or out-of-scope inputs.

---

## 2. File Location and Naming Conventions

All unit tests must reside in a dedicated `__tests__/` directory adjacent to the source file:

| Entity Type | Source Location | Test File Location |
| :--- | :--- | :--- |
| **Utility Functions** | `packages/<pkg>/src/functions/<name>.ts` | `packages/<pkg>/src/functions/__tests__/<name>.test.ts` |
| **Classes & Controllers** | `packages/<pkg>/src/classes/<ClassName>.ts` | `packages/<pkg>/src/classes/__tests__/<ClassName>.test.ts` |
| **Composables** | `packages/<pkg>/src/composables/**/<useName>.ts` | `packages/<pkg>/src/composables/**/__tests__/<useName>.test.ts` |
| **Constructors** | `packages/<pkg>/src/constructors/<Component>/<Name>.ts` | `packages/<pkg>/src/constructors/<Component>/__tests__/<Name>.test.ts` |
| **Vue Components** | `packages/<pkg>/src/components/<Component>/<Component>.vue` | `packages/<pkg>/src/components/<Component>/__tests__/<Component>.test.ts` |

---

## 3. Test Suite Architecture (`describe` Hierarchy)

Organize tests into clear, thematic `describe` blocks. A standard test suite should follow this hierarchy:

```typescript
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { myFunction } from '../myFunction'

describe('myFunction', () => {
  describe('Standard functional requirements (Happy path)', () => {
    it('should handle primary expected use case', () => { ... })
    it('should process multi-token / multi-field inputs correctly', () => { ... })
  })

  describe('Boundary values and limit thresholds', () => {
    it('should behave correctly exactly at the threshold limit', () => { ... })
    it('should handle values exceeding the threshold limit by 1', () => { ... })
    it('should handle zero, negative, and infinite thresholds', () => { ... })
  })

  describe('Empty, whitespace-only, and nullish inputs', () => {
    it('should handle empty string without breaking', () => { ... })
    it('should handle whitespace variations (spaces, tabs, newlines)', () => { ... })
    it('should safely handle null and undefined', () => { ... })
  })

  describe('Type coercion and non-standard data types', () => {
    it('should handle numeric values (especially 0 and negative numbers)', () => { ... })
    it('should handle boolean values (especially false)', () => { ... })
    it('should handle objects with custom toString / valueOf', () => { ... })
  })

  describe('Metacharacters, escaping, and security', () => {
    it('should escape all regex special characters', () => { ... })
    it('should sanitize HTML / XSS payloads', () => { ... })
  })

  describe('Multilingual and Unicode support', () => {
    it('should handle Cyrillic, Vietnamese, CJK, and Emoji', () => { ... })
  })

  describe('Statefulness, isolation, and lifecycle cleanup', () => {
    it('should not leak mutable state between invocations', () => { ... })
    it('should properly dispose observers, listeners, and timers', () => { ... })
  })
})
```

---

## 4. Mandatory Edge Cases Checklist

> [!IMPORTANT]
> **Pragmatic Application (No Code Bloat / Без избыточного кода)**: Apply this checklist strictly through the lens of the entity's **actual purpose and usage environment**. Do NOT blindly test every conceivable permutation or invent paranoid edge cases outside the entity's scope, as doing so forces production code to become bloated and over-engineered.

Every unit test suite MUST thoroughly evaluate the following boundary conditions:

### A. Strings & Text
- **Empty & Whitespace**: Empty string `""`, spaces `"   "`, tabs `"\t"`, newlines `"\n"`, mixed `"\t \n\r"`.
- **Trimming & Padding**: Leading and trailing whitespace; verify threshold checks occur before or after trimming as required by contract.
- **Length Limits**: Exactly at limit (`length === limit`), limit + 1 (`length === limit + 1`), zero limit (`limit = 0`), negative limit (`limit = -1`).
- **Regex Metacharacters**: `.` `*` `+` `?` `^` `$` `{` `}` `(` `)` `|` `[` `]` `\` `/`. Test that dots match literal dots (`a.b` vs `axb`), pluses match literal pluses (`C++`), and vertical bars do not trigger unintended alternations.
- **Prefix Shadowing**: When implementing search/highlight alternations, test that longer words take precedence over prefixes (`cat caterpillar` matching `caterpillar`, not just `cat`).
- **Delimiter Collisions**: If internal markers or tags are used, verify that input text naturally containing those markers is not corrupted.
- **XSS & HTML Payloads**: `'<script>alert(1)</script>'`, `'"><img src=x onerror=...>'`, `'class" onmouseover="...'`.

### B. Numbers
- **Zero (`0`)**: `0` is falsy in JavaScript, but frequently represents valid business data (e.g., price `$0`, Room `0`, index `0`, status `0`). **Always test `0` explicitly**.
- **Negative Numbers**: `-1`, `-42`, `-0.01`.
- **Decimals & Floating Point**: `0.1 + 0.2`, `3.14159`.
- **Special Values**: `NaN`, `Infinity`, `-Infinity`.

### C. Booleans
- **`false`**: `false` is falsy, but often valid data (e.g. searching for the word `'false'`, or boolean property `active = false`). **Always test `false` explicitly**.
- **`true`**: Standard truthy boolean.

### D. Nullish & Falsy Values
- `undefined` and `null`: Verify safe fallback or explicit error handling without uncaught `TypeError` crashes.
- Empty arrays `[]` and empty objects `{}`.

### E. Regular Expressions (`RegExp`)
- **Flags**: With flags (`g`, `i`, `m`, `u`, `s`), without flags (`flags === ''`).
- **Capturing vs Non-capturing Groups**: Test expressions with groups `(foo)` AND without groups `foo`.
- **Stateful `lastIndex`**: When input is a `RegExp` with the `g` flag, verify that prior executions (`lastIndex > 0`) do not cause skips or cross-talk between calls.

### F. Multilingual & Unicode
- **Cyrillic**: `'Привет Мир'`, with case insensitivity (`'ПРИВЕТ'`, `'привет'`).
- **Vietnamese**: Complex diacritics (`'tiếng việt'`, `'Học tiếng Việt'`).
- **Accents & Umlauts**: German (`'über schön'`), French (`'café'`), Spanish (`'año'`).
- **CJK Characters**: Chinese/Japanese/Korean (`'你好 世界'`, `'こんにちは'`).
- **Emojis**: Multibyte characters (`'🚀 🔥 ✨'`).

---

## 5. Entity-Specific Testing Guidelines

### A. Pure Functions & Utilities
- Verify strict determinism: same input always produces identical output.
- Verify zero mutations: inputs (objects, arrays) are not mutated in place unless explicitly designed to do so.
- Test both functional return value and observable effects.

### B. Classes & State Managers
- Test methods in logical order: constructor initialization -> getters/setters -> action methods -> `reset()` -> `destroy()`.
- Test instance encapsulation: private fields are isolated; two instances do not share state.
- Test teardown: verify that `destroy()` clears caches, removes event listeners, and cancels subscriptions.

### C. Vue Composables (`use*` / `executeUse*`)
- Wrap execution in `effectScope()` when testing reactive lifecycle:
  ```typescript
  import { effectScope } from 'vue'

  it('should clean up on scope disposal', () => {
    const scope = effectScope()
    let result: ReturnType<typeof useMyComposable>

    scope.run(() => {
      result = useMyComposable()
    })

    // Assert active state
    expect(result!.data.value).toBeDefined()

    // Dispose and assert cleanup
    scope.stop()
  })
  ```
- Test parameter flexibility: pass raw values, `ref()`, and getter functions `() => value`.
- Test reactivity preservation: updating source `ref` automatically updates `computed` outputs.

---

## 6. Execution & Verification Workflow

When writing or updating tests:

1. **Author the test suite** in `__tests__/<Name>.test.ts`.
2. **Run Vitest** targeting specifically the new or updated test file:
   ```bash
   npx vitest run packages/<package-name>/src/<path>/__tests__/<Name>.test.ts
   ```
3. **Run Inbound Dependent Tests**:
   Identify files that import the entity under test and execute their tests to guarantee zero regressions.
4. **Audit for Clean Exit**:
   Ensure 100% test success with 0 failures, 0 skipped assertions, and no unhandled promise rejections.
