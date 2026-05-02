# Changelog

All notable changes to this project will be documented in this file.

## [0.57.0] - 2026-05-02

### Added
- **D1ClientOnly**: Added a new component for client-side only rendering, ensuring consistent behavior across SSR and CSR.
- **D1PageArea**: Introduced a new component for managing structured page areas.
- **Documentation**: Added comprehensive bilingual (EN/RU) MDX documentation and updated `wikiData.ts` for all new and updated components.

### Changed / Improved
- **D1Actions & D1SnackbarItem**: Updated design tokens, styles, and documentation metadata to support enhanced configuration options.
- **D1Progress**: Updated styles and properties to align with the core `Progress` component refactor.
- **Build**: Synchronized and updated build artifacts and type definitions across the package.

## [0.52.3] - 2026-05-01

### Added
- **D1Container**: Introduced a new `D1Container` component with its own set of design tokens to unify and standardize layout architectures.
- **D1Area**: Added the `D1Area` component for flexible, area-based structural layouts.
- **D1Header**: Added the `D1Header` component for building standardized application headers.
- **D1Snackbar**: Added the `D1Snackbar` and `D1SnackbarItem` components for standardized notification and toast messages.

### Changed / Improved
- **Layout Components**: Refactored core layout components (`D1Block`, `D1Group`, `D1Page`, `D1Section`) to align with the new container standards, improving visual consistency and token integration.
- **Tokens and Styles**: Updated `ui-properties.scss` and token generation logic to fully support the new layout, area, and header components.
- **D1Image**: Structural improvements and better SSR compatibility.
