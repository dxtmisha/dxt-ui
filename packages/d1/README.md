# @dxtmisha/d1

🎨 **DXT-UI component library** for Vue 3 - premium components built with the D1 design system and based on solid constructor architecture.

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fd1.svg)](https://www.npmjs.com/package/@dxtmisha/d1)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## 🚀 Installation

```bash
npm install @dxtmisha/d1
```

> **Note:** This package requires `@dxtmisha/constructor`, `@dxtmisha/functional`, and other peer dependencies to be present in your project.

## ✨ Features

- 🎨 **D1 Design System** - consistent premium aesthetics and state-of-the-art design
- 🏗️ **Built on Constructors** - uses `@dxtmisha/constructor` for a robust and flexible architectural foundation
- 🎯 **TypeScript first** - full type safety and excellent IDE support (Intellisense)
- 🔧 **Highly customizable** - easily tweakable via design tokens and comprehensive component properties
- ⚡ **Vue 3 optimized** - leveraging the latest Vue 3 features and Composition API
- 📦 **Ready to use** - high-quality, production-ready components that you can drop into any app
- 🌍 **SSR Ready** - components designed with server-side rendering and hydration in mind

## 📖 Quick Start

### Basic Usage

```vue
<script setup>
import { D1Button } from '@dxtmisha/d1/D1Button'
import '@dxtmisha/d1/style.css'
</script>

<template>
  <D1Button variant="primary">
    Click Me
  </D1Button>
</template>
```

### Available Components

```typescript
// UI Components
import { D1Badge } from '@dxtmisha/d1/D1Badge'
import { D1Button } from '@dxtmisha/d1/D1Button'
import { D1Chip } from '@dxtmisha/d1/D1Chip'
import { D1Icon } from '@dxtmisha/d1/D1Icon'
import { D1Image } from '@dxtmisha/d1/D1Image'
import { D1Progress } from '@dxtmisha/d1/D1Progress'
import { D1Skeleton } from '@dxtmisha/d1/D1Skeleton'

// Form Components  
import { D1Field } from '@dxtmisha/d1/D1Field'
import { D1Input } from '@dxtmisha/d1/D1Input'
import { D1Checkbox } from '@dxtmisha/d1/D1Checkbox'
import { D1Select } from '@dxtmisha/d1/D1Select'
import { D1Textarea } from '@dxtmisha/d1/D1Textarea'

// Layout & Navigation
import { D1Page } from '@dxtmisha/d1/D1Page'
import { D1Section } from '@dxtmisha/d1/D1Section'
import { D1List } from '@dxtmisha/d1/D1List'
import { D1Menu } from '@dxtmisha/d1/D1Menu'
import { D1Window } from '@dxtmisha/d1/D1Window'
```

## 🎯 Component Categories

| Category | Components | Purpose |
|----------|------------|---------|
| **Form** | `D1Field`, `D1Input`, `D1Checkbox`, `D1Select`, `D1Mask`, `D1Textarea` | User input handling and data validation |
| **Navigation** | `D1List`, `D1Menu`, `D1Tabs`, `D1TabsNavigation`, `D1Anchor` | Site navigation, selection and routing |
| **Feedback** | `D1Badge`, `D1Chip`, `D1Progress`, `D1Skeleton`, `D1Snackbar`, `D1Tooltip` | User feedback, status and loading states |
| **Layout** | `D1Page`, `D1Section`, `D1Block`, `D1Group`, `D1Container`, `D1PageArea`, `D1Area`, `D1Header` | Page structure and layout organization |
| **Interactive** | `D1Button`, `D1Ripple`, `D1Dialog`, `D1Modal`, `D1Accordion`, `D1ActionSheet`, `D1Actions` | Rich user interactions and overlays |
| **Media** | `D1Icon`, `D1Image` | Visual assets and media content display |

## 📦 Requirements

**Core Dependencies:**
- Node.js ≥18.0.0
- Vue ≥3.0.0

**Peer Dependencies:**
- `@dxtmisha/constructor` - core component constructors
- `@dxtmisha/functional` - utility functions and classes
- `@dxtmisha/styles` - base design system styles

## 📄 License

MIT © [dxtmisha](https://github.com/dxtmisha)

## 🐛 Report an issue

[GitHub Issues](https://github.com/dxtmisha/dxt-ui/issues)

---

⭐ **Give us a star** if these components helped build your UI faster!
