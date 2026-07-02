Core Purpose: This library is a comprehensive isomorphic toolkit for web application development, providing high-level abstractions for API communication (fetch/caching/hydration), internationalization (translations/formatting), localized date/time manipulation, persistent data storage (Cookie/LocalStorage), reactive URL state management (Hash/Query), and DOM event handling.

Key Expositions:
1. Api & ApiInstance: Orchestrates HTTP requests with support for middleware (preparation/end), automatic hydration for SSR, request caching, and centralized error handling.
2. Geo, GeoIntl, GeoFlag, GeoPhone, GeoUnit: A suite for locale-sensitive data handling including currency, date, numeric, and unit conversions (metric/imperial based on region).
3. Meta, MetaOg, MetaTwitter: Declarative management of HTML head tags, Open Graph, and Twitter Cards.
4. DataStorage, CookieStorage, ServerStorage: Unified persistent storage interfaces with built-in SSR data isolation and hydration support.
5. SearchList: A specialized state machine for filtering, matching, and highlighting item collections based on column definitions and regex search.
6. EventItem: A robust wrapper for DOM listeners that includes auto-cleanup, lifecycle control, and specialized optimizations (e.g., resize/scroll-sync).
7. Translation System: Asynchronous/Synchronous multi-locale translation manager with fallback logic and file-based loading.

Triggers for Studying ai-types.md:
It is mandatory to analyze ai-types.md when:
- You need to extend or define custom configurations for the API layer (ApiConfig, ApiFetch).
- You are implementing custom Error/Exception handling logic using the ErrorCenter structures.
- You are adding new locale definitions, phone mask structures, or unit conversion mappings.
- You need to debug hydration mismatches between SSR and client-side data state.
- You are extending search logic or defining new search list result types.

Integration Context: 
This library serves as the foundation layer for application state and external communication. It is designed to be used in conjunction with modern reactive frameworks (Vue/React) by leveraging the provided hydration hooks to synchronize state between the server environment and the browser client. It relies on the global DOM environment where available, but degrades to neutral behaviors or errors in non-browser environments to ensure compatibility with SSR processes.