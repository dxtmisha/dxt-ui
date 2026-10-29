# @dxtmisha/media

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fmedia.svg)](https://www.npmjs.com/package/@dxtmisha/media)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/media` is a foundational media resources, vector icon libraries, and geographical dataset library for modern web development. It's framework-agnostic, tree-shakeable, zero-dependency, and can be used in any TypeScript project — whether Vue, React, Nuxt, or plain browser code.

## Why this library?

Every web application eventually faces the same recurring requirements: handling file uploads and displaying file-type icons, validating and formatting social media profiles and user handles, and rendering localized country flags or phone number input masks. Typically, projects solve these with fragmented SVG snippets, ad-hoc regular expressions, bloated icon fonts, and copy-pasted country datasets that quickly become obsolete and needlessly inflate production bundles.

`@dxtmisha/media` brings all these solutions together in one place — thoughtful, tested, and ready to use. Heavy SVG assets are completely decoupled from core metadata registries, allowing you to import only what you need and keep client-side bundles minimal.

## What does it do?

For **file handling and classification** — `MediaFile` unifies heterogeneous inputs (native browser `File` or `Blob` objects, Data URLs, Blob URLs, remote URLs, filesystem paths, MIME types, or extension codes) into a standardized interface. It resolves filenames, extensionless base names, normalized extensions, canonical MIME types, categories across 16 media classifications (`image`, `video`, `document`, `archive`, `table`, etc.), and 22 built-in boolean checkers (`isImage()`, `isDocument()`, `isArchive()`, etc.).

For **file catalog and custom icons** — `MediaFiles` provides centralized lookup by code, extension, or MIME type with lazy in-memory `Map` indexing for instant O(1) retrieval, while `MediaFileIcon` provides a prototype-isolated in-memory registry to override or inject custom SVG icons dynamically with fluent method chaining.

For **social media networks and handles** — comprehensive metadata for 35+ global and regional networks (GitHub, Telegram, Instagram, X/Twitter, WeChat, Reddit, Zalo, etc.). `MediaSocialNickname` formats platform-specific handles (`@dxtmisha`, `u/dxtmisha`), `MediaSocialUrl` constructs canonical profile links with duplicate prefix protection, and `MediaSocialValue` extracts clean usernames while stripping query parameters, ports, and dangerous protocols.

For **country flags and geographical data** — 250+ vector SVG country flags in PascalCase (`UsSvg`, `VnSvg`, `FrSvg`, etc.) and a structured ISO 3166-1 country dataset (`geo.json`) covering international phone codes, input masks, primary timezones, default languages, first day of the week, and non-metric unit overrides.

For **isomorphic security and string utilities** — safe protocol verification (`isDangerousProtocol`) protecting against XSS attacks (`javascript:`, `data:`, `vbscript:`), URL prefix replacement (`replacePrefix`), and case-preserving URL normalization (`toLower`).

## Installation

```bash
npm install @dxtmisha/media
```

## Quick Start

```typescript
import { MediaFile, MediaFiles, MediaSocial, InputSocialType, geo } from '@dxtmisha/media'
import { registerFileIcons } from '@dxtmisha/media/files'
import { registerSocialIcons } from '@dxtmisha/media/socials'
import { UsSvg, VnSvg } from '@dxtmisha/media/flags'

// Register standard SVG file & social icons
registerFileIcons()
registerSocialIcons()

// 1. File inspection & classification
const file = new MediaFile('https://example.com/assets/annual-report.2026.pdf?v=2#page=1')
file.name         // 'annual-report.2026.pdf'
file.baseName     // 'annual-report.2026'
file.extension    // 'pdf'
file.mime         // 'application/pdf'
file.isDocument() // true
file.isImage()    // false
file.icon         // '<svg ...'

// 2. Static catalog lookups
const pdfItem = MediaFiles.getByMime('application/pdf')
MediaFiles.isLink('https://example.com/doc.pdf') // true

// 3. Social media URLs and handles
MediaSocial.getUrl(InputSocialType.github, 'dxtmisha')                       // 'https://github.com/dxtmisha'
MediaSocial.getValue(InputSocialType.github, 'https://github.com/dxtmisha') // 'dxtmisha'
MediaSocial.getNickname(InputSocialType.telegram, 'dxtmisha')                // '@dxtmisha'
MediaSocial.getNickname(InputSocialType.reddit, 'dxtmisha')                  // 'u/dxtmisha'

// 4. Country flags & geographical data
const us = geo.find(item => item.country === 'US')
us?.phoneCode // '1'
us?.phoneMask // '(...) ...-....'
UsSvg         // '<svg ...'
VnSvg         // '<svg ...'
```

## Subpath Exports

To minimize application bundle sizes, heavy SVG assets are isolated in dedicated subpath entry points:

| Import Path | Contents |
| :--- | :--- |
| `@dxtmisha/media` | Core classes (`MediaFile`, `MediaFiles`, `MediaFileIcon`, `MediaSocial`, `MediaSocialNickname`, `MediaSocialUrl`, `MediaSocialValue`), metadata registries (`fileList`, `socialList`, `geo`), utility functions, and TypeScript types without bundled SVG strings. |
| `@dxtmisha/media/files` | 85 vector SVG file icons (`fileIcons`) and `registerFileIcons()` initialization helper. |
| `@dxtmisha/media/socials` | 35 vector SVG social media icons (`socialIcons`) and `registerSocialIcons()` initialization helper. |
| `@dxtmisha/media/flags` | 250+ vector SVG country flags in PascalCase (`UsSvg`, `VnSvg`, `FrSvg`, etc.). |

## Principles

- **Zero external dependencies** — standalone SVG vector assets, typed classes, and JSON datasets with zero third-party dependencies.
- **Tree-shaking optimized** — core metadata contains zero SVG strings; vector assets are imported on-demand via dedicated subpaths.
- **TypeScript-first** — strict typing, explicit interfaces, and autocomplete out of the box with zero `any`.
- **Clean API** — predictable method chaining, single-responsibility classes, and intuitive naming.
- **Isomorphic & SSR-safe** — safe for Node.js, Nitro, Nuxt, Next.js, and client-side runtimes without DOM leaks or window dependencies.
- **Test coverage** — every class, utility, and edge case ships with comprehensive unit tests (570+ tests).

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-media-about-the-library--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-media-about-the-library--docs)**

## License

[MIT](LICENSE)
