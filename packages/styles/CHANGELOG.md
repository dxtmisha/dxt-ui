# Changelog

All notable changes to this project will be documented in this file.

## [1.0.14] - 2026-10-19

### Added
- **Tests**: Added full test suite for `color.scss` (`src/styles/__tests__/color.test.ts`) covering 55 test cases for hex parsing, alpha detection, system color token emission, property mixins, and palette integration.
- **Scripts**: Added `"test": "vitest run"` script in `package.json`.

### Fixed
- **Color Tokens and Mixins (`color.scss`)**: Fixed loss of alpha channel for 8-digit hex (`#RRGGBBAA`), 4-digit hex (`#RGBA`), and `rgba()`/`hsla()` colors in `--sys-*` system tokens.
  - Added hex color parsing helpers (`hexToDec`, `isHexAlphaString`, `hexStringToAlpha`, `hexStringToRgb`, `isColorAlpha`) supporting both Sass `color` objects and hex string literals.
  - Added `toOpacityValue` helper to normalize opacity parameters without transforming CSS custom properties, preventing opacity variables like `var(--d1-sys-opacity-hover)` from being corrupted with an extra `-opacity` suffix.
  - Updated opacity mixins (`colorOpacity`, `backgroundOpacity`, `gradientOpacity`, `borderOpacity`, `outlineOpacity`) and `colorSys` to use `toOpacityValue`.
  - Updated `colorSys` to emit `--sys-#{$name}-opacity` automatically when the color has transparency (< 1) while omitting it for solid colors to preserve parent opacity inheritance.
  - Updated property mixins (`backgroundColor`, `color`, `borderColor`, `outlineColor`, `gradient`, `fill`, `stroke`) to pass opacity through `colorSys` and prevent opaque color fallbacks.
  - Updated `getColor` and `getColorValue` to retain original color opacity instead of defaulting to `1`.
  - Replaced legacy global `unquote()` with modern `string.unquote()` in `getColor` to eliminate Dart Sass 3.0 deprecation warnings.
  - Cleaned up formatting in `toCustomVarOpacity` to prevent extra whitespace in fallback values.
- **Properties Generator (`propertiesProperty.scss`)**: Passed `$value` directly into color mixins to preserve native Sass color types instead of converting them to strings via `#{$value}`.

## [1.0.13] - 2026-09-07

### Changed
- **Dependencies**: Updated workspace package dependencies to explicit `>=` semver ranges.
- **Documentation**: Migrated package documentation to `src/storybook/` structure.

## [1.0.12] - 2026-08-21

### Added
- **AI Documentation**: Added `mixins.md` (`ai-resources/mixins.md`) containing a complete reference guide for all available SCSS mixins and utilities.
- **AI Core Reference**: Added `ai-doc.md` with concise package overview, key capabilities, and strict rules against custom mixin creation.
- **Scripts**: Added `"types": "dxt-types"` script in `package.json` for automated documentation and type definition generation.
- **MCP Resources**: Registered `mixins.md` in `ai-mcp-resources.json`.

## [1.0.10] - 2026-08-05

### Changed
- **Documentation**: Standardized `README.md` layout, updated documentation links, and aligned package structure with workspace rules.
