# @dxtmisha/wiki

Storybook + MDX–oriented documentation toolkit for the DXT UI design system.  
Provides strongly‑typed description builders, Storybook documentation components, media/asset integration, and utilities to standardize component knowledge across your UI library.

> This package publishes **TypeScript ESM source from `src/`** (no prebuilt `dist/`). Your toolchain (Vite / Webpack / ts-node / Next.js / etc.) must compile TypeScript & handle native ESM.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Peer Dependencies](#peer-dependencies)
- [Entry Points](#entry-points)
- [Quick Start](#quick-start)
- [API Overview](#api-overview)
- [Storybook Integration](#storybook-integration)
- [Typing Arguments](#typing-arguments)
- [Media & Assets](#media--assets)
- [MDX Content](#mdx-content)
- [Architecture](#architecture)
- [Source Distribution Notes](#source-distribution-notes)
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
| Structured Metadata | Classes for registering component descriptions, states, stories, argument metadata. |
| Storybook Doc Components | Prebuilt React blocks (`StorybookMain`, `StorybookDescriptions`) combining Title, Subtitle, Canvas, Controls. |
| Strong Typing | Enums (`StorybookControl`, `StorybookCategory`) and typed arg schemas. |
| Hybrid Ecosystem | Designed for Vue component libraries with React-based Storybook Docs. |
| Media Layer | Centralized exports (images, PDFs, description utilities). |
| MDX Ready | Content and layout compatible with Storybook MDX flows. |
| Granular Entrypoints | Import only what you need (`media`, `storybook`, `storybook/styles`). |
| Pure ESM + Side‑Effect Free | Optimized for modern bundlers and tree shaking. |
| Source Publishing | Ships raw TypeScript for maximum transparency & compilation flexibility. |

---

## Installation

```bash
npm install @dxtmisha/wiki
# or
pnpm add @dxtmisha/wiki
# or
yarn add @dxtmisha/wiki
```

Then install required peers (see below).

---

## Peer Dependencies

These must exist in your workspace (they are not auto-installed):

| Package | Minimum Version | Purpose |
|---------|-----------------|---------|
| @dxtmisha/functional | >= 1.0.0 | Shared functional utilities |
| @dxtmisha/media | >= 0.3.0 | Shared media layer used by wiki exports |
| @storybook/addon-docs | >= 7.0.0 | Storybook Docs runtime |
| @storybook/blocks | >= 7.0.0 | Blocks API for docs composition |
| @mdx-js/react | >= 2.0.0 | MDX runtime provider |
| react | >= 17.0.0 | Rendering docs components |
| vue | >= 3.0.0 | Consuming side for Vue components in your DS |

Example combined install:

```bash
npm install @dxtmisha/functional @dxtmisha/media @storybook/addon-docs @storybook/blocks @mdx-js/react react vue
```

---

## Entry Points

| Import Path | Purpose |
|-------------|---------|
| `@dxtmisha/wiki` | Core classes & types. |
| `@dxtmisha/wiki/media` | Media asset + description exports. |
| `@dxtmisha/wiki/storybook` | Storybook docs layout components. |
| `@dxtmisha/wiki/storybook/styles` | SCSS style layer for docs components. |

---

## Quick Start

```ts
import {
  WikiStorybookDescriptions,
  WikiStorybookItem
} from '@dxtmisha/wiki'

const registry = new WikiStorybookDescriptions()

registry.add({
  name: 'Button',
  description: 'Interactive button component',
  possibilities: ['Primary action', 'Secondary action', 'Disabled state'],
  stories: [
    { id: 'ButtonDefault', name: 'Default Button' }
  ]
} as WikiStorybookItem)
```

---

## API Overview

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

import {
  image1,
  image2,
  phone1,
  phone2,
  phone3,
  demoPdf,
  mediaDescriptions,
  mediaProps
} from '@dxtmisha/wiki/media'

import {
  StorybookMain,
  StorybookDescriptions
} from '@dxtmisha/wiki/storybook'

import '@dxtmisha/wiki/storybook/styles'
```

---

## Storybook Integration

Minimal docs page (React):

```tsx
import React from 'react'
import { StorybookMain } from '@dxtmisha/wiki/storybook'
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

Add SCSS (configure your bundler to handle SCSS):

```ts
import '@dxtmisha/wiki/storybook/styles'
```

---

## Typing Arguments

```ts
import {
  StorybookControl,
  StorybookCategory,
  type StorybookArgs
} from '@dxtmisha/wiki'

export const args: StorybookArgs = {
  variant: {
    control: StorybookControl.select,
    options: ['primary', 'secondary', 'ghost'],
    table: {
      category: StorybookCategory.style,
      defaultValue: { summary: 'primary' },
      type: { summary: '"primary" | "secondary" | "ghost"' }
    },
    description: 'Visual emphasis style.'
  },
  disabled: {
    control: StorybookControl.boolean,
    table: { category: StorybookCategory.status, defaultValue: { summary: 'false' } },
    description: 'Disables user interaction.'
  }
}
```

---

## Media & Assets

```ts
import {
  image1,
  image2,
  phone1,
  phone2,
  phone3,
  demoPdf
} from '@dxtmisha/wiki/media'
```

Use for:
- Visual previews in docs
- Embedding design references
- Linking design guideline PDFs

---

## MDX Content

The repository includes MDX fragments (e.g. direction management, variant behaviors).  
Ensure Storybook is configured with Docs + MDX:

```ts
// .storybook/main.ts
export default {
  addons: ['@storybook/addon-docs'],
  framework: '@storybook/react-vite'
}
```

Install `@mdx-js/react` to satisfy MDX runtime needs.

---

## Architecture

```
src/
  classes/                # Metadata + registry abstractions
  documentation/storybook # React doc components
  media/                  # Asset exports + MDX/description assets
  types/                  # Enums & shared type definitions
  styles/                 # SCSS styling for docs
  library.ts              # Root barrel export
  media.ts                # Media entrypoint
  storybook.ts            # Storybook entrypoint
```

---

## Source Distribution Notes

Because only raw `.ts` / `.tsx` sources are published:
- Your bundler must process TypeScript (Vite / esbuild / SWC / ts-loader).
- The `types` field points to `src/library.ts`; TypeScript will walk the source tree.
- If you require generated declaration files in your build output, run `tsc --emitDeclarationOnly` in your own pipeline.
- CommonJS environments must either switch to ESM or use dynamic `import()` with a transpile step.

Suggested consumer `tsconfig.json` excerpt:

```jsonc
{
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "NodeNext",
    "allowImportingTsExtensions": true,
    "skipLibCheck": true
  }
}
```

---

## Tree Shaking

Static ESM exports + no side effects → bundlers remove unused symbols automatically.

```ts
import { WikiStorybookDescriptions } from '@dxtmisha/wiki'
// Only this class is included if nothing else is referenced.
```

---

## Versioning

Semantic Versioning:
- Patch: bug fixes / internal refactors / documentation.
- Minor: additive backwards-compatible features.
- Major: breaking changes / removals / structural shifts.

---

## Troubleshooting

| Problem | Cause | Resolution |
|---------|-------|-----------|
| "Cannot use import statement" | CJS environment only | Enable ESM or transpile to CJS. |
| Missing React runtime | React not installed | Install `react` (peer). |
| Vue integration errors | Vue peer missing | Install `vue@^3`. |
| Storybook docs blank | Addon not present | Install `@storybook/addon-docs` + config. |
| SCSS not loading | No SCSS support | Add appropriate loader (e.g. Vite handles automatically with plugin). |
| Type warnings for peers | Peers not installed | Install listed peer dependencies. |
| MDX components fail | MDX runtime missing | Install `@mdx-js/react` and ensure addon-docs enabled. |

---

## FAQ

**Do I get precompiled JavaScript?**  
No—intentional for transparency and flexible consumer builds.

**Will this work in Node-only environments?**  
It targets design system + Storybook workflows; pure Node usage is not primary.

**Can I extend metadata objects?**  
Yes—compose or wrap `WikiStorybookItem` shape.

**Do I have to use Storybook?**  
You can still leverage the metadata classes outside Storybook, but doc components assume Storybook context.

**React + Vue both required?**  
React: for docs components. Vue: for component layer integration. If you only use metadata & not Vue, you can still have Vue installed as a lightweight peer satisfaction.

---

## Roadmap

- Prop / arg inference from component source
- CLI scaffolding for description & MDX templates
- Localized documentation layering
- Optional prebuilt ESM + declaration bundle
- Extended asset manifest generation

---

## Contributing

1. Fork
2. Branch: `feat/<short-name>`
3. Implement & keep examples minimal
4. Ensure type correctness
5. Open PR with concise rationale

---

## Security

No runtime network operations.  
Report vulnerabilities privately: `dxtmisha@gmail.com` (subject: SECURITY @dxtmisha/wiki).

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
import { image1, demoPdf } from '@dxtmisha/wiki/media'
import { StorybookMain } from '@dxtmisha/wiki/storybook'
import '@dxtmisha/wiki/storybook/styles'
```

Happy documenting.
