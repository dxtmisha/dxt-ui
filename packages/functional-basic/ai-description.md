### Core Purpose
This is a comprehensive, isomorphic utility library designed for modular web application development. It provides robust abstractions for HTTP API interaction (with caching and hydration), state management (URL query/hash), internationalization (i18n), localization (dates, units, phones), DOM events, and application-wide services like error handling, loading states, and icon management. It is designed to work across both client-side (DOM) and server-side (SSR) environments.

### Key Expositions
*   **API Management**: `ApiInstance` (singleton interface for `fetch`), `ApiCache` (caching), `ApiErrorStorage` (centralized error handling), `ApiHydration` (SSR data serialization).
*   **Geographic & Localization**: `GeoInstance` (locale management), `GeoIntl` (formatting for dates, numbers, currency), `GeoUnit` (unit conversion), `GeoPhone` (masking).
*   **State & Storage**: `QueryInstance` and `HashInstance` (URL state sync), `DataStorage` (localStorage/sessionStorage), `CookieStorage` (isomorphic cookie management).
*   **Events & UI**: `EventItem` (advanced DOM event handler with lifecycle and cleanup), `LoadingInstance` (global loading state), `ScrollbarWidth` (layout utility).
*   **Utilities**: `Formatters` (list/column-based data formatting), `SearchList` (advanced client-side search), `Meta` (SEO/OG/Twitter metadata management), `Translate` (i18n text retrieval).
*   **Functional Helpers**: A collection of pure functions (e.g., `copyObject`, `executePromise`, `toNumber`, `toKebabCase`, `intersectKey`) covering data manipulation and type guards.

### Triggers for Studying ai-types.md
It is mandatory to study `ai-types.md` if:
*   You need to interface with the API system and require specific `ApiFetch` configuration options (like custom `wrapper` or `queryReturn`).
*   You are defining custom error handling schemas via `ApiErrorStorageItem`.
*   You need to manipulate or extend the global API or Translation configuration (`ApiConfig`, `TranslateConfig`).
*   You are creating complex formatted lists using `Formatters` and need to map custom property types or transformation functions.
*   You need to understand the structural requirements for geographic data (`GeoItem`, `GeoPhoneMap`) or Search utility data types.

### Integration Context
The library acts as a foundational "Core/Utils" layer. It is framework-agnostic but requires manual synchronization for SSR hydration. It connects to the system via:
*   **Global Singletons**: Access points like `Api.getItem()` or `Geo.getObject()` provide instant access to initialized instances.
*   **Environment Adapters**: Hooks/listeners are used to bridge the library to specific runtimes (e.g., DOM-based event listeners or SSR request context listeners).
*   **Typed Interfaces**: Heavy reliance on TypeScript generics ensures that data flow (API responses, search results, formatters) remains type-safe throughout the system stack.