# Changelog

All notable changes to this project will be documented in this file.

## [0.1.0] - 2026-05-10

### Added
- **AI Prompt Generator**: Implemented a recursive AI prompt generator for advanced automation.
- **Figma Styles Sync**: Added functionality to synchronize Figma styles directly with the project.
- **Zip Export**: Implemented Zip archiving for exporting assets and styles.
- **Unit Testing**: Added a comprehensive unit testing suite using Vitest.
- **Documentation**: Integrated AI-assisted documentation metadata across the package.
- **Figma Storage**: Implemented robust data storage mechanics within Figma (`useFigmaStorage`).
- **Figma Messages**: Added `FigmaMessage` class for standardized event listening and messaging.
- **Selection Logic**: Consolidated Figma frame selection logic and standardized messengers.
- **Translation Support**: Added ability to use local texts in translations.
- **Component Build**: Added `ComponentBuild.ts` for managing component construction.
- **Image Utilities**: Added image processing functions: `resizeImageByMax`, `blobToBase64`, and `ensureMaxSize`.
- **Top Level Frames**: Added `FigmaTopLevelFrames` and `useFigmaUiFrames` for UI frame management.

### Changed / Improved
- **Checkbox Design**: Refactored Checkbox design integration.
- **Data Persistence**: Improved Figma data storage mechanics and callback handling (`StorageCallback`).
- **Selection Mechanics**: Standardized frame selection logic across the plugin.
- **Refactoring**: Consolidated messaging systems and selection logic for better maintainability.

### Fixed
- **Component Visibility**: Fixed component visibility issues for editors.
- **Bug Fixes**: Addressed various minor bugs in frame selection and data storage.
- Fixed type definition errors and improved TypeScript support.
