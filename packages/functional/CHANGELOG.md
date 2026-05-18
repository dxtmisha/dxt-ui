# Changelog

All notable changes to this project will be documented in this file.

## [1.11.13] - 2026-05-18

### Added
- **Error Handlers Integration**: Added `errorHandlers` option (of type `ErrorCenterHandlerList`) to `FunctionalPluginOptions` for registering custom global error handlers via `ErrorCenter.addHandlerList` during plugin installation.
- **Unit Tests**: Added comprehensive test cases verifying correct registration of error handlers during plugin installation.

### Changed / Improved
- **Documentation**: Extensively updated the plugin documentation in three languages (English, Russian, Vietnamese) to cover the new `errorCauses` and `errorHandlers` parameters and describe their integration with the `ErrorCenter`.

## [1.11.12] - 2026-05-17

### Added
- **getApiErrorRef**: Added a new helper function for reactive extraction of error objects (`ApiErrorItem`) from API response data, simplifying error handling in components.

### Changed / Improved
- **API Composables Refactoring**: Refactored `useApiRequest`, `useApiRef`, and all HTTP method-specific composables (`useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`) to support the new `ErrorCenter` and `ApiErrorStorage` contracts.
- **Documentation**: Substantially expanded bilingual (EN/RU) JSDoc documentation for all API composables. Added detailed examples for validating response contracts using `@effect/schema` (`validateResponseContract`) and managing potential request errors via `errorContract` (`ApiErrorStorageList`).
- **Tests**: Significantly expanded test coverage with new comprehensive unit tests for `useApiGet`, `useApiPost`, `useApiPut`, and `useApiDelete`.

## [1.11.11] - 2026-05-14

### Added
- **ListDataRef**: Introduced `getFocusItem()` method to retrieve the full data object of the currently focused list item, facilitating advanced keyboard navigation and interaction handling.
- **Types**: Added `disabled` property to the `ListDataItem` interface to support standardized state management for list items.

### Changed / Improved
- **Build System**: Refactored the distribution structure to standardize type definition paths and optimize the export map for better compatibility with modern bundlers.
- **Peer Dependencies**: Refined the `peerDependencies` configuration to ensure more robust integration with Vue and the core functional-basic package.
- **Maintenance**: Performed internal cleanup of the package configuration and updated build scripts to align with monorepo standards.

## [1.11.9] - 2026-05-12

### Added
- **useApiManagementRef**: Exposed `isResponseContractValid` and `responseValidationResult` to the return interface, providing better transparency for data schema validation.
- **useApiRef**: Added reactive properties `isResponseContractValid` and `responseValidationResult` to track the status and details of the response contract validation.

### Changed / Improved
- **JSDoc**: Comprehensive update of JSDoc comments for API management composables to improve developer experience and IDE support.

## [1.11.6] - 2026-05-01

### Added
- **useApiAsyncRef**: Introduced `useApiAsyncRef` for asynchronous API initialization within Vue async setup components.
- **useApiRef**: Added support for synchronous cache recovery via `recovery()`.
- **useApiRef**: Added support for server prefetching via `initSsr()` and Vue's `onServerPrefetch`.
- **getInject**: Moved utility to `@dxtmisha/functional` for wider availability and easier dependency injection.

### Changed / Improved
- **useApiRef**: Enhanced with response contract validation and improved initialization logic.
- **useApiRef**: Optimized internals with new helpers like `isConditions` and `getApiFetch`.
- **SSR & Hydration**: Improved hydration stability by ensuring API data is available immediately upon client mount, preventing flickering and mismatches.

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
