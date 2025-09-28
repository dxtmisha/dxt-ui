# @dxtmisha/constructor

🛠️ **Vue component constructors** for DXT UI design system - ready-to-use constructors with TypeScript support and SCSS styling.

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fconstructor.svg)](https://www.npmjs.com/package/@dxtmisha/constructor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## 🚀 Installation

```bash
npm install @dxtmisha/constructor
```

> **Note:** TypeScript sources are shipped directly. No build step required - use as-is in your Vue projects.

## ✨ Features

- 🏗️ **Ready-to-use constructors** - complete Vue component implementations
- 🎯 **TypeScript first** - full type safety and intellisense support
- 🔧 **SCSS styling** - modular styles for each constructor
- 📝 **Comprehensive props** - extensive property interfaces for customization
- ⚡ **Vue 3 optimized** - built for modern Vue development
- 🎨 **Design system ready** - consistent API across all constructors
- 📦 **TypeScript source** - direct source distribution

## 📖 Quick Start

### Basic Usage

```typescript
import { Button, type ButtonProps } from '@dxtmisha/constructor/Button'
import '@dxtmisha/constructor/Button/style'

// Button props with full TypeScript support
const buttonProps: ButtonProps = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false
}
```

### Available Constructors

```typescript
// UI Components
import { Badge } from '@dxtmisha/constructor/Badge'
import { Button } from '@dxtmisha/constructor/Button'
import { Chip } from '@dxtmisha/constructor/Chip'
import { Icon } from '@dxtmisha/constructor/Icon'
import { Image } from '@dxtmisha/constructor/Image'
import { Progress } from '@dxtmisha/constructor/Progress'
import { Skeleton } from '@dxtmisha/constructor/Skeleton'

// Form Components  
import { Field } from '@dxtmisha/constructor/Field'
import { FieldLabel } from '@dxtmisha/constructor/FieldLabel'
import { FieldMessage } from '@dxtmisha/constructor/FieldMessage'
import { FieldCounter } from '@dxtmisha/constructor/FieldCounter'
import { Mask } from '@dxtmisha/constructor/Mask'

// Layout Components
import { Cell } from '@dxtmisha/constructor/Cell'
import { List } from '@dxtmisha/constructor/List'
import { ListItem } from '@dxtmisha/constructor/ListItem'
import { ListGroup } from '@dxtmisha/constructor/ListGroup'
import { Menu } from '@dxtmisha/constructor/Menu'
import { Window } from '@dxtmisha/constructor/Window'

// Interactive Components
import { Bars } from '@dxtmisha/constructor/Bars'
import { Ripple } from '@dxtmisha/constructor/Ripple'
import { Scrollbar } from '@dxtmisha/constructor/Scrollbar'
import { MotionTransform } from '@dxtmisha/constructor/MotionTransform'
```

## 📚 Available constructors

### 🔧 Type System

```typescript
// Comprehensive type definitions
import type {
  // Base types
  CaptionProps, DescriptionProps, EnabledProps,
  ModelProps, PrefixProps, SuffixProps,
  
  // Event types  
  EventClickProps, EventClickEmits, EventClickValue,
  
  // Field types
  FieldProps, FieldEmits, FieldSlots,
  
  // Component-specific types
  ButtonProps, ListProps, WindowProps
} from '@dxtmisha/constructor'

// Type-safe component props
interface MyComponentProps extends ButtonProps, CaptionProps {
  customProp?: string
}
```

## 🎯 Constructor Categories

| Category | Components | Purpose |
|----------|------------|---------|
| **Form** | `Field`, `FieldLabel`, `FieldMessage`, `FieldCounter`, `Mask` | Input handling and validation |
| **Navigation** | `List`, `ListItem`, `ListGroup`, `Menu` | Navigation and selection |
| **Feedback** | `Badge`, `Chip`, `Progress`, `Skeleton` | Status and loading states |
| **Layout** | `Cell`, `Window`, `Scrollbar` | Structure and containers |
| **Interactive** | `Button`, `Ripple`, `MotionTransform`, `Bars` | User interactions |
| **Media** | `Icon`, `Image` | Visual content display |

## 📦 Requirements

**Core Dependencies:**
- Node.js ≥18.0.0
- Vue ≥3.0.0

**Peer Dependencies:**
- `@dxtmisha/functional` ≥1.0.3 - utility functions and classes
- `vue` ≥3.0.0 - Vue framework

## 📄 License

MIT © [dxtmisha](https://github.com/dxtmisha)

## 🐛 Report an issue

[GitHub Issues](https://github.com/dxtmisha/dxt-ui/issues)

---

⭐ **Give us a star** if these constructors helped build your UI faster!
