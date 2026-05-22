# Changelog

All notable changes to this project will be documented in this file.

## [0.65.1] - 2026-05-22

### Added
- **D1Window**: Added `iconPaddingX` and `iconPaddingY` design tokens to the `D1Window` component styles (`properties.json` and `styleToken.scss`) to allow independent configuration of internal icon paddings.

## [0.65.0] - 2026-05-22

### Added
- **Exports**: Exposed `./D1TextDescription` and `./D1TextLabel` in the package exports mapping.
- **Scrollbar**: Added the `clientOnly` property description to the Storybook metadata properties definitions list.

### Changed / Improved
- **D1Chip**: Adjusted height property definitions for all sizing classes. Increased `sm` from 6 to 8 (24px to 32px), `md` from 8 to 10 (32px to 40px), and `lg` from 10 to 12 (40px to 48px).
- **D1Window**: Updated styles for the body selector to introduce a border outline (including `border-width`, `@include ui.borderColor`, and `@include ui.borderOpacity`). Increased the adaptive height subtraction margin to `6` times the window padding variable.
- **Maintenance**: Refactored the package script to run general `dxt-ui` utility tasks.

## [0.64.0] - 2026-05-20

### Added
- **D1TextLabel**: Implemented the `D1TextLabel` UI component using the core `TextLabel` constructor, providing standardized styling and dynamic wrapper tags.
- **D1TextDescription**: Implemented the `D1TextDescription` UI component using the core `TextDescription` constructor, offering lightweight and semantic layout description support.

### Changed / Improved
- **Core Sync**: Synchronized with `@dxtmisha/constructor` v0.64.0, integrating `LabelInclude` and `DescriptionInclude` changes.
- **Tokens and Styling**: Updated BEM subclasses and registered `D1TextLabel` and `D1TextDescription` design settings and properties.

## [0.59.3] - 2026-05-14

### Added
- **D1TabItem**: Implemented explicit styling for the `disabled` state, including design token support for opacity and color resets.

### Changed / Improved
- **D1TabsNavigation**: Refactored the `divider` variant implementation to use direct border styling instead of pseudo-elements, ensuring more reliable rendering and better design token integration.
- **Tokens**: Updated `TabItem` and `TabsNavigation` property definitions to support new visual states and structural refinements.
- **Core Sync**: Synchronized with `@dxtmisha/constructor` v0.59.3, adopting the latest accessibility and SSR optimizations for tabs and motion components.

## [0.59.1] - 2026-05-13

### Changed
- **Properties**: Updated all component `props.ts` files to use stricter union types (removing generic `string`). This provides better type safety and autocompletion for D1 components.
- **Wiki**: Updated `wikiData.ts` files across the package to align with the new property type definitions in the core constructor.

## [0.59.0] - 2026-05-13

### Added
- **D1Radio**: Introduced the `D1Radio` component, implemented using the core `Radio` constructor.
- **Documentation**: Added bilingual documentation for the `Radio` component.
- **Demos**: Integrated `Radio` examples into the demo application suite.

### Changed
- **D1Checkbox**: Refactored to use the updated core selection logic.

## [0.57.4] - 2026-05-11

### Changed / Improved
- **D1Field**: Updated the `outlined` variant to include a `focusWithin` state, ensuring consistent visual behavior by resetting the outline width.
- **Core Integration**: Synchronized with `@dxtmisha/constructor` v0.57.6, adopting the new performance-optimized getter architecture for all field-related components.
- **SSR Stability**: Improved hydration consistency by leveraging the updated `ClientOnlyInclude` patterns from the core constructor.
- **Maintenance**: Updated internal properties and design tokens for the `Field` component to support more granular state management.

## [0.57.0] - 2026-05-02

### Added
- **D1ClientOnly**: Added a new component for client-side only rendering, ensuring consistent behavior across SSR and CSR.
- **D1PageArea**: Introduced a new component for managing structured page areas.
- **Documentation**: Added comprehensive bilingual (EN/RU) MDX documentation and updated `wikiData.ts` for all new and updated components.

### Changed / Improved
- **D1Actions & D1SnackbarItem**: Updated design tokens, styles, and documentation metadata to support enhanced configuration options.
- **D1Progress**: Updated styles and properties to align with the core `Progress` component refactor.
- **Build**: Synchronized and updated build artifacts and type definitions across the package.

## [0.52.3] - 2026-05-01

### Added
- **D1Container**: Introduced a new `D1Container` component with its own set of design tokens to unify and standardize layout architectures.
- **D1Area**: Added the `D1Area` component for flexible, area-based structural layouts.
- **D1Header**: Added the `D1Header` component for building standardized application headers.
- **D1Snackbar**: Added the `D1Snackbar` and `D1SnackbarItem` components for standardized notification and toast messages.

### Changed / Improved
- **Layout Components**: Refactored core layout components (`D1Block`, `D1Group`, `D1Page`, `D1Section`) to align with the new container standards, improving visual consistency and token integration.
- **Tokens and Styles**: Updated `ui-properties.scss` and token generation logic to fully support the new layout, area, and header components.
- **D1Image**: Structural improvements and better SSR compatibility.
