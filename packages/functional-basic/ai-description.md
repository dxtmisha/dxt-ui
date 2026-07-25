### 1. Core Purpose
This is a comprehensive, isomorphic utility library designed for modular web application development. It provides foundational infrastructure for HTTP requests, cross-environment state management (SSR-friendly), internationalization (i18n), localization, and reactive DOM manipulation.

### 2. Key Expositions
*   **Networking (`Api*` classes):** A robust `Api` singleton and `ApiInstance` class for `fetch`-based HTTP communication with support for caching (`ApiCache`), custom interceptors (`ApiPreparation`, `ApiEnd`), and global error handling (`ApiError`, `ApiErrorStorage`).
*   **State & Storage:**
    *   `ServerStorage`: SSR-safe state container for client-side hydration.
    *   `DataStorage`: Wrapper for `localStorage`/`sessionStorage` with prefixing and expiration.
    *   `CookieStorage`/`CookieBlock`: Typed cookie management with SSR listeners.
*   **Internationalization (`Geo*`, `Translate*`):**
    *   `GeoInstance` / `GeoIntl`: Advanced locale-sensitive formatting for dates, currencies, units, and names using `Intl`.
    *   `TranslateInstance`: Handles translation fetching and runtime replacement.
    *   `GeoUnit`: Automates conversion between metric and non-metric (e.g., US) units.
*   **DOM & Utilities:**
    *   `EventItem`: Advanced event listener wrapper with DOM-safety checks and performance optimizations (`resize`, `scroll-sync`).
    *   `LoadingInstance`: Global loading state tracking with event dispatching.
    *   `Meta`, `MetaOg`, `MetaTwitter`: Unified management for SEO meta tags and Open Graph/Twitter Card properties.
    *   `SearchList`: Utilities for filtering, highlighting, and caching search lists.
*   **Functional Helpers:** A massive collection of utility functions (e.g., `copyObject`, `toNumber`, `toKebabCase`, `executePromise`, `domContentLoaded`) located in `functions/`.

### 3. Triggers for Studying ai-types.md
**Mandatory reading of `ai-types.md` is required when:**
*   You are implementing custom integration for SSR (e.g., configuring `ServerStorage` or `ApiHydration`).
*   You need to define custom error handling logic in `ErrorCenter` or `ApiErrorStorage`.
*   You are configuring `SearchList` or `Formatters` and need to map data structures.
*   You need to understand the interface constraints for `GeoItem`, `ApiFetch`, or `TranslateConfig` to avoid runtime type errors.
*   You are defining global configuration, as types define the exact shape of the injection/singleton objects.

### 4. Integration Context
This library acts as the "Standard Library" layer of the system stack. It resides above native browser/Node.js APIs and below feature-specific domain code. It is designed to be injected into an application framework (e.g., Vue, React, or custom frameworks) to provide a consistent interface for side effects, data formatting, and environment-agnostic state handling. Components should access these via singletons (e.g., `Api.getItem()`, `Geo.get()`) to ensure consistent state across the client and server.