# Changelog

All notable changes to this project will be documented in this file.

## [0.82.0] - 2026-07-02

### Changed
- **BulletItem**: Updated `wikiDescriptionsBulletItem.ts` to add `style="list-style: none"` to the demo render wrapper of the Storybook component.

## [0.79.0] - 2026-06-29

### Added
- **Breadcrumbs / BreadcrumbItem / Bullet / BulletItem / MotionSticky**: Added descriptions and bilingual MDX documentation.

## [0.77.0] - 2026-06-28

### Added
- **Avatar**:
  - Registered descriptions and MDX documentation files for the `Avatar` component:
    - Added `wikiDescriptionsAvatar.ts` with component capabilities, story templates, and slot lists, including a merged `AvatarBasic` story and `AvatarReduction`, `AvatarSkeleton` stories.
    - Created `avatar.en.mdx` / `avatar.ru.mdx` files.
    - Added property `reduction` documentation in English/Russian (`reduction.en.mdx` / `reduction.ru.mdx`).
    - Registered MDX configuration mappings inside `wikiMdxAvatar.ts`.
    - Integrated configurations into the global array configs `wikiDescriptions.ts` and `wikiMdx.ts`.
- **Options / Styles**:
  - Added Storybook controls for the `reduction` property inside `wikiOption.ts`.
  - Added Storybook controls for the `primary` style property inside `wikiStyle.ts`.

## [0.76.0] - 2026-06-27

### Added
- **Alert / AlertLink**: Registered documentation resources, properties control maps, and descriptions for the new `Alert` and `AlertLink` components:
  - Created MDX documentation pages for `Alert` (`alert.en.mdx` / `alert.ru.mdx`) and `AlertLink` (`alertLink.en.mdx` / `alertLink.ru.mdx`).
  - Added event/action description MDX files (`event.close.en.mdx` / `event.close.ru.mdx` and `events.link.en.mdx` / `events.link.ru.mdx`).
  - Implemented bilingual story/wiki descriptions (`wikiDescriptionsAlert.ts` and `wikiDescriptionsAlertLink.ts`).
  - Created Storybook properties controls mappings (`wikiAlert.ts` and `wikiAlertLink.ts`).
  - Registered exports and routes under global wiki configs (`wikiDescriptions.ts`, `wikiMdx.ts`, `wiki.ts`, `wikiMdxEvent.ts`, `wikiAttributes.ts`, and `wikiInformation.ts`).
- **MenuLanguage**: Created control mapping configuration (`wikiMenuLanguage.ts`) for the language selection component.

### Changed
- **MenuCountry / MenuLanguage**: Renamed `countryList` property control to `list` (mapping to the updated component constructors) in properties definitions and story templates.

## [0.74.0] - 2026-06-25

### Added
- **InputSocial**: Integrated wiki documentation, properties lists, and Storybook configurations for the new `InputSocial` component:
  - Created MDX documentation pages (`inputSocial.en.mdx` / `inputSocial.ru.mdx` / `inputSocial.vi.mdx`).
  - Added descriptive metadata mapping in `wikiDescriptionsInputSocial.ts`.
  - Registered exports and routes under global wiki configs.

## [0.73.0] - 2026-06-24

### Added
- **MenuLanguage**: Added documentation and wiki data descriptors for the `MenuLanguage` component.
- **Query / URL**: Added comprehensive multilingual documentation (EN, RU, VI) for the `Query` class and `useQueryRef` composable.

## [0.72.0] - 2026-06-18

### Added
- **SelectableArea**: Added comprehensive documentation and rendering stories for the `SelectableArea` component:
  - Created slots and expose properties lists.
  - Documented renderless architecture and direct DOM manipulation rules in the "How to work" section.
  - Created interactive wiki preview component rendering layouts.
- **Styles**: Added documentation for styles package layout utilities, selectors, text direction, and dimensions setup.

## [0.71.0] - 2026-06-17

### Added
- **DraggableWrapper**: Added comprehensive Storybook stories, interactive drag-and-drop handles preview, and bilingual MDX documentation for the `DraggableWrapper` component.

## [0.68.0] - 2026-06-06

### Added
- **InputPhone**: Exposed countryBlock, countryDefault, and maskAttrs in properties definitions, added InputPhoneVModel and InputPhoneCountryBlock stories, and expanded MDX documentation.

## [0.67.3] - 2026-06-02

### Added
- **InputPhoneDialCode**: Added interactive Storybook configurations, properties schemas, and bilingual MDX documentation.

## [0.67.2] - 2026-05-27

### Added
- **ActionSheet**: Added comprehensive interactive stories and router navigation maps.
- **JSDoc**: Standardized properties, methods, and constructors with bilingual (EN/RU) JSDoc comments.

## [0.67.1] - 2026-05-25

### Changed
- **Select / MenuButton / MenuChip**: Cleaned up input search and properties schemas, delegating option filtering natively to the dropdown overlay.

## [0.67.0] - 2026-05-24

### Added
- **MenuButton**: Added interactive stories, MDX documentation, properties definitions, and token configurations.

## [0.65.2] - 2026-05-23

### Added
- **ListItem**: Documented new selection properties (`checkboxAttrs`, `radioAttrs`, `iconCheckbox`, `selectionStyle`, `controlPosition`).

## [0.65.0] - 2026-05-22

### Added
- **TextLabel / TextDescription**: Exposed `./D1TextDescription` and `./D1TextLabel` in package exports and registered properties.

## [0.59.3] - 2026-05-14

### Added
- **Demos**: Added interactive demos for `Badge`, `Actions`, `MotionTransform`, and `Tabs`.
