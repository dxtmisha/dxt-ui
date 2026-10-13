---
name: code-review
description: Conduct a rigorous code review assessing architecture, dependencies and inbound usage across the codebase, modern engineering standards vs obsolete patterns, bugs and edge cases, adherence to project rules, accessibility & ARIA compliance, design quality, and test suite completeness (auditing test quality, rewriting incomplete tests, refining fragile tests, or creating comprehensive unit tests from scratch), saved as an AI artifact in the language specified by wikiLanguage in ./design.config.json.
---

# Task: Strict Architectural and Quality Code Review

Act as an elite Principal Software Architect and Senior Code Reviewer. Your goal is to conduct an uncompromising, deep-dive code review of the specified files, components, classes, functions, or composables/hooks.

Your analysis must not be a superficial lint check. You must evaluate architectural soundness, dependency health, real-world usage across the codebase, technological relevance vs obsolete patterns, code flaws and subtle bugs, adherence to strict project conventions, and benchmark the implementation against industry-leading state-of-the-art standards.

---

## 🔴 Mandatory Pre-Review Protocol (Language, Delivery Target, Usage Graph & Test Coverage)

Before analyzing any code or generating any review text, you MUST execute these four mandatory steps:

### 1. Mandatory Language Determination (`design.config.json` -> `wikiLanguage`)
- **Direct Instruction**: The AI agent **MUST open and inspect `./design.config.json`** to retrieve the `wikiLanguage` property (e.g., `"wikiLanguage": "ru"` or `"wikiLanguage": "en"`).
- **Explicit Override**: Reading `./design.config.json` specifically to extract `wikiLanguage` is an **explicit, mandatory user directive**. The AI agent must NEVER skip this check, assume English without checking `design.config.json`, or refuse to read the language configuration.
- **Language Enforcement**:
  - If `wikiLanguage` is `"ru"`, the **entire code review report MUST be written strictly in Russian** (all headings, explanations, findings, summaries, and recommendations in Russian).
  - If `wikiLanguage` is `"en"`, write in English.
  - Code snippets, TypeScript type names, variable names, and file paths must always remain untranslated in their original form.

### 2. Artifact Delivery (Do NOT Describe in Chat, Do NOT Pollute Repository)
- **Zero Chat Dumping**: It is **STRICTLY FORBIDDEN to output the full review, tables, or detailed bug descriptions into the current chat**. Dumping long text into the conversation reduces readability and clutters the session.
- **Save as an AI Artifact / Temporary Markdown Document**:
  - The review MUST be saved as an **AI Artifact** (e.g., in `<appDataDir>/brain/<conversation-id>/code_review_<target>.md` or the agent's artifact directory) using the artifact creation tool (`write_to_file` in the artifacts directory).
  - Artifacts are natively supported by the AI agent interface with a dedicated preview/reading panel, allowing comfortable, structured reading without cluttering the chat.
  - Do NOT save permanent review files to the project repository root (do not write to `./code-review.md` in the git workspace).
- **Chat Response**:
  - In the chat response, provide **ONLY a concise 1–2 sentence notification** with a clickable link to the generated artifact (e.g., `[code_review_<target>.md](file:///...)`) and an overall rating. Never re-summarize or duplicate the findings in the chat.

### 3. Mandatory Dependency & Inbound Usage Investigation (Graph & Blast Radius Audit)
- **Never Review in Isolation**: You must NEVER review a target entity in a vacuum. Code review is incomplete without inspecting its dependencies and all places where it is consumed.
- **Outbound Dependencies Audit (What it depends on)**:
  - Inspect all imports, utilities, classes, and packages used by the target.
  - Verify layer boundaries: Ensure dependencies flow strictly in the correct architectural direction (`functional-basic` -> `functional` -> `constructor` -> `d1`). A lower-level package must never import from a higher-level package.
  - Verify `package.json` synchronization: Ensure all imported external or monorepo packages are declared in `package.json` with valid version constraints (`>=`).
  - Detect redundant, bloated, or circular dependencies.
- **Inbound Usages Audit (Where and how it is used across the codebase)**:
  - Search and inspect **all call sites, components, composables, and files that import and use the target entity**.
  - Analyze real-world consumption patterns: How do callers interact with it? Are callers forced to write boilerplate or workarounds due to flaws in the target's API?
  - **Blast Radius & Backward Compatibility**: Evaluate the exact impact of any proposed changes, refactorings, or type adjustments on existing consumers. Flag any breaking changes.
  - Identify obsolete, inconsistent, or antipattern usages at call sites that should be refactored alongside the entity.

### 4. Mandatory Unit Test Audit & Quality Inspection (Rewrite, Refine, or Create)
- **Locate and Inspect Tests**: Search for corresponding unit tests in the adjacent or package `__tests__/` directory (e.g., `__tests__/<Entity>.test.ts` or `<name>.test.ts`).
- **Assess Test Quality & Completeness (Audit)**:
  - Do not merely check if a test file exists. Critically inspect the quality, depth, and thoroughness of the test suite.
  - Detect incomplete, superficial, or low-quality tests: superficial smoke tests with only 1 shallow assertion, missing edge cases (empty strings, `null`, `undefined`, 0, negative values, invalid objects), unhandled error branches, untested reactive properties, unverified event emissions, or ignored lifecycle hooks (`onMounted`, `onUnmounted`, resource cleanup).
- **Rewrite or Refine Incomplete / Low-Quality Tests**:
  - If existing tests are **incomplete, shallow, fragile, or of low quality**, do NOT settle for minor cosmetic edits: **completely rewrite (`перепиши`) or deeply refine (`доработай`)** them into a robust, comprehensive test suite.
  - Ensure all public APIs, states, methods, branches, asynchronous workflows, and lifecycles are explicitly tested with clean assertions.
- **Add Tests from Scratch if Missing**:
  - If the entity **has no unit tests at all**, it is **strictly mandatory to author and implement a complete unit test suite** (`__tests__/<Entity>.test.ts`) from scratch.
- **Execution & Clean Pass Verification**: Run tests using the test runner (e.g. `npx vitest run <path-to-test>`) to ensure 100% test success with 0 failures and 0 framework/Vue warnings.

---

## 1. Architectural Integrity & Modernity vs Obsolete Patterns

### A. Architectural Evaluation
- **Separation of Concerns (SoC)**: Is business logic strictly separated from UI and presentation? Are responsibilities distributed cleanly across packages (e.g., framework-agnostic logic in `functional-basic`, reactive glue in `functional`, component abstractions in `constructor`, design primitives in `d1`)?
- **Modularity & Decoupling**: Is the entity self-contained and modular? Are dependencies injected cleanly or tightly coupled?
- **Single Responsibility & Cohesion**: Does the entity do one thing well, or is it a "Swiss army knife" / God object that needs decomposition?
- **Scalability & Extensibility**: Can this code be extended without breaking existing contracts (Open/Closed Principle)? Are extension points (inheritance, composition, hooks, slots, events) designed intentionally?
- **Dependency Graph & Inbound/Outbound Coupling**: Does the entity maintain a clean dependency graph? Are its outbound dependencies minimal and aligned with package layering? Are inbound call sites clean and consistent across the codebase?

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
- **Accessibility & ARIA (A11y)**:
  - Full WAI-ARIA compliance: correct roles (`role="img"`, `role="button"`, `role="dialog"`, etc.), dynamic attributes, and states (`aria-expanded`, `aria-controls`, `aria-selected`, `aria-checked`, `aria-disabled`, `aria-live`, `aria-haspopup`).
  - Screen reader support: descriptive `aria-label` or `aria-labelledby`, `aria-describedby`, and mandatory hiding of purely decorative elements (`aria-hidden="true"`).
  - Keyboard accessibility and focus management: logical tab order, focus restoration, focus trapping in modals/dialogs, focus-visible styling, and standard keyboard handlers (Enter, Space, Escape, Arrow keys).
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
- **Accessibility & ARIA Integration (Constructors & Controllers)**:
  - ARIA attribute encapsulation: ARIA attributes must be encapsulated within dedicated `aria` getters (e.g. `get aria(): AriaList`) or via `AriaStaticInclude` (`AriaStaticInclude.role()`, `label()`, `hidden()`) inside constructor classes rather than fragmented across inline template bindings.
  - Automatic decorative asset hiding: automatically assigning `AriaStaticInclude.hidden()` / `aria-hidden="true"` when meaningful text/labels (like `alt` or `label`) are absent.

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
  - Outbound imports must strictly respect monorepo package hierarchy (`functional-basic` -> `functional` -> `constructor` -> `d1`).
  - Zero circular dependencies.
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
- **Accessibility & ARIA Standards (WAI-ARIA & A11y)**:
  - Mandatory ARIA support for interactive, graphical, and informative UI components.
  - Proper use of `AriaStaticInclude` (`role()`, `label()`, `hidden()`, etc.) and dedicated `aria` getters in component constructor classes.
  - Correct role assignments and state synchronization (`role="img"`, `role="button"`, `role="dialog"`, etc.).
- **Mandatory Unit Tests Quality & Coverage**:
  - Every entity (constructor class, utility function, composable, helper) must be backed by thorough, high-quality unit tests in its corresponding `__tests__/` directory.
  - Test suites must be critically audited for completeness and quality: if tests are incomplete, superficial, or low-quality, they must be rewritten or deeply refined; if tests are missing for an entity, comprehensive tests must be created from scratch.

---

## 5. Review Output Format

### A. Delivery & Language Requirements
1. **Output Language (Strict `wikiLanguage` from `./design.config.json`)**:
   - The AI agent MUST open and read `./design.config.json` to extract the `wikiLanguage` property.
   - If `wikiLanguage` is `'ru'`, the entire review document MUST be written strictly in Russian (все разделы, заголовки, категории, описания багов и рекомендации должны быть написаны на русском языке).
   - If `wikiLanguage` is `'en'`, write in English.
   - If no language is found after reading `./design.config.json`, default to English (`'en'`).
   - Technical identifiers, type names, code snippets, and file paths must always remain untranslated in their original form.
2. **AI Artifact Delivery (Do NOT Describe in Chat, Do NOT Pollute Repository)**:
   - Save the full report exclusively as an **AI Artifact** (e.g., in `<appDataDir>/brain/<conversation-id>/code_review_<target>.md` or the agent's artifact directory).
   - Do NOT output the full report, tables, or detailed findings into the current chat.
   - In the chat response, provide ONLY a concise 1–2 sentence notification with an overall score and a clickable markdown link to the generated artifact.
   - Do NOT create permanent review files in the project root (avoid creating `./code-review.md` in the git repository tree).

### B. Report Structure & Sections
Document the review in the artifact markdown file with the following sections (translate section titles and contents according to `wikiLanguage`, e.g. in Russian if `wikiLanguage` is `'ru'`):

#### 1. Executive Summary & Quality Score
- **Overall Rating**: Grade (e.g., `A`, `B`, `C`, `D`, `F`) or Score (0-100).
- **Core Verdict**: High-level summary of the implementation's strengths, weaknesses, and readiness for production.
- **Category Scores**:
  | Category | Rating | Summary |
  | :--- | :---: | :--- |
  | **Architecture & Modularity** | Excellent / Good / Needs Improvement / Poor | ... |
  | **Dependencies & Usages (Impact & Graph)** | Clean & Decoupled / Tight Coupling / Breaking Risks | ... |
  | **Modernity vs Legacy Patterns** | Modern / Outdated / Mixed | ... |
  | **Component / Class / Hook Design** | Excellent / Good / Needs Improvement / Poor | ... |
  | **Accessibility & ARIA (A11y)** | Fully Accessible / Minor Gaps / Inaccessible | ... |
  | **Bugs, Edge Cases & Leaks** | Clean / Minor Issues / Critical Bugs | ... |
  | **Unit Tests & Quality** | Comprehensive & High-Quality / Rewritten & Refined / Created from Scratch / Incomplete or Missing | ... |
  | **Project Rules & Conventions** | 100% Compliant / Minor Discrepancies / Non-compliant | ... |

#### 2. Deep Dive: Architectural & Design Quality
- Analysis of decomposition, encapsulation, and scalability.
- Evaluation of whether the entity is modern or relies on outdated practices compared to top-tier industry libraries.
- **Dependency & Inbound Usage Audit**:
  - **Outbound Dependencies**: Review of all imported modules, layer compliance (`functional-basic` -> `functional` -> `constructor` -> `d1`), `package.json` declaration, and tree-shakeability.
  - **Inbound Usages & Blast Radius**: Comprehensive scan and list of where the entity is used across the codebase, analysis of caller patterns, potential breaking change risks, and suggestions for caller refactoring.

#### 3. Detailed Findings & Bugs (Categorized by Severity)
- **Critical (P0 / Blocker)**: Bugs causing runtime crashes, data loss, memory leaks, SSR breaking issues, or reactivity breakage.
- **Major (P1 / Architecture & Modernity)**: Outdated techniques, violation of single responsibility, suboptimal paradigms, missing cleanup.
- **Minor (P2 / Conventions & Typing)**: Naming abbreviations, missing `/*#__PURE__*/`, missing or malformed bilingual JSDoc, missing explicit return types.
- **Nit / Suggestion (P3)**: Minor stylistic polish, code ergonomics, micro-optimizations.

*For each finding, provide: File, line number, explanation of the issue, and the exact reason why it is problematic.*

#### 4. Comparison with Industry Top Solutions
- Compare the reviewed solution with how leading open-source libraries (e.g., VueUse, Radix, Nuxt, TanStack) solve similar architectural problems.
- Highlight concrete lessons or patterns that could be adopted to elevate the code to top-tier quality.

#### 5. Actionable Refactoring, Code Fixes & Test Suite
- Provide ready-to-use before/after code diffs or refactored code blocks illustrating the recommended improvements.
- **Unit Test Rewrites, Refinements & Implementation**:
  - If existing tests are incomplete, superficial, or low-quality: rewrite or deeply refine them into an exhaustive test suite covering all branches, edge cases, and lifecycles.
  - If tests require updates due to code changes or uncovered branches: update and expand them.
  - If no tests exist for the entity: author and implement the complete unit test file in `__tests__/<Entity>.test.ts` from scratch.


