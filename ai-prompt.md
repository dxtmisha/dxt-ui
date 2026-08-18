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

## Package Description & Module Overview
This package is a comprehensive TypeScript UI component library and framework utility suite designed for building robust, accessible, and reactive Vue applications. It should be studied to understand component architecture, state management patterns, and accessibility primitives used across the design system.

Form Controls
Aria Management
State Synchronization
List Navigation
Modal Management
Localization Strings
Sticky Positioning
Sorting And Filtering
## Mandatory Rules
You MUST evaluate whether your task relates to any of the following topics (even if not working directly with this package). If related material is present, you are strictly obligated to read and study the corresponding file before proceeding:
- 'node_modules/@dxtmisha/constructor/ai-resources/colors-and-palettes.md': Defines strict styling standards, rules, and mixins for UI components to enforce theme-adaptive styling and prevent hardcoded color usage. Solves the technical task of maintaining consistent, dynamic color palettes and state opacities across SCSS and Vue files.
- 'node_modules/@dxtmisha/constructor/ai-resources/constructor.md': Строгие архитектурные стандарты, шаблоны проектирования и правила реализации UI-компонентов-конструкторов для пакета dxt-ui. Определяет требования к разделению логики и рендеринга, структуре файлов, управлению зависимостями и использованию токенов дизайна.

## Package Core Information
Auxiliary base library for UI components and typings. **DO NOT import directly in code**; use ready-made design system components (e.g., D1).

## Developer Rules (Must Read Before Modifying Code)
'node_modules/@dxtmisha/constructor/ai-developer.md'

---

# @dxtmisha/d1
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/d1'.

## Package Description & Module Overview
This package provides a comprehensive collection of Vue 3 UI components and design system utilities built on top of constructor primitives for building web applications. Study ai-types.md when implementing or configuring component props, types, and design tokens for any UI element within this design system.

Key Capabilities:
- Form Controls
- Layout Navigation
- Modal Windows
## Mandatory Rules
You MUST evaluate whether your task relates to any of the following topics (even if not working directly with this package). If related material is present, you are strictly obligated to read and study the corresponding file before proceeding:
- 'node_modules/@dxtmisha/d1/ai-resources/background.md': Rules and mixins for configuring background colors, surface opacities, gradients, and backdrop filters in SCSS using the dxtmisha library. Defines best practices for token-aligned, theme-adaptive styling and dynamic palette bindings.
- 'node_modules/@dxtmisha/d1/ai-resources/border.md': This file contains SCSS coding standards, mixins, and rules for implementing borders, outlines, dividers, and dynamic palette borders using the `@dxtmisha/d1` library. It solves technical styling tasks by enforcing explicit property separation, color token handling, and opacity management for component design systems.
- 'node_modules/@dxtmisha/d1/ai-resources/color.md': Defines SCSS standards, rules, and mixins for applying text colors, icon strokes, SVG fills, and dynamic palette theming using system tokens. Solves the technical task of maintaining consistent, theme-reactive styling without hardcoded values across UI components.
- 'node_modules/@dxtmisha/d1/ai-resources/elevation.md': Guidelines and standard system tokens for applying box shadows, backdrop-filter blur effects, and depth elevation in SCSS UI components.
- 'node_modules/@dxtmisha/d1/ai-resources/outline.md': This file contains SCSS styling standards and mixins for implementing accessible focus rings, outline opacity, and dynamic palette outlines. It guides AI agents on how to correctly apply non-shorthand outline properties and theme bindings for interactive UI components.
- 'node_modules/@dxtmisha/d1/ai-resources/responsive-typography.md': Defines SCSS styling standards, including BEM class naming conventions, forbidden direct media queries in favor of library mixins, and typography class usage rules for UI components.
- 'node_modules/@dxtmisha/d1/ai-resources/rounded.md': Defines standards, tokens, and rules for applying corner radii, pill shapes, and adaptive height-relative border-radius scaling in SCSS for the @dxtmisha/d1 design system.
- 'node_modules/@dxtmisha/d1/ai-resources/size.md': This file contains standards, rules, and mixins for managing component dimensions, spacing tokens, and dynamic viewport units in SCSS. It helps AI agents generate consistent sizing, width, and height rules for UI components.
- 'node_modules/@dxtmisha/d1/ai-resources/spacing.md': This document contains standards and mixins for implementing padding, margin, and gaps in SCSS with full bidirectional RTL and LTR support. It provides an AI coding assistant with rules for using logical properties and standard 4px-based spacing tokens to build adaptable UI components.
- 'node_modules/@dxtmisha/d1/ai-resources/styling-tokens.md': Architectural reference for design tokens, properties.json configuration, token resolution, and SCSS integration in the @dxtmisha/d1 component library. Provides exact standards for token hierarchies, semantic palettes, typography presets, and component styling rules to assist AI coding agents.
- 'node_modules/@dxtmisha/d1/ai-resources/typography.md': This file contains standards and mixins for SCSS typography, text sizing, and multi-line clamping using the @dxtmisha/d1 library. It solves technical tasks related to consistent font styling, bidirectional alignment, and text truncation across web interfaces.

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
This package is a comprehensive Vue-based utility library designed to simplify state management, reactive routing, internationalization, and API communication. Developers should study this package to leverage its pre-built reactive wrappers, robust component constructors, and seamless API integration tools for modern frontend applications.

Key Capabilities:
- API Integration
- Reactive Storage
- Internationalization Formatting
- Component Management
- Route Navigation
## Mandatory Rules
You MUST evaluate whether your task relates to any of the following topics (even if not working directly with this package). If related material is present, you are strictly obligated to read and study the corresponding file before proceeding:
- 'node_modules/@dxtmisha/functional/ai-resources/api-reference.md': Defines usage patterns and guidelines for REST API management and scope-isolated singleton factories within the @dxtmisha/functional library. It provides technical instructions for initializing global, local, and provided singletons alongside reactive CRUD operations.
- 'node_modules/@dxtmisha/functional/ai-resources/localization-seo.md': Provides utilities for locale-aware formatting, translation primitives, geographic context resolution, and reactive HTML document metadata handling. Solves internationalization and SEO management tasks in web applications using functional components.
- 'node_modules/@dxtmisha/functional/ai-resources/reactivity-lists.md': This file provides advanced async reactivity composables, list data models, search filters, and DOM observers for managing application state and UI lifecycle. It solves technical tasks related to asynchronous computed properties, optimized multi-field searching, and safe event listener management in frontend codebases.
- 'node_modules/@dxtmisha/functional/ai-resources/storage-state.md': Provides composable Vue-like reactive wrappers for persistent and synchronized browser state management, including localStorage, sessionStorage, cookies, broadcast channels, and URL hash fragments. Solves technical tasks related to cross-tab communication, SSR-safe cookie handling, and state persistence for web applications.

## Package Core Information
# @dxtmisha/functional Reference

Vue 3 reactive utilities built on `@dxtmisha/functional-basic`. See `ai-types.md` for full signatures.

## Core Architectural Rules & Strategies
- **Priority**: Always use `@dxtmisha/functional` reactive composables instead of low-level `@dxtmisha/functional-basic` primitives in Vue 3 applications.
- **API & State Singletons**: **NEVER** call `useApi*` / `executeUse*` hooks directly in Vue components (`<script setup>`). Wrap them in `executeUseGlobal` (startup), `executeUseLocal` (lazy, session scope), or `executeUseProvide` (scoped tree) inside external service files. Components only import and call the resulting hook.
- **Purity & Atomicity**: Keep Vue components minimal. Extract all reactive state management, network orchestration, and side effects into external composables.
- **Reusable Business Logic (`executeUse*`)**: Any complex business logic or state logic with any potential for reuse MUST be extracted into external service composables wrapped with `executeUse*` (`executeUseGlobal`, `executeUseLocal`, or `executeUseProvide`).

---

# @dxtmisha/functional-basic
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/functional-basic'.

## Package Description & Module Overview
This package provides robust utility modules for HTTP API requests, caching, localization, state management, and DOM manipulation.

Study "ai-types.md" when implementing or configuring features related to API clients, request/response caching, internationalization (Geo/Intl), translations, meta tags management, search filtering, or URL state synchronization.

API Integration
Error Handling
Cache Management
Cookie Storage
Geographic Localization
Internationalization
Data Formatting
Meta Tags
State Management
Search Matching
## Mandatory Rules
You MUST evaluate whether your task relates to any of the following topics (even if not working directly with this package). If related material is present, you are strictly obligated to read and study the corresponding file before proceeding:
- 'node_modules/@dxtmisha/functional-basic/ai-resources/api-reference.md': Provides code examples and usage patterns for the @dxtmisha/functional-basic library modules including HTTP client, storage, geolocation, and DOM helpers. It helps AI agents understand how to correctly integrate and utilize utility functions for frontend and backend tasks.

## Package Core Information
Framework-agnostic utility library. **Vue developers MUST search `@dxtmisha/functional` first**; use this ONLY if no reactive/Vue-specific analog exists.

## Coding Standards & Conventions

- **Class Structure**: Properties/Variables (`public`->`protected`->`private`) -> Constructor -> Public Methods -> Protected Methods -> Private Methods. Within each method group, follow order: 1) `get` / `set` (getters/setters), 2) `is...` / `has...`, 3) `get...` / `set...`, 4) `add...` / `remove...`, 5) `update...` / `reset...`, 6) remaining methods. Within each subgroup, methods are grouped semantically by logical pairs and rules (e.g., `min` / `max`, `width` / `height`, `x` / `y` / `z`), and remaining methods are sorted alphabetically.
- **Style/Types**: `PascalCase` classes, `camelCase` methods/props, `UPPER_SNAKE_CASE` constants. No `any` (use `unknown`/generics). Explicit return types for ALL methods. Export all interfaces. Type files: `*Types.ts`. Use `@effect/schema` for schemas.
- **SSR Safety**: Isomorphic code. Do NOT store request state in globals. Use `isDomRuntime()` before `window`/`document`. Use `ServerStorage.get('key', () => new Class())` for request-isolated singletons.
- **Utility & Primitive Functions**: ALWAYS use primitive helper functions from this package (e.g. `isFunction`, `executeFunction`, `isFilled`, `isObject`, `isString`, `isArray`, etc.) instead of writing custom inline checks or conditions.

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

---

# @dxtmisha/zip
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/zip'.

## Package Description & Module Overview
Package Description:
This package provides a lightweight utility class for creating, managing, and downloading ZIP archives directly in browser environments.

Triggers for Studying ai-types.md:
An AI assistant must study "ai-types.md" when implementing functionality related to ZIP archive generation, file compression configuration, archive management, or browser-based file downloads.

Key Capabilities:
- Archive Creation
- File Management
- Browser Download

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