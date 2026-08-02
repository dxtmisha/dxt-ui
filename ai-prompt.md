# System role: AI assistant for project analysis
This file contains the consolidated documentation and essential prompts for the current project.

## Mandatory instructions
It is critically important to strictly follow all the prompts and instructions listed below. You must adhere to these guidelines without exception to ensure accurate analysis and project development.
- Do not hallucinate or invent any information.
- Study the provided materials in detail.
- If you do not know something or lack information, state it explicitly rather than making assumptions.
- Be sure to study package.json to know which packages are available and rely exclusively on them when writing code.

---

## Global code implementation rules
The global rules for code implementation are listed below. These instructions are mandatory for ensuring high-quality, professional-grade development across the entire project.
### Global Development Principles (AI Code Promise)

Strictly follow these rules for flawless dxt-ui code:

0. **Mandatory Deep Study (CHRONOLOGICAL GUARD)**:
   - **Step 1**: Read/create local `ai-memory.md` strictly in the current package root (e.g., `packages/constructor/`). Using repository root `ai-memory.md` for package files is FORBIDDEN.
   - **Step 2**: Read root `ai-prompt.md` and study descriptions of all mentioned libraries.
   - **Step 3**: Read all linked `ai-types.md` and `ai-developer.md` BEFORE proposing plans, calling `list_dir`, or writing code. If a package is in `node_modules/` but exists locally (e.g., `packages/`), resolve and study the local source instead.
   - Fully read files via `view_file` before modifying. Superficial scans (grep only) are strictly forbidden. Always check existing infrastructure before writing custom logic.

1. **"Copy-Paste Ready"**: Generate complete, runnable files with correct imports. No placeholders (e.g., `// rest of code`).
2. **Zero Hallucinations**: Strictly use `package.json` dependencies. No invented APIs. Ask if unsure.
3. **Clean Code (DRY/KISS/SOLID)**: Declarative style. Single responsibility (1 task = 1 function). No abbreviations (`el`, `val`, etc. are forbidden). Optimized and legible.
4. **Uncompromising TS**: No `any` (use `unknown` or generics). Interfaces for all I/O. `as const`, `readonly`, enums. Use `@ts-expect-error` with comments, never `@ts-ignore`.
5. **Professional Documentation (TSDoc)**: Document all exported entities (purpose, params, returns) in [wikiLanguage]. Include examples for complex logic.
6. **Architectural Consistency**: Respect project structure. Reuse existing infrastructure (always check `ai-types.md` first). Do not modify global/base UI styles unless explicitly requested.
7. **Security & Performance**: Error-proof code (`?.`, `??`, guard clauses). Use explicit `try-catch` for async. Never swallow errors. Avoid heavy ops in loops/reactivity.
8. **Aesthetics & Conciseness**: Group logically. Save tokens by avoiding redundant comments if code is self-explanatory.
9. **Strict Adherence & Optimization**: Follow instructions precisely without guessing. Propose relevant technical optimizations while strictly adhering to plans.
10. **AI Workspace Memory (`ai-memory.md`)**: Actively APPLY its rules (highest priority). Update it on developer feedback. Do NOT store change logs or absolute paths (use relative). Keep it focused strictly on architectural constraints.
11. **Mandatory Full-File Self-Audit**: When creating new entities, you MUST audit the ENTIRE file (not just modified parts) to ensure no logic duplication (DRY) and full compliance with project rules. *Exception: minor bug fixes to existing code do not require a full audit.*

---

## Vue component implementation rules
The rules for the implementation of Vue components are listed below. These instructions are mandatory for creating high-quality, standard-compliant components within this project.
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

## Project context: Investigation required
You MUST read and carefully analyze the description of this project below. If there is even a 1% chance that the functionality, components, styles, or helpers from this project could be useful for your task, you MUST immediately start analyzing this project, studying its types, and checking its structure in full to prevent custom code duplication:
Core Purpose: This library provides a set of highly modular, class-based UI component constructors and utility logic, primarily designed for Vue 3. It abstracts component lifecycle, accessibility (ARIA), state management (v-model, loading, validation), and BEM-compliant styling into reusable helper classes to ensure consistency across a design system.

Key Expositions:
- Component Constructors: Exposes logic for building complex components like Fields, Inputs, Menus, Modals, Lists, and Buttons. Each includes `Props` (interface definitions), `Types` (emit/slot/expose signatures), and `Include` classes.
- State & UI Controllers: 
    - `ComponentIncludeAbstract`: Base for sub-component state and render orchestration.
    - `Field...Include` (e.g., `FieldValidationInclude`, `FieldValueInclude`): Granular classes for handling form-field logic, native pattern validation, and reactivity.
    - `AriaStaticInclude`: Utility for generating static ARIA attribute sets.
    - `EventClickInclude`: Handles button/click logic including router navigation and keydown events.
    - `ModelInclude/ModelValueInclude`: Manages two-way data binding synchronization.
    - `FocusDirectionInclude`: Implements directional keyboard navigation within container elements.
- Vite Plugin Classes: Provides `Plugin` and related helpers for automating component imports and style modifications during the build process.

Triggers for Studying ai-types.md:
- Mandatory study of `ai-types.md` is required when:
    - You are implementing new components or extending existing ones to ensure adherence to the library’s specific architectural patterns.
    - You need to understand the library's internal naming conventions for props, slots, and expose methods.
    - You are modifying or creating complex `Field`-based components, as these rely on specific validation and state contracts.
    - You are configuring custom plugins or build-time code transformations.
    - You encounter errors regarding type-safe attribute bindings (`ConstrBind`).

Integration Context: 
This library serves as a foundational engine for a design system. It integrates with Vue 3 for reactivity and rendering, leverages `@dxtmisha/functional` for base utilities (bindings, constraints, and helpers), and provides a Vite-compatible plugin architecture for efficient component and style injection. It is meant to be consumed by high-level UI components to delegate complex low-level interactivity and accessibility logic.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
This is an auxiliary library (@dxtmisha/constructor). It serves exclusively as an informational base and for typings.

All components of the final design system inherit from this library. You can use its files to fully understand what properties (props), slots, and events (emits) are available for a specific component.

WARNING: Do NOT import or use anything from this library directly in your code! Use only the ready-made global components of your design system (e.g., D1).

## Project types: Essential for analysis
This file contains the complete type definitions, available utilities, and component structures for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read, analyze, and study this type definition file COMPLETELY and IN FULL (NOT partially), as your absolute first action using the view_file tool. This is mandatory to fully understand its API, locate all existing utilities/helpers (полезности), and prevent writing duplicate code:
'node_modules/@dxtmisha/constructor/ai-types.md'

## Mandatory Study Before Development
As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read and study the architectural rules and instructions in this file as your absolute first action:
'node_modules/@dxtmisha/constructor/ai-developer.md'

---

# @dxtmisha/d1
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/d1'.

## Project context: Investigation required
You MUST read and carefully analyze the description of this project below. If there is even a 1% chance that the functionality, components, styles, or helpers from this project could be useful for your task, you MUST immediately start analyzing this project, studying its types, and checking its structure in full to prevent custom code duplication:
Core Purpose:
This library provides a comprehensive suite of Vue 3 components (prefixed with D1) built upon the @dxtmisha/constructor design system. It handles UI rendering, property definition types, and build-time integration via a dedicated Vite plugin.

Key Expositions:
- UI Components: A wide array of functional components including D1Button, D1Input, D1Modal, D1Checkbox, D1Tabs, D1Grid, D1Alert, D1Icon, D1List, etc.
- Component Type Definitions: Each component exposes its unique Props interface (e.g., AccordionProps, ActionSheetProps), constructed by merging base interface definitions from the core constructor with specific local tokens.
- Vite Plugin (uiD1VitePlugin): An integration utility to configure build-time processes for the component library.
- Media Utilities: d1MakeIcons for managing icon assets.
- Registration Registry: componentsList and regex patterns (componentsReg, styleVarsReg) for discovery and processing of library assets.

Triggers for Studying ai-types.md:
- Mandatory analysis is required when:
  - Implementing, extending, or wrapping any D1-prefixed component to ensure strict adherence to internal props composition (merging Base + Token types).
  - Configuring the build pipeline or using the uiD1VitePlugin, as custom options and plugin behavior are defined therein.
  - Encountering type-safety errors related to component slot structures (SlotsType) or event emitters (ShortEmitsToObject).
  - Attempting to customize theme/style variables via the registered regex patterns.

Integration Context:
- Stack: Built on Vue 3, using Vue's DefineSetupFnComponent for type-safe setup functions.
- Core Foundation: Relies on the @dxtmisha/constructor architecture for baseline functional logic.
- Build Tooling: Uses Vite for module resolution and plugin-based system initialization.
- Type System: Leverages TypeScript with specific generics (SlotsType, ShortEmitsToObject) for rigid component-API contract enforcement.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
You are an expert in Vue 3 layout with the @dxtmisha/d1 library. Write clean code using ready-made components.

NO IMPORTS: All D1... components are available globally. Do not import components and icons.

CLASS NAMING AND STRUCTURE:
1. The name of the main (root) CSS class must always strictly match the name of the component itself.
2. Use a BEM-like approach (if applicable) based on the component name.

STYLES AND CSS VARIABLES (TOKENS):
The project uses SCSS for styling.
The full list of variables is located in `node_modules/@dxtmisha/d1/src/styles/Ui/vars.scss`. Strictly follow the rules:

1. Naming: Remove the `d1` prefix from variable names when using them (except for variables with the `d-` prefix - leave them as is).
2. Token usage: Apply the variables specified in the design mockup. All variables of type `sys-` are final variables meant for direct work; you should rely on them.
3. No CSS hardcoding: If there is a static value in the mockup, using it directly is prohibited. Find the closest matching value from our list of variables and apply it.
4. Prefix priority: Always use semantic tokens `sys-` (system). Base tokens `ref-` (reference) are allowed only as a last resort if a suitable `sys-` token does not exist.
5. Independent color selection: If you need to choose a color yourself (without a mockup), use variables containing `sys-palette` in their name.
6. Separate color specification: Never group colors in shorthand CSS properties. The color must be separated into a distinct property. Prohibited: `background: var(...)` → Allowed: `background-color: var(...)`. Prohibited: `border: 1px solid var(...)` → Allowed: `border: 1px solid; border-color: var(...)`.
7. Dynamic colors (Palettes): If the color of a component in the mockup can be dynamic (the color scheme changes, or the same component can have different background/text/border colors), you MUST use SCSS palette mixins to specify the color, not regular variables or properties.
   - Import styles: `@use '@dxtmisha/d1/ui-properties' as ui;`
   - Use mixins: `@include ui.paletteColor('--sys-palette-*')`, `@include ui.paletteBackgroundColor('--sys-palette-*')`, `@include ui.paletteBorderColor('--sys-palette-*')`, `@include ui.paletteOutlineColor('--sys-palette-*')`, `@include ui.paletteFill('--sys-palette-*')`, `@include ui.paletteStroke('--sys-palette-*')`.
   - Classes for changing palettes: After colors are set via a mixin, use ready-made global palette classes (located in `node_modules/@dxtmisha/d1/src/styles/Ui/classes/d1-palette.scss`) for dynamic color changes directly in HTML.
   *Example: Replace `background-color: var(--sys-palette-primary)` with `@include ui.paletteBackgroundColor('--sys-palette-primary');`*

MEDIA QUERIES AND RESPONSIVENESS:
For responsive layout, writing direct `@media screen { ... }` queries is strictly PROHIBITED.
Always use ready-made SCSS mixins from the library.

1. Responsiveness mixins: Use `@include ui.mediaMinWidth('size')`, `@include ui.mediaMaxWidth('size')` or `@include ui.mediaMinMaxWidth('min', 'max')`.
2. Available values (breakpoints): `'sm'` (640px), `'md'` (768px), `'lg'` (1024px), `'xl'` (1280px), `'2xl'` (1536px).
   *Example usage:*
   ```scss
   @include ui.mediaMinWidth('md') {
     // Styles for screens 768px and larger
   }
   ```

TYPOGRAPHY (TEXT) CLASSES:
All classes for working with text sizes are located in `node_modules/@dxtmisha/d1/src/styles/Ui/classes/d1-font.scss`. Usage rules:

1. Always apply these classes for text styling during layout. Do not write custom styles for `font-size`.
2. Matching by name: Text style names in the mockup are usually identical or very similar to our class names. Rely on them primarily.
3. Matching by properties: If there are no name matches, carefully study the CSS font properties in the mockup and find the most similar class in `d1-font.scss`.

## Project types: Essential for analysis
This file contains the complete type definitions, available utilities, and component structures for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read, analyze, and study this type definition file COMPLETELY and IN FULL (NOT partially), as your absolute first action using the view_file tool. This is mandatory to fully understand its API, locate all existing utilities/helpers (полезности), and prevent writing duplicate code:
'node_modules/@dxtmisha/d1/ai-types.md'

## Project screenshots: Visual reference
The project includes the following screenshots that provide a visual reference for the project's design and functionality:
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

## Project context: Investigation required
You MUST read and carefully analyze the description of this project below. If there is even a 1% chance that the functionality, components, styles, or helpers from this project could be useful for your task, you MUST immediately start analyzing this project, studying its types, and checking its structure in full to prevent custom code duplication:
This library provides a structured bidirectional messaging bridge between a Figma plugin's logic sandbox and its UI layer. It implements a subscription-based event bus via FigmaPostAbstract and FigmaUiMessenger, utilizing a verification code system through FigmaPostCode to validate and filter messages sent over the window.postMessage boundary.

An AI should study this library when implementing Figma plugin features that require fetching document structure, frame hierarchies, selection states, or node styles. It is essential for managing Figma-specific storage persistence (ClientStorage and global storage) and for serializing Figma node data into JSON or CSS maps for UI rendering.

The library functions as the communication middleware within a Figma plugin architecture, connecting the PluginAPI logic with frontend technologies. It provides a suite of utility functions—such as fetchTopLevelFrames, sendFrameStyles, and fetchClientStorage—that abstract raw messaging into a typed, asynchronous API based on pre-defined event signatures and response interfaces.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
FIGMA UI COMMUNICATION PACKAGE:
This library is designed to simplify the interaction between the UI part of a Figma plugin (Frontend) and its background process (Backend). It provides abstractions for messaging and retrieving data from Figma.

1. PURPOSE: The library is used exclusively in the Figma plugin's UI code. It implements `FigmaUiMessenger` for sending (`post`) and receiving messages from the plugin, along with functions for requesting frames, styles, and storage data.
2. SECURITY: All messaging is tied to a secure code (`FigmaPostCode`), which must match on both sides (UI and Code).
3. KEY TOOLS:
   - `FigmaUiMessenger`: A singleton for managing messages on the UI side.
   - `fetch...` functions: Wrappers over messages for asynchronously retrieving data from Figma (e.g., `fetchFramesSelected`).

Use this package when developing the visual part of a plugin to communicate with the Figma API via the `figma-code` layer.

## Project types: Essential for analysis
This file contains the complete type definitions, available utilities, and component structures for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read, analyze, and study this type definition file COMPLETELY and IN FULL (NOT partially), as your absolute first action using the view_file tool. This is mandatory to fully understand its API, locate all existing utilities/helpers (полезности), and prevent writing duplicate code:
'node_modules/@dxtmisha/figma/ai-types.md'

---

# @dxtmisha/figma-code
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/figma-code'.

## Project context: Investigation required
You MUST read and carefully analyze the description of this project below. If there is even a 1% chance that the functionality, components, styles, or helpers from this project could be useful for your task, you MUST immediately start analyzing this project, studying its types, and checking its structure in full to prevent custom code duplication:
This library is a structured TypeScript abstraction layer for Figma Plugin backend development, specifically designed to automate node manipulation, data persistence, and bidirectional messaging. Its core purpose is to provide high-level wrappers around the native Figma API for node traversal (FigmaItem), frame-specific metadata extraction (FigmaFrame), and persistent state management using both figma.clientStorage and node-level PluginData with built-in caching and aging logic. AI coding assistants should study this library when implementing features for automated CSS/style extraction, programmatic selection management, screenshot generation, or text content processing for translation and key-value mapping. The integration context bridges the Figma backend to the UI via FigmaPluginMessenger and includes specialized modules for AI-driven text analysis, relying on a shared type system for Figma nodes and message payloads.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
FIGMA PLUGIN LOGIC PACKAGE (BACKEND):
This library is intended for use on the main process side of a Figma plugin (Code side). It provides direct access to the Figma API and implements the logic for handling requests from the UI.

1. PURPOSE: Implementing the background logic of the plugin. It is responsible for manipulating Figma objects (frames, text, styles), managing storage (`FigmaStorage`), and sending data back to the UI via `FigmaPluginMessenger`.
2. INTERACTION: Works in conjunction with the `@dxtmisha/figma` package. It receives messages from the UI, performs operations via the Figma API, and sends results back.
3. KEY CLASSES:
   - `FigmaPluginMessenger`: A singleton for managing messages on the Backend side.
   - `FigmaFrame`, `FigmaItem`: Wrappers for convenient handling of Figma nodes.
   - `setup...` functions: Listeners that automatically process standard UI requests (e.g., `setupFrameSelection`).

Use this package only in code that executes in the main process of the Figma plugin (main thread).

## Project types: Essential for analysis
This file contains the complete type definitions, available utilities, and component structures for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read, analyze, and study this type definition file COMPLETELY and IN FULL (NOT partially), as your absolute first action using the view_file tool. This is mandatory to fully understand its API, locate all existing utilities/helpers (полезности), and prevent writing duplicate code:
'node_modules/@dxtmisha/figma-code/ai-types.md'

---

# @dxtmisha/figma-ref
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/figma-ref'.

## Project context: Investigation required
You MUST read and carefully analyze the description of this project below. If there is even a 1% chance that the functionality, components, styles, or helpers from this project could be useful for your task, you MUST immediately start analyzing this project, studying its types, and checking its structure in full to prevent custom code duplication:
This library provides a collection of Vue.js composables for Figma plugin development, abstracting the Figma Plugin API into reactive primitives. Its core purpose is to synchronize the Figma engine's state—including document storage, client-side persistence, node selection, and frame hierarchy—with a Vue-based UI layer. Usage is indispensable when building Figma plugins that require reactive tracking of canvas selection, persistent configuration via Figma's internal storage APIs, or bidirectional communication regarding frame styles and attributes. It integrates directly with the Vue 3 Composition API and relies on @dxtmisha/figma for specialized data structures. The library handles asynchronous operations through internal loading states and exposes ComputedRef and ShallowRef types for seamless integration into Vue components. Key modules facilitate the management of top-level frames, specific selection sets, and message-based style updates between the plugin UI and the Figma main thread.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
REACTIVE WRAPPERS FOR FIGMA (VUE 3):
This package provides Vue composables for convenient and reactive handling of Figma data within the plugin interface.

1. PURPOSE: Transforming asynchronous Figma requests into reactive Vue variables. This allows the interface to update instantly upon selection changes or data updates in Figma.
2. DEPENDENCIES: The library is built upon `@dxtmisha/figma` for data exchange and utilizes Vue 3 reactivity.
3. KEY COMPOSABLES:
   - `useFigmaFrameSelection`: Reactive tracking of selected objects.
   - `useFigmaStorage`, `useFigmaClientStorage`: Working with persistent plugin storage.
   - `useFigmaUiFrames`: A list of available frames to display in the UI.

Use this package when developing Vue interfaces for Figma plugins to ensure seamless state synchronization between Figma and the UI.

## Project types: Essential for analysis
This file contains the complete type definitions, available utilities, and component structures for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read, analyze, and study this type definition file COMPLETELY and IN FULL (NOT partially), as your absolute first action using the view_file tool. This is mandatory to fully understand its API, locate all existing utilities/helpers (полезности), and prevent writing duplicate code:
'node_modules/@dxtmisha/figma-ref/ai-types.md'

---

# @dxtmisha/functional
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/functional'.

## Project context: Investigation required
You MUST read and carefully analyze the description of this project below. If there is even a 1% chance that the functionality, components, styles, or helpers from this project could be useful for your task, you MUST immediately start analyzing this project, studying its types, and checking its structure in full to prevent custom code duplication:
1. CORE PURPOSE
This library (@dxtmisha/functional) provides Vue 3 reactive abstractions, abstract base classes for component architecture, and advanced composables. It elevates low-level functional utilities from @dxtmisha/functional-basic into Vue 3 reactivity system (refs, computed, lifecycle, reactive singletons) to handle REST API orchestration, localization, meta management, routing, client-side storage, lazy loading, list/search data structures, and standard component state construction.

2. KEY EXPOSITIONS
Abstract Component Base Classes: DesignAbstract, DesignAsyncAbstract, DesignChanged, DesignComponents, DesignComp, DesignConstructorAbstract. These manage component state lifecycle, dynamic class and style processing, event hooks, slot rendering, component modifications, and property mutation tracking.

Reactive API Composables: useApiRef, useApiAsyncRef, useApiManagementRef, useApiManagementAsyncRef, useApiGet, useApiPost, useApiPut, useApiDelete, useApiRequest. These handle REST operations with SSR prefetching, response contract validation, mutation handling, error contract mapping, client-side pagination/filtering, and automatic state reactivity.

Singleton State & Execution Control: executeUse, executeUseGlobal, executeUseProvide, executeUseLocal, executeUseGlobalInit. These encapsulate factory initialization into global, component-tree inject/provide, or closure-local singletons.

Localization & Formatting Classes and Composables: DatetimeRef, GeoFlagRef, GeoIntlRef, GeoRef, GeoUnitRef, useGeoIntlRef, useGeoUnitRef, useFormattersRef, useTranslateRef, t. These offer reactive locale-aware date/time formatting, unit conversion, flag retrieval, and multi-key translation refs.

Data Structures & UI Management: ListDataRef, useRouterList, useSearchRef, useSearchValueRef, useLazyRef, useLazyItemByMarginRef, ScrollbarWidthRef, EventRef, EffectScopeGlobal. These provide reactive list data mapping, search query debounce and highlighting, lazy-loading via IntersectionObserver, scrollbar width tracking, and global effect scopes.

State Persistence & Browser Composables: useBroadcastValueRef, useCookieRef, useHashRef, useQueryRef, useSessionRef, useStorageRef, useMeta. These control cross-tab communication, cookies, URL query/hash reactive synchronization, session/local storage, and reactive HTML document metadata.

Utility Functions & Plugin: computedAsync, computedByLanguage, computedEternity, getBind, getBindRef, render, toBind, toBinds, dxtFunctionalPlugin.

3. TRIGGERS FOR STUDYING AI-TYPES.MD
Reading ai-types.md is mandatory under any of the following conditions, keywords, or implementation tasks:
- Extending or sub-classing DesignConstructorAbstract, DesignAbstract, DesignAsyncAbstract, or DesignComponents.
- Configuring API integrations requiring complex typing, specifically ApiManagementGet, ApiManagementSearch, ApiManagementRequest, or ApiOptions.
- Utilizing component metadata and binding types, such as ConstrBind, ConstrClasses, ConstrStyles, ConstrOptions, ConstrSetup, ConstrComponentMod, or ConstrProps.
- Constructing managed singletons using executeUse, executeUseGlobal, executeUseProvide, or executeUseLocal.
- Typing complex list inputs, search items, and reactive parameters using ListList, ListDataItem, ListDataFull, RefOrNormal, RefType, or RefOrNormalOrFunction.
- Implementing contract validation functions (validateResponseContract, validateRequestContract) or error contracts (ApiErrorStorageList) with schema validation libraries.

4. INTEGRATION CONTEXT
Initializes as a Vue 3 plugin via dxtFunctionalPlugin. Connects directly with Vue 3 reactivity and rendering APIs (ref, computed, VNode, provide/inject). Wraps base functional logic from @dxtmisha/functional-basic, integrates with vue-router via RouterItemRef, links to @dxtmisha/media for social icons, and supports runtime schema validation (such as @effect/schema) inside API payload contracts.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
# @dxtmisha/functional Reference
Vue 3 reactive utilities built on `@dxtmisha/functional-basic`. See `ai-types.md` for full signatures.

## Usage Rules & Strategies
- **Priority**: Always use this package over `@dxtmisha/functional-basic` in Vue.
- **API/State Singletons**: **NEVER** call `useApi*` / `executeUse*` hooks directly in Vue components. Wrap them in `executeUseGlobal` (startup), `executeUseLocal` (lazy, session scope), or `executeUseProvide` (scoped tree) inside external service files. Components only import and call the resulting hook.

```typescript
import { executeUseLocal, useApiManagementRef, useStorageRef, useSessionRef, useCookieRef, useBroadcastValueRef, useHashRef, GeoRef, useGeoIntlRef, useTranslateRef, useMeta, ScrollbarWidthRef, computedAsync, computedEternity, ListDataRef, useSearchRef, EventRef, useLazyRef } from '@dxtmisha/functional';

// 1. API Management
export const useUsers = executeUseLocal(() => useApiManagementRef(
  { path: '/api/users' }, { date: (v) => new Date(v).toLocaleString() }, { columns: ['name'] },
  { path: '/api/users' }, { path: (o) => `/api/users/${o.id}` }, { path: (o) => `/api/users/${o.id}` }
));

// 2. Storage & State
const theme = useStorageRef<'light' | 'dark'>('theme', 'light');
const step = useSessionRef<number>('step', 1);
const token = useCookieRef<string>('auth', '', { secure: true });
const sync = useBroadcastValueRef<string>('ch', 'idle');
const page = useHashRef<string>('page', 'home');

// 3. Geo & Formatting
const country = GeoRef.getCountry(); const intl = useGeoIntlRef(); intl.currency(150, 'EUR');
const t = useTranslateRef(['global.save']);

// 4. SEO & Layout
useMeta().setTitle('Page'); const scrollW = new ScrollbarWidthRef().width;

// 5. Reactivity Helpers
const asyncData = computedAsync(async () => fetch(), 'loading...');
const cached = computedEternity(async () => fetch(), 'loading...');

// 6. Lists & Search
const list = new ListDataRef(items, selectedId); list.isSelected;
const { listSearch } = useSearchRef(items, ['label'], ref('query'));

// 7. DOM Events & Lazy
const listener = new EventRef(window, window, 'keydown', (e) => console.log(e.key));
const lazy = useLazyRef(); lazy.addLazyItem(elementRef);
```

## Project types: Essential for analysis
This file contains the complete type definitions, available utilities, and component structures for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read, analyze, and study this type definition file COMPLETELY and IN FULL (NOT partially), as your absolute first action using the view_file tool. This is mandatory to fully understand its API, locate all existing utilities/helpers (полезности), and prevent writing duplicate code:
'node_modules/@dxtmisha/functional/ai-types.md'

---

# @dxtmisha/functional-basic
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/functional-basic'.

## Project context: Investigation required
You MUST read and carefully analyze the description of this project below. If there is even a 1% chance that the functionality, components, styles, or helpers from this project could be useful for your task, you MUST immediately start analyzing this project, studying its types, and checking its structure in full to prevent custom code duplication:
An isomorphic TypeScript utility framework designed to provide core runtime services for web applications across browser and Server-Side Rendering (SSR) environments. Its primary functions include wrapping the Fetch API with request/response caching and hydration, state management isolated by request context, comprehensive internationalization (i18n, unit conversions, phone masking, date/number formatting), SEO meta tag synchronization, reactive URL hash and query parameter tracking, managed DOM event lifecycle handling, in-memory list search with string highlighting, and centralized error handling.

Api and ApiInstance manage Fetch-based HTTP communication featuring retries, custom headers, preparation hooks, and mock response emulation. ApiCache handles client and server data caching. ServerStorage and DataStorage provide isomorphic request-isolated state retention and browser storage abstraction with SSR hydration support. CookieStorage and Cookie manage client/server cookies consistently. Geo, GeoIntl, GeoPhone, GeoUnit, and Datetime form a localization engine handling Intl formatting, country phone masking, unit conversions, and date calculations. Translate and TranslateInstance manage synchronous and asynchronous translation batching. Query, QueryInstance, Hash, and HashInstance offer reactive, watchable interfaces for URL query strings and hash parameters. EventItem wraps DOM event listeners with ResizeObserver and requestAnimationFrame scroll optimizations. SearchList provides in-memory text search, regex generation, and matching string highlights. Meta, MetaOg, and MetaTwitter manage standard HTML, Open Graph, and Twitter Card metadata tags in the DOM or as HTML strings. ErrorCenter provides centralized error tracking and routing.

Studying ai-types.md is mandatory when implementing or typing API configurations (ApiFetch, ApiConfig, ApiHydrationItem), setting up application error handling (ErrorCenterCauseItem, ErrorCenterHandlerList), configuring complex list transformations (FormattersOptionsList, FormattersType), managing geographic and phone mask parameters (GeoItem, GeoDate, GeoPhoneValue), defining search parameters (SearchOptions, SearchColumns), configuring SEO meta types (MetaOpenGraphTag, MetaTwitterCard), or working with core generic utility types (ArrayToItem, NormalOrPromise, ObjectOrArray, NumberOrString).

The library operates as a foundational layer directly above native browser and Node.js runtime APIs (Fetch API, Intl API, DOM Window/Element interfaces, ResizeObserver, BroadcastChannel, Web Storage). It integrates with frontend SSR frameworks (such as Vue, React, Nuxt, or Next.js) by decoupling server-side request state via ServerStorage and generating safe client hydration scripts (getElementSafeScript) to prevent client-server hydration mismatches.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
# @dxtmisha/functional-basic Reference

Framework-agnostic utility library. **Vue developers MUST search `@dxtmisha/functional` first**; use this ONLY if no reactive/Vue-specific analog exists.

## 1. Coding Standards & Conventions
- **Class Structure**: Properties/Variables (`public`->`protected`->`private`) -> Constructor -> Public Methods -> Protected Methods -> Private Methods. Within each method group, follow order: 1) `get` / `set` (getters/setters), 2) `is...` / `has...`, 3) `get...` / `set...`, 4) `add...` / `remove...`, 5) `update...` / `reset...`, 6) remaining methods. Within each subgroup, methods are grouped semantically by logical pairs and rules (e.g., `min` / `max`, `width` / `height`, `x` / `y` / `z`), and remaining methods are sorted alphabetically.
- **Style/Types**: `PascalCase` classes, `camelCase` methods/props, `UPPER_SNAKE_CASE` constants. No `any` (use `unknown`/generics). Explicit return types for ALL methods. Export all interfaces. Type files: `*Types.ts`. Use `@effect/schema` for schemas.
- **SSR Safety**: Isomorphic code. Do NOT store request state in globals. Use `isDomRuntime()` before `window`/`document`. Use `ServerStorage.get('key', () => new Class())` for request-isolated singletons.
- **Utility & Primitive Functions**: ALWAYS use primitive helper functions from this package (e.g. `isFunction`, `executeFunction`, `isFilled`, `isObject`, `isString`, `isArray`, etc.) instead of writing custom inline checks or conditions.

## 2. API Reference & Examples

### HTTP Client & Caching
```typescript
import { Api, ApiCache } from '@dxtmisha/functional-basic';
Api.setOrigin('https://api.example.com'); Api.setUrl('/api/v1'); Api.setRequestDefault({ client: 'web' });
Api.setHeaders(() => ({ Authorization: `Bearer ${localStorage.getItem('token') || ''}` }));
Api.setPreparation(async (opts) => { if (opts.auth) opts.headers['X-Auth'] = '1'; });
Api.setEnd(async (res) => res.status === 401 ? { reset: true } : {});
const users = await Api.request<User[]>('users'); // GET
const updated = await Api.post<User>({ path: 'profile', request: { name: 'New' } });
await ApiCache.set('k', { a: 1 }, 60000); const cache = await ApiCache.get<{a: number}>('k');
```

### Storage & State
```typescript
import { DataStorage, CookieStorage, Cookie, ServerStorage } from '@dxtmisha/functional-basic';
DataStorage.setPrefix('app_');
const ls = new DataStorage<{ id: string }>('user', false); ls.set({ id: '1' }); ls.get({ id: '0' }); ls.remove();
CookieStorage.set('t', 'dark', { age: 31536000, secure: true }); CookieStorage.get<string>('t', 'light');
const c = new Cookie<string>('auth'); c.set('xyz', { secure: true }); c.get();
const srv = ServerStorage.get('svc', () => new Svc()); // SSR isolated
```

### Geolocation, Formatting & Localization
```typescript
import { Geo, GeoIntl, GeoFlag, GeoPhone } from '@dxtmisha/functional-basic';
const country = Geo.getCountry(); const lang = Geo.getLanguage(); Geo.set('en-US');
const intl = new GeoIntl('en-US');
intl.number(1234.5); intl.currency(99, 'USD'); intl.sizeFile(1024*1024); intl.date(new Date(), 'date');
intl.relative(new Date(Date.now() - 3600000)); intl.plural(3, 'apple|apples');
const flag = new GeoFlag().getFlag('VN');
const phone = GeoPhone.getByPhone('+84900000000'); const mask = GeoPhone.toMask('84900000000');
```

### DOM, Events & Helpers
```typescript
import { EventItem, goScrollSmooth, writeClipboardData, getClipboardData, SearchList, Formatters, FormattersType, isFilled, isFunction, executeFunction, isDomRuntime, copyObject, anyToString, sleep } from '@dxtmisha/functional-basic';

// Safe Events (leak-proof)
const listener = new EventItem(window, 'click', console.log, { passive: true }); listener.start(); listener.stop();

// DOM / Clipboard
goScrollSmooth(document.getElementById('t')); await writeClipboardData('txt'); await getClipboardData();

// Search & Formatters
const res = new SearchList([{ n: 'John' }], ['n'], 'jo').to(); // Highlights matches
const fmt = new Formatters({ p: { type: FormattersType.currency, options: 'USD' } }, { p: 12 }).to();

// General
isFilled([]); // false (strings, arrays, objects, numbers, booleans)
executeFunction(callbackOrValue, arg1); // Executes callback if function, or returns value as is
isFunction(val); // Type-guard for functions
isDomRuntime(); const cloned = copyObject({ a: 1 }); const str = anyToString(123); await sleep(500);
```

## Project types: Essential for analysis
This file contains the complete type definitions, available utilities, and component structures for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read, analyze, and study this type definition file COMPLETELY and IN FULL (NOT partially), as your absolute first action using the view_file tool. This is mandatory to fully understand its API, locate all existing utilities/helpers (полезности), and prevent writing duplicate code:
'node_modules/@dxtmisha/functional-basic/ai-types.md'

---

# @dxtmisha/nitro-basic
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/nitro-basic'.

## Project context: Investigation required
You MUST read and carefully analyze the description of this project below. If there is even a 1% chance that the functionality, components, styles, or helpers from this project could be useful for your task, you MUST immediately start analyzing this project, studying its types, and checking its structure in full to prevent custom code duplication:
Core Purpose: This library provides a specialized infrastructure layer for building and orchestrating Vue 3 applications within a Nitro (server-side) ecosystem. It facilitates SSR-to-client hydration, request lifecycle management, and application bootstrapping for complex Vue SSR architectures.

Key Expositions:
- App Bootstrapping: uiCreateApp, uiCreateServerApp, and uiCreateClientApp manage the lifecycle and initialization of Vue instances, handling routing, storage, and SSR rendering configurations.
- Server Utilities: getRequestHref, getRequestOrigin, and getRequestUrl provide normalized access to request metadata; initApi and initHeaders inject request-specific state.
- Plugin & Storage Management: initCookieStorage, initServerStorage, and initPluginApiCache integrate stateful storage into the Vue dependency injection container.
- Router Orchestration: initServerRouter and uiCreateSsrRouter manage the Vue Router lifecycle, specifically handling server-side state resolution to prevent hydration mismatches.
- UI/Bootstrap Helpers: uiBootstrapServer, uiBootstrapClient, uiIdClient, and uiIdServer manage element identity and global environmental setups for SSR environments.

Triggers for Studying ai-types.md:
- Implementing custom SSR rendering pipelines.
- Extending or overriding the default Nitro app integration logic.
- Debugging hydration mismatches or state synchronization between client and server.
- Configuring custom storage providers or API caching mechanisms within the Nitro context.
- Extending NitroAppOptions or NitroAppBasicConfig definitions for specific architectural requirements.

Integration Context: This library acts as the middleware and configuration backbone between a Nitro server environment and a Vue 3 frontend. It interfaces directly with Vue Router, NitroPack, and @dxtmisha/functional plugin systems, serving as the bridge for transporting state (cookies, headers, storage) from the server request to the rendered application.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
# @dxtmisha/nitro-basic Reference

Foundation for Nitro & Vue 3 Server-Side Rendering (SSR). Refer to [ai-types.md](file:///Volumes/T7/Code/dxt-ui/packages/nitro-basic/ai-types.md) for full signatures, types, and exported methods.

---

## Architectural Rules

1. **Purpose**: Used *only* in server bootstrap and Nitro configuration (`uiBootstrapServer`, `uiCreateServerApp`, Nitro plugins).
2. **Restriction**: **Never** import or use these functions/mixins within standard Vue components (SFC) or regular business logic. Use high-level wrappers from `@dxtmisha/functional` instead.
3. **Scope**: Do not connect directly to the UI; this package is responsible for the hidden server skeleton.

---

## Core Initialization Flow

### 1. App Bootstrapping (Server & Client Entry Points)

```typescript
import { uiCreateApp, uiCreateClientApp, uiCreateServerApp } from '@dxtmisha/nitro-basic';
import AppRoot from 'node_modules/@dxtmisha/nitro-basic/App.vue';

// 1. Base App Setup (common)
const { app, router, options } = uiCreateApp(AppRoot, { appRouter: { routes } });

// 2. Client Entry (client.ts)
await uiCreateClientApp(app, '#app', router, options, async (appInstance) => { /* pre-mount setup */ });

// 3. Server Entry / Nitro Request handler
const ssr = await uiCreateServerApp(app, request, router, options, async (appInstance) => { /* pre-render setup */ }, context, htmlTemplate);
// ssr.appHtml, ssr.scriptsJson, ssr.teleportsHtml
```

### 2. Request Context & Server Lifecycle Initializers

```typescript
import { useHeaders, getRequestHref, getRequestOrigin, initApi, initCookieStorage, initServerStorage, initHeaders } from '@dxtmisha/nitro-basic';

// Initialized inside server entry points before rendering:
initApi(request);
initCookieStorage(app, request);
initServerStorage(app);
initHeaders(app);

// Accessing metadata on the server:
const userAgent = useHeaders('user-agent');
const allHeaders = useHeaders();
const href = getRequestHref(request);
const origin = getRequestOrigin(request);
```

### 3. Bootstrap & Identity Helpers

```typescript
import { uiBootstrapClient, uiBootstrapServer, uiIdClient, uiIdServer } from '@dxtmisha/nitro-basic';

uiIdClient(); // Setup client-side element ID generator
uiIdServer(); // Setup server-side element ID generator
uiBootstrapServer(); // Server initialization
uiBootstrapClient(); // Client initialization
```

## Project types: Essential for analysis
This file contains the complete type definitions, available utilities, and component structures for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read, analyze, and study this type definition file COMPLETELY and IN FULL (NOT partially), as your absolute first action using the view_file tool. This is mandatory to fully understand its API, locate all existing utilities/helpers (полезности), and prevent writing duplicate code:
'node_modules/@dxtmisha/nitro-basic/ai-types.md'

---

# @dxtmisha/styles
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/styles'.

## Project context: Investigation required
You MUST read and carefully analyze the description of this project below. If there is even a 1% chance that the functionality, components, styles, or helpers from this project could be useful for your task, you MUST immediately start analyzing this project, studying its types, and checking its structure in full to prevent custom code duplication:
A foundational SCSS framework and dynamic style generation engine designed for building scalable, multi-theme design systems. Its primary function is to provide a comprehensive set of low-level SCSS mixins, functions, and a sophisticated configuration-driven property generation system. The core architecture centers around dynamic CSS variable management, specifically for color spaces where RGB channels and opacity are decoupled (using --sys-* and --sys-palette-* prefixes) to allow for real-time reactive theme modifications and complex transparency effects.

An AI should study this library when: 1. Investigating the generation of global CSS variable tokens for colors, dimensions, and typography. 2. Developing or modifying UI components that require RTL (Right-to-Left) support through the library's directional abstractions (dir.scss). 3. Implementing complex layout patterns using semantic mixins for Flexbox orchestration, adaptive spacing, and relative positioning. 4. Understanding the 'Properties' engine (src/styles/properties) which programmatically transforms SCSS maps into a suite of atomic utility classes and root-level variable definitions. 5. Managing design system palettes and shade scales where automated accessibility and consistency are required.

The library is architected as a modular SCSS-first system, utilizing @use and @forward for clean namespace management. It functions as the visual source of truth for all @dxtmisha packages, integrating directly with framework-specific plugins to inject baseline styles and configuration-dependent utility layers. It features specialized modules for scrollbar customization, transform matrices, and complex pseudo-selector management, ensuring a consistent visual implementation across different execution environments.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
# @dxtmisha/styles Reference

System-wide SCSS styling guidelines and mixin structure.

---

## Architectural Rules & Conventions

1. **Hierarchy**: Use ready-made system mixins instead of custom styling properties whenever a system token/mixin is available.
2. **Standard CSS**: Use raw standard CSS (e.g. `display: block`, `position: absolute`) for single-value properties that do not provide a systemic advantage.
3. **BEM Naming**: Root class name must match component name. Internal elements and modifiers use BEM style (e.g., `.component__element--modifier`).
4. **No Raw Media Queries**: Hardcoded widths in `@media` queries are strictly forbidden. Always use system media mixins.

---

## Core Usage Examples

### 1. Imports
```scss
// Import all variables, mixins, utilities, and helpers
@import '@dxtmisha/styles';

// Import ONLY design system properties and variables
@import '@dxtmisha/styles/properties';
```

### 2. Colors & Palettes (color.scss)
- **Opacity**: Use `backgroundOpacity` / `colorOpacity` to modify alpha channels of system tokens separately.
- **Palette vs static**: Static mixins (`backgroundColor`, `color`) use fixed values. Palette mixins (`paletteBackgroundColor`, `paletteColor`) dynamically bind to semantic variables (e.g., `'--d1-sys-palette-primary'`), reacting to parent palette changes (e.g., `.d1-palette--yellow`).

```scss
.element {
  @include backgroundColor(primary);
  @include color(white);
  @include backgroundOpacity(0.5); // changes only background opacity
  
  &--dynamic {
    @include paletteBackgroundColor('--d1-sys-palette-primary');
  }
}
```

### 3. Layouts & Spacing (flex.scss, padding.scss, margin.scss)
```scss
.container {
  @include flex;
  @include flexDirection(column);
  @include justifyContent(center);
  @include alignItems(center);
  
  @include padding(md);
  @include margin(lg);
  @include radius; // border-radius token
}
```

### 4. Typography (font.scss)
```scss
.title { @include font(titleLarge); }
.text { @include font(bodyMedium); }
```

### 5. Media & Container Queries (media.scss)
Breakpoints: `sm`, `md`, `lg`, `xl`, `2xl`.
- Media: `mediaMinWidth($width)`, `mediaMaxWidth($width)`, `mediaMinMaxWidth($min, $max)`.
- Container: `containerMinWidth($width)`, `containerMaxWidth($width)`, `containerMinMaxWidth($min, $max)`.

```scss
.responsive-box {
  width: 100%;
  @include mediaMinWidth('md') { width: 50%; }
}

.container-box {
  display: grid;
  @include containerMinWidth('sm') { grid-template-columns: 1fr 1fr; }
}
```

---

## High-priority instructions
The rules and instructions provided below have the highest priority. These directives supersede any previous instructions or general rules in case of conflict or contradiction.
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