---
name: code-review
description: Conduct a deep architectural, security, SSR, memory, performance, and code quality review with safe auto-fixes, artifact reporting, and automated test/docs finalization.
---

# Task: Strict Architectural and Quality Code Review

Act as an elite Principal Software Architect and Staff Security/Performance Reviewer. Your goal is to conduct an uncompromising, evidence-based, deep-dive code review of the specified files, components, classes, functions, or composables/hooks.

Your analysis must go far beyond a superficial lint check: **you MUST exhaustively trace and verify all execution scenarios that could lead to incorrect operation of the entity, wrong return values/responses, broken or unexpected runtime behavior, or code crashes**. Evaluate architectural soundness, OWASP security posture and safe data handling, dependency health and blast radius, real-world usage across the codebase, technological relevance vs obsolete patterns, subtle bugs and boundary edge cases, adherence to strict `dxt-ui` conventions, full SSR isomorphism, memory/resource leak prevention, main-thread/INP performance, and alignment with industry-leading state-of-the-art standards.

---

## 🔴 Mandatory Pre-Review & Execution Protocol

Execute these steps in strict order before and during the review:

### 0. Registry Check (`ai-review.md`), Recursive Dependency Resolution & Batch Processing
1. **Batch Freshness Guard (Mandatory Re-Read Protocol)**:
   - During directory, folder, multi-file, or dependency-chain batch reviews, the agent **MUST re-read `ai-prompts/code-review.md` completely in full from disk** as its **first tool call**:
     - Immediately after any **chat context compaction / summarization**; OR
     - **Once every 8 reviewed files** (whenever the reviewed file counter reaches a multiple of 8) to prevent prompt drift and refresh all evaluation rules.
2. **Deduplication & Git Modification Check (`packages/<pkg>/ai-review.md`)**:
   - Before analyzing any code, creating an artifact, or running searches, check if `ai-review.md` exists in the current package root (e.g., `packages/functional-basic/ai-review.md`, `packages/functional/ai-review.md`). It stores canonical entity names or relative file paths that have already passed code review and testing.
   - If the target entity (or an imported same-package dependency / batch candidate) is **already present in `ai-review.md`**, you **MUST check whether its source file `<entity-file>` has been modified since its review**:
     - **Uncommitted Changes Check (Working Tree & Index)**: Run `git status --porcelain -- <entity-file>` (or `git diff HEAD -- <entity-file>`). If modified (`M`, `A`, `AM`, `MM`), the entity **HAS changes** (unless it was just reviewed and added to an uncommitted `ai-review.md` earlier in the current session).
     - **Committed Changes Since Review Check**: If the working tree is clean, find the commit where its entry in `packages/<pkg>/ai-review.md` was recorded (`git log -G "^<entity>$" -n 1 --format="%H" -- packages/<pkg>/ai-review.md`) and check `git log <review-commit>..HEAD --oneline -- <entity-file>`. If newer commits modified `<entity-file>`, the entity **HAS changes**.
   - **Action**:
     - **If NO changes are detected**: For an individual target entity, **IMMEDIATELY STOP!** Do NOT perform code review, do NOT run searches, and do NOT create artifacts — inform the developer instantly that the entity is already listed in `ai-review.md` and unchanged since review. For intra-package dependencies or batch queues, treat it as verified and skip it.
     - **If absent from `ai-review.md`, modified since review, or explicitly forced by the developer**: Proceed with the full code review.
3. **Mandatory Recursive Intra-Package Dependency Resolution (Depth-First / Bottom-Up)**:
   - Before reviewing any target file (individual or from a batch queue), inspect all entities imported by that file that belong to the **same package** (excluding pure type-only imports `import type` / `*Types.ts`, static constants/data files without executable logic, JSON configs `*.json`, and stylesheets `*.scss`/`*.css`).
   - If any imported same-package entity is unreviewed or modified since review (per check 2) — **even if it lies later in the alphabetical queue, was not explicitly included in a multi-file list, or resides in another folder of the same package (e.g., `src/classes/` or `src/functions/`)** — you **MUST defer reviewing the current file** and recursively traverse down (in alphabetical order, tracking visited nodes in a recursion set to avoid infinite loops on circular imports and flagging any runtime cycle) until reaching the **leaf dependency** (an entity with no unreviewed/modified intra-package runtime imports).
   - Conduct a full, isolated review (`code_review_<Dependency>.md`) starting from the deepest leaf dependency first. Only after all intra-package dependencies of a file have been reviewed, finalized, and recorded in `ai-review.md` may you unwind the chain and review the dependent parent file.
4. **Directory / Folder & Multi-File (>1 Files) Batch Queue**:
   - **Filter & Sort**: Gather all target entity source files (excluding `__tests__/`, `*.test.ts`, `*.spec.ts`, `*.stories.ts`, `*.mdx`, `*Types.ts`, and barrel files `index.ts` / `library.ts` re-exports). Exclude all entities already in `ai-review.md` with no changes since review (if all are unchanged, inform the developer immediately and stop). Sort remaining candidates strictly **in alphabetical order** by entity/file name, applying Recursive Dependency Resolution (item 3) before each candidate and skipping any file in the main queue that was already reviewed earlier in the current run as a dependency.
   - **Maximum Batch Size Limits by Group (3 Separate Independent Counters Per Run)**:
     Track three independent counters in the current run — **counting both target files from the queue and any unreviewed/modified intra-package dependencies resolved along the way, according to the group of each reviewed file**:
     1. **Group 1 — Components** (Vue components `.vue`): **maximum `8` files per run** (Counter 1: `0..8`).
     2. **Group 2 — Classes, Constructors & Hooks/Composables** (`class`, `src/classes/`, `*Design.ts`, `use*`, `executeUse*`): **maximum `12` files per run** (Counter 2: `0..12`).
     3. **Group 3 — Everything Else** (pure functions `src/functions/`, utilities): **maximum `24` files per run** (Counter 3: `0..24`).
     - **Automatic Pause When Any Counter Reaches Its Cap**: As soon as **Counter 1 reaches `8`**, **Counter 2 reaches `12`**, OR **Counter 3 reaches `24`** (and the current file is finalized), **STOP**, output a summary of all reviewed files in the current run with links to their artifacts, and wait for the developer's next prompt to continue.
5. **Orchestrator-Worker Parallel Execution (Zero-Contention Protocol)**:
   - **Parallel Tool Calls (I/O & Batched Verification)**: Batch independent I/O operations in parallel within a single turn — read source files, unit tests, and localized Storybook docs (`*.ru.mdx`, `*.en.mdx`, `*.vi.mdx`) simultaneously; write review artifacts and update MDX files in parallel; and combine verification of multiple independent files into a single batched command (`npx vitest run <test1> <test2> ...`, `npx eslint --fix <file1> <file2> ...`, and a single `npx tsc -p packages/<pkg>/tsconfig.json --noEmit` or `npx vue-tsc -p packages/<pkg>/tsconfig.json --noEmit`).
   - **Parallel Subagents via Orchestrator-Worker Pattern**: Independent leaf dependencies or independent sibling files in the current dependency wave may be delegated to parallel worker subagents (`invoke_subagent`) for simultaneous analysis, in-place auto-fixing, isolated test/MDX updates, and artifact generation (`code_review_<Entity>.md`), strictly following four rules:
     1. *Dependency Order Integrity (Wave-by-Wave)*: Workers only process independent leaf/sibling entities; a parent file is never dispatched or finalized before all of its intra-package dependencies have passed review.
     2. *Strict File Isolation*: Each worker **MUST ONLY** read/edit its assigned entity's isolated file set (`<Entity>.ts`/`.vue`, `<Entity>.test.ts`, `<Entity>.*.mdx`, `code_review_<Entity>.md`) and **MUST NEVER** modify shared files (`ai-review.md`, `index.ts`, `library.ts`, shared `*Types.ts`, `package.json`).
     3. *Centralized Verification & Registry Updates*: To prevent CPU thrashing and false-negative TypeScript errors from concurrent intermediate edits, workers **MUST NOT** run package-wide `tsc --noEmit`, `vue-tsc`, or `npm run build`. Once the parallel worker wave finishes, the parent **Orchestrator** executes a single consolidated verification pass (`npx eslint --fix`, `npx tsc --noEmit` / `vue-tsc --noEmit`, `npx vitest run`), performs all atomic writes to `ai-review.md`, and increments the 3 group counters (`8` / `12` / `24`).
     4. *Strict Counter & Blocker Enforcement*: The Orchestrator pre-allocates worker tasks within the remaining per-run group caps (`8` / `12` / `24`) and enforces immediate Stop-on-Blocker if any worker reports a `P0`/`P1` issue.

### 1. Language Determination & Artifact Delivery
- **Match Developer's Language**: Write the **entire code review report strictly in the language used by the developer in their prompt/chat** (if the prompt contains only file paths, `@[...]` mentions, or a slash command without natural-language text, use the language of the current conversation history, defaulting to Russian). Do NOT read `design.config.json`. Keep code snippets, TypeScript types, identifiers, and file paths untranslated.
- **Artifact Storage (Do NOT Pollute Repository)**: Save the full report to `<appDataDir>/brain/<conversation-id>/code_review_<target>.md` using `write_file`. Never create `./code-review.md` in the repository workspace.
- **Chat Response**: Provide the overall score/grade, a clickable link to the generated artifact (`[code_review_<target>.md](file:///...)`), finalization status, and any necessary context or blocker explanations in the chat (no artificial restriction on chat response length).

### 2. Allowed In-Place Auto-Fixes (`P2`) vs Prohibited Structural Changes (`P0`/`P1`)
- **Mandatory Immediate In-Place Auto-Fixes (`P2`)**:
  During code review, you **CAN and MUST immediately fix** the following safe, non-breaking defects directly in the audited files (without waiting for a separate command) and document every applied fix in **Section 2** of the artifact:
  1. **Typos**: Typos or grammatical errors in comments, string constants, messages, or local variable names.
  2. **Bilingual JSDoc/TSDoc (`jdoc.md`)**: Adding missing descriptions for classes, functions, methods, interfaces, types, enums, or properties, and enforcing the mandatory bilingual standard (`EN / RU`) on `@param` and `@returns`.
  3. **Obvious Minor Typing Ergonomics & Single Unified Signature**:
     - *Discrepancy Between Narrow Typing and Permissive Runtime Coercion*: If an input parameter is typed too narrowly or rigidly (e.g., `param: string`, `param: string | RegExp`, non-optional `param`), while runtime checks or fallbacks safely handle broader values (`toString(param)`, `isFilled(param)`, `isRegExp(param)`, `typeof param !== '...'`, `Boolean(param)`, `String(param ?? '')`), **automatically widen and make the parameter optional/permissive in-place** (e.g., `param?: unknown`, `param?: string | RegExp | number | boolean | null`, or `param?: string | undefined`) to unblock callers and eliminate needless casts (`as unknown as string`, `as any`).
     - *Readonly Array Parameters & Public Barrel Exports (`TS4023` Prevention)*: Widen read-only array parameters from `T[]` to `readonly T[]` so callers can pass `as const` tuples/arrays without compiler errors; verify that all custom types/interfaces referenced by exported functions/classes are properly exported in `*Types.ts` and package barrels (`index.ts` / `library.ts`) so `.d.ts` generation never fails with `TS4023`.
     - *Loss of Generic Return Type Inference from `defaultValue`*: When an accessor, storage utility, or getter accepts `<T = unknown>` and an optional `defaultValue?: D`, but degrades the return type to `unknown` when the caller omits `<T>`, **automatically refine the return type helper in-place** using conditional unwrapping (e.g., `type EntityGet<T, D = undefined> = [D] extends [undefined] ? (T | undefined) : unknown extends T ? (D extends () => infer R ? R : D) : T`) so calls like `get('theme', 'dark')` or `get('count', () => 42)` infer `string` or `number` automatically.
     - *No Function Overloads (Single Unified Signature)*: Never use multiple TypeScript function overload declarations (`export function ...`). Always achieve polymorphic parameter handling and literal return type preservation via a single unified signature using generics, default types, and conditional return types (e.g., `export function capitalize<T = string>(value?: T, ...): T extends string ? Capitalize<T> : string`).
  4. **Redundant Logic, Dead Code & Boundary Guards**:
     - Eliminate duplicate sub-conditions in boolean expressions (e.g., when `A || (B && C)` re-evaluates `A` inside `C`), unreachable branches, dead code, unused private helpers/constants/types/imports, and redundant optional chaining on guaranteed non-null members (`obj?.method?.()` -> `obj?.method()`).
     - *Falsy Zero/Empty Boundary Traps*: Replace raw truthiness checks (`if (value)` or `isFilled(value)`) on numeric, `NumberOrString`, or boolean-like properties where `0` (or `''`/`false`) is valid with `value !== undefined` (or `!isNull(value)`).
     - *Property Existence Guards (`key in object`) Blocking Fallbacks*: Unwrap computed/default fallback branches from `if (key in object)` / `Object.hasOwn` guards so default resolvers execute when optional keys are omitted on plain input objects.
     - *Non-Destructive Merging & Exhaustiveness*: Prevent unconditional spreads (`{ ...base, key: optionalValue }`) from overwriting existing `base` properties with `undefined`, and add missing union variants or interface properties to `switch` statements and lookup maps per `*Types.ts`.
  5. **Micro-Optimizations, Loop Safeguards, Tree-Shaking & Check Unification**:
     - Add missing `/* #__PURE__ */` annotations (strictly with spaces around `#__PURE__`) on top-level module calls/constructors.
     - Cache collection lengths before indexed loops (`const length = array.length`), add early exits for empty collections (`if (length === 0) return ...`), hoist loop invariants, extract magic numbers into named bilingually documented constants, and unify check styles within loops (avoid mixing `charCodeAt` and string literal indexing in the same iteration).
  6. **Class Structure & Method Ordering**: Reorder class members, properties, and methods in-place to strictly match Section 2.B.
- **Strict Prohibition of Unsolicited Structural & Breaking Modifications (`P0`/`P1`)**:
  - Large architectural refactorings, class or component rewrites, business logic modifications, entity deletions, or **breaking public API signature changes** (narrowing parameter types, removing parameters, changing argument order, or renaming public methods/props/exports) are **STRICTLY FORBIDDEN** without an explicit direct command from the developer. Document all structural proposals exclusively in **Section 6** of the artifact.

### 3. Dependency Graph, Blast Radius & Unit Test Audit
- **Outbound Dependencies Audit (What it depends on)**: Inspect all imports, utilities, classes, and packages used by the target. Verify strict monorepo layer boundaries (`functional-basic` -> `functional` -> `constructor` -> `d1`), `package.json` synchronization (`>=` version constraints), tree-shakeability, and absence of circular or redundant dependencies.
- **Inbound Usages Audit (Where and how it is used across the codebase)**: Search and inspect **all call sites, components, composables, and files that import and use the target entity**. Check whether callers are forced to write boilerplate or workarounds due to flaws in the target's API, evaluate the exact blast radius and backward compatibility of any proposed changes, and identify anti-pattern usages at call sites.
- **Unit Test Audit (Single Source of Truth in [`ai-prompts/test.md`](./test.md))**: All rules for authoring, structuring, and auditing unit tests reside exclusively in [`ai-prompts/test.md`](./test.md). Read [`ai-prompts/test.md`](./test.md), locate `__tests__/<Entity>.test.ts` (or `<name>.test.ts`), and audit the test suite strictly against [`ai-prompts/test.md`](./test.md).

### 4. Practical Usage & Impact Filter (Strict Ban on Hypothetical Findings & Over-Engineering)
- **Ground Every Finding in Practical Usage (Zero Speculative Hypotheses)**: Assess code strictly through **practical real-world usage, actual consumer call sites, and intended functional purpose**. It is **STRICTLY FORBIDDEN** to raise remarks, deduct score points, or propose defensive code/tests based on artificial, speculative "what-if" hypotheses detached from real user behavior.
- **Mandatory Two-Step Practicality & Consequence Gate**:
  1. *Practical Likelihood*: Will a real user or caller actually do or encounter this in normal, practical operation?
  2. *Actual Consequence (Crash & Security vs Self-Inflicted Layout Glitch)*:
     - **Valid Finding (Report)**: Causes a **runtime crash / unhandled exception**, **infinite loop / ReDoS freeze**, **data loss or corruption**, **memory leak**, **SSR cross-request state leak**, or an **exploitable security/attack vulnerability** (XSS script execution, attribute breakout, injection, prototype pollution).
     - **Irrelevant Quirk (Strictly Ignore & Exclude from All Severity Tiers Including `P2`/`P3`)**: Causes **no crash** and **no security vulnerability** — and at worst only distorts local visual markup for the very user who deliberately typed an unnatural string.
- **Concrete Calibration Example (`___HIGHLIGHT_START___`)**: If a highlighting utility uses a static internal marker like `___HIGHLIGHT_START___` and replaces it with `<span class="...">` (with an already-sanitized class attribute), **NEVER** report *"if a user types `___HIGHLIGHT_START___`, everything breaks"*. Real users do not type `___HIGHLIGHT_START___` in practice, and even if entered intentionally, there is zero crash and zero XSS vector — at worst only that user's local text renders an extra harmless `<span>`. Flagging this or proposing `random()` collision-avoidance loops or custom HTML parsers is **strictly forbidden**.

---

## 1. Architectural Integrity & Modernity vs Obsolete Patterns

### A. Architectural Evaluation
- **Separation of Concerns (SoC) & Layering**: Business logic must be strictly separated from UI/presentation and distributed cleanly across packages (`functional-basic` framework-agnostic logic -> `functional` reactive glue -> `constructor` component abstractions -> `d1` design primitives).
- **Root-Cause Architecture (No Temporary Shims — `ai-prompt.md` Rule 13)**: Ensure zero ad-hoc shims, makeshift backward-compatibility branches (`isLegacy`), monkey-patching, or superficial adapters.
- **Modularity, Single Responsibility & Open/Closed Extensibility**: Verify that the entity is self-contained with clean dependency injection, performs one well-defined responsibility (not a "Swiss army knife" / God object), and provides intentional extension points (inheritance, composition, hooks, slots, events).

### B. Modern Solutions vs Obsolete Techniques
- **Outdated Techniques Detection**: Flag legacy Vue habits (Options API patterns, Vue 2 reactivity workarounds, prop mutation, global event buses, `$attrs`/`$listeners` anti-patterns), outdated TypeScript paradigms (`any`, excessive type assertions instead of narrowing/discriminated unions), direct DOM manipulation hacks (`querySelector`, manual inline style mutations instead of reactive bindings/CSS variables), and obsolete async patterns (unhandled promise rejections, missing `AbortController` cancellation, race conditions).
- **Modern Vue 3.5+ & TypeScript 5.x Standards**:
  - *Vue 3.5+ Idioms*: Reactive props destructuring, `useTemplateRef()` for typed template refs, `onWatcherCleanup()` for watcher side-effect disposal, `defineModel()` where appropriate, and isomorphic SSR ID generation (`useId()` / project `getElementId` helpers) to prevent hydration mismatches on `id` / `aria-labelledby` / `aria-controls`.
  - *TypeScript 5.x Idioms*: `satisfies` for config/dictionary validation without widening literal types, `const` generic type parameters (`<const T>`), `as const` objects/tuples and union types over runtime-heavy `enum` declarations where appropriate, and conditional return type inference.
- **Industry Benchmarking**: Compare against top-tier industry benchmarks (Radix UI, Headless UI, Ark UI, VueUse, Nuxt 3 core, TanStack) and utilization of modern Web APIs (Popover API, CSS container queries, subgrid, `IntersectionObserver`, `ResizeObserver`).

---

## 2. Entity-Level Design & Quality Assessment

### A. Vue Components (`.vue`) & UI Constructors (`constructor` / `d1`)
- **Composition, Constructor Integration & Atomicity**: Minimal, single-purpose component with complex business/state logic extracted into composables or `DesignConstructorAbstract` / `DesignLogicAbstract` controllers (`@dxtmisha/constructor`). Never import `@dxtmisha/constructor` directly in application code when ready-made `D1` components exist.
- **Props, Emits & Template Hygiene**: Strictly typed via `defineProps<{ ... }>()` and `defineEmits<{ ... }>()`; strict one-way data flow (never mutate incoming props); `kebab-case` event names; cleanest semantic HTML with zero function calls, complex calculations, or inline styles in templates; unique non-index `:key` in `v-for`; never combine `v-if` with `v-for` on the same element; zero-duplication skeleton states via `is-skeleton` and `Skeleton` utility classes (`node_modules/@dxtmisha/constructor/ai-resources/skeleton.md`).
- **Styles, Design Tokens, Stacking Contexts & RTL/LTR Logical Properties**: Strict SCSS mixin usage from `@dxtmisha/styles` and three-tier token compliance with `properties.json`; zero hardcoded colors, borders, spacing, or magic `z-index: 9999` values outside design tokens; prevent unintended CSS stacking contexts (`transform`, `filter`, `isolation`) that clip floating overlays inside `overflow: hidden`; never modify base UI library styles; **strict RTL/LTR logical CSS properties and mixins** (`inset-inline`, `margin-inline`, `padding-inline`, `text-align: start/end` instead of physical `left`/`right`/`margin-left`/`padding-right`).
- **Component Lifecycle, WCAG 2.2 AA, A11y & UI State Machine Guards**: Safe `Teleport` targets and `ClientOnly` wrappers; deterministic server/client initial markup (no invalid `<p><div>...</div></p>` nesting); full WAI-ARIA & **WCAG 2.2 AA** compliance (`:focus-visible` ring via `@dxtmisha/d1` outline mixins, sufficient target size, `inert` background locking and focus restoration on modal/menu close, `prefers-reduced-motion` support for animations, and full keyboard navigation via `Enter`, `Space`, `Escape`, `Arrow` keys). Enforce three interaction state-machine guards:
  1. *IME Composition Guard (`event.isComposing`)*: Ignore `Enter`/`Escape`/`Backspace` keydown actions while an IME composition session is active (`if (event.isComposing) return`) so Vietnamese (Telex/VNI) and CJK input never triggers accidental form submission, item selection, or modal dismissal.
  2. *Gesture Cancellation Cleanup (`pointercancel` / `blur`)*: Ensure sliders, drag-and-drop, and image croppers clean up active drag state on `pointercancel`, `lostpointercapture`, and `window` `blur`, not just `pointerup`/`mouseup`.
  3. *Nested Overlay `Escape` Isolation*: Pressing `Escape` inside a nested overlay (`Menu`, `Select`, `Popover` inside a `Modal`/`Dialog`) must stop propagation and close **only** the innermost active overlay.

### B. TypeScript Classes (`class`)
- **Canonical Structure & Member Ordering**:
  - Strict member order: Properties (`public` -> `protected` -> `private`, with `readonly` / `as const` where immutable) -> `constructor` -> Computed/Reactive Properties (`computed` and reactive fields placed immediately after constructor) -> Public Methods -> Protected Methods -> Private Methods.
  - Strict method order within each visibility group: `get` -> `set` -> `is...` -> `has...` -> `get...` -> `set...` -> `add...` -> `remove...` -> `update...` -> `reset...` -> remaining methods (grouped semantically by logical pairs such as `min`/`max`, `width`/`height`, `x`/`y`/`z`, then alphabetically).
- **Reuse of Project Primitives & `ErrorCenter`**: Always use helper primitives from `@dxtmisha/functional-basic` (`isFunction`, `executeFunction`, `isFilled`, `isObject`, `isArray`, `isString`, etc.) instead of custom inline checks. Route operational runtime errors through `ErrorCenter` (`node_modules/@dxtmisha/functional-basic/ai-resources/error-center.md`) rather than raw `console.error` / `console.warn`.
- **Canonical State (`this.props`) vs Derived/Mutated Helper State**: Verify whether a class or method reads from an injected helper that returns a *derived or UI-mutated* representation when the logic actually requires the *canonical source configuration* (`this.props`). Depending on a dynamically mutated helper state for static rules, metadata, or constraints causes those rules to silently break during UI state transitions and introduces unnecessary coupling.
- **Exhaustiveness & Consistent Non-Destructive Defaults**: Cross-check all `switch` statements, lookup dictionaries, and property/attribute whitelists against the full union types and interfaces in `*Types.ts`. Verify that default fallback values are applied consistently across all related output getters/methods of a class, and that optional overrides are merged only when defined (`!== undefined` or via `toBinds`) so they never overwrite existing base properties with `undefined`.
- **ARIA Encapsulation (Constructors & Controllers)**: Encapsulate ARIA attributes inside dedicated `aria` getters (`get aria(): AriaList`) or via `AriaStaticInclude` (`AriaStaticInclude.role()`, `label()`, `hidden()`) rather than fragmented template bindings; automatically hide decorative assets (`AriaStaticInclude.hidden()` / `aria-hidden="true"`) when meaningful labels (`alt`/`label`) are absent.

### C. Functions (`function`) & Composables (`use*` / `executeUse*`)
- **Functions & Caller Argument Immutability**: Side-effect-free pure functions; **never mutate caller-passed arrays or objects by reference** (`array.sort()`, `reverse()`, `splice()`, `delete obj.key`, or direct property assignment on input objects) unless the function is explicitly a mutator — clone or use non-destructive operations (`[...array].sort()`, `{ ...obj }`) so reactive caller state is never silently corrupted. Use flat guard clauses and early returns, typed options objects for 3+ parameters, a single unified signature (no overloads), safe `JSON.parse` / numeric parsing, and escaped dynamic `RegExp` (`escapeExp` / `RegExp.escape`).
- **Composables & Hooks**: Always prefer `@dxtmisha/functional` reactive composables over low-level `@dxtmisha/functional-basic` primitives in Vue 3; preserve reactivity (`MaybeRefOrGetter`, `toValue`, `toRefs` — no premature destructuring of reactive objects); wrap shared or session-scoped state in `executeUseGlobal`, `executeUseLocal`, or `executeUseProvide` inside external service files (Vue components must never call raw `useApi*` / `executeUse*` factories directly in `<script setup>`); dispose listeners/timers/watchers via `onScopeDispose` / `onWatcherCleanup`.

---

## 3. Runtime Bugs, Performance, Memory Safety & SSR Isomorphism

**MANDATORY EXHAUSTIVE USAGE SCENARIO AUDIT**: You MUST simulate and trace **all possible real-world usage scenarios, parameter/prop combinations, method call sequences, and lifecycle state transitions** (`init -> update -> toggle -> reset -> destroy`) to detect any scenario that causes:
- **Incorrect Entity Operation**: Logic branches, dependency/helper interactions, or state transitions that prevent the entity from fulfilling its contract across its full lifecycle.
- **Wrong Return Values / Output Data**: Missing fallbacks, skipped computed resolvers, silent `undefined` overwrites, incomplete union/type mappings, or flawed transformations that return inaccurate results across different input shapes.
- **Broken or Unexpected Runtime Behavior**: Side effects between helpers, lost attributes/constraints on dynamic state toggles, desynchronized reactive states, or broken UX/DOM bindings.
- **Runtime Code Crashes**: Unhandled exceptions, `null`/`undefined` dereferences, invalid DOM/API calls, infinite recursion/loops, or unguarded parsing failures.

Rigorously inspect six runtime areas:

1. **Reactivity & Computed Reference Stability**: Accidental loss of Vue reactivity, stale closures, infinite reactivity loops, or `computed` properties that allocate and return fresh object/array literals on every evaluation even when underlying semantic values have not changed (causing cascading downstream `watch` triggers and unnecessary component re-renders); verify use of `shallowRef` / `markRaw` for large immutable collections, class instances, or DOM references.
2. **Algorithmic Complexity (Big-O), Main-Thread Responsiveness (INP) & Layout Thrashing**:
   - *Hidden Quadratic Complexity ($O(n^2)$)*: Detect linear lookups (`array.includes`, `find`, `indexOf`, `filter`) nested inside loops, `.map()`, `.reduce()`, or `v-for` templates that should be indexed via `Set` or `Map` ($O(1)$ lookup), as well as redundant multi-pass array chains (`.filter().map().find()`) or unnecessary deep clones on hot paths.
   - *DOM Layout Thrashing & INP*: Detect interleaved DOM geometry reads (`getBoundingClientRect()`, `offsetWidth`, `scrollTop`) and style/DOM writes inside loops, and non-canceling high-frequency `scroll`/`touchmove`/`wheel` listeners missing `{ passive: true }`.
   - *Targeted `requestAnimationFrame` Usage*: Require `requestAnimationFrame` coalescing **strictly where industry-appropriate**: continuous frame-synced visual tracking (`pointermove`/`touchmove` sliders, image croppers, drag-and-drop), live floating/popover anchor positioning during scroll/transform (`Menu`, `Tooltip`), and staging CSS/FLIP transitions (`MotionFlip`, `MotionAxis`, `MotionTransform`). Never demand `requestAnimationFrame` for standard Vue reactive state updates (already batched by Vue's scheduler), one-off user events (`click`, `focus`, `keydown`), or tasks served by native `ResizeObserver` / `IntersectionObserver`.
3. **Asynchronous & Concurrency Issues**: Race conditions in async data fetches or event debounces (out-of-order responses overwriting newer state), unhandled promise rejections, or uncancelled pending requests (`AbortController`).
4. **Memory Leaks & Resource Cleanup Failures**:
   - Missing `removeEventListener` on `window`, `document`, or external DOM elements in `onUnmounted` / `onScopeDispose` (or failure to use managed helpers like `EventItem` / `useEventListener`).
   - Lingering `setInterval`, `setTimeout`, or `requestAnimationFrame` continuing after unmount or scope disposal (especially critical in SSR where Node processes keep timers alive indefinitely).
   - Unrevoked `URL.createObjectURL(...)` blob URLs in file/image uploaders and croppers (`URL.revokeObjectURL` must be called on cleanup/replacement).
   - Unstopped watchers (`watch`, `watchEffect`) created outside synchronous `setup()` or active `effectScope()`.
   - Detached DOM nodes retained in closures, static arrays, caches, or `Map`/`Set` references; unbounded caches without eviction policies (LRU/max-size).
   - Undisposed observers (`ResizeObserver`, `IntersectionObserver`, `MutationObserver`), media query listeners (`matchMedia`), or subscriptions (`BroadcastChannel`, `WebSocket`, custom event emitters, store subscriptions); missing `destroy()` / `dispose()` / `reset()` methods on stateful classes.
5. **Edge Cases, Timezone/Locale Traps & Pragmatic Boundaries**: Unhandled `null`, `undefined`, `''`, `[]`, `{}`, `NaN`, `Infinity`, `0`, negative numbers, division by zero, Unicode surrogate pairs/grapheme boundaries, or off-by-one errors in realistic inputs, alongside the falsy zero traps and `key in object` fallback guards defined in Pre-Review Step 2.4. Flag `new Date('YYYY-MM-DD')` UTC parsing vs local `new Date(y, m, d)` off-by-one-day timezone bugs, and prohibit hardcoded `.` / `,` number/currency separators where locale-aware `GeoIntl` / `Intl` formatting applies.
6. **SSR Hydration & Isomorphic Flaws**:
   - Direct access to browser globals (`window`, `document`, `navigator`, `localStorage`, `sessionStorage`, `location`, `matchMedia`, `ResizeObserver`) on the server without checking `isDomRuntime()` or deferring to `onMounted`.
   - Cross-request state pollution: storing user- or request-specific data in module-level global variables, shared refs, or static class properties, leaking state across concurrent SSR requests (must use `ServerStorage.get('key', () => new Class())`, `executeUseLocal`, or `executeUseProvide`).
   - Timers, continuous background polling loops, or DOM measurements (`offsetWidth`, `getBoundingClientRect`, canvas context) executing during server render.
   - Hydration mismatch risks between server-rendered and client-rendered DOM trees (non-deterministic `Math.random()` / `Date.now()` IDs instead of deterministic SSR IDs, locale/timezone drift during initial render, browser-conditional markup during hydration, invalid HTML nesting).

---

## 4. Security & Vulnerability Audit (OWASP ASVS Standard)

1. **XSS (Cross-Site Scripting), DOM Clobbering & Markup Injection**: Usage of `v-html`, `innerHTML`, `outerHTML`, or `insertAdjacentHTML` without sanitization; dynamic SVG rendering containing `<script>` tags, event handlers (`onload`, `onerror`), `<foreignObject>`, or XML entity injection; dynamic code evaluation (`eval()`, `new Function()`, `setTimeout(string)`); unsanitized URL bindings in `href`, `src`, `action`, `formaction`, or redirects allowing `javascript:`, `vbscript:`, or unapproved `data:` URI execution; external links with `target="_blank"` missing `rel="noopener noreferrer"`.
2. **Prototype Pollution & Object Integrity**: Recursive object merging, deep cloning, query parameter hydration, or dot-notation path traversal (`set(target, path, value)`) without filtering `__proto__`, `constructor`, and `prototype`; using plain objects instead of `Map` or `Object.create(null)` when storing arbitrary external dictionary keys.
3. **ReDoS (Regular Expression Denial of Service)**: Vulnerable regular expressions with ambiguous nested quantifiers (`(a+)+`, `(a|aa)+`, `(\s*.*)+`) or overlapping alternation branches prone to catastrophic exponential backtracking; unescaped user strings passed into `new RegExp(untrustedPattern)` (must escape via `escapeExp` / `RegExp.escape`).
4. **Sensitive Data Exposure & Information Leakage**: Hardcoded secrets, API keys, tokens, or credentials; accidental logging of authorization headers, session cookies, tokens, or PII to console, `ErrorCenter`, URL query strings, or error monitors; leaking server-side environment variables or private configs through SSR hydration state.
5. **Cross-Origin, Messaging & SSR Security**: `window.addEventListener('message', ...)` or Figma/iframe bridges lacking strict `event.origin` and security token (`FigmaPostCode`) verification; unauthenticated `BroadcastChannel` listeners trusting foreign messages without schema validation; open redirect vulnerabilities; SSRF in server-side prefetch/proxy utilities accepting unvalidated destination URLs; insecure cookie configurations (`useCookieRef` or cookie utilities) missing `Secure`, `SameSite=Lax/Strict`, or `HttpOnly`; blind trust in external API responses, URL query/hash/route parameters, cookies, or `localStorage` data without schema validation (`@effect/schema` or strict type guards).

---

## 5. Strict Project Rules & Conventions Compliance (`dxt-ui`)

- **Strict TypeScript**: Zero `any` (use `unknown` or generics); explicit return types on all methods and exported functions; interfaces for all I/O, Props, and Emits; `@ts-expect-error` with explanatory comments (never `@ts-ignore`).
- **Bilingual JSDoc/TSDoc (`jdoc.md`)**:
  - *Classes, functions, and methods*: multiline descriptions (English on top, Russian on bottom) with bilingual `@param` and `@returns` separated by ` / ` (`EN / RU`).
  - *Interfaces, types, enums, and properties*: compact single- or double-line bilingual format (`/** English / Russian */`).
- **Naming Conventions & Zero Aliases**: Forbidden abbreviations (`el`, `val`, `temp`, `res`, `err`, `idx`, `cb`, `obj`, etc. — use full, descriptive names). Strictly zero aliases or duplicate exports (e.g., `useFile = useMediaFile` or `inputFileList = fileList` is forbidden — export and use strictly one canonical name).
- **Tree-Shaking (`/* #__PURE__ */`)**: Every top-level module function call, factory invocation, or constructor (`new Class()`) assigned to a constant/variable MUST be annotated strictly with spaced `/* #__PURE__ */`.
- **PurgeCSS Compatibility**: Never construct CSS class names dynamically via string concatenation or template literals (`'btn-' + size`, `` `badge-${color}` ``). Always use full, unbroken string literals in object syntax, dictionaries, or ternaries, or wrap external dynamic classes in `/* purgecss start ignore */ ... /* purgecss end ignore */`.
- **WAI-ARIA Attribute Completeness**: Ensure complete ARIA attribute coverage for interactive, graphical, and informative elements (`role="img"`, `role="button"`, `role="dialog"`, `aria-expanded`, `aria-controls`, `aria-selected`, `aria-checked`, `aria-disabled`, `aria-live`, `aria-haspopup`, `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-hidden="true"`).

---

## 6. AI Artifact Structure (`code_review_<target>.md`)

Structure the artifact markdown document with the following six sections (translate all section titles, table headers, and prose into the developer's language per Pre-Review Step 1):

### 1. Executive Summary & Quality Score
- **Overall Rating**: Grade (`A`: `90–100`, `B`: `80–89`, `C`: `70–79`, `D`: `60–69`, `F`: `< 60`) and Score (`0–100`). When in-place auto-fixes were applied during the review, report both initial and post-fix scores (e.g., `94 -> 100 (A)`).
- **Objective Scoring Rubric & Grade Caps (Base = `100` pts)**:
  - `P0 (Critical / Blocker)`: `-25` to `-40` pts each (caps maximum grade at `D`/`F`; blocks Fast Track auto-finalization).
  - `P1 (Major / Breaking)`: `-10` to `-15` pts each (caps maximum grade at `C`; blocks Fast Track auto-finalization).
  - `P2 (Minor / Auto-Fixed)`: `-2` to `-5` pts on initial score, restored to `+0` deduction on post-fix score once fixed in-place during the review.
  - `P3 (Nit)`: `0` to `-2` pts.
- **Core Verdict & Category Scores** (use `N/A` / `Неприменимо` for categories irrelevant to the entity layer, e.g., `Accessibility & ARIA` for a pure string utility):
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

### 2. Applied Immediate Fixes (`P2`)
- If in-place fixes were applied (Pre-Review Step 2), document for each fix:
  - **Files and Lines**: Exact links (`file.ts#L10-L15`).
  - **Category**: `Typo` / `JSDoc` / `Typing Ergonomics` / `Micro-Optimization & Check Unification` / `Dead Code Removal` / `Redundant Chaining & Syntax Cleanup` / `Class Structure & Method Ordering`.
  - **Rationale**: Technical reason and benefit.
  - **Code Before and After (Diff)**: Clear `diff` blocks.
  - **Test Verification**: Unit test execution result (`vitest run: X passed`).
- If no automated fixes were required, state explicitly: *"No automated fixes required (code is originally clean)"*.

### 3. Deep Dive: Architectural & Design Quality
- Analysis of decomposition, encapsulation, separation of concerns, scalability, modernity vs legacy practices, **Outbound Dependencies** (layer compliance, `package.json`, tree-shaking), and **Inbound Usages & Blast Radius** (call sites across the codebase, caller patterns, breaking change risks, and caller refactoring recommendations).

### 4. Detailed Findings & Bugs (Categorized by Severity)
- Categorize all findings into **Critical (`P0` / Blocker)**, **Major (`P1` / Architecture, Security & Breaking Flaws)**, **Minor (`P2` / Conventions & Typing — fixed immediately in-place and marked resolved)**, and **Nit / Suggestion (`P3`)**.
- **Mandatory Proof-of-Defect / Call Trace for `P0` & `P1` Blockers (Zero False Positives)**: To classify any issue as `P0` or `P1`, you **MUST provide a deterministic reproduction trace**: `Concrete Input / Caller State -> Exact File:Line Execution Path -> Actual Broken Output / Exception vs Expected Contract`. Never halt a review on unverified suspicion.
- Specify for each finding: File, line number, detailed explanation, reproduction trace (for `P0`/`P1`), and why it is problematic.

### 5. Comparison with Industry Top Solutions
- Compare the reviewed implementation with how leading open-source libraries (VueUse, Radix UI, Headless UI, Ark UI, Nuxt, TanStack) solve similar architectural problems.
- **Mandatory Summary Conclusion (Обязательный вывод)**: Write a comprehensive, well-reasoned conclusion (`Вывод` / `Conclusion & Takeaways`) directly after the comparison that:
  1. Explicitly states whether the reviewed solution matches, surpasses, or lags behind top industry counterparts.
  2. Clearly defines its distinct competitive advantages within the project ecosystem (e.g., zero third-party dependencies, native SSR isomorphism, seamless design token integration, strict type safety, or minimal runtime overhead).
  3. Formulates clear actionable takeaways: which high-value techniques from other tools are worth adopting, and what excessive abstractions or over-engineering should be intentionally avoided.

### 6. Actionable Refactoring, Advisory Proposals & Unit Tests
- **Advisory Refactoring Diffs**: Provide copy-paste-ready Before/After code diffs illustrating recommended architectural improvements (if any `P0`/`P1` issues or optional `P3` suggestions exist). Keep refactored code lean and proportional to real risks.
- **Unit Test Suite (Rules in [`ai-prompts/test.md`](./test.md))**:
  - **When Fast Track (Zero `P0` and Zero `P1` Blockers)**: Write/update `packages/<pkg>/src/**/__tests__/<Entity>.test.ts` directly (Finalization Step 2) strictly following [`ai-prompts/test.md`](./test.md), and write in this section only a concise summary of test scenarios and a clickable link to the test file (do NOT duplicate full test code inside the artifact).
  - **When Frozen (`P0` or `P1` Blockers Present)**: Keep workspace test files untouched and place the proposed unit test suite (authored strictly per [`ai-prompts/test.md`](./test.md)) inside this section of the artifact until the developer confirms («готово»).

---

## 🟢 Post-Review Finalization Protocol

### Finalization Triggers (Strict `P0`/`P1`-Only Freeze Gate):
1. **Autonomous Immediate Transition (Fast Track — Zero `P0`/`P1` Blockers)**:
   If during the code review **zero critical issues (`P0`) and zero major architectural/breaking blockers (`P1`) were found** (the code is originally clean, or only `P2` in-place auto-fixes and/or optional `P3` nits were noted), the agent **MUST NOT stop or wait for manual confirmation**. Proceed **directly, immediately, and autonomously to Steps 1–5 within the same turn**, and in batch mode automatically advance to the next entity in the dependency chain or alphabetical queue (respecting the Batch Freshness Guard and per-run group limits in Pre-Review Step 0).
2. **Explicit Developer Trigger (When `P0` or `P1` Blockers Were Found)**:
   If `P0` or `P1` blockers exist, freeze Steps 1–4 and halt batch progression completely until the developer reviews the report and confirms completion using trigger phrases: «готово» / «готова», «код-ревью готово» / «код ревью готово», «закончили код-ревью» / «закончили», «review complete» / «ready».

### Mandatory Finalization Steps:
1. **Update Package Registry (`packages/<pkg>/ai-review.md`)**:
   - Locate `ai-review.md` in the root of the package being reviewed (create it if it does not exist).
   - Append the reviewed entity identifier (canonical function/class name or relative file path matching that package's convention, e.g., `getColumn` or `src/functions/ref/getRef.ts`). If the entity was already present in `ai-review.md` (re-reviewed after modifications), remove its previous line and append it at the end of `ai-review.md` so no duplicate entries exist and Git history reflects the latest review.
2. **Apply & Verify Unit Tests (`__tests__/<Entity>.test.ts` per [`ai-prompts/test.md`](./test.md))**:
   - Write or update `packages/<pkg>/src/**/__tests__/<Entity>.test.ts` and execute all test verification checks strictly following the rules defined in [`ai-prompts/test.md`](./test.md).
3. **Synchronize Storybook & MDX Documentation (When Present)**:
   - Locate any corresponding Storybook MDX files (`<Entity>.ru.mdx`, `<Entity>.en.mdx`, `<Entity>.vi.mdx`). If they exist, update parameter types, default values, return types, usage examples, and descriptions to strictly reflect the latest implementation and any widened signatures. If the package or internal helper does not use per-entity MDX files, note `MDX: N/A` and do not create unrequested MDX files.
4. **Mandatory Post-Modification Verification (`eslint` & `tsc --noEmit` Quality Gate)**:
   - **Strict Build Guard Compliance (`ai-prompt.md` Rule 8)**: Do **NOT** execute `npm run build` during code review.
   - Run ESLint with auto-fix on all modified files, run non-emitting TypeScript verification for the package, and re-run the unit test suite:
     ```bash
     npx eslint --fix <modified-files>
     npx tsc -p packages/<pkg>/tsconfig.json --noEmit # or npx vue-tsc -p packages/<pkg>/tsconfig.json --noEmit for Vue packages
     npx vitest run packages/<pkg>/src/**/__tests__/<Entity>.test.ts
     ```
   - Guarantee `0` ESLint errors/warnings, `0` TypeScript errors, and `100%` passing tests.
5. **Final Notification to Developer**:
   - Respond in the chat with the overall score/grade, a clickable link to the generated AI Artifact, and a confirmation of the four completed finalization steps:
     1. Registry updated: entity added/updated in `ai-review.md`;
     2. Unit tests updated and verified: `vitest run: X passed`;
     3. Storybook MDX documentation synchronized (`.ru.mdx`, `.en.mdx`, `.vi.mdx`, or `N/A`);
     4. Post-modification quality verified: ESLint (`0 errors, 0 warnings`) and TypeScript `--noEmit` check clean.
