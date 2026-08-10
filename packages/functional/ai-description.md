# @dxtmisha/functional Reference

A reactive utility and component architecture library for Vue 3 providing high-level abstract base classes, state management composables, and localized formatting helpers.

## Key Capabilities & Groupings
- **API & Network**: Reactive composables for asynchronous HTTP requests, mutation workflows, SSR prefetching, response contract validation, error mappings, and list orchestration.
- **Storage & State**: Persistent storage composables synchronizing state with cookies, web storage, URL query/hash parameters, and cross-tab messaging.
- **Localization & Formatting**: Utilities for reactive handling of dates, numbers, currency, unit conversions, country flags, and dynamic translations.
- **List & Search**: Helpers for managing reactive data filtering, selection state, text highlighting, debouncing, and router-bound navigation lists.
- **DOM & System**: DOM visibility tracking, reactive page metadata management, global loading states, scrollbar measurements, and singleton dependency injection.
- **Design Components**: Abstract base classes for standardized component rendering, dynamic class/style computation, prop tracking, and element exposure.

## Triggers for Studying `ai-types.md`
Study `ai-types.md` when implementing abstract component constructors, defining API validation contracts or error schemas, typing complex list structures and search options, configuring singleton execution scopes, or managing reactive Vue prop and subcomponent bindings.

## Integration Context
This library integrates natively into Vue 3 and Vue Router applications through a unified global plugin that configures shared API, routing, localization, and metadata services.

## Mandatory Rules
Read the corresponding file ONLY when working on a task related to (even if not working directly with this package):
- 'node_modules/@dxtmisha/functional/ai-resources/api-reference.md': Reactive singleton scope initialization and REST API management patterns
- 'node_modules/@dxtmisha/functional/ai-resources/localization-seo.md': Geographic context, locale-aware formatting, reactive translations, document metadata, and scrollbar width measurement
- 'node_modules/@dxtmisha/functional/ai-resources/reactivity-lists.md': Async reactivity composables, reactive list models, search filtering, and DOM observer utilities
- 'node_modules/@dxtmisha/functional/ai-resources/storage-state.md': Reactive composables for browser storage, cookies, cross-tab synchronization, and URL hash state
