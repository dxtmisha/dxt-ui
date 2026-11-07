---
name: code-review
description: Conduct a deep architectural, security, SSR, memory, and code quality review with safe auto-fixes, artifact reporting, and automated test/docs finalization.
---

# Task: Strict Architectural and Quality Code Review

Act as an elite Principal Software Architect and Senior Code Reviewer. Your goal is to conduct an uncompromising, deep-dive code review of the specified files, components, classes, functions, or composables/hooks.

Your analysis must go far beyond a superficial lint check: **you MUST exhaustively trace and verify all execution scenarios that could lead to incorrect operation of the entity, wrong return values/responses, broken or unexpected runtime behavior, or code crashes**. Evaluate architectural soundness, security vulnerabilities and safe data handling, dependency health, real-world usage across the codebase, technological relevance vs obsolete patterns, subtle bugs and edge cases, adherence to strict project conventions, full SSR compatibility, memory leak prevention, and alignment with industry-leading state-of-the-art standards.

---

## 🔴 Mandatory Pre-Review Protocol

Before analyzing any code or generating any review text, you MUST execute these mandatory steps:

### 0. Mandatory Pre-Review Registry Check (`temp.md` Deduplication Guard, Recursive Intra-Package Dependency Resolution & Directory / Multi-File Batch Processing)
- **Mandatory Re-Reading of `ai-prompts/code-review.md` Upon Context Compaction or Every 8 Reviewed Files (Batch Freshness Guard)**:
  - During directory, folder, multi-file, or dependency chain batch reviews, the agent **MUST re-read `ai-prompts/code-review.md` completely in full from disk**:
    1. Immediately after any **chat context compaction / summarization**; OR
    2. **Once every 8 reviewed files** (i.e., after every 8th file or dependency reviewed in the batch).
  - **Context Freshness Guard**: Whenever chat data is compacted or the reviewed file counter reaches a multiple of 8, the **first tool call before starting the next entity review MUST be reading `ai-prompts/code-review.md` anew** to prevent prompt drift, refresh all evaluation rules, and ensure strict compliance with the review protocol.
- **Check Package Registry**: Before analyzing any code, creating an artifact, running searches, or proposing any changes, the agent **MUST first check** if `temp.md` exists in the current package root (e.g. `packages/functional-basic/temp.md`, `packages/functional/temp.md`, etc.).
- **Immediate Stop on Already Reviewed Entities**:
  - `temp.md` contains the canonical list of package entities (functions, classes, utilities) that have already successfully passed code review and testing.
  - If the requested target entity (by function/class name or relative file path) is **already present in `temp.md`**:
    **IMMEDIATELY STOP!** Do NOT perform code review, do NOT run blind searches, and do NOT create review artifacts. Inform the developer instantly that the code review for this entity has already passed and is listed in `temp.md`.
  - Only proceed with the review if the target entity is NOT listed in `temp.md` (or if the developer explicitly commands a forced re-review).
- **Mandatory Recursive Intra-Package Dependency Resolution (Depth-First / Bottom-Up Order)**:
  - Before reviewing any target file (whether specified individually or selected from a directory / multi-file queue), the agent **MUST inspect all entities imported by that file that belong to the same package** (excluding pure type-only imports `import type` / `*Types.ts` and constants/data files without executable logic).
  - Check every imported same-package entity against `temp.md`:
    1. **Recursive Descent to Leaf Dependencies**: If an imported entity belonging to the same package is **NOT yet listed in `temp.md`**, you **MUST defer reviewing the current file** and first transition to that dependency. Recursively repeat this check along the entire dependency chain until reaching the **leaf dependency** (an entity that either has no intra-package runtime imports or whose intra-package imports are all already listed in `temp.md`). If a file has multiple unreviewed intra-package dependencies, traverse them in alphabetical order (tracking visited nodes to avoid infinite loops on circular imports).
    2. **Bottom-Up Review & Unwinding**: Conduct a full, isolated code review (`code_review_<Dependency>.md`) starting from the deepest unreviewed dependency first. Only after all of a file's intra-package dependencies have been reviewed, finalized, and recorded in `temp.md` may the agent unwind the chain and review the dependent parent file itself.
- **Directory / Folder & Multi-File (>1 Files) Batch Processing Protocol**:
  - When the user specifies a **directory/folder** OR **multiple files (more than 1 file)** as the code review target (e.g. `packages/<pkg>/src/functions/`, `packages/<pkg>/src/classes/`, or a list of 2+ specific files):
    1. **Pre-Review Deduplication via `temp.md`**: Gather all target entity source files (from the specified directory or the passed list of files, excluding test directories `__tests__/`, test files `*.test.ts`, `*.spec.ts`, and barrel files `index.ts` / `library.ts` re-exports). Check each entity against `temp.md`. **Immediately exclude all files whose entities are already listed in `temp.md`** from the review queue. If all specified files (or all files in the folder) have already passed, inform the developer immediately that all entities have already been reviewed and stop.
    2. **Alphabetical Sorting with Recursive Dependency Pre-Resolution**: Sort the remaining unreviewed candidate files strictly **in alphabetical order** by entity name / file name. Before reviewing the next candidate file in the queue, always apply **Mandatory Recursive Intra-Package Dependency Resolution**: if the candidate imports any unreviewed entity from the same package (even if that entity lies later in the alphabetical queue, was not explicitly included in the multi-file list, or resides in another folder of the same package, e.g., `src/classes/` or `src/functions/`), recursively review and finalize the entire chain of unreviewed same-package dependencies down to the last leaf dependency first, and only then review the candidate file itself. (Skip any file in the main alphabetical queue that was already reviewed and added to `temp.md` earlier as a dependency).
    3. **Isolated Entity Review**:
       - Review each entity **strictly in isolation as if it was submitted individually** (either sequentially in the main agent or via parallel worker subagents for independent leaf files under item 6), applying the Batch Freshness Guard (re-reading `ai-prompts/code-review.md` on context compaction or every 8 files), all standard code review rules, dependency audits, allowed immediate auto-fixes, and creating a dedicated artifact (`code_review_<Target>.md`) for each entity.
    4. **Maximum Batch Size Limits by Group (3 Separate Counters Per Run)**:
       - **Three Distinct Entity Groups with Independent Counters**: During any directory or multi-file batch review, track three separate, independent counters in the current turn/run (counting both target files from the queue and any unreviewed intra-package dependencies resolved along the way, according to the group of each reviewed file):
         1. **Group 1 — Components** (Vue components `.vue`): **maximum 8 files per run** (Counter 1: `0..8`).
         2. **Group 2 — Classes & Hooks/Composables** (`class`, `src/classes/`, composables/hooks `use*`, `executeUse*`): **maximum 12 files per run** (Counter 2: `0..12`).
         3. **Group 3 — Everything Else** (pure functions `src/functions/`, utilities, etc.): **maximum 24 files per run** (Counter 3: `0..24`).
       - **Automatic Pause When Any Counter Reaches Its Cap**: Because the counters are separate for each group (each reviewed entity increments only the counter of its own group), as soon as **Counter 1 reaches 8**, **Counter 2 reaches 12**, OR **Counter 3 reaches 24** (and the current file is finalized), the agent **MUST STOP**, output a concise summary of all reviewed files in the current run with links to their artifacts, and wait for the developer's next prompt to continue with the remaining queue.
    5. **Stop-on-Blocker vs Chained Auto-Finalization**:
       - **Chained Progression (Fast Track)**: If an entity has **NO critical issues (P0) and NO major architectural blockers (P1)**: execute the Post-Review Finalization Protocol (record in `temp.md`, verify tests via `vitest run`, synchronize Storybook MDX), notify in chat with the artifact link, and **automatically proceed to the next entity in the dependency chain or alphabetical queue** (respecting the Batch Freshness Guard and per-run group caps above).
       - **Mandatory Halt on Blocker (Stop-on-Issue)**: If an entity (whether a leaf dependency in the chain or the target file itself) contains **critical issues (P0), major architectural flaws (P1), breaking changes, or runtime defects requiring developer decisions**: **IMMEDIATELY HALT!** Do NOT proceed to dependent parent files or subsequent files in the folder / multi-file queue. Generate the artifact for the current file, report the blockers in chat, freeze tests, documentation, and `temp.md` for this file, and halt until the developer reviews and issues explicit instructions or confirmation («готово»).
    6. **Parallel Execution & Multi-Process / Subagent Acceleration (Mandatory When Supported)**:
       - If the AI agent runtime supports launching multiple parallel processes, concurrent tool calls, or background subagents (`invoke_subagent`, parallel file reads/edits, concurrent test runs), the agent **MUST actively utilize this capability** to maximize review speed and throughput:
         - **Parallel Tool Calls (I/O & Verification)**: Always batch independent operations in parallel within a single turn — read source files, unit tests, and localized Storybook docs (`*.ru.mdx`, `*.en.mdx`, `*.vi.mdx`) simultaneously; write review artifacts and update MDX files in parallel; and batch `npx vitest run` executions across multiple independent test files.
         - **Parallel Subagents / Processes via Orchestrator-Worker Pattern**: After mapping the intra-package dependency graph for the current batch, independent leaf dependencies or independent files that do not depend on each other may be delegated to parallel worker subagents for simultaneous analysis, auto-fixing, test/MDX updates on their isolated files, and artifact generation, strictly following the **Orchestrator-Worker** architecture:
           1. **Dependency Order Integrity**: Workers only process independent leaf/sibling entities; a parent file is never reviewed or finalized before all of its intra-package dependencies have passed review.
           2. **Centralized Orchestrator State (`temp.md` & Counters)**: Worker subagents **MUST NEVER** modify shared registry files (`temp.md`) directly and do not manage global batch counters. Workers return their review results and artifact paths to the parent **Orchestrator agent**, which exclusively performs all writes to `temp.md` and increments the 3 group counters (`8` Components, `12` Classes & Hooks, `24` Everything Else) to prevent race conditions or lost entries.
           3. **Strict Counter & Blocker Enforcement**: The parent Orchestrator pre-allocates tasks within the remaining per-run group caps (`8` / `12` / `24`) and enforces immediate Stop-on-Blocker if any worker reports a `P0`/`P1` issue.

### 1. Mandatory Language Determination (`./design.config.json` -> `wikiLanguage`)
- **Direct Instruction & Explicit Override**: Reading `./design.config.json` specifically to extract `wikiLanguage` is an **explicit, mandatory user directive**. You MUST open and inspect `./design.config.json` to retrieve `wikiLanguage` (e.g., `"ru"` or `"en"`). NEVER skip this check, assume English without checking, or refuse to read the language configuration.
- **Language Enforcement**:
  - If `wikiLanguage` is `"ru"`, the **entire code review report MUST be written strictly in Russian** (all sections, headings, categories, explanations, bug descriptions, summaries, and recommendations).
  - If `wikiLanguage` is `"en"` (or if no language property is found), write in English; if another language code is specified (e.g., `"vi"`), write strictly in that configured language.
  - Code snippets, TypeScript type names, variable names, technical identifiers, and file paths must always remain untranslated in their original form.

### 2. Artifact Delivery (Zero Chat Dumping, Do NOT Pollute Repository)
- **Zero Chat Dumping**: It is **STRICTLY FORBIDDEN** to output the full review, tables, or detailed bug descriptions into the chat.
- **Save Exclusively as an AI Artifact**:
  - Write the full report to an **AI Artifact** (`<appDataDir>/brain/<conversation-id>/code_review_<target>.md`) using the artifact creation tool (`write_file` / `write_to_file` in the artifacts directory).
  - Do NOT save permanent review files in the project repository root (never create `./code-review.md` in the git workspace).
- **Minimal Chat Response**:
  - Output **ONLY a concise 1–2 sentence notification** in the chat containing the overall score/grade and a clickable link to the generated artifact (`[code_review_<target>.md](file:///...)`). Never re-summarize or duplicate findings in the chat.

### 3. Workflow for Code Modifications: Allowed Immediate Fixes vs Architectural Changes
- **Allowed Immediate In-Place Fixes**:
  During code review, the AI agent **CAN and MUST immediately fix** the following categories of obvious, safe, and non-breaking defects directly within the audited files (without waiting for a separate developer command):
  1. **Typos**: Any typos or grammatical errors in comments, string constants, messages, or local variable names.
  2. **JSDoc/TSDoc Formatting & Additions (`jdoc.md`)**: Adding missing descriptions for functions, methods, or properties, enforcing the mandatory bilingual standard (English / Russian), and formatting `@param` and `@returns` tags.
  3. **Obvious Minor Typing Ergonomics, Narrow Parameter Types & Quick Wins (Mandatory Auto-Fix)**:
     - **Discrepancy Between Narrow Typing and All-Inclusive Runtime Coercion**: If an input parameter is typed too narrowly or rigidly (e.g. `param: string`, `param: string | RegExp`, non-optional `param`), while runtime checks, normalization helpers, or fallback logic safely handle all values (`toString(param)`, `isFilled(param)`, `isRegExp(param)`, `typeof param !== '...'`, `Boolean(param)`, or `String(param ?? '')`) — **you MUST automatically widen and make the parameter optional/permissive in-place** (e.g., to `param?: unknown`, `param?: string | RegExp | number | boolean | null`, or `param?: string | undefined`) to eliminate needless type assertions (`as unknown as string`, `as any`), unblock callers from passing optional values, and align TypeScript types with actual runtime flexibility.
     - **Loss of Generic Return Type Inference from Fallback/Default Values (`defaultValue`)**: When an accessor method, storage utility, or getter function accepts a generic type parameter `<T = unknown>` and an optional default fallback value/factory (e.g., `defaultValue?: D`), but TypeScript fails to infer `T` when the caller omits `<T>` (leaving `T = unknown` and unnecessarily degrading the return type to `unknown`), **you MUST automatically refine the return type helper in-place** using conditional type unwrapping (e.g., `type EntityGet<T, D = undefined> = [D] extends [undefined] ? (T | undefined) : unknown extends T ? (D extends () => infer R ? R : D) : T`). This ensures calls like `storage.get('theme', 'dark')` or `get('count', () => 42)` infer exact types (`string`, `number`) automatically without forcing callers to write redundant explicit generic arguments (`<string>`).
     - **No Function Overloads (Single Unified Signature)**: Avoid TypeScript function overloads (`export function ...\nexport function ...`) when widening parameters or refining return types. Always achieve type ergonomics and literal type preservation via a single unified signature using generics, default types, and conditional return types (e.g., `export function capitalize<T = string>(value?: T, ...): T extends string ? Capitalize<T> : string` instead of multiple overload declarations). Single signatures are concise, easier to maintain, prevent JSDoc duplication, and generate cleaner `.d.ts` declaration files without overload boilerplate.
     - **Test Assertion Cleanup**: Removing redundant `// @ts-expect-error` directives or type casts (e.g., `as unknown as string`, `as any`) in associated unit tests that become unnecessary after the type fix.
  4. **Redundant Logic, Dead Code & Boundary Guards**:
     - Eliminating duplicate conditions in logical expressions (e.g., when `A || (B && C)` re-evaluates `A` inside `C`), unreachable branches, dead code, and unused private helpers, constants, types, or local imports.
     - **Redundant Optional Chaining & Syntax Cleanup**: Removing redundant `?.` operators on guaranteed non-null members (e.g., `obj?.method?.()` -> `obj?.method()`) and unifying invocation styles across adjacent methods.
     - **Falsy Boundary Traps, Property Existence Guards & Non-Destructive Merging**:
       - Replacing truthiness checks (`if (value)` or `isFilled(value)`) on numeric/`NumberOrString` properties where `0` is valid with `value !== undefined` (or `!isNull(value)`).
       - Unwrapping computed/default fallback branches from `if (key in object)` / `Object.hasOwn` guards so default resolvers execute when optional keys are omitted.
       - Preventing unconditional spreads (`{ ...base, key: optionalValue }`) from overwriting existing `base` properties with `undefined`, and adding missing union members or interface properties to `switch` statements and lookup maps per `*Types.ts`.
  5. **Micro-Optimizations, Loop Safeguards & Check Unification**:
     - Caching collection lengths before indexed loops (`const length = array.length`), adding early exits for empty collections (`if (length === 0) return ...`), hoisting loop invariants, extracting magic numbers into named bilingually documented constants, and unifying check styles within loops (e.g., avoiding mixed `charCodeAt` and string literal indexing in the same iteration).
  6. **Class Structure & Method Ordering (`ai-prompt.md` & Section 2.B)**:
     - Automatically reorder class members, properties, and methods in-place to strictly match the canonical class structure and method ordering rules defined in Section 2.B (`Properties -> constructor -> computed -> Public/Protected/Private methods`).
- **Auto-Fix Reporting & Verification**:
  - Document all applied in-place fixes in **Section 2 of the AI Artifact** (see Section 6.B.2) and immediately verify them via `npx eslint --fix`, TypeScript typecheck (`tsc`/`vue-tsc --noEmit` or package `build`), and `npx vitest run` (see **Post-Review Finalization Protocol Step 4**, which explicitly overrides the general Build Execution Guard in `ai-prompt.md`). Fix any introduced lint or type errors immediately in-place.
- **Strict Prohibition of Structural & Breaking Modifications**:
  - Large architectural refactorings, class or component rewrites, business logic modifications, entity deletions, or **breaking public API signature changes** (such as narrowing parameter types, removing parameters, changing argument order, or renaming public methods/props/exports — as opposed to non-breaking, backward-compatible parameter widening and generic return type inference allowed above) are **STRICTLY FORBIDDEN** without an explicit direct command from the developer. Document all structural proposals **exclusively within Section 6 of the AI Artifact**.
- **Fast Track vs Freeze on Blockers**:
  - Follow the **Post-Review Finalization Protocol** below: if **NO `P0` (Critical) or `P1` (Major) issues and NO breaking changes** are found, proceed **immediately and autonomously in the same turn (Fast Track)** to update `temp.md`, unit tests in `__tests__/`, and Storybook MDX in `src/storybook/`. If `P0`/`P1` blockers or structural proposals exist, **freeze** all test, doc, and `temp.md` updates until the developer explicitly confirms («готово»).

### 4. Mandatory Dependency & Inbound Usage Investigation (Graph & Blast Radius Audit)
- **Never Review in Isolation**: Always inspect both what the target depends on and every place where it is consumed across the codebase.
- **Outbound Dependencies Audit (What it depends on)**:
  - Inspect all imports, utilities, classes, and packages used by the target.
  - Verify strict layer boundaries (`functional-basic` -> `functional` -> `constructor` -> `d1`): lower-level packages must never import from higher-level packages.
  - Verify `package.json` synchronization: all imported external or monorepo packages must be declared in `package.json` with valid version constraints (`>=`).
  - Detect redundant, bloated, or circular dependencies and verify tree-shakeability.
- **Inbound Usages Audit (Where and how it is used across the codebase)**:
  - Search and inspect **all call sites, components, composables, and files that import and use the target entity**.
  - Analyze real-world consumption patterns: Are callers forced to write boilerplate or workarounds due to flaws in the target's API?
  - **Blast Radius & Backward Compatibility**: Evaluate the exact impact of any proposed changes, refactorings, or type adjustments on existing consumers and flag breaking changes.
  - Identify obsolete, inconsistent, or anti-pattern usages at call sites that should be refactored alongside the entity.

### 5. Mandatory Unit Test Audit & Quality Inspection (Audit in Artifact First; Apply via Fast Track or Upon Confirmation)
- **Locate & Inspect Tests**: Search for corresponding unit tests in the adjacent or package `__tests__/` directory (`__tests__/<Entity>.test.ts` or `<name>.test.ts`).
- **Assess Test Quality & Completeness**:
  - Critically inspect test depth: detect superficial smoke tests (e.g., 1 shallow assertion), missing edge cases (`''`, `null`, `undefined`, `0`, negative values, invalid objects), unhandled error branches, untested reactive properties, unverified event emissions, ignored lifecycle hooks (`onMounted`, `onUnmounted`, resource cleanup), or unverified SSR behavior (server-side rendering safety and hydration compatibility).
- **Read-Only Verification (Run Test Runner)**:
  - Execute the test runner (`npx vitest run <path-to-test>`) to verify current pass/fail status, failure points, and execution coverage (and re-run to verify any Immediate In-Place Fixes applied in Step 3).
- **Formulate Comprehensive Test Suite in the Artifact**:
  - If existing tests are incomplete, shallow, fragile, or missing, author the complete, copy-paste-ready unit test suite **STRICTLY inside Section 6 of the AI Artifact report**.
  - **No Contrived Hypothetical Tests**: Apply Pre-Review Step 6 strictly — never penalize existing tests or add test cases for speculative, non-practical inputs that cause neither crashes nor security vulnerabilities.
  - **Freeze on Blockers vs Fast Track Auto-Finalization**: Follow the **Post-Review Finalization Protocol** (freeze workspace test/doc edits if `P0`/`P1` blockers or structural proposals exist until «готово»; otherwise apply immediately via Fast Track).

### 6. Practical Usage & Impact Filter (Strict Ban on Hypothetical Findings & Over-Engineering)
- **Ground Every Finding in Practical Usage (Zero Speculative Hypotheses)**: Assess code strictly through **practical real-world usage, actual consumer call sites, and intended functional purpose**. It is **STRICTLY FORBIDDEN** to raise remarks, deduct score points, or propose defensive code based on artificial, speculative "what-if" hypotheses detached from real user behavior.
- **Mandatory Two-Step Practicality & Consequence Gate**: Before flagging any edge case, internal marker/delimiter collision, or unusual input, you MUST pass it through two questions:
  1. **Practical Likelihood**: Will a real user or caller actually do or encounter this in normal, practical operation?
  2. **Actual Consequence (Crash & Security vs Self-Inflicted Layout Glitch)**: Even if someone deliberately enters that contrived input, what actually happens?
     - **Valid Finding (Report)**: Causes a **runtime crash / unhandled exception**, **infinite loop / ReDoS freeze**, **data loss or corruption**, **memory leak**, **SSR cross-request state leak**, or an **exploitable security/attack vulnerability** (XSS script execution, attribute breakout, injection, prototype pollution).
     - **Irrelevant Quirk (Strictly Ignore)**: Causes **no crash** and **no security vulnerability** — and at worst only distorts visual markup/layout for the very user who deliberately typed an unnatural string.
- **Concrete Calibration Example (`___HIGHLIGHT_START___`)**: If a highlighting utility uses a static internal marker such as `___HIGHLIGHT_START___` and replaces it with `<span class="...">` (with an already-sanitized class attribute), **NEVER** report *"if a user types `___HIGHLIGHT_START___`, everything breaks"*. Real users do not type `___HIGHLIGHT_START___` in practice; even if someone enters it intentionally, there is zero crash and zero XSS/attack vector — at worst, only that user's local text markup renders an extra harmless `<span>`. Flagging this or proposing `random()` collision-avoidance loops or custom HTML parsers is **strictly forbidden**.
- **Real vs Contrived Boundaries**: Distinguish genuine production edge cases (`0`, `false`, `null`, `undefined`, `''`, whitespace, real user inputs with regex metacharacters like `$10` or `C++`, real XSS payloads like `<img onerror=...>` or unescaped attributes, SSR shared global state, unhandled promise rejections, lifecycle teardown) from paranoid "all-life-cases" scenarios that bloat code without practical value.
- **Proportionality & Cleanliness**: Keep defensive checks strictly proportional to real risks. Keep code lean, fast, readable, and purposeful.

---

## 1. Architectural Integrity & Modernity vs Obsolete Patterns

### A. Architectural Evaluation
- **Separation of Concerns (SoC)**: Is business logic strictly separated from UI/presentation and distributed cleanly across packages (`functional-basic` framework-agnostic logic -> `functional` reactive glue -> `constructor` component abstractions -> `d1` design primitives)?
- **Modularity & Decoupling**: Is the entity self-contained and modular with clean dependency injection rather than tight coupling?
- **Single Responsibility & Cohesion**: Does the entity do one thing well, or is it a "Swiss army knife" / God object that requires decomposition?
- **Scalability & Extensibility**: Does it adhere to the Open/Closed Principle with intentional extension points (inheritance, composition, hooks, slots, events)?
- **Dependency Graph & Coupling**: Are outbound dependencies minimal and layer-compliant, and are inbound call sites clean and consistent across the codebase?

### B. Modern Solutions vs Obsolete Techniques
- **Outdated Techniques Detection**:
  - Legacy Vue habits (Options API patterns, Vue 2 reactivity workarounds, prop mutation, global event buses, `$attrs`/`$listeners` anti-patterns).
  - Outdated TypeScript paradigms (excessive `any` or type assertions instead of type narrowing, utility types, template literal types, `satisfies`, discriminated unions).
  - Legacy DOM manipulation (direct element mutations, `querySelector` hacks, manual style manipulation instead of reactive bindings, CSS variables, or standard Web APIs).
  - Obsolete asynchronous patterns (unhandled promise rejections, missing `AbortController` cancellation, callback hell vs `async`/`await`, missing race condition guards).
- **Modern Vue 3.5+ & TypeScript 5.x Standards**:
  - **Vue 3.5+ Idioms**: Reactive props destructuring, `useTemplateRef()` for typed template refs, `onWatcherCleanup()` for side-effect disposal inside watchers, `defineModel()` where appropriate, and isomorphic SSR ID generation (`useId()` / project ID helpers) to prevent hydration mismatches on `id` / `aria-labelledby` / `aria-controls`.
  - **TypeScript 5.x Idioms**: `satisfies` for config/dictionary validation without widening literal types, `const` generic type parameters (`<const T>`), `as const` objects/tuples and union types over runtime-heavy `enum` declarations where appropriate, and conditional return type inference.
- **Benchmarking Against Modern Top-Tier Standards & Actionable Conclusion**:
  - Compare against state-of-the-art industry benchmarks (Radix UI, Headless UI, Ark UI, VueUse, Nuxt 3 core, TanStack).
  - Check utilization of modern web platform standards (native Popover API, CSS container queries, subgrid, modern `IntersectionObserver`/`ResizeObserver` APIs) where appropriate.
  - Verify optimal tree-shaking, `/* #__PURE__ */` annotations, and minimal runtime overhead.
  - Always synthesize comparisons into a clear, reasoned architectural conclusion (`Вывод`).

---

## 2. Entity-Level Design & Quality Assessment

Evaluate the target according to its specific entity type (in addition to the cross-cutting checks in Sections 3–5):

### A. Vue Components (`.vue`) & UI Constructors (`constructor` / `d1`)
- **Composition & Atomicity**: Minimal, single-purpose component with complex business/state logic extracted into composables.
- **Props & Emits Contract**: Strictly typed via `defineProps<{ ... }>()` and `defineEmits<{ ... }>()`; strict one-way data flow (never mutate incoming props); predictable naming with `kebab-case` event names.
- **Template Hygiene**: Cleanest possible semantic HTML; zero function calls, complex calculations, or inline styles in templates; unique non-index `:key` in `v-for`; never combine `v-if` with `v-for` on the same element.
- **Styles, Design Tokens & RTL/LTR Logical Properties**: Strict SCSS mixin usage from `@dxtmisha/styles` and token compliance with `properties.json`; zero hardcoded colors, borders, or spacing values; never modify base UI library styles; **strict RTL/LTR logical CSS properties and mixins** (`inset-inline`, `margin-inline`, `padding-inline`, `text-align: start/end` instead of physical `left`/`right`/`margin-left`/`padding-right`); PurgeCSS compliance (all class names must be unbroken string literals).
- **Component Lifecycle, SSR, WCAG 2.2 & Security**: Safe `Teleport` targets and `ClientOnly` wrappers; deterministic initial markup matching between server and client (no `<p><div>...</div></p>` invalid nesting); full WAI-ARIA & **WCAG 2.2 AA** compliance (`:focus-visible` ring, `inert` background locking and focus restoration on modal/menu close, `prefers-reduced-motion` support for animations); sanitized bindings (avoid `v-html`, sanitize dynamic SVGs and `href`/`src`/`action` URLs, enforce `rel="noopener noreferrer"` on `target="_blank"`).

### B. TypeScript Classes (`class`)
- **Structure & Ordering**:
  - Strict member ordering: Properties (`public` -> `protected` -> `private`) -> `constructor` -> Computed/Reactive Properties (`computed` and reactive fields placed immediately after constructor) -> Public Methods -> Protected Methods -> Private Methods.
  - Strict method ordering within visibility groups: `get` -> `set` -> `is...` -> `has...` -> `get...` -> `set...` -> `add...` -> `remove...` -> `update...` -> `reset...` -> remaining methods (grouped by semantic pairs such as `min`/`max`, `width`/`height`, then alphabetically).
- **Encapsulation & Immutability**: Strict visibility modifiers (`protected`/`private` for internals) and immutability (`readonly`, `as const`).
- **Reuse of Project Primitives**: Use helper primitives from `@dxtmisha/functional-basic` (`isFunction`, `executeFunction`, `isFilled`, `isObject`, `isArray`, `isString`, etc.) instead of custom inline checks.
- **Canonical State vs Derived/Mutated Helper State**: Verify whether a class or method reads from an injected helper that returns a *derived or UI-mutated* representation when the logic actually requires the *canonical source configuration* (`this.props`). Depending on a dynamically mutated helper state for static rules, metadata, or constraints causes those rules to silently break during UI state transitions and introduces unnecessary coupling.
- **Exhaustiveness Against Type Definitions (`*Types.ts`)**: Cross-check all `switch` statements, lookup dictionaries, and property/attribute whitelists against the full TypeScript union types and interfaces in `*Types.ts` to ensure no valid union variants or declared interface properties are omitted.
- **Consistent Defaults & Non-Destructive Merging Across Getters**: Verify that default fallback values are applied consistently across all related output getters/methods of a class, and that optional overrides are merged only when defined (`!== undefined` or via `toBinds`) so they never overwrite existing base properties with `undefined`.
- **ARIA Encapsulation (Constructors & Controllers)**: Encapsulate ARIA attributes inside dedicated `aria` getters (`get aria(): AriaList`) or via `AriaStaticInclude` (`AriaStaticInclude.role()`, `label()`, `hidden()`) rather than fragmented template bindings; automatically hide decorative assets (`AriaStaticInclude.hidden()` / `aria-hidden="true"`) when meaningful labels (`alt`/`label`) are absent.
- **Lifecycle, SSR & Security**: Request-isolated SSR singletons via `ServerStorage.get('key', () => new Class())` (zero mutable static/module state); explicit `destroy()` / `dispose()` / `reset()` teardown methods and bounded internal caches; prototype pollution guards, ReDoS-safe regexes, and credential-safe error serialization.

### C. Functions & Utilities (`function`)
- **Purity & Determinism**: Side-effect-free pure functions; top-level module invocations annotated with `/* #__PURE__ */` for bundler tree-shaking.
- **Cyclomatic Complexity**: Early returns and guard clauses instead of nested `if/else` ladders; well-defined error boundaries without silent failures.
- **Signature Ergonomics & Single Unified Signature (No Overloads)**: Clean parameter lists using typed options objects with sensible defaults for functions with 3+ parameters. Strictly avoid function overloads — always express polymorphic inputs and literal type preservation through a single unified signature with generics, union types, or conditional types (e.g., `T extends string ? Capitalize<T> : string`).
- **Defensive Parsing & RegExp Safety**: ReDoS-free regular expressions; mandatory escaping of dynamic user search/input strings via `escapeExp` / `RegExp.escape` before `new RegExp(...)`; safe `JSON.parse` and numeric parsing guarded against unhandled exceptions or non-primitive inputs.

### D. Composables & Hooks (`use*` / `executeUse*`)
- **Reactivity Preservation**: Proper handling of reactive inputs (`MaybeRefOrGetter`, `toValue`, `toRefs`); zero accidental reactivity loss (no premature destructuring of reactive objects).
- **Scope & Singletons**: Shared or session-scoped state wrapped in `executeUseGlobal`, `executeUseLocal`, or `executeUseProvide` inside external service files; Vue components must never call raw `useApi*` / `executeUse*` factories directly in `<script setup>`.
- **Disposal, SSR & Messaging Security**: Mandatory cleanup via `onScopeDispose`; watchers bound to active `effectScope()` or explicitly stopped; bounded in-memory maps/registries; browser APIs guarded by `isDomRuntime()` with zero client-only polling/intervals running during SSR; strict origin/schema validation for `postMessage` and `BroadcastChannel`, sanitized URL query/hash/route state, and secure cookie flags (`SameSite`, `Secure`, `HttpOnly`) in `useCookieRef`.

---

## 3. Bugs, Edge Cases, Performance, Memory Safety & SSR Isomorphism

**MANDATORY EXHAUSTIVE SCENARIO AUDIT**: You MUST trace every execution path and state combination to identify any scenario that can cause:
- **Incorrect Entity Operation**: Logic branches, dependency interactions, or state transitions that prevent the entity from fulfilling its contract across its full lifecycle.
- **Wrong Return Values / Output Data**: Missing fallbacks, skipped computed resolvers, silent `undefined` overwrites, incomplete union/type mappings, or flawed transformations that return inaccurate results.
- **Broken or Unexpected Behavior**: Side effects between helpers, lost attributes/constraints on state toggles, desynchronized reactive states, or broken UX/DOM bindings.
- **Runtime Code Crashes**: Unhandled exceptions, null/undefined dereferences, invalid DOM/API calls, infinite recursion/loops, or unguarded parsing failures.

Rigorously search for subtle runtime and architectural defects across six core areas:

1. **Reactivity & State Bugs**:
   - Accidental loss of Vue reactivity, stale closures in composables/callbacks/computed getters, infinite reactivity loops, or un-memoized expensive calculations.
   - **Computed Reference Stability & Vue Reactivity Cost**: Detect `computed` properties that allocate and return fresh object/array literals on every evaluation even when underlying semantic values have not changed (causing cascading downstream `watch` triggers and unnecessary component re-renders); verify use of `shallowRef` / `markRaw` for large immutable collections, class instances, or DOM references where deep proxy tracking is wasteful.
2. **Algorithmic Complexity (Big-O), Hot Paths & Layout Thrashing**:
   - **Hidden Quadratic Complexity ($O(n^2)$)**: Detect linear lookups (`array.includes`, `find`, `indexOf`, `filter`) nested inside loops, `.map()`, `.reduce()`, or `v-for` templates that should be indexed via `Set` or `Map` ($O(1)$ lookup), as well as redundant multi-pass array chains (`.filter().map().find()`) or unnecessary deep clones on hot paths.
   - **DOM Layout Thrashing**: Detect interleaved DOM geometry reads (`getBoundingClientRect()`, `offsetWidth`, `scrollTop`) and style/DOM writes inside loops, resize/scroll handlers without `requestAnimationFrame` batching or throttling.
3. **Asynchronous & Concurrency Issues**:
   - Race conditions in async data fetches or event debounces, unhandled promise rejections, or uncancelled pending requests (`AbortController`).
4. **Memory Leaks & Resource Cleanup Failures**:
   - Missing `removeEventListener` on `window`, `document`, or external DOM elements in `onUnmounted` / `onScopeDispose` (or failure to use managed helpers like `useEventListener`).
   - Lingering `setInterval`, `setTimeout`, or `requestAnimationFrame` continuing after component unmount or scope disposal (especially critical in SSR where Node processes keep timers alive indefinitely).
   - Unstopped watchers (`watch`, `watchEffect`) created outside synchronous `setup()` or active `effectScope()`.
   - Detached DOM nodes retained in closures, static arrays, caches, or `Map`/`Set` references; unbounded caches without eviction policies.
   - Undisposed observers (`ResizeObserver`, `IntersectionObserver`, `MutationObserver`), media query listeners (`matchMedia`), or subscriptions (`BroadcastChannel`, `WebSocket`, custom event emitters, store subscriptions); missing `destroy()` / `dispose()` / `reset()` methods on stateful classes.
5. **Edge Cases & Pragmatic Boundaries**:
   - Unhandled `null`, `undefined`, `''`, `[]`, `{}`, `NaN`, `0`, negative numbers, division by zero, or off-by-one errors in realistic inputs.
   - **Falsy Value Traps on Valid Zero/Empty Boundaries**: Audit all conditional checks on numeric, `NumberOrString`, or boolean-like properties. Using raw truthiness (`if (value)`) or `isFilled(value)` treats numeric `0` (or `''`/`false` where valid) as absent and breaks logic on zero boundaries. Always require `value !== undefined` (or `!isNull(value)`).
   - **Property Existence Guards (`key in object`) Blocking Computed Fallbacks**: Audit loops and object builders that gate `switch` or fallback branches behind `if (key in object)` / `Object.hasOwn`. When computed fallback resolvers are placed inside `key in object`, passing a plain object that omits optional keys skips the fallback logic entirely. Computed/default properties must always be resolved independently of key presence on the raw input object.
   - **Practical Impact Filter**: Apply Pre-Review Step 6 strictly — evaluate edge cases only through practical usage and real consequences (crashes, data loss, leaks, or security/XSS flaws).
6. **SSR Hydration & Isomorphic Flaws**:
   - Direct access to browser globals (`window`, `document`, `navigator`, `localStorage`, `sessionStorage`, `location`) on the server without checking `isDomRuntime()` or deferring to `onMounted`.
   - Cross-request state pollution: storing user- or request-specific data in module-level global variables, shared refs, or static class properties, leaking state across concurrent SSR requests (must use `ServerStorage.get('key', () => new Class())`, `executeUseLocal`, or `executeUseProvide`).
   - Timers, continuous background polling loops, or DOM measurements (`offsetWidth`, `getBoundingClientRect`, canvas context) executing during server render.
   - Hydration mismatch risks between server-rendered and client-rendered DOM trees (non-deterministic random IDs, client-only timestamps/dates during initial render, browser-conditional markup during hydration, invalid HTML nesting like `<p><div>...</div></p>`).

---

## 4. Security & Vulnerability Audit

Conduct a systematic security assessment to identify vulnerabilities, injection vectors, and data leak risks:

1. **XSS (Cross-Site Scripting) & Markup Injection**:
   - Usage of `v-html` or `innerHTML` without robust sanitization.
   - Dynamic SVG rendering containing malicious `<script>` tags, event handlers (`onload`, `onerror`), or XML entity injection.
   - Dynamic code evaluation (`eval()`, `new Function()`, `setTimeout(string)`).
   - Unsanitized URL bindings in `href`, `src`, `action`, `formaction`, or window redirects allowing `javascript:`, `vbscript:`, or unapproved `data:` URI execution.
   - External links with `target="_blank"` missing `rel="noopener noreferrer"` (reverse tabnabbing vulnerability).
2. **Prototype Pollution & Object Integrity**:
   - Recursive object merging, deep cloning, query parameter hydration, or dot-notation path traversal (`set(target, path, value)`) without filtering `__proto__`, `constructor`, and `prototype`.
   - Using plain objects instead of prototype-less objects (`Object.create(null)`) when storing arbitrary dictionary keys from external sources.
3. **ReDoS (Regular Expression Denial of Service)**:
   - Vulnerable regular expressions with ambiguous nested quantifiers (`(a+)+`, `(a|aa)+`) or overlapping alternation branches prone to catastrophic exponential backtracking on adversarial inputs.
   - Unescaped user strings passed into dynamic `new RegExp(untrustedPattern)` constructors (must escape via `escapeExp` / `RegExp.escape`).
4. **Sensitive Data Exposure & Information Leakage**:
   - Hardcoded secrets, API keys, private tokens, passwords, or credentials in source code or client bundles.
   - Accidental logging of authorization headers, session cookies, tokens, or PII (Personally Identifiable Information) to console, `ErrorCenter`, URL query strings, or client error monitors.
   - Leaking server-side environment variables or private configs through SSR state hydration objects or public client manifests.
5. **Cross-Origin & Messaging Security**:
   - Insecure cross-window communication: `window.addEventListener('message', ...)` lacking strict `event.origin` verification.
   - Unauthenticated `BroadcastChannel` listeners trusting foreign messages without payload schema validation.
   - Open redirect vulnerabilities: navigating or redirecting to unvalidated user-supplied URLs without domain allowlist or relative-path verification.
6. **SSR & Request Isolation Security**:
   - SSRF (Server-Side Request Forgery): server-side data prefetching or API proxy utilities accepting user-controlled destination URLs without strict IP/domain allowlists.
   - Cross-request cache poisoning or session bleeding via shared module-level singletons in Nitro/Node.js SSR environments.
   - Insecure cookie configurations (`useCookieRef` or cookie utilities) missing `Secure`, `SameSite=Lax/Strict`, or `HttpOnly` attributes.
7. **Input Validation & Schema Integrity**:
   - Blind trust in external API responses, URL query/hash/route parameters, cookies, or `localStorage` data without schema validation (`@effect/schema` or strict type guards) and sanitization.
   - Insecure deserialization of untrusted data extracted from cookies, storage, or URLs.

---

## 5. Strict Project Rules & Conventions Compliance (`dxt-ui`)

Verify 100% compliance with all core `dxt-ui` engineering standards:
- **Strict TypeScript**: Zero `any` (use `unknown` or generics); explicit return types on all methods and exported functions; interfaces for all I/O, Props, and Emits; `@ts-expect-error` with explanatory comments (never `@ts-ignore`).
- **Zero Hallucinations & Dependency Integrity**: Strictly use dependencies declared in `package.json` (`>=`); never invent non-existent APIs or options; respect monorepo package layering (`functional-basic` -> `functional` -> `constructor` -> `d1`); zero circular dependencies.
- **Bilingual JSDoc/TSDoc (`jdoc.md`)**:
  - Classes, functions, and methods: multiline descriptions (English on top, Russian on bottom) with bilingual `@param` and `@returns` separated by ` / ` (`EN / RU`).
  - Interfaces, types, enums, and properties: compact single- or double-line bilingual format (`/** English / Russian */`).
- **Naming Conventions & No Aliases**:
  - Forbidden abbreviations: `el`, `val`, `temp`, `res`, `err`, `idx`, `cb`, `obj`, etc. Use full, semantically precise names.
  - Zero aliases or duplicate exports (e.g., `useFile = useMediaFile` or `inputFileList = fileList` is strictly forbidden — export and use strictly one canonical name).
- **Tree-Shaking (`/* #__PURE__ */`)**: Every top-level module function call, factory invocation, or constructor (`new Class()`) assigned to a constant/variable MUST be annotated with `/* #__PURE__ */`.
- **PurgeCSS Compatibility**: Never construct CSS class names dynamically via string concatenation or template literals (`'btn-' + size`, `` `badge-${color}` ``). Always use full, unbroken string literals in object syntax, dictionaries, or ternaries, or wrap external dynamic classes in `/* purgecss start ignore */ ... /* purgecss end ignore */`.
- **Accessibility, WCAG 2.2 & ARIA (WAI-ARIA & A11y)**: Full ARIA support for interactive, graphical, and informative components (`role="img"`, `role="button"`, `role="dialog"`, `aria-expanded`, `aria-controls`, `aria-selected`, `aria-checked`, `aria-disabled`, `aria-live`, `aria-haspopup`, `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-hidden="true"`); proper encapsulation via `AriaStaticInclude` and `get aria(): AriaList` in constructors; full keyboard navigation (`Enter`, `Space`, `Escape`, `Arrow` keys), `:focus-visible` outline compliance, focus trapping/restoration (`inert`), and `prefers-reduced-motion` awareness.
- **SSR, Memory, Security & Testing Compliance**: Full compliance with Section 3 (isomorphic `isDomRuntime()` / `ServerStorage.get()`, deterministic hydration, complete listener/timer/observer/watcher disposal), Section 4 (zero XSS/prototype pollution/ReDoS/data leaks), and Pre-Review Step 5 (thorough unit test audit documented in Section 6 of the artifact, freezing workspace test/doc modifications when `P0`/`P1` blockers or structural proposals exist until developer confirmation, or applying them immediately via Fast Track on a clean review).

---

## 6. Review Output Format

### A. Delivery & Language Enforcement
1. **Language**: Follow Pre-Review Step 1 (`./design.config.json` -> `wikiLanguage`: write the entire report in Russian if `'ru'`, or English if `'en'` / missing; keep code, types, identifiers, and paths untranslated).
2. **Artifact Only**: Follow Pre-Review Step 2 (save exclusively to `<appDataDir>/brain/<conversation-id>/code_review_<target>.md`; never create `./code-review.md` in the repository; reply in chat with ONLY a 1–2 sentence summary, overall rating, and artifact link).

### B. Report Structure & Sections
Structure the artifact markdown document with the following six sections (translate all section titles, table headers, and prose according to `wikiLanguage`):

#### 1. Executive Summary & Quality Score
- **Overall Rating**: Grade (`A`, `B`, `C`, `D`, `F`) and Score (`0–100`). When in-place auto-fixes were applied during the review, report both initial and post-fix scores (e.g., `94 -> 100 (A)`).
- **Objective Scoring Rubric & Grade Caps (Base = `100` pts)**:
  - **Grades**: `A` (`90–100`), `B` (`80–89`), `C` (`70–79`), `D` (`60–69`), `F` (`< 60`).
  - **Deductions per Finding**:
    - `P0 (Critical / Blocker)`: `-25` to `-40` pts each (caps maximum grade at `D`/`F`; blocks Fast Track auto-finalization).
    - `P1 (Major)`: `-10` to `-15` pts each (caps maximum grade at `C`; blocks Fast Track auto-finalization).
    - `P2 (Minor / Auto-Fixed)`: `-2` to `-5` pts on initial score, restored to `+0` deduction on post-fix score once fixed in-place during the review.
    - `P3 (Nit)`: `0` to `-2` pts.
- **Core Verdict**: High-level summary of strengths, weaknesses, and production readiness.
- **Category Scores** (use `N/A` / `Неприменимо` for categories irrelevant to the entity layer, e.g., `Accessibility & ARIA` for a pure data/string utility function):
  | Category | Rating | Summary |
  | :--- | :---: | :--- |
  | **Architecture & Modularity** | Excellent / Good / Needs Improvement / Poor | ... |
  | **Dependencies & Usages (Impact & Graph)** | Clean & Decoupled / Tight Coupling / Breaking Risks | ... |
  | **Modernity vs Legacy Patterns** | Modern / Outdated / Mixed | ... |
  | **Component / Class / Hook Design** | Excellent / Good / Needs Improvement / Poor | ... |
  | **Security & Vulnerabilities** | Secure / Minor Risks / High Vulnerabilities (XSS, ReDoS, Leaks) | ... |
  | **Accessibility & ARIA (A11y)** | Fully Accessible / Minor Gaps / Inaccessible / N/A | ... |
  | **SSR Compatibility & Isomorphism** | Safe & Isomorphic / Hydration Risks / Leaking Server State / N/A | ... |
  | **Memory Safety & Leak Prevention** | Zero Leaks & Clean Disposal / Lingering Listeners or Timers / Critical Memory Leaks / N/A | ... |
  | **Bugs & Edge Cases** | Clean / Minor Issues / Critical Bugs | ... |
  | **Unit Tests & Quality** | Comprehensive & High-Quality / Rewritten & Refined / Created from Scratch / Incomplete or Missing | ... |
  | **Project Rules & Conventions** | 100% Compliant / Minor Discrepancies / Non-compliant | ... |

#### 2. Applied Immediate Fixes
- **Mandatory Standalone Report Section**: If permitted non-breaking fixes were applied in-place during the review (Pre-Review Step 3: typos, bilingual JSDoc per `jdoc.md`, typing ergonomics like `value: unknown`, fallback generic return type inference, redundant check removal, replacing repeated string indexing with `charCode`, extracting character code constants, dead code/unused helper removal, redundant optional chaining cleanup, class structure and method reordering), provide a detailed report:
  - **Files and Lines**: Exact links to modified lines (`file.ts#L10-L15`).
  - **Category**: `Typo` / `JSDoc` / `Typing Ergonomics` / `Micro-Optimization & Check Unification` / `Dead Code Removal` / `Redundant Chaining & Syntax Cleanup` / `Class Structure & Method Ordering`.
  - **Rationale**: Technical reason and benefit (readability, performance, consistency).
  - **Code Before and After (Diff)**: Clear `diff` blocks illustrating the applied changes.
  - **Test Verification**: Unit test execution result after applying the changes (e.g., `vitest run: 37 passed`).
- If no automated fixes were required, state explicitly: *"No automated fixes required (code is originally clean)"*.

#### 3. Deep Dive: Architectural & Design Quality
- Analysis of decomposition, encapsulation, separation of concerns, and scalability.
- Evaluation of modernity vs outdated practices compared to top-tier industry libraries.
- **Dependency & Inbound Usage Audit**:
  - **Outbound Dependencies**: Review of all imported modules, layer compliance (`functional-basic` -> `functional` -> `constructor` -> `d1`), `package.json` declarations, and tree-shakeability.
  - **Inbound Usages & Blast Radius**: Comprehensive list of call sites across the codebase, analysis of caller patterns, breaking change risks, and caller refactoring recommendations.

#### 4. Detailed Findings & Bugs (Categorized by Severity)
- **Critical (P0 / Blocker)**: Exploitable security vulnerabilities (XSS, code/attribute injection, prototype pollution, credential exposure, ReDoS in public endpoints), runtime crashes, data loss, memory leaks, SSR breaking issues / cross-request state leaks, or reactivity breakage.
- **Major (P1 / Architecture & Modernity)**: Latent security weaknesses (missing `rel="noopener noreferrer"`, unvalidated external URLs, insecure cookie flags), outdated techniques, single-responsibility violations, suboptimal paradigms, missing cleanup / leak risks, SSR hydration mismatches.
- **Minor (P2 / Conventions & Typing)**: Naming abbreviations, missing `/* #__PURE__ */`, missing or malformed bilingual JSDoc, missing explicit return types, overly narrow parameter types in permissive runtime functions, degradation of generic return types to `unknown` when default fallback values are provided.
  - *Mandatory In-Place Auto-Fix*: All minor typing defects (such as narrow parameter types contradicting runtime coercion, loss of generic return type inference from default fallback values, missing optional modifiers, typos, JSDoc omissions, dead code branches, redundant optional chaining operators, or class structure and method ordering inconsistencies) **MUST NOT remain unaddressed in the codebase** — they MUST be fixed immediately in-place during the review (Pre-Review Step 3), documented in Section 2 ("Applied Immediate Fixes"), and marked as resolved in Section 4.
- **Nit / Suggestion (P3)**: Minor stylistic polish, code ergonomics, micro-optimizations.

*Strict Hypothetical Filter (Pre-Review Step 6)*: Speculative "what-if" scenarios that do not occur in practical usage and produce **no runtime crash, no data loss, and no security/attack vulnerability** are **STRICTLY EXCLUDED from all severity tiers (including P2 and P3/Nit)** and must never lower the review score.

*Mandatory Proof-of-Defect / Call Trace for `P0` & `P1` Blockers (Zero False Positives)*: To classify any issue as `P0` or `P1` (which halts batch progression and blocks Fast Track auto-finalization), you **MUST provide a deterministic reproduction trace**: `Concrete Input / Caller State -> Exact File:Line Execution Path -> Actual Broken Output / Exception vs Expected Contract`. Never halt a batch review on unverified suspicion.

*For each finding, specify: File, line number, detailed explanation of the flaw, reproduction trace (for P0/P1), and why it is problematic.*

#### 5. Comparison with Industry Top Solutions
- Compare the reviewed implementation with how leading open-source libraries (VueUse, Radix UI, Headless UI, Ark UI, Nuxt, TanStack) solve similar architectural problems.
- Highlight concrete patterns that could elevate the implementation to state-of-the-art quality.
- **Mandatory Summary Conclusion (Обязательный вывод)**: It is **strictly mandatory to write a comprehensive, well-reasoned conclusion (`Вывод` / `Conclusion & Takeaways`)** directly after the comparison table/analysis. The conclusion must:
  1. Explicitly state whether the reviewed solution matches, surpasses, or lags behind top industry counterparts.
  2. Clearly define its distinct competitive advantages within the project ecosystem (e.g., zero third-party dependencies, native SSR isomorphism, seamless design token integration, strict type safety, or minimal runtime overhead).
  3. Formulate clear actionable takeaways: which high-value techniques from other tools are worth adopting, and what excessive abstractions or over-engineering should be intentionally avoided.

#### 6. Actionable Refactoring, Advisory Proposals & Test Suite
- **Advisory Refactoring Diffs**: Provide copy-paste-ready Before/After code diffs illustrating recommended architectural improvements.
- **Proportional & Lean Fixes (Anti-Overengineering)**: Keep refactored code lean and focused on the entity's actual purpose and environment. Never introduce bloated defensive wrappers for contrived "all-life" edge cases.
- **Unit Test Recommendations & Code Blocks (In Artifact Only)**:
  - If existing tests are incomplete, superficial, fragile, or missing, provide a complete, copy-paste-ready unit test suite covering all execution paths, edge cases, reactivity, SSR safety, and lifecycles **strictly within this section of the artifact**.
- **Prohibition of Unsolicited Structural Modifications & Post-Review Trigger**:
  - All major architectural modifications, class/component rewrites, and breaking changes remain purely advisory and frozen until the developer explicitly commands to apply them. When critical (`P0`) or major (`P1`) blockers or structural refactoring proposals exist, test file creations/overwrites and documentation updates are also frozen until the developer explicitly confirms completion (e.g., «готово», «готова», «закончили код-ревью», «код-ревью готово»); if no `P0`/`P1` blockers or structural proposals exist, execute **Fast Track** auto-finalization immediately in the same turn (updating unit tests in `__tests__/`, documentation in `src/storybook/`, and `temp.md`). Fix and edit strictly what is allowed by the protocol or explicitly requested by the developer!

---

## 🟢 Post-Review Finalization Protocol (Auto-Trigger on Clean Review OR Explicit Trigger: «готово» / «готова» / «код-ревью готово»)

The finalization protocol transitions the reviewed entity into its production-ready, fully verified state.

### Finalization Triggers (When to Execute):
1. **Autonomous Immediate Transition (Fast Track — Nothing Critical Found)**:
   If during the code review **no critical issues (P0 / Blocker) and no major architectural blockers (P1) were found** (the code is originally clean or only safe non-breaking auto-fixes were applied), the agent **MUST NOT stop or wait for manual confirmation**. Proceed **directly, immediately, and autonomously to finalization within the same turn**, and in batch mode automatically advance to the next entity in the dependency chain or alphabetical queue (respecting the Batch Freshness Guard and per-run group limits in Pre-Review Step 0).
2. **Explicit Developer Trigger (When Critical Issues Were Found or Structural Proposals Applied)**:
   If the entity had genuine critical vulnerabilities, architectural anti-patterns, breaking changes, or structural refactorings requiring developer review, finalization is executed **strictly and only after** the developer reviews the report and confirms completion using trigger phrases such as:
   - «готово» / «готова»
   - «код-ревью готово» / «код ревью готово»
   - «закончили код-ревью» / «закончили»
   - «review complete» / «ready»
   *(Processing of parent dependent files in the dependency chain or subsequent files in the directory / multi-file queue halts completely until this trigger is received and finalization of the current file is executed).*

Upon activation of either trigger, the AI agent MUST autonomously execute the following four mandatory steps in sequential order without asking for additional intermediate confirmations:

### 1. Update Package Registry (`temp.md`)
- Locate `temp.md` in the root of the package being reviewed (e.g., `packages/<pkg>/temp.md`). If it does not exist, create it.
- Append the reviewed entity identifier (canonical function/class name or relative file path in accordance with that package's convention, e.g. `getColumn` or `src/functions/ref/getRef.ts`) to `temp.md`.
- Ensure no duplicate entries are created.

### 2. Apply & Update Unit Tests (`__tests__/<Entity>.test.ts`)
- Unfreeze the test suite: apply the full, verified unit test suite authored in Section 6 of the AI Artifact to the target test file (`packages/<pkg>/src/**/__tests__/<Entity>.test.ts`).
- Clean up any obsolete type assertions (`as unknown as ...`), unnecessary `// @ts-expect-error` directives, and align test assertions with widened parameter types (`| null`, `| undefined`, etc.).
- Ensure all realistic edge cases, boundaries, and error branches are covered according to [`ai-prompts/test.md`](./test.md).
- Run the test runner:
  ```bash
  npx vitest run packages/<pkg>/src/**/__tests__/<Entity>.test.ts
  ```
- Guarantee 100% clean test execution (0 errors, 0 failures, 0 skipped assertions).

### 3. Synchronize Storybook & MDX Documentation (`src/storybook/`)
- Check and update all corresponding Storybook MDX documentation files for the reviewed entity in `src/storybook/` across all supported languages:
  - Russian (`<Entity>.ru.mdx`)
  - English (`<Entity>.en.mdx`)
  - Vietnamese (`<Entity>.vi.mdx`)
- Verify that parameter types, default values, return types, usage examples, and descriptions strictly reflect the latest refined implementation and any widened signatures (such as adding `| null` or optional flags).

### 4. Mandatory Post-Modification Verification (TypeScript & ESLint Quality Gate — Explicit Override)
- **Direct Instruction & Explicit Override**: Executing typechecking and package builds in this step is an **explicit user directive** overriding Rule 8 (Build Execution Guard) in `ai-prompt.md`.
- Run ESLint with auto-fix on all modified files (source code, unit tests, Storybook MDX):
  ```bash
  npx eslint --fix <modified-files>
  ```
  Verify that ESLint passes cleanly with **0 errors and 0 warnings**.
- Run TypeScript verification for the affected package:
  - For fast intermediate per-file verification during a multi-file batch run, use lightweight typechecking:
    ```bash
    npx tsc -p packages/<pkg>/tsconfig.json --noEmit
    # or for Vue packages:
    npx vue-tsc -p packages/<pkg>/tsconfig.json --noEmit
    ```
  - For single-file finalization or at the completion of a package/session batch run, execute the full package build:
    ```bash
    npm --prefix packages/<pkg> run build
    ```
  Verify that bundling, types generation, and typechecking succeed with **0 TypeScript errors**.
- Re-run the unit test runner to guarantee 100% green tests after all checks:
  ```bash
  npx vitest run packages/<pkg>/src/**/__tests__/<Entity>.test.ts
  ```

### 5. Final Notification to Developer
- **When Finalized Autonomously (Fast Track — Nothing Critical)**:
  Respond in the chat with a concise notification containing the overall score/grade, a clickable link to the generated AI Artifact, and an explicit confirmation that because no critical issues were found, the review was finalized automatically:
  1. Registry updated: entity added to `temp.md`;
  2. Unit tests updated and verified: `vitest run: X passed`;
  3. Storybook MDX documentation synchronized across all languages (`.ru.mdx`, `.en.mdx`, `.vi.mdx`);
  4. Post-modification quality verified: ESLint (0 errors, 0 warnings) and TypeScript build clean.
- **When Finalized via Explicit Confirmation («готово»)**:
  Respond in the chat with the concise confirmation summary confirming the completion of the four steps.
