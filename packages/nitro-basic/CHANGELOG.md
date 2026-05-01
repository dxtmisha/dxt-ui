# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-05-01

### Added
- **Initial Release**: Core functionality for bootstrapping Nitro Server-Side Rendering (SSR) applications with Vue 3.
- **Bootstrapping**: Added `uiCreateApp`, `uiBootstrapClient`, and `uiBootstrapServer` for unified entry point initialization.
- **Routing**: Added `uiCreateSsrRouter` for automatic History mode toggling (Web vs Memory) between client and server.
- **Storage**: Added `uiCookieStorage` and `uiServerStorage` to synchronize cookies and requests easily.
- **API Helpers**: Added integration tools like `initApi`, `initHeaders`, and `getRequestUrl` to seamlessly configure API headers and hostnames for absolute fetching during SSR requests.
- **Exports**: `library`, `plugin`, and configuration tools.

