# Changelog

All notable changes to this project will be documented in this file.

## [1.1.4] - 2026-04-25

### Added
- **Meta**: Added `htmlTitle()` method to `Meta`, `MetaStatic`, and `MetaManager` classes for generating HTML-safe title strings.

### Changed / Improved
- **MetaManager**: The `toHtml()` method now excludes the `<title>` tag, allowing for more flexible title management via `htmlTitle()`.
- **Package**: Added `CHANGELOG.md` to the list of files included in the package distribution.

## [1.1.3] - 2026-04-24

### Added
- **ResumableTimer**: Added a new class for managing timers with pause and resume functionality.
- **ApiDataReturn**: Implemented a class for standardizing API responses with support for descriptions and texts.
- **MetaStatic**: Added a class for managing static meta-data.
- **Datetime**: Added functionality for working with dates and times.
- **Translate**: Implemented a localization and translation system.
- **GeoInstance**: Added an instance for advanced geolocation data handling.
- **ApiHydration**: Added support for API data hydration for SSR.
- **StorageCallback**: Added a callback mechanism for tracking storage changes.
- **New Functions**:
  - `getCurrentTime` — returns the current time.
  - `getArrayHighlightMatch` — searches for and highlights matches in arrays.

### Changed / Improved
- **Refactoring**: Major refactoring of the `functional-basic` package to improve architecture.
- **SSR**: Adapted the API and related modules for full Server-Side Rendering support.
- **API**:
  - Improved the core `Api` class.
  - Refined `ApiCache` and caching systems.
- **Cookie**:
  - Completely redesigned the Cookie handling mechanics, including `CookieBlock` and `CookieStorage`.
  - Added `getListenerRaw` support to `CookieStorage.init()` for initializing from raw cookie strings (essential for SSR).
  - Extracted cookie parsing and formatting logic into protected `parse()` and `format()` methods.
  - Expanded `CookieOptions` to support modern attributes: `path`, `domain`, `secure`, `httpOnly`, and `partitioned` (CHIPS).
  - Updated `setListener` signature to include the fully formatted cookie string as a third parameter, facilitating easier SSR header management.
- **Function Optimization**:
  - `getSearchExp` and `getSeparatingSearchExp` — refined search mechanisms.
  - `getRequestString` — improved query string generation.
  - `addTagHighlightMatch` — optimized tag highlighting.
  - `applyTemplate` — expanded template support.
  - `forEach`, `frame`, `blobToBase64`, `getElementId` — technical improvements and optimization.

### Fixed
- **Testing**: Fixed and updated all unit tests (`vitest`) for stability and coverage.
- **Geo**: Fixed logic errors in geolocation functions and their tests.
- Fixed type definition errors and minor bugs in core functions.

### Documentation
- **JSDoc**: Completed a full revision and standardization of JSDoc comments for all classes and functions.
- **ServerStorage**: Added detailed descriptions of methods and operating principles.
- Updated `ApiDataReturn` documentation.
