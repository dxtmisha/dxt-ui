# Changelog

All notable changes to this project will be documented in this file.

## [1.7.0] - 2026-07-11

### Added
- **getLast**: Introduced a new `getLast` utility function to safely retrieve the last element from arrays or objects, with full bilingual JSDocs.
- **Tests**: Created a comprehensive unit test suite (`getLast.test.ts`) to validate last-element extraction across multiple data types.

## [1.6.2] - 2026-07-06

### Changed
- **Documentation**: Updated AI documentation and developer guides (`ai-doc.md`, `ai-doc.ru.md`) with explicit rules for structuring, exporting, and managing types, interfaces, enums, and API schemas (specifically mandating the use of `@effect/schema` when available in project dependencies).

## [1.6.1] - 2026-07-04

### Changed
- **Build System**: Corrected the `types` and `exports` mapping paths in `package.json` from `dist/src/library.d.ts` to `dist/library.d.ts`.

## [1.6.0] - 2026-07-03

### Added
- **isMetaKey**: Introduced `isMetaKey` utility function to detect active modifier key presses (`metaKey`, `altKey`, `ctrlKey`) in KeyboardEvent objects.
- **Tests**: Created a comprehensive test suite `isMetaKey.test.ts` to verify modifier key detection.

## [1.5.0] - 2026-07-02

### Added
- **GeoUnit**: Introduced a new isomorphic class `GeoUnit` for localized unit formatting and automatic conversions (e.g. converting and formatting Celsius to Fahrenheit, grams to ounces, meters to feet) for customary unit systems (US, Myanmar, Liberia, UK).
- **Tests**: Created a comprehensive test suite `GeoUnit.test.ts` to verify unit translation and formatting across multiple locales.

### Changed
- **geoTypes**: Standardized `GeoItem['unit']` property types in `geoTypes.ts` to use exact Unicode CLDR unit names.

## [1.4.4] - 2026-06-27

### Added
- **ErrorCenterHandler**: Introduced `callbacks` list and `addCallback(callback)` method to register callback functions that are executed on every triggered error.
- **ErrorCenterInstance**: Added `addCallback(callback)` instance method to register global error callbacks.
- **ErrorCenter**: Added static `addCallback(callback)` helper to simplify the registration of global error callbacks.
- **Tests**: Added comprehensive unit tests in `ErrorCenterHandler.test.ts`, `ErrorCenterInstance.test.ts`, and `ErrorCenter.test.ts` to verify the execution of global callbacks.

## [1.4.3] - 2026-06-25

### Changed
- **GeoInstance**: Refactored the `findLanguage` helper to safely resolve custom language overrides from the location code (e.g. `'en-VN'`) by looking up and validating the existence of matching languages via `getByLanguage`, falling back to the country's default language if not found.
- **GeoInstance**: Updated both the `constructor` and `set()` methods to consistently resolve active language state via the updated `findLanguage` helper.

## [1.4.2] - 2026-06-25

### Added
- **Api**: Added request wrapper support via a custom `wrapper` callback configuration option in both `ApiConfig` and `ApiFetch`, enabling developer interception or custom wrapping of the fetch request lifecycle.
- **Tests**: Added comprehensive unit tests for request wrapping options on both instance-level and individual request-level.

## [1.4.1] - 2026-06-23

### Added
- **GeoFlag**: Added language-specific metadata lookup and filtering methods:
  - `getLanguage(code)`: Looks up language details and its flag icon.
  - `getListLanguage(codes)`: Retrieves a list of unique languages without country duplicates.
  - `getNationalLanguage(codes)`: Retrieves localized (national) language names.
- **geoTypes**: Extended `GeoFlagItem` type definition with `languageCode` and `countryCode` properties.

## [1.4.0] - 2026-06-22

### Added
- **UrlInstanceAbstract**: Created base abstract class managing shared reactive state properties and methods (`data`, `watch`, `block`, `time`, `get()`, `set()`, `addWatch()`, `removeWatch()`, `reload()`, `initData()`, `makeWatch()`) for URL-based state instances.
- **UrlItem**: Added `getParams()` to parse URL parameters into an object with type transformations, and `setParams(params)` to replace and filter empty, null, or undefined parameters.
- **UrlItem**: Added comprehensive unit tests in `UrlItem.test.ts` for verifying parameter retrieval and mutation logic.

### Changed
- **HashInstance**: Refactored to extend `UrlInstanceAbstract`, inheriting all core state management properties and handlers.
- **QueryInstance**: Refactored to extend `UrlInstanceAbstract` and delegate query parameter reading/writing to `UrlItem.getParams()` and `UrlItem.setParams()`, ensuring SSR compatibility.

### Fixed
- **QueryInstance**: Updated `QueryInstance.test.ts` to run under the `jsdom` test environment, fixing `window is not defined` execution errors, and enhanced mocking setup.

## [1.3.15] - 2026-06-19

### Added
- **GeoInstance**: Introduced `getLocationCountry(): string` and `getLocationLanguage(): string` methods to directly retrieve country and language codes from the current location string.
- **Geo**: Added static `getLocationCountry()` and `getLocationLanguage()` wrappers.
- **geoTypes**: Extended `GeoItemFull` interface to include `location`, `locationCountry`, and `locationLanguage` properties.

### Changed / Improved
- **GeoInstance**: Refactored `toFull` helper to populate `location`, `locationCountry`, and `locationLanguage` fields dynamically on the resolved `GeoItemFull`.
- **GeoInstance**: Re-arranged matching logic order in `getByCode` to prioritize country matching (`getByCountry`) before language matching (`getByLanguage`).
- **GeoInstance**: Updated `toStandard` method signature to accept an optional `language` override.

### Fixed
- **Tests**: Adjusted `Geo.test.ts` and `GeoIntl.test.ts` fallback expectations to align with the country-first matching behavior (e.g. `'en-VN'` resolving to `vi-VN` / country `'VN'`).
- **Tests**: Fixed `UrlItem.test.ts` `getInstance` tests to follow the correct argumentless static `UrlItem.getInstance()` API signature.

## [1.3.11] - 2026-06-18


### Changed / Improved
- **ErrorCenterHandler**: Integrated server-side error stack tracing (`console.trace`) when logging causes in non-browser (SSR) environments.

## [1.3.10] - 2026-06-17

### Fixed
- **GeoInstance**: Cleaned up internal debug console logs from `getItem` and `getCookie` methods.

## [1.3.9] - 2026-06-17

### Changed / Improved
- **GeoInstance**: Extended `setValueDefault` to accept functional callbacks: `code?: string | (() => string)`. Dynamic resolution via `executeFunction` is performed when fallback to the default code occurs.
- **Geo**: Updated static `setValueDefault` signature to accept a function parameter `string | (() => string)`.

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
