Core Purpose: A high-level reactive framework for Vue 3 that abstracts complex state, API orchestration, and UI design patterns. It provides a standardized layer for API management (including SSR support), data formatting, list manipulation, and design component architecture.

Key Expositions:
1. API Management: `useApiRef` (standard reactive fetch), `useApiManagementRef` (orchestrates GET/POST/PUT/DELETE with search/formatting), and SSR-specific versions (`useApiAsyncRef`, `useApiManagementAsyncRef`).
2. Design System Components: `DesignConstructorAbstract` and `DesignComponents` for building reactive, theme-aware components; `DesignChanged` for tracking property mutations.
3. Geo/Intl Utilities: `GeoIntlRef` (localized formatting for numbers, dates, currency, size), `GeoRef` (locale/country state management), and `GeoFlagRef`.
4. Reactive Ref Utilities: `ListDataRef` (complex list management, grouping, selection, navigation), `EventRef` (reactive event listeners), and various composables for `localStorage`/`sessionStorage`/`cookies`.
5. Functional Helpers: `executeUse` (singleton management: global/provide/local), `computedAsync`/`computedEternity` (advanced reactivity wrappers).

Triggers for Studying ai-types.md:
- When implementing or consuming API requests with `useApi...` hooks to understand data contracts and error handling.
- When configuring `executeUse` strategies (global vs provide) for service injection.
- When defining component properties or structures using `Constr...` types (e.g., `ConstrBind`, `ConstrOptions`).
- When managing complex lists or search logic requiring `ListDataRef` or `Search...` types.
- When creating custom design classes inheriting from `DesignConstructorAbstract`.

Integration Context: 
This library serves as a middleware layer between raw API responses/browser APIs and Vue components. It is designed to work with `@dxtmisha/functional-basic` (the core utility provider) and relies on Vue's reactivity system. It is meant to be registered as a plugin (`dxtFunctionalPlugin`) to provide global configurations for API clients, translation services, and routing.