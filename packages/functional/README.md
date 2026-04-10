# @dxtmisha/functional

[![npm version](https://badge.fury.io/js/@dxtmisha%2Ffunctional.svg)](https://www.npmjs.com/package/@dxtmisha/functional)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/functional` is a library of utilities, base classes, and composables for complex web development in Vue 3. The package operates on the foundation of `@dxtmisha/functional-basic`, providing reactive wrappers and architectural solutions designed specifically for the Vue ecosystem (Composition API).

## Why this library?

Every modern frontend application inevitably faces the same set of challenges: managing HTTP requests, localization, dates, cookies, caching, loading states, and side effects. 

When developers solve these tasks locally within components, it often leads to code duplication, bloated `.vue` files, and memory leaks from forgotten subscriptions. `functional` solves this by moving business logic into ready-made reactive abstractions. You simply call the necessary composable or class, and under the hood, the library manages `ref` dependencies, monitors the Vue lifecycle, and maintains strict TypeScript typing.

## What does it do?

For **network requests (API)** — a set of composables (`useApiGet`, `useApiPost`, `useApiRequest`, etc.) that encapsulate server interactions. They return a fully reactive object with loading states, errors, and fetched data. They intelligently handle response caching, headers, and automatic cancellation of outdated requests.

For **browser state management** — convenient reactive hooks (`useStorageRef`, `useSessionRef`, `useCookieRef`, `useHashRef`) that seamlessly bind a Vue variable to LocalStorage, URL hash, or a cookie. It automatically synchronizes with browser storage and reacts across tabs.

For **geolocation and internationalization** — utilities like `useTranslateRef`, `useGeoIntlRef`, and `DatetimeRef` that automatically respond strictly to changes in global environment settings (language, currency, region) and dynamically rebuild forms, dates, and translations without custom event listeners.

For **UI component architecture** — a powerful system of base classes (`DesignAbstract`, `DesignComp`, `DesignAsyncAbstract`) that allows extracting complex internal component logic into separate, testable files. This makes `.vue` templates beautifully clean and business features highly reusable.

For **auxiliary utilities** — specialized reactive modules for SEO tags (`useMeta`), inter-tab real-time communication (`useBroadcastValueRef`), robust loading indicators (`useLoadingRef`), and executing asynchronous operations cleanly in the Vue render cycle (`computedAsync`, `toComputed`).

## Installation

```bash
npm install @dxtmisha/functional
```

## Quick Start

```typescript
import { useGeoIntlRef, useStorageRef, useApiRef } from '@dxtmisha/functional'

export default {
  setup() {
    // Reactive geolocation and formatting
    const { country, language, intl } = useGeoIntlRef()

    // Reactive localStorage with auto-sync across tabs
    const { value: settings, set: setSettings } = useStorageRef('app-settings', {
      theme: 'dark'
    })

    // Reactive API requests with caching and loading states
    const { data, loading, error, reload } = useApiRef('/api/users')

    return { intl, settings, setSettings, data, loading }
  }
}
```

## Principles

- **Full Composition API integration** — every utility is designed with Vue 3's reactivity system in mind, heavily utilizing `ref`, `computed`, and lifecycle hooks.
- **Separation of concerns** — ideologically encourages extracting validation, state management, and side-effects into specialized classes, maintaining "thin" components.
- **Type safety** — provides 100% TypeScript type coverage between APIs, storages, and the UI, protecting codebase scaling with smart type inference.
- **Predictable resource management** — safely manages subscriptions and frees memory. When a component is unmounted, associated tasks and watchers are cleanly terminated.

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-functional-about-library--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-functional-about-library--docs)**

## Difference from @dxtmisha/functional-basic

- **`@dxtmisha/functional-basic`** — core utilities, no framework dependencies. Use this with vanilla JS, React, or any non-Vue stack, or when building a library.
- **`@dxtmisha/functional`** — extends `functional-basic` with Vue 3 composables and reactive wrappers. Use this when building complex Vue / Nuxt applications.

## License

[MIT](LICENSE)
