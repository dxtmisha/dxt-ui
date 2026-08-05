# @dxtmisha/media

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fmedia.svg)](https://www.npmjs.com/package/@dxtmisha/media)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/media` is a lightweight media resources and geographical dataset library for DXT UI. It provides SVG country flags (250+ countries) and structured i18n country metadata (ISO codes, phone masks, timezones, primary languages, and first weekday).

## Why this library?

Handling internationalization features like country pickers, phone input masks, and locale selectors usually requires pulling heavy third-party datasets or manually maintaining scattered SVG assets and country metadata across projects.

`media` solves this by packaging clean, tree-shakeable SVG flag assets and a standardized ISO 3166-1 geographical dataset into a single zero-dependency library ready for any web application.

## What does it do?

For **country flag assets** — 250+ vector SVG country flags with uniform PascalCase naming (`UsSvg`, `FrSvg`, `DeSvg`), fully tree-shakeable for optimal bundle sizes.

For **geographical dataset (`geo`)** — comprehensive ISO country metadata including phone codes, input masks, primary timezones, default languages, and first day of the week.

For **internationalization (i18n)** — ready-to-use dataset for locale pickers, phone inputs, identity verification, and onboarding flows.

For **TypeScript & ESM** — 100% typed with `.d.ts` declarations and side-effect free ESM modules.

## Installation

```bash
npm install @dxtmisha/media
```

## Quick Start

```typescript
import { geo } from '@dxtmisha/media'
import { UsSvg, FrSvg } from '@dxtmisha/media/flags'

// Search country metadata
const us = geo.find(c => c.country === 'US')
console.log(us?.phoneCode) // "1"
console.log(us?.phoneMask) // "(...)"

// Use SVG flags
console.log(UsSvg)
```

## Principles

- **Zero external dependencies** — standalone SVG assets and JSON dataset.
- **Tree-shaking optimized** — import individual flag icons to minimize bundle size.
- **TypeScript-first** — complete type safety for country records and flag components.
- **Framework-agnostic** — works with Vue, React, Svelte, Nuxt, or plain JavaScript.

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/](https://dxtmisha.github.io/dxt-ui/)**

## License

[MIT](LICENSE)

