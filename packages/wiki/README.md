# @dxtmisha/wiki

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fwiki.svg)](https://www.npmjs.com/package/@dxtmisha/wiki)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/wiki` is a documentation toolkit and component metadata registry for the DXT UI design system. It provides structured metadata builders (`WikiStorybook`), pre-configured Storybook controls (`wikiButton`, `wikiStatus`), React documentation components (`StorybookMain`), and bilingual MDX documentation content (en/ru/vi) to standardize design system documentation.

## Why this library?

Maintaining large-scale design system documentation in Storybook often results in scattered control definitions, inconsistent prop descriptions across components, hardcoded story templates, and copy-pasted MDX documentation.

`@dxtmisha/wiki` solves this by centralizing all component metadata, prop categories, descriptions, and story templates into a structured, type-safe API. Components define their controls and documentation metadata using `WikiStorybook` builders, while Storybook renders standardized documentation pages (`StorybookMain`, `StorybookDescriptions`) directly from central MDX registries.

## What does it do?

For **Storybook controls & argTypes** — `WikiStorybook` and `WikiStorybookItem` classes that build Storybook-compatible `argTypes` maps, automatically organizing props into ordered categories (`Status`, `Values`, `Styles`, `Adaptive`, `Technical`, `Hook`).

For **pre-configured prop definitions** — ready-to-use control maps (`wikiStatus`, `wikiValue`, `wikiStyle`, `wikiButton`, `wikiField`, `wikiIcon`, `wikiTable`, etc.) that provide standard controls, descriptions, and default values across all components without manual setup.

For **React Storybook components** — pre-built React components (`StorybookMain`, `StorybookDescriptions`) for rendering standardized Storybook documentation pages with titles, subtitles, canvas stories, and MDX descriptions.

For **bilingual MDX documentation** — structured MDX pages and text descriptions (`en`, `ru`, `vi`) covering component usage, prop mechanics, slot descriptions, and event details.

For **demo media assets** — centralized exports of high-resolution demo images (`image1`, `image2`), mockups (`phone1`, `phone2`), and sample files for Storybook previews.

## Installation

```bash
npm install @dxtmisha/wiki
```

## Quick Start

```typescript
import { WikiStorybook } from '@dxtmisha/wiki'
import { wikiStatus, wikiStyle, wikiButton } from '@dxtmisha/wiki/media'

// 1. Combine pre-configured prop definitions
const buttonArgs = {
  ...wikiStatus, // disabled, loading, readonly
  ...wikiStyle,  // appearance, size, color
  ...wikiButton  // button-specific props
}

// 2. Instantiate WikiStorybook builder
export const buttonWiki = new WikiStorybook(
  'Button',
  props,
  defaults,
  buttonArgs
)

// 3. Export to Storybook
export default {
  title: 'Components/Button',
  argTypes: buttonWiki.getWiki(),
  args: buttonWiki.getValues()
}
```

## Principles

- **Single source of documentation truth** — all prop controls, descriptions, and MDX docs are defined centrally and shared across Storybook stories.
- **Type-safe metadata builders** — strong TypeScript typing for controls, prop schemas, categories, and Storybook argument configurations.
- **Bilingual documentation (i18n)** — native support for English, Russian, and Vietnamese descriptions across MDX pages and Storybook controls.
- **Granular exports & zero-runtime overhead** — modular entry points (`/media`, `/storybook`) allowing fast compilation and clean tree-shaking.

## Documentation

Full API reference, Storybook integration, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-wiki-styles-demo-card--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-wiki-styles-demo-card--docs)**

## Difference from other @dxtmisha packages

- **`@dxtmisha/wiki`** — documentation metadata builders, Storybook controls, React layout components, and MDX documentation.
- **`@dxtmisha/constructor`** — headless Vue 3 component constructors, logic engines, and accessibility controllers.
- **`@dxtmisha/d1`** — production-ready Vue 3 UI component library with D1 design system styling.

## License

[MIT](LICENSE)
