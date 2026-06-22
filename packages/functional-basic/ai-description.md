The provided library is a comprehensive isomorphic toolkit for managing frontend and SSR-compatible application states, including API requests, internationalization, data persistence, and UI utilities.

Core Purpose:
Facilitates full-stack state management and utility-based data handling, providing standardized interfaces for HTTP requests (with caching and error handling), localization (Geo/Translation), storage (Cookie/Storage/Hash/Query), and DOM event synchronization.

Key Expositions:
- Api: Singleton-based HTTP client (supports fetch, caching, hydration, and error normalization via ApiErrorStorage).
- Geo & GeoIntl: Internationalization framework for locale-aware number, date, currency, and phone number formatting.
- Meta, MetaOg, MetaTwitter: Declarative meta-tag management for SEO and social sharing.
- DataStorage & CookieStorage: Persistent storage wrappers (LocalStorage/SessionStorage/Cookie) with SSR context isolation.
- EventItem: Reactive DOM event wrapper supporting ResizeObserver and scroll synchronization.
- Translate & TranslateFile: Asynchronous translation engine with support for dynamic loading and key replacement.
- SearchList: Logic for client-side search indexing, matching, and highlighting within data lists.
- Utils: A broad collection of pure functional utilities (e.g., `copyObject`, `toNumber`, `isFilled`, `sleep`, `frame`).

Triggers for Studying ai-types.md:
- When implementing or debugging API integration (Api, ApiInstance, ApiResponse).
- When configuring global error handling (ErrorCenter).
- When standardizing data localization or date/time formatting (Geo, GeoIntl, Datetime).
- When managing complex SSR hydration patterns (ServerStorage, ApiHydration).
- When integrating deep-search components (SearchList).
- When developing custom UI components requiring lifecycle-safe event binding (EventItem).

Integration Context:
Operates as a foundational layer in the stack, compatible with both browser and Node.js (SSR) environments. It acts as a dependency for managing global application state, handling data-driven side effects, and normalizing communication with backend services. It is designed to be injected into frameworks (Vue/React) via lifecycle hooks or custom configuration providers.