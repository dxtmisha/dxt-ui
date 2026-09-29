# Changelog

All notable changes to this project will be documented in this file.

## [0.8.0] - 2026-09-28

### Added
- **`MediaFile` Class**:
  - Implemented `MediaFile` class for working with file configurations, resolving names (`name`), extensionless base names (`baseName`), lowercase extensions (`extension`), categories (`category`), groups (`group`), MIME types (`mime`), metadata items (`item`), and SVG icons (`icon`).
  - Added support for native browser `File` instances (`fileOrExtension: File | string`), with `file` getter and `isFileInput()` type guard.
  - Added optional `mimeType?: string` constructor parameter with automatic MIME detection from `file.type`.
  - Added automatic file extension resolution from `rawMime` when the file name lacks an extension dot.
  - Added built-in category and group checker methods: `isArchive()`, `isAudio()`, `isCategory()`, `isCode()`, `isDocument()`, `isImage()`, `isNeutral()`, `isPresentation()`, `isStandard()`, `isTable()`, and `isVideo()`.
  - Added `extensions` getter returning supported format extensions.
- **`MediaFiles` Class**:
  - Added dedicated static utility class for file path validation and metadata registry lookups (`isLink`, `get`, `getByCategory`, `getByMime`, `findByMime`, `getList`, `getNeutral`).
  - Enhanced `find()` lookup supporting format codes, `extensions` alias arrays, and fallback to MIME types.
- **`MediaFileIcon` Class**:
  - Added specialized registry class for storing and applying custom file icons (`icons`, `has`, `get`, `add`, `addList`, `toCode`, `toItem`).
- **File Icons Asset Library & Metadata**:
  - Added 85 vector SVG file icons in `src/assets/files/` and centralized `fileList` registry.
  - Added `MediaFileCategory` and `MediaFileGroup` enum classifications with neutral and category-level fallbacks.
  - Added canonical IANA `mime` definitions and multi-extension `extensions` arrays across standard formats in `fileList` and `MediaFileItem` type.
  - Added dedicated tree-shakeable entry point `src/files.ts` (`@dxtmisha/media/files`) with `fileIcons` dictionary and `registerFileIcons` helper.
- **Social Media Icons Asset Library**:
  - Added 35 official vector SVG icons in `src/assets/socials/` with standardized dimensions and brand colors for all supported platforms (`alipay`, `baidu`, `dingtalk`, `discord`, `douyin`, `dzen`, `facebook`, `github`, `gitlab`, `habr`, `instagram`, `line`, `linkedin`, `medium`, `messenger`, `ok`, `pinterest`, `qq`, `reddit`, `skype`, `snapchat`, `telegram`, `tiktok`, `tumblr`, `twitter`, `viber`, `vk`, `wechat`, `weibo`, `whatsapp`, `x`, `xiaohongshu`, `youtube`, `zalo`, `zhihu`).
  - Added dedicated tree-shakeable entry point `src/socials.ts` (`@dxtmisha/media/socials`) with `socialIcons` dictionary and `registerSocialIcons` helper.
- **Storybook Documentation**:
  - Added multi-language Storybook MDX documentation for `MediaFile` and `MediaSocial` classes in English, Russian, and Vietnamese.
- **Unit Tests**:
  - Added unit test suites for `MediaFile` (covering MIME resolution, File objects, and checker methods), `MediaFiles`, and `MediaFileIcon`, and updated tests for `MediaSocial`.

### Changed
- **Architecture Refactoring**:
  - Decomposed static file registry queries and custom icon management out of `MediaFile` into dedicated `MediaFiles` and `MediaFileIcon` classes.
  - Decoupled SVG asset bundling from core metadata registries: `fileList` and `socialList` now export pure lightweight metadata, category classifications, and input masks without heavy embedded SVG imports.
  - Added dedicated subpath exports (`./files`, `./socials`) in `package.json` and added entry points in Vite build configuration.
  - Refactored `MediaFile.category` and `MediaFile.icon` to resolve cleanly via `this.item` with automatic fallback to neutral file defaults.
  - Standardized method and getter order alphabetically across media classes according to project conventions.
  - Re-exported `MediaFile`, `MediaFiles`, `MediaFileIcon`, `MediaSocial`, `fileList`, and `socialList` from `library.ts`.

### Removed
- **Composables**:
  - Removed internal `composables/` directory (`useFileIcon`, `useFileName`, `useMediaFile`) in favor of direct framework-agnostic `MediaFile` class usage.

## [0.7.4] - 2026-09-07

### Changed
- **Dependencies**: Updated workspace package dependencies to explicit `>=` semver ranges.

## [0.7.3] - 2026-08-30

### Added
- **LLM Configuration (`llms.txt`)**: Added `llms.txt` documenting SVG country flags dataset and ISO 3166-1 geographical metadata discovery.

### Changed
- **Package Metadata**: Updated `description` and extended `keywords` in `package.json` with comprehensive metadata (`country-flags`, `svg-flags`, `geographical-data`, `iso-3166`, `phone-codes`, `phone-masks`, `timezones`, `i18n`, `localization`, `tree-shakeable`).

## [0.7.2] - 2026-08-05

### Changed
- **Documentation**: Updated `README.md` with comprehensive documentation, badge badges, quick start examples, and standardized usage rules.

## [0.7.0] - 2026-07-02

### Added
- **Units Configuration**: Added `unit` configuration options inside `geo.json` for countries using non-metric/customary units (US, Myanmar, Liberia, United Kingdom).

### Changed
- **Standardized Unit Keys**: Renamed and mapped all unit override keys and values in `geo.json` to follow standard Unicode CLDR / JS `Intl` identifiers (e.g. `square-meter`, `kilometer-per-hour`).

## [0.6.1] - 2026-06-25

### Added
- **Social Types**: Added `InputSocialIcons` type definition (`Partial<Record<InputSocialType, string>>`) making all social icons optional.
- **MediaSocial**: Introduced custom icons registry (`icons` property) with helper methods (`addIcon` and `addIcons`) using `InputSocialIcons` to register custom icons for social network items.
- **Unit Tests**: Added a comprehensive test suite (`MediaSocial.test.ts`) covering all methods of the `MediaSocial` class.

### Changed
- **MediaSocial**: Refactored `get()` to return a shallow copy of the configuration item with the mapped custom icon, preventing side effects and mutations of the static global `socialList`.

## [0.6.0] - 2026-06-25

### Added
- **Social Media Configurations**:
  - Introduced standard social media platform types and structures in `socialTypes.ts` (`InputSocialType` enum, `InputSocialItem`, `InputSocialList`).
  - Added comprehensive configurations for 35 social media networks (e.g. GitHub, Discord, Telegram, LinkedIn, Facebook, Zalo, WeChat, X/Twitter, YouTube, etc.) detailing their profile link prefixes and input mask validation rules (`socialList.ts`).
  - Added `MediaSocial` utility class to manage and query social network metadata.
- **GeoFlag Lookup**:
  - Implemented language-specific flag methods (`getLanguage`, `getListLanguage`, and `getNationalLanguage`) to resolve and map flags directly based on language configurations.

## [0.3.3] - 2025-06-23

### Added
- Synchronized package structure and configurations for Figma plugin integration.

## [0.2.0] - 2025-03-08

### Added
- Created foundational media classes and flags exporter scripts.

## [0.0.2] - 2025-03-08

### Added
- Added geographic flags asset library of SVG icons.

## [0.0.1] - 2025-02-16

### Added
- Initialized `@dxtmisha/media` package.
