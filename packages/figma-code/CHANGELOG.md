# Changelog

All notable changes to this project will be documented in this file.

## [0.1.5] - 2026-11-10

### Changed
- **Strict TypeScript & Class Architecture**: Enforced canonical class member ordering and method visibility across `FigmaAiText`, `FigmaClientStorage`, `FigmaFrame`, `FigmaFramesSelected`, `FigmaItem`, `FigmaPluginMessenger`, `FigmaStorage`, `FigmaStorageData`, and `FigmaTopLevelFrames`.
- **Typing Ergonomics**: Replaced `any` with `unknown` and generic constraints, added explicit return types for all public methods and functions (`getFigmaFrameById`, `getFigmaItemById`, `setupStorage`, etc.).
- **JSDoc & Documentation**: Aligned bilingual JSDoc descriptions and synchronized Storybook MDX documentation across English, Russian, and Vietnamese.
- **Unit Testing**: Authoring and expanding comprehensive unit test suites across classes and functions to 100% pass rate.
- **Review Registry**: Registered all reviewed entities in `ai-review.md`.

## [0.1.4] - 2026-09-20

### Changed
- **Maintenance**: Cleaned up debug console logs in `FigmaAiText`.
- **Dependencies**: Synchronized internal workspace dependencies to latest releases.

## [0.1.3] - 2026-09-07

### Added
- **SVG Export**: Added `exportSvg` method to `FigmaItem` for exporting nodes in SVG format with element ID preservation (`svgIdAttribute: true`).
- **Frame Info Enhancement**: Added `svg` property with exported SVG data to the return value of `FigmaItem.getInfo()`.

### Changed
- **Dependencies**: Updated workspace package dependencies to explicit `>=` semver ranges.
- **AI Types**: Reorganized type definitions to use `ai-types-list/` directory structure.

## [0.1.0] - 2026-05-10

### Added
- **Recursive AI Prompt Generator**: Implemented a recursive AI prompt generator for advanced automation and design-to-code workflows.
- **Figma Styles Synchronization**: Added functionality to synchronize Figma styles with the project codebase.
- **Zip Export**: Integrated Zip archiving for exporting styles and assets directly from Figma.
- **Figma Frame & Item Management**: Implemented `FigmaFrame` and `FigmaItem` classes for comprehensive management of Figma elements.
- **Figma Storage**: Added `FigmaStorage`, `FigmaStorageData`, and `FigmaClientStorage` for robust data persistence within the Figma environment.
- **Figma Plugin Messaging**: Implemented `FigmaPluginMessenger` for standardized, type-safe communication between the plugin and Figma.
- **Selection Support**: Added `FigmaFramesSelected` and `useFigmaUiSelected` for efficient management of selected Figma elements.
- **DesignWikiStorm Support**: Added support for events and slots in `DesignWikiStorm`.
- **Unit Testing**: Added a comprehensive unit testing suite for core logic and classes.
- **AI-Assisted Documentation**: Integrated AI-assisted documentation metadata to improve developer experience.

### Changed / Improved
- **Checkbox Design Refactor**: Refactored Checkbox design integration to align with the new design system.
- **Selection Logic**: Consolidated and standardized frame selection logic and messengers across the package.
- **Storage Mechanics**: Refined data storage mechanics and callback handling for better reliability.
- **Internal Architecture**: Improved class hierarchy and modularity for Figma-related logic.

### Fixed
- **Selection Issues**: Fixed various bugs related to frame selection and event propagation.
- **Type Definitions**: Addressed TypeScript type definition errors and improved overall type safety.
- **Event Handling**: Fixed issues with event and slot support in `DesignWikiStorm`.
