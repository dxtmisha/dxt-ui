Core Purpose: Provides a structured, reactive framework for Vue 3 component design and API orchestration. It simplifies complex UI state management, internationalization, and asynchronous API interactions through specialized classes and composables.

Key Expositions:
- Design Construction: DesignAbstract, DesignAsyncAbstract, and DesignComponents for building complex component structures with lifecycle hooks and automated change tracking.
- API Orchestration: useApiRef, useApiManagementRef (and Async variants) for handling GET/POST/PUT/DELETE requests with built-in SSR support, validation (contract-based), reactivity, and skeleton states.
- Reactive Utilities: ListDataRef (list management/selection/navigation), DatetimeRef (reactive date manipulation), and GeoRef/GeoIntlRef (geo-data and internationalization).
- Global State: executeUse (Global/Provide/Local patterns) for managing singletons, useMeta (global SEO management), and various storage/browser-tab sync hooks (useCookieRef, useSessionRef, useBroadcastValueRef).
- Render Utilities: Helper functions for VNode rendering, class/style binding (getBind, toBind), and reactive property unwrapping (getRef, executeFunctionRef).

Triggers for Studying ai-types.md:
- When encountering errors or ambiguity regarding Type constraints for API request/response contracts (`ApiDataValidation`, `ApiErrorStorageList`).
- When defining complex component Props or custom UI structures that require specific type inference for classes, styles, or slots.
- When implementing data lists (`ListDataRef`) or search logic that depends on strict structural compliance defined by `ListTypes` or `SearchTypes`.
- When integrating the `dxtFunctionalPlugin` or configuring custom API/Translate instances.

Integration Context: Built on top of Vue 3 and its reactivity system (Refs, Computed, EffectScope). It acts as a bridge between the `@dxtmisha/functional-basic` library and Vue, specifically handling the transformation of raw functional logic into Vue-compatible reactive objects, composables, and lifecycle-aware services.