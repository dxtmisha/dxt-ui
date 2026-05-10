# @dxtmisha/figma-code

[![npm version](https://badge.fury.io/js/@dxtmisha%2Ffigma-code.svg)](https://www.npmjs.com/package/@dxtmisha/figma-code)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`@dxtmisha/figma-code` is a structured TypeScript abstraction layer for Figma Plugin backend development. It provides high-level tools for node manipulation, persistent storage, and bidirectional communication between the plugin's logic and its UI.

## Why this library?

Developing Figma plugins often involves repetitive tasks like traversing complex node trees, managing character data in text nodes, and handling persistent state through `clientStorage` or `pluginData`.

The native Figma API is powerful but low-level. `figma-code` wraps these APIs into intuitive, type-safe classes and functions that handle common patterns automatically—such as caching storage values, traversing parent-child relationships, and managing message exchange between the sandbox and the iframe.

## What does it do?

For **node manipulation (DOM-like API)** — the `FigmaItem` class and its specialized derivatives (like `FigmaFrame`) provide a convenient way to interact with Figma nodes. They offer methods for type checking (`isText`, `isFrame`), accessing parent/page context, and extracting CSS or JSON representations of nodes.

For **persistent storage** — robust wrappers for Figma's storage systems. `FigmaStorage` handles `setPluginData` (node-level storage) with built-in caching and aging logic, while `FigmaClientStorage` provides a similar interface for `figma.clientStorage` (plugin-level storage).

For **bidirectional messaging** — `FigmaPluginMessenger` simplifies communication between the plugin backend and the UI. It provides a standardized way to send messages (`post`) and handle incoming ones, ensuring type safety across the boundary.

For **selection and navigation** — utilities like `FigmaFramesSelected` and `FigmaTopLevelFrames` allow developers to easily track and manipulate user selections or find specific elements within the document without manual recursion.

For **content processing** — specialized modules like `FigmaAiText` facilitate text analysis and manipulation, which is essential for building AI-driven translation or design-to-code tools.

## Installation

```bash
npm install @dxtmisha/figma-code
```

## Quick Start

```typescript
import { FigmaItem, FigmaStorage, FigmaPluginMessenger } from '@dxtmisha/figma-code'

// 1. Working with nodes
const selectedNode = figma.currentPage.selection[0]
if (selectedNode) {
  const item = new FigmaItem(selectedNode)
  console.log('Node Name:', item.getName())
  if (item.isText()) {
    console.log('Text Content:', item.getText())
  }
}

// 2. Persistent storage with caching
const userSettings = FigmaStorage.getInstance('settings')
const theme = userSettings.get({ theme: 'light' })
userSettings.set({ ...theme, theme: 'dark' })

// 3. Messaging to UI
const messenger = FigmaPluginMessenger.getInstance()
messenger.post('UPDATE_STATUS', { status: 'ready' })
```

## Principles

- **Structured Abstraction** — moves beyond raw Figma nodes to a more object-oriented approach that is easier to reason about.
- **Type Safety** — built from the ground up with TypeScript, ensuring that your plugin logic is robust and predictable.
- **Performance Optimized** — includes caching mechanisms for data-heavy operations like reading storage or processing complex node trees.
- **Developer Experience** — focuses on reducing boilerplate code for common plugin tasks, letting you focus on the core features of your plugin.

## Documentation

Full API reference and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-figma-code-about-library--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-figma-code-about-library--docs)**

## License

[MIT](LICENSE)

