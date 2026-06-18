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

Your primary goal is to generate flawless, industrial-grade code that adheres to dxt-ui standards. You promise to follow these rules strictly:

0. **Mandatory Deep Study**:
   - Before developing anything for any project or package, you MUST study it completely to fully understand its architecture and stylistic guidelines.
   - Before modifying or fixing any file, you MUST fully study its internal structure and logic first.
   - If any instructions, paths, or files are specified as located inside `node_modules/` or any other external/linked directory, you MUST first check if this package exists locally in the workspace (for example, under `packages/`). If it does exist locally, you MUST resolve the paths to the local workspace package directory and study/modify the local source files instead.
   - **CRITICAL FIRST STEP:** If any project, module, or instruction contains links or references to specific files (e.g. types, developer guides, descriptions), you MUST study all these referenced files as your absolute first action. As soon as you start working with a project, or notice that it is imported/used in the code you are working with, you must immediately read and study all these referenced files before doing any planning, proposing code changes, or writing code. This is mandatory and applies even if the files are located in `node_modules/` (always resolve them to the local workspace directory first if they exist locally).
   - **STRICT BLOCKING GUARD (CHRONOLOGICAL ORDER RULES):**
     1. As your ABSOLUTE FIRST ACTION, before taking any other steps, you MUST check if the `ai-memory.md` file exists in the specific package directory or the repository root depending on the files you are working on:
        - If you are analyzing or modifying files that are located inside a package directory (e.g., any subdirectory under `packages/` like `packages/constructor/`, `packages/scripts/`, etc.), you MUST read/write the `ai-memory.md` file ONLY within that specific package directory (e.g. `packages/constructor/ai-memory.md` or `packages/scripts/ai-memory.md`). You are strictly FORBIDDEN from using, reading, or writing the global `ai-memory.md` in the repository root in this case.
        - If and only if the files you are working with are root-level configurations or not part of any package under `packages/`, you may read/write the `ai-memory.md` file in the repository root.
        If the required local package-level `ai-memory.md` (or root `ai-memory.md` for root-level files) exists, you MUST read it using `view_file`. If it does NOT exist, you MUST CREATE IT immediately using `write_to_file` as an empty file with only a single newline (no placeholder text, comments, or intro text).
     2. Identify all paths, directories, or packages involved in the user request.
     3. Scan the prompt for sections corresponding to those paths.
     4. Identify all paths to auxiliary documentation, types, or developer guides mentioned in those sections.
     5. You MUST use the `view_file` tool to read and study ALL of these referenced files BEFORE calling `list_dir` on sub-folders, writing any plans/checklists, or proposing/making code changes. Bypassing this order is a critical protocol violation.

1. **"Copy-Paste Ready" Principle**:
   - Generate code that can be copied and run without a single manual edit.
   - All imports must be absolute or correct relative paths.
   - No `// ... rest of the code`, no `// imports here`. Only the complete, working file.

2. **Zero Tolerance for Hallucinations**:
   - Use only the libraries and versions specified in the project's `package.json`.
   - Do not invent API methods that do not exist in the current versions of dependencies.
   - If information is insufficient, it is better to ask or point out the limitation than to hallucinate.

3. **Clean Code Standards**:
   - **DRY & KISS**: Avoid duplication, write as simply and clearly as possible.
   - **SOLID**: Every module, class, or function must have one clear responsibility.
   - **Declarative Approach**: Prefer a declarative programming style (array functional methods, composition).
   - **No Abbreviations**: Do not use shortened or abbreviated names for variables, properties, arguments, methods, classes, etc. (e.g., do not use `el`, `rect1`/`r1`, `dx`/`dy`, `val`, `temp`). All identifiers must be descriptive, complete, and self-explanatory.
   - **Optimization and Clarity**: Write code that is highly optimized, performant, and clean, ensuring it is easy to read and understand.
   - **Single Responsibility (KISS/SOLID)**: Avoid creating large "mega-functions" or monolithic blocks. Each function must be concise and perform exactly one focused task (1 function = 1 functionality).

4. **Uncompromising TypeScript**:
   - No `any`. Use `unknown` if the type is truly unknown, or create generic types.
   - Never use `@ts-ignore`. If a type check suppression is absolutely necessary due to external limitations, use `@ts-expect-error` with a descriptive comment explaining why.
   - Always define interfaces for input and output data.
   - Use `as const`, `readonly`, and enums/union types to increase reliability.

5. **Professional Documentation (TSDoc)**:
   - Accompany all exported entities with TSDoc comments in the [wikiLanguage] language.
   - Describe the purpose, parameters, return values, and potential exceptions.
   - Usage examples in comments are encouraged for complex functions.

6. **Architectural Consistency**:
   - Respect the project structure. If it is standard in the project to move logic into `composables` or `utils`, follow that pattern.
   - Reuse existing infrastructure: Always check if the required functionality (e.g., API requests, state management, utilities) already exists in the project's core packages (like `@dxtmisha/functional` or `@dxtmisha/functional-basic`) before implementing it from scratch.
   - Do not modify global styles or styles of base UI components unless explicitly requested.

7. **Security and Performance**:
   - Write error-proof code (guard clauses, optional chaining `?.`, nullish coalescing `??`).
   - Use explicit `try-catch` blocks for asynchronous operations. Never swallow errors silently; handle them appropriately or throw meaningful error messages.
   - Avoid redundant calculations in loops and heavy operations in reactive dependencies.

8. **Aesthetics and Conciseness**:
   - The code must be beautiful. Use logical indentation and group code by meaning.
   - Save tokens by avoiding redundant comments where the code speaks for itself.

9. **Strict Adherence to Instructions & Optimization**:
   - Perform all operations strictly in accordance with the provided commands and instructions.
   - Avoid guessing or performing unrelated extra actions. However, you are encouraged to analyze the requirements, optimize the code, and propose or implement better technical solutions directly related to achieving the task's goals.
   - Strictly adhere to the plan, checklists, and execution steps, while refining them for better quality and performance when needed.

10. **AI Workspace Memory (`ai-memory.md`)**:
    - As enforced by the STRICT BLOCKING GUARD, `ai-memory.md` MUST be created and read locally inside the root of the specific package you are working with (e.g., `packages/constructor/ai-memory.md` for code in `packages/constructor`).
    - Writing or reading `ai-memory.md` in the repository root when working on code inside a package is a critical violation of these rules.
    - Whenever you receive feedback, corrections, or instructions from the developer, you MUST update that specific package's local `ai-memory.md` file.
    - Active Application: You must actively APPLY the rules and constraints from `ai-memory.md` to all code you generate. Rules in this file override general assumptions and have the highest priority.
    - The PRIMARY PURPOSE of this file is to store critical coding guidelines, specific architectural constraints, and "do's and don'ts" (e.g., "do not use X; use Y instead") to ensure the AI writes compliant, correct code.
    - DO NOT store change logs, lists of modified files, or commit-like messages (e.g., "updated file X, updated package Y"). Keep the file clean, concise, and focused strictly on active rules, design decisions, and coding standards.

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
Core Purpose: This library is a comprehensive UI component framework and functional utility suite for Vue 3. It utilizes a modular, class-based architecture to manage component state, ARIA accessibility, form validation, and reactive bindings, effectively abstracting complex UI logic into reusable constructors and mixin-like classes.

Usage Scenarios: AI should study this library when tasked with building or extending UI components within this specific design system. It is indispensable for:
1. Implementing complex form fields with validation (Field, Input, Checkbox, Select).
2. Managing accessibility attributes programmatically using the AriaStaticInclude or specific inclusion classes.
3. Building interactive UI containers like Modals, Dialogs, Menus, and Tabs that require standardized behaviors (auto-close, teleportation, motion transforms).
4. Customizing component logic, such as adding advanced event handling (Touch/Click) or custom skeleton loading states.
5. Leveraging the provided Vite plugin for component-level style and import modularization.

Integration Context: The library follows a strict constructor-based pattern where components are built by composing smaller functional classes (e.g., AreaInclude, CaptionInclude, EventClickInclude). It heavily depends on functional primitives for reactivity and typing. CSS is managed through BEM-structured class names generated by the component constructors, often paired with CSS variables or mixins processed by the included Vite plugin. It is designed to integrate into a Vue-based stack, providing specialized types for Props and Emits for strict type safety.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
This is an auxiliary library (@dxtmisha/constructor). It serves exclusively as an informational base and for typings.

All components of the final design system inherit from this library. You can use its files to fully understand what properties (props), slots, and events (emits) are available for a specific component.

WARNING: Do NOT import or use anything from this library directly in your code! Use only the ready-made global components of your design system (e.g., D1).

## Project types: Essential for analysis
This file contains the complete type definitions for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read and study this type definition file as your absolute first action to understand its API and structure:
'node_modules/@dxtmisha/constructor/ai-types.md'

## Mandatory Study Before Development
As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read and study the architectural rules and instructions in this file as your absolute first action:
'node_modules/@dxtmisha/constructor/ai-developer.md'

---

# @dxtmisha/d1
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/d1'.

## Project context: Investigation required
Core Purpose: A Vue 3 UI component library built on top of a core design system framework (@dxtmisha/constructor). It provides a comprehensive set of pre-styled, reactive components ranging from basic primitives (Buttons, Icons) to complex interactive structures (Dialogs, Modals, Forms, Navigation, Tabs).

Usage Scenarios: Indispensable when building or extending interfaces within an ecosystem that utilizes the @dxtmisha/constructor architecture. An AI should study this library when tasked with implementing, modifying, or debugging UI layouts, form fields, or state-driven overlays (modals/drawers) that rely on D1 component props, slots, or event emitters.

Integration Context: This library is designed to be used with Vite (via the provided uiD1VitePlugin). It acts as a high-level wrapper or implementation layer; individual components import their core logic and types from @dxtmisha/constructor, then define their own specific props and configurations. The structure is highly modular, with each component exported via a D1-prefixed naming convention. The library also includes internal dependency injection (e.g., InputPhone, Select) and specialized motion/layout components (MotionTransform, Grid, Window).

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
This file contains the complete type definitions for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read and study this type definition file as your absolute first action to understand its API and structure:
'node_modules/@dxtmisha/d1/ai-types.md'

## Project screenshots: Visual reference
The project includes the following screenshots that provide a visual reference for the project's design and functionality:
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-5_1.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-5_2.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-5_3.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-5_4.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-5_5.webp'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-code.html'
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-styles.css'

---

# @dxtmisha/figma
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/figma'.

## Project context: Investigation required
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
This file contains the complete type definitions for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read and study this type definition file as your absolute first action to understand its API and structure:
'node_modules/@dxtmisha/figma/ai-types.md'

---

# @dxtmisha/figma-code
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/figma-code'.

## Project context: Investigation required
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
This file contains the complete type definitions for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read and study this type definition file as your absolute first action to understand its API and structure:
'node_modules/@dxtmisha/figma-code/ai-types.md'

---

# @dxtmisha/figma-ref
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/figma-ref'.

## Project context: Investigation required
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
This file contains the complete type definitions for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read and study this type definition file as your absolute first action to understand its API and structure:
'node_modules/@dxtmisha/figma-ref/ai-types.md'

---

# @dxtmisha/functional
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/functional'.

## Project context: Investigation required
Core Purpose: A high-level reactive framework for Vue 3 that abstracts complex state, API orchestration, and UI design patterns. It provides a standardized layer for API management (including SSR support), data formatting, list manipulation, and design component architecture.

Key Expositions:
1. API Management: `useApiRef` (standard reactive fetch), `useApiManagementRef` (orchestrates GET/POST/PUT/DELETE with search/formatting), and SSR-specific versions (`useApiAsyncRef`, `useApiManagementAsyncRef`).
2. Design System Components: `DesignConstructorAbstract` and `DesignComponents` for building reactive, theme-aware components; `DesignChanged` for tracking property mutations.
3. Geo/Intl Utilities: `GeoIntlRef` (localized formatting for numbers, dates, currency, size), `GeoRef` (locale/country state management), and `GeoFlagRef`.
4. Reactive Ref Utilities: `ListDataRef` (complex list management, grouping, selection, navigation), `EventRef` (reactive event listeners), and various composables for `localStorage`/`sessionStorage`/`cookies`.
5. Functional Helpers: `executeUse` (singleton management: global/provide/local), `computedAsync`/`computedEternity` (advanced reactivity wrappers).

Triggers for Studying ai-types.md:
- When implementing or consuming API requests with `useApi...` hooks to understand data contracts and error handling.
- When configuring `executeUse` strategies (global vs provide) for service injection.
- When defining component properties or structures using `Constr...` types (e.g., `ConstrBind`, `ConstrOptions`).
- When managing complex lists or search logic requiring `ListDataRef` or `Search...` types.
- When creating custom design classes inheriting from `DesignConstructorAbstract`.

Integration Context: 
This library serves as a middleware layer between raw API responses/browser APIs and Vue components. It is designed to work with `@dxtmisha/functional-basic` (the core utility provider) and relies on Vue's reactivity system. It is meant to be registered as a plugin (`dxtFunctionalPlugin`) to provide global configurations for API clients, translation services, and routing.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
This is the main functional library for the Vue environment (@dxtmisha/functional). It contains Vue-specific utilities, composables, and reactive classes.

USAGE RULES:
1. When developing in Vue, always use this library for functionality, logic, and composables instead of `@dxtmisha/functional-basic` whenever possible.
2. It wraps basic non-reactive logic into Vue's reactivity system. If the required function or composable exists here, it has absolute priority.
3. Import utilities from `@dxtmisha/functional` for reactive UI behavior, composables, and state management.

WORKING WITH API AND STATE (useApi / executeUse):
A set of composables is provided for network requests: `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`, `useApiRequest`, `useApiRef`, `useApiAsyncRef`, `useApiManagementRef`, `useApiManagementAsyncRef`.
Strictly follow these rules for their application:

1. DO NOT call these composables directly in the Vue components (SFC).
2. Move all API configurations and `useApi*` calls into SEPARATE FILES (services/stores).
3. Wrap the API configurations inside the `executeUse` factory (specifically: `executeUseGlobal`, `executeUseProvide`, or `executeUseLocal` from `src/functions/executeUse.ts`). This guarantees the creation of managed singletons (single access point) and prevents duplicated requests and reactive states.
4. Perform any additional request processing (e.g., data mapping, preparing structures for skeletons before loading a form) in the same file, inside the `executeUse` callback, and return a fully prepared set of data and methods.
   *Example of correct usage:*
   ```ts
   import { executeUseGlobal } from '@dxtmisha/functional';
   import { useApiManagementRef } from '@dxtmisha/functional';

   export const useUserManagement = executeUseGlobal(() => {
     return useApiManagementRef(
       { path: '/api/users' },                 // GET setup
       { date: (v) => new Date(v).toLocaleString() }, // Formatters
       { columns: ['name', 'email'] },         // Search
       { path: '/api/users' },                 // POST
       { path: (o) => `/api/users/${o.id}` },  // PUT
       { path: (o) => `/api/users/${o.id}` }   // DELETE
     );
     // Logic for skeletons, additional formatting, etc., should be added here,
     // and then return the extended object.
   });
   ```
5. Within the Vue component itself, simply import and call your custom singleton composable: `const { list, loading, sendPost } = useUserManagement();`

CHOOSING THE executeUse STRATEGY:
1. `executeUseLocal` (PREFERRED):
   - When to use: For most API requests and services.
   - Key Features: Works "lazily" (lazy initialization) — initializes only when first called. The instance persists until the end of the session. This prevents overloading the application start with unnecessary requests.
2. `executeUseGlobal`:
   - When to use: When data or a service must be loaded/initialized IMMEDIATELY at application start (e.g., critical settings, SDKs).
   - Key Features: Creates a single instance for the entire application. All global singletons are forcibly initialized via `executeUseGlobalInit()`.
3. `executeUseProvide`:
   - When to use: For state shared between a parent and a group of child components (e.g., tabs, complex forms with sub-components).
   - Key Features: Uses provide/inject. The first component in the tree that calls the hook becomes the "provider", others become consumers.

=============================================================================
DEVELOPER GUIDE: USING `@dxtmisha/functional` AS A LIBRARY
=============================================================================

This section contains instructions and code guidelines for AI models on how to import and use the Vue-specific reactive classes, composables, and utility functions provided by this library in Vue 3 / Nuxt applications.

---

### 1. Reactive Storage & State Composables

These composables bind browser storages reactively to Vue `Ref` objects, keeping them in sync.

#### `useStorageRef` (localStorage)
Reactively binds a key from `localStorage`.
```typescript
import { useStorageRef } from '@dxtmisha/functional';

// Bind to key with optional initial default value
const theme = useStorageRef<'light' | 'dark'>('theme_key', 'light');

// Setting the value triggers an immediate update to localStorage reactively
theme.value = 'dark';
```

#### `useSessionRef` (sessionStorage) & `useCookieRef` (Cookies)
```typescript
import { useSessionRef, useCookieRef } from '@dxtmisha/functional';

// sessionStorage
const step = useSessionRef<number>('form_step', 1);

// CookieStorage
const token = useCookieRef<string>('auth_token', '', { secure: true });
```

#### `useBroadcastValueRef` (Cross-Tab Synchronization)
Synchronizes a state value reactively across multiple browser tabs under the same origin.
```typescript
import { useBroadcastValueRef } from '@dxtmisha/functional';

// Synchronizes the value of the ref across tabs using BroadcastChannel
const syncState = useBroadcastValueRef<string>('active_channel', 'idle');
```

#### `useHashRef` (URL Hash)
Reactively binds Vue state to the URL hash parameters.
```typescript
import { useHashRef } from '@dxtmisha/functional';

const hashPage = useHashRef<string>('page', 'home');
```

---

### 2. Reactive Geolocation & Internationalization (`GeoRef`, `GeoIntlRef`, `GeoFlagRef`, `useTranslateRef`)

Provides reactive integrations for internationalization APIs.

#### `GeoRef` & `GeoIntlRef`
```typescript
import { GeoRef, useGeoIntlRef } from '@dxtmisha/functional';

// Reactive tracking of user location details
const currentCountry = GeoRef.getCountry(); // ComputedRef<string>

// Reactive i18n formatter hook
const intl = useGeoIntlRef();
const formattedPrice = intl.currency(150, 'EUR'); // ComputedRef<string>
```

#### `useTranslateRef`
Reactively loads and gets translation tokens.
```typescript
import { useTranslateRef } from '@dxtmisha/functional';

const translations = useTranslateRef(['global.save', 'global.cancel']);
// returns: ShallowRef<Record<string, string>> containing loaded translations
```

---

### 3. SEO & Layout Utilities

#### `useMeta`
Manages page metadata reactively. Calling setters will update document headers and tags reactively.
```typescript
import { useMeta } from '@dxtmisha/functional';

const metaManager = useMeta();
metaManager.setTitle('My Product Page');
metaManager.setDescription('Product details and configurations.');
```

#### `ScrollbarWidthRef`
Tracks the scrollbar width reactively to solve layout shift issues.
```typescript
import { ScrollbarWidthRef } from '@dxtmisha/functional';

const scrollbar = new ScrollbarWidthRef();
const width = scrollbar.width; // Ref<number>
const hasScroll = scrollbar.is; // ComputedRef<boolean>
```

---

### 4. Advanced Reactivity Helpers

#### `computedAsync`
Creates a computed property that resolves its value asynchronously. Useful for async tasks inside computed getters.
```typescript
import { computedAsync } from '@dxtmisha/functional';

// Performs asynchronous data lookup and reactively returns the result
const asyncData = computedAsync(async () => {
  return await fetchSomeData(activeId.value);
}, 'initial_loading_value');
```

#### `computedEternity`
Computes an asynchronous value once and caches it indefinitely unless manually refreshed.
```typescript
import { computedEternity } from '@dxtmisha/functional';

const cachedData = computedEternity(async () => {
  return await fetchStaticData();
}, 'loading_state');
```

---

### 5. List & Search Orchestration

#### `ListDataRef`
A powerful reactive state orchestrator for managing lists, groups, items, pagination, highlight paths, and selections.
```typescript
import { ListDataRef } from '@dxtmisha/functional';

const items = ref([
  { value: 'id1', label: 'First Option' },
  { value: 'id2', label: 'Second Option' },
]);
const selectedId = ref('id1');

const listData = new ListDataRef(items, selectedId);
const isSelected = listData.isSelected; // ComputedRef<boolean>
const nextItem = listData.getSelectedNext(); // returns next select item
```

#### `useSearchRef`
Combines a source list, target fields, search query, and options to reactively search a list with built-in delay and highlight support.
```typescript
import { useSearchRef } from '@dxtmisha/functional';

const query = ref('second');
const { listSearch, loading, length } = useSearchRef(items, ['label'], query);
```

---

### 6. DOM & Lazy Rendering

#### `EventRef`
Reactive wrapper for DOM events. Starts and stops event binding cleanly inside Vue component lifecycles (runs setup and teardown hooks automatically).
```typescript
import { EventRef } from '@dxtmisha/functional';

// Listens reactively; auto-starts on setup and auto-stops on unmounted
const keyListener = new EventRef(window, window, 'keydown', (event) => {
  console.log('Key pressed', event.key);
});
```

#### `useLazyRef`
Reactive manager utilizing `IntersectionObserver` to defer rendering of off-screen components.
```typescript
import { useLazyRef } from '@dxtmisha/functional';

const lazyManager = useLazyRef();
const isVisible = lazyManager.addLazyItem(elementRef); // ShallowRef<boolean>
```

## Project types: Essential for analysis
This file contains the complete type definitions for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read and study this type definition file as your absolute first action to understand its API and structure:
'node_modules/@dxtmisha/functional/ai-types.md'

---

# @dxtmisha/functional-basic
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/functional-basic'.

## Project context: Investigation required
Core Purpose: This library provides a comprehensive, isomorphic toolkit for web applications, specifically focusing on SSR-ready API interaction, state-consistent storage (Cookies, Local/SessionStorage, ServerStorage), internationalization (i18n), and robust DOM event/UI management.

Key Expositions:
- Api: Centralized HTTP client managing requests, hydration, caching (ApiCache), and centralized error handling (ApiErrorStorage).
- Storage: Persistent utilities including DataStorage (local/session), CookieStorage, and ServerStorage (SSR-aware).
- Geo & Locale: GeoInstance, GeoIntl, and GeoFlag provide location-aware formatting (currencies, dates, numbers, units, phone masks).
- UI/Utility: Meta management (Meta, MetaOg, MetaTwitter), event handling (EventItem), icon management (Icons), and search utilities (SearchList).
- Formatting: Formatters class for templated data manipulation (currency, date, pluralization, unit conversion).

Triggers for Studying ai-types.md:
- When implementing API integration (Api, ApiFetch, ApiMethod).
- When configuring global error handling (ErrorCenter, ApiError).
- When managing SSR state or hydration (ServerStorage, ApiHydration).
- When handling localization (Geo, GeoIntl, Translate, Formatters).
- When configuring complex data search logic (SearchList, SearchColumns).
- When defining custom meta-tags or Twitter/Open Graph cards (Meta, MetaOg, MetaTwitter).

Integration Context: This library acts as a foundational service layer. It is designed to be injected or used as a singleton across the application stack, bridging client-side DOM operations with server-side context in SSR frameworks. It manages the lifecycle of data, authentication headers, and global configuration, serving as an abstraction layer over native Browser/Node.js APIs like fetch, Cookies, and BroadcastChannel.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
This is the basic functional library (@dxtmisha/functional-basic). It contains framework-agnostic algorithms, utilities, and classes.

ATTENTION FOR VUE ENVIRONMENT:
If you are developing in Vue, ALWAYS look for the required functionality (composables, reactive wrappers) inside the `@dxtmisha/functional` library FIRST.
And ONLY if there is no reactive or Vue-specific analog there, you may use the functionality directly from this library (@dxtmisha/functional-basic).

=============================================================================
CLASS STRUCTURE & CODING STANDARDS (RULES FOR AI)
=============================================================================

To maintain consistency and high industrial quality across the dxt-ui codebase, all TypeScript classes inside `@dxtmisha/functional-basic` must strictly adhere to the following rules regarding structure, member ordering, and styles.

1. ORDER OF MEMBERS WITHIN A CLASS
Members in every class MUST be ordered in the following sequence:

   A. Class Properties / Member Variables:
      - Placed at the very top of the class body.
      - Ordered by visibility: Public first, then Protected, and Private last.
      - Within each visibility level, group by logical connection or alphabetically.
      - Initialize default values directly on declaration when possible.

   B. Constructor:
      - Placed immediately after all property declarations.
      - Parameter properties (e.g., `protected url: string`) are allowed to simplify declaration.

   C. Public Methods:
      - Placed after the constructor.
      - Grouped logically:
        1. Getters, checkers, and status-check methods (e.g., `is*`, `get*`).
        2. Setters and configuration methods (e.g., `set*`).
        3. Core executors and action methods (e.g., `request()`, `fetch()`, `show()`).

   D. Protected Methods:
      - Placed after all public methods.
      - Contain internal utility and helper logic accessible to subclasses.

   E. Private Methods:
      - Placed at the very end of the class.
      - Strict encapsulation of internal logic.

2. CODING & STYLE CONVENTIONS
   - Naming:
     * Classes: PascalCase (e.g., `LoadingInstance`).
     * Methods & Properties: camelCase (e.g., `registrationEvent`, `registrationList`).
     * Constants inside files: UPPER_SNAKE_CASE (e.g., `LOADING_EVENT_NAME`).
   - TypeScript Safety:
     * Never use `any`. Use generic parameters or `unknown` if the type is dynamic/undefined.
     * Explicitly declare return types for ALL public, protected, and private methods (including `void`).
     * Use interfaces/types to define structural contracts for complex inputs and outputs.
   - SSR Isolation (Server-Side Rendering):
     * The library must be fully isomorphic and safe for SSR.
     * Avoid storing request-specific state in global/static class properties directly.
     * Use `ServerStorage.get('key', () => new Instance())` for request-isolated singletons.
     * Use `isDomRuntime()` checks before accessing browser-only APIs like `window`, `document`, or `location`.

=============================================================================
DEVELOPER GUIDE: USING `@dxtmisha/functional-basic` AS A LIBRARY
=============================================================================

This section contains instructions and code guidelines for AI models on how to import and use the framework-agnostic utilities, classes, and helper functions provided by this library in client packages or applications.

---

### 1. HTTP Client (`Api` and `ApiInstance`)

The library provides both a static global class `Api` and an instantiable `ApiInstance` wrapper around the native `fetch` API. They support cancellation, caching, interceptors, error handling, and loading states.

#### Configuration
```typescript
import { Api } from '@dxtmisha/functional-basic';

// Set base origin and API path
Api.setOrigin('https://api.example.com');
Api.setUrl('/api/v1');

// Setup global request defaults (e.g., query params sent with every request)
Api.setRequestDefault({ client: 'web' });

// Setup global headers (can pass a callback for dynamic values)
Api.setHeaders(() => ({
  Authorization: `Bearer ${localStorage.getItem('token') || ''}`,
}));
```

#### Making Requests
```typescript
// Simple request: defaults to GET
const users = await Api.request<User[]>('users');

// Explicit methods
const profile = await Api.get<User>({ path: 'profile' });
const updated = await Api.post<User>({
  path: 'profile',
  request: { name: 'New Name' }, // Request payload
});
```

#### Interceptors (Preparation and End Lifecycle Hooks)
```typescript
// Preparation hook: runs before fetch executes
Api.setPreparation(async (apiFetch) => {
  // Can mutate apiFetch settings or inject headers
  if (apiFetch.auth) {
    apiFetch.headers = { ...apiFetch.headers, 'X-Auth-Required': 'true' };
  }
});

// End hook: runs after response is received
Api.setEnd(async (response, apiFetch) => {
  if (response.status === 401) {
    // Perform token refresh or trigger sign-out
    return { reset: true }; // Resets request/attempts or signals failure
  }
  return {};
});
```

#### Local caching with `ApiCache`
```typescript
import { ApiCache } from '@dxtmisha/functional-basic';

// Cache responses client-side
await ApiCache.set('custom-cache-key', data, 60000); // age in ms
const cached = await ApiCache.get<MyDataType>('custom-cache-key');
```

---

### 2. State & Storage Management

The library features SSR-safe classes to manipulate `localStorage`/`sessionStorage`, cookies, and server-side contexts.

#### `DataStorage` (localStorage / sessionStorage)
Safely wraps storage with optional namespace prefixes, fallback defaults, and expiration cache.
```typescript
import { DataStorage } from '@dxtmisha/functional-basic';

// Set global namespace prefix to avoid storage collisions
DataStorage.setPrefix('my_app_');

// Instantiate a persistent storage item (sessionStorage if 2nd arg is true)
const userStorage = new DataStorage<{ id: string }>('user_session', false);

// Save value
userStorage.set({ id: '123' });

// Get value (with default value fallback and optional cache limit in ms)
const user = userStorage.get({ id: 'guest' });

// Remove item
userStorage.remove();
```

#### `CookieStorage` & `Cookie`
Standard cookie manager.
```typescript
import { CookieStorage, Cookie } from '@dxtmisha/functional-basic';

// Global Cookie usage
CookieStorage.set('theme', 'dark', { age: 31536000, secure: true, sameSite: 'lax' });
const theme = CookieStorage.get<string>('theme', 'light');
CookieStorage.remove('theme');

// Instance-based Cookie manager
const tokenCookie = new Cookie<string>('auth_token');
tokenCookie.set('xyz123', { secure: true });
const token = tokenCookie.get();
```

#### `ServerStorage` (SSR Request-Isolated Storage)
Used to share and isolate singleton states safely across concurrent asynchronous server-side render requests.
```typescript
import { ServerStorage } from '@dxtmisha/functional-basic';

// Fetch or create a request-isolated instance singleton
const myServiceInstance = ServerStorage.get('myService', () => new MyService());
```

---

### 3. Geolocation & Localization (`GeoIntl`, `Geo`, `GeoFlag`, `GeoPhone`)

Standardizes localization using the native browser/Node `Intl` API.

#### `Geo`
Used to track and modify country, language, standard, and timezone information.
```typescript
import { Geo } from '@dxtmisha/functional-basic';

// Get current geo details
const currentCountry = Geo.getCountry(); // e.g., 'VN'
const currentLang = Geo.getLanguage();   // e.g., 'vi'

// Change locale configuration
Geo.set('en-US');
```

#### `GeoIntl`
Used for localized numbers, currencies, percentages, dates, relative times, and file sizes.
```typescript
import { GeoIntl } from '@dxtmisha/functional-basic';

const intl = new GeoIntl('en-US');

// Numbers
intl.number(123456.78); // '123,456.78'

// Currencies
intl.currency(99.99, 'USD'); // '$99.99'

// File Sizes
intl.sizeFile(1024 * 1024 * 5); // '5.00 MB'

// Dates & Time
intl.date(new Date(), 'date'); // 'Jun 18, 2026'
intl.date(new Date(), 'time'); // '10:48 PM'

// Relative time formatting
intl.relative(new Date(Date.now() - 3600000)); // '1 hour ago'

// Pluralization rules
// Words are passed as a string delimited by '|' (e.g. 'one|other' or 'one|few|many|other')
intl.plural(3, 'apple|apples'); // '3 apples'
```

#### Country Flags (`GeoFlag`) and Phone Masks (`GeoPhone`)
```typescript
import { GeoFlag, GeoPhone } from '@dxtmisha/functional-basic';

// Flags
const flagHelper = new GeoFlag();
const flagIcon = flagHelper.getFlag('VN'); // Vietnam flag emoji/svg code

// Phones
const phoneInfo = GeoPhone.getByPhone('+84900000000');
console.log(phoneInfo.phone); // Cleaned phone string
const mask = GeoPhone.toMask('84900000000'); // Returns formatted phone mask
```

---

### 4. DOM and Safe Event Management (`EventItem`)

`EventItem` provides memory-leak proof DOM event management by automating listener binding and unbinding.

```typescript
import { EventItem } from '@dxtmisha/functional-basic';

// Initialize the event listener (attached to element selector or Window)
const clickListener = new EventItem(
  window,
  'click',
  (event) => {
    console.log('Window clicked', event);
  },
  { passive: true }
);

// Start listening
clickListener.start();

// Stop listening (always call when cleaning up/destroying component contexts!)
clickListener.stop();
```

#### Scrolling & Clipboard Helpers
```typescript
import { goScrollSmooth, writeClipboardData, getClipboardData } from '@dxtmisha/functional-basic';

// Scroll element into view smoothly
goScrollSmooth(document.getElementById('target'));

// Copy text to clipboard
await writeClipboardData('Text to copy');

// Read from clipboard
const text = await getClipboardData();
```

---

### 5. Search & Formatting Utilities

#### `SearchList`
A highly-optimized client-side text searching class featuring search highlights.
```typescript
import { SearchList } from '@dxtmisha/functional-basic';

const users = [
  { name: 'John Doe', email: 'john@example.com' },
  { name: 'Jane Smith', email: 'jane@example.com' },
];

// Instantiation: items, fields to search in, current search query, search options
const searcher = new SearchList(users, ['name', 'email'], 'john');

// Execute and retrieve filtered results with highlight match markup
const results = searcher.to();
// returns: Array of results with exact matching highlights in matching keys
```

#### `Formatters`
Automates schema-based transformations of structured lists or objects.
```typescript
import { Formatters, FormattersType } from '@dxtmisha/functional-basic';

const rawData = { price: 12000, date: '2026-06-18' };

const formatter = new Formatters({
  price: { type: FormattersType.currency, options: 'USD' },
  date: { type: FormattersType.date, options: { month: 'long', year: 'numeric' } }
}, rawData);

const formatted = formatter.to();
// { price: '$12,000.00', date: 'June 2026' }
```

---

### 6. General Utility Functions

Core lightweight utilities:
- `isFilled(value)`: Checks if string, array, object, boolean or number has filled content. Returns `false` for `[]`, `{}`, `''`, `null`, `undefined`.
- `isDomRuntime()`: Safe isomorphic environment check. Returns `true` if code is running in a browser runtime.
- `copyObject(value)`: Performs a quick, deep object clone.
- `anyToString(value)`: Converts any type to its clean string representation.
- `sleep(ms)`: Promisified setTimeout wrapper for async delay.

```typescript
import { isFilled, isDomRuntime, copyObject, sleep } from '@dxtmisha/functional-basic';

if (isDomRuntime()) {
  console.log('Running in browser');
}

if (isFilled(myArray)) {
  const cloned = copyObject(myArray);
}

await sleep(500);
```

## Project types: Essential for analysis
This file contains the complete type definitions for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read and study this type definition file as your absolute first action to understand its API and structure:
'node_modules/@dxtmisha/functional-basic/ai-types.md'

---

# @dxtmisha/nitro-basic
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/nitro-basic'.

## Project context: Investigation required
Core Purpose: This library provides a specialized infrastructure layer for building and orchestrating Vue 3 applications within a Nitro (server-side) ecosystem. It facilitates SSR-to-client hydration, request lifecycle management, and application bootstrapping for complex Vue SSR architectures.

Key Expositions:
- App Bootstrapping: uiCreateApp, uiCreateServerApp, and uiCreateClientApp manage the lifecycle and initialization of Vue instances, handling routing, storage, and SSR rendering configurations.
- Server Utilities: getRequestHref, getRequestOrigin, and getRequestUrl provide normalized access to request metadata; initApi and initHeaders inject request-specific state.
- Plugin & Storage Management: initCookieStorage, initServerStorage, and initPluginApiCache integrate stateful storage into the Vue dependency injection container.
- Router Orchestration: initServerRouter and uiCreateSsrRouter manage the Vue Router lifecycle, specifically handling server-side state resolution to prevent hydration mismatches.
- UI/Bootstrap Helpers: uiBootstrapServer, uiBootstrapClient, and uiId manage element identity and global environmental setups for SSR environments.

Triggers for Studying ai-types.md:
- Implementing custom SSR rendering pipelines.
- Extending or overriding the default Nitro app integration logic.
- Debugging hydration mismatches or state synchronization between client and server.
- Configuring custom storage providers or API caching mechanisms within the Nitro context.
- Extending NitroAppOptions or NitroAppBasicConfig definitions for specific architectural requirements.

Integration Context: This library acts as the middleware and configuration backbone between a Nitro server environment and a Vue 3 frontend. It interfaces directly with Vue Router, NitroPack, and @dxtmisha/functional plugin systems, serving as the bridge for transporting state (cookies, headers, storage) from the server request to the rendered application.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
INFRASTRUCTURE LIBRARY (SSR/NITRO):
This package serves as the foundation for building Server-Side Rendering (SSR) applications using Nitro and Vue 3. It handles low-level operations for headers, storage, cookies, and server-side routing.

1. PURPOSE: The library is used exclusively for initializing and configuring the application's server infrastructure. it includes server bootstrap mechanisms (`uiBootstrapServer`), SSR application creation (`uiCreateSsrApp`), and Nitro plugins.
2. USAGE RESTRICTION: Functions and mixins from this package ARE NOT intended for use within regular Vue components or application business logic. All tools required for daily development should be imported from the corresponding high-level packages (e.g., `@dxtmisha/functional` or `@dxtmisha/d1`).
3. DO NOT CONNECT: Avoid direct inclusion of this package in the user interface. It is responsible for the server's "skeleton" and its configuration, which should remain hidden from the application developer.

Study this package only if you need to modify the server lifecycle logic, server request handling, or state synchronization mechanisms between the server and the client (hydration).

=============================================================================
DEVELOPER GUIDE: USING `@dxtmisha/nitro-basic` AS A LIBRARY
=============================================================================

This section contains instructions and code guidelines for AI models on how to import and use the server-side rendering (SSR), bootstrapping, and server request lifecycle APIs provided by this library in backend entry points or server-side plugins.

---

### 1. Application Initialization & Bootstrapping

These functions set up Vue 3 application instances and manage their execution flow across client and server runtimes.

#### `uiCreateApp`
Sets up the base Vue application instance, Vue Router, and global options.
```typescript
import { uiCreateApp } from '@dxtmisha/nitro-basic';
import AppRoot from 'node_modules/@dxtmisha/nitro-basic/App.vue';

const { app, router, options } = uiCreateApp(AppRoot, {
  appRouter: { routes: myRoutes },
});
```

#### `uiCreateClientApp`
Hydrates the Vue application on the client-side.
```typescript
import { uiCreateClientApp } from '@dxtmisha/nitro-basic';

// Initialized inside browser entry point (e.g., main.ts / client.ts)
await uiCreateClientApp(app, '#app', router, options, async (appInstance) => {
  // Pre-mount operations (e.g., register client-only plugins)
});
```

#### `uiCreateServerApp`
Sets up the server render context, executes routing parameters, extracts headers, lang properties, meta configurations, and executes server pre-render actions.
```typescript
import { uiCreateServerApp } from '@dxtmisha/nitro-basic';

// Executes inside server handler / Nitro request lifecycle
const ssrResult = await uiCreateServerApp(
  app,
  nodeRequest, // Incoming Request
  router,
  options,
  async (appInstance) => {
    // Pre-render operations (e.g., seed stores, register plugins)
  },
  ssrContext,
  htmlTemplateBody
);

console.log(ssrResult.appHtml);        // Rendered Vue HTML string
console.log(ssrResult.scriptsJson);    // Hydration data script tags
console.log(ssrResult.teleportsHtml);  // Teleport block targets
```

---

### 2. Request Metadata & Headers

Utilities to extract and evaluate incoming headers and request properties.

#### `useHeaders`
A server-side helper composable to reactively obtain headers of the active incoming request.
```typescript
import { useHeaders } from '@dxtmisha/nitro-basic';

// Extract a specific header property
const userAgent = useHeaders('user-agent');

// Get the entire Headers object
const allHeaders = useHeaders();
```

#### Request URL parsers
```typescript
import { getRequestHref, getRequestOrigin, getRequestUrl } from '@dxtmisha/nitro-basic';

// Returns the full href from request metadata
const href = getRequestHref(request);

// Returns origin domain
const origin = getRequestOrigin(request);
```

---

### 3. Server Storage & Lifecycle Initializers

These initializers seed isomorphic singletons and dependency injection containers with details resolved from the incoming server request.

```typescript
import { initApi, initCookieStorage, initServerStorage, initHeaders } from '@dxtmisha/nitro-basic';

// Initialized inside server entry points before rendering
initApi(request);            // Configures base fetch url and request details
initCookieStorage(app, request); // Extracts cookies and seeds CookieStorage
initServerStorage(app);       // Connects ServerStorage request-isolated singletons
initHeaders(app);            // Attaches incoming request headers to context
```

---

### 4. Identity & Bootstrap Helpers

```typescript
import { uiBootstrapClient, uiBootstrapServer, uiId } from '@dxtmisha/nitro-basic';

// Bootstraps element ID generator and settings
uiId();

// Server-side initialization
uiBootstrapServer();

// Client-side initialization
uiBootstrapClient();
```

## Project types: Essential for analysis
This file contains the complete type definitions for the project. As soon as you start working with this project (using any of its components/functionality, importing from it, or editing its code), you MUST read and study this type definition file as your absolute first action to understand its API and structure:
'node_modules/@dxtmisha/nitro-basic/ai-types.md'

---

# @dxtmisha/styles
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/styles'.

## Project context: Investigation required
A foundational SCSS framework and dynamic style generation engine designed for building scalable, multi-theme design systems. Its primary function is to provide a comprehensive set of low-level SCSS mixins, functions, and a sophisticated configuration-driven property generation system. The core architecture centers around dynamic CSS variable management, specifically for color spaces where RGB channels and opacity are decoupled (using --sys-* and --sys-palette-* prefixes) to allow for real-time reactive theme modifications and complex transparency effects.

An AI should study this library when: 1. Investigating the generation of global CSS variable tokens for colors, dimensions, and typography. 2. Developing or modifying UI components that require RTL (Right-to-Left) support through the library's directional abstractions (dir.scss). 3. Implementing complex layout patterns using semantic mixins for Flexbox orchestration, adaptive spacing, and relative positioning. 4. Understanding the 'Properties' engine (src/styles/properties) which programmatically transforms SCSS maps into a suite of atomic utility classes and root-level variable definitions. 5. Managing design system palettes and shade scales where automated accessibility and consistency are required.

The library is architected as a modular SCSS-first system, utilizing @use and @forward for clean namespace management. It functions as the visual source of truth for all @dxtmisha packages, integrating directly with framework-specific plugins to inject baseline styles and configuration-dependent utility layers. It features specialized modules for scrollbar customization, transform matrices, and complex pseudo-selector management, ensuring a consistent visual implementation across different execution environments.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
You are an expert in system styling using the `@dxtmisha/styles` library. Write clean, reusable SCSS code following these rules:

Only mixins from the following files are available for use:
- `node_modules/@dxtmisha/styles/src/styles/variables.scss`
- `node_modules/@dxtmisha/styles/src/styles/color.scss`
- `node_modules/@dxtmisha/styles/src/styles/content.scss`
- `node_modules/@dxtmisha/styles/src/styles/dimension.scss`
- `node_modules/@dxtmisha/styles/src/styles/flex.scss`
- `node_modules/@dxtmisha/styles/src/styles/font.scss`
- `node_modules/@dxtmisha/styles/src/styles/margin.scss`
- `node_modules/@dxtmisha/styles/src/styles/media.scss`
- `node_modules/@dxtmisha/styles/src/styles/padding.scss`
- `node_modules/@dxtmisha/styles/src/styles/position.scss`
- `node_modules/@dxtmisha/styles/src/styles/scrollbar.scss`
- `node_modules/@dxtmisha/styles/src/styles/transform.scss`

GENERAL USAGE RULES:
1. Use ready-made mixins: If a ready-made mixin is already available in the library for a task, use it.
2. Code simplicity: If a CSS property consists of a single specific value (e.g., `display: block` or `position: absolute`), use the standard CSS property. Do not use mixins where they do not provide a systemic advantage.
3. Grouping properties: To maintain clean and readable code, always group CSS properties and mixins by meaning (e.g., positioning, box model, text styles, colors, etc.).

CLASS NAMING AND STRUCTURE:
1. The name of the main (root) CSS class must always strictly match the name of the component itself.
2. Use a BEM-like approach based on the component name for naming internal elements and modifiers.

WORKING WITH COLORS AND PALETTES:
All mixins for working with colors, opacity, and palettes are defined in `node_modules/@dxtmisha/styles/src/styles/color.scss`.

1. Opacity Management: In a number of system components, an approach is used where RGB channels and opacity are stored in different tokens. In such cases, you must use mixins for correct opacity changes:
   - `@include backgroundOpacity(0.5)` — changes only the background opacity.
   - `@include colorOpacity(0.8)` — changes only the text opacity.
   This allows modifying the alpha channel of a system color without overriding its base.

2. Regular Mixins vs Palette:
   - Regular mixins (`backgroundColor`, `color`): Accept a specific color (HEX, RGB) or the result of the `getColor` function. They set the color "as is"—it remains static even when changing global palette classes on parent elements.
   - Palette Mixins (`paletteBackgroundColor`, `paletteColor`, etc.): Designed for working with semantic system variables (e.g., `'--d1-sys-palette-primary'`).
     Using these mixins guarantees automatic support for CSS variable "routing":
     * Dynamic Binding: A cascading link with `basic` level variables (e.g., `basic600`) is created.
     * Automatic Repainting: When adding a palette class to a parent (e.g., `.d1-palette--yellow`), the component instantly changes color while maintaining the mathematically calculated contrast between background and text without manual style overrides.

MEDIA QUERIES AND ADAPTIVITY:
For implementing adaptive layout, it is strictly FORBIDDEN to write direct `@media` queries using hardcoded values (e.g., `768px`).

1. Use Mixins: Always use mixins from `node_modules/@dxtmisha/styles/src/styles/media.scss`. They automatically retrieve breakpoint values from the system configuration.
2. Main Mixins:
   - `@include mediaMinWidth($width)` — for a mobile-first approach. Applies styles from the specified width and up.
   - `@include mediaMaxWidth($width)` — applies styles up to the specified width (breakpoint width minus 1px).
   - `@include mediaMinMaxWidth($min, $max)` — applies styles within a strictly defined width range.
3. Available Breakpoints: The set of available keys (e.g., `sm`, `md`, `lg`) depends on the configuration of the specific design system and may vary across different projects.
4. Container Queries: The library also supports `@container` queries through `containerMinWidth`, `containerMaxWidth`, and `containerMinMaxWidth` mixins, following the same breakpoint logic.

Example:
```scss
.my-element {
  width: 100%;

  @include mediaMinWidth('md') {
    width: 50%; // Change width for screens from md and up
  }
}
```

=============================================================================
DEVELOPER GUIDE: USING `@dxtmisha/styles` AS A LIBRARY
=============================================================================

This section contains instructions and code guidelines for AI models on how to import and use the design system variables, colors, typography, layout, and media query mixins provided by this library in stylesheets.

---

### 1. Importing Styles & Properties

Styles can be imported modularly depending on performance and configuration needs.

```scss
// Import all variables, mixins, utilities, and helper styles
@import '@dxtmisha/styles';

// Import ONLY the core design system CSS properties and variables (lighter bundle)
@import '@dxtmisha/styles/properties';
```

---

### 2. Styling with Color Mixins

Use semantic color utilities to assign text, background, and borders.

```scss
.button {
  // Set background-color to primary theme color
  @include backgroundColor(primary);

  // Apply base style rule to use color contrast logic
  @include backgroundAsColor;

  // Add text color
  @include color(white);
}

.alert {
  // Sets color from semantic danger token
  @include color(danger);

  // Set transparency for background using the system opacity mixin
  @include backgroundOpacity(0.1);
}
```

#### Palette variables (Routing & Re-theming)
```scss
.card {
  // Binds the background color dynamically to the semantic primary palette token.
  // This color will automatically re-render when a parent container's palette changes.
  @include paletteBackgroundColor('--d1-sys-palette-primary');
}
```

---

### 3. Flexbox Layouts

Rather than writing verbose flex rules, use layout mixins to define containers.

```scss
.container {
  @include flex;
  @include flexDirection(column);
  @include justifyContent(center);
  @include alignItems(center);
}
```

---

### 4. Typography & Spacing

Ensure text styles and container spacings align with design variables.

```scss
.title {
  @include font(titleLarge); // Sets font-size, weight, line-height
}

.body {
  @include font(bodyMedium);
}

.box {
  @include padding(md); // Applies consistent system padding
  @include margin(lg);  // Applies consistent system margin
  @include radius;      // Applies standard border-radius token
}
```

---

### 5. Responsive Design Breakpoints

Always leverage standard breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) instead of writing raw media query widths.

```scss
.responsive-box {
  display: block;

  @include mediaMinWidth('md') {
    display: flex; // Converts to flex for tablets and wider screens
  }

  @include mediaMinWidth('lg') {
    max-width: 960px; // Centers and limits width on desktops
  }
}
```

#### Container Queries
Evaluate layouts based on the parent component's size.
```scss
.card-content {
  display: grid;

  @include containerMinWidth('sm') {
    grid-template-columns: repeat(2, 1fr);
  }
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
3.  **Documentation**: Use JSDoc/TSDoc formatted strictly according to the guidelines in [jdoc.txt](file:///Volumes/T7/Code/dxt-ui/ai-prompts/jdoc.txt). All comments must follow a mandatory bilingual standard (English and Russian):
    - **Classes/Functions/Methods**: Detailed multiline descriptions (English on top, Russian on bottom). Use `@param` and `@returns` with bilingual descriptions separated by ` / `.
    - **Interfaces, Types, Enums, and Properties**: Compact single line (or double line if long) with a forward slash separator: `/** English / Russian */`.
4.  **Styles**: Use SCSS. Modifying the base library styles is strictly prohibited unless explicitly requested.
5.  **Dependencies**: Use only the packages specified in `package.json`. Zero tolerance for hallucinations.
6.  **Strict Adherence**: Do strictly and only what is requested in the user's prompt. Never make unsolicited changes, refactorings, cleanups, or modifications to other files unless explicitly instructed by the user.

Generate code in a way that allows it to be copied and run immediately (**Copy-Paste Ready**).