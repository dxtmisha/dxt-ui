# @dxtmisha/zip

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fzip.svg)](https://www.npmjs.com/package/@dxtmisha/zip)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`@dxtmisha/zip` is a lightweight and high-performance utility library for creating and managing ZIP archives in both browser and Node.js environments. Built on top of the incredibly fast `fflate` engine, it provides a clean, object-oriented API for handling compressed data.

## Why this library?

Working with ZIP files in JavaScript often involves dealing with complex binary structures or bloated libraries that are hard to integrate. Projects frequently need to generate reports, export collections of images, or package data for download on the fly.

`zip` simplifies this by providing a dedicated `Zip` class that handles encoding, buffer management, and even browser-side downloads with a single method call. It's designed to be simple, predictable, and fully typed.

## What does it do?

For **archive management** — a straightforward class to manage the lifecycle of a ZIP file. Add files, remove them if needed, set compression options, and track whether the archive actually contains any data before processing.

For **browser integration** — built-in support for DOM environments. The `save()` method automatically handles Blob creation, Object URL generation, and the "hidden link" trick to trigger a native browser download, cleaning up after itself to prevent memory leaks.

For **data handling** — automatic text encoding. When you add a string to the archive, the library automatically converts it to `Uint8Array` using `TextEncoder`, so you don't have to worry about character encoding manually.

For **performance** — utilizes `fflate` for synchronous compression. This ensures the smallest possible bundle size and the fastest execution time compared to other popular alternatives like JSZip.

## Installation

```bash
npm install @dxtmisha/zip
```

## Quick Start

```typescript
import { Zip } from '@dxtmisha/zip'

// Create a new archive
const zip = new Zip('project-export.zip')

// Add files
zip.addFile('config.json', JSON.stringify({ version: '1.0' }))
zip.addFile('assets/logo.png', imageBuffer)

// Check state
if (zip.is()) {
  // Save/Download in browser
  zip.save()

  // Or get the buffer for manual processing (e.g., upload to server)
  const buffer = zip.get()
}

// Manage content
zip.removeFile('config.json')
```

## Principles

- **Performance-first** — leveraging `fflate` for maximum speed and minimum overhead.
- **Developer Experience** — fluent API with method chaining and intuitive naming.
- **TypeScript-first** — full type safety for all methods and options.
- **Lightweight** — focused on doing one thing (ZIP management) exceptionally well.

## License

[MIT](LICENSE)

