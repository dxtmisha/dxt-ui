# Changelog

All notable changes to this project will be documented in this file.

## [0.53.1] - 2026-05-01

### Added
- **Container**: Introduced a new `Container` component to unify layout architecture and standardize container token generation.
- **Area**: Added `Area` constructor component for flexible area-based layouts.
- **Header**: Added `Header` constructor component for building standardized application headers.
- **Classes**: Implemented `AreaInclude` class for handling area state and related logic.
- **Functions**: Added `getAreaValue` and `setAreaValue` utility functions for area state management.

### Changed / Improved
- **Layout Components**: Refactored core layout components (`Block`, `Group`, `Page`, `Section`) to improve visual consistency and ensure better design token integration.
- **Image**: Major improvements to the `Image` component, including better SSR support and updates to the `ImagePdf` component.
