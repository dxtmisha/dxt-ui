---
name: code-review
description: Conduct a rigorous code review assessing architecture, security & vulnerabilities (XSS, injection, prototype pollution, ReDoS, sensitive data exposure), dependencies and inbound usage across the codebase, modern engineering standards vs obsolete patterns, practical bugs and real-world edge cases (strictly filtering out hypothetical non-crash/non-security remarks), adherence to project rules, accessibility & ARIA compliance, design quality, SSR compatibility & isomorphism, memory leak prevention & resource cleanup, and test suite completeness, with all findings, refactorings, and proposed test suites saved exclusively as an AI artifact (allowing immediate in-place fixes for minor bugs, typing ergonomics, character check unifications, micro-optimizations, typos, and JSDoc, with a mandatory dedicated auto-fix report section in the artifact, while reserving structural/breaking changes for developer approval), in the language specified by wikiLanguage in ./design.config.json.
---

# Task: Strict Architectural and Quality Code Review

Act as an elite Principal Software Architect and Senior Code Reviewer. Your goal is to conduct an uncompromising, deep-dive code review of the specified files, components, classes, functions, or composables/hooks.

Your analysis must go far beyond a superficial lint check: evaluate architectural soundness, security vulnerabilities and safe data handling, dependency health, real-world usage across the codebase, technological relevance vs obsolete patterns, subtle bugs and edge cases, adherence to strict project conventions, full SSR compatibility, memory leak prevention, and alignment with industry-leading state-of-the-art standards.

---

## 🔴 Mandatory Pre-Review Protocol

Before analyzing any code or generating any review text, you MUST execute these six mandatory steps:

### 1. Mandatory Language Determination (`./design.config.json` -> `wikiLanguage`)
- **Direct Instruction & Explicit Override**: Reading `./design.config.json` specifically to extract `wikiLanguage` is an **explicit, mandatory user directive**. You MUST open and inspect `./design.config.json` to retrieve `wikiLanguage` (e.g., `"ru"` or `"en"`). NEVER skip this check, assume English without checking, or refuse to read the language configuration.
- **Language Enforcement**:
  - If `wikiLanguage` is `"ru"`, the **entire code review report MUST be written strictly in Russian** (all sections, headings, categories, explanations, bug descriptions, summaries, and recommendations).
  - If `wikiLanguage` is `"en"` (or if no language property is found), write in English.
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
  4. **Redundant Logic, Dead Code & Micro-Optimizations**:
     - Eliminating redundant or duplicate checks in logical expressions (e.g., when `A || (B && C)` re-evaluates `A` inside `C` even though `A` is guaranteed false on the right-hand side: `isControlCharacter(charCode) || (cleanValue.length === 0 && isControlOrSpace(charCode))` simplifies to `isControlCharacter(charCode) || (cleanValue.length === 0 && charCode === 32)`).
     - Removing private helper micro-functions, constants, and types rendered unused after eliminating redundant conditions (e.g., removing `isControlOrSpace`).
     - Cleaning up unreachable branches, dead code, and unused local imports or variables inside the audited file.
     - **Redundant Optional Chaining & Syntax Cleanup**: Eliminating redundant optional chaining operators (such as `?.method?.()` when `method` is guaranteed to exist on a resolved non-null object, e.g., simplifying `this.getMethod()?.getItem?.(this.getIndex())` to `this.getMethod()?.getItem(this.getIndex())`), removing unneeded double-checks, and unifying invocation styles across adjacent methods.
  5. **Micro-Optimizations, Loop Safeguards & Check Unification**:
     - Caching collection lengths in loops (e.g., `const length = array.length` or `data.length` before indexed iterations) to eliminate repetitive property access overhead and guarantee termination against infinite loops caused by mutations in callbacks.
     - Early boundary exits for empty collections (`if (length === 0) return ...` / `if (data.size === 0) return ...`) to skip redundant loop setup.
     - Replacing repeated string indexing with already extracted numeric character codes (e.g., replacing `value[index] === ':'` with `charCode === CHAR_COLON` or `charCode === 58` when `charCode = value.charCodeAt(index)` was already computed in the current loop iteration).
     - Extracting magic numbers (character codes, boundary constants) into named, bilingually documented module-level constants (e.g., `CHAR_SPACE = 32`, `CHAR_COLON = 58`).
     - Unifying character check styles (if one branch checks a numeric code `charCode === 32` while an adjacent branch checks a string literal `value[index] === ':'`, unify them to character code checks).
     - Any similar minor, safe, and non-breaking algorithmic micro-optimizations, loop invariant hoists, and performance guards can and should be applied automatically in-place.
  6. **Class Structure & Method Ordering (`ai-prompt.md`)**:
     - Automatically reordering class members, properties, and methods to strictly adhere to the project's mandatory class structure guidelines:
       - Properties/Variables (`public` -> `protected` -> `private`) -> `constructor` -> Computed/Reactive Properties (`computed` and reactive fields placed immediately after constructor) -> Public Methods -> Protected Methods -> Private Methods.
       - Method group order within each visibility section: 1) `get` (getters), 2) `set` (setters), 3) `is...`, 4) `has...`, 5) `get...`, 6) `set...`, 7) `add...`, 8) `remove...`, 9) `update...`, 10) `reset...`, 11) remaining methods (grouped by semantic pairs such as `min`/`max`, `width`/`height`, then alphabetically).
     - Bringing class members into compliant order is completely safe, preserves behavior, and must be performed in-place automatically during code review.
- **Mandatory Dedicated Auto-Fix Report Section**:
  All applied in-place fixes **MUST be documented in Section 2 of the AI Artifact** ("Applied Immediate Fixes") with: modified files and line links (`file.ts#L10-L15`), fix category (`Typo` / `JSDoc` / `Typing Ergonomics` / `Micro-Optimization & Check Unification` / `Dead Code Removal` / `Redundant Chaining & Syntax Cleanup` / `Class Structure & Method Ordering`), technical rationale/benefit, Before/After `diff` blocks, and unit test verification status after the changes (e.g., `vitest run: 37 passed`). If no fixes were needed, state explicitly: *"No automated fixes required (code is originally clean)"*.
- **Strict Prohibition of Structural & Breaking Modifications**:
  - Large architectural refactorings, class or component rewrites, business logic modifications, entity deletions, or public API signature changes are **STRICTLY FORBIDDEN** without an explicit direct command from the developer (e.g., "apply fixes", "apply recommendations", "fix item 2", "update tests").
  - Document all structural proposals **exclusively within Section 6 of the AI Artifact** as advisory recommendations with Before/After diff blocks. Fix and edit strictly what the developer tells you to fix!
- **Strict Prohibition on Modifying Tests & Documentation Until Developer Confirms Completion («готово» / «закончили код-ревью»)**:
  - **Complete Freeze on Tests and Documentation During Review**: Until the developer explicitly writes that the review is finished / ready (e.g., «готово», «готова», «закончили код-ревью», «код-ревью готово», «review complete»), it is **CATEGORICALLY FORBIDDEN** to edit, rewrite, create, or update unit test files (`__tests__/*.test.ts`) or documentation files (`src/storybook/**/*.mdx`, docs, markdown) in the workspace repository.
  - **Artifact Only**: All unit test improvements, missing edge-case suites, and documentation recommendations must be authored **strictly and exclusively inside Section 6 of the AI Artifact report**.
  - **Mandatory Trigger to Begin Finalization**: Only after the developer sends an explicit confirmation (e.g., «готово», «готова», «закончили код-ревью», «код-ревью готово»), the agent is authorized to proceed to the post-review finalization steps:
    1. **Update Unit Tests**: Apply the verified test suite to `__tests__/<Entity>.test.ts` according to `ai-prompts/test.md` and verify a 100% clean run (`vitest run`).
    2. **Update Documentation**: Check and synchronize MDX documentation files in `src/storybook/` for full relevance.
    3. **Registry Update (`temp.md`)**: If the package tracks reviewed entities (e.g. `packages/functional-basic/temp.md`), record the entity name.

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

### 5. Mandatory Unit Test Audit & Quality Inspection (Audit in Artifact, Do NOT Modify Test Files Proactively)
- **Locate & Inspect Tests**: Search for corresponding unit tests in the adjacent or package `__tests__/` directory (`__tests__/<Entity>.test.ts` or `<name>.test.ts`).
- **Assess Test Quality & Completeness**:
  - Critically inspect test depth: detect superficial smoke tests (e.g., 1 shallow assertion), missing edge cases (`''`, `null`, `undefined`, `0`, negative values, invalid objects), unhandled error branches, untested reactive properties, unverified event emissions, ignored lifecycle hooks (`onMounted`, `onUnmounted`, resource cleanup), or unverified SSR behavior (server-side rendering safety and hydration compatibility).
- **Read-Only Verification (Run Test Runner)**:
  - Execute the test runner (`npx vitest run <path-to-test>`) to verify current pass/fail status, failure points, and execution coverage (and re-run to verify any Immediate In-Place Fixes applied in Step 3).
- **Formulate Comprehensive Test Suite in the Artifact (Do NOT Modify Test Files)**:
  - If existing tests are incomplete, shallow, fragile, or missing, author the complete, copy-paste-ready unit test suite **STRICTLY inside Section 6 of the AI Artifact report**.
  - **No Contrived Hypothetical Tests**: Apply Step 6 strictly — never penalize existing tests or add test cases for speculative, non-practical inputs (such as internal marker collisions like `___HIGHLIGHT_START___`) that cause neither crashes nor security vulnerabilities.
  - **STRICT PROHIBITION (Complete Freeze Until Confirmation)**: Do NOT rewrite, overwrite, or create test files or documentation in the workspace repository during code review. Modifying tests and documentation is permitted ONLY after the developer explicitly confirms that the review is complete (e.g., «готово», «готова», «закончили код-ревью», «код-ревью готово»).

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
- **Benchmarking Against Modern Top-Tier Standards & Actionable Conclusion**:
  - Compare against state-of-the-art industry benchmarks (Radix UI, Headless UI, Ark UI, VueUse, Nuxt 3 core, TanStack).
  - Check utilization of modern web platform standards (native Popover API, CSS container queries, subgrid, modern `IntersectionObserver`/`ResizeObserver` APIs) where appropriate.
  - Verify optimal tree-shaking, `/*#__PURE__*/` annotations, and minimal runtime overhead.
  - Always synthesize comparisons into a clear, reasoned architectural conclusion (`Вывод`).

---

## 2. Entity-Level Design & Quality Assessment

Evaluate the target according to its specific entity type (in addition to the cross-cutting checks in Sections 3–5):

### A. Vue Components (`.vue`)
- **Composition & Atomicity**: Minimal, single-purpose component with complex business/state logic extracted into composables.
- **Props & Emits Contract**: Strictly typed via `defineProps<{ ... }>()` and `defineEmits<{ ... }>()`; strict one-way data flow (never mutate incoming props); predictable naming with `kebab-case` event names.
- **Template Hygiene**: Cleanest possible semantic HTML; zero function calls, complex calculations, or inline styles in templates; unique non-index `:key` in `v-for`; never combine `v-if` with `v-for` on the same element.
- **Styles & Design System**: Strict SCSS mixin usage from `@dxtmisha/styles`; zero hardcoded colors, borders, or spacing values; never modify base UI library styles; PurgeCSS compliance (all class names must be unbroken string literals).
- **Component Lifecycle, SSR & Security**: Safe `Teleport` targets and `ClientOnly` wrappers; deterministic initial markup matching between server and client (no `<p><div>...</div></p>` invalid nesting); full WAI-ARIA roles/states and keyboard focus management; sanitized bindings (avoid `v-html`, sanitize dynamic SVGs and `href`/`src`/`action` URLs, enforce `rel="noopener noreferrer"` on `target="_blank"`).

### B. TypeScript Classes (`class`)
- **Structure & Ordering**:
  - Strict member ordering: Properties (`public` -> `protected` -> `private`) -> `constructor` -> Computed/Reactive Properties (`computed` and reactive fields placed immediately after constructor) -> Public Methods -> Protected Methods -> Private Methods.
  - Strict method ordering within visibility groups: `get` -> `set` -> `is...` -> `has...` -> `get...` -> `set...` -> `add...` -> `remove...` -> `update...` -> `reset...` -> remaining methods (grouped by semantic pairs such as `min`/`max`, `width`/`height`, then alphabetically).
- **Encapsulation & Immutability**: Strict visibility modifiers (`protected`/`private` for internals) and immutability (`readonly`, `as const`).
- **Reuse of Project Primitives**: Use helper primitives from `@dxtmisha/functional-basic` (`isFunction`, `executeFunction`, `isFilled`, `isObject`, `isArray`, `isString`, etc.) instead of custom inline checks.
- **ARIA Encapsulation (Constructors & Controllers)**: Encapsulate ARIA attributes inside dedicated `aria` getters (`get aria(): AriaList`) or via `AriaStaticInclude` (`AriaStaticInclude.role()`, `label()`, `hidden()`) rather than fragmented template bindings; automatically hide decorative assets (`AriaStaticInclude.hidden()` / `aria-hidden="true"`) when meaningful labels (`alt`/`label`) are absent.
- **Lifecycle, SSR & Security**: Request-isolated SSR singletons via `ServerStorage.get('key', () => new Class())` (zero mutable static/module state); explicit `destroy()` / `dispose()` / `reset()` teardown methods and bounded internal caches; prototype pollution guards, ReDoS-safe regexes, and credential-safe error serialization.

### C. Functions & Utilities (`function`)
- **Purity & Determinism**: Side-effect-free pure functions; top-level module invocations annotated with `/*#__PURE__*/` for bundler tree-shaking.
- **Cyclomatic Complexity**: Early returns and guard clauses instead of nested `if/else` ladders; well-defined error boundaries without silent failures.
- **Signature Ergonomics & Single Unified Signature (No Overloads)**: Clean parameter lists using typed options objects with sensible defaults for functions with 3+ parameters. Strictly avoid function overloads — always express polymorphic inputs and literal type preservation through a single unified signature with generics, union types, or conditional types (e.g., `T extends string ? Capitalize<T> : string`).
- **Defensive Parsing & RegExp Safety**: ReDoS-free regular expressions; mandatory escaping of dynamic user search/input strings via `escapeExp` / `RegExp.escape` before `new RegExp(...)`; safe `JSON.parse` and numeric parsing guarded against unhandled exceptions or non-primitive inputs.

### D. Composables & Hooks (`use*` / `executeUse*`)
- **Reactivity Preservation**: Proper handling of reactive inputs (`MaybeRefOrGetter`, `toValue`, `toRefs`); zero accidental reactivity loss (no premature destructuring of reactive objects).
- **Scope & Singletons**: Shared or session-scoped state wrapped in `executeUseGlobal`, `executeUseLocal`, or `executeUseProvide` inside external service files; Vue components must never call raw `useApi*` / `executeUse*` factories directly in `<script setup>`.
- **Disposal, SSR & Messaging Security**: Mandatory cleanup via `onScopeDispose`; watchers bound to active `effectScope()` or explicitly stopped; bounded in-memory maps/registries; browser APIs guarded by `isDomRuntime()` with zero client-only polling/intervals running during SSR; strict origin/schema validation for `postMessage` and `BroadcastChannel`, sanitized URL query/hash/route state, and secure cookie flags (`SameSite`, `Secure`, `HttpOnly`) in `useCookieRef`.

---

## 3. Bugs, Edge Cases, Memory Safety & SSR Isomorphism

Rigorously search for subtle runtime and architectural defects across five core areas:

1. **Reactivity & State Bugs**:
   - Accidental loss of Vue reactivity, stale closures in composables/callbacks/computed getters, infinite reactivity loops, or un-memoized expensive calculations.
2. **Asynchronous & Concurrency Issues**:
   - Race conditions in async data fetches or event debounces, unhandled promise rejections, or uncancelled pending requests (`AbortController`).
3. **Memory Leaks & Resource Cleanup Failures**:
   - Missing `removeEventListener` on `window`, `document`, or external DOM elements in `onUnmounted` / `onScopeDispose` (or failure to use managed helpers like `useEventListener`).
   - Lingering `setInterval`, `setTimeout`, or `requestAnimationFrame` continuing after component unmount or scope disposal (especially critical in SSR where Node processes keep timers alive indefinitely).
   - Unstopped watchers (`watch`, `watchEffect`) created outside synchronous `setup()` or active `effectScope()`.
   - Detached DOM nodes retained in closures, static arrays, caches, or `Map`/`Set` references; unbounded caches without eviction policies.
   - Undisposed observers (`ResizeObserver`, `IntersectionObserver`, `MutationObserver`), media query listeners (`matchMedia`), or subscriptions (`BroadcastChannel`, `WebSocket`, custom event emitters, store subscriptions); missing `destroy()` / `dispose()` / `reset()` methods on stateful classes.
4. **Edge Cases & Pragmatic Boundaries**:
   - Unhandled `null`, `undefined`, `''`, `[]`, `{}`, `NaN`, `0`, negative numbers, division by zero, or off-by-one errors in realistic inputs.
   - **Practical Impact Filter (Step 6)**: Evaluate edge cases strictly through practical usage and real consequences. Do NOT flag contrived scenarios (such as a user deliberately typing internal sentinel markers like `___HIGHLIGHT_START___`) when they cause neither a runtime crash nor a security/XSS vulnerability and at worst only affect local visual markup for that user.
5. **SSR Hydration & Isomorphic Flaws**:
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
- **Tree-Shaking (`/*#__PURE__*/`)**: Every top-level module function call, factory invocation, or constructor (`new Class()`) assigned to a constant/variable MUST be annotated with `/*#__PURE__*/`.
- **PurgeCSS Compatibility**: Never construct CSS class names dynamically via string concatenation or template literals (`'btn-' + size`, `` `badge-${color}` ``). Always use full, unbroken string literals in object syntax, dictionaries, or ternaries, or wrap external dynamic classes in `/* purgecss start ignore */ ... /* purgecss end ignore */`.
- **Accessibility & ARIA (WAI-ARIA & A11y)**: Full ARIA support for interactive, graphical, and informative components (`role="img"`, `role="button"`, `role="dialog"`, `aria-expanded`, `aria-controls`, `aria-selected`, `aria-checked`, `aria-disabled`, `aria-live`, `aria-haspopup`, `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-hidden="true"`); proper encapsulation via `AriaStaticInclude` and `get aria(): AriaList` in constructors; full keyboard navigation (`Enter`, `Space`, `Escape`, `Arrow` keys) and focus management.
- **SSR, Memory, Security & Testing Compliance**: Full compliance with Section 3 (isomorphic `isDomRuntime()` / `ServerStorage.get()`, deterministic hydration, complete listener/timer/observer/watcher disposal), Section 4 (zero XSS/prototype pollution/ReDoS/data leaks), and Pre-Review Step 5 (thorough unit test audit documented in Section 6 of the artifact without modifying workspace test files unless instructed).

---

## 6. Review Output Format

### A. Delivery & Language Enforcement
1. **Language**: Follow Pre-Review Step 1 (`./design.config.json` -> `wikiLanguage`: write the entire report in Russian if `'ru'`, or English if `'en'` / missing; keep code, types, identifiers, and paths untranslated).
2. **Artifact Only**: Follow Pre-Review Step 2 (save exclusively to `<appDataDir>/brain/<conversation-id>/code_review_<target>.md`; never create `./code-review.md` in the repository; reply in chat with ONLY a 1–2 sentence summary, overall rating, and artifact link).

### B. Report Structure & Sections
Structure the artifact markdown document with the following six sections (translate all section titles, table headers, and prose according to `wikiLanguage`):

#### 1. Executive Summary & Quality Score
- **Overall Rating**: Grade (`A`, `B`, `C`, `D`, `F`) and Score (`0–100`).
- **Core Verdict**: High-level summary of strengths, weaknesses, and production readiness.
- **Category Scores**:
  | Category | Rating | Summary |
  | :--- | :---: | :--- |
  | **Architecture & Modularity** | Excellent / Good / Needs Improvement / Poor | ... |
  | **Dependencies & Usages (Impact & Graph)** | Clean & Decoupled / Tight Coupling / Breaking Risks | ... |
  | **Modernity vs Legacy Patterns** | Modern / Outdated / Mixed | ... |
  | **Component / Class / Hook Design** | Excellent / Good / Needs Improvement / Poor | ... |
  | **Security & Vulnerabilities** | Secure / Minor Risks / High Vulnerabilities (XSS, ReDoS, Leaks) | ... |
  | **Accessibility & ARIA (A11y)** | Fully Accessible / Minor Gaps / Inaccessible | ... |
  | **SSR Compatibility & Isomorphism** | Safe & Isomorphic / Hydration Risks / Leaking Server State | ... |
  | **Memory Safety & Leak Prevention** | Zero Leaks & Clean Disposal / Lingering Listeners or Timers / Critical Memory Leaks | ... |
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
- **Minor (P2 / Conventions & Typing)**: Naming abbreviations, missing `/*#__PURE__*/`, missing or malformed bilingual JSDoc, missing explicit return types, overly narrow parameter types in permissive runtime functions, degradation of generic return types to `unknown` when default fallback values are provided.
  - *Mandatory In-Place Auto-Fix*: All minor typing defects (such as narrow parameter types contradicting runtime coercion, loss of generic return type inference from default fallback values, missing optional modifiers, typos, JSDoc omissions, dead code branches, redundant optional chaining operators, or class structure and method ordering inconsistencies) **MUST NOT remain unaddressed in the codebase** — they MUST be fixed immediately in-place during the review (Pre-Review Step 3), documented in Section 2 ("Applied Immediate Fixes"), and marked as resolved in Section 4.
- **Nit / Suggestion (P3)**: Minor stylistic polish, code ergonomics, micro-optimizations.

*Strict Hypothetical Filter (Pre-Review Step 6)*: Speculative "what-if" scenarios that do not occur in practical usage and produce **no runtime crash, no data loss, and no security/attack vulnerability** (e.g., an artificial input colliding with an internal marker like `___HIGHLIGHT_START___` whose worst-case effect is a harmless local layout/markup glitch for that user) are **STRICTLY EXCLUDED from all severity tiers (including P2 and P3/Nit)** and must never lower the review score.

*For each finding, specify: File, line number, detailed explanation of the flaw, and why it is problematic.*

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
  - All major architectural modifications, class/component rewrites, test file creations/overwrites, and documentation updates remain purely advisory and frozen until the developer explicitly commands to apply them or confirms completion (e.g., «готово», «готова», «закончили код-ревью», «код-ревью готово»). Only upon receiving this explicit trigger should you proceed to updating unit tests in `__tests__/` and documentation in `src/storybook/`. Fix and edit strictly what the developer tells you to fix!
