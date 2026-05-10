# @dxtmisha/figma

[![npm version](https://badge.fury.io/js/@dxtmisha%2Ffigma.svg)](https://www.npmjs.com/package/@dxtmisha/figma)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

`@dxtmisha/figma` is the core communication middleware for Figma plugins. It provides a structured bidirectional messaging bridge between the Figma plugin logic (sandbox) and its UI layer (iframe), ensuring type-safe and reliable data exchange.

## Why this library?

In Figma plugin development, communication between the backend logic and the frontend UI relies on asynchronous messaging via `postMessage`. This process is often prone to errors due to missing type safety, complex payload structures, and the need for message verification to avoid collisions.

`@dxtmisha/figma` solves these problems by implementing a robust event bus. It abstracts the low-level `onmessage` / `postMessage` API into a clean, subscription-based system that validates messages and provides a clear separation of concerns.

## What does it do?

For **messaging infrastructure** — provides `FigmaPostAbstract` and `FigmaUiMessenger` to manage the event bus. It uses a verification system (`FigmaPostCode`) to ensure that only authorized messages are processed, protecting against side effects from other scripts or plugins.

For **data synchronization** — offers a suite of utility functions (`fetchClientStorage`, `fetchStorage`, `fetchTopLevelFrames`, etc.) that simplify common data fetching patterns. These utilities abstract the request-response cycle into a typed interface, making it easy to retrieve document structure or storage data from the UI.

For **UI updates** — facilitates sending complex design data (like frame hierarchies or CSS styles) to the UI via standardized "send" functions (`sendFrameStyles`, `sendFramesSelected`), ensuring the frontend stays in sync with the Figma canvas state.

For **shared types** — contains the foundational type definitions (`UiFigmaNode`, `UiFigmaMessengerData`, etc.) that are used across all `@dxtmisha/figma-*` packages, providing a single source of truth for the entire plugin ecosystem.

## Installation

```bash
npm install @dxtmisha/figma
```

## Quick Start (UI Side)

```typescript
import { FigmaUiMessenger, fetchTopLevelFrames } from '@dxtmisha/figma'

// 1. Initialize the messenger in your UI (e.g., in a Vue/React component)
const messenger = FigmaUiMessenger.getInstance()

// 2. Subscribe to messages from the plugin backend
messenger.subscribe('FETCH_SUCCESS', (data) => {
  console.log('Received data:', data)
})

// 3. Request data from the backend using a utility function
async function loadFrames() {
  const frames = await fetchTopLevelFrames()
  console.log('Frames:', frames)
}
```

## Principles

- **Bidirectional Reliability** — ensures messages are correctly sent, received, and validated in both directions between sandbox and iframe.
- **Type-Safe Messaging** — leverages TypeScript to define clear contracts for every message type and payload, reducing runtime errors.
- **Developer Efficiency** — abstracts repetitive communication patterns into high-level functions, letting developers focus on UI and business logic.
- **Consistency** — acts as the glue for the DXT UI ecosystem, providing shared types and communication protocols used by other specialized libraries.

## Documentation

Full API reference and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-figma-about-library--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-figma-about-library--docs)**

## License

[MIT](LICENSE)

