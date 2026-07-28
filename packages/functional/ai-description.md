1. CORE PURPOSE
This library (@dxtmisha/functional) provides Vue 3 reactive abstractions, abstract base classes for component architecture, and advanced composables. It elevates low-level functional utilities from @dxtmisha/functional-basic into Vue 3 reactivity system (refs, computed, lifecycle, reactive singletons) to handle REST API orchestration, localization, meta management, routing, client-side storage, lazy loading, list/search data structures, and standard component state construction.

2. KEY EXPOSITIONS
Abstract Component Base Classes: DesignAbstract, DesignAsyncAbstract, DesignChanged, DesignComponents, DesignComp, DesignConstructorAbstract. These manage component state lifecycle, dynamic class and style processing, event hooks, slot rendering, component modifications, and property mutation tracking.

Reactive API Composables: useApiRef, useApiAsyncRef, useApiManagementRef, useApiManagementAsyncRef, useApiGet, useApiPost, useApiPut, useApiDelete, useApiRequest. These handle REST operations with SSR prefetching, response contract validation, mutation handling, error contract mapping, client-side pagination/filtering, and automatic state reactivity.

Singleton State & Execution Control: executeUse, executeUseGlobal, executeUseProvide, executeUseLocal, executeUseGlobalInit. These encapsulate factory initialization into global, component-tree inject/provide, or closure-local singletons.

Localization & Formatting Classes and Composables: DatetimeRef, GeoFlagRef, GeoIntlRef, GeoRef, GeoUnitRef, useGeoIntlRef, useGeoUnitRef, useFormattersRef, useTranslateRef, t. These offer reactive locale-aware date/time formatting, unit conversion, flag retrieval, and multi-key translation refs.

Data Structures & UI Management: ListDataRef, useRouterList, useSearchRef, useSearchValueRef, useLazyRef, useLazyItemByMarginRef, ScrollbarWidthRef, EventRef, EffectScopeGlobal. These provide reactive list data mapping, search query debounce and highlighting, lazy-loading via IntersectionObserver, scrollbar width tracking, and global effect scopes.

State Persistence & Browser Composables: useBroadcastValueRef, useCookieRef, useHashRef, useQueryRef, useSessionRef, useStorageRef, useMeta. These control cross-tab communication, cookies, URL query/hash reactive synchronization, session/local storage, and reactive HTML document metadata.

Utility Functions & Plugin: computedAsync, computedByLanguage, computedEternity, getBind, getBindRef, render, toBind, toBinds, dxtFunctionalPlugin.

3. TRIGGERS FOR STUDYING AI-TYPES.MD
Reading ai-types.md is mandatory under any of the following conditions, keywords, or implementation tasks:
- Extending or sub-classing DesignConstructorAbstract, DesignAbstract, DesignAsyncAbstract, or DesignComponents.
- Configuring API integrations requiring complex typing, specifically ApiManagementGet, ApiManagementSearch, ApiManagementRequest, or ApiOptions.
- Utilizing component metadata and binding types, such as ConstrBind, ConstrClasses, ConstrStyles, ConstrOptions, ConstrSetup, ConstrComponentMod, or ConstrProps.
- Constructing managed singletons using executeUse, executeUseGlobal, executeUseProvide, or executeUseLocal.
- Typing complex list inputs, search items, and reactive parameters using ListList, ListDataItem, ListDataFull, RefOrNormal, RefType, or RefOrNormalOrFunction.
- Implementing contract validation functions (validateResponseContract, validateRequestContract) or error contracts (ApiErrorStorageList) with schema validation libraries.

4. INTEGRATION CONTEXT
Initializes as a Vue 3 plugin via dxtFunctionalPlugin. Connects directly with Vue 3 reactivity and rendering APIs (ref, computed, VNode, provide/inject). Wraps base functional logic from @dxtmisha/functional-basic, integrates with vue-router via RouterItemRef, links to @dxtmisha/media for social icons, and supports runtime schema validation (such as @effect/schema) inside API payload contracts.