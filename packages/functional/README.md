# @dxtmisha/functional

[![npm version](https://badge.fury.io/js/@dxtmisha%2Ffunctional.svg)](https://www.npmjs.com/package/@dxtmisha/functional)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/functional` is a library of utilities, base classes, and composables for complex web development in Vue 3. The package operates on the foundation of `@dxtmisha/functional-basic`, providing reactive wrappers, state singletons, and architectural solutions designed specifically for the Vue ecosystem (Composition API).

## Why this library?

Every modern frontend application inevitably faces the same set of challenges: managing HTTP requests, state synchronization, localization, dates, cookies, caching, loading states, and side effects. 

When developers solve these tasks locally within components, it often leads to code duplication, bloated `.vue` files, memory leaks from forgotten subscriptions, and difficult-to-maintain state. `functional` solves this by moving business logic into ready-made reactive abstractions and state singletons (`executeUse`). You simply call the necessary composable or class, and under the hood, the library manages `ref` dependencies, monitors the Vue lifecycle, handles SSR hydration, and maintains strict TypeScript typing.

## What does it do?

For **network requests (API)** — a set of reactive composables (`useApiRef`, `useApiManagementRef`, `useApiGet`, `useApiPost`, `useApiPut`, `useApiDelete`) that encapsulate server interactions. They return a fully reactive object with loading states, errors, client-side search, schema validation, and fetched data. They intelligently handle response caching, SSR hydration, headers, and automatic cancellation of outdated requests.

For **state management & singletons (`executeUse`)** — `executeUseLocal`, `executeUseGlobal`, and `executeUseProvide` factories that allow creating managed singleton state hooks. This decouples complex API and business logic completely from `.vue` components, ensuring unified state across component trees and preventing duplicate requests.

For **browser state management** — convenient reactive hooks (`useStorageRef`, `useSessionRef`, `useCookieRef`, `useHashRef`, `useQueryRef`, `useBroadcastValueRef`) that seamlessly bind Vue variables to LocalStorage, SessionStorage, cookies, URL hash/query parameters, or BroadcastChannels with automatic cross-tab synchronization.

For **geolocation and internationalization** — utilities like `useTranslateRef` (`t`), `useGeoIntlRef`, `useGeoUnitRef`, `GeoFlagRef`, and `DatetimeRef` that automatically respond to changes in global environment settings (language, currency, region) and dynamically rebuild dates, numbers, units, and translations without manual event listeners.

For **UI component architecture** — a powerful system of base classes (`DesignConstructorAbstract`, `DesignComponents`, `DesignComp`, `DesignAbstract`, `DesignAsyncAbstract`) that provides a structured class-based inheritance model for building complex UI component constructors with automatic lifecycle, slot rendering, and BEM styling.

For **auxiliary utilities** — specialized reactive modules for SEO meta tags (`useMeta`), reactive scrollbar tracking (`ScrollbarWidthRef`), IntersectionObserver lazy loading (`useLazyRef`), list selection management (`ListDataRef`), debounced list search (`useSearchRef`), and asynchronous computation primitives (`computedAsync`, `computedEternity`).

## Installation

```bash
npm install @dxtmisha/functional
```

## Quick Start

```typescript
import { ref } from 'vue'
import {
  executeUseGlobal,
  useApiManagementRef,
  useStorageRef,
  useGeoIntlRef,
  t
} from '@dxtmisha/functional'

// 1. Decoupled API & state singleton service
export const useUserManagement = executeUseGlobal(() => {
  return useApiManagementRef(
    { path: '/api/users' },                       // GET list endpoint
    { date: (v) => new Date(v).toLocaleString() }, // Formatters
    { columns: ['name', 'email'] }                // Search columns
  )
})

// 2. Component usage (Composition API)
export default {
  setup() {
    // Reactive storage with cross-tab auto-sync
    const theme = useStorageRef<'light' | 'dark'>('theme', 'dark')

    // Reactive locale-aware formatting
    const intl = useGeoIntlRef()
    const formattedPrice = intl.currency(150, 'EUR')

    // Reactive translations
    const labels = t(['global.save', 'global.cancel'])

    // Shared state singleton hook
    const users = useUserManagement()

    return { theme, intl, formattedPrice, labels, users }
  }
}
```

## Principles

- **Full Composition API integration** — every utility is designed with Vue 3's reactivity system in mind, heavily utilizing `ref`, `computed`, and lifecycle hooks.
- **Separation of concerns** — ideologically encourages extracting validation, state management, and side-effects into specialized classes and `executeUse` singletons, maintaining "thin" components.
- **Type safety** — provides 100% TypeScript type coverage between APIs, storages, and the UI, protecting codebase scaling with smart type inference.
- **Predictable resource management** — safely manages subscriptions and frees memory. When a component is unmounted, associated tasks and watchers are cleanly terminated.

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-functional-about-library--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-functional-about-library--docs)**

## Difference from @dxtmisha/functional-basic

- **`@dxtmisha/functional-basic`** — core utilities, no framework dependencies. Use this with vanilla JS, React, or any non-Vue stack, or when building a library.
- **`@dxtmisha/functional`** — extends `functional-basic` with Vue 3 composables, reactive wrappers, state singletons, and component design constructors. Use this when building complex Vue / Nuxt applications.

## License

[MIT](LICENSE)
