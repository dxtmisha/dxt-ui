### Core Purpose
A high-level utility library designed for Vue 3 providing architectural abstractions for component design, reactive state management, sophisticated API orchestration with SSR support, and localized geographic/unit formatting.

### Key Expositions
*   **Design Architecture:** `DesignConstructorAbstract`, `DesignComponents`, and `DesignAbstract` provide a structured class-based inheritance model for building complex, reactive functional components with automatic lifecycle handling, style/class management, and slotted rendering.
*   **API Orchestration:**
    *   `useApiRef`: Centralized reactive API request handler with built-in SSR, caching, transformation, validation (supporting `@effect/schema`), and error handling.
    *   `useApiManagementRef` / `useApiManagementAsyncRef`: High-level orchestration for CRUD operations (GET/POST/PUT/DELETE) with client-side searching, list formatting, and atomic mutation state management.
    *   Standard wrappers: `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete` for cleaner endpoint interaction.
*   **Reactive Utilities:** 
    *   `executeUse`: A factory for creating managed singletons (`global`, `provide`, `local`) to ensure unified state across component trees.
    *   `useTranslateRef`, `useStorageRef`, `useCookieRef`, `useSessionRef`: Reactive bridges to local persistence and internationalization.
    *   `computedAsync`, `computedEternity`: Advanced reactive primitives for asynchronous data flow and on-demand caching.
*   **Data Formatting:** `GeoIntlRef`, `GeoUnitRef`, and `useFormattersRef` provide reactive, localized formatting for numbers, currencies, units (metric/imperial conversion), and dates.
*   **List & Search Logic:** `ListDataRef` and `useSearchRef` manage complex hierarchical or flat data structures with optimized search and filtering capabilities.

### Triggers for Studying ai-types.md
Mandatory to review `ai-types.md` when:
1.  **System Integration:** You are implementing new API endpoints, configuring `dxtFunctionalPlugin`, or setting up global state providers (`executeUseProvide`).
2.  **Schema Validation:** You are utilizing `validateResponseContract` or `validateRequestContract` and require the expected structure for `ApiDataValidation` or error storage interfaces.
3.  **Component Construction:** You are extending `DesignConstructorAbstract` or implementing custom component modifications.
4.  **Type Mapping:** You encounter complex generic constraints in the `useApiManagementRef` signature or `Constr` prefixed utility types (e.g., `ConstrBind`, `ConstrOptions`, `ConstrEmit`).

### Integration Context
The library acts as a foundational service layer in the system stack. It integrates directly with Vue 3's composition API, Vue Router for navigation, and `@dxtmisha/functional-basic` for core network and utility logic. It is intended to be used as a singleton-pattern service provider within an application's plugin system via `dxtFunctionalPlugin` to facilitate consistent SSR state hydration and global dependency injection.