# Changelog

All notable changes to this project will be documented in this file.

## [1.0.4] - 2026-09-22

### Added
- **`isComponentVue`**: Added method to `VitePluginComponents` for identifying component `.vue.js` chunks in the output bundle.

### Changed
- **`VitePluginComponents`**: Updated `generateBundle` to inject style imports (`import './styleToken.css'`) directly into component `.vue.js` chunks instead of `index.js`.
- **`isStyle`**: Updated style path resolution in `VitePluginComponents` to resolve `styleToken.css` relative to component files.

### Deprecated
- **`isComponentIndex`**: Deprecated in `VitePluginComponents` in favor of `isComponentVue`.

## [1.0.3] - 2026-09-14

### Changed
- **`viteFigma`**: Replaced `inlineDynamicImports: false` with `codeSplitting: false` in Rollup output options.
- **Dependencies**: Updated dependencies including `vite`, `@vitejs/plugin-vue`, `vite-plugin-dts`, and `browserslist`.

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
