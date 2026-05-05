# @dxtmisha/scripts

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fscripts.svg)](https://www.npmjs.com/package/@dxtmisha/scripts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/scripts` is a powerful suite of development scripts and CLI tools designed specifically for automating workflows in modern UI libraries.

## Why this library?

Maintaining a UI library inevitably involves a lot of repetitive boilerplate: creating component files, writing basic props interfaces, setting up Storybook configuration, keeping index barrel files updated, and maintaining documentation. Typically each project solves these by copying and pasting folders or writing ad-hoc shell scripts that break over time.

`scripts` brings all these solutions together in one place — thoughtful, tested, and ready to use. It automates the mundane work, providing a cohesive toolset to scaffold components, generate documentation (including AI-assisted text), and automatically manage library exports, ensuring your UI project remains structured and easy to scale.

## What does it do?

For **component scaffolding** — automatic generation of full Vue component templates. A single command sets up `.vue` files, `props.ts`, `styleToken.scss`, and barrel exports, complete with TypeScript definitions.

For **design system orchestration** — a robust suite of classes to parse TypeScript props, manage constructor configurations, and synchronize design tokens.

For **documentation & Storybook** — tools to generate `.stories.ts` and `.mdx` files automatically. It can even utilize Google's AI (Gemini) or Anthropic's Claude to generate component descriptions and technical docs.

For **Figma integration** — a complete Figma API client capable of fetching styles, analyzing design nodes, and translating them into usable code structures.

For **visual testing** — browser automation using Puppeteer to capture and process component screenshots across different states and themes.

For **library management** — automated maintenance of `index.ts` files (barrel exports) across packages, ensuring all components and utilities are correctly exposed.

## Installation

```bash
npm install -D @dxtmisha/scripts
```

> **Note:** TypeScript sources are shipped directly. Requires a TypeScript runner like `vite-node`, `tsx`, or manual transpilation.

## Quick Start

### CLI Commands

```bash
# Generate component scaffolds in empty directories
npx dxt-component

# Generate wiki documentation for a specific component
npx dxt-component-wiki MyButton

# Build component constructors
npx dxt-constructor

# Rebuild library exports
npx dxt-library

# Full UI project build
npx dxt-ui
```

### Programmatic Usage

```typescript
import { ComponentCreator, AiGoogle, LibraryExport } from '@dxtmisha/scripts'

// Generate component scaffolds
const creator = new ComponentCreator()
creator.make()

// AI-powered generation
const ai = new AiGoogle()
ai.setModel('gemini-1.5-flash')
const result = await ai.generate('Create props interface for Button component')

// Library export management
const library = new LibraryExport()
library.make()
```

## Principles

- **Developer Experience First** — commands are simple, outputs are predictable. You shouldn't have to write boilerplate.
- **TypeScript-first** — strict typing and autocomplete out of the box. Ships source directly, making it easy to integrate into modern tooling environments.
- **AI-Enhanced** — embraces LLMs to speed up tedious documentation and scaffolding tasks.
- **Clean API** — predictable behavior and clear naming for programmatically managing UI systems.

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/](https://dxtmisha.github.io/dxt-ui/)**

## Difference from other tools

- **`@dxtmisha/scripts`** — specifically tailored for the internal architecture of DXT UI, integrating deeply with our property management and Storybook setup. Not a generic scaffolding tool like Yeoman or Plop.

## License

[MIT](LICENSE)
