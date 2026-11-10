---
name: test
description: Guidelines and standards for writing industrial-grade, deterministic unit tests using Vitest, covering all execution paths, usage scenarios, boundaries, types, UI state machines, SSR safety, and reactivity.
---

# Task: Industrial-Grade Unit Test Creation and Refinement

Act as an elite Principal QA Automation Architect and Staff Software Engineer. Your mission is to author, rewrite, or deeply refine unit test suites for functions, classes, constructors, composables, and Vue components in the `dxt-ui` monorepo.

Tests in this repository must **never be superficial smoke checks**. They serve as an executable specification of the entity's contract — guaranteeing mathematical and behavioral correctness across all usage scenarios, boundary resilience, security, memory/lifecycle hygiene, SSR isomorphism, and zero regression.

---

## 1. Core Testing Principles (The DXT & Industry-Leader Standard)

1. **Zero Superficiality & Exhaustive Scenario Coverage**:
   - A test suite with only 1–2 trivial "happy path" assertions is unacceptable.
   - Every public method, getter/setter, parameter/prop combination, method call sequence, lifecycle transition (`init -> update -> toggle -> reset -> destroy`), error path, and boundary condition must have dedicated test cases.
2. **Design Tests by Specification (How the Entity MUST Work), NEVER by Implementation**:
   - **Contract-First Mindset**: Design tests strictly from the entity's business purpose, domain logic, and TypeScript contracts (`*Types.ts`) — **NEVER** write tests by mechanically copying the branches of how the code was written.
   - **Never Work Around Bugs in Test Setup**: Never adapt test inputs or assertions to mask implementation bugs (e.g., never pass artificial `{ key: undefined }` properties just to satisfy a broken `if (key in props)` guard, and never omit valid union variants from `*Types.ts` because a `switch` forgot them). If natural real-world usage fails, the test has exposed a real bug that must be fixed in the source code.
   - **Mandatory Verification of All 4 Failure Categories**:
     1. *Incorrect Entity Operation*: Broken state transitions, cross-helper side effects (e.g., a UI state toggle corrupting static validation rules or metadata from `this.props`), or lifecycle failures.
     2. *Wrong Return Values / Output Data*: Skipped computed fallbacks, silent `undefined` overwrites during object merging, inconsistent defaults across related getters/methods, or omitted union variants / interface properties from `*Types.ts`.
     3. *Broken Runtime Behavior*: Falsy boundary traps (`0`, `false`, `''` treated as absent), broken reactivity, mutated caller input references, or desynchronized DOM/ARIA bindings.
     4. *Runtime Code Crashes*: Unhandled exceptions, `null`/`undefined` dereferences, invalid DOM/API calls, or infinite recursion/loops.
3. **Strict Isolation & Zero-Flakiness Standard (Google Testing Standard)**:
   - **Complete Test Independence**: Every `it()` block must be 100% deterministic and independent of execution order.
   - **Ban on Real Timer Sleeps**: Never use real `new Promise(r => setTimeout(r, 100))` delays in unit tests. Always use `vi.useFakeTimers()` and deterministic clock advancement (`vi.advanceTimersByTime()`, `vi.runAllTimers()`).
   - **Mandatory `afterEach` Teardown**: Always reset stateful objects (`regex.lastIndex = 0`), restore mocks and timers (`vi.restoreAllMocks()`, `vi.useRealTimers()`), clear browser storage (`localStorage.clear()`, `sessionStorage.clear()`), unmount DOM wrappers, and reset singletons/`ErrorCenter` listeners in `beforeEach` / `afterEach`.
4. **Practical Usage Filter & Contract Integrity (Aligned with `code-review.md`)**:
   - **Zero Speculative / Contrived Tests**: Test genuine production edge cases (`0`, `false`, `null`, `undefined`, `''`, whitespace, regex metacharacters like `C++` or `$10`, XSS payloads where HTML/URLs are processed, prototype pollution keys, SSR state isolation, lifecycle cleanup). **NEVER** write contrived tests for artificial scenarios that never happen in real usage and cause neither crashes nor security vulnerabilities (e.g., never test what happens if a user types an internal static marker like `___HIGHLIGHT_START___` into a highlight utility whose `<span class="...">` replacement is already sanitized).
   - **Domain-Required vs Permissively Coerced Parameters**:
     - *Never Weaken Domain-Required Keys*: If a parameter is fundamentally required by domain logic and has no runtime fallback (e.g., `column: K` in `getColumn(item, column)`), it MUST remain mandatory — never make it optional just so a test can call `getColumn()` with no arguments.
     - *Align Tests with Permissively Widened Parameters*: When runtime logic already safely coerces/handles optional or arbitrary inputs (`value?: unknown`, `readonly T[]`, `| null`), test those permissive inputs directly without `as unknown as ...`, `as any`, or `// @ts-expect-error` casts.

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

Organize tests into clear, thematic `describe` blocks tailored to the entity's domain:

```typescript
import { describe, it, expect, expectTypeOf, beforeEach, afterEach, vi } from 'vitest'
import { myEntity } from '../myEntity'

describe('myEntity', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
  })

  describe('Standard functional requirements (Happy path & Usage scenarios)', () => {
    it('should handle primary expected use cases and option combinations', () => { ... })
    it('should preserve exact generic / literal return types', () => {
      expectTypeOf(myEntity('hello')).toEqualTypeOf<ExpectedType>()
    })
  })

  describe('Boundary values, zero/falsy traps, and limit thresholds', () => {
    it('should handle exact threshold, threshold + 1, 0, negative, and Infinity', () => { ... })
    it('should treat numeric 0 and boolean false as valid values, not absent', () => { ... })
  })

  describe('Empty, whitespace-only, nullish, and plain object inputs', () => {
    it('should handle empty strings, tabs/newlines, null, and undefined safely', () => { ... })
    it('should resolve computed defaults on minimal plain objects with omitted optional keys', () => { ... })
  })

  describe('Immutability, escaping, and security boundaries', () => {
    it('should not mutate caller-passed arrays or objects in place', () => { ... })
    it('should escape regex metacharacters and block XSS / prototype pollution payloads', () => { ... })
  })

  describe('Multilingual, Unicode, and locale/timezone handling', () => {
    it('should handle Cyrillic, Vietnamese diacritics, CJK, and multi-byte Emoji', () => { ... })
  })

  describe('Lifecycle, concurrency, SSR isolation, and resource cleanup', () => {
    it('should dispose listeners, timers, observers, and ObjectURLs on teardown', () => { ... })
  })
})
```

---

## 4. Mandatory Edge Cases Checklist (Within Permissible Domain)

Evaluate all applicable boundary conditions for the entity's input/output domain:

### A. Strings, RegExp & Security Payloads
- **Empty & Whitespace**: `""`, `"   "`, `"\t"`, `"\n"`, `"\t \n\r"`, leading/trailing padding (verify whether threshold checks run before or after trimming).
- **Length Thresholds**: `length === limit`, `length === limit + 1`, `limit = 0`, `limit = -1`.
- **Regex Metacharacters & Prefix Shadowing**: `.` `*` `+` `?` `^` `$` `{` `}` `(` `)` `|` `[` `]` `\` `/` (e.g., `a.b` vs `axb`, `C++`, `$100`). For search/highlight alternations, verify longer matches take precedence over shorter prefixes (`caterpillar` over `cat`).
- **Stateful `RegExp`**: Test with/without flags (`g`, `i`, `m`, `u`, `s`), capturing vs non-capturing groups, and verify `lastIndex > 0` on global regexes does not skip matches across repeated calls.
- **XSS & URL Injection (Where Markup/URLs Are Processed)**: `'<script>alert(1)</script>'`, `'"><img src=x onerror=alert(1)>'`, `'javascript:alert(1)'`, `'data:text/html,...'`, SVG `<foreignObject>`/`onload`.

### B. Numbers, Booleans, Dates & Locales
- **Zero (`0`) & `false` (Falsy Boundary Traps)**: Always test numeric `0` (price `0`, index `0`, offset `0`, timeout `0`) and boolean `false` explicitly to ensure truthiness checks (`if (val)` / `isFilled(val)`) do not drop valid `0` or `false` values.
- **Numeric Extremes**: Negative numbers (`-1`, `-0.01`), floating-point precision (`0.1 + 0.2`), `NaN`, `Infinity`, `-Infinity`.
- **Dates, Timezones & `GeoIntl` / `Intl`**: Test `YYYY-MM-DD` date strings vs local `Date(y, m, d)` constructors against UTC/local timezone boundary shifts, leap years (`2024-02-29`), month-end transitions, and locale-specific number/currency/unit formatting.

### C. Objects, Arrays, Prototype Integrity & Type Exhaustiveness
- **Nullish & Empty Collections**: `undefined`, `null`, `[]`, `{}`.
- **Caller Argument Immutability**: Pass a frozen or snapshotted array/object (`const input = [3, 1, 2]; const copy = [...input]`) and assert `expect(input).toEqual(copy)` after invocation to guarantee the entity never mutates caller references (`sort`, `reverse`, `splice`, property assignment). Also verify compatibility with `as const` (`readonly T[]`).
- **Minimal Plain Objects (Omitted Optional Keys)**: Pass minimal objects (`{ requiredKey: 'x' }`) without explicit `optionalKey: undefined` properties to verify that `if (key in obj)` guards do not skip computed fallback resolvers.
- **Non-Destructive Merging**: Pass `{ optionalKey: undefined }` overrides and verify they do not overwrite existing base defaults with `undefined`.
- **Prototype Pollution Guards**: When testing deep merge, clone, query parser, or path-setter utilities, verify that `__proto__`, `constructor`, and `prototype` keys are ignored/filtered and never pollute `Object.prototype`.
- **Union & Interface Exhaustiveness (`*Types.ts`)**: Use `it.each(...)` to verify all union variants and interface properties declared in `*Types.ts`.

### D. Multilingual & Unicode Graphemes
- **Cyrillic & Case Folding**: `'Привет Мир'`, `'ПРИВЕТ'` / `'привет'`.
- **Vietnamese (Complex Multi-Mark Diacritics)**: `'tiếng Việt'`, `'Học tiếng Việt'`, `'Nguyễn'`.
- **European Accents, CJK & Surrogate Pairs**: `'über schön'`, `'café'`, `'你好 世界'`, `'こんにちは'`, multi-byte Emoji (`'🚀 🔥 👨‍👩‍👧‍👦'`).

---

## 5. Entity-Specific Testing Standards

### A. Pure Functions & Type Inference
- Verify strict determinism and zero input reference mutation.
- Verify generic and conditional return type inference (e.g., using `expectTypeOf` to ensure fallback `defaultValue` infers exact types `string`/`number` instead of `unknown`, and single-signature generics preserve literal types).

### B. Classes, Controllers & State Managers
- Test lifecycle in order: `new Class()` initialization -> getters/setters -> action methods -> `reset()` -> `destroy()` / `dispose()`.
- **Consistent Defaults Across All Getters**: Verify constructor defaults apply uniformly across every related output getter/method.
- **Canonical State (`this.props`) vs Mutated Helper State**: Verify that UI/visual state transitions in injected helpers do not corrupt static rules, patterns, or metadata derived from `this.props`.
- **Instance Isolation & Error Routing**: Verify two instances never share mutable state, and operational errors route through `ErrorCenter` rather than raw `console.error`.

### C. Vue Composables (`use*` / `executeUse*`)
- Wrap composable execution inside `effectScope()` to test `onScopeDispose` / `onWatcherCleanup` teardown:
  ```typescript
  import { effectScope, ref } from 'vue'

  it('should react to input changes and clean up on scope disposal', () => {
    const scope = effectScope()
    const source = ref('initial')
    let state: ReturnType<typeof useMyComposable> | undefined

    scope.run(() => {
      state = useMyComposable(source)
    })

    expect(state?.value).toBe('initial')
    source.value = 'updated'
    expect(state?.value).toBe('updated')

    scope.stop()
    // Assert listeners, timers, or observers were disposed
  })
  ```
- Test `MaybeRefOrGetter` inputs: raw primitives, `ref()`, and getter functions `() => value`.
- Test async race conditions: trigger two concurrent requests where Request 1 resolves *after* Request 2, and assert that Request 2's state is preserved and Request 1 is aborted/ignored.

### D. Vue Components (`.vue`) & UI Constructors (`constructor` / `d1`)
- **Props, Slots, Emits & Expose**: Verify all prop variants, slot rendering (default, named, scoped slots), `kebab-case` event emissions (`wrapper.emitted()`), `v-model` updates, and exposed controller properties.
- **WAI-ARIA & Accessibility**: Verify `get aria()` / `AriaStaticInclude` output, `role`, `aria-expanded`, `aria-selected`, `aria-checked`, `aria-disabled`, `aria-labelledby`, and automatic `aria-hidden="true"` when decorative elements lack `alt`/`label`.
- **UI Interaction State-Machine Guards**:
  1. *Keyboard Navigation*: Test `Enter`, `Space`, `Escape`, and `ArrowUp`/`ArrowDown`/`ArrowLeft`/`ArrowRight` (including RTL direction reversal where applicable).
  2. *IME Composition Guard (`event.isComposing`)*: Dispatch `keydown` (`Enter`, `Escape`, `Backspace`) with `{ isComposing: true }` and verify it does **not** prematurely submit forms, select items, or close modals/menus.
  3. *Gesture Cancellation (`pointercancel` / `blur`)*: In sliders, croppers, and drag-and-drop components, start a drag (`pointerdown` -> `pointermove`) and dispatch `pointercancel` or `window` `blur`, verifying active drag state and listeners are cleanly reset.
  4. *Nested Overlay `Escape` Isolation*: Verify that pressing `Escape` on an open child overlay (`Menu`, `Select`, `Popover`) stops propagation and does not close an enclosing `Modal`/`Dialog`.
- **Skeleton State**: Verify `is-skeleton` prop / `Skeleton` wrapper applies skeleton classes without duplicating DOM structure.

### E. SSR Safety, Request Isolation & Resource Cleanup
- **SSR & Non-DOM Guard Verification**: Verify that executing the entity when browser APIs (`window`, `document`, `localStorage`, `ResizeObserver`, `matchMedia`) are unavailable or guarded by `isDomRuntime()` does not throw `ReferenceError`, does not start background intervals, and produces deterministic SSR IDs (`getElementId` / `useId`).
- **SSR Request Isolation (`ServerStorage`)**: Verify that `ServerStorage`-backed singletons isolate state across separate server request contexts without cross-request leakage.
- **Explicit Resource Leak Spies**: Spy on `addEventListener`/`removeEventListener`, `ResizeObserver.prototype.disconnect`, `IntersectionObserver.prototype.disconnect`, `AbortController.prototype.abort`, `clearInterval`/`clearTimeout`/`cancelAnimationFrame`, and `URL.revokeObjectURL` to prove 100% resource cleanup on unmount/dispose.

---

## 6. Execution & Quality Verification Gate

When authoring or updating any unit test file:

1. **Run Targeted Vitest Execution**:
   ```bash
   npx vitest run packages/<pkg>/src/<path>/__tests__/<Name>.test.ts
   ```
   Guarantee `0` errors, `0` failures, `0` skipped/todo tests (`it.skip`/`it.only` are strictly forbidden), and `0` Vue/runtime warnings.
2. **Run Inbound Dependent Tests**:
   If the tested entity's signature or behavior was refined, run unit tests of dependent files that import it to ensure zero regressions.
3. **Run ESLint & Non-Emitting TypeScript Gate (Rule 8 Compliant)**:
   Do **NOT** run `npm run build`. Verify lint and types cleanly via:
   ```bash
   npx eslint --fix packages/<pkg>/src/<path>/__tests__/<Name>.test.ts
   npx tsc -p packages/<pkg>/tsconfig.json --noEmit # or npx vue-tsc -p packages/<pkg>/tsconfig.json --noEmit for Vue packages
   ```
   Guarantee `0` ESLint errors/warnings and `0` TypeScript errors.
