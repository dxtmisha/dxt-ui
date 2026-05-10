# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-05-10

### Added
- **Figma Composables**: Implemented a comprehensive suite of Vue composables for Figma plugin development:
  - `useFigmaFrameSelection` — reactive management of Figma frame selection.
  - `useFigmaFrameStyles` — synchronization of Figma styles within the UI.
  - `useFigmaStorage` & `useFigmaClientStorage` — reactive storage interfaces for Figma data.
  - `useFigmaUiFrames` & `useFigmaUiSelected` — management of UI frames and selection states.
- **Recursive AI Prompt Generator**: Implemented a recursive AI prompt generator to streamline design-to-code workflows.
- **Figma Styles Synchronization**: Added support for direct synchronization of Figma styles.
- **Zip Export**: Integrated Zip archiving for exporting assets and styles.
- **Translate Settings**: Added functionality for managing translation settings within Figma.
- **Unit Testing**: Added a robust testing suite for all composables using Vitest.
- **AI-Assisted Documentation**: Integrated AI-assisted documentation metadata across the package.

### Changed / Improved
- **Checkbox Design Refactor**: Refactored Checkbox design integration for better consistency.
- **Selection Logic**: Consolidated and standardized frame selection logic across all composables.
- **Reactivity Optimization**: Improved the reactivity and performance of storage and selection hooks.
- **Internal Architecture**: Refined the structure of composables to be more modular and reusable.

### Fixed
- **Reactivity Issues**: Fixed minor bugs related to state synchronization and reactivity in storage hooks.
- **Type Safety**: Improved TypeScript type definitions for all exported composables and utility functions.
- **Event Propagation**: Fixed issues with event handling in selection hooks.
