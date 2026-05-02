# Changelog

All notable changes to this project will be documented in this file.

## [0.57.0] - 2026-05-02

### Added
- **ClientOnly**: Introduced a new constructor for components that should only render on the client side, improving hydration consistency.
- **PageArea**: Added a new constructor for managing standardized page area layouts.
- **Functions**: Added `getClassTagAStatic` utility for generating CSS classes for static links.
- **Documentation**: Added comprehensive bilingual (EN/RU) MDX documentation and structured descriptions for `ClientOnly` and `PageArea`.

### Changed / Improved
- **Progress**: Refactored the component to utilize `ClientOnlyInclude` and optimized lifecycle management (using `onMounted`) for better SSR stability.
- **Actions**: Integrated with `AreaInclude` to support the new area-based layout system.
- **SnackbarItem**: Integrated with `AreaInclude` and refined internal logic for improved consistency.
- **JSDoc**: Added detailed bilingual documentation for the `setAreaValue` function.
- **Properties**: Updated `wikiTechnical.ts` with technical specifications and Storybook controls for the latest component updates.

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
