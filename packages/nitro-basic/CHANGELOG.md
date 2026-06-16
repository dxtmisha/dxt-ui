# Changelog

All notable changes to this project will be documented in this file.

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

