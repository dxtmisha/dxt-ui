# Changelog

All notable changes to this project will be documented in this file.

## [0.88.0] - 2026-07-06

### Added
- **D1SegmentControlItem**:
  - Introduced the `D1SegmentControlItem` styled UI component wrapping the `SegmentControlItem` constructor.
  - Implemented the layout SFC `D1SegmentControlItem.vue`, mapping class tokens, styles, and emits.
  - Added Storybook configuration `D1SegmentControlItem.stories.ts`.
- **D1SegmentControl**:
  - Migrated dynamic design tokens mapping under `properties.json` translating them to system-compliant tokens (e.g. `{sys.spacing.x}`, `{sys.palette.onSurface}`, `{sys.opacity.overlay}`, `{sys.rounded.md}`).
  - Ran `npm run ui` to regenerate variables, style tokens, and type-safe properties.

## [0.83.0] - 2026-07-02

### Added
- **D1FormattedNumber**:
  - Introduced the `D1FormattedNumber` styled UI component wrapping the `FormattedNumber` constructor.
  - Configured custom design tokens under `properties.json` and styles under `styleToken.scss`.
  - Added support for value, currency, unit, language, and format props.
  - Implemented interactive rendering previews (`D1FormattedNumberAiWiki.vue`), Storybook stories (`D1FormattedNumber.stories.ts`), and bilingual MDX documentation.
  - Registered exports and routes under global library configs.

## [0.82.0] - 2026-07-02

### Added
- **D1BulletItem**:
  - Added support for the `palette` property control (dynamic colors: red, orange, blue, green, etc.).
  - Registered the `palette` prop inside `properties.json`, `props.ts`, `styleToken.scss`, and `wikiData.ts`.

### Changed
- **D1Bullet**:
  - Added `gap` token (`{sys.spacing.x}`) to `properties.json` and styled it under `styleToken.scss`.
  - Integrated `D1BulletItem` component registration in `D1Bullet.vue` design constructor config.
  - Updated stories and MDX documentation (added HTML rendering demos / stories).
- **D1BulletItem**:
  - Refactored padding properties in `properties.json` (swapped `sys.spacing.xl` to `sys.spacing.md`, removed custom padding sizes under `~size`).
  - Added story configurations (multi-item rendering) and MDX slot details.
- **D1Menu / D1Select**:
  - Formatted and aligned option array structures in stories.
  - Cleaned up obsolete design token classes for `bulletItem` in `list.json`.

## [0.79.0] - 2026-06-29

### Added
- **D1BreadcrumbItem**: Introduced `D1BreadcrumbItem` styled component wrapping `BreadcrumbItem` constructor.
- **D1Breadcrumbs**: Introduced `D1Breadcrumbs` styled component wrapping `Breadcrumbs` constructor.
- **D1Bullet**: Introduced `D1Bullet` styled component wrapping `Bullet` constructor.
- **D1BulletItem**: Introduced `D1BulletItem` styled component wrapping `BulletItem` constructor.

## [0.77.0] - 2026-06-28

### Added
- **D1Avatar**:
  - Regenerated component properties and types to support the new `reduction` and `tabindex` properties.
  - Enabled support for `EventClickInclude` (interactive click handling and link navigation attributes / tag resolving).
  - Regenerated story configuration `D1Avatar.stories.ts`, design tokens `styleToken.scss` and generated Vue files `D1Avatar.vue`, `D1AvatarAiWiki.vue`.

## [0.76.0] - 2026-06-27

### Added
- **D1Alert**: Introduced the styled UI component wrapping the `Alert` constructor:
  - Supports structural configurations (title/label, descriptions, custom trailing icons, alert actions, and alert link integration) with slots and properties bindings.
  - Custom design tokens configured under `properties.json` and styles under `styleToken.scss` with theme-specific variable support.
  - Implemented interactive rendering previews (`D1AlertAiWiki.vue`), Storybook stories (`D1Alert.stories.ts`), and bilingual MDX documentation.
- **D1AlertLink**: Introduced the styled UI component wrapping the `AlertLink` constructor:
  - Added support for action event emitters, custom slot templates, and divider layout rules.
  - Custom design tokens configured under `properties.json` and styles under `styleToken.scss` with theme-specific variable support.
  - Implemented interactive rendering previews (`D1AlertLinkAiWiki.vue`), Storybook stories (`D1AlertLink.stories.ts`), and bilingual MDX documentation.

### Changed
- **D1MenuCountry / D1MenuLanguage**: Renamed `countryList` property to `list` across component story configurations and wiki metadata mappings.

## [0.74.0] - 2026-06-25

### Added
- **D1InputSocial**: Introduced the `D1InputSocial` UI component wrapping the `InputSocial` constructor:
  - Supports input mask styling, customizable prefix/suffix profile URL renders, and social network selection dropdown.
  - Implemented design tokens in `properties.json` and styles under `styleToken.scss` with theme-specific variable support.
  - Added comprehensive stories, bilingual MDX documentation, and interactive rendering previews.
- **D1MenuLanguage**: Introduced the `D1MenuLanguage` UI component wrapping the `MenuLanguage` constructor:
  - Integrates language options, list item flags, and system translation updates.
  - Configured custom storybook stories, properties schemas, and wiki metadata.

## [0.72.0] - 2026-06-18

### Added
- **D1SelectableArea**: Introduced the `D1SelectableArea` UI component wrapping the core `SelectableArea` constructor:
  - Standardized slot bindings and overlay square animations.
  - Implemented spacing configurations, custom design tokens, and theme-specific styles under `properties.json` and `styleToken.scss`.
  - Created interactive Storybook stories (`D1SelectableArea.stories.ts`), bilingual MDX documentation, and wiki metadata configs.
  - Added a rendering preview component (`D1SelectableAreaAiWiki.vue`) for demonstrating drag selection and click selections.

## [0.71.0] - 2026-06-17

### Added
- **D1DraggableWrapper**: Introduced the styled UI component wrapper (`D1DraggableWrapper`) for the core draggable list reordering constructor:
  - Standardized slot bindings (`className`, `classClick`, `classPosition`) for draggable child items.
  - Configured custom design tokens in `properties.json` for active and returning item outlines and opacity.
  - Styled active/dragged states (`&__item--active`, `&__item--return`) in `styleToken.scss` using theme-specific variables and mixins (`ui.outlineOpacity`, `ui.outlineColor`).
  - Added comprehensive interactive stories (`D1DraggableWrapper.stories.ts`), MDX documentation (`D1DraggableWrapper.mdx`), properties schemas, and wiki metadata configurations.
  - Created `D1DraggableWrapperAiWiki.vue` containing interactive rendering previews of list reordering with grab handles.

## [0.70.0] - 2026-06-08

### Added
- **D1Pagination**: Introduced the `D1Pagination` UI component wrapping the core `Pagination` constructor:
  - Supports navigation layouts, pagination buttons, custom slots (`leading`, `info`, `trailing`), and active page v-model bindings.
  - Implemented spacing configurations, custom design tokens, and style class definitions under `properties.json` and `styleToken.scss`.
  - Built responsive adaptivity via custom modifiers (`d1-pagination--adaptive--[size]` and `d1-pagination--adaptiveMore--[size]` mapping to standard system breakpoints).
  - Added complete interactive stories (`D1Pagination.stories.ts`), MDX documentation (`D1Pagination.mdx`), wiki metadata configurations (`wikiData.ts`), and a combined accumulative page loading story.

### Changed / Improved
- **D1Menu**: Configured default `compMod` parameter in `D1Menu.vue` to set the nested `window` sub-component's width to `'auto'`.
- **D1Pagination**: Updated component configuration in `D1Pagination.vue` to delegate styled component modifiers (`compMod`) to inner button (text mode, small size, inverse) and load-more (secondary style, small size) elements.

## [0.68.0] - 2026-06-05


### Added
- **D1InputPhone**: Registered new design token attributes `countryBlock`, `countryDefault`, and `maskAttrs` in Storybook/wiki metadata properties mappings.
- **D1InputPhone**: Introduced `InputPhoneVModel` (reactive binding) and `InputPhoneCountryBlock` (country lock options) preview configurations to component stories.
- **D1InputPhone**: Added comprehensive documentation describing component events (`input`, `change`) and slot bindings (`label`, `prefix`, `suffix`, `caption`, `leading`, `trailing`) in the component MDX guide.

## [0.67.3] - 2026-06-02

### Added
- **D1InputPhoneDialCode**: Integrated the styled `D1InputPhoneDialCode` component wrapping the dial-code constructor.
- **D1InputPhoneDialCode**: Created interactive Storybook configurations, properties schemas, and bilingual MDX documentation.

## [0.67.2] - 2026-05-26

### Added
- **D1ActionSheet**: Added comprehensive interactive stories and router navigation maps for demonstrating ActionSheet usage.

## [0.67.1] - 2026-05-25

### Changed / Improved
- **D1MenuButton**: Cleaned up component structure by removing the unused sub-input component reference, default props (`iconSearch`, `inputSearchAttrs`), `#input` properties schema, and related styling rules, since search/filter is now handled natively by the dropdown menu.
- **D1MenuChip**: Removed obsolete sub-input references, default properties, and styling definitions to match the constructor-level search delegation.
- **D1Select**: Cleaned up unused input component registration, token properties, and style classes, delegating search input handling to the overlay menu component.
- **Tokens & Theme**: Formally registered the `select` component in `src/styles/Ui/list.json` to define and bind the standard design token `--d1-select-main` mapping to `{d.select}`.

## [0.67.0] - 2026-05-24

### Added
- **D1MenuButton**: Implemented the new `D1MenuButton` component as a fully-styled D1 design system component wrapping the core `MenuButton` constructor.
- **D1MenuButton**: Added detailed interactive stories (`D1MenuButton.stories.ts`), MDX documentation (`D1MenuButton.mdx`), properties definition, and design token configurations (`properties.json`, `styleToken.scss`).
- **D1MenuButton**: Included custom `D1MenuButtonAiWiki.vue` preview mapping to demonstrate component usage under various configurations.

### Changed / Improved
- **D1ListItem**: Updated layout styling and margin properties under `styleToken.scss` and `properties.json` to support selection indicators.
- **D1Select / D1Menu**: Updated design templates and stories to align with the core constructor refactoring.

## [0.65.2] - 2026-05-23

### Added
- **D1ListItem**: Integrated the new `checkbox` and `radio` components (`D1Checkbox` and `D1Radio`) into the component rendering.
- **D1ListItem**: Supported `controlPosition` prop with adaptive screen sizes (`autoSm`, `autoMd`, `autoLg`, `autoXl`, `auto2xl`) for responsive order positioning of built-in controls.
- **D1ListItem**: Added `iconCheckbox` default value to `'check'`.
- **D1ListItem**: Documented the new list item selection properties (`checkboxAttrs`, `radioAttrs`, `iconCheckbox`, `selectionStyle`, `controlPosition`) in Storybook/Wiki metadata properties definitions.

### Changed / Improved
- **D1ListItem**: Removed `selected` property from `PropsToken`.

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
