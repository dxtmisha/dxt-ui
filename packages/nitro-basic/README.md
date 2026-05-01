# @dxtmisha/nitro-basic

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fnitro-basic.svg)](https://www.npmjs.com/package/@dxtmisha/nitro-basic)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/nitro-basic` is a foundational utility library for building robust Server-Side Rendering (SSR) applications using [Nitro](https://nitro.unjs.io) and Vue 3. It bridges the gap between raw server tools and frontend frameworks by providing a unified, predictable way to bootstrap and handle applications on both the client and the server.

## Why this library?

Building a custom SSR setup with Vue 3 and Nitro often involves repetitive boilerplate: configuring the router for server and client seamlessly, managing hydration, parsing initial payloads, syncing cookies, and setting up API request headers.

`nitro-basic` extracts this complexity into simple abstractions and utility functions. By standardizing the initialization flow, it ensures your SSR app is reliable, scalable, and fully typed out of the box, letting you focus entirely on your business logic and application components.

## What does it do?

For **Bootstrapping** — providing `uiBootstrapClient`, `uiBootstrapServer`, `uiCreateClientApp`, and `uiCreateServerApp`. A unified entry point system ensures that both your client bundle and your server handler initialize Vue, vue-router, and required plugins safely and correctly without state leakage.

For **Routing** — built-in `uiCreateSsrRouter` that automatically toggles between `createMemoryHistory` (on the server) and `createWebHistory` (on the client).

For **Storage & Cookies** — `uiCookieStorage` and `uiServerStorage` encapsulate H3 events (during SSR) and document cookies (on the client). They synchronize the state cleanly so that preferences or authentication tokens can be easily transported between the Nitro context and the client context.

For **API Integration** — lifecycle hooks and connection helpers (`initApi`, `initHeaders`, `getRequestUrl`) that automatically inject correct hostnames and pass essential headers to the API client during SSR requests, preventing common pitfalls with missing origin headers when rendering server-side.

## Installation

```bash
npm install @dxtmisha/nitro-basic
```

## Quick Start

Create a single app initialization module:

```typescript
// main.ts
import { uiCreateApp } from '@dxtmisha/nitro-basic'
import App from './App.vue'
import { routes } from './router'

export function createApp() {
  return uiCreateApp(App, {
    appRouter: { routes }
  })
}
```

**Client Entry:**

```typescript
// entry-client.ts
import { uiBootstrapClient, uiCreateClientApp } from '@dxtmisha/nitro-basic'
import { createApp } from './main'

const { app, router, options } = createApp()

uiBootstrapClient()
uiCreateClientApp(
  app,
  '#app',
  router,
  options
)
```

**Server/Nitro Entry (EventHandler or generic fetch):**

```typescript
// entry-server.ts
import { uiBootstrapServer, uiCreateServerApp } from '@dxtmisha/nitro-basic'
import { createApp } from './main'
import template from './templates/main.html?raw'

uiBootstrapServer()

export default {
  async fetch(request: Request) {
    const { app, router, options } = createApp()

    const {
      headers,
      body
    } = await uiCreateServerApp(
      app,
      request,
      router,
      options,
      undefined,
      undefined,
      template
    )

    return new Response(body, {
      headers
    })
  }
}
```

## Principles

- **Zero-leaks Architecture** — Designed strictly to avoid cross-request state pollution during SSR. Everything is scoped safely within per-request bootstrapping.
- **Framework-Agnostic Core with Vue 3 Focus** — While highly optimized for Vue SSR and Vue Router, the logic of request handling, cache headers, and storage initialization uses native primitives that are predictable.
- **Typescript-First** — Strict typings support and predictable payload passing.
- **Clean API** — A small API surface that prevents over-engineering SSR apps, focusing on the core integration between H3/Nitro and Vue.

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-nitro-basic-about-the-library--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-nitro-basic-about-the-library--docs)**

## License

[MIT](LICENSE)

