### Core Purpose
The library provides an isomorphic utility framework for managing high-level application concerns in JavaScript/TypeScript environments (SSR and DOM). It includes robust abstractions for API communication (REST/Fetch), structured state management, DOM-safe event handling, internationalization, and reactive data storage.

### Key Expositions
*   **API & Networking**: `Api` (singleton interface), `ApiInstance` (core requester), `ApiCache` (request memoization), `ApiError` (centralized error handling), `ApiHydration` (SSR data serialization), and `ApiHeaders`.
*   **State & Storage**: `DataStorage` (persistent storage with prefixes/expiration), `ServerStorage` (SSR-safe context isolation), `CookieStorage` (isomorphic cookie management), `Query`/`Hash` (URL-state management), and `Global` (app-wide data).
*   **UI & Events**: `EventItem` (DOM-safe, optimized event management with `ResizeObserver` and `scroll-sync`), `LoadingInstance` (global loading state), and `ScrollbarWidth` (layout utility).
*   **Localization & Formatting**: `Geo` (locale/timezone management), `GeoIntl` (Intl API wrapper), `GeoUnit` (metric/imperial conversion), `Translate` (i18n), and `Formatters` (currency, number, date, and pluralization utility).
*   **Utilities & Data**: `Formatters`, `SearchList` (search matching/caching), `ResumableTimer`, and a suite of functional utilities for object cloning, string/date manipulation, and DOM operations.

### Triggers for Studying ai-types.md
Review `ai-types.md` whenever the following requirements arise:
1.  **API Integration**: You need to implement new request methods, custom error handling for specific HTTP status codes, or configure global API middleware (`wrapper`/`preparation`).
2.  **I18n/Formatting**: You are dealing with complex localization rules, unit conversions (Geo/Units), or pluralization requirements.
3.  **SSR Consistency**: You are implementing features that must function identically on both the server and client (Hydration, `ServerStorage`, or `Datetime` formatting).
4.  **Complex State**: You need to map or query data structures in memory using `SearchList` or utilize `BroadcastChannel` for cross-context messaging.

### Integration Context
The library acts as a foundational service layer between the application logic and the runtime environment. It is designed to be framework-agnostic but is particularly optimized for SSR-heavy environments (like Vue/React) where hydration of state (via `ServerStorage`) and safe access to global browser objects (via `isDomRuntime`) are critical. It wraps native `fetch`, `localStorage`, `sessionStorage`, `BroadcastChannel`, and `Intl` APIs into structured, type-safe, and singleton-accessible services.