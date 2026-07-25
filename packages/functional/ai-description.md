Core Purpose: A comprehensive toolkit for Vue 3 providing reactive abstractions for API orchestration, geographic/locale-aware data formatting, and modular component construction. It centralizes state management for network requests, internationalization (Intl), and standardized UI element composition.

Key Expositions:
- API Orchestration: `useApiRef`, `useApiManagementRef` (and their SSR-optimized `Async` variants) for full CRUD lifecycle management, including response validation via `@effect/schema`, automated error handling, and reactive list formatting.
- Reactive Data Classes: `ListDataRef` (complex list state management), `DatetimeRef` (reactive date processing), `GeoIntlRef`/`GeoUnitRef` (localized number, currency, unit, and date formatting), and `GeoFlagRef` (country/language flag management).
- Constructor Architecture: `DesignConstructorAbstract` and `DesignComponents` for building typed, reactive functional components with standardized class/style/slot handling.
- Global State/Lifecycle: `executeUse` factory (Global/Provide/Local singletons), `EffectScopeGlobal`, `useMeta` (SSR-friendly meta tags), and `useLazyRef` (IntersectionObserver tracking).
- Utility Functions: `computedAsync`, `computedEternity`, `toBind`/`toBinds` (style/class merging), and reactive wrappers like `useCookieRef`, `useStorageRef`, and `useTranslateRef`.

Triggers for Studying ai-types.md:
- Mandatory when implementing or extending any component class derived from `DesignConstructorAbstract`.
- Mandatory when customizing data contracts (API, list item types, search columns, or component props).
- Mandatory when the AI encounters `Constr*`, `ApiManagement*`, or `RefType` interface definitions, as these contain the strict structural requirements for system-wide architecture and component interaction.

Integration Context: 
This library serves as a middleware layer between raw Vue 3 primitives and business logic. It relies on `@dxtmisha/functional-basic` for core engine utilities and expects integration with `vue-router` for navigation management. It is designed to be configured globally via `dxtFunctionalPlugin` and is compatible with SSR (Server-Side Rendering) patterns provided by frameworks like Nuxt or custom Vite setups.