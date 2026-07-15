# Changelog

All notable changes to this project will be documented in this file.

## [0.1.13] - 2026-07-15

### Added
- **`client` Entry Point**: Added a dedicated client-side entry point (`src/library-client.ts`) exporting client-focused utilities (`uiBootstrapClient`, `uiCreateApp`, `uiCreateClientApp`) and types (`nitroAppTypes`).
- **Exports**: Exposed the `./client` path in `package.json` pointing to the client-specific build.

### Changed / Improved
- **Vite Configuration**: Updated `vite.config.ts` to include `src/library-client.ts` as a library build entry point.

## [0.1.12] - 2026-07-14

### Changed / Improved
- **`uiId`**: Split the unified `uiId` element ID generator into two separate, environment-specific functions in separate files:
  - **`uiIdClient`** (in `uiIdClient.ts`): Client-side unique ID generator using an incremental counter starting from `10000`.
  - **`uiIdServer`** (in `uiIdServer.ts`): Server-side unique ID generator using request context values.
- **`uiBootstrapClient`**: Updated to use `uiIdClient`.
- **`uiBootstrapServer`**: Updated to use `uiIdServer`.
- **Exports**: Exposed `uiIdClient` and `uiIdServer` functions and removed `uiId` at the package level (`src/library.ts`).

## [0.1.11] - 2026-07-14

### Added
- **`appContext`**: Added request-isolated application context using `unctx` (`createContext`) with native `AsyncLocalStorage` support (via `node:async_hooks`) for Vue 3 SSR environments, ensuring the context is successfully preserved across asynchronous (`await`) boundaries during rendering.
- **`getContextValue`**: Added utility function `getContextValue` to safely retrieve request-specific values (such as `headers`, `storage`, `cookie`, or `id`) from the active `appContext`.
- **Dependencies**: Added `unctx` dependency in `package.json`.

### Changed / Improved
- **`uiCreateServerApp`**: Integrated `appContext.call(...)` wrapper around the server-side initialization, router setup, action execution, and SSR rendering lifecycle, propagating context values for `headers`, `storage`, `cookie`, and `id`.
- **`initHeaders`**: Updated to return the initialized `headers` object.
- **`initServerStorage`**: Updated to return the initialized `storage` object.
- **`initCookieStorage`**: Updated to return the initialized `cookie` string.
- **`useHeaders`**: Added fallback to retrieve headers via `getContextValue('headers')` when Vue inject/provide context is unavailable.
- **`uiCookieStorage`**: Added fallback to retrieve cookie via `getContextValue('cookie')` when Vue inject/provide context is unavailable.
- **`uiServerStorage`**: Added fallback to retrieve server storage via `getContextValue('storage')` when Vue inject/provide context is unavailable.
- **`uiId`**: Updated to support generating elements' identifiers prefixing with `ui-` during active context requests (with an `id` > 0) to avoid warnings when `useId` is called outside component setup scope.
- **Exports**: Exposed `getContextValue` and `initContext` functions at package level (`src/library.ts`).

## [0.1.6] - 2026-06-16

### Added
- **`getRequestHref`**: Introduced `getRequestHref` utility function to extract the full URL (href) from the request object during Nitro SSR.

### Changed / Improved
- **`initApi`**: Updated `initApi` to set the request URL in the request-isolated `UrlItem` singleton.

## [0.1.5] - 2026-05-22

### Added
- **Teleport SSR Selector**: Introduced a new `teleportBody` parameter in `NitroAppOptions` to specify the custom target selector for teleporting elements during server-side rendering (SSR).
- **Application Context Teleports**: Integrated Vue application context provisioning inside `uiCreateApp` to inject `__ui-teleport-ssr-body__` with the specified selector (defaulting to `'#teleports'`), ensuring reliable element teleportation.

## [0.1.0] - 2026-05-01

### Added
- **Initial Release**: Core functionality for bootstrapping Nitro Server-Side Rendering (SSR) applications with Vue 3.
- **Bootstrapping**: Added `uiCreateApp`, `uiBootstrapClient`, and `uiBootstrapServer` for unified entry point initialization.
- **Routing**: Added `uiCreateSsrRouter` for automatic History mode toggling (Web vs Memory) between client and server.
- **Storage**: Added `uiCookieStorage` and `uiServerStorage` to synchronize cookies and requests easily.
- **API Helpers**: Added integration tools like `initApi`, `initHeaders`, and `getRequestUrl` to seamlessly configure API headers and hostnames for absolute fetching during SSR requests.
- **Exports**: `library`, `plugin`, and configuration tools.

