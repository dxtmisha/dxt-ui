### 1. Core Purpose
This library is a comprehensive, isomorphic utility suite for TypeScript/JavaScript applications. Its primary technical function is to provide structured management for HTTP requests (via an advanced `Api` wrapper), stateful data storage (`ServerStorage`, `CookieStorage`, `DataStorage`), localization (`Geo`, `Translate`, `Datetime`), metadata management (`Meta`), and reactive event handling, primarily intended to simplify full-stack state synchronization in SSR/SPA architectures.

### 2. Key Expositions
*   **Request Management:** `ApiInstance` (singleton orchestration of `fetch` with retries, timeouts, and interceptors), `ApiErrorStorage` (centralized API error handling), and `ApiHydration` (SSR-to-client state dehydration).
*   **Storage & State:** `DataStorage` (localStorage/sessionStorage abstraction with SSR isolation), `CookieStorage` (SSR-aware cookie management), and `ServerStorage` (in-memory persistent state across server cycles).
*   **Localization/Formatting:** `Geo` (geo-context management), `GeoIntl` (Intl API wrapper for locale-aware formatting), `GeoUnit` (unit conversion), and `Formatters` (tabular data formatting).
*   **Meta & SEO:** `Meta` (unified tag manager for HTML, Open Graph, and Twitter Cards), `MetaStatic` (singleton access).
*   **DOM/Event Utilities:** `EventItem` (advanced lifecycle-managed event listeners with `ResizeObserver` and `scroll-sync` optimization), `Loading` (global load state tracking), and `BroadcastMessage` (cross-tab messaging).
*   **Utility Suite:** Extensive functional library (`toNumber`, `copyObject`, `executePromise`, `random`, `isFilled`, etc.) located in the `functions/` directory.

### 3. Triggers for Studying ai-types.md
Studying `ai-types.md` is **mandatory** if the AI is assigned to:
*   Implementing or extending API request configurations (`ApiFetch`, `ApiConfig`).
*   Defining or modifying error handling strategies (`ApiErrorStorageItem`).
*   Integrating localization data structures (`GeoItem`, `GeoFlagItem`).
*   Configuring formatting logic for currency, dates, or pluralization (`FormattersOptionsList`).
*   Configuring SEO metadata structures (`MetaTag`, `MetaOpenGraphTag`, `MetaTwitterTag`).
*   Resolving type-safety requirements for search/filtering components (`SearchOptions`, `SearchColumns`).

### 4. Integration Context
This project serves as a foundational "Core" library within a larger application stack. It acts as an abstraction layer between native browser/Node.js APIs (e.g., `fetch`, `window`, `localStorage`) and high-level application business logic. It is designed to be injected into frameworks (Vue, React, or custom frameworks) to handle:
1.  **Hydration:** Bridging data between SSR and Client via `ServerStorage` and `ApiHydration`.
2.  **Global Event Bus:** Synchronizing state changes via `Loading` and `BroadcastMessage`.
3.  **Cross-Environment Standardization:** Ensuring locale, time, and formatting behave identically on the server and client.