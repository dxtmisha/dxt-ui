---
name: code-review
description: Conduct a rigorous read-only code review assessing architecture, security & vulnerabilities (XSS, injection, prototype pollution, ReDoS, sensitive data exposure), dependencies and inbound usage across the codebase, modern engineering standards vs obsolete patterns, bugs and edge cases, adherence to project rules, accessibility & ARIA compliance, design quality, SSR compatibility & isomorphism, memory leak prevention & resource cleanup, and test suite completeness, with all findings, refactorings, and proposed test suites saved exclusively as an AI artifact (strictly prohibiting any workspace file modifications until explicitly instructed by the developer), in the language specified by wikiLanguage in ./design.config.json.
---

# Task: Strict Architectural and Quality Code Review

Act as an elite Principal Software Architect and Senior Code Reviewer. Your goal is to conduct an uncompromising, deep-dive code review of the specified files, components, classes, functions, or composables/hooks.

Your analysis must not be a superficial lint check. You must evaluate architectural soundness, security vulnerabilities and safe data handling, dependency health, real-world usage across the codebase, technological relevance vs obsolete patterns, code flaws and subtle bugs, adherence to strict project conventions, full SSR compatibility and memory leak prevention, and benchmark the implementation against industry-leading state-of-the-art standards.

---

## 🔴 Mandatory Pre-Review Protocol (Language, Delivery Target, Read-Only Mandate, Usage Graph, Context & Test Coverage)

Before analyzing any code or generating any review text, you MUST execute these six mandatory steps:

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

### 3. Strict Prohibition of Proactive File Modifications (Read-Only Mandate / Запрет на редактирование файлов)
- **Strict Read-Only Workflow**: Code review is **STRICTLY a diagnostic, analytical, and advisory task**.
- **PROHIBITION OF UNSOLICITED CODE MODIFICATIONS**: During code review, the AI agent is **STRICTLY FORBIDDEN to edit, rewrite, refactor, or touch ANY files in the project workspace** (source files, components, classes, tests, documentation, or configurations). Proactive, self-directed code editing during code review is a severe violation.
- **Artifact-Only Recommendations**: All code fixes, before/after diffs, architectural refactorings, and proposed unit test suites must be documented **EXCLUSIVELY within the AI Artifact report**, NEVER applied directly to the codebase.
- **Developer-Driven Execution**: The AI agent is authorized to modify, edit, or refactor workspace files **STRICTLY and ONLY when the developer explicitly issues a direct instruction** (e.g., "исправь", "примени фиксы", "исправь замечания", "обнови тесты", etc.). Fix and edit strictly what the developer tells you to fix!

### 4. Mandatory Dependency & Inbound Usage Investigation (Graph & Blast Radius Audit)
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

### 5. Mandatory Unit Test Audit & Quality Inspection (Audit in Artifact, Do NOT Modify Files Proactively)
- **Locate and Inspect Tests**: Search for corresponding unit tests in the adjacent or package `__tests__/` directory (e.g., `__tests__/<Entity>.test.ts` or `<name>.test.ts`).
- **Assess Test Quality & Completeness (Audit)**:
  - Do not merely check if a test file exists. Critically inspect the quality, depth, and thoroughness of the test suite.
  - Detect incomplete, superficial, or low-quality tests: superficial smoke tests with only 1 shallow assertion, missing edge cases (empty strings, `null`, `undefined`, 0, negative values, invalid objects), unhandled error branches, untested reactive properties, unverified event emissions, ignored lifecycle hooks (`onMounted`, `onUnmounted`, resource cleanup), or unverified SSR behavior (server-side rendering safety and hydration compatibility).
- **Read-Only Verification (Run Test Runner)**:
  - Run tests using the test runner (e.g. `npx vitest run <path-to-test>`) in read-only mode to verify current test status, failure points, and execution coverage.
- **Formulate Comprehensive Test Suite in the Artifact (Do NOT Modify Test Files)**:
  - If existing tests are incomplete, shallow, fragile, or missing: author the recommended, robust unit test suite **STRICTLY inside Section 5 of the AI Artifact report**, ready for review and copy-pasting.
  - **STRICT PROHIBITION**: Do NOT rewrite, overwrite, or create test files in the workspace repository during code review. Modifying or adding test files is permitted **STRICTLY and ONLY upon explicit developer command**.

### 6. Context & Purpose Awareness (Anti-Overengineering Guard / Учёт среды использования и назначения)
- **Evaluate Real-World Context & Purpose**: The reviewer MUST assess the code through the lens of its **actual execution environment, consumer call sites, and intended functional purpose**.
- **Ban on "All-Life-Cases" Paranoia (Запрет проверок «на все случаи жизни»)**: It is **STRICTLY FORBIDDEN to demand checks, guards, or complex algorithmic layers for absurd, contrived, or statistically impossible hypothetical scenarios**. Demanding defensive code for every conceivable theoretical edge case leads to **code bloat and severe over-engineering (`избыточный код / оверинжиниринг`)**.
- **Real vs Contrived Boundaries**: Distinguish between genuine production edge cases (e.g., `0`, `false`, `null`, XSS injection in user attributes, SSR hydration mismatches, unhandled promise rejections, lifecycle teardown) and paranoid edge cases that never occur in the real system architecture or that contradict the component's defined scope.
- **Proportionality & Cleanliness**: Defensive checks must remain strictly proportional to the entity's purpose. If a theoretical scenario requires bloating a simple, focused helper with dozens of lines of redundant defensive code, demanding this in code review is a severe anti-pattern. Keep the code lean, fast, and purposeful.

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
- **SSR Compatibility & Hydration Safety**:
  - Browser-only globals (`window`, `document`, `navigator`, `localStorage`, `sessionStorage`, `location`) must NEVER be accessed at root level of `<script setup>` or in `beforeMount`/`created`. They must be guarded by `isDomRuntime()` or deferred to `onMounted`.
  - Hydration mismatch prevention: Ensure server-rendered and client-rendered initial markup match identically (avoid non-deterministic random IDs, client-only timestamps/dates during initial render, or invalid HTML element nesting like `<p><div>...</div></p>`).
  - Safe Teleport & ClientOnly: Teleport targets must exist in DOM before mounting; client-only third-party widgets must be encapsulated properly.
- **Memory Safety & Resource Cleanup**:
  - Event listener cleanup: All manual event listeners attached to `window`, `document`, or external targets must be explicitly removed in `onUnmounted` or `onScopeDispose` (or use managed composables like `useEventListener`).
  - Observer & Timer disposal: Disconnect `ResizeObserver`, `IntersectionObserver`, `MutationObserver`, and clear all `setTimeout`, `setInterval`, and `requestAnimationFrame` before component unmount.
- **Security & Content Injection Guards**:
  - `v-html` audit: Avoid `v-html` whenever possible. If raw HTML rendering is strictly necessary, ensure input is sanitized against XSS (no script execution, `onerror`/`onload` attributes, or dangerous protocols).
  - Dynamic SVG security: SVGs rendered dynamically from user input or external URLs must be sanitized (no embedded `<script>`, external entity injection, or event handlers).
  - Safe URL attributes: `href`, `src`, and `action` bindings must guard against malicious protocols (`javascript:`, `data:` URLs executing scripts).
  - Safe external navigation: External links (`target="_blank"`) must always declare `rel="noopener noreferrer"`.

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
- **SSR Request Isolation & State Safety**:
  - Zero cross-request pollution: Classes must NOT store user- or request-specific state in static properties or module-level singletons. In Node.js/Nitro SSR, module globals persist across concurrent HTTP requests.
  - Request-isolated singletons: Use `ServerStorage.get('key', () => new Class())` for stateful instances that must be scoped per request rather than shared globally.
- **Memory Management & Teardown Lifecycle**:
  - Explicit destruction contract: Any class holding subscriptions, listeners, DOM elements, or caches must implement an explicit `destroy()` / `dispose()` / `reset()` method to release memory references.
  - Cache size & retention guards: Internal registries, caches, and event listener arrays must prevent unbounded growth and detached memory retention.
- **Security & Data Sanitization**:
  - Prototype pollution guards: Deep merge, cloning, object property setters by path (`set(obj, path, val)`), or configuration merging must explicitly guard against modifying `__proto__`, `constructor`, or `prototype`.
  - ReDoS prevention: Regular expressions must avoid catastrophic exponential backtracking on maliciously crafted inputs.
  - Safe error serialization: Do not log or expose raw credentials, auth tokens, or private customer data in error messages or ErrorCenter details.

### C. Functions & Utilities (`function`)
- **Purity & Determinism**:
  - Are pure functions truly side-effect free?
  - Are top-level module invocations properly annotated with `/* #__PURE__ */` for bundler tree-shaking?
- **Cyclomatic Complexity**:
  - Early returns and guard clauses to eliminate nested `if/else` ladders.
  - Well-defined error boundaries without silent failure.
- **Signature Ergonomics**:
  - Clean parameter lists: Use typed options objects with sensible defaults for functions with 3+ parameters.
- **Defensive Security & Regular Expressions**:
  - ReDoS safety: Regular expressions must be crafted without ambiguous nested quantifiers (e.g. `(a+)+`, `(a|aa)+`).
  - Dynamic RegExp escaping: When constructing `new RegExp(...)` from dynamic user input or search queries, characters with special regex meaning must be escaped (using `escapeExp` / `RegExp.escape`).
  - Safe parsing: Ensure `JSON.parse` or numeric parsers are guarded against throwing unhandled exceptions or accepting non-primitive inputs.

### D. Composables & Hooks (`use*` / `executeUse*`)
- **Reactivity Preservation**:
  - Correct handling of reactive parameters (`MaybeRefOrGetter`, `toValue`, `toRefs`).
  - No accidental reactivity breakage (e.g., premature destructuring of reactive objects).
- **Scope & Singletons**:
  - Proper lifecycle boundaries: Wrapping in `executeUseGlobal`, `executeUseLocal`, or `executeUseProvide` when dealing with shared or session-scoped state.
  - Components must never call raw state singletons directly; they consume the wrapped composable hook.
- **Cleanup & Memory Safety**:
  - Mandatory `onScopeDispose` cleanup: All side effects, intervals (`setInterval`), timeouts (`setTimeout`), `requestAnimationFrame`, observers (`ResizeObserver`, `IntersectionObserver`), and event listeners must be cleaned up on scope disposal (`onScopeDispose`).
  - Watcher lifecycle safety: Any `watch` or `watchEffect` created inside composables must be bound to the active effect scope. Watchers created outside setup or in asynchronous callbacks without explicit stopping handles will cause permanent memory leaks.
  - Unbounded cache prevention: In-memory maps, caches, or event registries must have clear eviction policies or bounds to avoid progressive memory consumption over long sessions.
- **SSR Safety & Isomorphism**:
  - Safe browser API access guarded strictly by `isDomRuntime()`.
  - Zero request-leaking global state: Never share mutable request/user state across requests in SSR via module-level refs or globals. Use `executeUseLocal`, `executeUseProvide`, or `ServerStorage`.
  - Isomorphic reactivity: Avoid running client-only asynchronous side effects (e.g. continuous polling, timer intervals) during server-side execution.
- **Security, Messaging & Storage Isolation**:
  - Origin verification: Handlers for `window.addEventListener('message', ...)` and `BroadcastChannel` must validate message origins and payload schemas before processing.
  - URL parameter & state sanitization: Query parameters, hashes, and route parameters must be treated as untrusted user input, validated and sanitized before assigning to reactive state or DOM.
  - Cookie security: When setting cookies via `useCookieRef` or cookie utilities, ensure proper flags (`SameSite`, `Secure`, `HttpOnly` where applicable) to prevent CSRF and session hijacking.

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
   - Missing `removeEventListener` on `window`, `document`, or external DOM elements.
   - Lingering `setInterval`, `setTimeout`, or `requestAnimationFrame` that continue running after component unmount or scope disposal (especially devastating in SSR where Node processes keep timers alive indefinitely).
   - Unstopped watchers (`watch`, `watchEffect`) created outside synchronous `setup()` or outside active `effectScope()`.
   - Detached DOM nodes retained in closures, static arrays, caches, or Map/Set references.
   - Undisposed observers (`ResizeObserver`, `IntersectionObserver`, `MutationObserver`) or media query listeners (`matchMedia`).
   - Missing cleanup for subscriptions (`BroadcastChannel`, `WebSocket`, custom event emitters, Rx/Store subscriptions).
4. **Edge Cases & Boundary Conditions**:
   - Unhandled `null`, `undefined`, empty string, empty array/object, `NaN`, 0, negative numbers.
   - Boundary checks, division by zero, off-by-one errors.
   - **Pragmatic Boundaries vs Code Bloat (Без избыточного кода)**: Evaluate edge cases strictly within the entity's intended purpose and usage environment. Do NOT penalize code or demand defensive layers for absurd, impossible edge cases that bloat the codebase without real benefit.
5. **SSR Hydration & Isomorphic Flaws**:
   - Direct execution of `window`, `document`, `navigator`, `localStorage`, `sessionStorage`, or `location` on the server without checking `isDomRuntime()`.
   - Cross-request state pollution: Storing user or request-dependent data in module-level global variables or shared singletons, leaking sensitive state between concurrent requests in SSR.
   - Timers or continuous background loops executing during server rendering.
   - Hydration mismatch risks between server-rendered and client-rendered DOM trees (differing timestamps, random IDs, browser-conditional markup rendered during hydration).
   - DOM manipulation or measurement during server render (e.g. attempting to read `offsetWidth`, `getBoundingClientRect`, or canvas context on server).

---

## 4. Security & Vulnerability Audit (Анализ безопасности и поиск уязвимостей)

Conduct a systematic security assessment to identify vulnerabilities, injection vectors, and data leak risks:

1. **XSS (Cross-Site Scripting) & Markup Injection**:
   - Usage of `v-html` or `innerHTML` without robust sanitization.
   - Dynamic SVG rendering containing malicious script tags, event handlers (`onload`, `onerror`), or XML entity attacks.
   - Dynamic evaluation or script execution (`eval()`, `new Function()`, `setTimeout(string)`).
   - Unsanitized URL bindings in `href`, `src`, `formaction`, or window redirects (allowing `javascript:`, `vbscript:`, or unapproved `data:` URI execution).
   - External links with `target="_blank"` missing `rel="noopener noreferrer"` (tabnabbing vulnerability).

2. **Prototype Pollution & Object Integrity**:
   - Recursive object merging, deep cloning, query parameter hydration, or dot-notation path traversal (e.g., `set(target, path, value)`) without filtering sensitive property names (`__proto__`, `constructor`, `prototype`).
   - Object creation without a prototype (`Object.create(null)`) vs plain objects when storing arbitrary dictionary keys from external sources.

3. **ReDoS (Regular Expression Denial of Service)**:
   - Vulnerable regular expressions with nested quantifiers or overlapping alternation branches prone to catastrophic polynomial/exponential backtracking when processing adversarial inputs.
   - Unescaped strings in dynamic regular expression constructors (`new RegExp(untrustedPattern)`).

4. **Sensitive Data Exposure & Information Leakage**:
   - Secrets, API keys, private tokens, passwords, or authentication credentials hardcoded in source code or client bundles.
   - Accidental logging of authorization headers, session cookies, tokens, or PII (Personally Identifiable Information) to console, `ErrorCenter`, query strings, or client error monitors.
   - Leaking server-side environment variables or private configs through SSR state hydration objects or public client manifests.

5. **Cross-Origin & Messaging Security**:
   - Insecure cross-window communication: `window.addEventListener('message', ...)` lacking strict `event.origin` verification.
   - Unauthenticated `BroadcastChannel` listeners that trust foreign messages without payload validation.
   - Open redirect vulnerabilities: redirecting or navigating to unvalidated user-supplied URLs without checking domain whitelist or relative path safety.

6. **SSR & Request Isolation Security**:
   - SSRF (Server-Side Request Forgery): server-side data prefetching or API proxy utilities accepting user-controlled destination URLs without strict IP/domain allowlists.
   - Cross-request cache poisoning or session bleeding: sharing mutable user- or request-specific data in module-level singletons or static variables in Nitro/Node.js SSR environments.
   - Insecure cookie configurations: missing `Secure`, `SameSite=Lax/Strict`, or `HttpOnly` attributes on sensitive cookies.

7. **Input Validation & Schema Integrity**:
   - Blind trust in external API responses, query parameters, cookies, or localStorage data without schema validation (e.g. `@effect/schema` or strict type guards).
   - Insecure deserialization: executing or evaluating untrusted data extracted from cookies, storage, or URLs.

---

## 5. Strict Project Rules & Conventions Compliance

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
- **Tree-Shaking (`/* #__PURE__ */`)**:
  - All top-level module function/constructor calls assigned to constants MUST have `/* #__PURE__ */`.
- **PurgeCSS Compatibility**:
  - No dynamic CSS class concatenation (`'btn-' + size`). Complete literal strings only.
- **Accessibility & ARIA Standards (WAI-ARIA & A11y)**:
  - Mandatory ARIA support for interactive, graphical, and informative UI components.
  - Proper use of `AriaStaticInclude` (`role()`, `label()`, `hidden()`, etc.) and dedicated `aria` getters in component constructor classes.
  - Correct role assignments and state synchronization (`role="img"`, `role="button"`, `role="dialog"`, etc.).
- **Security Standards**:
  - Zero unescaped user HTML or dangerous URL protocol bindings (`javascript:`).
  - Mandatory prototype pollution guards on recursive object utilities.
  - Safe ReDoS-resistant regular expressions with escaped dynamic patterns.
  - No secrets, credentials, or PII exposed in logs, client bundles, or state hydration.
- **SSR Safety & Isomorphic Standards**:
  - Fully isomorphic code across all packages.
  - Never store request state in globals or module-level singletons.
  - Mandatory use of `isDomRuntime()` before accessing `window`, `document`, or browser APIs.
  - Use `ServerStorage.get('key', () => new Class())` for request-isolated singletons in Nitro/Node.js SSR environments.
- **Memory Leak Prevention & Scope Disposal**:
  - Mandatory disposal of all listeners, timers, observers, and subscriptions in `onScopeDispose` / `onUnmounted`.
  - Explicit `destroy()` / `dispose()` methods on stateful classes holding references or subscriptions.
  - Zero unstopped watchers or detached DOM references.
- **Mandatory Unit Tests Quality & Coverage (Audit & Artifact Specification)**:
  - Every entity (constructor class, utility function, composable, helper) must be evaluated against thorough, high-quality testing standards.
  - Test suites must be critically audited for completeness and quality: if tests are incomplete, superficial, or low-quality, the reviewer must document the gaps and prepare a comprehensive test suite specification **inside the review artifact**. Modifying or creating test files in the workspace is permitted **STRICTLY and ONLY upon explicit instruction from the developer**.

---

## 6. Review Output Format

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
  | **Security & Vulnerabilities** | Secure / Minor Risks / High Vulnerabilities (XSS, ReDoS, Leaks) | ... |
  | **Accessibility & ARIA (A11y)** | Fully Accessible / Minor Gaps / Inaccessible | ... |
  | **SSR Compatibility & Isomorphism** | Safe & Isomorphic / Hydration Risks / Leaking Server State | ... |
  | **Memory Safety & Leak Prevention** | Zero Leaks & Clean Disposal / Lingering Listeners or Timers / Critical Memory Leaks | ... |
  | **Bugs & Edge Cases** | Clean / Minor Issues / Critical Bugs | ... |
  | **Unit Tests & Quality** | Comprehensive & High-Quality / Rewritten & Refined / Created from Scratch / Incomplete or Missing | ... |
  | **Project Rules & Conventions** | 100% Compliant / Minor Discrepancies / Non-compliant | ... |

#### 2. Deep Dive: Architectural & Design Quality
- Analysis of decomposition, encapsulation, and scalability.
- Evaluation of whether the entity is modern or relies on outdated practices compared to top-tier industry libraries.
- **Dependency & Inbound Usage Audit**:
  - **Outbound Dependencies**: Review of all imported modules, layer compliance (`functional-basic` -> `functional` -> `constructor` -> `d1`), `package.json` declaration, and tree-shakeability.
  - **Inbound Usages & Blast Radius**: Comprehensive scan and list of where the entity is used across the codebase, analysis of caller patterns, potential breaking change risks, and suggestions for caller refactoring.

#### 3. Detailed Findings & Bugs (Categorized by Severity)
- **Critical (P0 / Blocker)**: Security vulnerabilities (exploitable XSS, code/attribute injection, prototype pollution, sensitive credential exposure, ReDoS in public endpoints), bugs causing runtime crashes, data loss, memory leaks, SSR breaking issues / cross-request leaks, or reactivity breakage.
- **Major (P1 / Architecture & Modernity)**: Latent security weaknesses (missing `rel="noopener noreferrer"`, unvalidated external URLs, insecure cookie flags), outdated techniques, violation of single responsibility, suboptimal paradigms, missing cleanup / potential leak risks, SSR hydration mismatches.
- **Minor (P2 / Conventions & Typing)**: Naming abbreviations, missing `/* #__PURE__ */`, missing or malformed bilingual JSDoc, missing explicit return types.
- **Nit / Suggestion (P3)**: Minor stylistic polish, code ergonomics, micro-optimizations.

*For each finding, provide: File, line number, explanation of the issue, and the exact reason why it is problematic.*

#### 4. Comparison with Industry Top Solutions
- Compare the reviewed solution with how leading open-source libraries (e.g., VueUse, Radix, Nuxt, TanStack) solve similar architectural problems.
- Highlight concrete lessons or patterns that could be adopted to elevate the code to top-tier quality.

#### 5. Actionable Refactoring, Code Fixes & Test Suite (Advisory Proposals)
- Provide ready-to-use before/after code diffs or refactored code blocks illustrating the recommended improvements as advisory proposals for the developer.
- **Proportional & Lean Fixes (Без оверинжиниринга)**: Ensure refactored code remains lean and focused on the entity's actual purpose and environment. Do NOT introduce over-engineered defensive wrappers or bloated code for contrived "all-life" edge cases.
- **Unit Test Recommendations & Code Blocks (In Artifact Only)**:
  - If existing tests are incomplete, superficial, or low-quality: provide a complete, copy-paste ready unit test suite covering all branches, edge cases, and lifecycles **strictly within the report artifact**.
  - If no tests exist: author the complete recommended unit test suite inside the artifact.
- **Strict Prohibition of Proactive Workspace Modifications**:
  - **STRICTLY FORBIDDEN to modify, edit, or refactor the codebase or test files proactively during code review**.
  - All refactorings and code fixes remain purely advisory proposals until the developer explicitly instructs to apply them (e.g., "исправь", "примени рекомендации", "исправь пункт 2"). Fix and edit strictly what the developer tells you to fix!



