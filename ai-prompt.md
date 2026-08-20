# System Role: AI Coding Assistant & Project Analyzer
Consolidated documentation, architectural guidelines, and mandatory rules for the project.

---

## Global Code Implementation Rules
### Global Development Principles (AI Code Promise)

Strictly follow these rules for flawless dxt-ui code:

0. **Mandatory Deep Study (CHRONOLOGICAL GUARD)**:
   - **Step 1**: Read/create local `ai-memory.md` strictly in the current package root (e.g., `packages/constructor/`). Using repository root `ai-memory.md` for package files is FORBIDDEN.
   - **Step 2**: Read root `ai-prompt.md` and study descriptions of all mentioned libraries.
   - **Step 3**: Study linked `ai-types.md` and `ai-developer.md` BEFORE proposing plans, inspecting directory structures, or writing code, ONLY if you think that library may be relevant/useful for the current task. If a package is in `node_modules/` but exists locally (e.g., `packages/`), resolve and study the local source instead.
   - Fully read source file contents before modifying them (superficial scans without reading context are forbidden when modifying existing code). Always check existing infrastructure before writing custom logic.

1. **"Copy-Paste Ready"**: Generate complete, runnable files with correct imports. No placeholders (e.g., `// rest of code`).
2. **Zero Hallucinations**: Strictly use `package.json` dependencies. No invented APIs. Ask if unsure.
3. **Uncompromising TS**: No `any` (use `unknown` or generics). Interfaces for all I/O. `as const`, `readonly`, enums. Use `@ts-expect-error` with comments, never `@ts-ignore`.
4. **Professional Documentation (TSDoc)**: Document all exported entities (purpose, params, returns). Use [wikiLanguage] by default unless the project defines its own documentation standard. Include examples for complex logic.
5. **Architectural Consistency**: Respect project structure. Reuse existing infrastructure (always re-study this file before writing custom code). Do not modify global/base UI styles unless explicitly requested.
6. **Strict Adherence & Optimization (STRICT PROHIBITION OF UNSOLICITED ACTIONS)**: Do STRICTLY and ONLY what is requested in the prompt. Making unsolicited changes, arbitrary refactoring, or modifying unrelated files without explicit instructions is STRICTLY FORBIDDEN. Follow instructions precisely without guessing, proposing technical optimizations only within the approved scope.
7. **AI Workspace Memory (`ai-memory.md`)**: Actively APPLY its rules (highest priority). Update local `ai-memory.md` **ONLY** upon explicit developer command (e.g., "remember", "save to memory") or for critical architectural rules/fixes. **STRICTLY FORBIDDEN** to overwrite or delete existing file contents: you MUST **ONLY append** new directives to the end of the file. Do NOT add routine edits indiscriminately, change logs, or absolute paths (use relative only). Keep it focused strictly on critical architectural constraints and explicit developer instructions.
8. **Package Type Reference (`ai-types.md`)**:
    - **Purpose & Content**: An AI-optimized complete technical reference of a package containing all public TypeScript declarations (classes, methods, functions, types, interfaces, enums, constants) with concise JSDoc and search tags (`@keywords`).
    - **How to Work (Search Before Full Scan)**: Due to the large size of `ai-types.md` files (thousands of lines), do **NOT** read or scan the entire file line-by-line upfront. **First, use text search** (by keywords, `@keywords`, function/class names) to locate required helpers, types, and signatures quickly to save context tokens. Reading the entire file is only needed when performing deep architectural analysis of the whole package.
    - **Code Reuse**: Before writing custom utility logic or types, ALWAYS check `ai-types.md` of relevant packages to discover and reuse existing infrastructure, classes, and helper functions (DRY).

---

## Vue Component Implementation Rules
### Vue Component Implementation Rules (Vue.js Style Guide)

- **Script Setup**: Use strictly `<script setup lang="ts">`.
- **Naming**: Component names must be multi-word, match their project path, and use PascalCase.
- **CSS**: The root CSS class name of the component must match its name (in kebab-case).
- **Typing**: Mandatory interfaces for Props (`defineProps<{...}>()`) and Emits (`defineEmits<{...}>()`).
- **Lists (v-for)**: Always use a unique `:key`. Avoid using the array index as a key.
- **Directives**: Never use `v-if` on the same element as `v-for`.
- **Reactivity**: Use `ref` for data. Calculate complex logic via `computed`.
- **Logic**: Extract only complex logic into Composables. Simple logic or calling existing hooks (even multiple) does not need to be extracted into a separate composable.
- **Templates**: Cleanest possible HTML. No function calls, calculations, or inline styles. If complex logic is needed, split into sub-components.
- **Props**: One-way data flow. Never mutate incoming props.
- **Events**: Event names must be strictly in kebab-case.
- **A11y**: Use semantic HTML and ARIA attributes.
- **Atomicity**: Components should be minimal and perform only one function. Avoid universal "Swiss army knife" components.
- **UI Styles**: Modifying the styles of ready-made UI components in the library is strictly forbidden. This is a taboo.
- **Purity**: Write declaratively, avoid "fluff," and save tokens.

---

# @dxtmisha/constructor
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/constructor'.

## Package Core Information
Auxiliary base library for UI components and typings. **DO NOT import directly in code**; use ready-made design system components (e.g., D1).

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/constructor/ai-types.md'

## Developer Rules (Must Read Before Modifying Code)
'node_modules/@dxtmisha/constructor/ai-developer.md'

---

# @dxtmisha/d1
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/d1'.

## Component Visual References (Screenshots)
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-6_1.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-6_2.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-6_3.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-6_4.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-6_5.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-6_6.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-code.html'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-styles.css'

---

# @dxtmisha/demo-mcp
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/demo-mcp'.

## Package Description & Module Overview
This package provides a Model Context Protocol (MCP) server integration packed with pre-configured demonstration tools and documentation resources for the dxt-ui ecosystem.

An AI assistant must study ai-types.md whenever it needs to understand the expected data structures, arguments, and return types for the demo MCP tools—such as the calculator, echo utility, system info provider, and dxt-ui component registry queries—to ensure correct schema validation and type safety.

Key Capabilities:
- Arithmetic calculations
- Message echoing
- System information
- Package discovery
- Resource management

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/demo-mcp/ai-types.md'

---

# @dxtmisha/figma
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/figma'.

## Package Core Information
Figma plugin UI (frontend) communication library. Interacts with the backend (`figma-code`) for messaging, frames, styles, and storage requests.

Key elements:
- `FigmaUiMessenger`: UI messaging singleton.
- `fetch...`: Async wrappers for retrieving Figma data (e.g., `fetchFramesSelected`).
- `FigmaPostCode`: Security token for message verification.

Use only in the Figma plugin UI (frontend).

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/figma/ai-types.md'

---

# @dxtmisha/figma-code
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/figma-code'.

## Package Core Information
Figma plugin main thread (backend) library. Works with `@dxtmisha/figma` to handle UI requests, Figma API operations, node manipulation, and storage.

Key elements:
- `FigmaPluginMessenger`: Backend messaging singleton.
- `FigmaFrame`, `FigmaItem`: Figma node wrappers.
- `FigmaStorage`: Persistent storage management.
- `setup...`: Standard UI request listeners (e.g., `setupFrameSelection`).

Use only in the Figma main process (backend).

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/figma-code/ai-types.md'

---

# @dxtmisha/figma-ref
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/figma-ref'.

## Package Core Information
# @dxtmisha/figma-ref
Vue 3 reactive composables for Figma plugin UI state synchronization (`useFigmaFrameSelection`, `useFigmaStorage`, `useFigmaUiFrames`). See `ai-types.md` for full signatures.

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/figma-ref/ai-types.md'

---

# @dxtmisha/functional
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/functional'.

## Package Core Information
# @dxtmisha/functional Reference

Vue 3 reactive utilities built on `@dxtmisha/functional-basic`. See `ai-types.md` for full signatures.

## Core Architectural Rules & Strategies
- **Priority**: Always use `@dxtmisha/functional` reactive composables instead of low-level `@dxtmisha/functional-basic` primitives in Vue 3 applications.
- **API & State Singletons**: **NEVER** call `useApi*` / `executeUse*` hooks directly in Vue components (`<script setup>`). Wrap them in `executeUseGlobal` (startup), `executeUseLocal` (lazy, session scope), or `executeUseProvide` (scoped tree) inside external service files. Components only import and call the resulting hook.
- **Purity & Atomicity**: Keep Vue components minimal. Extract all reactive state management, network orchestration, and side effects into external composables.
- **Reusable Business Logic (`executeUse*`)**: Any complex business logic or state logic with any potential for reuse MUST be extracted into external service composables wrapped with `executeUse*` (`executeUseGlobal`, `executeUseLocal`, or `executeUseProvide`).

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/functional/ai-types.md'

---

# @dxtmisha/functional-basic
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/functional-basic'.

## Package Core Information
Framework-agnostic utility library. **Vue developers MUST search `@dxtmisha/functional` first**; use this ONLY if no reactive/Vue-specific analog exists.

## Coding Standards & Conventions

- **Class Structure**: Properties/Variables (`public`->`protected`->`private`) -> Constructor -> Public Methods -> Protected Methods -> Private Methods. Within each method group, follow order: 1) `get` / `set` (getters/setters), 2) `is...` / `has...`, 3) `get...` / `set...`, 4) `add...` / `remove...`, 5) `update...` / `reset...`, 6) remaining methods. Within each subgroup, methods are grouped semantically by logical pairs and rules (e.g., `min` / `max`, `width` / `height`, `x` / `y` / `z`), and remaining methods are sorted alphabetically.
- **Style/Types**: `PascalCase` classes, `camelCase` methods/props, `UPPER_SNAKE_CASE` constants. No `any` (use `unknown`/generics). Explicit return types for ALL methods. Export all interfaces. Type files: `*Types.ts`. Use `@effect/schema` for schemas.
- **SSR Safety**: Isomorphic code. Do NOT store request state in globals. Use `isDomRuntime()` before `window`/`document`. Use `ServerStorage.get('key', () => new Class())` for request-isolated singletons.
- **Utility & Primitive Functions**: ALWAYS use primitive helper functions from this package (e.g. `isFunction`, `executeFunction`, `isFilled`, `isObject`, `isString`, `isArray`, etc.) instead of writing custom inline checks or conditions.

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/functional-basic/ai-types.md'

---

## High-Priority Directives (Overrides Base Rules)
### dxt-ui Project Overview for AI

**Core of the Project:** A modular UI library and design system constructor on Vue 3. The project is focused on automation (Figma, AI-generated documentation) and high typing coverage.

#### Architecture & Technologies:
- **Monorepo**: Managed via npm workspaces. The main parts are located in `packages/*`.
- **Stack**: Vue 3 (`<script setup lang="ts">`), TypeScript, Vite, SCSS.
- **Key Packages**:
    - `ui`, `d1`: Component libraries.
    - `functional`, `functional-basic`: Core logic and API.
    - `figma*`: Packages for Figma synchronization (styles, code, translations).
    - `scripts`: Automation and prompt-generation scripts for AI.
    - `wiki`: MDX-format documentation.

#### Development Rules for AI:
1.  **Purity & Atomicity**: Components must be minimal. All business logic must be extracted to **Composables**.
2.  **Typing**: Strict TypeScript, no `any`. Mandatory usage of interfaces for Props and Emits.
3.  **Documentation**: Use JSDoc/TSDoc formatted strictly according to the guidelines in [jdoc.md](ai-prompts/jdoc.md). All comments must follow a mandatory bilingual standard (English and Russian):
    - **Classes/Functions/Methods**: Detailed multiline descriptions (English on top, Russian on bottom). Use `@param` and `@returns` with bilingual descriptions separated by ` / `.
    - **Interfaces, Types, Enums, and Properties**: Compact single line (or double line if long) with a forward slash separator: `/** English / Russian */`.
4.  **Styles**: Use SCSS. Modifying the base library styles is strictly prohibited unless explicitly requested.
5.  **Dependencies**: Use only the packages specified in `package.json`. Zero tolerance for hallucinations.
6.  **Strict Adherence**: Do strictly and only what is requested in the user's prompt. Never make unsolicited changes, refactorings, cleanups, or modifications to other files unless explicitly instructed by the user.
7.  **Naming**: No abbreviations in variable/function names (`el`, `val`, `temp`, etc. are forbidden). Use full, descriptive names.

---

## Mandatory Final Self-Audit (CRITICAL GUARD & STRICT COMPLIANCE)

🔴 **STOP! BEFORE DECLARING WORK COMPLETE OR ENDING YOUR TURN, YOU MUST AUDIT ALL CODE!** 🔴

1. **Mandatory Full Re-Study**: Inspect EVERY single line of code created or modified in this task.
2. **Rule-by-Rule Compliance Check**: Cross-reference all code changes against ALL architectural conventions, coding standards, JSDoc/TSDoc guidelines, and package rules defined in `ai-prompt.md`.
3. **Zero Ignored Rules**: Ensure NO project rule, typing constraint, or code structure guideline was bypassed, forgotten, or ignored.
4. **Self-Correction**: If any discrepancy, missing typing, bad JSDoc formatting, or rule violation is found during this audit, fix it IMMEDIATELY before concluding your turn.