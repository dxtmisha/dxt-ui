### Core Purpose
This library is an isomorphic, highly modular utility suite for TypeScript/JavaScript applications. Its primary functions include managing HTTP requests (via `fetch` with integrated caching, retry logic, and error handling), state management for URLs (Query/Hash), UI-side utilities (internationalization, date/time formatting, cookie/storage management), and search/filtering logic for data lists.

### Key Expositions
*   **API Management**: `Api`, `ApiInstance`, and `ApiCache` manage HTTP requests, caching, hydration (for SSR), and global configuration. `ApiErrorStorage` and `ApiErrorItem` provide a centralized mechanism for identifying and processing API errors.
*   **Data & State Management**: `DataStorage` (LocalStorage/SessionStorage), `CookieStorage`, and `ServerStorage` handle persistent state. `QueryInstance` and `HashInstance` provide reactive synchronization for URL parameters.
*   **Localization & Internationalization**: `Geo`, `GeoIntl`, `Translate`, and `Datetime` provide full internationalization support, including locale-specific date formatting, phone masking, and multi-language translation management.
*   **DOM/UI Utilities**: `EventItem` provides a robust, lifecycle-managed wrapper for DOM events with specialized support for `ResizeObserver` and scroll synchronization. `LoadingInstance` provides a standardized loading state bus.
*   **Meta Tag Management**: `Meta`, `MetaOg`, and `MetaTwitter` offer a unified API for managing standard HTML meta tags, Open Graph, and Twitter Cards.
*   **Search Engine**: `SearchList` and associated classes provide high-performance, regex-based client-side searching with highlighting capabilities.

### Triggers for Studying ai-types.md
It is mandatory to analyze `ai-types.md` if:
*   You are implementing or extending any API request logic (`Api`, `ApiFetch`).
*   You are defining global configurations or custom types for error handling (`ApiErrorStorageItem`).
*   You are working with `Geo`, `Translate`, or `Search` components that require specific configuration structures.
*   You are implementing data hydration or SSR-related logic.
*   You need to understand the interface signatures for complex utility types (`ApiData`, `GeoItem`, `SearchOptions`).

### Integration Context
This library operates as a core infrastructure layer. It interacts with the browser's `Fetch API` and `DOM` primitives, and leverages `Intl` for localization. It is designed for environment-agnostic use (isomorphic), meaning it includes `ServerStorage` and hydration logic to bridge the state gap between server-side rendering (SSR) environments and client-side execution.