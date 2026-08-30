# Changelog

All notable changes to this project will be documented in this file.

## [0.113.0] - 2026-08-30

### Added
- **`CropArea` MDX & Wiki Documentation**:
  - Registered component descriptions (`wikiDescriptionsCropArea.ts`), possibilities, story templates, and metadata.
  - Created MDX documentation pages (`cropArea.en.mdx`, `cropArea.ru.mdx`, `cropArea.vi.mdx`).
  - Added property controls module `wikiCropArea.ts` for keyboard navigation steps, aspect ratios, and boundary coordinates.
- **`ImageCrop` MDX & Wiki Documentation**:
  - Registered component descriptions (`wikiDescriptionsImageCrop.ts`) and MDX documentation pages (`imageCrop.en.mdx`, `imageCrop.ru.mdx`, `imageCrop.vi.mdx`).
  - Added property controls module `wikiImageCrop.ts` with support for aspect ratio, coordinate rounding, and image load event handling.
- **`InputImage` MDX & Wiki Documentation**:
  - Registered component descriptions (`wikiDescriptionsInputImage.ts`) and MDX documentation pages (`inputImage.en.mdx`, `inputImage.ru.mdx`, `inputImage.vi.mdx`).
  - Added property controls module `wikiInputImage.ts` supporting `counterType` (`files`, `size`, `filesAndSize`), `dropzoneAttrs`, `imageCropAttrs`, `actionsAttrs`, and `previewAttrs`.
- **Property Wiki Definitions**:
  - Added `counterType` property definition in `wikiOption.ts`.

### Changed
- **Storybook Documentation Structure**:
  - Migrated package documentation MDX files to their individual package `src/storybook/` directories with standardized multi-language titles.

### Removed
- **Legacy Wiki Subsystems**:
  - Removed deprecated `ComponentWiki` templates and legacy wiki generators.

## [0.110.1] - 2026-08-16

### Added
- **Storybook & Wiki Property Definitions**:
  - Added `showTime` boolean property definition in `wikiOption.ts`.
  - Added `hour`, `minute`, and `second` numeric property definitions in `wikiValue.ts`.

### Changed
- **ClockDial Property Registry**:
  - Refactored `wikiClockDial.ts` by replacing component-specific `clockDial.hour`, `clockDial.minute`, and `clockDial.second` with shared global definitions in `wikiValue.ts`.

## [0.110.0] - 2026-08-16

### Added
- **ClockDial MDX & Wiki Documentation**:
  - Registered component descriptions in `wikiDescriptionsClockDial.ts` and main registry `wikiDescriptions.ts`.
  - Created MDX documentation pages in `src/media/mdx/ClockDial/` (`clockDial`, `event`, `expose`, `hands`, `slots`, `type` in English and Russian).
  - Registered MDX configuration mappings in `wikiMdxClockDial.ts` and `wikiMdx.ts`.
  - Added property controls module `wikiClockDial.ts` and registered it in `wiki.ts`.
- **LLM Configuration**:
  - Added `llms.txt` configuration for package-level LLM context and documentation indexing.

### Changed
- **InputCode**:
  - Cleaned up and updated `wikiInputCode.ts` property definitions to align with component constructor updates.
- **Functions & Window Documentation**:
  - Updated MDX documentation for `getMouseClient`, `getMouseClientX`, and `getMouseClientY` across languages (EN, RU, VI) for the updated `MouseEvent | TouchEvent` signature.
  - Updated `Window` slot documentation in `slots.en.mdx` and `slots.ru.mdx`.

## [0.109.0] - 2026-08-14

### Added
- **D1Dropzone MDX & Wiki Documentation**:
  - Registered component descriptions in `wikiDescriptionsDropzone.ts` and main registry `wikiDescriptions.ts`.
  - Created MDX documentation pages in `src/media/mdx/Dropzone/` (`wikiMdxDropzone.ts`) and registered in `wikiMdx.ts`.
  - Added MDX event documentation for dropzone events (`events.dropzone.en.mdx` / `events.dropzone.ru.mdx`) and expose methods (`expose.open.en.mdx` / `expose.open.ru.mdx`).
- **Property Wiki Definitions**:
  - Added `accept` file filter property definition in `wikiForm.ts`.
  - Added `onUpdate:files` and `onUpdate:modelFiles` hook descriptions in `wikiHook.ts`.
  - Added `modelFiles` technical prop description in `wikiTechnical.ts`.
  - Added `textDropzone` text prop description in `wikiText.ts`.
  - Added `files` value prop description in `wikiValue.ts`.

## [0.108.0] - 2026-08-13

### Added
- **Slider & SliderField**:
  - Registered descriptions (`wikiDescriptionsSlider.ts`, `wikiDescriptionsSliderField.ts`) and MDX documentation (`slider.en.mdx` / `slider.ru.mdx`, `sliderField.en.mdx` / `sliderField.ru.mdx`).
  - Added specialized MDX pages for `Slider` (`event`, `expose`, `marks`, `multiple`, `slots`).
  - Added property modules `wikiSlider.ts` and `wikiSliderField.ts` with support for `vertical` orientation, `marks`, `magnet`, and `minimumDistance`.
- **MotionFlip**:
  - Registered descriptions (`wikiDescriptionsMotionFlip.ts`) and MDX documentation (`motionFlip.en.mdx` / `motionFlip.ru.mdx`, `mode.en.mdx` / `mode.ru.mdx`, `work.en.mdx` / `work.ru.mdx`, `expose.en.mdx` / `expose.ru.mdx`).
  - Added property module `wikiMotionFlip.ts`.
- **Headroom**:
  - Registered descriptions (`wikiDescriptionsHeadroom.ts`) and MDX documentation (`headroom.en.mdx` / `headroom.ru.mdx`, `expose.en.mdx` / `expose.ru.mdx`).
  - Added event documentation for `headroomScroll` (`events.headroomScroll.en.mdx` / `events.headroomScroll.ru.mdx`) and `headroomSticky` (`events.headroomSticky.en.mdx` / `events.headroomSticky.ru.mdx`).
  - Created property module `wikiHeadroom.ts` including support for `disappears` prop.
- **Navigation Components**:
  - Added descriptions and MDX documentation for `NavigationItem` (`wikiDescriptionsNavigationItem.ts`, `navigationItem.en.mdx` / `navigationItem.ru.mdx`).
  - Added descriptions and MDX documentation for `NavigationList` (`wikiDescriptionsNavigationList.ts`, `navigationList.en.mdx` / `navigationList.ru.mdx`).
  - Added descriptions and MDX documentation for `NavigationRail` (`wikiDescriptionsNavigationRail.ts`, `navigationRail.en.mdx` / `navigationRail.ru.mdx`).
  - Added descriptions and MDX documentation for `NavigationRailItem` (`wikiDescriptionsNavigationRailItem.ts`, `navigationRailItem.en.mdx` / `navigationRailItem.ru.mdx`).
  - Created property modules `wikiNavigationItem.ts`, `wikiNavigationList.ts`, `wikiNavigationRail.ts`, and `wikiNavigationRailItem.ts`.
- **TableFlex Components**:
  - Added descriptions (`wikiDescriptionsTableFlex.ts`, `wikiDescriptionsTableFlexItem.ts`, `wikiDescriptionsTableFlexHeaderItem.ts`, `wikiDescriptionsTableFlexRecord.ts`).
  - Created MDX documentation pages (`tableFlex`, `differences`, `tableFlexItem`, `tableFlexHeaderItem`, `tableFlexRecord`).
  - Added property modules `wikiTableFlex.ts`, `wikiTableFlexHeaderItem.ts`, and `wikiTableFlexRecord.ts`.
- **Table**:
  - Added `bleed` prop and horizontal margin bleed documentation in `wikiDescriptionsTable.ts`.
  - Added search and sort interactive demo stories, `@sort` events, and 3-state sorting cycle controls in `wikiTableHeaderItem.ts`, `wikiIconInclude.ts`, and `wikiSort.ts`.
- **ErrorCenter**:
  - Added `isConsole` option documentation in `wikiOption.ts`.

### Changed
- **Slider**: Updated event signatures (`input`, `inputLite`, `change`, `changeLite`) and updated MDX documentation examples to use `<Source />` components.
- **Table / TableHeaderItem**: Enhanced ARIA sorting states documentation (`ariaSort`, `aria-selected`, `aria-disabled`).

## [0.100.0] - 2026-07-28

### Added
- **SortInclude & sortList**:
  - Added multilingual MDX documentation (`sortList.en.mdx`, `sortList.ru.mdx`, `sortList.vi.mdx`).
  - Created property documentation modules `wikiSort.ts` and `wikiSearch.ts`.
  - Added search and sort categories to `StorybookCategory` in `WikiStorybookItem.ts`.
- **Table**:
  - Added documentation and story templates for caption support (title, placement, alignment) and custom slots (`caption`, `column`, `cell`, `header`, `record`).
  - Added documentation and MDX pages for `headerTop` and `stickyScrollBottom` sticky table features (`stickyScrollBottom.en.mdx` / `stickyScrollBottom.ru.mdx`, `headerTop.en.mdx` / `headerTop.ru.mdx`).
  - Added property documentation for `foot` and `columnsWidth` in `wikiTable.ts`.
- **SkeletonItem**:
  - Added `text.en.mdx` and `text.ru.mdx` documentation pages for label and length mechanics.
  - Added property documentation in `wikiSkeletonItem.ts`.
- **Functional Utilities**:
  - Added multilingual MDX documentation for `domContentLoaded` (`domContentLoaded.en.mdx`, `domContentLoaded.ru.mdx`, `domContentLoaded.vi.mdx`).
  - Added multilingual MDX documentation for `toNumberPositive` (`toNumberPositive.en.mdx`, `toNumberPositive.ru.mdx`, `toNumberPositive.vi.mdx`).
  - Added multilingual MDX documentation for `getRandomItem` (`getRandomItem.en.mdx`, `getRandomItem.ru.mdx`, `getRandomItem.vi.mdx`).

### Changed
- **SkeletonItem**: Renamed `props` property control to `itemAttrs` in `wikiDescriptionsSkeletonItem.ts` to align with library standards.

## [0.88.0] - 2026-07-06

### Added
- **SegmentControlItem**:
  - Registered descriptions and MDX documentation files for `SegmentControlItem`.
  - Added `wikiDescriptionsSegmentControlItem.ts` with possibilities, story templates, and metadata.
  - Created `segmentControlItem.en.mdx` / `segmentControlItem.ru.mdx` documentation files.
  - Registered MDX configuration mappings inside `wikiMdxSegmentControlItem.ts`.
  - Integrated under global wiki registry config lists `wikiDescriptions.ts` and `wikiMdx.ts`.
- **SegmentControl**:
  - Registered descriptions and MDX documentation files for `SegmentControl`.
  - Added `wikiDescriptionsSegmentControl.ts` with possibilities, story templates, and metadata.
  - Created `segmentControl.en.mdx` / `segmentControl.ru.mdx` documentation files.
  - Configured `SegmentControl` to reuse `v-model` and `expose.ids` documentation directly from `TabsNavigation` by specifying `componentName: 'TabsNavigation'` inside documentation blocks.
  - Registered MDX configuration mappings inside `wikiMdxSegmentControl.ts`.
  - Integrated under global wiki registry config lists `wikiDescriptions.ts` and `wikiMdx.ts`.
  - Created component-specific properties list configuration `wikiSegmentControl.ts` and registered it in `wiki.ts`.

## [0.83.0] - 2026-07-02

### Added
- **FormattedNumber**:
  - Registered descriptions and MDX documentation files for the new `FormattedNumber` component.
  - Added `wikiDescriptionsFormattedNumber.ts` with possibilities, story templates, and metadata.
  - Created `formattedNumber.en.mdx` / `formattedNumber.ru.mdx` files.
  - Registered MDX configuration mappings inside `wikiMdxFormattedNumber.ts`.
  - Integrated config layouts under global wiki registry config lists `wikiDescriptions.ts` and `wikiMdx.ts`.
  - Added global properties `format` in `wikiOption.ts` and `unit` in `wikiValue.ts`.
  - Created component-specific properties list configuration `wikiFormattedNumber.ts` defining `formattedNumber.value`, and registered it in `wiki.ts`.

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
