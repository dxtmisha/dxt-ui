# Changelog

All notable changes to this project will be documented in this file.

## [0.1.9] - 2026-11-09

### Changed
- **`DxtTestWiki`**: Connected `useWikiPropsHide()` to control the rendering of components marked with `ai.hide` (`getAiHide()`) and filtered hidden properties (`isHide()`) out of the rendered property list when hiding is active so hidden items are completely omitted from the DOM.
- **`DxtTestWikiPropItem`**: Removed the `.dxt-test-wiki-prop-item--hide` (`opacity: .32`) visual dimming style in favor of strict conditional rendering (`v-if="show"`).
- **Library Exports**: Reordered exports in `library.ts` to export composables and types before components.
- **Dependencies**: Updated `@dxtmisha/functional` (`>=2.1.0`), `@dxtmisha/functional-basic` (`>=2.1.4`), `@dxtmisha/styles` (`>=1.0.14`), `@dxtmisha/wiki` (`>=1.2.0`), and `vue` (`>=3.5.44`) dependency version constraints in `package.json`.

## [0.1.8] - 2026-09-07

### Changed
- **Dependencies**: Updated workspace package dependencies to explicit `>=` semver ranges (`@dxtmisha/functional`, `@dxtmisha/functional-basic`, `@dxtmisha/styles`, `@dxtmisha/wiki`, `vue`).

## [0.1.7] - 2026-08-05

### Changed
- **Dependencies & Metadata**: Updated `package.json` with workspace dependencies (`@dxtmisha/functional`, `@dxtmisha/functional-basic`, `@dxtmisha/styles`, `@dxtmisha/wiki`, `vue`), updated package description and keywords, and generated AI documentation (`ai-memory.md`).
- **Documentation**: Overhauled `README.md` with structured testing container highlights, visual regression overview, and interactive documentation usage.
