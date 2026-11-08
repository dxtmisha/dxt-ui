# Changelog

All notable changes to this project will be documented in this file.

## [2.1.0] - 2026-11-08

### Added
- **`ComponentStorage` & `ComponentStorageInstance`**:
  - Introduced `ComponentStorageInstance` class (`src/classes/ComponentStorageInstance.ts`) for registering and resolving Vue components with default properties (`get`, `has`, `add`, `addList`), automatically merging default and passed properties via `toBind`.
  - Introduced `ComponentStorage` static facade (`src/classes/ComponentStorage.ts`) providing shared runtime-wide access (`get`, `has`, `getItem`, `add`, `addList`).
  - Added `ComponentStorageData`, `ComponentStorageItem`, `ComponentStorageList`, and `ComponentStorageReturn` type definitions in `src/types/componentStorageTypes.ts` and exported them in `src/library.ts`.
  - Added comprehensive unit test suites (`ComponentStorageInstance.test.ts`, `ComponentStorage.test.ts`) and trilingual Storybook MDX documentation (EN, RU, VI).
- **`dxtFunctionalPlugin` Component Registration**:
  - Added `components?: ComponentStorageList` option to `FunctionalPluginOptions` in `dxtFunctionalPlugin` to register Vue components and default properties via `ComponentStorage.addList` prior to `executeUseGlobalInit()`.
  - Updated unit tests in `dxtFunctionalPlugin.test.ts` and synchronized Storybook MDX documentation (EN, RU, VI).

## [2.0.3] - 2026-11-08

### Changed
- **Dependencies**:
  - Updated `@dxtmisha/functional-basic` (`>=2.1.4`) and `@dxtmisha/media` (`>=1.1.2`) dependency version ranges.

## [2.0.2] - 2026-11-08

### Added
- **Composable Return Interfaces & Types**:
  - Exported explicit return interfaces and type aliases across composables: `UseApiRequestReturn` (`useApiRequest`), `UseFormattersRef` (`useFormattersRef`), `UseLazyRef` (`useLazyRef`), `UseLazyItemByMarginRef` (`useLazyItemByMarginRef`), `UseRouterList` (`useRouterList`), `UseSearchRef` (`useSearchRef`), and `UseSearchValueRef` (`useSearchValueRef`).
- **`useGeoIntlRef` & `useGeoUnitRef` Locale Code Parameter**:
  - Added optional `code?: RefOrNormal<string | undefined>` parameter to `useGeoIntlRef` and `useGeoUnitRef` to support custom reactive or static locale, country, or language codes.
- **`t()` Translation Helper**:
  - Added optional `translateInstance?: TranslateInstance` parameter and widened `names` generic constraint to `(string | string[])[]` in `t()` shorthand (`useTranslateRef.ts`).

### Changed
- **Design Classes (`DesignComp`, `DesignComponents`, `DesignConstructorAbstract`)**:
  - Added default generic type parameters (`COMP extends ConstrComponent = ConstrComponent`, `P extends ConstrItem = ConstrItem`) to `DesignComp`.
  - Standardized method ordering in `DesignComponents` (`get` before `is`) and moved computed property initializers (`classes`, `styles`) after the constructor in `DesignConstructorAbstract`.
- **Ref Classes (`EventRef`, `GeoFlagRef`, `GeoIntlRef`, `GeoUnitRef`, `ListDataRef`, `RouterItemRef`)**:
  - Widened optional `RefOrNormal` parameter types to accept `undefined` in `EventRef` (`elementSelectorControl`), `GeoFlagRef` (`get`, `getFlag`, `getLanguage`), `GeoIntlRef` (`constructor`, `display`, `languageName`, `countryName`, `currency`, `month`, `weekday`), and `GeoUnitRef` (`constructor`).
  - Marked `location` and `unitInstance` properties as `protected readonly` in `GeoUnitRef` and standardized method ordering across `GeoFlagRef`, `GeoUnitRef`, and `RouterItemRef`.
  - Replaced `any[]` with `ListDataItem['value'][]` for `selectedValues` and replaced `any` parameter types with `unknown` and `ListListInputItem` in `ListDataRef`.
  - Added explicit return types to static methods in `RouterItemRef` (`get`, `set`, `setOneTime`, `push`).
- **Reactive Composables & Functions**:
  - Added explicit return type annotations across `useApiDelete`, `useApiGet`, `useApiPost`, `useApiPut`, `useApiManagementRef`, `useApiRef`, `useApiRequest`, `useFormattersRef`, `useLazyItemByMarginRef`, `useLazyRef`, `useMeta`, `useRouterList`, `useSearchRef`, `useSearchValueRef`, and `useTranslateRef`.
  - Widened `value` and `nameExtra` parameter types in `getBindRef` and made `value` optional in `getBind`.
  - Refined return types in `useCookieRef` (`Ref<T | string | undefined>`), `useSessionRef` (`Ref<T | undefined>`), and `useStorageRef` (`Ref<T | undefined>`), and removed `any` from internal `ServerStorage` caches.
  - Simplified null/undefined guard in `getInject` using `!isNull(item)` and cached array length in `toBinds`.
- **Tests & Documentation**:
  - Expanded unit test suites across ref classes (`DesignComp`, `EventRef`, `GeoFlagRef`, `GeoIntlRef`, `GeoUnitRef`, `ListDataRef`, `RouterItemRef`, `ScrollbarWidthRef`) and composables (`useApi*`, `useBroadcastValueRef`, `useCookieRef`, `useFormattersRef`, `useGeoIntlRef`, `useGeoUnitRef`, `useHashRef`, `useLazyRef`, `useMeta`, `useQueryRef`, `useRouterList`, `useSearchValueRef`, `useStorageRef`).
  - Synchronized bilingual JSDoc comments, trilingual Storybook MDX documentation (EN, RU, VI), and AI type declarations in `ai-types-list/`.

### Fixed
- **`useStorageRef`**:
  - Moved cross-tab `window` `'storage'` event listener registration inside `EffectScopeGlobal.run()` and registered `onScopeDispose` cleanup (`window.removeEventListener('storage', listener)`) to prevent memory leaks.
- **`useSearchValueRef`**:
  - Reset `loading.value = false` when search delay is disabled (`0`) and on active scope disposal (`onScopeDispose`), and cleared `timeout` reference on watcher cleanup.

### Removed
- **Unused Styles**:
  - Removed unused empty flag stylesheet `src/styles/flags.css`.

## [2.0.1] - 2026-11-03

### Added
- **`useScope`**:
  - Introduced `useScope` composable for effect scope tracking, synchronous and asynchronous execution with race condition invalidation, and automatic cleanup on scope disposal.
  - Implemented `scope.run()` for synchronous execution within a captured `EffectScope`, `scope.runAsync()` for async workflows with execution currency guards, and `scope.stop()` for manual scope teardown.
  - Exported `useScope` in package entry point (`src/library.ts`).
  - Added comprehensive unit test suite in `src/composables/ref/__tests__/useScope.test.ts`.
  - Added trilingual Storybook documentation (EN, RU, VI).
- **`watchEffectAsync`**:
  - Introduced `watchEffectAsync` helper utility with evaluation currency guard, automatic cleanup, and SSR skipping (`isDomRuntime()`).
  - Coordinates with `useScope` and `effectScope` for deterministic async side effect orchestration.
  - Exported `watchEffectAsync` in package entry point (`src/library.ts`).
  - Added comprehensive unit test suite in `src/functions/__tests__/watchEffectAsync.test.ts`.
  - Added trilingual Storybook documentation (EN, RU, VI).
- **`toShallowRefItem`**:
  - Introduced `toShallowRefItem` utility for creating shallow reactive references with direct assignment and unwrapping.
  - Exported `toShallowRefItem` in package entry point (`src/library.ts`).
  - Added unit test suite in `src/functions/ref/__tests__/toShallowRefItem.test.ts` and trilingual Storybook documentation (EN, RU, VI).
- **`getApiErrorRef`**:
  - Introduced `getApiErrorRef` helper utility to extract structured, localized reactive error descriptions from API error items.
  - Exported `getApiErrorRef` in package entry point (`src/library.ts`).
  - Added comprehensive unit test suite in `src/functions/ref/__tests__/getApiErrorRef.test.ts` and trilingual Storybook documentation (EN, RU, VI).
- **`useApiManagementRef` & `useApiManagementAsyncRef` Mutation Callbacks**:
  - Added `actionSuccess` and `actionError` lifecycle callback options to `useApiManagementRef` and `useApiManagementAsyncRef` for handling successful and failed CRUD mutations.
  - Added unit test coverage for callback execution across create, update, and delete actions.
- **`getInject`**:
  - Added `defaultValue` support and `InjectedValue` type definition in `src/functions/getInject.ts`.
  - Preserved falsy injected values (`false`, `0`, `''`, `null`) without falling back to default values erroneously.
  - Added comprehensive unit test suite in `src/functions/__tests__/getInject.test.ts` and trilingual Storybook documentation (EN, RU, VI).
- **`DesignComp` & Lifecycle Tests**:
  - Added `DesignComp` component helper class and unit test suite in `src/classes/design/__tests__/DesignComp.test.ts`.
  - Added standalone test suites in `src/classes/design/__tests__/DesignLifecycleAbstract.test.ts` and `src/classes/design/__tests__/DesignName.test.ts`.
- **`DesignName`**:
  - Introduced `DesignName` class for component naming, BEM class resolution, and CSS custom property generation (`getName()`, `getDesign()`, `getSubClass()`, `getStatusClass()`, `getStyle()`).
  - Cached normalized class and design names to optimize performance during component rendering.
  - Exported `DesignName` in package entry point (`src/library.ts`).
- **`DesignLifecycleAbstract`**:
  - Introduced `DesignLifecycleAbstract` base class declaring optional synchronous lifecycle callbacks (`onMounted`, `onUnmounted`) for logic helpers and sub-constructors.
  - Exported `DesignLifecycleAbstract` in package entry point (`src/library.ts`).
- **`DesignLogicAbstract`**:
  - Introduced `DesignLogicAbstract` base orchestrator for component business logic, dependency injection, and effect scope management.
  - Added lazy dependency instantiation within captured `EffectScope` via `getInstance(name)`.
  - Added automated lifecycle callback coordination with Vue (`onMounted`, `onUnmounted`) via `callLifecycle()`.
  - Integrated centralized error reporting via `ErrorCenter` (`group: 'design'`) on lifecycle callback failures.
  - Added comprehensive unit test suites in `DesignLogicAbstract.test.ts` and `DesignLogicAbstract.ssr.test.ts`.
  - Exported `DesignLogicAbstract` in package entry point (`src/library.ts`).
- **Constructor Types**:
  - Added `ConstrConstructors`, `ConstrParameters`, and `ConstrInstance` type definitions in `src/types/constructorTypes.ts` for typed dependency injection in design logic classes.
- **`DesignConstructorAbstract` Tests**:
  - Added comprehensive test suite in `src/classes/design/__tests__/DesignConstructorAbstract.test.ts`.

### Changed
- **`computedAsync`**:
  - Refactored with lazy watcher activation, scope isolation, improved generic ergonomics (`<R, I = R>`), and centralized `ErrorCenter` integration (`group: 'functional'`, code `'computed-async'`).
  - Replaced local disposed flag with native `scope?.active !== false` check and removed redundant `onScopeDispose`.
  - Prevented outdated asynchronous evaluations from overwriting newer results.
  - Expanded unit test suites and updated Storybook documentation (EN, RU, VI).
- **`computedEternity`**:
  - Hardened SSR safety and error handling; discards obsolete asynchronous evaluations and catches getter errors cleanly.
  - Expanded unit test suite in `src/functions/__tests__/computedEternity.test.ts` and updated Storybook documentation (EN, RU, VI).
- **`executeUse`**:
  - Added `initGlobal` helper, detached effect scope caching, and process-wide SSR singleton support.
  - Validated plain-object singleton containers, supported interface-based result types, and switched to sequential instance ID generation.
  - Expanded unit test suite in `src/functions/__tests__/executeUse.test.ts`.
- **`toBinds` & `toBind`**:
  - Widened parameter typing to accept `null` and `undefined` safely.
  - Optimized iteration loops and property merging fast paths.
  - Expanded test suites in `toBinds.test.ts` and `toBind.test.ts`.
- **`getClassName`**:
  - Supported object and array class syntax via Vue's `normalizeClass`.
  - Widened prop typing and added comprehensive unit test suite in `src/functions/render/__tests__/getClassName.test.ts`.
- **`getBind`**:
  - Improved handling of falsy values (`0`, `false`, `''`).
  - Standardized checks using primitive helper functions (`hasKey`, `isString`, `isNull`).
- **`getOptions`**:
  - Added support for `ApiMethod` union type in method configuration.
  - Added unit tests in `src/functions/__tests__/getOptions.test.ts` and updated documentation.
- **`dxtFunctionalPlugin`**:
  - Refined plugin installation pipeline, social icon wiring, and test assertions in `dxtFunctionalPlugin.test.ts`.
- **`DatetimeRef` & `GeoRef`**:
  - Enforced `DatetimeRef` state ownership: defaulted locale code to `GeoRef.getLocation()` for automatic global locale reactivity.
  - Reset direct `setType` and `setCode` mutations made through `getDatetime()` and avoided redundant `watch(this.date)` cycles.
  - Added fallback projection creation in `GeoRef` when `EffectScopeGlobal.run` returns `undefined`.
  - Projected language metadata via `EffectScopeGlobal` and supported `undefined` return type in `setValueDefault` factory.
- **Design Classes (`DesignComponents`, `DesignConstructorAbstract`, `DesignLogicAbstract`, `DesignName`)**:
  - **`DesignConstructorAbstract` Architecture**: Eliminated requirement to manually call `this.init()`; classes, styles, and expose data are now dynamically computed from `initClasses()`, `initStyles()`, and `initExpose()`. Delegated naming to `DesignName` (`this.naming` / `getNaming()`). Made `this.components` optional. Switched to Vue's `normalizeClass` and `normalizeStyle`. Updated `render()` to track slot changes reactively via `shallowRef` and `onBeforeUpdate` with `isDifferent`. Updated `initSlot` to use `renderSlot` for fragment rendering. Streamlined `getAttrs()` via rest destructuring. Added default generic arguments and marked `attrs` and `slots` as `readonly`.
  - **`DesignComponents`**: Added default generic types, marked caching as `readonly`, and optimized cache retrieval in `getModification`.
  - **`DesignLogicAbstract`**: Replaced `forEach` with `forOwn` for type-safe constructor item condition watchers; simplified lifecycle invocation and removed redundant array flattening in `DesignName`.
- **Dependencies**:
  - Updated `@dxtmisha/functional-basic` dependency to `>=2.0.1`.
  - Updated `@dxtmisha/media` dependency to `>=1.0.0`.
  - Updated `vue` dependency to `>=3.5.44`.
- **Documentation & Types**:
  - Updated Storybook documentation across English, Russian, and Vietnamese.
  - Synchronized AI type declarations in `ai-types-list/`.

### Fixed
- **`useLazyItemByMarginRef`**:
  - Retained element reference during unmount to ensure reliable cleanup in `removeLazyItem`.
- **`useApiRef` & `useApiRequest`**:
  - Hardened error handling, concurrency, and global watch sources.
- **Storage & Cookie Types**:
  - Type cast `DataStorage.get` return value to satisfy strict ref generic types.
  - Fixed `useCookieRef` SSR boolean serialization assertion.

### Removed
- **`DesignConstructorAbstract`**:
  - Removed `this.refs` (`toRefs(this.props)`) property to eliminate unnecessary reactive wrapper overhead and simplify constructor signatures.
  - Removed deprecated helper methods: `getName()`, `getDesign()`, `getSubClass()`, `getStatusClass()`, `getStyle()`, `toClass()`, and `toClassName()` (migrated to `DesignName`).

## [1.16.0] - 2026-10-14

### Added
- **`useLazyItemByMarginRef`**:
  - Added `removeLazyItem(): void` method to the returned object, allowing explicit removal of the tracked element from the underlying `IntersectionObserver` instance.
  - Added automatic removal on component unmount via `onUnmounted` when invoked inside an active Vue component setup scope.
  - Added `unmounted` parameter (`boolean`, defaults to `true`) to allow consumers to toggle or disable automatic `onUnmounted` cleanup when managing lifecycle externally.
  - Added unit test coverage for `removeLazyItem` in `useLazyItemByMarginRef.test.ts`.
  - Updated documentation across English, Russian, and Vietnamese Storybook guides.
- **`FUNCTIONAL_ERROR_GROUP`**:
  - Added the exported `FUNCTIONAL_ERROR_GROUP = 'functional'` constant in `src/types/errorTypes.ts` and re-exported it from `src/library.ts` for consistent `ErrorCenter` grouping across functional utilities.
- **`computedAsync` Tests**:
  - Expanded regression coverage for concurrent evaluations, ignored and empty results, synchronous errors and rejected promises, recovery, SSR, effect scope disposal, and component unmount.

### Changed
- **`computedAsync`**:
  - Changed default result handling: when the `ignore` argument is omitted, `undefined` now clears previous data. Explicitly pass `undefined` as the third argument to preserve the previous behavior of ignoring that result.
  - Current getter errors now clear the result and are reported through `ErrorCenter` using `FUNCTIONAL_ERROR_GROUP` and the `computed-async` code.
  - Expanded bilingual JSDoc and updated English, Russian, and Vietnamese Storybook guides to document evaluation invalidation, scope ownership, error handling, and the `ignore` contract.
- **Design Classes & Types**:
  - Restored full standalone implementations of `DesignComponents` and `DesignConstructorAbstract` in `src/classes/design/`, consolidating component registry management, BEM naming conventions, custom CSS variable generation, attribute filtering, and class/style resolution without intermediate base abstractions.
  - Restored all core constructor interfaces and types directly in `src/types/constructorTypes.ts` with comprehensive bilingual JSDoc documentation.
- **Dependencies**:
  - Updated `@dxtmisha/functional-basic` dependency to `>=1.12.0`.

### Fixed
- **`computedAsync`**:
  - Prevented outdated asynchronous evaluations from overwriting the current result, including when a newer result is ignored or still pending. Errors from invalidated evaluations are discarded.
  - Bound the lazily initialized watcher to the effect scope where the computed property was created, even when first accessed outside that scope. Pending results are discarded after scope disposal, and disposed properties no longer initialize watchers.
  - Removed redundant background `update().then()` execution on the SSR path (`!isDomRuntime()`). Prevents unhandled promises and potential `ReferenceError` crashes from DOM-dependent getters during server-side rendering, ensuring `computedAsync` strictly returns `initialState` on the server and defers async reactive evaluation to client hydration.

### Removed
- **Deprecated Design Classes**:
  - Removed legacy `DesignAbstract`, `DesignAsyncAbstract`, and `DesignChanged` classes, their unit tests, and corresponding documentation.
  - Removed unused flag asset `src/assets/flags.webp`.

## [1.15.18] - 2026-10-05

### Changed
- **Tree-Shaking & Top-Level Purity**:
  - Annotated `useMeta` singleton factory call with `/*#__PURE__*/` (`const item = /*#__PURE__*/ executeUseLocal(...)`) to ensure bundlers safely tree-shake unused exports without treating top-level module initialization as a side effect.
  - Simplified component ID generation in `executeUse.ts`: removed dynamic `random()` code and unused `random` import from `@dxtmisha/functional-basic`, switching to sequential IDs (`__execute_use::${globalId++}`).
- **Dependencies**:
  - Updated `@dxtmisha/functional-basic` to `>=1.11.2`.
  - Updated `@dxtmisha/media` to `>=0.8.1`.

### Removed
- **`flags` Subpath Export**:
  - Removed `src/flags.ts`, `ai-types-list/flags.d.ts`, and `./flags` export from `package.json` following migration of flag SVG assets to `@dxtmisha/media/flags`.
- **Empty Stylesheet**:
  - Removed unused `src/style.scss` and its import from `src/library.ts`.

## [1.15.17] - 2026-10-01

### Fixed
- **executeUse**: Added check for already provided instances on the current component (`instance.provides`) in `ExecuteUseType.provide`, preventing duplicate initialization when called multiple times within the same component setup.

## [1.15.16] - 2026-09-07

### Changed
- **Dependencies**: Updated workspace package dependencies to explicit `>=` semver ranges.
- **Repository Maintenance**: Updated `.gitignore` to track AI type definitions and ignore AI build caches.

## [1.15.15] - 2026-08-30

### Added
- **Documentation**: Migrated package documentation to `src/storybook/` with comprehensive guides across English, Russian, and Vietnamese.
- **LLM Configuration (`llms.txt`)**: Added `llms.txt` summarizing Vue 3 reactive composables, singletons, and storage sync architecture.

## [1.15.14] - 2026-08-22

### Added
- **DesignConstructorAbstract**: Added `getKeyClass(name)` method to retrieve `{ key, class }` binding object for component sub-elements based on element class/key name.
- **ConstrBind**: Added default generic parameter `T = ConstrItem` to `ConstrBind<T = ConstrItem>` type definition.
- **Exports & Distribution**: Added `ai-screenshot` to package `files` and configured explicit export mappings for `./ai-types.md`, `./ai-description.md`, `./ai-resources/*`, and `./ai-screenshot/*` in `package.json`.
- **Documentation**: Migrated package documentation to `src/storybook/` with comprehensive guides across English, Russian, and Vietnamese.

## [1.15.13] - 2026-08-20

### Added
- **LLM Configuration (`llms.txt`)**: Added `llms.txt` indexing package capabilities, core composables (`executeUse`, `useApiRef`, `useStorageRef`, `useGeoIntlRef`), and AI resource documentation links.

### Changed
- **AI Resource Metadata & Types**:
  - Migrated prompt resource cache from monolithic `prompts.json` to individual resource descriptor files in `ai-types-list/resources/`.
  - Regenerated AI type definitions and package descriptions with updated AI prompt formats.

## [1.15.12] - 2026-08-13

### Changed
- **Scripts**: Updated `prepublishOnly` script in `package.json` to execute `dxt-types-save` (`npm run library && npm run build && dxt-types-save`).

## [1.15.11] - 2026-08-13

### Changed
- **AI Documentation & Types**: Updated `types` script in `package.json` to build the library before running `dxt-types`, added `ai-types.md` to `.gitignore`, and regenerated modular `ai-types-list/` type declaration files.

## [1.15.10] - 2026-08-11

### Changed
- **AI Documentation**: Added architectural directive in `ai-doc.md` requiring complex business logic with potential for reuse to be extracted into external service composables wrapped with `executeUse*` (`executeUseGlobal`, `executeUseLocal`, or `executeUseProvide`).

## [1.15.8] - 2026-08-05

### Changed
- **ListRecord**: Refactored `ListRecord<Item extends ListDataBasic>` type definition to `Item[] | Record<string, Item>` for enhanced flexibility with custom item objects and record structures.
- **package.json**: Expanded package `files` distribution list to include `ai-prompts` and `ai-mcp.json` context definitions.
- **AI Documentation**: Updated JSDoc prompt rules, added MCP resource definitions (`ai-mcp.json`), and updated package metadata (`ai-description.md`, `ai-types.md`).

## [1.15.7] - 2026-08-05

### Changed
- **AI Documentation**: Modularized package documentation and generated `ai-mcp.json` resource definitions alongside updated `ai-description.md` and `ai-types.md`.

## [1.15.6] - 2026-07-28

### Changed
- **GeoIntlRef & useGeoIntlRef**: Added JSDoc `@remarks` guidelines recommending the use of standard non-reactive `GeoIntl` from `@dxtmisha/functional-basic` when reactivity is not required.
- **Documentation**: Updated AI documentation context (`ai-description.md`, `ai-types.md`) and package type definitions.

## [1.15.5] - 2026-07-25

### Added
- **useSearchRef**: Supported reactive `Ref` and getter callbacks for the `columns` parameter via `SearchColumnsInput` (`SearchColumnsRef<T, K>`), dynamically updating search results when target columns change.
- **searchTypes**: Introduced `SearchColumnsRef` and `SearchColumnsInput` type definitions to support reactive column definitions.

### Changed
- **GeoIntlRef & useGeoIntlRef**: Added JSDoc `@remarks` guidelines recommending the use of standard non-reactive `GeoIntl` from `@dxtmisha/functional-basic` when reactivity is not required.
- **package.json**: Updated package `description` and expanded `keywords` list to comprehensively cover composables, `executeUse` singletons, and reactive utilities. Fixed `homepage` and `repository.directory` paths.
- **README.md**: Updated documentation and Quick Start code examples to showcase `executeUseGlobal` state singletons and reactive composables while preserving original document layout and style.

## [1.15.4] - 2026-07-24

### Changed
- **useLazyItemByMarginRef**: Added explicit return type annotations (`ReturnType<typeof useLazyRef>`) for `getItemByMargin` and `LazyItemByMargin[]` for `getItems`.
- **useLazyRef**: Updated `getItem(element?: HTMLElement)` method signature to accept optional element references.

## [1.15.3] - 2026-07-14

### Changed
- **executeUse**: Refactored singleton lifecycle and cache management to use `ServerStorage` with key `__executeUse::${id}__` via a `storageKey` constant, replacing local closure variables and supporting clean instance removal.
- **useMeta**: Updated metadata initialization to reference `MetaStatic.getItem()` rather than using the class object itself.

### Fixed
- **Tests**: Fixed the mock setup in `useMeta.test.ts` to include the `getItem` method on the mocked `MetaStatic` class.

## [1.15.0] - 2026-07-02

### Added
- **GeoUnitRef**: Introduced a new reactive class wrapper `GeoUnitRef` that wraps the isomorphic `GeoUnit` class to support Vue 3 `Ref` values as input parameters, returning `ComputedRef<string>` values for all unit formatting methods.
- **useGeoUnitRef**: Added a new composable function `useGeoUnitRef()` to return a `GeoUnitRef` instance.
- **Tests**: Created comprehensive unit tests in `GeoUnitRef.test.ts` and `useGeoUnitRef.test.ts` to verify Vue reactivity integration.

## [1.14.5] - 2026-06-29

### Changed
- **GeoFlagRef**: Refactored constructor to default to `GeoRef.getLocation().value` dynamically and reactively, avoiding hard dependencies on the static `Geo.getLocation()` during SSR.
- **GeoIntlRef**: Updated fallback locale resolution to use `GeoRef.getLocation().value` instead of `GeoRef.getLanguage().value` when location is empty.

## [1.14.3] - 2026-06-27

### Added
- **dxtFunctionalPlugin**: Added `errorCallbacks` configuration option (type `ErrorCenterHandlerCallback[]`) to allow registering global error callbacks via `ErrorCenter.addCallback` during Vue plugin initialization.
- **dxtFunctionalPlugin**: Added unit tests verifying correct registration of global callbacks during plugin installation.

## [1.14.2] - 2026-06-25

### Added
- **dxtFunctionalPlugin**: Added `iconsSocial` configuration option (type `InputSocialIcons`) to allow registering custom social network icons globally via `MediaSocial.addIcons` during Vue plugin initialization.

## [1.14.1] - 2026-06-23

### Added
- **GeoFlagRef**: Added a new reactive wrapper class for `GeoFlag` from `@dxtmisha/functional-basic`, providing methods like `get()`, `getFlag()`, `getList()`, and `getNational()` to retrieve flags and names reactively.
- **GeoFlagRef**: Added `GeoFlagRef.test.ts` for unit testing the reactive flag behaviors.

## [1.14.0] - 2026-06-22

### Added
- **useQueryRef**: Introduced a new Vue 3 reactive composable to manage URL query/GET parameters reactively, mimicking `useHashRef` behavior.
- **useQueryRef**: Added `useQueryRef.test.ts` unit test suite to validate parameter retrieval, reactive updates, and event callbacks.

### Fixed
- **GeoRef**: Updated `GeoRef.test.ts` assertions for the `'en-VN'` locale to expect country `'VN'` and language `'vi'` to align with the country-first localization resolution updates.

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
