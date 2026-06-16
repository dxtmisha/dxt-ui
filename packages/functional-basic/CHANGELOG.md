# Changelog

All notable changes to this project will be documented in this file.

## [1.3.8] - 2026-06-16

### Added
- **UrlItem**: Introduced a new isomorphic utility class for parsing, inspecting, and modifying URLs. It provides read-only getters for standard URL parts (`href`, `protocol`, `pathname`, `hash`, etc.), a single `set()` method to update the URL value, and a static `getInstance()` method to retrieve a request-isolated instance from `ServerStorage`.
- **Tests**: Created a comprehensive test suite `UrlItem.test.ts` to verify parsing fallbacks in SSR/DOM environments, property values, and `getInstance` request-isolation behavior.

## [1.3.7] - 2026-06-16

### Added
- **Geo**: Added static `setValueDefault` method to configure the default country/language code.

### Changed / Improved
- **GeoInstance**: Updated `setValueDefault` to dynamically re-evaluate and update the active location, item, and language properties when a new default code is assigned.

## [1.3.6] - 2026-06-16

### Added
- **GeoInstance**: Integrated cookie storage persistence/hydration fallback: now attempts to retrieve the geo code from the `ui-geo-code` cookie (via `UI_GEO_COOKIE_KEY`) during initialization if DOM storage is unavailable.

### Changed / Improved
- **GeoInstance**: Refactored `findLocation()` to extract DOM-specific checks into `findLocationDom()`, improving architecture and separation of concerns.
- **GeoInstance**: Updated `set()` to store the updated geo code in the cookie when `save = true`.
- **ApiHeaders**: Fixed and updated unit tests in `ApiHeaders.test.ts` to align with the normalized lowercase HTTP header key merging behavior.

## [1.3.5] - 2026-06-05

### Changed / Improved
- **Maintenance**: Version bumped to `1.3.5` to synchronize package updates across the workspace.

## [1.3.4] - 2026-06-05

### Added
- **GeoFlag**: Updated `GeoFlag.getList()` and `GeoFlag.getNational()` methods to accept an optional `sort` parameter (defaulting to `true`) for alphabetical sorting.

## [1.3.3] - 2026-06-02

### Changed / Improved
- **Maintenance**: Version bumped to `1.3.3` to align with monorepo release updates.

## [1.3.2] - 2026-05-27

### Changed / Improved
- **ApiHeaders**: Normalized HTTP header key merging to enforce lowercase keys (e.g. `content-type`), preventing duplicate casing mismatches.

## [1.3.1] - 2026-05-25

### Changed / Improved
- **Maintenance**: Incremented version to `1.3.1` to align with monorepo release updates.

## [1.3.0] - 2026-05-25

### Added
- **`getLength`**: Introduced a new `getLength` utility function to determine the length/size of strings, arrays, Maps, Sets, and objects reactively and safely, accompanied by complete bilingual JSDocs.
- **Tests**: Created a comprehensive unit test suite (`getLength.test.ts`) to validate length computation across all supported data types.

### Changed / Improved
- **Build System**: Added `ui-priority: 100` attribute to `package.json` to facilitate prioritized build sorting of foundational libraries.

## [1.2.11] - 2026-05-25

### Changed / Improved
- **Tests**: Configured the vitest runner command to execute with `NODE_OPTIONS="--no-webstorage"` in `package.json` to prevent environment-related web storage warnings.

## [1.2.10] - 2026-05-24

### Added
- **isTab**: Introduced `isTab` utility function to reliably detect Tab key presses across different browser environments by checking `key`, `code`, and `keyCode`.
- **isTab**: Added comprehensive unit tests in `src/functions/__tests__/isTab.test.ts` to verify tab-detection behavior under multiple key configurations.

### Changed / Improved
- **isInput**: Refactored `isInput` helper to correctly return `false` for elements with `readonly` or `disabled` attributes.
- **getKey**: Updated return type of `getKey` helper function to return `string | number | undefined` instead of forcing a strict `string`.
- **ErrorCenter**: Enhanced `ErrorCenterCauseItem` type inside `errorCenter.ts` with generic parameter support (`ErrorCenterCauseItem<D = any>`) to support strictly-typed structures for error cause detail records.
- **Maintenance**: Excluded auto-generated AI description files from package assets, standardized type outputs and version bumped to `1.2.10`.

## [1.2.5] - 2026-05-17

### Changed / Improved
- **AI Integration**: Updated the library's descriptive context (`ai-description.txt`) to better emphasize its isomorphic SSR architecture, centralized error management capabilities (`ErrorCenter`), and context-isolated storage abstractions.
- **AI Types**: Regenerated and expanded `ai-types.txt` to correctly map the recently introduced type architectures, including `ApiErrorStorageItem`, `ApiHeadersValue`, `ApiDefaultValue`, and updated Open Graph / Twitter Card meta tag enums. This ensures AI assistants have an accurate and up-to-date understanding of the core functional library.

## [1.2.4] - 2026-05-16

### Added
- **ApiError**: Introduced a comprehensive system for centralized API error identification and management, including `ApiError` (static utility), `ApiErrorStorage` (manager), and `ApiErrorItem` (data wrapper).
- **ApiError**: Added a static `add()` helper to simplify the registration of new error patterns directly through the primary utility class.

### Changed / Improved
- **ApiInstance**: Integrated the new error handling system into the core request lifecycle. It now automatically identifies errors during failed requests and passes structured error data to downstream handlers.
- **ApiDataReturn**: Enhanced response processing to support the new error system. It now automatically extracts error metadata (code, message) from nested error objects and attaches the identified `ApiErrorItem` to the final result.
- **Api**: Updated the main API overview documentation to include detailed sections on Status tracking and Error identification.
- **Documentation**: Completed a full multilingual documentation cycle (EN, RU, VI) for the `ApiError` system and updated the core `Api` documentation to reflect new capabilities.
- **Types**: Standardized `setHeaders` and `setRequestDefault` in `ApiInstance` to use the new named types for better consistency.

## [1.2.3] - 2026-05-16

### Added
- **Api**: Enhanced `setHeaders` method to support dynamic header resolution via a callback function. These headers are now re-evaluated on every request, allowing for reactive updates like fresh authentication tokens.
- **Api**: Added support for dynamic evaluation of default request data (`setRequestDefault`) via callback functions, enabling reactive query parameters.
- **Types**: Introduced `ApiHeadersValue` type and standardized the use of `ApiDefaultValue` across `ApiConfig`, `ApiFetch`, and core API classes for better consistency and maintainability.

## [1.2.2] - 2026-05-16

### Changed / Improved
- **Cookie**: Refined `getInstance` static method with explicit return type and type casting for better TypeScript compatibility.
- **Api**: Improved formatting of `ApiDataItem` type definition for better readability.
- **Maintenance**: Updated package versioning and synchronized with the new monorepo build and publish orchestration system.

## [1.2.0] - 2026-05-14

### Added
- **Functions**: Added `getFirst` utility function to safely retrieve the first element from arrays or objects, providing consistent behavior for various data structures with full TypeScript support.

### Changed / Improved
- **Dependencies**: Integrated `@dxtmisha/media` into `peerDependencies` to ensure better compatibility with media-related utilities.
- **Build System**: Optimized the build configuration by simplifying export maps and standardizing type definition paths within the distribution.
- **Maintenance**: Standardized internal scripts and performed general cleanup of obsolete type definitions and exported files.

## [1.1.8] - 2026-05-12

### Added
- **Api**: Added `isLocalhost()` static method to check if the environment is localhost.
- **Api**: Added static wrappers for `getOrigin()`, `setOrigin()`, and `getHydrationScript()`.
- **Api**: Added automatic URL replacement for localization markers: `{locale}`, `{country}`, and `{language}`.

### Changed / Improved
- **Api**: Updated `setConfig()` to include `origin` and `devMode` support.
- **Api**: Modernized request timeout logic to use `AbortSignal.timeout` when available.
- **Documentation**: Comprehensive update of the `Api` documentation across all supported languages (RU/EN/VI).
- **Tests**: Expanded unit tests for the `Api` class to ensure full coverage of static methods.

## [1.1.6] - 2026-05-08

### Added
- **ApiResponse**: Added `emulatorAsync()` method for synchronous response emulation.
- **Meta**: Added `setSuffix()` and `getSuffix()` for managing page title suffixes.
- **Meta**: Added `htmlTitle()` for generating HTML-safe title strings.

### Changed / Improved
- **Api**: Refactored `ApiInstance` and `makeQuery` for more explicit base path handling (`pathToApi`).
- **Api**: Improved SSR hydration stability and internal emulation logic.
- **MetaManager**: Optimized `set()` method to avoid redundant updates when content is identical.
- **getElementId**: Simplified ID generation logic by removing the `id-server-` prefix from server-side IDs.
- **Documentation**: Completed a massive bilingual (EN/RU) JSDoc overhaul for all functions and classes.
- **Tests**: Added unit tests for `ApiResponse.emulatorAsync` and improved general test coverage.

## [1.1.5] - 2026-04-26

### Added
- **Api**: Added `setOrigin()` and `getOrigin()` methods for managing the protocol and domain of the base URL.
- **Api**: Added `setConfig()` method for bulk configuration of API settings.
- **Api**: Added support for `endResetLimit` in `ApiFetch` to control recursive retries via `setEnd`.
- **Api**: Added support for jittered retry delays to prevent request thundering herds.
- **ServerStorage**: Added `remove()` method for deleting items from storage.
- **ServerStorage**: Added `setErrorStatus()` method to toggle visibility of context-missing errors.

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
