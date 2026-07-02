# Changelog

All notable changes to this project will be documented in this file.

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
