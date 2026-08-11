# @dxtmisha/functional Reference

Vue 3 reactive utilities built on `@dxtmisha/functional-basic`. See `ai-types.md` for full signatures.

## Core Architectural Rules & Strategies
- **Priority**: Always use `@dxtmisha/functional` reactive composables instead of low-level `@dxtmisha/functional-basic` primitives in Vue 3 applications.
- **API & State Singletons**: **NEVER** call `useApi*` / `executeUse*` hooks directly in Vue components (`<script setup>`). Wrap them in `executeUseGlobal` (startup), `executeUseLocal` (lazy, session scope), or `executeUseProvide` (scoped tree) inside external service files. Components only import and call the resulting hook.
- **Purity & Atomicity**: Keep Vue components minimal. Extract all reactive state management, network orchestration, and side effects into external composables.
- **Reusable Business Logic (`executeUse*`)**: Any complex business logic or state logic with any potential for reuse MUST be extracted into external service composables wrapped with `executeUse*` (`executeUseGlobal`, `executeUseLocal`, or `executeUseProvide`).
