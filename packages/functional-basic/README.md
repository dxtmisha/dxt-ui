# @dxtmisha/functional-basic

[![npm version](https://badge.fury.io/js/@dxtmisha%2Ffunctional-basic.svg)](https://www.npmjs.com/package/@dxtmisha/functional-basic)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/functional-basic` is a foundational utility library for modern web development. It's framework-agnostic and can be used in any TypeScript project — whether Vue, React, Nuxt, or plain browser code.

## Why this library?

Every web application inevitably faces the same set of challenges: HTTP requests, localization, dates, cookies, caching, loading states. Typically each project solves these in its own way, accumulating scattered utilities that are spread across folders, duplicated between projects, and grow stale over time.

`functional-basic` brings all these solutions together in one place — thoughtful, tested, and ready to use. It's not a mega-framework with strict conventions, but a library: pick only what you need and use it however works best for you.

## What does it do?

For **networking** — a full-featured HTTP client with lifecycle hooks, response caching, header management, response mocking for development, and an integrated loading state. Requests can be cancelled, configured, and extended — without pulling in extra dependencies.

For **geolocation and internationalization** — automatic detection of the user's country and language, locale-aware formatting of numbers, dates, currencies, and units of measurement, pluralization rules, country flags (200+ countries), phone codes and input masks. Everything is built on top of the native `Intl` API, ensuring correctness in any market.

For **browser state management** — convenient wrappers over `localStorage`, `sessionStorage`, `cookie`, and URL hash. All with TypeScript types and change subscription support. Data persists across sessions without extra boilerplate on your end.

For **SEO and meta tags** — a unified class that synchronizes `<title>`, Open Graph, and Twitter Card simultaneously. A single `setTitle()` call updates the browser tab, social media previews, and Twitter card at once. Works in both browser and SSR environments.

For **data manipulation** — a rich set of utilities: deep object copying, array operations, safe type conversion, value validation, string formatting, and template substitution. Written with real edge cases in mind, not just the happy path.

For **DOM** — element creation, attribute handling, scrolling, querying, and image utilities. Small but essential tools that save time when working with the browser environment.

## Installation

```bash
npm install @dxtmisha/functional-basic
```

## Quick Start

```typescript
import { Api, GeoIntl, Meta, Cache, isFilled } from '@dxtmisha/functional-basic'

// HTTP client
Api.setUrl('/api/v1')
const users = await Api.get({ path: 'users' })

// Locale-aware formatting
const intl = new GeoIntl()
intl.number(1234567.89)     // '1,234,567.89'
intl.currency(99.99, 'USD') // '$99.99'
intl.date(new Date(), 'date')

// Caching
const cache = new Cache()
const data = cache.get('key', () => expensiveOperation(), [dep])

// Unified SEO — one call updates title, og:title and twitter:title
const meta = new Meta()
meta.setSuffix('My Site')
meta.setTitle('Article').setDescription('...').setImage('https://...')

// Validation
if (isFilled(value)) { /* ... */ }
```

## Principles

- **Zero external dependencies** — no third-party packages are pulled in. Fewer conflicts, fewer vulnerabilities, fewer surprises during updates.
- **TypeScript-first** — strict typing and autocomplete out of the box. Types aren't an "add-on" — they're an integral part of the API.
- **Clean API** — method chaining, predictable behavior, clear naming. You don't need to read the docs to understand what `isFilled` or `setTitle` does.
- **Test coverage** — every class and function ships with tests. Library changes won't silently break your project.

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-functional-basic-about-the-library--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-functional-basic-about-the-library--docs)**

## Difference from @dxtmisha/functional

- **`@dxtmisha/functional-basic`** — core utilities, no framework dependencies. Use this with vanilla JS, React, or any non-Vue stack, or when building a library.
- **`@dxtmisha/functional`** — extends `functional-basic` with Vue 3 composables and reactive utilities. Use this in Vue / Nuxt applications.

## License

[MIT](LICENSE)
