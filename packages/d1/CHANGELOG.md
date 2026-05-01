# Changelog

All notable changes to this project will be documented in this file.

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
