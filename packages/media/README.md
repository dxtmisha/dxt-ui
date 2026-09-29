# @dxtmisha/media

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fmedia.svg)](https://www.npmjs.com/package/@dxtmisha/media)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/media` is a lightweight media resources, vector icon libraries, and geographical dataset library for DXT UI. It provides file classification and detection (`MediaFile`), social media configurations (`MediaSocial`), country flags (250+ countries), and structured ISO 3166-1 country metadata. Framework-agnostic, tree-shakeable, and zero dependencies.

## What is included?

### 1. File Type Detection & Management (`MediaFile`, `MediaFiles`, `MediaFileIcon`)
- **Metadata Resolution**: Automatically resolve file name, extensionless base name, lowercase extension, MIME type, category, group, and SVG icon.
- **Multiple Input Types**: Accepts file paths, URLs (with automatic query/hash stripping), extension codes, or native browser `File` objects.
- **MIME & Extension Aliases**: Resolves canonical IANA MIME types and multi-extension formats (e.g. `docx`/`dotx`, `jpg`/`jpeg`, `js`/`mjs`/`cjs`, `ts`/`mts`/`cts`).
- **Boolean Type Checkers**: Methods for quick category verification — `isDocument()`, `isImage()`, `isArchive()`, `isVideo()`, `isAudio()`, `isCode()`, `isTable()`, `isPresentation()`, `isNeutral()`, `isCategory()`, `isStandard()`.
- **Custom Icons Registry**: Manage and override SVG icons dynamically with `MediaFileIcon`.

### 2. Social Media Management (`MediaSocial`)
- **35 Supported Networks**: Comprehensive configurations for GitHub, Discord, Telegram, LinkedIn, Facebook, Zalo, WeChat, X (Twitter), YouTube, etc.
- **URL & Handle Helpers**: Generate full profile URLs with `getUrl()` or parse profile handles from URLs with `getValue()`.
- **Input Masks & Validation**: Built-in input mask rules and profile link prefixes for form inputs.

### 3. Vector SVG Asset Libraries (Tree-shakeable)
- **`@dxtmisha/media/files`**: 85 vector SVG file icons with `registerFileIcons()` initialization helper.
- **`@dxtmisha/media/socials`**: 35 official vector SVG social icons with `registerSocialIcons()` initialization helper.
- **`@dxtmisha/media/flags`**: 250+ vector SVG country flags in PascalCase (`UsSvg`, `FrSvg`, `DeSvg`, `VnSvg`, etc.).

### 4. Geographical Dataset (`geo`)
- **ISO 3166-1 Country Metadata**: Phone codes, input masks, primary timezones, default languages, first day of the week, and non-metric unit overrides.

---

## Installation

```bash
npm install @dxtmisha/media
```

---

## Quick Start

### File Handling with `MediaFile`

```typescript
import { MediaFile } from '@dxtmisha/media'
import { registerFileIcons } from '@dxtmisha/media/files'

// Register standard SVG file icons
registerFileIcons()

// 1. From a URL or file path
const file = new MediaFile('https://example.com/assets/annual-report.2026.pdf?v=2#page=1')

console.log(file.name) // 'annual-report.2026.pdf'
console.log(file.baseName) // 'annual-report.2026'
console.log(file.extension) // 'pdf'
console.log(file.mime) // 'application/pdf'
console.log(file.isDocument()) // true
console.log(file.isImage()) // false
console.log(file.icon) // '<svg ...'

// 2. From a native browser File object with MIME detection
const upload = new MediaFile(new File(['...'], 'blob', { type: 'image/png' }))

console.log(upload.extension) // 'png'
console.log(upload.mime) // 'image/png'
console.log(upload.isImage()) // true

// 3. Static lookups with MediaFiles
import { MediaFiles } from '@dxtmisha/media'

const item = MediaFiles.getByMime('application/pdf')
console.log(item?.code) // 'pdf'
console.log(MediaFiles.isLink('https://example.com/doc.pdf')) // true
```

### Social Media with `MediaSocial`

```typescript
import { MediaSocial, InputSocialType } from '@dxtmisha/media'
import { registerSocialIcons } from '@dxtmisha/media/socials'

// Register standard SVG social icons
registerSocialIcons()

// Query platform configuration
const github = MediaSocial.get(InputSocialType.github)
console.log(github?.name) // 'GitHub'

// Generate and parse URLs
const profileUrl = MediaSocial.getUrl('dxtmisha', InputSocialType.github)
console.log(profileUrl) // 'https://github.com/dxtmisha'

const username = MediaSocial.getValue('https://github.com/dxtmisha', InputSocialType.github)
console.log(username) // 'dxtmisha'
```

### Country Flags & Geo Dataset

```typescript
import { geo } from '@dxtmisha/media'
import { UsSvg, VnSvg, FrSvg } from '@dxtmisha/media/flags'

// Search country metadata
const us = geo.find(c => c.country === 'US')
console.log(us?.phoneCode) // '1'
console.log(us?.phoneMask) // '(...) ...-....'

// Tree-shakeable SVG flags
console.log(UsSvg) // '<svg ...'
console.log(VnSvg) // '<svg ...'
```

---

## Subpath Exports

To minimize application bundle sizes, heavy SVG assets are isolated in dedicated subpath entry points:

| Import Path | Contents |
|---|---|
| `@dxtmisha/media` | Core classes (`MediaFile`, `MediaFiles`, `MediaFileIcon`, `MediaSocial`), metadata registries (`fileList`, `socialList`, `geo`), and TypeScript types without bundled SVG strings. |
| `@dxtmisha/media/files` | 85 vector SVG file icons (`fileIcons`) and `registerFileIcons()` helper. |
| `@dxtmisha/media/socials` | 35 vector SVG social icons (`socialIcons`) and `registerSocialIcons()` helper. |
| `@dxtmisha/media/flags` | 250+ vector SVG country flags in PascalCase (`UsSvg`, `VnSvg`, etc.). |

---

## Architecture & Principles

- **Zero external dependencies** — standalone SVG vector assets, typed classes, and JSON datasets.
- **Tree-shaking optimized** — core metadata contains zero SVG strings; assets are imported on-demand.
- **TypeScript-first** — 100% typed with `.d.ts` declarations and type guards.
- **Framework-agnostic** — works with Vue, React, Svelte, Nuxt, Angular, Node.js, or plain JavaScript.

---

## Documentation

Full API reference, guides, and interactive Storybook examples:

**[📖 https://dxtmisha.github.io/dxt-ui/](https://dxtmisha.github.io/dxt-ui/)**

---

## License

[MIT](LICENSE)
