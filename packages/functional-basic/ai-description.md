# Package Overview & Rules (@dxtmisha/functional-basic)

## Core Purpose
This library provides an isomorphic suite of client- and server-side utilities designed for web application infrastructure, state management, internationalization, and network communication. It serves as a unified foundation for API lifecycle management, SSR hydration, browser storage, and data transformation across JavaScript runtimes.

## Key Capabilities & Groupings
- **API & Network**: Streamlines HTTP fetch requests with configurable defaults, automatic retries with jitter, response caching, error classification, and SSR client hydration script generation.
- **Storage & State Management**: Supplies request-isolated SSR storage contexts, type-safe cookie management, synchronized URL query and hash state, local and session storage with age-based expiration, and cross-tab broadcast messaging.
- **Localization & Geographic Tools**: Provides automated country and language detection, phone number mask matching, metric-to-imperial unit conversion, pluralization, currency formatting, and asynchronous multi-language translation resolution.
- **Search & Data Handling**: Enables multi-column list searching, search match highlighting, fuzzy and exact regular expression matching, multi-field array sorting, and recursive object template replacement.
- **UI, DOM, & Event Helpers**: Delivers DOM element manipulation, ResizeObserver and scroll-sync event listeners, global loading indicators, icon registration, resumable timers, and isomorphic HTML meta tag management for standard SEO, Open Graph, and Twitter Cards.

## Triggers for Studying `ai-types.md`
Studying type definitions in `ai-types.md` is mandatory when typing complex API request or response structures, configuring custom request wrappers, defining criteria for error storage items, specifying search column paths, setting up custom translation dictionaries, or implementing isolated server storage contexts during SSR.

## Integration Context
This package connects with modern web frameworks and SSR environments by wrapping standard Web APIs, fetch interfaces, and DOM listeners with environment-agnostic abstractions and automated client-side hydration hooks.

## Mandatory Rules
Read the corresponding file ONLY when working on a task related to (even if not working directly with this package):
- 'node_modules/@dxtmisha/functional-basic/ai-resources/api-reference.md': HTTP client caching, storage management, geolocation localization, and DOM utility helpers
