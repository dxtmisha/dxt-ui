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