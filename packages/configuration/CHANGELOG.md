# Changelog

All notable changes to this project will be documented in this file.

## [1.2.0] - 2026-10-08

### Added
- **`VitePluginStyle`**: Added Vite plugin (`classes/VitePluginStyle.js` / `functions/vitePluginStyle.js`) for post-build style injection into JavaScript chunks:
  - Discovers associated CSS style assets from `chunk.viteMetadata.importedCss` and injects `import` statements into matching `.js` chunks.
  - Automatically calculates relative import paths from chunk files to CSS asset files.
  - Added companion factory function `vitePluginStyle` in `functions/vitePluginStyle.js`.
  - Added package export entrypoint `./vitePluginStyle` in `package.json`.
- **`viteBasicFunction`**:
  - Added `isPluginStyle?: boolean` option to enable automatic CSS style injection into JavaScript chunks via `vitePluginStyle`.
  - Added `outDir?: string` option (defaulting to `'dist'`) to configure the build output directory across `build.outDir` and `vite-plugin-dts` (`outDirs` and `outDir`).

## [1.1.0] - 2026-10-04

### Added
- **`VitePluginPurgeCss`**: Added Vite plugin (`classes/VitePluginPurgeCss.js` / `functions/vitePluginPurgeCss.js`) for eliminating unused CSS from production bundles using PurgeCSS:
  - Batch-processes all CSS assets in a single pass (`getCss`, `getCssAssets`, `getContent`, `updateCss`) to avoid redundant filesystem scanning.
  - Supports custom scan globs (`content`), selector preservation (`safelist`), and dynamic PurgeCSS options (`purgeCssOptions`).
  - Safely decodes both `string` and `Uint8Array` asset sources with `TextDecoder`.
  - Added companion factory function `vitePluginPurgeCss` in `functions/vitePluginPurgeCss.js`.
- **`vitePurgeCss`**: Added Vite configuration preset (`viteconfig/vitePurgeCss.config.js`) combining `viteBasicFunction` with `vitePluginPurgeCss`.
- **Dependencies**: Added `@vue/tsconfig`, `purgecss`, and `rollup` to `peerDependencies` with `optional: true` metadata.

### Changed
- **`viteBasicFunction`**:
  - Added `outDirs: 'dist'` for `vite-plugin-dts` v5+ while preserving `outDir`, `bundledPackages`, and `rollupTypes` for v4 backwards compatibility.
  - Updated return type to `UserConfig`.
- **`VitePluginLibrary`**:
  - Corrected declaration in `VitePluginLibrary.d.ts` from obsolete `renderChunk` to the actual `processBundle` method.
- **Type Definitions**:
  - Replaced `{}` return types with `UserConfig` across configuration presets (`viteBasic`, `viteComponents`, `viteConstructors`, `viteFlags`, `viteLibrariesRollup`, `viteMdx`, `vitePurgeCss`).
  - Replaced `any` types across all declaration files with strict types (`VitePluginPurgeCssRawCss`, `VitePluginPurgeCssRawContent`, `Rollup.PreRenderedAsset`, `PluginOption[]`).

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
