# @dxtmisha/media

Flag SVG assets + lightweight geographical dataset (ISO country codes, primary timezone, phone codes & masks, language hints, first weekday).  
Designed for internationalization (i18n) UI components: country pickers, phone inputs, locale selectors, onboarding flows.

Pure data + assets. No runtime logic. ESM build + TypeScript declarations.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Entry Points](#entry-points)
- [Quick Start](#quick-start)
- [API Overview](#api-overview)
- [Data Model](#data-model)
- [Flags Usage Patterns](#flags-usage-patterns)
- [Architecture](#architecture)
- [Tree Shaking & Bundling](#tree-shaking--bundling)
- [Performance Tips](#performance-tips)
- [Versioning](#versioning)
- [Troubleshooting](#troubleshooting)
- [FAQ](#faq)
- [Recipes](#recipes)
- [Contributing](#contributing)
- [Security](#security)
- [License](#license)
- [At a Glance](#at-a-glance)

---

## Features

| Area | Description |
|------|-------------|
| Comprehensive Flags | 250+ ISO 3166‑1 alpha‑2 flags (SVG). |
| Uniform Naming | Each flag exported as `CcSvg` (PascalCase of the 2‑letter code: `UsSvg`, `DeSvg`). |
| Geo Dataset | Country object list with phone code, mask(s), timezone, language, first weekday. |
| TypeScript | Full `.d.ts` emitted in `dist/`. |
| ESM Build | Modern modules; side‑effect free for tree shaking. |
| Flexible Imports | Single flag named import or aggregate default object. |
| Zero Dependencies | No external runtime dependencies. |
| UI Ready | Ideal for dropdowns, phone inputs, identity/verification flows. |

---

## Installation

```bash
# npm
npm install @dxtmisha/media

# pnpm
pnpm add @dxtmisha/media

# yarn
yarn add @dxtmisha/media
```

Node: >= 18  
Peer dependencies: none.

---

## Entry Points

| Import Path | Purpose |
|-------------|---------|
| `@dxtmisha/media` | Geo dataset (`geo`). |
| `@dxtmisha/media/flags` | Flag SVG exports (named + default aggregate). |
| `@dxtmisha/media/types/*` | Type declarations passthrough (if you want direct type imports). |

---

## Quick Start

```ts
// Geographical data
import { geo } from '@dxtmisha/media'

// Single flags (preferred)
import { UsSvg, FrSvg } from '@dxtmisha/media/flags'

// Aggregate object (may increase bundle size)
import flags from '@dxtmisha/media/flags'

const us = geo.find(c => c.country === 'US')
console.log(us?.phoneCode) // "1"
console.log(UsSvg) // URL / inlined string (depends on bundler)
```

---

## API Overview

### Dataset

```ts
import { geo } from '@dxtmisha/media'

/**
 * geo: GeoData[]
 */
console.log(geo.length)
```

### Flags

```ts
import { DeSvg, JpSvg } from '@dxtmisha/media/flags'
import allFlags from '@dxtmisha/media/flags'

const germany = DeSvg
const japan = allFlags.JpSvg
```

---

## Data Model

```ts
interface GeoData {
  country: string               // ISO alpha-2, e.g. "US"
  countryAlternative?: string[] // Alternative codes (optional)
  language: string              // Primary language code
  languageAlternative?: string[]
  firstDay: string | null       // "Mo" | "Su" | null
  zone: string                  // Representative IANA timezone
  phoneCode: string             // Without '+', e.g. "1"
  phoneMask: string[]           // Formatting templates, e.g. ["+1-***-***-****"]
}
```

---

## Flags Usage Patterns

| Pattern | Import | Pros | Cons |
|---------|--------|------|------|
| Named import | `import { UsSvg } from '@dxtmisha/media/flags'` | Allows bundler to potentially drop others | Requires many import specifiers |
| Aggregate object | `import flags from '@dxtmisha/media/flags'` | Simple dynamic access | Risk of bundling all flags |
| Dynamic import | `await import('@dxtmisha/media/flags')` | Lazy load large sets | Adds async boundary |

---

## Architecture

```
packages/media/
  src/
    assets/flags/        # Raw SVG files
    flags.ts             # Imports all SVG and exports map + named
    media/geo.json       # Dataset
    library.ts           # Root export (geo)
  dist/                  # Build output (published)
  package.json
  README.md
```

Build:
- Vite library build (generates `dist/*`).
- Types emitted to `dist/*.d.ts`.
- Export map provides: root, flags, types wildcard.

---

## Tree Shaking & Bundling

- Flags file statically imports every SVG. A smart bundler can treeshake unused named exports when:
    - ESM is preserved
    - No wildcard runtime usage of the aggregate object
- Using the default aggregate import (`flags`) may inhibit full shaking.
- To minimize bundle size: prefer named imports.

---

## Performance Tips

| Goal | Strategy |
|------|----------|
| Minimize initial JS size | Only import required flags named. |
| Lazy load rarely used sets | Dynamic `import('@dxtmisha/media/flags')`. |
| Reduce HTML size | Use CSS `background-image` if repeating icons. |
| Optimize inline SVG | Run additional SVGO if required (project-level). |

---

## Versioning

Semantic Versioning:
- Patch: dataset corrections / flag asset tweaks.
- Minor: additional fields / new territories.
- Major: structural changes (naming, breaking data shape).

---

## Troubleshooting

| Issue | Likely Cause | Resolution |
|-------|--------------|-----------|
| Flag not found | Wrong casing (should be PascalCase) | Use `UsSvg` not `USSvg` / `usSvg`. |
| Bundle unexpectedly large | Imported aggregate flags object | Switch to named imports. |
| Incorrect phone formatting | Masks are generic | Apply locale-specific formatter on top. |
| Timezone mismatch | Multi-zone country | Choose a specific zone in your app UI. |

---

## FAQ

**Are the SVGs optimized?**  
Yes—baseline optimization; further pipeline compression optional.

**Why no region / continent grouping?**  
Kept minimal. Compose your own mapping arrays.

**Can I extend the dataset?**  
Yes—spread merge your custom entries after import.

**Do you export emoji flags?**  
No—focus is SVG assets.

**Can I tree shake the dataset?**  
Dataset is a single JSON import; you get the full array.

---

## Recipes

### Region Filtering (Custom)

```ts
const EU = ['DE', 'FR', 'ES', 'IT', 'NL', 'BE', 'SE']
import { geo } from '@dxtmisha/media'
const european = geo.filter(c => EU.includes(c.country))
```

### Safe Lookup

```ts
import { geo } from '@dxtmisha/media'
export function getCountry(code: string) {
  const entry = geo.find(c => c.country === code.toUpperCase())
  if (!entry) throw new Error(`Unknown ISO code: ${code}`)
  return entry
}
```

### Dial Code Dropdown Data

```ts
import { geo } from '@dxtmisha/media'
import * as flags from '@dxtmisha/media/flags'

const dialOptions = geo.map(c => ({
  value: c.country,
  dial: `+${c.phoneCode}`,
  flag: (flags as any)[`${c.country[0]}${c.country[1].toLowerCase()}Svg`]
}))
```

### Dynamic Import Example

```ts
async function loadFlag(code: string) {
  const mod = await import('@dxtmisha/media/flags')
  // Construct PascalCase variant
  const name = `${code[0]}${code[1].toLowerCase()}Svg`
  return (mod as any)[name]
}
```

---

## Contributing

1. Fork repository
2. Branch: `feat/media-<topic>`
3. Add / optimize SVG (proper viewBox, minimal paths)
4. Update `geo.json` if necessary (maintain integrity)
5. Run build & lint
6. Open PR with clear description

---

## Security

Static assets + JSON only.  
Report concerns privately: `dxtmisha@gmail.com` (subject: SECURITY @dxtmisha/media).

---

## License

[MIT](./LICENSE) © dxtmisha

---

## At a Glance

```ts
import { geo } from '@dxtmisha/media'
import { UsSvg, DeSvg } from '@dxtmisha/media/flags'

const us = geo.find(c => c.country === 'US')
console.log(us?.phoneMask?.[0]) // Example mask

const img = new Image()
img.src = UsSvg
document.body.appendChild(img)
```

Build international UIs faster.
