# @dxtmisha/wiki

📚 **Wiki documentation and storybook utilities** for DXT UI design system. Comprehensive toolset for creating component documentation, storybook integration, and design system wiki.

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fwiki.svg)](https://www.npmjs.com/package/@dxtmisha/wiki)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## 🚀 Installation

```bash
npm install @dxtmisha/wiki
```

## ✨ Features

- 📚 **Documentation utilities** for component libraries
- 📖 **Storybook integration** with TypeScript support
- 🎨 **Design system wiki** components and utilities
- 🧩 **Component descriptions** and metadata management
- 📝 **MDX documentation** support
- ⚡ **Tree-shaking** support for optimization
- 📦 **TypeScript** full typing support
- 🎯 **ESM** modern ES modules

## 📖 Quick Start

### Import main library

```typescript
import { WikiStorybook } from '@dxtmisha/wiki'

const wiki = new WikiStorybook()
```

### Import media utilities

```typescript
import { mediaDescriptions } from '@dxtmisha/wiki/media'
```

### Import storybook utilities

```typescript
import { StorybookComponent } from '@dxtmisha/wiki/storybook'
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

<style>
@import '@dxtmisha/wiki/storybook/styles';
</style>
```

## 📚 API

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

// Storybook styles
import '@dxtmisha/wiki/storybook/styles'
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

## 🛠️ Practical examples

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

### Media descriptions

```typescript
import { mediaDescriptions } from '@dxtmisha/wiki/media'

// Access component descriptions
const buttonDescription = mediaDescriptions.button
const iconDescription = mediaDescriptions.icon
```

## 📊 Bundle sizes

| Export | Size | Description |
|--------|------|-------------|
| **Main library** | ~25KB | Core wiki utilities |
| **Media utilities** | ~15KB | Component descriptions and props |
| **Storybook integration** | ~10KB | Storybook components and utilities |
| **Storybook styles** | ~8KB | CSS styles for storybook |

## 🔧 Requirements

- **Node.js**: ≥18.0.0
- **ESM support**: Vite, Webpack 5, Rollup
- **TypeScript**: 4.0+ (optional)
- **Vue.js**: 3.0+ (for storybook components)

## 📁 Export structure

```
@dxtmisha/wiki
├── /                    # Main wiki utilities
├── /media              # Component descriptions and media
├── /storybook          # Storybook integration
├── /storybook/styles   # CSS styles
├── /types/*            # TypeScript types
└── /types/**/*.d.ts    # Subtypes
```

## 🤝 Compatibility

| Technology | Support |
|------------|---------|
| **Vite** | ✅ Full support |
| **Webpack** | ✅ Full support |
| **Storybook** | ✅ Recommended |
| **Vue.js** | ✅ Recommended |
| **React** | ✅ Compatible |
| **TypeScript** | ✅ Full support |

## 🌐 Browser Support

Modern browsers that support:
- ES modules
- CSS custom properties
- JavaScript ES2020+

## 📄 License

MIT © [dxtmisha@gmail.com](mailto:dxtmisha@gmail.com)

## 🔗 Links

- [📦 NPM Package](https://www.npmjs.com/package/@dxtmisha/wiki)
- [🏠 Homepage](https://github.com/dxtmisha/dxt-ui/tree/main/packages/wiki)
- [🐛 Issues](https://github.com/dxtmisha/dxt-ui/issues)
- [📚 Repository](https://github.com/dxtmisha/dxt-ui)
