# Changelog

All notable changes to this project will be documented in this file.

## [0.70.0] - 2026-06-08

### Added
- **Pagination**: Introduced a new `Pagination` component constructor supporting:
  - Navigation controls: First, last, previous (back), and next page button rendering.
  - Page links rendering with configurable visible page count (`visible` prop), ends count (`ends` prop), and custom ellipsis text separator (`ellipsis` prop).
  - Dynamic page range layout info display (`showInfo` prop) and customizable items-per-page select dropdown (`menuRows` and `showRowsPerPageLabel` props).
  - "Show more" (`showMore`) button for loading next page records accumulatively, and "Show more previous" (`showMorePrev`) button for prepending previous page records.
  - Slot support for `leading`, `info`, and `trailing` customizable content.
  - Full model bindings for active page (`value`) and items-per-page (`rows` / `modelRows`).
  - Accessibility: Dynamic ARIA attributes via `AriaStaticInclude`, including `role="navigation"` for the container and custom `aria-label` tags for all action buttons.
  - Telemetry: Integrated `AreaInclude` layout/scoped telemetry properties (`area` prop).
  - Translations: Added localized navigation strings and active page formatting under the new translation key `page` (`TextPagePropsInclude`).
- **FocusDirectionInclude**: Added a new coordinate-based layout utility to calculate spatial distances and navigate focus between candidate sibling nodes using arrow keys.

### Changed / Improved
- **FocusDirectionInclude**: Refactored keyboard traversal logic, decomposing helper utilities for coordinates difference (`getCoordinatesDifference`), distance (`getDistance`), and container active class resets (`clearAllActiveClasses`). Enhanced bilingual (EN/RU) JSDoc.
- **TextInclude / SSR**: Extracted the global text registry into a dedicated `TextIncludeInstance` class managed via `ServerStorage` (key `__ui:text-include-instance__`), ensuring isolated translation states across requests and preventing SSR cross-request contamination.
- **Properties / Adaptivity**: Standardized adaptive prop types (`adaptive`, `adaptiveMore`) in the Pagination schema from `boolean` to the explicit literal string `'lineAlways'`.

## [0.68.0] - 2026-06-05


### Added
- **InputPhone**: Introduced `countryDefault` property to specify the default country code during initialization.

### Changed / Improved
- **InputPhone**: Refactored `InputPhoneData` to initialize country watching inside the `onMounted` lifecycle hook, preventing early synchronization side-effects.
- **InputPhone**: Optimized `InputPhoneDesign` to render a standard `<input>` element instead of the interactive mask component when the field is in `disabled` or `readonly` state.
- **InputPhone**: Forced `inputMode="tel"` in input attributes within the mask renderer.
- **InputPhoneDialCode**: Hid the dropdown indicator arrow when the component is `disabled`.
- **Actions**: Updated the component constructor to pass `disabled` status down to the nested `icon` component instantiations.
- **Image**: Added support for `.flag-compressed` modifier class in stylesheet rule definitions.

## [0.67.3] - 2026-06-02

### Added
- **InputPhoneDialCode**: Introduced `InputPhoneDialCode` component constructor for selecting and rendering country telephone dial codes.
- **InputPhoneDialCode**: Created `InputPhoneDialCodeDesign` to handle layout, bindings, and dropdown menu of dial codes.
- **ModelValueInclude**: Supported computed default values for selected country dial codes.

## [0.67.2] - 2026-05-26

### Added
- **ComponentIncludeAbstract**: Added `is` getter to define baseline visibility for components.

### Changed / Improved
- **ComponentIncludeAbstract**: Refactored component render/init-render methods to check `this.is` for `isShow` condition by default.
- **Visibility Setup**: Simplified subclasses inside `ActionsInclude`, `BarsInclude`, and `ImageInclude` by overriding the `is` getter and removing redundant custom render methods.

## [0.67.1] - 2026-05-25

### Changed / Improved
- **MenuButton**: Cleaned up component architecture by removing duplicate search/filter input handling, including `iconSearch` and `inputSearchAttrs` props, fully delegating search logic to the parent `Menu` component.
- **MenuChip**: Removed duplicate search/filter input implementation to offload option filtering and input rendering entirely to the `Menu` layer.
- **Select**: Simplified filtering design by deleting the custom `SelectFilter` class and delegating list searching/filtering to `Menu`. Kept `SelectInput` and `onInputValue` to support native-like text input interaction.
- **SelectAbstract**: Streamlined selection setup by passing `showSearch` property directly to `MenuInclude` configuration, and removed outdated callbacks such as `onWindow` and search event triggers.
- **Formatting and Typing**: Cleaned up minor layout spacing issues and standardized type intersections for `InputPhoneDialCode`, `List`, `ListItem`, `Menu`, `MotionAxis`, and `Tooltip`.

## [0.67.0] - 2026-05-24

### Added
- **MenuButton**: Introduced the `MenuButton` constructor component for creating action buttons that trigger standard interactive dropdown overlay menus.
- **Select**: Introduced the base `SelectAbstract` class to encapsulate shared selection, focus, and state logic between `Select` and `Menu` components.
- **Window**: Created the `WindowOpen` class helper to coordinate entry transitions and open-end triggers.

### Changed / Improved
- **List**: Refactored list focus, navigation, search, and interaction models (`List.ts`, `ListFocus.ts`, `ListGo.ts`, `ListSearch.ts`, and `ListControl.ts`) to improve keyboard-guided list traversing.
- **Select**: Re-engineered the core `Select` class to subclass `SelectAbstract`, simplifying the code structure and improving state management.
- **TabIndexInclude**: Replaced the redundant internal `isTab` handler with the new global `isTab` utility from `@dxtmisha/functional-basic`, and wrapped focus resets in `requestAnimationFrame` inside `reset()` for better browser compatibility.
- **Window**: Refactored visibility and inert triggers inside `WindowHidden` and event handler registrations inside `WindowEvent` to leverage the lifecycle mounting changes.
- **ButtonInclude**: Refactored keydown tracking and event handling to provide safer execution paths.
- **Cleanups**: Removed leftover debug logs inside `TabIndexInclude`, `ListFocus`, and `WindowEvent`.

## [0.65.3] - 2026-05-23

### Added
- **ListItem**: Added `selectionStyle` prop (`checkbox`, `radio`, `checkmark`, `none`) to allow built-in selection controls.
- **ListItem**: Added `checkboxAttrs` and `radioAttrs` props for passing custom properties to the selection components.
- **ListItem**: Added `iconCheckbox` prop to allow specifying a custom checkmark icon.
- **ListItem**: Added BEM subclass `#control` to support rendering built-in selection controls.
- **ListItem**: Added `controlPosition` prop (`start` or `end`) to customize the alignment and order of the control part in the list item.
- **List / Menu**: Forwarded the new `selectionStyle` prop to list items.
- **Select**: Added `selectionStyle` prop (supporting `'auto'` or specific selection styles), dynamically resolving to `'checkbox'` for multi-select, and `'radio'` for single-select.

### Changed / Improved
- **ListItem**: Refactored `ListItemComponents` typing to make `checkbox` and `radio` elements optional to maintain compatibility.
- **ListItem**: Removed `selected` from `ListItemPropsToken` to allow the value to be resolved correctly.
- **Field**: Expanded `FieldSelectProps` types with `selectionStyle` property definition.

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
