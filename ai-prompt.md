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
10. **AI Workspace Memory (`ai-memory.md`)**: Actively APPLY its rules (highest priority). Update local `ai-memory.md` **ONLY** upon explicit developer command (e.g., "remember", "save to memory") or for critical architectural rules/fixes. **STRICTLY FORBIDDEN** to overwrite or delete existing file contents: you MUST **ONLY append** new directives to the end of the file. Do NOT add routine edits indiscriminately, change logs, or absolute paths (use relative only). Keep it focused strictly on critical architectural constraints and explicit developer instructions.
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
A lightweight Vue 3 component logic library providing class-based component constructors, state logic engines, ARIA accessibility controllers, and build-time styling plugins. It encapsulates functional primitives for forms, navigation, formatting, data management, and overlay states independently of visual styling or framework templates.

Key capabilities are organized into core functional modules: Form Fields & Inputs for managing reactive field values, validation rules, input modes, masking, stepper controls, and visibility toggles; Selection Controls for handling single/multiple choice states, item filtering, searching, and sorting; Navigation Primitives for tab indexing, focus trap management, directional arrow key focus, headroom scroll tracking, and anchor scroll interactions; Structural Layout Controls for managing grid, flex, bleed, section, headroom, and sticky positioning; Overlay & Dialog Containers for modal windows, action sheets, snackbars, and teleported elements with SSR compatibility; Motion & Animations for axis transitions, flip animations, sticky movements, and ripple effects; Presentation & Formatting Utilities for formatted numbers, units, badges, avatars, breadcrumbs, skeletons, and loading indicators; and System Infrastructure providing Vite build plugins, component auto-import registrations, and style modification transformers.

Type definitions in ai-types.md must be studied when configuring library component props, managing reactive model bindings, handling ARIA accessibility attributes, extending abstract component includes, or customizing Vite build plugin integrations.

Designed for seamless integration into Vue-based application architectures alongside Vite build tooling, SCSS design systems, and higher-level UI component libraries.

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
- 'node_modules/@dxtmisha/d1/ai-resources/styling-tokens.md': SCSS tokens (sys-), palette mixins (ui.paletteBackgroundColor), and color variable rules
- 'node_modules/@dxtmisha/d1/ai-resources/responsive-typography.md': Responsive media mixins (ui.mediaMinWidth), typography classes (d1-font.scss), and BEM class structure

## Package Core Information
Vue 3 layout library with pre-registered global `D1...` components. **No imports needed for D1 components and icons.**

## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/d1/ai-resources/styling-tokens.md': SCSS tokens (`sys-`), palette mixins (`ui.paletteBackgroundColor`), and color variable rules.
- 'node_modules/@dxtmisha/d1/ai-resources/responsive-typography.md': Responsive media mixins (`ui.mediaMinWidth`), typography classes (`d1-font.scss`), and BEM class structure.

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
# @dxtmisha/functional Reference

A reactive utility and component architecture library for Vue 3 providing high-level abstract base classes, state management composables, and localized formatting helpers.

## Key Capabilities & Groupings
- **API & Network**: Reactive composables for asynchronous HTTP requests, mutation workflows, SSR prefetching, response contract validation, error mappings, and list orchestration.
- **Storage & State**: Persistent storage composables synchronizing state with cookies, web storage, URL query/hash parameters, and cross-tab messaging.
- **Localization & Formatting**: Utilities for reactive handling of dates, numbers, currency, unit conversions, country flags, and dynamic translations.
- **List & Search**: Helpers for managing reactive data filtering, selection state, text highlighting, debouncing, and router-bound navigation lists.
- **DOM & System**: DOM visibility tracking, reactive page metadata management, global loading states, scrollbar measurements, and singleton dependency injection.
- **Design Components**: Abstract base classes for standardized component rendering, dynamic class/style computation, prop tracking, and element exposure.

## Triggers for Studying `ai-types.md`
Study `ai-types.md` when implementing abstract component constructors, defining API validation contracts or error schemas, typing complex list structures and search options, configuring singleton execution scopes, or managing reactive Vue prop and subcomponent bindings.

## Integration Context
This library integrates natively into Vue 3 and Vue Router applications through a unified global plugin that configures shared API, routing, localization, and metadata services.

## Mandatory Rules
Read the corresponding file ONLY when working on a task related to (even if not working directly with this package):
- 'node_modules/@dxtmisha/functional/ai-resources/api-reference.md': Reactive singleton scope initialization and REST API management patterns
- 'node_modules/@dxtmisha/functional/ai-resources/localization-seo.md': Geographic context, locale-aware formatting, reactive translations, document metadata, and scrollbar width measurement
- 'node_modules/@dxtmisha/functional/ai-resources/reactivity-lists.md': Async reactivity composables, reactive list models, search filtering, and DOM observer utilities
- 'node_modules/@dxtmisha/functional/ai-resources/storage-state.md': Reactive composables for browser storage, cookies, cross-tab synchronization, and URL hash state

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
# Package Overview & Rules (@dxtmisha/functional-basic)

## Core Purpose
This library provides an isomorphic suite of client- and server-side utilities designed for web application infrastructure, state management, internationalization, and network communication. It serves as a unified foundation for API lifecycle management, SSR hydration, browser storage, and data transformation across JavaScript runtimes.

## Key Capabilities & Groupings
- **API & Network**: Streamlines HTTP fetch requests with configurable defaults, automatic retries with jitter, response caching, error classification, and SSR client hydration script generation.
- **Storage & State Management**: Supplies request-isolated SSR storage contexts, type-safe cookie management, synchronized URL query and hash state, local and session storage with age-based expiration, and cross-tab broadcast messaging.
- **Localization & Geographic Tools**: Provides automated country and language detection, phone number mask matching, metric-to-imperial unit conversion, pluralization, currency formatting, and asynchronous multi-language translation resolution.
- **Search & Data Handling**: Enables multi-column list searching, search match highlighting, fuzzy and exact regular expression matching, multi-field array sorting, and recursive object template replacement.
- **UI, DOM, & Event Helpers**: Delivers DOM element manipulation, ResizeObserver and scroll-sync event listeners, global loading indicators, icon registration, resumable timers, and isomorphic HTML meta tag management for standard SEO, Open Graph, and Twitter Cards.

## Triggers for Studying `ai-types.md`
Studying type definitions in `ai-types.md` is mandatory when typing complex API request or response structures, configuring custom request wrappers, defining criteria for error storage items, specifying search column paths, setting up custom translation dictionaries, or implementing isolated server storage contexts during SSR.

## Integration Context
This package connects with modern web frameworks and SSR environments by wrapping standard Web APIs, fetch interfaces, and DOM listeners with environment-agnostic abstractions and automated client-side hydration hooks.

## Mandatory Rules
Read the corresponding file ONLY when working on a task related to (even if not working directly with this package):
- 'node_modules/@dxtmisha/functional-basic/ai-resources/api-reference.md': HTTP client caching, storage management, geolocation localization, and DOM utility helpers

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

# @dxtmisha/mcp
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/mcp'.

## Package Description & Module Overview
Core Purpose: This library provides a template structure for creating modular, reusable, and type-safe component/utility packages within the design system.

Key Expositions:
- UI Components: Reusable components located under `src/components/`.
- Composables: Stateful composition hooks under `src/composables/`.
- Classes: Logical or utility class abstractions under `src/classes/`.
- Functions: Pure helpers and utility functions under `src/functions/`.
- Types: TypeScript declarations and interfaces under `src/types/`.

Critical Development Rules:
- **Do NOT modify `src/library.ts` directly**: This file is auto-generated and serves as the main entry point exporting all library entities. Manually editing it is strictly forbidden.
- **Run the library generation script**: When creating, renaming, or deleting any new class, component, function, composable, or type, you MUST run the generation command to update the exports automatically:
  ```bash
  npm run library
  ```

---

# @dxtmisha/styles
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/styles'.

## Package Description & Module Overview
A foundational SCSS framework and dynamic style generation engine designed for building scalable, multi-theme design systems. Its primary function is to provide a comprehensive set of low-level SCSS mixins, functions, and a sophisticated configuration-driven property generation system. The core architecture centers around dynamic CSS variable management, specifically for color spaces where RGB channels and opacity are decoupled (using --sys-* and --sys-palette-* prefixes) to allow for real-time reactive theme modifications and complex transparency effects. Studying ai-types.md or SCSS definitions is mandatory when: 1. Investigating global CSS variable tokens for colors, dimensions, and typography. 2. Developing or modifying UI components that require RTL (Right-to-Left) support through directional abstractions (dir.scss). 3. Implementing complex layout patterns using semantic mixins for Flexbox orchestration, adaptive spacing, and relative positioning. 4. Understanding the 'Properties' engine (src/styles/properties) which programmatically transforms SCSS maps into atomic utility classes and root-level variable definitions. 5. Managing design system palettes and shade scales where automated accessibility and consistency are required. The library is architected as a modular SCSS-first system, utilizing @use and @forward for clean namespace management. It functions as the visual source of truth for all @dxtmisha packages.
## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/styles/ai-resources/colors-layout.md': SCSS imports, color/palette mixins, flexbox, padding, margin, and border radius
- 'node_modules/@dxtmisha/styles/ai-resources/media-typography.md': Media and container query mixins, typography styles, BEM naming, and architectural rules

## Package Core Information
# @dxtmisha/styles Reference

System-wide SCSS styling guidelines and mixin structure.

## Mandatory Rules
Read the corresponding file if your task relates to:
- 'node_modules/@dxtmisha/styles/ai-resources/colors-layout.md': SCSS imports, color/palette mixins (`backgroundColor`, `paletteBackgroundColor`), flexbox, padding, margin, and border radius.
- 'node_modules/@dxtmisha/styles/ai-resources/media-typography.md': Media & container query mixins (`mediaMinWidth`), typography styles (`font`), BEM naming, and architectural rules.

---

# @dxtmisha/zip
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/zip'.

## Package Description & Module Overview
This library provides client-side functionality for programmatically constructing, managing, and downloading compressed ZIP archives. It wraps low-level compression logic into an object-oriented interface to manage in-memory file buffers and trigger browser-based file downloads. Main functional groupings include archive lifecycle controls, which handle archive initialization, file staging, file removal, data normalization, and browser download triggers, alongside compression utilities that perform DEFLATE encoding, CRC32 calculations, and string-to-binary conversions. Studying ai-types.md is mandatory when fine-tuning archive compression options, working with direct byte array getters, handling custom data conversion methods, or extending ZIP configuration parameters in TypeScript projects. The library integrates with web runtime environments by leveraging DOM utilities from functional-basic to perform automated anchor-click file saving.

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/zip/ai-types.md'

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

---

## Mandatory Final Self-Audit (CRITICAL GUARD & STRICT COMPLIANCE)

🔴 **STOP! BEFORE DECLARING WORK COMPLETE OR ENDING YOUR TURN, YOU MUST AUDIT ALL CODE!** 🔴

1. **Mandatory Full Re-Study**: Inspect EVERY single line of code created or modified in this task.
2. **Rule-by-Rule Compliance Check**: Cross-reference all code changes against ALL architectural conventions, coding standards, JSDoc/TSDoc guidelines, and package rules defined in `ai-prompt.md`.
3. **Zero Ignored Rules**: Ensure NO project rule, typing constraint, or code structure guideline was bypassed, forgotten, or ignored.
4. **Self-Correction**: If any discrepancy, missing typing, bad JSDoc formatting, or rule violation is found during this audit, fix it IMMEDIATELY before concluding your turn.