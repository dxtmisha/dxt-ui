# Changelog

All notable changes to this project will be documented in this file.

## [0.65.2] - 2026-05-22

### Added
- **MenuCountry**: Introduced the `MenuCountry` constructor component for standardized country selection menus.
- **Teleport**: Extended `TeleportInclude` with `isTeleportElement` to query and verify teleport target nodes reactively in the DOM.

### Changed / Improved
- **Window**: Introduced `WindowEventClickType` to consolidate `MouseEvent`, `TouchEvent`, and `KeyboardEvent` into a single, standardized type signature.
- **Window**: Standardized control element event properties from lowercase/kebab-case (`onclick`, `oncontextmenu`) to standard camelCase (`onClick`, `onContextmenu`) inside `WindowControlItem` type definitions and instantiations.
- **Window**: Refactored `WindowEvent` handler signatures and safely checked target elements before updating window verification.
- **Window**: Refactored `WindowHidden` to skip/ignore teleport target elements during inert and attribute visibility iterations, preventing unintended focus-trapping or styling restrictions.
- **Window**: Removed debug log inside `WindowStatic.isStatic()`.

## [0.65.1] - 2026-05-22

### Added
- **Window**: Added `iconPaddingX` and `iconPaddingY` variables to Window custom properties under `properties.json`.

### Changed / Improved
- **Tooltip**: Deferred the registration of `scroll-sync` event listeners and the `open` status watcher until `onMounted` within `TooltipOpen` to improve SSR hydration stability.
- **Tooltip**: Standardized control event listener properties in type definitions and bindings from lowercase/kebab-case (`onclick`, `onmouseover`, `onmouseout`) to camelCase (`onClick`, `onMouseover`, `onMouseout`).
- **Window**: Introduced a new `openEnd` reactive boolean ref in `WindowOpen` to track the actual completion of opening transitions.
- **Window**: Refactored `WindowHidden` visibility and inert watchers to observe `openEnd` instead of `open.item` to avoid screen flashing or pre-mature focus-trapping.
- **Window**: Adjusted transition properties for opening states in SCSS to utilize standard fade exit duration.
- **MotionTransform**: Renamed the internal component background class/element from `&__background` to `&__scrim` in SCSS to align with naming conventions.

## [0.65.0] - 2026-05-22

### Changed / Improved
- **ModelInclude**: Fixed `syncValue` reactivity watching by removing the `immediate` trigger option from the watcher to prevent unintended early state emissions during setup.
- **ModelValueInclude**: Refactored the internal state synchronization flow. Replaced the immediate array watcher on `inputValue` with initial assignment and a direct reactive watch. Added a dedicated `update` helper method and enhanced bilingual JSDoc annotations (EN/RU).
- **MotionAxis**: Added bilingual JSDoc comments detailing the `isInDom` and `isInDomSlide` utility functions.
- **Window**: Adjusted `adaptive` body property definitions in `properties.json`, increasing the subtraction modifier for `max-height` in adaptive mode from `({??padding} * 2)` to `({??padding} * 6)` to optimize layout display and avoid screen clipping.

## [0.64.0] - 2026-05-20

### Added
- **TextLabel**: Introduced the `TextLabel` constructor component, standardizing inline textual label presentation with dynamic tag forwarding (`tag` prop, defaulting to `'span'`) and full `LabelInclude` integration.
- **TextDescription**: Introduced the `TextDescription` constructor component, standardizing auxiliary description blocks with dynamic tag forwarding (`tag` prop, defaulting to `'span'`) and full `DescriptionInclude` integration.

### Changed / Improved
- **DescriptionInclude**: Refactored the core class to support dynamic HTML wrapper tags (via constructor tag delegation) and extra attributes binding.

## [0.59.3] - 2026-05-14

### Added
- **Tabs**: Enhanced `Tabs` and `TabsNavigation` components with intelligent initial selection logic, utilizing the new `getFirst` utility to resolve the active tab from lists or objects when no explicit selection is provided.
- **Demos**: Introduced new interactive demo pages for `Badge`, `Actions`, `MotionTransform`, and `Tabs` components to the demo application.

### Changed / Improved
- **Tabs Navigation**: Standardized element identifier generation in `TabsNavigationIds` using a stable, unique prefix for more reliable DOM interactions.
- **Tab Item**: Improved accessibility by dynamically linking tab elements to their labels via the `aria-labelledby` attribute.
- **Motion Components**: Refactored `MotionTransform` and `MotionAxis` constructors to defer DOM-specific event registrations until the component is mounted, significantly improving SSR compatibility.
- **Tabs Rendering**: Refactored `TabsDesign` to ensure consistent rendering of navigation and animation layers, regardless of the initial ID state.
- **Keyboard Navigation**: Fixed an issue in `TabsNavigation` keyboard handling where focus selection was incorrectly mapped; it now correctly uses the item index for selection updates.
- **Core Classes**: Optimized `DescriptionInclude`, `LabelInclude`, `PrefixInclude`, and `SuffixInclude` by implementing stable internal identifier management.
- **Maintenance**: Performed cleanup of debug logs and refined internal property resolution logic across several core classes.

## [0.59.1] - 2026-05-13

### Changed
- **Properties**: Implemented stricter typing for component properties by removing generic `string` from union types in all `props.ts` files across the package. This ensures better IDE support and type safety for property literal values (e.g., `palette`, `size`, `textAlign`).
- **Scripts**: Updated internal code generation scripts to support the new strict typing standard for property definitions.

## [0.59.0] - 2026-05-13

### Added
- **Radio**: Introduced the `Radio` constructor component, providing standardized logic for single-choice selection.
- **Checkbox**: Added `CheckboxSelected` class to centralize and share selection management logic between `Checkbox` and `Radio` components.
- **Documentation**: Added comprehensive bilingual (EN/RU) MDX documentation for the `Radio` component.
- **Demos**: Implemented interactive demo pages for the `Radio` component in the demo application.

### Changed
- **Checkbox**: Refactored internal selection management to utilize the new `CheckboxSelected` helper class for improved maintainability.
- **Header / Input**: Updated design implementations to align with internal property and selection logic changes.

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
