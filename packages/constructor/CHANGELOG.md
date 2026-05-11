# Changelog

All notable changes to this project will be documented in this file.

## [0.57.6] - 2026-05-11

### Changed / Improved
- **Core Architecture**: Refactored internal `Field` classes (`FieldArrowInclude`, `FieldInputModeInclude`, `FieldPatternInclude`, `FieldTypeInclude`, `FieldValidationInclude`) from Vue `computed` properties to standard TypeScript getters to improve performance and simplify property access.
- **Mask**: Introduced a centralized `binds` computed property in the `Mask` class to manage input attributes and event listeners, streamlining the rendering logic in `MaskDesign.tsx`.
- **SSR Optimization**: Integrated `ClientOnlyInclude` into `FieldValidationInclude` to ensure native validation checks only run on the client side, enhancing hydration stability.
- **Input/Field**: Updated `FieldInclude` and `FieldAttributesInclude` to support the new getter-based property access, ensuring consistent behavior across the library.

## [0.57.5] - 2026-05-11

### Added
- **Header**: Expanded `HeaderComponents` types to include `IconComponentInclude`, enabling native icon support within header components.
- **Checkbox**: Implemented a hidden input strategy to support custom values for the unchecked state.
- **Testing**: Added interactive demo pages for `Mask` and other core components to facilitate better manual and automated testing.

### Changed / Improved
- **Mask**: Refactored `MaskEmit` logic to explicitly map native `input` and `change` events to `inputLite` and `changeLite` emitters, ensuring more reliable event propagation.
- **Checkbox**: Major redesign of `CheckboxDesign.tsx` using granular rendering methods and improved accessibility standards via `AriaStaticInclude`.
- **AI Integration**: Updated documentation and internal types to support the new automated recursive AI prompt generation system.
- **Figma Synchronization**: Synchronized package configurations and documentation with Figma-related packages (v0.1.0 release).
- **Core Refactoring**: Performed a general overhaul of core components for better design token integration and SSR stability.
- **Maintenance**: Standardized `prepublishOnly` scripts and simplified script naming conventions across the package.

## [0.57.0] - 2026-05-02

### Added
- **ClientOnly**: Introduced a new constructor for components that should only render on the client side, improving hydration consistency.
- **PageArea**: Added a new constructor for managing standardized page area layouts.
- **Functions**: Added `getClassTagAStatic` utility for generating CSS classes for static links.
- **Documentation**: Added comprehensive bilingual (EN/RU) MDX documentation and structured descriptions for `ClientOnly` and `PageArea`.

### Changed / Improved
- **Progress**: Refactored the component to utilize `ClientOnlyInclude` and optimized lifecycle management (using `onMounted`) for better SSR stability.
- **Actions**: Integrated with `AreaInclude` to support the new area-based layout system.
- **SnackbarItem**: Integrated with `AreaInclude` and refined internal logic for improved consistency.
- **JSDoc**: Added detailed bilingual documentation for the `setAreaValue` function.
- **Properties**: Updated `wikiTechnical.ts` with technical specifications and Storybook controls for the latest component updates.

## [0.53.1] - 2026-05-01

### Added
- **Container**: Introduced a new `Container` component to unify layout architecture and standardize container token generation.
- **Area**: Added `Area` constructor component for flexible area-based layouts.
- **Header**: Added `Header` constructor component for building standardized application headers.
- **Classes**: Implemented `AreaInclude` class for handling area state and related logic.
- **Functions**: Added `getAreaValue` and `setAreaValue` utility functions for area state management.

### Changed / Improved
- **Layout Components**: Refactored core layout components (`Block`, `Group`, `Page`, `Section`) to improve visual consistency and ensure better design token integration.
- **Image**: Major improvements to the `Image` component, including better SSR support and updates to the `ImagePdf` component.
