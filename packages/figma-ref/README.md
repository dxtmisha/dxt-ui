# @dxtmisha/figma-ref

[![npm version](https://badge.fury.io/js/@dxtmisha%2Ffigma-ref.svg)](https://www.npmjs.com/package/@dxtmisha/figma-ref)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`@dxtmisha/figma-ref` is a collection of Vue 3 composables designed for Figma plugin development. It bridges the gap between the asynchronous Figma API and Vue's reactive system, allowing developers to create highly responsive and state-driven plugin interfaces.

## Why this library?

Managing state in a Figma plugin can be challenging: you need to track canvas selections, sync data with persistent storage, and handle bidirectional messaging—all while keeping your UI in sync.

`figma-ref` solves this by wrapping these complex interactions into simple, reactive primitives. Instead of manually handling message events or polling for selection changes, you simply use a composable. The library manages the underlying `@dxtmisha/figma` communication and updates your Vue components automatically when the Figma state changes.

## What does it do?

For **Figma storage** — provides `useFigmaStorage` and `useFigmaClientStorage`. These composables bind Figma's persistent data (node-level or plugin-level) to reactive Vue refs, making data persistence as easy as working with local state.

For **selection tracking** — `useFigmaUiSelected` and `useFigmaFrameSelection` allow your UI to react instantly as the user selects different nodes on the Figma canvas. They provide clean access to IDs, names, and types of selected elements.

For **frame management** — `useFigmaUiFrames` simplifies working with top-level frames or specific hierarchies, providing a reactive list of nodes that can be used to build navigation or layers panels within your plugin UI.

For **design-to-code and styles** — `useFigmaFrameStyles` facilitates fetching and reacting to CSS styles and JSON representations of Figma nodes, perfect for building style inspectors or export tools.

## Installation

```bash
npm install @dxtmisha/figma-ref
```

## Quick Start (Vue 3 Component)

```vue
<script setup>
import { useFigmaUiSelected, useFigmaStorage } from '@dxtmisha/figma-ref'

// 1. Reactively track selected frames
const { items: selectedItems } = useFigmaUiSelected()

// 2. Reactively manage plugin settings stored in Figma
const { value: settings, set: setSettings } = useFigmaStorage('user-settings')

const toggleTheme = () => {
  setSettings({ ...settings.value, dark: !settings.value.dark })
}
</script>

<template>
  <div>
    <h3>Selected: {{ selectedItems.length }}</h3>
    <ul>
      <li v-for="item in selectedItems" :key="item.id">{{ item.name }}</li>
    </ul>

    <button @click="toggleTheme">Toggle Theme</button>
  </div>
</template>
```

## Principles

- **Vue-First Reactivity** — every utility is a true Vue composable, utilizing `ref`, `computed`, and `shallowRef` for optimal performance.
- **Deep Integration** — works seamlessly with the `@dxtmisha/figma` communication layer and `@dxtmisha/figma-code` backend abstraction.
- **Declarative State** — encourages a declarative approach to plugin UI, where the interface is a direct function of the Figma canvas state.
- **Efficiency** — handles resource cleanup and avoids memory leaks by leveraging Vue's lifecycle hooks for event subscriptions.

## Documentation

Full API reference and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-figma-ref-about-library--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-figma-ref-about-library--docs)**

## License

[MIT](LICENSE)

