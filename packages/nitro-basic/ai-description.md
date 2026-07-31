CORE PURPOSE
Provides server-side rendering (SSR) lifecycle orchestration, hydration handling, request-scoped context management, and environment bootstrapping utilities for Vue 3 applications executing within Nitropack (Nitro) server runtimes.

KEY EXPOSITIONS
- SSR App & Lifecycle Factories: `uiCreateApp`, `uiCreateServerApp`, `uiCreateClientApp`, `initSsrApp`. Manages Vue 3 instance instantiation, SSR HTML and teleport string rendering, context extraction, and client-side mounting.
- SSR Routing Handlers: `uiCreateSsrRouter`, `initServerRouter`, `initClientRouter`. Instantiates Vue Router for server/client contexts and handles asynchronous route and component resolution before HTML rendering or DOM mounting.
- Context & Request Utilities: `useHeaders`, `getContextValue`, `getRequestHref`, `getRequestOrigin`, `getRequestUrl`, `initContext` (`appContext`). Provides request metadata extraction and access to `unctx`-backed application execution context.
- Storage, Cookie & Cache Injections: `initCookieStorage`, `initServerStorage`, `uiServerStorage`, `uiCookieStorage`, `initPluginApiCache`, `initPluginBasic`. Handles server-side state persistence, cookie access, and API cache configuration using designated dependency injection keys.
- Deterministic ID & Hydration Utilities: `uiBootstrapServer`, `uiBootstrapClient`, `uiIdServer`, `uiIdClient`. Manages deterministic unique element ID generation across server and client boundaries to prevent hydration mismatches.

TRIGGERS FOR STUDYING AI-TYPES.MD
Consulting `ai-types.md` is mandatory under the following conditions:
1. Configuring or extending Vue application bootstrap parameters using `NitroAppOptions`, `NitroAppRouterOptions`, or `NitroAppBasicConfig`.
2. Directly accessing or injecting global context tokens (`NITRO_APP_STORAGE`, `NITRO_APP_COOKIE`, `NITRO_API_HEADERS`).
3. Implementing custom Nitropack runtime plugins, server middleware, or SSR context pipeline modifications.
4. Resolving state persistence issues, custom API cache strategies, or hydration mismatch bugs occurring during SSR.

INTEGRATION CONTEXT
Functions as an integration layer connecting Nitropack (Nitro) backends with a Vue 3 frontend architecture (`vue`, `vue-router`, `vue/server-renderer`). Uses `unctx` for request-isolated context management and integrates with `@dxtmisha/functional` for functional plugin setups.