# @dxtmisha/configuration

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fconfiguration.svg)](https://www.npmjs.com/package/@dxtmisha/configuration)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/configuration` provides shared, ready-to-use Vite and TypeScript configuration presets for building UI components, libraries, and applications within the DXT UI ecosystem.

## Why this library?

Configuring Vite build pipelines and TypeScript options across multiple packages in a monorepo often leads to duplicated config files, inconsistent build settings, and maintenance overhead.

`configuration` centralizes standardized build presets (Vite configs, TypeScript bases, rollup plugins, MDX support) into reusable exports, ensuring consistent build outputs and zero boilerplate across packages.

## Presets & Configurations

### Vite Presets

- **`viteBasic`** (`@dxtmisha/configuration/viteBasic`)
  Default ready-to-use Vite configuration preset for standard libraries, built on top of `viteBasicFunction` with default options.

- **`viteBasicFunction`** (`@dxtmisha/configuration/viteBasicFunction`)
  Flexible, parameterized factory function for creating customized Vite configurations for functional libraries, composables, classes, and utilities. Accepts an options object (`entry`, `target`, `external`, `fileCssName`, `fileLibraryName`, `rollupTypes`, `include`, `exclude`, etc.) and automatically integrates `vitePluginLibrary` to inject CSS imports into library bundles.

- **`viteComponents`** (`@dxtmisha/configuration/viteComponents`)
  Optimized Vite configuration for Vue 3 UI component libraries (e.g. `d1`, `ui`). Preserves module structure (`preserveModules: true`), enables MDX documentation support, and integrates `vitePluginComponents` to automatically import component styles (`styleToken.css`).

- **`viteConstructors`** (`@dxtmisha/configuration/viteConstructors`)
  Vite configuration for constructor-based packages (`constructor`), aggregating all constructor entries from `src/library/` alongside `src/library.ts` with MDX support.

- **`viteFigma`** (`@dxtmisha/configuration/viteFigma`)
  Specialized configuration factory for Figma plugins, supporting dual builds: backend sandbox code (`src/code.ts` bundled into a single file via `vite-plugin-singlefile`) and frontend UI (`src/main.ts`).

- **`viteFlags`** (`@dxtmisha/configuration/viteFlags`)
  Optimized build configuration preset for SVG flag and geographic asset packages (`src/flags.ts`).

- **`viteLibrariesRollup`** (`@dxtmisha/configuration/viteLibrariesRollup`)
  Multi-entry aggregate library build configuration (used by the root `dxt-ui` package), scanning entries from `src/library/` and bundling unified TypeScript declaration files (`rollupTypes: true`).

- **`viteMdx`** (`@dxtmisha/configuration/viteMdx`)
  Vite configuration with `@mdx-js/rollup` integration for compiling MDX documentation and interactive component examples.

### Rollup & Vite Plugins

- **`vitePluginComponents`** (`@dxtmisha/configuration/vitePluginComponents`)
  Post-build Vite plugin for UI component libraries that automatically injects `./styleToken.css` imports into component entry points (`components/Ui/*/index.js`).

- **`vitePluginLibrary`** (`@dxtmisha/configuration/vitePluginLibrary`)
  Post-build Vite plugin for library packages that automatically injects `./style.css` (or custom CSS file) imports into the library bundle (`library.js`).

### TypeScript Presets

- **`tsconfig/tsconfig.app.json`**
  Base TypeScript configuration preset for browser application and library client code (ESNext, DOM, strict type-checking, JSX preservation).

- **`tsconfig/tsconfig.node.json`**
  Base TypeScript configuration preset for Node.js build scripts, Vite configs, and CLI tools.

## Installation

```bash
npm install @dxtmisha/configuration
```

## Quick Start

### Basic Library

```javascript
// vite.config.js
import { viteBasic } from '@dxtmisha/configuration/viteBasic'

export default viteBasic
```

### Customized Functional Library

```javascript
// vite.config.js
import { viteBasicFunction } from '@dxtmisha/configuration/viteBasicFunction'

export default viteBasicFunction({
  entry: 'src/library.ts',
  rollupTypes: true
})
```

### UI Component Library

```javascript
// vite.config.js
import { viteComponents } from '@dxtmisha/configuration/viteComponents'

export default viteComponents
```

### Extending TypeScript Presets

```json
// tsconfig.json
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
