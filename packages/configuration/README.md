# @dxtmisha/configuration

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fconfiguration.svg)](https://www.npmjs.com/package/@dxtmisha/configuration)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/configuration` provides shared, ready-to-use Vite and TypeScript configuration presets for building UI components, libraries, and applications within the DXT UI ecosystem.

## Why this library?

Configuring Vite build pipelines and TypeScript options across multiple packages in a monorepo often leads to duplicated config files, inconsistent build settings, and maintenance overhead.

`configuration` centralizes standardized build presets (Vite configs, TypeScript bases, rollup plugins, MDX support) into reusable exports, ensuring consistent build outputs and zero boilerplate across packages.

## What does it do?

For **Vite build presets** — reusable Vite configurations (`viteBasic`, `viteBasicFunction`, `viteComponentOnly`, `viteFlags`, `viteMdx`, `viteLibraries`) optimized for Vue 3 component packages and library builds.

For **TypeScript configurations** — extended tsconfig presets (`tsconfig.app.json`, `tsconfig.node.json`) for application and node build environments.

For **monorepo build standardization** — unified build targets, peer dependency externalization, and dxt-ui plugin hooks out of the box.

## Installation

```bash
npm install @dxtmisha/configuration
```

## Quick Start

```javascript
// vite.config.js - basic configuration
import { viteBasic } from '@dxtmisha/configuration/viteBasic'

export default viteBasic
```

```json
// tsconfig.json - extending TypeScript preset
{
  "extends": "@dxtmisha/configuration/tsconfig/tsconfig.app.json"
}
```

## Principles

- **Zero boilerplate** — pre-configured plugins, aliases, and rollup options for instant setup.
- **Modular presets** — select specialized configs for component libraries, flags, or MDX docs.
- **DXT UI ecosystem default** — guarantees full compatibility across all monorepo packages.
- **TypeScript & ESM first** — strict typing and modern ESM module outputs.

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/](https://dxtmisha.github.io/dxt-ui/)**

## License

[MIT](LICENSE)

