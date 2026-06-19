# Changelog

All notable changes to this project will be documented in this file.

## [1.13.7] - 2026-06-19

### Added
- **GeoRef**: Added static reactive `getLocation()`, `getLocationCountry()`, and `getLocationLanguage()` methods returning isolated `ComputedRef<string>` representations of location components.

### Fixed
- **Tests**: Adjusted test assertions in `GeoRef.test.ts` for `'en-VN'` to expect country `'VN'` and standard `'en-VN'` under the country-first matching priority.

## [1.13.5] - 2026-06-17


### Changed / Improved
- **GeoRef**: Refactored static getters (`getCountry`, `getLanguage`, `getStandard`, `getFirstDay`) to use request-isolated computed references via `ServerStorage.get`. This isolates their reactive state per request, resolving potential cross-request state pollution during SSR.

## [1.13.4] - 2026-06-17

### Added
- **GeoRef**: Added static reactive `setValueDefault` method to configure the default country/language code.
- **dxtFunctionalPlugin**: Extended `location` configuration option to accept `string | (() => string)` callbacks, registering the default fallback location dynamically during Vue application initialization.

## [1.13.3] - 2026-06-16

### Added
- **GeoRef**: Added static reactive `setValueDefault` method to configure the default country/language code.
- **dxtFunctionalPlugin**: Added `location?: string` plugin configuration parameter to set the default fallback location dynamically during Vue application initialization.

### Changed / Improved
- **Tests**: Configured test suites (`GeoRef.test.ts` and `dxtFunctionalPlugin.test.ts`) to cover fallback value detection and default settings.

## [1.13.2] - 2026-06-05

### Changed / Improved
- **Maintenance**: Version bumped to `1.13.2` to synchronize package updates across the workspace.

## [1.13.1] - 2026-06-02

### Changed / Improved
- **Maintenance**: Version bumped to `1.13.1` to align with monorepo release updates.

## [1.13.0] - 2026-05-29

### Added
- **refTypes**: Added `RefOrNormalOrFunction` union type representing references, normal values, or functions returning them.
- **Functions**: Introduced `executeFunctionRef` utility function to safely execute functions or unwrap reference values in a single call.

## [1.12.3] - 2026-05-25

### Changed / Improved
- **Build System**: Configured `ui-priority: 200` inside `package.json` to ensure prioritized dependency order sorting during workspace build actions.
- **Maintenance**: Version bumped to `1.12.3` for consistency.

## [1.12.2] - 2026-05-25

### Changed / Improved
- **Tests**: Configured vitest runner execution environment via the `--no-webstorage` flag inside `package.json` to avoid persistent localStorage/sessionStorage warning outputs.

## [1.12.1] - 2026-05-21

### Fixed
- **`GeoFlagRef`**: Methods `get()`, `getFlag()`, `getList()`, and `getNational()` now accept `RefOrNormal<...>` reactive arguments instead of plain values. Parameters are unwrapped internally via `getRef()`, enabling reactive bindings to be passed directly without manual `.value` access.

## [1.12.0] - 2026-05-19

### Added
- **`UseApiRequestSetup` interface**: Introduced a new exported interface that centralises all configuration for `useApiRequest` into a single typed options object (`path`, `method`, `action`, `transformation`, `validateRequestContract`, `validateResponseContract`, `errorContract`).
- **`validateRequestContract`**: Added to both `UseApiRequestSetup` and `ApiManagementRequest` — a validation function that verifies the outgoing request payload matches the expected structure before the request is sent.
- **`validateResponseContract`**: Added to both `UseApiRequestSetup` and `ApiManagementRequest` — a validation function (recommended for use with `@effect/schema`) that verifies the API response matches the expected structure and returns an `ApiDataValidation` result.
- **`isApiSuccess` import**: Integrated `isApiSuccess` from `@dxtmisha/functional-basic` into `useApiRequest` for internal contract-validation branching.

### Changed / Improved
- **`useApiRequest` (Breaking)**: Refactored to accept a single `UseApiRequestSetup<T>` options object instead of multiple positional parameters. All call sites must be updated.
- **`useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`**: Updated to accept their own dedicated setup objects aligned with the new `UseApiRequestSetup` signature, forwarding `validateRequestContract` and `validateResponseContract` down the chain.
- **`useApiManagementRef`**: Refactored to forward the new `validateRequestContract` and `validateResponseContract` properties when constructing request setup objects.
- **`ApiManagementRequest` type**: Extended with a `Request` generic parameter and the two new contract-validation fields.
- **Tests**: Updated all unit test suites (`useApiRequest`, `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`) to follow the new single-object signature and correctly mock `getStatus`.
- **Documentation**: Updated multilingual MDX docs (EN / RU / VI) for `useApiRequest`, `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`, and `useApiManagementRef` to reflect the refactored API.

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
