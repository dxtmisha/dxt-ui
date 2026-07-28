# @dxtmisha/constructor

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fconstructor.svg)](https://www.npmjs.com/package/@dxtmisha/constructor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/constructor` is a library of class-based UI component constructors and logical controllers for Vue 3 and TypeScript. It serves as the foundational architectural engine for building robust, scalable design systems, encapsulating component lifecycles, ARIA accessibility, state management, form validation, and BEM styling contracts into reusable constructor classes.

## Why this library?

Building an enterprise-grade design system in Vue 3 requires more than basic `.vue` templates. As components grow in complexity, mixing DOM markup with business logic, ARIA accessibility attributes, keyboard navigation, dynamic styling, and complex state management leads to massive code duplication and fragile codebases.

`@dxtmisha/constructor` solves this by decoupling component architecture into pure, class-based logical constructors. Instead of rewriting accessibility, focus handling, dynamic classes, and state management in every component, you inherit or compose ready-made constructor classes (such as `Button`, `Field`, `Table`, `Modal`, `List`). This guarantees architectural consistency, zero logic duplication, and seamless extensibility across your entire component library.

## What does it do?

For **form controls & fields** — granular constructors like `Field`, `Input`, `FieldValidationInclude`, `FieldValueInclude`, `FieldCounter`, `FieldLabel`, `FieldMessage`, `Mask`, and `Select` that manage complex input interactions, native pattern validation, dynamic masks, character counting, and floating labels.

For **tables & data display** — advanced constructors (`Table`, `TableFlex`, `TableColumns`, `TableSort`, `TableRecordInclude`) that coordinate column indexing, header/footer rendering, interactive sorting, client-side pagination, and sticky headers in both native `<table>` and `<div>`-based flex table layouts.

For **overlays & dialogs** — robust controllers (`Modal`, `Dialog`, `ActionSheet`, `Window`) that handle backdrop masks, ESC key listening, focus trap containment, scroll locking, and smooth entrance/exit transitions.

For **navigation & selection** — structured constructors (`List`, `ListItem`, `ListGroup`, `Menu`, `MenuButton`, `MenuChip`, `Breadcrumbs`, `Tabs`, `SegmentControl`) providing keyboard navigation, active item selection, and hierarchical list rendering.

For **accessibility (ARIA)** — built-in ARIA inclusion utilities (`AriaStaticInclude`, `FocusDirectionInclude`, `TabIndexInclude`) that automatically generate compliant roles, live regions, expand/collapse states, and directional keyboard traps.

For **UI styling & BEM contracts** — decoupled CSS modifier generators that calculate BEM-compliant class maps, dynamic inline style properties, and design token integration.

## Installation

```bash
npm install @dxtmisha/constructor
```

## Quick Start

```typescript
import { Button, type ButtonProps } from '@dxtmisha/constructor/Button'

// 1. Define type-safe component properties
const props: ButtonProps = {
  label: 'Click Me',
  palette: 'primary',
  size: 'medium',
  disabled: false
}

// 2. Instantiate logical constructor in setup or composable
// The constructor manages state, ARIA attributes, event handlers, and BEM classes
const button = new Button(props, refs, element, 'd1', 'd1-button')

console.log(button.classes) // BEM class object
console.log(button.binds)   // Type-safe HTML & ARIA attributes
```

## Principles

- **Class-based separation of concerns** — business logic, state, and accessibility are completely decoupled from template markup into clean TypeScript classes.
- **Dependency injection & extensibility** — constructors accept custom sub-constructor overrides, allowing effortless customization of child components and nested logic.
- **Strict type safety** — 100% TypeScript coverage for props, emits, slots, exposes, and internal state contracts.
- **Full ARIA compliance** — accessible roles, live regions, keyboard traps, and dynamic ARIA attributes are managed automatically out of the box.

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-ui-about-the-library--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-ui-about-the-library--docs)**

## Difference from @dxtmisha/d1

- **`@dxtmisha/constructor`** — headless class-based component constructors, state logic, and accessibility engines. Use this to build your own custom Vue 3 design system or extend component logic.
- **`@dxtmisha/d1`** — the complete, ready-to-use Vue 3 component library built on top of `@dxtmisha/constructor` with pre-styled D1 design system components, SCSS tokens, and Vite plugin integration.

## License

[MIT](LICENSE)
