# System Role: AI Coding Assistant & Project Analyzer
Consolidated documentation, architectural guidelines, and mandatory rules for the project.

## Core Rules & Directives
- **Zero Hallucinations**: Rely strictly on existing APIs and dependencies declared in package.json.
- **Deep Context Study**: Analyze provided prompt documents and type definitions before writing code.
- **Explicit Unknowns**: If information is missing or unclear, state it explicitly instead of guessing.
- **Strict Compliance**: Follow all architectural conventions, design system rules, and coding standards.

---

## Global Code Implementation Rules
### Global Development Principles (AI Code Promise)

Strictly follow these rules for flawless dxt-ui code:

0. **Mandatory Deep Study (CHRONOLOGICAL GUARD)**:
   - **Step 1**: Read/create local `ai-memory.md` strictly in the current package root (e.g., `packages/constructor/`). Using repository root `ai-memory.md` for package files is FORBIDDEN.
   - **Step 2**: Read root `ai-prompt.md` and study descriptions of all mentioned libraries.
   - **Step 3**: Read all linked `ai-types.md` and `ai-developer.md` BEFORE proposing plans, inspecting directory structures, or writing code. If a package is in `node_modules/` but exists locally (e.g., `packages/`), resolve and study the local source instead.
   - Fully read file contents before modifying them. Superficial scans (text search only) are strictly forbidden. Always check existing infrastructure before writing custom logic.

1. **"Copy-Paste Ready"**: Generate complete, runnable files with correct imports. No placeholders (e.g., `// rest of code`).
2. **Zero Hallucinations**: Strictly use `package.json` dependencies. No invented APIs. Ask if unsure.
3. **Clean Code (DRY/KISS/SOLID)**: Declarative style. Single responsibility (1 task = 1 function). No abbreviations (`el`, `val`, etc. are forbidden). Optimized and legible.
4. **Uncompromising TS**: No `any` (use `unknown` or generics). Interfaces for all I/O. `as const`, `readonly`, enums. Use `@ts-expect-error` with comments, never `@ts-ignore`.
5. **Professional Documentation (TSDoc)**: Document all exported entities (purpose, params, returns) in [wikiLanguage]. Include examples for complex logic.
6. **Architectural Consistency**: Respect project structure. Reuse existing infrastructure (always check `ai-types.md` first). Do not modify global/base UI styles unless explicitly requested.
7. **Security & Performance**: Error-proof code (`?.`, `??`, guard clauses). Use explicit `try-catch` for async. Never swallow errors. Avoid heavy ops in loops/reactivity.
8. **Aesthetics & Conciseness**: Group logically. Save tokens by avoiding redundant comments if code is self-explanatory.
9. **Strict Adherence & Optimization**: Follow instructions precisely without guessing. Propose relevant technical optimizations while strictly adhering to plans.
10. **AI Workspace Memory (`ai-memory.md`)**: Actively APPLY its rules (highest priority). Update it on developer feedback. **CRITICAL**: Any remark from the developer that has value for the future (e.g., code style, dos and don'ts) MUST be saved here. If the developer explicitly asks to save or remember something, you MUST save it. Do NOT store change logs or absolute paths (use relative). Keep it focused strictly on architectural constraints and developer preferences.
11. **Mandatory Full-File Self-Audit**: When creating new entities, you MUST audit the ENTIRE file (not just modified parts) to ensure no logic duplication (DRY) and full compliance with project rules. *Exception: minor bug fixes to existing code do not require a full audit.*

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
- **Logic**: ALL logic must be moved to Composables. The component should only contain the composable call and the template.
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

## Package Description & Module Overview
A lightweight Vue UI component library providing building blocks, layout primitives, accessible interactive controls, and styling plugins. It encapsulates functional primitives for forms, navigation, formatting, data management, and overlay states.

Form fields and inputs, selection controls, navigation systems, structural layout primitives, overlay and dialog containers, presentation and formatting utilities, and styling plugins.

Type definitions in ai-types.md must be studied when configuring library component props, managing reactive model bindings, handling ARIA accessibility attributes, or implementing custom component constructors.

Designed for seamless integration into Vue-based application architectures alongside Vite build tooling and routing utilities.

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

## Package Description & Module Overview
This library provides a comprehensive suite of Vue 3 UI components (prefixed with D1) built upon the @dxtmisha/constructor design system. It handles UI rendering, property definition types, build-time integration via uiD1VitePlugin, and media utilities (d1MakeIcons). Triggers for studying ai-types.md include implementing or wrapping D1 components, configuring uiD1VitePlugin, resolving slot/event type definitions, or customizing theme variables via style regex patterns. Integrates with Vue 3 and @dxtmisha/constructor.
## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/d1/ai-prompts/styling-tokens.md': SCSS tokens (sys-), palette mixins (ui.paletteBackgroundColor), and color variable rules
- 'node_modules/@dxtmisha/d1/ai-prompts/responsive-typography.md': Responsive media mixins (ui.mediaMinWidth), typography classes (d1-font.scss), and BEM class structure

## Package Core Information
Vue 3 layout library with pre-registered global `D1...` components. **No imports needed for D1 components and icons.**

## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/d1/ai-prompts/styling-tokens.md': SCSS tokens (`sys-`), palette mixins (`ui.paletteBackgroundColor`), and color variable rules.
- 'node_modules/@dxtmisha/d1/ai-prompts/responsive-typography.md': Responsive media mixins (`ui.mediaMinWidth`), typography classes (`d1-font.scss`), and BEM class structure.

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/d1/ai-types.md'

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

# @dxtmisha/figma
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/figma'.

## Package Description & Module Overview
This library serves as a type-safe inter-process communication bridge and state messaging abstraction layer connecting a Figma plugin main thread sandbox runtime with its web-based iframe user interface context. It facilitates bi-directional asynchronous event dispatching, payload validation, design frame structure retrieval, CSS design token extractions, and key-value storage synchronization across the plugin runtime boundary.

The framework provides core architectural capabilities for event-driven message routing between isolated execution environments. It features a registration pattern for listener callbacks supporting single-execution or persistent handlers, payload type enforcement, and message verification via single-set code validation tokens to ensure origin authenticity. For design file operations, the library offers abstractions to query top-level canvas frame hierarchies, monitor dynamic selection state changes on the canvas, and transfer frame visual representations as binary byte arrays or base64 strings. It provides deep design system extraction features, enabling the transmission of document node trees, mapped child properties, raw text content, and comprehensive CSS style objects indexed by node identifiers. Furthermore, it incorporates asynchronous persistence abstractions that allow reading and writing to both client-scoped and persistent plugin storage structures using key-value pairs and optional entity identifiers.

An AI assistant must study ai-types.md when tasked with constructing or handling custom inter-process messaging events, mapping payload typing schemas, defining or processing design frame node trees and CSS style payload structures, managing storage persistence payloads, implementing single-execution callback abstractions, configuring security verification tokens, or invoking high-level storage and selection transport mechanisms.

In the system stack, this library functions strictly at the inter-process boundary separating the Figma plugin execution context from the browser-rendered user interface layer. It transforms low-level Figma document state, node selections, canvas graphics, design styles, and plugin engine storage into structured, message-driven payloads transmitted over window-level event protocols to drive web-based user interface components.

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

## Package Description & Module Overview
This library is a structured TypeScript abstraction layer for Figma Plugin backend development, specifically designed to automate node manipulation, data persistence, and bidirectional messaging. Its core purpose is to provide high-level wrappers around the native Figma API for node traversal (FigmaItem), frame-specific metadata extraction (FigmaFrame), and persistent state management using both figma.clientStorage and node-level PluginData with built-in caching and aging logic. AI coding assistants should study this library when implementing features for automated CSS/style extraction, programmatic selection management, screenshot generation, or text content processing for translation and key-value mapping. The integration context bridges the Figma backend to the UI via FigmaPluginMessenger and includes specialized modules for AI-driven text analysis, relying on a shared type system for Figma nodes and message payloads.

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

## Package Description & Module Overview
This library provides reactive Vue 3 composables for synchronizing state, client storage, frame selections, and visual frame styles between Vue applications and Figma plugin environments. It abstracts asynchronous messaging with Figma into reactive refs and computed properties with loading states. Storage modules include composables for client storage and general storage that automatically persist local reactive modifications back to Figma storage. Frame and selection modules provide reactive lists for top-level frames, active frame selections, and UI selected frame IDs, alongside utilities to toggle selection states or update frame selections. Style management modules observe frame styles and dispatch style update requests. Studying ai-types.md is mandatory when working with strict frame list structures like UiFigmaFramesList, typed style payloads like UiFigmaFrameStylesMessengerAttributes and UiFigmaFrameStylesMessengerResponse, generic storage type parameters, or verifying Vue computed ref return contracts. The library connects Vue 3 reactive user interfaces directly with the underlying dxtmisha figma package.

## Package Core Information
# @dxtmisha/figma-ref
Vue 3 reactive composables for Figma plugin UI state synchronization (`useFigmaFrameSelection`, `useFigmaStorage`, `useFigmaUiFrames`). See `ai-types.md` for full signatures.

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/figma-ref/ai-types.md'

---

# @dxtmisha/functional
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/functional'.

## Package Description & Module Overview
This library is a reactive utility and component architecture framework for Vue 3 that standardizes design system component construction, locale-aware data formatting, browser storage state, and API request lifecycle orchestration. It provides abstract component models for computing styles, classes, slots, and properties, alongside wrappers for reactive state synchronization and dynamic component rendering. Design System Architecture components abstractly encapsulate Vue component structures, automating class and style generation, property change detection, slot bindings, and dynamic component rendering. API and Network Management modules manage asynchronous HTTP request lifecycles, server-side prefetching, CRUD mutations, response contract validation, error handling, and unified client-side search or formatting pipelines. Localization and Formatting utilities deliver reactive interfaces for internationalized formatting of dates, currencies, numbers, measurement units, country flag metadata, and dynamic translation lists. Storage and State controls wrap browser local storage, session storage, cookies, broadcast channels, and URL query or hash parameters into reactive references. List and Search utilities provide reactive controllers for hierarchical list filtering, multi-item selection tracking, focus navigation, and debounced text searches. DOM and Lifecycle controls manage intersection observers for lazy loading, document head metadata, scrollbar dimensions, global loading state tracking, and reactive event listeners. Injection and Singleton utilities support managed lifecycle topologies across application, component-subtree, or closure scopes. Studying ai-types.md is mandatory when implementing custom component constructors extending base design abstract classes, defining request or response validation contracts, configuring complex API management options, typing list data inputs and selection states, setting up functional plugin options, or establishing singleton execution topologies. The library integrates directly with Vue 3 reactivity and SSR runtime paradigms, Vue Router navigation mechanisms, and core functional utility packages.
## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/functional/ai-prompts/api-reference.md': Scope factory initialization, reactive singletons, and REST API management patterns
- 'node_modules/@dxtmisha/functional/ai-prompts/localization-seo.md': Geographic context, internationalization formatting, translation utilities, HTML metadata management, and scrollbar measurement
- 'node_modules/@dxtmisha/functional/ai-prompts/reactivity-lists.md': Async reactivity helpers, list management, search filtering, and DOM event observers
- 'node_modules/@dxtmisha/functional/ai-prompts/storage-state.md': Reactive composables for persistent browser storage, cookies, broadcast messaging, and URL hashes

## Package Core Information
# @dxtmisha/functional Reference

Vue 3 reactive utilities built on `@dxtmisha/functional-basic`. See `ai-types.md` for full signatures.

## Core Architectural Rules & Strategies
- **Priority**: Always use `@dxtmisha/functional` reactive composables instead of low-level `@dxtmisha/functional-basic` primitives in Vue 3 applications.
- **API & State Singletons**: **NEVER** call `useApi*` / `executeUse*` hooks directly in Vue components (`<script setup>`). Wrap them in `executeUseGlobal` (startup), `executeUseLocal` (lazy, session scope), or `executeUseProvide` (scoped tree) inside external service files. Components only import and call the resulting hook.
- **Purity & Atomicity**: Keep Vue components minimal. Extract all reactive state management, network orchestration, and side effects into external composables.

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/functional/ai-types.md'

---

# @dxtmisha/functional-basic
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/functional-basic'.

## Package Description & Module Overview
This library serves as a comprehensive isomorphic runtime toolkit providing core utility primitives for HTTP networking, state persistence, internationalization, metadata management, DOM manipulation, and data transformation across browser and server-side rendering environments.

Its main capabilities are organized into high-level functional groupings: API and network utilities handle HTTP request orchestration, response caching, structured error normalization, retry strategies, and SSR hydration script generation; storage utilities manage cookies, local and session storage, request-isolated server storage, and inter-tab broadcast messaging; internationalization and localization modules process geographic standards, timezone conversions, localized number/date/unit formatting, phone masking, and pluralization rules; DOM and event helpers provide lifecycle-managed event listeners, smooth scrolling, visibility checks, element creation, and global loading indicators; metadata modules provide a unified interface to generate and manage HTML, Open Graph, and Twitter Card tags; and data processing functions handle string transformations, deep copying, template replacement, fuzzy searching with query highlighting, and list sorting.

It is mandatory to study "ai-types.md" when configuring typed API request payloads and hooks, defining custom error center callbacks, constructing complex localized formatter options, implementing schema-driven search or sorting parameters, or working with environment-specific storage contracts.

The library integrates into modern web application stacks by offering framework-agnostic utilities that safely detect browser versus SSR runtimes while supporting seamless client hydration workflows.
## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/functional-basic/ai-prompts/api-reference.md': HTTP client, caching, storage, geolocation, localization, formatting, DOM events, and utility helpers

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

# @dxtmisha/nitro-basic
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/nitro-basic'.

## Package Description & Module Overview
This library provides server-side rendering initialization, application lifecycle management, context isolation, and state hydration for Vue 3 applications running on Nitro. Application Lifecycle and SSR Rendering utilities handle server and client application bootstrapping, rendering Vue apps to HTML strings with interpolated context metadata, client-side mounting, and script hydration generation. Request and Network Context modules handle request header management, base API origin initialization, URL parsing, and request-scoped context tracking using AsyncLocalStorage. State and Storage Isolation utilities configure context-backed cookie handling, server storage injection, and Nitro API caching with configurable cleanup thresholds. Routing and Identifier utilities manage universal Vue Router creation across client WebHistory and server MemoryHistory environments alongside deterministic element ID generation. Studying ai-types.md is mandatory when configuring application bootstrap options, customizing router parameters, typing SSR rendering contexts, modifying Nitro API cache configurations, or referencing context injection keys. The library integrates Vue 3, Vue Router, Nitropack, unctx, and dxtmisha functional utilities to streamline universal server-side rendering and client hydration.
## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/nitro-basic/ai-prompts/app-bootstrap.md': App bootstrapping, client and server entry points, environment initialization, and hydration identity helpers
- 'node_modules/@dxtmisha/nitro-basic/ai-prompts/request-context.md': Server lifecycle initializers, request context metadata, header utilities, and URL helpers

## Package Core Information
Foundation for Nitro & Vue 3 SSR. Used ONLY in server bootstrap/plugins. **Never import directly in Vue SFCs**; use `@dxtmisha/functional` instead.

## Mandatory Rules
- 'node_modules/@dxtmisha/nitro-basic/ai-prompts/app-bootstrap.md': App instantiation (`uiCreateApp`), server/client entries (`uiCreateServerApp`), hydration, and element IDs.
- 'node_modules/@dxtmisha/nitro-basic/ai-prompts/request-context.md': Request headers (`useHeaders`), URLs (`getRequestHref`), and SSR initializers (`initApi`, `initServerStorage`).

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/nitro-basic/ai-types.md'

---

# @dxtmisha/styles
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/styles'.

## Package Description & Module Overview
A foundational SCSS framework and dynamic style generation engine designed for building scalable, multi-theme design systems. Its primary function is to provide a comprehensive set of low-level SCSS mixins, functions, and a sophisticated configuration-driven property generation system. The core architecture centers around dynamic CSS variable management, specifically for color spaces where RGB channels and opacity are decoupled (using --sys-* and --sys-palette-* prefixes) to allow for real-time reactive theme modifications and complex transparency effects. Studying ai-types.md or SCSS definitions is mandatory when: 1. Investigating global CSS variable tokens for colors, dimensions, and typography. 2. Developing or modifying UI components that require RTL (Right-to-Left) support through directional abstractions (dir.scss). 3. Implementing complex layout patterns using semantic mixins for Flexbox orchestration, adaptive spacing, and relative positioning. 4. Understanding the 'Properties' engine (src/styles/properties) which programmatically transforms SCSS maps into atomic utility classes and root-level variable definitions. 5. Managing design system palettes and shade scales where automated accessibility and consistency are required. The library is architected as a modular SCSS-first system, utilizing @use and @forward for clean namespace management. It functions as the visual source of truth for all @dxtmisha packages.
## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/styles/ai-prompts/colors-layout.md': SCSS imports, color/palette mixins, flexbox, padding, margin, and border radius
- 'node_modules/@dxtmisha/styles/ai-prompts/media-typography.md': Media and container query mixins, typography styles, BEM naming, and architectural rules

## Package Core Information
# @dxtmisha/styles Reference

System-wide SCSS styling guidelines and mixin structure.

## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/styles/ai-prompts/colors-layout.md': SCSS imports, color/palette mixins (`backgroundColor`, `paletteBackgroundColor`), flexbox, padding, margin, and border radius.
- 'node_modules/@dxtmisha/styles/ai-prompts/media-typography.md': Media & container query mixins (`mediaMinWidth`), typography styles (`font`), BEM naming, and architectural rules.

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

Generate code in a way that allows it to be copied and run immediately (**Copy-Paste Ready**).