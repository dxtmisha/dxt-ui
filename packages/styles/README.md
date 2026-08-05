# @dxtmisha/styles

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fstyles.svg)](https://www.npmjs.com/package/@dxtmisha/styles)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/styles` is a foundational SCSS framework and dynamic style generation engine for the DXT UI design system. It provides a comprehensive collection of low-level SCSS mixins, functions, design tokens, and dynamic CSS variable generation utilities.

## Why this library?

Maintaining consistent styling, themes, and dynamic CSS variables across a monorepo or large design system often leads to scattered style definitions, duplicated mixins, and unmanageable CSS classes.

`styles` unifies the design system's visual language in a single place — offering robust color systems, responsive typography, flexbox orchestration, and themeable CSS custom properties that scale seamlessly across web applications.

## What does it do?

For **color management & palette mixins** — dynamic color variables (`--sys-*`), decoupling RGB channels and opacity for real-time reactive theme changes and transparency effects.

For **responsive typography** — SCSS typography mixins and responsive font classes for uniform text rendering across device viewports.

For **layout & spacing** — flexbox orchestration helpers, adaptive padding/margin utilities, and container layout mixins.

For **responsive design** — media query helpers (`mediaMinWidth`) for clean, declarative responsive styling.

For **design system properties** — dynamic CSS custom properties transformation through `@dxtmisha/styles/properties`.

## Installation

```bash
npm install @dxtmisha/styles
```

## Quick Start

```scss
// Import all SCSS mixins and utilities
@import '@dxtmisha/styles';

.card {
  @include backgroundAsColor;
  @include radius;
  @include padding(md);
}

.title {
  @include font(titleLarge);
  @include color(primary);
}
```

## Principles

- **Zero external dependencies** — built entirely with native SCSS functions and mixins.
- **CSS variable first** — dynamic design tokens with decoupled opacity for effortless theme customization.
- **Modular architecture** — import the full utilities bundle or lightweight property maps (`@dxtmisha/styles/properties`).
- **Consistent visual language** — serves as the visual source of truth across all DXT UI packages.

## Documentation

Full API reference, examples, and guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-styles-project-setup--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-styles-project-setup--docs)**


## License

[MIT](LICENSE)

