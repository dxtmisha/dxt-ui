### 1. Core Purpose
This library provides a comprehensive, isomorphic (SSR/Client) utility framework for web applications. It centralizes cross-cutting concerns, including HTTP request management with middleware/hooks, reactive URL state synchronization (Query/Hash), global configuration, internationalization, metadata management, and data caching.

### 2. Key Expositions
*   **Networking**: `Api`, `ApiInstance`, and `ApiCache` manage HTTP requests, caching layers, error handling (`ApiError`), and SSR hydration.
*   **State & Sync**: `QueryInstance` and `HashInstance` provide reactive, syncable interfaces for URL-based states. `DataStorage` handles `localStorage`/`sessionStorage` with SSR isolation.
*   **Localization (Geo/Intl)**: `Geo`, `GeoInstance`, and `GeoIntl` manage locale, timezone, and phone mask logic. `Translate` and `TranslateInstance` provide file-based and API-backed localization.
*   **UI Helpers**: `EventItem` (DOM event wrapper with memory leak protection), `Loading` (global load state), `Icons` (asset management), and `Formatters` (data display utilities).
*   **Meta Management**: `Meta` and its manager classes control document `<head>` elements, including Open Graph and Twitter Cards.
*   **Core Utilities**: A suite of functions in `src/functions/` for type-safe data transformation, deep object cloning, DOM manipulation, and URL encoding.

### 3. Triggers for Studying ai-types.md
The `ai-types.md` file is **mandatory** if the AI is tasked with:
*   Extending or implementing new `ApiFetch` or `ApiConfig` interfaces.
*   Integrating custom error handling via `ErrorCenter` or `ApiErrorStorageItem`.
*   Extending geographical data schemas (`GeoItem`, `GeoPhoneValue`).
*   Implementing new meta-tag configurations or Open Graph properties.
*   Implementing search functionality using `SearchList` and associated types.
*   **Crucial**: Whenever the task involves modifying request/response schemas or adding global middleware via `ApiInstance` options, as the types define strict constraints on request lifecycle hooks (`ApiPreparation`, `ApiPreparationEnd`).

### 4. Integration Context
The library acts as a foundational "System Toolkit." It is designed to be injected into frontend frameworks (Vue/React) via lifecycle-aware wrappers (e.g., triggering `createElement` only on mount). It bridge the gap between server (SSR) and client states through `ServerStorage` and `ApiHydration`, ensuring that state generated on the server is correctly transferred to the client without hydration mismatches.