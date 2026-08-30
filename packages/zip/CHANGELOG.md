# Changelog

All notable changes to this project will be documented in this file.

## [0.1.4] - 2026-08-30

### Added
- **Exports & Distribution**: Added `ai-screenshot` directory to package distribution `files` and configured explicit export mappings for `./ai-types.md`, `./ai-description.md`, `./ai-resources/*`, and `./ai-screenshot/*` in `package.json`.

### Changed
- **Build Configuration**: Migrated `vite.config.ts` to use `viteBasicFunction()` from `@dxtmisha/configuration/viteBasicFunction`.
- **AI Type Definitions**: Refined and modernized JSDoc search tags (`@keywords`) and descriptions across `Zip` class methods in `ai-types-list/classes/Zip.d.ts`.

## [0.1.3] - 2026-08-20

### Added
- **LLM Configuration (`llms.txt`)**: Added `llms.txt` documentation summarizing `Zip` class API methods and archive management capabilities.
- **License**: Added official MIT `LICENSE` file.

### Changed
- **Scripts & Package Configuration (`package.json`)**:
  - Updated `types` script to `npm run library && npm run build && dxt-types`.
  - Updated `prepublishOnly` script to `npm run library && npm run build && dxt-types-save`.
  - Cleaned up package `exports` by removing unused `./style.css` entry.
- **AI Documentation & Types**:
  - Migrated type definitions to modular `ai-types-list/` with MD5 hash tracking.
  - Added `ai-description.md`, `ai-mcp-resources.json`, and `ai-types.md` to `.gitignore`.

## [0.1.2] - 2026-08-05

### Changed
- **Dependencies & Build Scripts**: Added `@dxtmisha/functional-basic` dependency, updated Vitest test scripts with `--no-webstorage`, added `types` script (`dxt-types`), set `sideEffects: false`, and updated files array in `package.json`.
- **AI Documentation & Metadata**: Generated package AI metadata files (`ai-description.md`, `ai-types.md`, `ai-mcp.json`, `ai-memory.md`).
- **Documentation**: Standardized `README.md` layout, badges, and documentation links.
