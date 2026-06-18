Core Purpose: This library provides a comprehensive, isomorphic toolkit for web applications, specifically focusing on SSR-ready API interaction, state-consistent storage (Cookies, Local/SessionStorage, ServerStorage), internationalization (i18n), and robust DOM event/UI management.

Key Expositions:
- Api: Centralized HTTP client managing requests, hydration, caching (ApiCache), and centralized error handling (ApiErrorStorage).
- Storage: Persistent utilities including DataStorage (local/session), CookieStorage, and ServerStorage (SSR-aware).
- Geo & Locale: GeoInstance, GeoIntl, and GeoFlag provide location-aware formatting (currencies, dates, numbers, units, phone masks).
- UI/Utility: Meta management (Meta, MetaOg, MetaTwitter), event handling (EventItem), icon management (Icons), and search utilities (SearchList).
- Formatting: Formatters class for templated data manipulation (currency, date, pluralization, unit conversion).

Triggers for Studying ai-types.md:
- When implementing API integration (Api, ApiFetch, ApiMethod).
- When configuring global error handling (ErrorCenter, ApiError).
- When managing SSR state or hydration (ServerStorage, ApiHydration).
- When handling localization (Geo, GeoIntl, Translate, Formatters).
- When configuring complex data search logic (SearchList, SearchColumns).
- When defining custom meta-tags or Twitter/Open Graph cards (Meta, MetaOg, MetaTwitter).

Integration Context: This library acts as a foundational service layer. It is designed to be injected or used as a singleton across the application stack, bridging client-side DOM operations with server-side context in SSR frameworks. It manages the lifecycle of data, authentication headers, and global configuration, serving as an abstraction layer over native Browser/Node.js APIs like fetch, Cookies, and BroadcastChannel.