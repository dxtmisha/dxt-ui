# @dxtmisha/wiki

📚 **Wiki documentation and storybook utilities** for DXT UI design system. Comprehensive toolset for creating component documentation, storybook integration, and design system wiki.

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fwiki.svg)](https://www.npmjs.com/package/@dxtmisha/wiki)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## Installation

```bash
npm install @dxtmisha/wiki
```

## Features

- 📚 **Documentation utilities** for component libraries
- 📖 **Storybook integration** with TypeScript support
- 🎨 **Design system wiki** components and utilities
- 🧩 **Component descriptions** and metadata management
- 📝 **MDX documentation** support
- 📦 **TypeScript** full typing support
- 🎯 **ESM** modern ES modules

## Usage

### Main library

```typescript
import { WikiStorybook } from '@dxtmisha/wiki'

const wiki = new WikiStorybook()
```

### Media utilities

```typescript
import { mediaDescriptions } from '@dxtmisha/wiki/media'
```

### Storybook utilities

```typescript
import { StorybookComponent } from '@dxtmisha/wiki/storybook'
```

### Storybook styles

```scss
@import '@dxtmisha/wiki/storybook/styles';
```

### Vue.js example

```vue
<template>
  <div class="wiki-documentation">
    <StorybookComponent :args="componentArgs" />
  </div>
</template>

<script setup>
import { StorybookComponent } from '@dxtmisha/wiki/storybook'

const componentArgs = {
  name: 'Button',
  description: 'Interactive button component',
  props: ['size', 'variant', 'disabled']
}
</script>
```

## API Reference

### Main library

```typescript
import { 
  WikiStorybook,
  WikiStorybookDescriptions,
  WikiStorybookItem
} from '@dxtmisha/wiki'
```

### Media utilities

```typescript
import {
  mediaDescriptions,
  mediaProps,
  mediaMdx
} from '@dxtmisha/wiki/media'
```

### Storybook integration

```typescript
import { StorybookComponent } from '@dxtmisha/wiki/storybook'
```

### Type definitions

```typescript
import type {
  StorybookArgs,
  StorybookControl,
  StorybookCategory,
  StorybookComponentsDescription
} from '@dxtmisha/wiki/types/storybookTypes'
```

## Examples

### Component documentation

```typescript
import { WikiStorybookDescriptions } from '@dxtmisha/wiki'

const descriptions = new WikiStorybookDescriptions()
descriptions.add({
  name: 'Button',
  description: 'Interactive button component',
  possibilities: ['Primary action', 'Secondary action', 'Disabled state'],
  stories: [{
    id: 'ButtonDefault',
    name: 'Default Button',
    template: '<Button>Click me</Button>'
  }]
})
```

### Storybook controls

```typescript
import { StorybookControl, StorybookCategory } from '@dxtmisha/wiki/types/storybookTypes'

const buttonArgs = {
  size: {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md'
    }
  },
  disabled: {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.status,
      defaultValue: false
    }
  }
}
```

## License

MIT © [dxtmisha@gmail.com](mailto:dxtmisha@gmail.com)
