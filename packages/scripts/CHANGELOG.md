# Changelog

All notable changes to this project will be documented in this file.

## [0.8.2] - 2026-05-13

### Changed
- **Type Generation**: Modified `DesignReplace.ts` to implement stricter typing for generated component properties. Removed the automatic addition of the generic `string` type to union prop definitions, ensuring generated components use precise literal types.
- **Wiki Integration**: Updated `DesignWikiStormItem.ts` to improve technical data generation for the wiki system.

## [0.8.0] - 2026-05-10

### Added
- **AI Prompt System**: Introduced `LibraryAiPrompt` and `LibraryAiPromptItem` classes for automated, recursive AI prompt generation across the monorepo.
- **Nitro Scaffolding**: Added a full Nitro + Vue 3 SSR boilerplate template for rapid project initialization.
- **Design Prompt CLI**: Added `design-prompt` CLI tool for aggregating documentation, types, and screenshots into AI-ready context files.
- **Config Standardization**: Standardized project constants in `config.ts` to support automated discovery and design workflows.

### Changed / Improved
- **Build System**: Updated script library exports and synchronized workspace dependencies.
- **Library Exports**: Synchronized package-lock and updated internal script exports for better consistency.

## [0.7.11] - 2026-05-05

### Added
- **Figma API**: Implemented a robust Figma API client (`FigmaApi`, `DesignFigma`) supporting file retrieval, node filtering, image generation, and style metadata extraction.
- **Storybook Integration**: Configured Storybook to monitor the `demo-test` directory, enabling better testing and visualization of experimental components.
- **Browser Automation**: Introduced a dedicated `BrowserItem` class to encapsulate Puppeteer logic, supporting advanced features like custom wait states and extended viewport heights.

### Changed / Improved
- **Automated Screenshots**: Overhauled the `DesignScreenshot` class to handle server lifecycle and capture triggers more reliably. Standardized screenshot constants (timeouts, quality, and browser arguments).
- **Library Exports**: Streamlined library exports by centralizing design and browser-related utilities.
- **Type Generation**: Updated `DesignTypes` to force `ServerStorage` error status during generation. Fixed a type generation issue in `DesignReplace` to ensure flexible string types in component property templates.
