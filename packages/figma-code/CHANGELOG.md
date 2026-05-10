# Changelog

All notable changes to this project will be documented in this file.

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
