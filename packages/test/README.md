# @dxtmisha/test

[![npm version](https://badge.fury.io/js/@dxtmisha%2Ftest.svg)](https://www.npmjs.com/package/@dxtmisha/test)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/test` is a modular Vue 3 testing and documentation library. It provides dedicated test harness components, visual regression utilities, and interactive documentation helpers for building and validating UI components.

## Why this library?

Testing UI components and maintaining visual documentation often requires combining disparate tools, custom test pages, and manual screenshot workflows. Without a structured harness, test scenarios become fragmented and hard to maintain across a monorepo.

`test` simplifies this by offering structured test containers (such as `DxtTestPage` and `DxtTestBlock`) that decouple test logic from visual presentation, making it easy to create reproducible test cases, visual regression suites, and living documentation.

## What does it do?

For **test structure & layout** — container components like `DxtTestPage` and `DxtTestBlock` to organize test scenarios, isolate states, and render structured test cases cleanly.

For **visual regression & screenshots** — built-in helpers and layout primitives for consistent automated visual regression testing and screenshot generation across UI components.

For **documentation & wiki** — seamless integration with `@dxtmisha/wiki` to automatically render interactive code examples and live component demonstrations.

For **Vue 3 & TypeScript** — full Composition API support with `<script setup>`, strict typing for props, slots, emits, and exposed component APIs.

## Installation

```bash
npm install @dxtmisha/test
```

## Quick Start

```vue
<template>
  <DxtTestPage title="Button Component Test">
    <DxtTestBlock title="Default State">
      <button>Click me</button>
    </DxtTestBlock>
  </DxtTestPage>
</template>

<script setup lang="ts">
import { DxtTestPage, DxtTestBlock } from '@dxtmisha/test'
</script>
```

## Principles

- **Visual isolation** — cleanly separate test block setups and scenarios from application logic.
- **Vue 3 & Composition API** — native `<script setup>` support with clean reactivity.
- **TypeScript-first** — strict typing for props, slots, and component events out of the box.
- **Documentation-ready** — interactive wiki components for instant doc generation.

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/](https://dxtmisha.github.io/dxt-ui/)**

## License

[MIT](LICENSE)

