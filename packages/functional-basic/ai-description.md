The project is a comprehensive, isomorphic utility library designed for web application development, focusing on API interaction, state management, and internationalization.

Core Purpose:
The library provides a structured framework for managing HTTP requests (Fetch API), client/server data hydration, localization (date, currency, unit formatting), URL state synchronization (Query/Hash), and global error handling. It is designed to be environment-agnostic, supporting both client-side (DOM) and server-side (SSR) execution.

Key Expositions:
- Api: Centralized HTTP request handler (ApiInstance) supporting caching, automated hydration, retries, and error transformation.
- Geo: Geographic data management for locales, time zones, and phone masks, utilizing Intl for localized formatting.
- Meta: Unified manager for HTML, Open Graph, and Twitter Card meta-tag injection.
- State Managers: Includes Query and Hash classes for URL state management, and DataStorage (Local/Session) for persistence.
- Formatters: A highly configurable engine for formatting complex data lists (currency, units, pluralization).
- Event Handling: EventItem acts as an advanced wrapper for DOM events with built-in lifecycle control and optimization (e.g., ResizeObserver, requestAnimationFrame for scroll).
- Utilities: A collection of functional helpers (`toNumber`, `copyObject`, `executePromise`, `isFilled`) for robust data processing.

Triggers for Studying ai-types.md:
Reading "ai-types.md" is mandatory when:
- Implementing custom API response processors (`queryReturn` in `ApiFetch`).
- Defining complex search or sort logic for `SearchList`.
- Configuring `Translate` files or `FormattersOptions`.
- Debugging Type collisions in `GeoTypes` or `ApiTypes` when integrating with existing network layer schemas.
- Configuring custom `ApiErrorStorageItem` patterns for application-level error handling.

Integration Context:
This library functions as a middleware/utility layer within a web stack. It sits above the native Fetch API and global browser/node objects, providing a standardized interface that is particularly useful for frameworks requiring robust SSR data management and consistent formatting across globalized user sessions.