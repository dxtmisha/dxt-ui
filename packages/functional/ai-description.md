Core Purpose: A reactive framework for Vue 3 providing architectural abstractions for components, advanced API request orchestration with SSR support, internationalization (Intl), data list management, and global utility state synchronization.

Key Expositions:
- Component Architecture: `DesignConstructorAbstract`, `DesignComponents`, and `DesignAbstract` provide base classes for creating reactive functional components with automatic class/style/slot handling.
- API Management: `useApiRef` (core), `useApiAsyncRef` (SSR-enabled), and `useApiManagementRef` (CRUD/list orchestration) manage requests, caching, validation (integration with `@effect/schema`), and automatic loading states.
- Reactive Utilities: `DatetimeRef`, `GeoRef`, `GeoIntlRef`, `GeoFlagRef` for locale-aware data management; `ListDataRef` for complex list manipulation; `useMeta` for reactive document head management.
- Singleton/State Factories: `executeUse` (global, provide, or local scopes) for managing shared state instances.
- Primitive Wrappers: `useCookieRef`, `useStorageRef`, `useSessionRef`, `useQueryRef`, and `useHashRef` for reactive access to browser storage and URL state.

Triggers for Studying ai-types.md: 
- When implementing complex component logic involving lifecycle-dependent design systems or custom Vue components using `DesignConstructorAbstract`.
- When dealing with API state, validation contracts, or SSR pre-fetching logic (mandatory for `useApiAsyncRef` or `useApiManagementRef`).
- When defining shared singleton services or managing complex reactive states that require specific injection or scope strategies (`executeUse`).

Integration Context: 
- Stack: Built for Vue 3 (Composition API).
- Dependencies: Extends `vue`, `vue-router`, and relies heavily on `@dxtmisha/functional-basic` for underlying logic. 
- Infrastructure: Designed to be initialized via `dxtFunctionalPlugin` for global services (API, Translate, Meta, Router). Requires environment-aware implementation for SSR/hydration sequences.