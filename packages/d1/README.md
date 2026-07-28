# @dxtmisha/d1

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fd1.svg)](https://www.npmjs.com/package/@dxtmisha/d1)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen)](https://nodejs.org/)

`@dxtmisha/d1` is a premium Vue 3 design system component library. Built on top of `@dxtmisha/constructor`, it provides 100+ production-ready UI components, a rich design token system, responsive SCSS mixins, and automatic component registration via Vite plugin.

## Why this library?

Most Vue component libraries either force heavy third-party dependencies, lock developers into rigid uncustomizable styles, or lack proper architectural separation between visual rendering and component business logic.

`@dxtmisha/d1` provides a state-of-the-art UI kit with stunning visual aesthetics, smooth dynamic transitions, dark mode support, and deep design token integration. Because every component inherits from `@dxtmisha/constructor`, the Vue template layer remains exceptionally clean and performant, while accessibility, state management, validation, and keyboard navigation are handled by robust underlying constructor classes.

## What does it do?

For **inputs & form controls** — a comprehensive suite of inputs (`D1Input`, `D1Select`, `D1Checkbox`, `D1Radio`, `D1Switch`, `D1Textarea`, `D1InputPhone`, `D1InputCode`, `D1InputSocial`) featuring floating labels, validation states, character counters, custom masks, and social icon integrations.

For **data tables & grids** — powerful data presentation components (`D1Table`, `D1TableFlex`, `D1Grid`, `D1Pagination`) supporting responsive flex layouts, interactive column sorting, sticky headers, and custom cell slot templates.

For **dialogs & feedback** — rich overlay and feedback elements (`D1Modal`, `D1Dialog`, `D1ActionSheet`, `D1Alert`, `D1Snackbar`, `D1Tooltip`, `D1Progress`, `D1ProgressBar`, `D1Skeleton`) with smooth entrance animations, backdrop blurs, and glassmorphism styling.

For **navigation & menus** — flexible navigation structures (`D1Menu`, `D1List`, `D1Tabs`, `D1Breadcrumbs`, `D1SegmentControl`, `D1MenuButton`, `D1MenuChip`, `D1MenuCountry`, `D1MenuLanguage`) supporting active state tracking, keyboard traps, and country/language selection.

For **layout & containers** — responsive structural components (`D1Page`, `D1PageArea`, `D1Section`, `D1Block`, `D1Group`, `D1Container`, `D1Header`, `D1Window`, `D1Scrollbar`) providing standardized grid gaps, margins, container padding, and sticky scrollbars.

For **styling & design tokens** — curated SCSS design tokens, system palettes (`--sys-palette-*`), responsive media query mixins (`ui.mediaMinWidth`), dark/light theme switching, and global typography helper classes.

For **build tooling** — `uiD1VitePlugin` for Vite, automating component auto-imports, theme variable injection, and style processing without manual boilerplate.

## Installation

```bash
npm install @dxtmisha/d1 @dxtmisha/constructor @dxtmisha/functional
```

## Quick Start

```vue
<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const isLoading = ref(false)

const handleSubmit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
}
</script>

<template>
  <D1Container size="medium">
    <D1Field label="Username">
      <D1Input v-model="username" placeholder="Enter your name" />
    </D1Field>

    <D1Button
      palette="primary"
      :loading="isLoading"
      @click="handleSubmit"
    >
      Save Changes
    </D1Button>
  </D1Container>
</template>
```

## Principles

- **Aesthetic excellence** — modern design system with curated HSL color palettes, glassmorphism, dynamic dark mode, and fluid micro-animations out of the box.
- **Headless constructor foundation** — UI components delegate state, focus management, and ARIA attributes to `@dxtmisha/constructor`, keeping `.vue` components focused purely on template rendering.
- **Design token architecture** — all colors, spacing, typography, and borders are driven by semantic CSS variables (`sys-`), ensuring easy customization and theme switching.
- **Global component auto-import** — seamlessly integrates with Vite via `uiD1VitePlugin`, allowing you to use all `D1...` components globally without manual imports.

## Documentation

Full component library documentation, interactive Storybook, and style guides:

**[📖 https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-ui-about-the-library--docs](https://dxtmisha.github.io/dxt-ui/?path=/docs/dxtmisha-en-ui-about-the-library--docs)**

## Difference from @dxtmisha/constructor

- **`@dxtmisha/constructor`** — headless class-based component constructors, state logic, and accessibility engines.
- **`@dxtmisha/d1`** — the complete Vue 3 UI component library with D1 design system styles, tokens, icons, and Vite plugin integration.

## License

[MIT](LICENSE)
