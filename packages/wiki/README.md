# @dxtmisha/wiki

Storybook + MDX–oriented documentation toolkit for the DXT UI design system.  
Provides strongly‑typed description builders, Storybook doc page components, media asset exports, and utilities to standardize how you document and present components.

<div align="left">

[![npm version](https://img.shields.io/npm/v/@dxtmisha/wiki.svg)](https://www.npmjs.com/package/@dxtmisha/wiki)
[![npm downloads](https://img.shields.io/npm/dm/@dxtmisha/wiki.svg)](https://www.npmjs.com/package/@dxtmisha/wiki)
[![bundle size](https://img.shields.io/bundlephobia/minzip/@dxtmisha/wiki)](https://bundlephobia.com/package/@dxtmisha/wiki)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](./LICENSE)
![Types](https://img.shields.io/badge/types-TypeScript-blue)
![Node >=18](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)
![ESM only](https://img.shields.io/badge/module-ESM-orange)

</div>

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Why Use It](#why-use-it)
- [Entry Points](#entry-points)
- [Quick Start](#quick-start)
- [API Overview](#api-overview)
- [Typing Storybook Args](#typing-storybook-args)
- [Media Assets](#media-assets)
- [MDX Content](#mdx-content)
- [Architecture](#architecture)
- [Tree Shaking](#tree-shaking)
- [Versioning](#versioning)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)
- [At a Glance](#at-a-glance)

---

## Features

| Area | Description |
|------|-------------|
| Structured Metadata | Classes to register component descriptions, possible states, and stories. |
| Storybook Docs Components | Pre‑built doc layout parts (`StorybookMain`, `StorybookDescriptions`). |
| Strong Typing | Enums & type helpers for Storybook args and control categories. |
| Media Layer | Centralized exports for design assets (images, demo PDF, etc.). |
| MDX Friendly | Ships MDX guidance fragments you can integrate in docs pipelines. |
| Multiple Entrypoints | Fine‑grained imports: `media`, `storybook`, styles, types. |
| ESM + Side‑Effect Free | Optimized for modern bundlers and tree shaking. |
| Design System Ready | Built for monorepo usage and scalable component documentation. |

---

## Installation

```bash
# npm
npm install @dxtmisha/wiki

# pnpm
pnpm add @dxtmisha/wiki

# yarn
yarn add @dxtmisha/wiki
```

Peer requirements (not auto‑installed):
- @dxtmisha/functional >= 1.0.0
- vue >= 3.0.0 (optional — only if you integrate with Vue parts of your system)

Runtime requirement: Node >= 18.

---

## Why Use It

- Consistent documentation output across your component library.
- Declarative approach: describe once, render across Storybook & MDX.
- Reduces boilerplate in Storybook Docs pages.
- Enforces type safety for argument tables and control metadata.
- Allows bundlers to keep footprint minimal via isolated entrypoints.

---

## Entry Points

| Import Path | Purpose |
|-------------|---------|
| `@dxtmisha/wiki` | Core classes & public types. |
| `@dxtmisha/wiki/media` | Media assets & description utilities. |
| `@dxtmisha/wiki/storybook` | Storybook doc components. |
| `@dxtmisha/wiki/storybook/styles` | Uncompiled SCSS styles for Storybook integration. |

---

## Quick Start

### 1. Register Component Descriptions

```ts
import {
  WikiStorybookDescriptions,
  WikiStorybookItem
} from '@dxtmisha/wiki'

const descriptions = new WikiStorybookDescriptions()

descriptions.add({
  name: 'Button',
  description: 'Interactive button component',
  possibilities: ['Primary action', 'Secondary action', 'Disabled state'],
  stories: [{
    id: 'ButtonDefault',
    name: 'Default Button'
  }]
} as WikiStorybookItem)
```

### 2. Use in a Storybook Docs Page (React)

```tsx
import React from 'react'
import { StorybookMain } from '@dxtmisha/wiki/storybook'
// import your actual story reference
import { Default as ButtonStory } from './Button.stories'

export default function ButtonDocs() {
  return (
    <StorybookMain
      name="Button"
      description="Interactive button component"
      story={ButtonStory}
    />
  )
}
```

### 3. Import Styles (if needed)

```ts
import '@dxtmisha/wiki/storybook/styles'
```

### 4. Consume Media Assets

```ts
import { image1, demoPdf } from '@dxtmisha/wiki/media'
```

---

## API Overview

Core exports (from root):

```ts
import {
  WikiStorybook,
  WikiStorybookDescriptions,
  WikiStorybookItem,
  StorybookControl,
  StorybookCategory,
  type StorybookArgs,
  type StorybookArgsItem
} from '@dxtmisha/wiki'
```

Storybook utilities:

```ts
import {
  StorybookMain,
  StorybookDescriptions // (if you leverage extended doc layout)
} from '@dxtmisha/wiki/storybook'
```

Media exports:

```ts
import {
  image1,
  image2,
  phone1,
  phone2,
  phone3,
  demoPdf,
  // plus description / prop utilities re-exported internally
  mediaDescriptions,
  mediaProps
} from '@dxtmisha/wiki/media'
```

---

## Typing Storybook Args

A strongly typed approach improves consistency:

```ts
import {
  StorybookControl,
  StorybookCategory,
  type StorybookArgs
} from '@dxtmisha/wiki'

export const args: StorybookArgs = {
  size: {
    control: StorybookControl.select,
    options: ['sm', 'md', 'lg'],
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'md' },
      type: { summary: '"sm" | "md" | "lg"' }
    },
    description: 'Visual size of the component'
  },
  disabled: {
    control: StorybookControl.boolean,
    table: {
      category: StorybookCategory.status,
      defaultValue: { summary: 'false' }
    },
    description: 'Disable user interaction'
  }
}
```

---

## Media Assets

Centralized image and PDF assets ensure consistent referencing in documentation.

```ts
import { image1, demoPdf } from '@dxtmisha/wiki/media'
```

Use cases:
- Embedding UI previews
- Attaching UX illustration
- Linking supporting PDF design guidelines

---

## MDX Content

The package includes MDX fragments conveying usage guidance (e.g. direction handling, variant semantics, UX rationale).  
Integrate them by adding an MDX loader in your Storybook + Vite configuration, then importing fragments as needed.

> Only built outputs defined in the `files` whitelist are published. Internal MDX sources may not be directly importable unless explicitly re-exported.

---

## Architecture

| Layer | Role |
|-------|------|
| Classes | Descriptive abstractions for Storybook-compatible metadata. |
| Documentation / Storybook | React-based doc blocks to unify page layout. |
| Media | Curated asset exports and supporting descriptive utilities. |
| Types | Enums, categories, and argument schema definitions. |
| Build | Vite library mode, multiple entrypoints, ESM only. |

Monorepo sample structure:

```
packages/
  wiki/
    src/
      classes/
      documentation/
      media/
      types/
    dist/
```

---

## Tree Shaking

The package sets `sideEffects: false` and ships pure ESM.  
Example minimal import:

```ts
import { WikiStorybookDescriptions } from '@dxtmisha/wiki'
```

Your bundler will exclude unused exports automatically (Vite / Rollup / Webpack 5 / Turbopack).

---

## Versioning

Semantic Versioning:
- Patch: Bug fixes / documentation changes.
- Minor: Backwards-compatible feature additions.
- Major: Breaking API or structural changes.

---

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| "Cannot use import statement" | CJS environment not ESM-aware | Enable ESM or transpile via bundler. |
| Missing Storybook styles | Styles not imported | `import '@dxtmisha/wiki/storybook/styles'`. |
| Asset 404 | Direct path import | Use named exports from `@dxtmisha/wiki/media`. |
| Control table mis-render | Wrong enum | Use `StorybookControl` and `StorybookCategory` constants. |

---

## FAQ

**Is React a peer dependency?**  
No. React is used internally for Storybook doc components; you typically have React available in Storybook if you use those components.

**Can I extend component description shape?**  
Yes—compose a higher-order wrapper around `WikiStorybookItem` or maintain additional metadata externally.

**Does this replace all Storybook docs files?**  
It standardizes common layout and metadata; you can still write custom MDX where needed.

**Can I import raw MDX fragments directly?**  
Only if they are exported through an entrypoint and your bundler is configured for MDX.

---

## Roadmap

- Automated prop extraction
- CLI for scaffolding description objects & MDX docs
- Multilingual description layering
- Programmatic story args inference

---

## Contributing

1. Fork repository
2. Create a branch: `feat/<short-name>`
3. Run build: `npm run build`
4. Include concise examples & typings
5. Open a PR with a clear summary

---

## Security

No network calls are performed at runtime.  
Report vulnerabilities via email: `dxtmisha@gmail.com` (subject: SECURITY @dxtmisha/wiki).  
Please avoid filing public issues for undisclosed vulnerabilities.

---

## License

[MIT](./LICENSE) © dxtmisha

---

## At a Glance

```ts
import {
  WikiStorybook,
  WikiStorybookDescriptions,
  StorybookControl,
  StorybookCategory
} from '@dxtmisha/wiki'
import { image1 } from '@dxtmisha/wiki/media'
import { StorybookMain } from '@dxtmisha/wiki/storybook'
import '@dxtmisha/wiki/storybook/styles'
```

Happy documenting!
