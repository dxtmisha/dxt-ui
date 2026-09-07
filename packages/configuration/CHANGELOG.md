# Changelog

All notable changes to this project will be documented in this file.

## [1.0.2] - 2026-09-07

### Changed
- **Dependencies**: Updated workspace package dependencies and peer dependencies to explicit `>=` version ranges.
- **Build Configuration**: Refactored `viteBasicFunction` to properly handle `externalExtended` exclusions.

## [1.0.0] - 2026-08-30

### Added
- **`VitePluginComponents`**: Added Vite plugin (`classes/VitePluginComponents.js` / `functions/vitePluginComponents.js`) for post-build component operations, including automatic CSS style injection (`import './styleToken.css'`) into component index chunks and cleanup of wiki-related generated files.
- **`VitePluginLibrary`**: Added Vite plugin (`classes/VitePluginLibrary.js` / `functions/vitePluginLibrary.js`) for standardizing library build pipelines.
- **Discovery & Exclusions**: Added support for `noDiscovery` option and template exclusions in build configs.

### Changed
- **`viteBasicFunction`**: Refactored configuration options to support `rollupTypes`, `bundledPackages`, and customizable `browserslistValue`.
- **Targeting**: Updated build configurations to use LightningCSS targeting.
