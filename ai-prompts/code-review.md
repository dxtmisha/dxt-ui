---
name: code-review
description: Conduct a rigorous code review assessing architecture, modern engineering standards vs obsolete patterns, bugs and edge cases, adherence to project rules, and design quality of components, classes, functions, and composables compared to industry-leading solutions.
---

# Task: Strict Architectural and Quality Code Review

Act as an elite Principal Software Architect and Senior Code Reviewer. Your goal is to conduct an uncompromising, deep-dive code review of the specified files, components, classes, functions, or composables/hooks.

Your analysis must not be a superficial lint check. You must evaluate architectural soundness, technological relevance vs obsolete patterns, code flaws and subtle bugs, adherence to strict project conventions, and benchmark the implementation against industry-leading state-of-the-art standards.

---

## 1. Architectural Integrity & Modernity vs Obsolete Patterns

### A. Architectural Evaluation
- **Separation of Concerns (SoC)**: Is business logic strictly separated from UI and presentation? Are responsibilities distributed cleanly across packages (e.g., framework-agnostic logic in `functional-basic`, reactive glue in `functional`, component abstractions in `constructor`, design primitives in `d1`)?
- **Modularity & Decoupling**: Is the entity self-contained and modular? Are dependencies injected cleanly or tightly coupled?
- **Single Responsibility & Cohesion**: Does the entity do one thing well, or is it a "Swiss army knife" / God object that needs decomposition?
- **Scalability & Extensibility**: Can this code be extended without breaking existing contracts (Open/Closed Principle)? Are extension points (inheritance, composition, hooks, slots, events) designed intentionally?

### B. Modern Solutions vs Obsolete Techniques
- **Outdated Techniques Detection**:
  - Legacy Vue habits (Options API style patterns, Vue 2 reactivity habits, mutation of props, reliance on global event buses, `$attrs`/`$listeners` anti-patterns).
  - Outdated TypeScript paradigms (excessive `any`/type assertions instead of type narrowing, utility types, template literal types, `satisfies`, discriminating unions).
  - Legacy DOM manipulation (direct element mutations, `querySelector` hacks, manual style manipulation instead of reactive bindings, CSS variables, or standard Web APIs).
  - Obsolete asynchronous patterns (unhandled promise rejections, lack of AbortController cancellation, callback hell vs async/await, missing race condition guards).
- **Benchmarking Against Modern Top-Tier Standards**:
  - How does this implementation compare to state-of-the-art industry benchmarks (e.g., Radix UI, Headless UI, Ark UI, VueUse, Nuxt 3 core, TanStack)?
  - Does it leverage modern web platform standards (native Popover API, CSS container queries, subgrid, modern IntersectionObserver/ResizeObserver APIs) where appropriate?
  - Does it maintain optimal tree-shaking characteristics, pure annotations, and minimal runtime overhead?

---

## 2. Entity-Level Design & Quality Assessment

Evaluate the target according to its specific entity type:

### A. Vue Components (`.vue`)
- **Composition & Atomicity**: Is the component focused and minimal? Is complex logic extracted into composables?
- **Props & Emits Contract**:
  - Strictly typed via `defineProps<{ ... }>()` and `defineEmits<{ ... }>()`.
  - One-way data flow strictly preserved — incoming props are NEVER mutated.
  - Clear, predictable naming with kebab-case event names.
- **Template Hygiene**:
  - Cleanest possible HTML markup.
  - Zero function calls, complex calculations, or inline styles in templates.
  - Always unique, non-index `:key` in `v-for`. Never combine `v-if` with `v-for` on the same tag.
- **Accessibility (A11y)**:
  - Semantic HTML tags, correct ARIA roles, states, keyboard navigation, and focus management.
- **Styles & Design System**:
  - Strict SCSS mixin usage from `@dxtmisha/styles`.
  - Zero hardcoded colors, borders, or spacing values.
  - PurgeCSS compliance: All class names must exist as unbroken string literals (no dynamic string concatenation).

### B. TypeScript Classes (`class`)
- **Structure & Ordering**:
  - Strict member ordering: Properties (`public` -> `protected` -> `private`) -> `constructor` -> Public Methods -> Protected Methods -> Private Methods.
  - Strict method ordering within visibility groups: `get` -> `set` -> `is...` -> `has...` -> `get...` -> `set...` -> `add...` -> `remove...` -> `update...` -> `reset...` -> remaining methods (grouped by semantic pairs and alphabetical order).
- **Encapsulation & Visibility**:
  - Strict visibility modifiers. Internal implementation details must be `protected` or `private`.
  - Immutability where possible (`readonly`, `as const`).
- **Reuse of Project Primitives**:
  - Use helper primitives from `@dxtmisha/functional-basic` (`isFunction`, `isFilled`, `isObject`, `isArray`, etc.) instead of ad-hoc checks.

### C. Functions & Utilities (`function`)
- **Purity & Determinism**:
  - Are pure functions truly side-effect free?
  - Are top-level module invocations properly annotated with `/*#__PURE__*/` for bundler tree-shaking?
- **Cyclomatic Complexity**:
  - Early returns and guard clauses to eliminate nested `if/else` ladders.
  - Well-defined error boundaries without silent failure.
- **Signature Ergonomics**:
  - Clean parameter lists: Use typed options objects with sensible defaults for functions with 3+ parameters.

### D. Composables & Hooks (`use*` / `executeUse*`)
- **Reactivity Preservation**:
  - Correct handling of reactive parameters (`MaybeRefOrGetter`, `toValue`, `toRefs`).
  - No accidental reactivity breakage (e.g., premature destructuring of reactive objects).
- **Scope & Singletons**:
  - Proper lifecycle boundaries: Wrapping in `executeUseGlobal`, `executeUseLocal`, or `executeUseProvide` when dealing with shared or session-scoped state.
  - Components must never call raw state singletons directly; they consume the wrapped composable hook.
- **Cleanup & Memory Safety**:
  - All side effects, intervals, observers, and event listeners must be cleaned up on scope disposal (`onScopeDispose`).
- **SSR Safety**:
  - Safe browser API access guarded by `isDomRuntime()`.
  - Zero request-leaking global state.

---

## 3. Bugs, Deficiencies & Edge Cases

Rigorously search for subtle defects, including:
1. **Reactivity & State Bugs**:
   - Accidental loss of Vue reactivity.
   - Stale closures in composables, callbacks, or computed getters.
   - Infinite reactivity loops or un-memoized expensive calculations.
2. **Asynchronous & Concurrency Issues**:
   - Race conditions in async data fetches or event debounces.
   - Unhandled promise rejections or uncancelled pending requests.
3. **Memory Leaks & Cleanup Failures**:
   - Missing `removeEventListener`, lingering `setInterval`/`setTimeout`, unobserved DOM nodes.
   - Detached DOM nodes retained in memory caches or closures.
4. **Edge Cases & Boundary Conditions**:
   - Unhandled `null`, `undefined`, empty string, empty array/object, `NaN`, 0, negative numbers.
   - Boundary checks, division by zero, off-by-one errors.
5. **SSR Hydration & Isomorphic Flaws**:
   - Access to `window`, `document`, `navigator`, or `localStorage` during server execution without `isDomRuntime()`.
   - Hydration mismatch risks between server-rendered and client-rendered DOM trees.

---

## 4. Strict Project Rules & Conventions Compliance

Check compliance against the core rules of `dxt-ui`:
- **Strict TypeScript**:
  - Zero `any` (mandatory `unknown` or generics).
  - Explicit return types on all methods and exported functions.
  - Use `@ts-expect-error` with comments, never `@ts-ignore`.
- **Zero Hallucinations & Dependency Integrity**:
  - Strictly use dependencies declared in `package.json`.
  - Do not invent non-existent APIs, options, or utilities.
- **Bilingual JSDoc/TSDoc (`jdoc.md`)**:
  - Classes and functions: Multiline English and Russian descriptions with `@param` and `@returns` bilingual comments (`EN / RU`).
  - Properties, interfaces, types, enums: Compact bilingual lines (`/** English / Russian */`).
- **Naming Conventions**:
  - Forbidden abbreviations: `el`, `val`, `temp`, `res`, `err`, `idx`, `cb`, `obj`, etc.
  - Names must be full, descriptive, and semantically precise.
- **No Aliases or Duplicate Exports**:
  - No alias functions, types, or variables (e.g., `useFile = useMediaFile`). One canonical exported name.
- **Tree-Shaking (`/*#__PURE__*/`)**:
  - All top-level module function/constructor calls assigned to constants MUST have `/*#__PURE__*/`.
- **PurgeCSS Compatibility**:
  - No dynamic CSS class concatenation (`'btn-' + size`). Complete literal strings only.

---

## 5. Review Output Format

Provide the code review results in a clear, structured markdown report with the following sections:

### 1. Executive Summary & Quality Score
- **Overall Rating**: Grade (e.g., `A`, `B`, `C`, `D`, `F`) or Score (0-100).
- **Core Verdict**: High-level summary of the implementation's strengths, weaknesses, and readiness for production.
- **Category Scores**:
  | Category | Rating | Summary |
  | :--- | :---: | :--- |
  | **Architecture & Modularity** | Excellent / Good / Needs Improvement / Poor | ... |
  | **Modernity vs Legacy Patterns** | Modern / Outdated / Mixed | ... |
  | **Component / Class / Hook Design** | Excellent / Good / Needs Improvement / Poor | ... |
  | **Bugs, Edge Cases & Leaks** | Clean / Minor Issues / Critical Bugs | ... |
  | **Project Rules & Conventions** | 100% Compliant / Minor Discrepancies / Non-compliant | ... |

### 2. Deep Dive: Architectural & Design Quality
- Analysis of decomposition, encapsulation, and scalability.
- Evaluation of whether the entity is modern or relies on outdated practices compared to top-tier industry libraries.

### 3. Detailed Findings & Bugs (Categorized by Severity)
- **Critical (P0 / Blocker)**: Bugs causing runtime crashes, data loss, memory leaks, SSR breaking issues, or reactivity breakage.
- **Major (P1 / Architecture & Modernity)**: Outdated techniques, violation of single responsibility, suboptimal paradigms, missing cleanup.
- **Minor (P2 / Conventions & Typing)**: Naming abbreviations, missing `/*#__PURE__*/`, missing or malformed bilingual JSDoc, missing explicit return types.
- **Nit / Suggestion (P3)**: Minor stylistic polish, code ergonomics, micro-optimizations.

*For each finding, provide: File, line number, explanation of the issue, and the exact reason why it is problematic.*

### 4. Comparison with Industry Top Solutions
- Compare the reviewed solution with how leading open-source libraries (e.g., VueUse, Radix, Nuxt, TanStack) solve similar architectural problems.
- Highlight concrete lessons or patterns that could be adopted to elevate the code to top-tier quality.

### 5. Actionable Refactoring & Code Fixes
- Provide ready-to-use before/after code diffs or refactored code blocks illustrating the recommended improvements.
