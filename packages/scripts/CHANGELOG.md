# Changelog

All notable changes to this project will be documented in this file.

## [0.7.11] - 2026-05-05

### Added
- **Figma API**: Implemented a robust Figma API client (`FigmaApi`, `DesignFigma`) supporting file retrieval, node filtering, image generation, and style metadata extraction.
- **Storybook Integration**: Configured Storybook to monitor the `demo-test` directory, enabling better testing and visualization of experimental components.
- **Browser Automation**: Introduced a dedicated `BrowserItem` class to encapsulate Puppeteer logic, supporting advanced features like custom wait states and extended viewport heights.

### Changed / Improved
- **Automated Screenshots**: Overhauled the `DesignScreenshot` class to handle server lifecycle and capture triggers more reliably. Standardized screenshot constants (timeouts, quality, and browser arguments).
- **Library Exports**: Streamlined library exports by centralizing design and browser-related utilities.
- **Type Generation**: Updated `DesignTypes` to force `ServerStorage` error status during generation. Fixed a type generation issue in `DesignReplace` to ensure flexible string types in component property templates.
