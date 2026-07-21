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
   - Superficial study of files (e.g., scanning only filenames, function signatures, or performing quick keyword grep searches without reading the actual file contents via `view_file`) is strictly forbidden. You MUST read and study the files completely and thoroughly to understand their full implementations and logic.
   - If any instructions, paths, or files are specified as located inside `node_modules/` or any other external/linked directory, you MUST first check if this package exists locally in the workspace (for example, under `packages/`). If it does exist locally, you MUST resolve the paths to the local workspace package directory and study/modify the local source files instead.
   - **CRITICAL FIRST STEP:** If any project, module, or instruction contains links or references to specific files (e.g. types, developer guides, descriptions), you MUST study all these referenced files as your absolute first action. As soon as you start working with a project, or notice that it is imported/used in the code you are working with, you must immediately read and study all these referenced files before doing any planning, proposing code changes, or writing code. This is mandatory and applies even if the files are located in `node_modules/` (always resolve them to the local workspace directory first if they exist locally).
   - **STRICT BLOCKING GUARD (CHRONOLOGICAL ORDER RULES):**
     1. As your ABSOLUTE FIRST ACTION, before taking any other steps, you MUST check if the `ai-memory.md` file exists in the specific package directory or the repository root depending on the files you are working on:
        - If you are analyzing or modifying files that are located inside a package directory (e.g., any subdirectory under `packages/` like `packages/constructor/`, `packages/scripts/`, etc.), you MUST read/write the `ai-memory.md` file ONLY within that specific package directory (e.g. `packages/constructor/ai-memory.md` or `packages/scripts/ai-memory.md`). You are strictly FORBIDDEN from using, reading, or writing the global `ai-memory.md` in the repository root in this case.
        - If and only if the files you are working with are root-level configurations or not part of any package under `packages/`, you may read/write the `ai-memory.md` file in the repository root.
        If the required local package-level `ai-memory.md` (or root `ai-memory.md` for root-level files) exists, you MUST read it using `view_file`. If it does NOT exist, you MUST CREATE IT immediately using `write_to_file` as an empty file with only a single newline (no placeholder text, comments, or intro text).
     2. As your ABSOLUTE SECOND ACTION, you MUST use the `view_file` tool to read the master `ai-prompt.md` file located in the project root. You MUST read the descriptions of ALL libraries mentioned in this file. If there is even a 1% chance that a library mentioned in `ai-prompt.md` contains functionality or utilities relevant to your task, you are OBLIGED to read and study all files associated with that library that are specified in the `ai-prompt.md` under its respective section. You are strictly forbidden from writing custom logic (helpers, styles, configs, classes) without first performing an exhaustive check of the workspace's existing infrastructure via `grep_search` or `list_dir`.
     3. Identify all paths, directories, or packages involved in the user request.
     4. Scan the prompt for sections corresponding to those paths.
     5. Identify all paths to auxiliary documentation, types, or developer guides (such as `ai-types.md` or `ai-developer.md`) mentioned in those sections.
     6. You MUST use the `view_file` tool to read and study ALL of these referenced files (specifically, if type files like `ai-types.md` or developer guides like `ai-developer.md` are specified for the packages/projects you are working on, as well as the types/documentation files of any package dependencies listed in the package's package.json, you MUST read them completely) BEFORE calling `list_dir` on sub-folders, writing any plans/checklists, or proposing/making code changes. Bypassing this order is a critical protocol violation.

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
   - Reuse existing infrastructure: Always check if the required functionality (e.g., API requests, state management, utilities) already exists in the project's core packages/modules or standard libraries before implementing it from scratch. To do this, you MUST read their respective type definitions or documentation files (such as `ai-types.md` or similar index files) to inspect their complete API surfaces and list of exported helpers.
   - Do not modify global styles or styles of base UI components unless explicitly requested.

7. **Security and Performance**:
   - Write error-proof code (guard clauses, optional chaining `?.`, nullish coalescing `??`).
   - Use explicit `try-catch` blocks for asynchronous operations. Never swallow errors silently; handle them appropriately or throw meaningful error messages.
   - Avoid redundant calculations in loops and heavy operations in reactive dependencies.

8. **Aesthetics and Conciseness**:
   - Code must be beautiful. Use logical indentation and group code by meaning.
   - Save tokens by avoiding redundant comments where the code speaks for itself.

9. **Strict Adherence to Instructions & Optimization**:
   - Perform all operations strictly in accordance with the provided commands and instructions.
   - Avoid guessing or performing unrelated extra actions. However, you are encouraged to analyze the requirements, optimize the code, and propose or implement better technical solutions directly related to achieving the task's goals.
   - Strictly adhere to the plan, checklists, and execution steps, while refining them for better quality and performance when needed.

10. **AI Workspace Memory (`ai-memory.md`)**:
    - As enforced by the STRICT BLOCKING GUARD, `ai-memory.md` MUST be created and read locally inside the root of the specific package you are working with (e.g., `packages/constructor/ai-memory.md` for code in `packages/constructor`).
    - Writing or reading `ai-memory.md` in the repository root when working on code inside a package is a critical violation of these rules.
    - Whenever you receive feedback, corrections, or instructions from the developer, you MUST update that specific package's local `ai-memory.md` file.
    - Explicit Memorization Requests: If the developer explicitly instructs you to "remember this", "keep this in mind", or makes a similar request regarding conventions or rules, you MUST immediately record this information in the relevant local `ai-memory.md` file.
    - Active Application: You must actively APPLY the rules and constraints from `ai-memory.md` to all code you generate. Rules in this file override general assumptions and have the highest priority.
    - The PRIMARY PURPOSE of this file is to store critical coding guidelines, specific architectural constraints, and "do's and don'ts" (e.g., "do not use X; use Y instead") to ensure the AI writes compliant, correct code.
    - DO NOT store change logs, lists of modified files, or commit-like messages (e.g., "updated file X, updated package Y"). Keep the file clean, concise, and focused strictly on active rules, design decisions, and coding standards.
    - DO NOT specify absolute file paths (e.g., file:///... or machine-specific directories like /Users/...) in the memory file. All references to files inside the project must use relative paths (e.g., src/types/textTypes.ts) so that the file works seamlessly for other developers on different operating systems and computers.

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
### Core Purpose
A high-level utility library designed for Vue 3 providing architectural abstractions for component design, reactive state management, sophisticated API orchestration with SSR support, and localized geographic/unit formatting.

### Key Expositions
*   **Design Architecture:** `DesignConstructorAbstract`, `DesignComponents`, and `DesignAbstract` provide a structured class-based inheritance model for building complex, reactive functional components with automatic lifecycle handling, style/class management, and slotted rendering.
*   **API Orchestration:**
    *   `useApiRef`: Centralized reactive API request handler with built-in SSR, caching, transformation, validation (supporting `@effect/schema`), and error handling.
    *   `useApiManagementRef` / `useApiManagementAsyncRef`: High-level orchestration for CRUD operations (GET/POST/PUT/DELETE) with client-side searching, list formatting, and atomic mutation state management.
    *   Standard wrappers: `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete` for cleaner endpoint interaction.
*   **Reactive Utilities:** 
    *   `executeUse`: A factory for creating managed singletons (`global`, `provide`, `local`) to ensure unified state across component trees.
    *   `useTranslateRef`, `useStorageRef`, `useCookieRef`, `useSessionRef`: Reactive bridges to local persistence and internationalization.
    *   `computedAsync`, `computedEternity`: Advanced reactive primitives for asynchronous data flow and on-demand caching.
*   **Data Formatting:** `GeoIntlRef`, `GeoUnitRef`, and `useFormattersRef` provide reactive, localized formatting for numbers, currencies, units (metric/imperial conversion), and dates.
*   **List & Search Logic:** `ListDataRef` and `useSearchRef` manage complex hierarchical or flat data structures with optimized search and filtering capabilities.

### Triggers for Studying ai-types.md
Mandatory to review `ai-types.md` when:
1.  **System Integration:** You are implementing new API endpoints, configuring `dxtFunctionalPlugin`, or setting up global state providers (`executeUseProvide`).
2.  **Schema Validation:** You are utilizing `validateResponseContract` or `validateRequestContract` and require the expected structure for `ApiDataValidation` or error storage interfaces.
3.  **Component Construction:** You are extending `DesignConstructorAbstract` or implementing custom component modifications.
4.  **Type Mapping:** You encounter complex generic constraints in the `useApiManagementRef` signature or `Constr` prefixed utility types (e.g., `ConstrBind`, `ConstrOptions`, `ConstrEmit`).

### Integration Context
The library acts as a foundational service layer in the system stack. It integrates directly with Vue 3's composition API, Vue Router for navigation, and `@dxtmisha/functional-basic` for core network and utility logic. It is intended to be used as a singleton-pattern service provider within an application's plugin system via `dxtFunctionalPlugin` to facilitate consistent SSR state hydration and global dependency injection.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
# @dxtmisha/functional Reference

Vue 3 reactive utilities, composables, and classes built on `@dxtmisha/functional-basic`. Refer to [ai-types.md](file:///Volumes/T7/Code/dxt-ui/packages/functional/ai-types.md) for full signatures, types, and exported methods.

---

## Usage Rules & Strategies

1. **Priority**: Always prioritize `@dxtmisha/functional` over `@dxtmisha/functional-basic` in Vue environments.
2. **API & State (`useApi*` / `executeUse*`)**:
   - **Never** call `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`, `useApiRequest`, `useApiRef`, `useApiAsyncRef`, `useApiManagementRef`, `useApiManagementAsyncRef` directly inside components (SFC).
   - Move all API configurations into separate files (services/stores).
   - Wrap setups in `executeUse` factories (`executeUseLocal`, `executeUseGlobal`, `executeUseProvide`) to ensure singletons, prevent duplicate requests, and process data (mappings, skeletons) in the callback.
   - Components only import/call the singleton hook.

```typescript
import { executeUseGlobal, useApiManagementRef } from '@dxtmisha/functional';

export const useUserManagement = executeUseGlobal(() => {
  return useApiManagementRef(
    { path: '/api/users' },                       // GET
    { date: (v) => new Date(v).toLocaleString() }, // Formatters
    { columns: ['name', 'email'] },               // Search
    { path: '/api/users' },                       // POST
    { path: (o) => `/api/users/${o.id}` },        // PUT
    { path: (o) => `/api/users/${o.id}` }         // DELETE
  );
});
```

### `executeUse` Strategies:
- `executeUseLocal` (Preferred): Lazy-loaded when first called. Persists until session end.
- `executeUseGlobal`: Eagerly loaded at application startup (useful for critical configs, SDKs). Must be initialized via `executeUseGlobalInit()`.
- `executeUseProvide`: Scoped via `provide/inject` to a component tree branch (useful for form/tab hierarchies).

---

## Key API Examples

### 1. Storage & State (Reactive)
Reactively syncs Vue refs with browser storages or cross-tab broadcast channels.

```typescript
import { useStorageRef, useSessionRef, useCookieRef, useBroadcastValueRef, useHashRef } from '@dxtmisha/functional';

const theme = useStorageRef<'light' | 'dark'>('theme_key', 'light');
const step = useSessionRef<number>('form_step', 1);
const token = useCookieRef<string>('auth_token', '', { secure: true });
const syncState = useBroadcastValueRef<string>('active_channel', 'idle');
const hashPage = useHashRef<string>('page', 'home');
```

### 2. Geolocation & Internationalization
Static helpers and reactive wrappers for localization and translation.

```typescript
import { GeoRef, useGeoIntlRef, useTranslateRef } from '@dxtmisha/functional';

const currentCountry = GeoRef.getCountry();
const intl = useGeoIntlRef();
const formattedPrice = intl.currency(150, 'EUR');
const translations = useTranslateRef(['global.save', 'global.cancel']); // Or alias `t(...)`
```

### 3. SEO & Layout Utilities
Metadata manager and reactive scrollbar tracker to solve layout shifts.

```typescript
import { useMeta, ScrollbarWidthRef } from '@dxtmisha/functional';

const meta = useMeta();
meta.setTitle('Product Page');

const scrollbar = new ScrollbarWidthRef();
const w = scrollbar.width;
const hasScroll = scrollbar.is;
```

### 4. Advanced Reactivity Helpers
Helpers for resolving async data reactively or caching computations.

```typescript
import { computedAsync, computedEternity } from '@dxtmisha/functional';

const asyncData = computedAsync(async () => await fetchSomeData(activeId.value), 'loading...');
const cachedData = computedEternity(async () => await fetchStaticData(), 'loading...');
```

### 5. List & Search Orchestration
Orchestrates list state (selection, pagination, highlights) and performs debounced list searches.

```typescript
import { ListDataRef, useSearchRef } from '@dxtmisha/functional';

const listData = new ListDataRef(items, selectedId);
const isSelected = listData.isSelected;
const nextItem = listData.getSelectedNext();

const query = ref('search_term');
const { listSearch, loading, length } = useSearchRef(items, ['label'], query);
```

### 6. DOM & Lazy Rendering
Lifecycle-aware event listeners and IntersectionObserver wrappers.

```typescript
import { EventRef, useLazyRef } from '@dxtmisha/functional';

const keyListener = new EventRef(window, window, 'keydown', (e) => console.log(e.key));
const lazyManager = useLazyRef();
const isVisible = lazyManager.addLazyItem(elementRef);
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
### Core Purpose
The library provides an isomorphic utility framework for managing high-level application concerns in JavaScript/TypeScript environments (SSR and DOM). It includes robust abstractions for API communication (REST/Fetch), structured state management, DOM-safe event handling, internationalization, and reactive data storage.

### Key Expositions
*   **API & Networking**: `Api` (singleton interface), `ApiInstance` (core requester), `ApiCache` (request memoization), `ApiError` (centralized error handling), `ApiHydration` (SSR data serialization), and `ApiHeaders`.
*   **State & Storage**: `DataStorage` (persistent storage with prefixes/expiration), `ServerStorage` (SSR-safe context isolation), `CookieStorage` (isomorphic cookie management), `Query`/`Hash` (URL-state management), and `Global` (app-wide data).
*   **UI & Events**: `EventItem` (DOM-safe, optimized event management with `ResizeObserver` and `scroll-sync`), `LoadingInstance` (global loading state), and `ScrollbarWidth` (layout utility).
*   **Localization & Formatting**: `Geo` (locale/timezone management), `GeoIntl` (Intl API wrapper), `GeoUnit` (metric/imperial conversion), `Translate` (i18n), and `Formatters` (currency, number, date, and pluralization utility).
*   **Utilities & Data**: `Formatters`, `SearchList` (search matching/caching), `ResumableTimer`, and a suite of functional utilities for object cloning, string/date manipulation, and DOM operations.

### Triggers for Studying ai-types.md
Review `ai-types.md` whenever the following requirements arise:
1.  **API Integration**: You need to implement new request methods, custom error handling for specific HTTP status codes, or configure global API middleware (`wrapper`/`preparation`).
2.  **I18n/Formatting**: You are dealing with complex localization rules, unit conversions (Geo/Units), or pluralization requirements.
3.  **SSR Consistency**: You are implementing features that must function identically on both the server and client (Hydration, `ServerStorage`, or `Datetime` formatting).
4.  **Complex State**: You need to map or query data structures in memory using `SearchList` or utilize `BroadcastChannel` for cross-context messaging.

### Integration Context
The library acts as a foundational service layer between the application logic and the runtime environment. It is designed to be framework-agnostic but is particularly optimized for SSR-heavy environments (like Vue/React) where hydration of state (via `ServerStorage`) and safe access to global browser objects (via `isDomRuntime`) are critical. It wraps native `fetch`, `localStorage`, `sessionStorage`, `BroadcastChannel`, and `Intl` APIs into structured, type-safe, and singleton-accessible services.

## Project information: Core overview
This section contains essential information and the core overview of the project. Review this to understand the fundamental architecture and key features.
# @dxtmisha/functional-basic Reference

Framework-agnostic utility library. **Vue developers MUST search `@dxtmisha/functional` first**; use this ONLY if no reactive/Vue-specific analog exists.

---

## Coding Standards & Class Structure

### 1. Class Member Order
1. **Properties/Variables**: Top of class, ordered by visibility (`public` -> `protected` -> `private`). Initialize inline if possible.
2. **Constructor**: Follows properties. Parameter properties (e.g. `protected url: string`) allowed.
3. **Public Methods**:
   1. Getters, checkers, status methods (`is*`, `get*`).
   2. Setters & configuration (`set*`).
   3. Core executors & actions (`request()`, `fetch()`, `show()`).
4. **Protected Methods**: Internal helpers for subclasses.
5. **Private Methods**: Internal helper logic at the very bottom.

### 2. Style & Type Conventions
- **Naming**: Classes = `PascalCase`, Methods/Properties = `camelCase`, Constants = `UPPER_SNAKE_CASE`.
- **TypeScript**: No `any` (use `unknown`/generics). Explicit return types on ALL methods (including `void`). Export all types/interfaces. Suffix type files with `Types` (e.g., `*Types.ts`). Use `@effect/schema` for API schemas if present.
- **SSR Safety**: Isomorphic code. Do not store request-specific state in static/global variables. Use `isDomRuntime()` before accessing `window`/`document`/`location`. Use `ServerStorage.get(key, () => new Instance())` for request-isolated singletons.

---

## API Reference & Examples

### 1. HTTP Client (`Api`, `ApiInstance`, `ApiCache`)
```typescript
import { Api, ApiCache } from '@dxtmisha/functional-basic';

// Config
Api.setOrigin('https://api.example.com');
Api.setUrl('/api/v1');
Api.setRequestDefault({ client: 'web' });
Api.setHeaders(() => ({ Authorization: `Bearer ${localStorage.getItem('token') || ''}` }));

// Interceptors
Api.setPreparation(async (fetchOpts) => { if (fetchOpts.auth) fetchOpts.headers['X-Auth'] = '1'; });
Api.setEnd(async (res, fetchOpts) => res.status === 401 ? { reset: true } : {});

// Requests
const users = await Api.request<User[]>('users'); // default GET
const profile = await Api.get<User>({ path: 'profile' });
const updated = await Api.post<User>({ path: 'profile', request: { name: 'New' } });

// Cache
await ApiCache.set('key', { data: 1 }, 60000); // ms age
const cached = await ApiCache.get<{ data: number }>('key');
```

### 2. State & Storage Management
```typescript
import { DataStorage, CookieStorage, Cookie, ServerStorage } from '@dxtmisha/functional-basic';

// DataStorage (localStorage/sessionStorage)
DataStorage.setPrefix('my_app_');
const userStorage = new DataStorage<{ id: string }>('user_session', false); // true for sessionStorage
userStorage.set({ id: '123' });
const user = userStorage.get({ id: 'guest' }); // fallback default
userStorage.remove();

// Cookies
CookieStorage.set('theme', 'dark', { age: 31536000, secure: true, sameSite: 'lax' });
const theme = CookieStorage.get<string>('theme', 'light');
CookieStorage.remove('theme');

const tokenCookie = new Cookie<string>('auth_token');
tokenCookie.set('xyz123', { secure: true });
const token = tokenCookie.get();

// SSR Request-Isolated Storage
const myService = ServerStorage.get('myService', () => new MyService());
```

### 3. Geolocation & Localization
```typescript
import { Geo, GeoIntl, GeoFlag, GeoPhone } from '@dxtmisha/functional-basic';

// Geo state
const country = Geo.getCountry(); // e.g., 'VN'
const lang = Geo.getLanguage();   // e.g., 'vi'
Geo.set('en-US');

// Formatters (Intl)
const intl = new GeoIntl('en-US');
intl.number(123456.78);          // '123,456.78'
intl.currency(99.99, 'USD');      // '$99.99'
intl.sizeFile(1024 * 1024 * 5);  // '5.00 MB'
intl.date(new Date(), 'date');    // 'Jun 18, 2026'
intl.date(new Date(), 'time');    // '10:48 PM'
intl.relative(new Date(Date.now() - 3600000)); // '1 hour ago'
intl.plural(3, 'apple|apples');   // '3 apples' ('one|other' or 'one|few|many|other')

// Flags & Phones
const flag = new GeoFlag().getFlag('VN');
const phoneInfo = GeoPhone.getByPhone('+84900000000'); // .phone = cleaned string
const mask = GeoPhone.toMask('84900000000');
```

### 4. DOM, Safe Events & Helpers
```typescript
import { EventItem, goScrollSmooth, writeClipboardData, getClipboardData } from '@dxtmisha/functional-basic';

// Leak-proof Event management
const clickListener = new EventItem(window, 'click', (e) => console.log(e), { passive: true });
clickListener.start();
clickListener.stop(); // Call on destroy/cleanup!

// DOM / Clipboard
goScrollSmooth(document.getElementById('target'));
await writeClipboardData('text');
const text = await getClipboardData();
```

### 5. Search & Formatting Utilities
```typescript
import { SearchList, Formatters, FormattersType } from '@dxtmisha/functional-basic';

// Search List with highlights
const searcher = new SearchList([{ name: 'John Doe' }], ['name'], 'john');
const results = searcher.to(); // returns matching items with highlighted markup in matching keys

// Object Formatter
const formatter = new Formatters({
  price: { type: FormattersType.currency, options: 'USD' },
  date: { type: FormattersType.date, options: { month: 'long', year: 'numeric' } }
}, { price: 12000, date: '2026-06-18' });
const formatted = formatter.to(); // { price: '$12,000.00', date: 'June 2026' }
```

### 6. General Helpers
```typescript
import { isFilled, isDomRuntime, copyObject, anyToString, sleep } from '@dxtmisha/functional-basic';

isFilled([]); // false (works for strings, arrays, objects, numbers, booleans)
isDomRuntime(); // true if in browser
const cloned = copyObject({ a: 1 });
const str = anyToString(123);
await sleep(500);
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