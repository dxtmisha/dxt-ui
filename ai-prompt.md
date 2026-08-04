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
Core Purpose: The library is a comprehensive UI component toolkit and architectural framework for Vue, providing reactive layout primitives, accessible interactive controls, and advanced form validation.

Key Capabilities & Groupings:
- Form & Input Controls: Encapsulates native and composite input elements, real-time validation checks, regular expression pattern verification, formatted numbers, social media fields, masked inputs, checkboxes, radios, switches, and sliders.
- Layout & Navigation Controls: Manages layout areas, multi-column navigation rails, tabs, breadcrumbs, expandable accordions, structured block wrappers, dividers, and horizontal scroll containers.
- Overlays & Popups: Controls dialogs, action sheets, modals, dropdown menus, country/language selectors, context menus, tooltips, and floating notifications via snackbars.
- Data Display & Tables: Handles sortable lists, filterable search results, paginated record sets, and flexible table components with sticky headers and scroll management.
- Motion & Animation Utilities: Orchestrates transform animations, axis motions, FLIP layout transitions, sticky positioning, headroom scroll tracking, and gesture detection.
- Core Utilities & Bindings: Provides ARIA attribute generation, client-side rendering guards, teleportation management, request-isolated translation storage, and a Vite build plugin for automatic component and style imports.

Triggers for Studying ai-types.md: Study ai-types.md whenever implementing custom component constructors, extending abstract design classes, mapping reactive props, configuring ARIA accessibility states, or integrating form validation rules.

Integration Context: This library seamlessly integrates with Vue 3 reactive ecosystems, Vue Router navigation, and Vite build toolchains.

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
This library provides a reactive utility and component abstraction framework for Vue 3 built on top of functional basic utilities, standardizing UI design system architecture, reactive API request orchestration, localized data formatting, and state management. Its core capabilities span five main modules: the API & Network Module (`useApiRef`, `useApiAsyncRef`, `useApiManagementRef`, `useApiRequest`, and HTTP method composables) manages reactive request lifecycle, SSR prefetching, error contracts, response validation, and list mutations; the Design & Component Architecture Module (`DesignConstructorAbstract`, `DesignComponents`, `DesignAbstract`, `DesignChanged`) provides abstract base classes for component setup, dynamic rendering, class and style calculation, slot management, and prop change tracking; the Localization & Geo Module (`GeoRef`, `GeoIntlRef`, `GeoUnitRef`, `GeoFlagRef`, `DatetimeRef`, `useTranslateRef`) handles reactive internationalization, language/country metadata, locale-sensitive number and date formatting, unit conversions, and translation keys; the Storage & State Module (`useStorageRef`, `useCookieRef`, `useSessionRef`, `useBroadcastValueRef`, `useQueryRef`, `useHashRef`, `executeUse`) binds local/session storage, cookies, cross-tab communication, URL state, and singletons to Vue reactive references; and the DOM, Search & Navigation Module (`useLazyRef`, `RouterItemRef`, `useRouterList`, `useSearchRef`, `useMeta`, `EventRef`) provides lazy visibility tracking, router integration, search indexing, DOM event listeners, and reactive meta tag management. AI assistant study of ai-types.md is mandatory when extending design component abstractions like `DesignConstructorAbstract` or `DesignComponents`, typing component properties, modifications, or emits via `ConstrComponentMod`, `ConstrClasses`, `ConstrEmit`, or `ConstrBind`, configuring API management types including `ApiManagementGet`, `ApiManagementRequest`, or `ApiManagementSearch`, handling reactive input wrappers typed with `RefOrNormal` or `RefOrNormalOrFunction`, or structuring dataset records using `ListListInput`, `ListDataItem`, and `ListSelectedList`. The library seamlessly integrates with Vue 3, vue-router, and @dxtmisha/functional-basic to form a cohesive reactive application infrastructure.
## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/functional/ai-prompts/api-reference.md': Scope-isolated singleton factories and reactive REST API management
- 'node_modules/@dxtmisha/functional/ai-prompts/localization-seo.md': Geographic context, i18n formatting, translation primitives, document metadata, and scrollbar utilities
- 'node_modules/@dxtmisha/functional/ai-prompts/reactivity-lists.md': Async reactivity composables, list data models, search filters, and DOM observers
- 'node_modules/@dxtmisha/functional/ai-prompts/storage-state.md': Composables for reactive browser storage, session, cookies, cross-tab broadcasting, and URL hash state

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
This library is an isomorphic utility framework designed for full-stack JavaScript and TypeScript applications, providing unified abstractions for API data fetching, SSR hydration, state persistence, internationalization, DOM event management, and SEO metadata. The API and Network module manages HTTP requests via Fetch with automated retries, hook-based request preparation, response caching, SSR client hydration, error storage matching, and mock response emulation. The Storage module delivers cross-environment persistence across browser cookies, local or session storage, and request-isolated server rendering contexts. The Localization and Formatting module handles locale detection, phone number masking, localized unit conversions, translation retrieval, and date, number, or plural formatting using native Intl APIs. The DOM, Events, and Navigation module offers memory-safe event listening with automatic DOM removal checks, reactive URL query and hash state tracking, inter-tab broadcast messaging, global loading state coordination, and meta tag management for OpenGraph and Twitter cards. The Search and Utilities module facilitates in-memory multi-column searching with match highlighting, centralized error logging, resumable timers, and type-safe array or object transformations. Studying type definitions in ai-types.md is mandatory when constructing strongly typed API fetch parameters, handling custom response wrappers, defining error storage criteria, configuring complex list formatters, or supplying generic type arguments to search, storage, and event handlers. The library connects as a foundational utility layer bridging client-side UI frameworks with server-side rendering environments and REST backend endpoints.
## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/functional-basic/ai-prompts/api-reference.md': HTTP client, caching, storage management, geolocation, localization, DOM events, and general utilities
- 'node_modules/@dxtmisha/functional-basic/ai-prompts/coding-standards.md': Class structure, naming and typing standards, SSR safety, and primitive helper functions

## Package Core Information
Framework-agnostic utility library. **Vue developers MUST search `@dxtmisha/functional` first**; use this ONLY if no reactive/Vue-specific analog exists.

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/functional-basic/ai-types.md'

---

# @dxtmisha/nitro-basic
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/nitro-basic'.

## Package Description & Module Overview
Provides server-side rendering (SSR) lifecycle orchestration, hydration handling, request-scoped context management, and environment bootstrapping utilities for Vue 3 applications executing within Nitropack (Nitro) server runtimes. Modules include: SSR App & Lifecycle Factories (`uiCreateApp`, `uiCreateServerApp`, `uiCreateClientApp`), SSR Routing Handlers (`uiCreateSsrRouter`), Context & Request Utilities (`useHeaders`, `getContextValue`, `getRequestHref`, `getRequestOrigin`, `initContext`), Storage & Cookie Injections (`initCookieStorage`, `initServerStorage`), and Deterministic ID Utilities (`uiBootstrapServer`, `uiBootstrapClient`, `uiIdServer`, `uiIdClient`). Consulting ai-types.md is mandatory when configuring bootstrap parameters, accessing context tokens, or writing custom Nitro plugins. Integrates Nitropack backends with Vue 3 frontend architecture.
## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/nitro-basic/ai-prompts/app-bootstrap.md': App instantiation, server/client entry points, hydration bootstrapping, and unique ID generation
- 'node_modules/@dxtmisha/nitro-basic/ai-prompts/request-context.md': Request metadata, HTTP headers, SSR server storage, and cookie initialization

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