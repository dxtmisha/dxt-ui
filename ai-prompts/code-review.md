---
name: code-review
description: Conduct a rigorous code review assessing architecture, modern engineering standards vs obsolete patterns, bugs and edge cases, adherence to project rules, accessibility & ARIA compliance, and design quality, saved as an AI artifact in the language specified by wikiLanguage in ./design.config.json.
---

# Task: Strict Architectural and Quality Code Review

Act as an elite Principal Software Architect and Senior Code Reviewer. Your goal is to conduct an uncompromising, deep-dive code review of the specified files, components, classes, functions, or composables/hooks.

Your analysis must not be a superficial lint check. You must evaluate architectural soundness, technological relevance vs obsolete patterns, code flaws and subtle bugs, adherence to strict project conventions, and benchmark the implementation against industry-leading state-of-the-art standards.

---

## 🔴 Mandatory Pre-Review Protocol (Language & Delivery Target)

Before analyzing any code or generating any review text, you MUST execute these two mandatory steps:

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
  - Never omit accessibility labels (`alt`, `aria-label`) on interactive or meaningful elements; hide purely decorative elements with `aria-hidden="true"` or `AriaStaticInclude.hidden()`.

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
  | **Modernity vs Legacy Patterns** | Modern / Outdated / Mixed | ... |
  | **Component / Class / Hook Design** | Excellent / Good / Needs Improvement / Poor | ... |
  | **Accessibility & ARIA (A11y)** | Fully Accessible / Minor Gaps / Inaccessible | ... |
  | **Bugs, Edge Cases & Leaks** | Clean / Minor Issues / Critical Bugs | ... |
  | **Project Rules & Conventions** | 100% Compliant / Minor Discrepancies / Non-compliant | ... |

#### 2. Deep Dive: Architectural & Design Quality
- Analysis of decomposition, encapsulation, and scalability.
- Evaluation of whether the entity is modern or relies on outdated practices compared to top-tier industry libraries.

#### 3. Detailed Findings & Bugs (Categorized by Severity)
- **Critical (P0 / Blocker)**: Bugs causing runtime crashes, data loss, memory leaks, SSR breaking issues, or reactivity breakage.
- **Major (P1 / Architecture & Modernity)**: Outdated techniques, violation of single responsibility, suboptimal paradigms, missing cleanup.
- **Minor (P2 / Conventions & Typing)**: Naming abbreviations, missing `/*#__PURE__*/`, missing or malformed bilingual JSDoc, missing explicit return types.
- **Nit / Suggestion (P3)**: Minor stylistic polish, code ergonomics, micro-optimizations.

*For each finding, provide: File, line number, explanation of the issue, and the exact reason why it is problematic.*

#### 4. Comparison with Industry Top Solutions
- Compare the reviewed solution with how leading open-source libraries (e.g., VueUse, Radix, Nuxt, TanStack) solve similar architectural problems.
- Highlight concrete lessons or patterns that could be adopted to elevate the code to top-tier quality.

#### 5. Actionable Refactoring & Code Fixes
- Provide ready-to-use before/after code diffs or refactored code blocks illustrating the recommended improvements.
