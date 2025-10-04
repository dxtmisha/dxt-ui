# @dxtmisha/wiki

> Storybook documentation toolkit and component metadata system for DXT UI design system

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fwiki.svg)](https://www.npmjs.com/package/@dxtmisha/wiki)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

A comprehensive documentation toolkit for the DXT UI ecosystem, providing structured metadata builders, Storybook integration components, MDX content, and utilities to standardize component documentation across your design system. Ships raw TypeScript source for maximum flexibility and transparency.

## 📦 Installation

```bash
npm install @dxtmisha/wiki
```

```bash
yarn add @dxtmisha/wiki
```

```bash
pnpm add @dxtmisha/wiki
```

## ✨ Features

- 📚 **Structured Metadata System** — Classes for managing component descriptions, states, and stories
- 📖 **Storybook Integration** — Pre-built React components for documentation layout
- 🎯 **Strong Typing** — Full TypeScript support with enums and typed schemas
- 🔧 **Argument Builders** — Declarative API for Storybook controls and arguments
- 🌍 **Multilingual Support** — Built-in i18n for component descriptions (en/ru)
- 📝 **MDX Ready** — Pre-configured MDX content for common UI patterns
- 🎨 **Component Categories** — Organized by Status, Values, Styles, Technical, Hooks
- 📦 **Media Assets** — Centralized export of demo images and resources
- 🔌 **Granular Imports** — Multiple entry points for optimal tree-shaking
- 🏗️ **Hybrid Ecosystem** — Designed for Vue components with React-based Storybook
- ⚡ **Source Distribution** — Ships raw TypeScript for maximum compilation flexibility
- 🎯 **Zero Runtime Dependencies** — Only peer dependencies for Storybook integration

## 🚀 Quick Start

### Basic Setup

```typescript
import { WikiStorybook } from '@dxtmisha/wiki'
import { wiki } from '@dxtmisha/wiki/media'

// Define component metadata
const buttonWiki = new WikiStorybook(
  'Button',                    // Component name
  props,                       // Component props
  defaults,                    // Default values
  designProps,                 // Design-specific props
  basicProps,                  // Basic props
  descriptions                 // Component descriptions
)

// Get Storybook arguments configuration
const args = buttonWiki.getWiki()

// Get component description
const description = buttonWiki.getDescription()

// Get current values
const values = buttonWiki.getValues()
```

### Storybook Integration

```tsx
import { StorybookMain, StorybookDescriptions } from '@dxtmisha/wiki/storybook'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof MyComponent> = {
  title: 'Components/Button',
  component: MyComponent,
  argTypes: buttonWiki.getWiki()
}

export default meta
type Story = StoryObj<typeof MyComponent>

// Use pre-built layout component
export const Documentation = () => (
  <StorybookMain
    name="Button"
    description={buttonWiki.getDescription()}
    story={Default}
  />
)

// Add additional descriptions
export const Details = () => (
  <StorybookDescriptions
    componentName="Button"
    type="usage"
  />
)
```

### Using Pre-defined Props

```typescript
import {
  wiki,
  wikiButton,
  wikiIcon,
  wikiStatus,
  wikiValue,
  wikiStyle
} from '@dxtmisha/wiki/media'

// Use pre-configured prop definitions
const buttonArgs = {
  ...wikiStatus,        // disabled, readonly, loading states
  ...wikiValue,         // value, defaultValue props
  ...wikiStyle,         // appearance, size, color props
  ...wikiButton,        // button-specific props
  ...wikiIcon          // icon-related props
}
```

## 📚 API Documentation

### 🏗️ Core Classes

#### WikiStorybook

Main class for managing component documentation and Storybook integration.

```typescript
import { WikiStorybook } from '@dxtmisha/wiki'

const wiki = new WikiStorybook(
  componentName,      // string - Component name
  props,              // StorybookProps - Component properties
  defaults,           // Record<string, any> - Default values
  wikiDesign,         // StorybookArgsToList - Design props (optional)
  wikiBasic,          // StorybookArgsToList - Basic props (optional)
  wikiDescriptions    // StorybookComponentsDescription - Descriptions (optional)
)

// Methods
wiki.getName()                    // Get component name
wiki.getWiki()                    // Get Storybook args configuration
wiki.getDescription()             // Get component description text
wiki.getValues()                  // Get current prop values
wiki.getStoryItem(id)            // Get specific story by ID
```

**Example:**
```typescript
const buttonWiki = new WikiStorybook(
  'Button',
  {
    disabled: { type: Boolean, default: false },
    primary: { type: Boolean, default: false },
    label: { type: String, required: true }
  },
  { disabled: false, primary: true },
  wikiButton,
  wiki,
  [buttonDescription]
)

const args = buttonWiki.getWiki()
// Returns Storybook-compatible args configuration
```

#### WikiStorybookItem

Represents a single Storybook argument/control item.

```typescript
import { WikiStorybookItem, StorybookControl } from '@dxtmisha/wiki'

const item = new WikiStorybookItem('propName', {
  type: StorybookControl.boolean,
  options: {
    category: StorybookCategory.status,
    value: true,
    description: {
      en: 'Enable disabled state',
      ru: 'Включить отключенное состояние'
    }
  }
})

item.getName()      // Get prop name
item.getValue()     // Get current value
item.getOrder()     // Get display order
item.to()          // Convert to Storybook args format
```

#### WikiStorybookDescriptions

Access component descriptions and MDX content.

```typescript
import { WikiStorybookDescriptions } from '@dxtmisha/wiki'

const descriptions = new WikiStorybookDescriptions('Button')

// Get component description item
const item = descriptions.getItem()
// { name: 'Button', description: {...}, stories: [...] }

// Get specific description type
const usage = descriptions.getDescriptionByType('usage')
const examples = descriptions.getDescriptionByType('examples')
```

### 📝 TypeScript Types & Enums

#### StorybookControl

Control types for Storybook arguments.

```typescript
enum StorybookControl {
  text = 'text',           // Text input
  string = 'string',       // String input
  number = 'number',       // Number input
  boolean = 'boolean',     // Boolean checkbox
  select = 'select',       // Select dropdown
  array = 'array',         // Array input
  object = 'object'        // Object input
}
```

#### StorybookCategory

Categories for organizing controls in Storybook.

```typescript
enum StorybookCategory {
  adaptive = 'Adaptive',      // Responsive design props
  status = 'Status',          // State props (disabled, loading, etc.)
  value = 'Values',           // Value-related props
  style = 'Styles',           // Appearance props
  technical = 'Technical',    // Technical props
  hook = 'Hook'              // Event handlers and hooks
}
```

#### Type Definitions

```typescript
// Storybook argument item
type StorybookArgsItem = {
  control?: StorybookControl | { type: StorybookControl } & Record<string, any>
  options?: any[] | Record<string, any>
  table?: {
    category?: string
    defaultValue?: StorybookArgsItemSummary
    type?: StorybookArgsItemSummary
  }
  description?: string
}

// Arguments collection
type StorybookArgs = Record<string, StorybookArgsItem | undefined>

// Component description
type StorybookComponentsDescriptionItem = {
  name: string
  description: StorybookArgsToDescription
  possibilities?: StorybookArgsToPossibilities
  stories?: StorybookComponentsDescriptionStory[]
}

// Props builder function
type StorybookArgsProp = (
  defaultValue?: any,
  props?: string[]
) => StorybookArgsItem
```

### 🎨 React Components

#### StorybookMain

Pre-built documentation layout with Title, Subtitle, Canvas, and Controls.

```tsx
import { StorybookMain } from '@dxtmisha/wiki/storybook'

<StorybookMain
  name="Button"
  description="A versatile button component with multiple variants"
  story={DefaultStory}
/>
```

**Props:**
- `name: string` — Component name for the title
- `description: string` — Component description/subtitle
- `story: any` — Storybook story object to display

#### StorybookDescriptions

Display additional component descriptions by type.

```tsx
import { StorybookDescriptions } from '@dxtmisha/wiki/storybook'

<StorybookDescriptions
  componentName="Button"
  type="usage"
/>
```

**Props:**
- `componentName: string` — Name of the component
- `type: string` — Type of description to display (usage, examples, api, etc.)

### 📦 Pre-configured Props

#### Common Props

```typescript
import {
  wikiStatus,      // disabled, readonly, loading, error
  wikiValue,       // value, defaultValue, placeholder
  wikiStyle,       // appearance, size, color, rounded
  wikiTechnical,   // class, style, id, ref
  wikiHook        // onClick, onChange, onFocus, onBlur
} from '@dxtmisha/wiki/media'
```

#### Component-Specific Props

```typescript
import {
  wikiBadge,           // Badge component props
  wikiBars,            // Progress bars props
  wikiButton,          // Button component props
  wikiChip,            // Chip component props
  wikiField,           // Input field props
  wikiIcon,            // Icon component props
  wikiImage,           // Image component props
  wikiList,            // List component props
  wikiListItem,        // List item props
  wikiMask,            // Input mask props
  wikiMenu,            // Menu component props
  wikiMotionTransform, // Transform animation props
  wikiProgress,        // Progress indicator props
  wikiScrollbar,       // Scrollbar props
  wikiWindow          // Window/Modal props
} from '@dxtmisha/wiki/media'
```

**Example Usage:**
```typescript
import { wikiButton, wikiStatus, wikiStyle } from '@dxtmisha/wiki/media'

const buttonArgs = {
  ...wikiStatus,    // Add status props
  ...wikiStyle,     // Add style props
  ...wikiButton     // Add button-specific props
}

// Now available:
// - disabled, readonly, loading (from wikiStatus)
// - appearance, size, color (from wikiStyle)
// - outline, primary, secondary, text (from wikiButton)
```

### 🖼️ Media Assets

Pre-exported demo images and resources.

```typescript
import {
  image1,      // Demo image 1 (JPEG)
  image2,      // Demo image 2 (JPEG)
  phone1,      // Phone mockup 1 (PNG)
  phone2,      // Phone mockup 2 (PNG)
  phone3,      // Phone mockup 3 (PNG)
  demoPdf     // Demo PDF file
} from '@dxtmisha/wiki/media'

// Use in stories
<img src={image1} alt="Demo" />
<a href={demoPdf}>View PDF</a>
```

### 📝 Component Descriptions

Access pre-defined component descriptions.

```typescript
import { wikiDescriptions } from '@dxtmisha/wiki/media'

const buttonDesc = wikiDescriptions.find(item => item.name === 'Button')
// {
//   name: 'Button',
//   description: { en: '...', ru: '...' },
//   possibilities: ['Primary action', 'Secondary action', ...],
//   stories: [...]
// }
```

## 🎯 Usage Examples

### Complete Component Documentation

```typescript
import { WikiStorybook, StorybookCategory, StorybookControl } from '@dxtmisha/wiki'
import { wiki, wikiButton } from '@dxtmisha/wiki/media'

// Define component props
const props = {
  disabled: { type: Boolean, default: false },
  primary: { type: Boolean, default: false },
  size: { type: String, default: 'medium' },
  label: { type: String, required: true }
}

// Define defaults
const defaults = {
  disabled: false,
  primary: false,
  size: 'medium',
  label: 'Click me'
}

// Define custom design props
const designProps = {
  'button.variant': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      value: 'filled',
      description: {
        en: 'Button variant style',
        ru: 'Вариант стиля кнопки'
      },
      options: ['filled', 'outlined', 'text']
    }
  }
}

// Create wiki instance
const buttonWiki = new WikiStorybook(
  'Button',
  props,
  defaults,
  designProps,
  { ...wiki, ...wikiButton },
  []
)

// Use in Storybook
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: buttonWiki.getWiki(),
  args: buttonWiki.getValues()
}
```

### Custom Control Definitions

```typescript
import { StorybookControl, StorybookCategory } from '@dxtmisha/wiki'

const customProps = {
  'theme': {
    type: StorybookControl.select,
    options: {
      category: StorybookCategory.style,
      value: 'light',
      description: {
        en: 'Color theme',
        ru: 'Цветовая тема'
      },
      options: ['light', 'dark', 'auto']
    }
  },
  'elevation': {
    type: StorybookControl.number,
    options: {
      category: StorybookCategory.style,
      value: 2,
      description: {
        en: 'Shadow elevation level (0-24)',
        ru: 'Уровень возвышения тени (0-24)'
      },
      min: 0,
      max: 24,
      step: 1
    }
  },
  'fullWidth': {
    type: StorybookControl.boolean,
    options: {
      category: StorybookCategory.adaptive,
      value: false,
      description: {
        en: 'Make button full width',
        ru: 'Сделать кнопку на всю ширину'
      }
    }
  }
}
```

### Multilingual Descriptions

```typescript
const componentDescription = {
  name: 'Button',
  description: {
    en: 'A versatile button component with multiple variants and states',
    ru: 'Универсальный компонент кнопки с множеством вариантов и состояний'
  },
  possibilities: {
    en: [
      'Primary and secondary actions',
      'Multiple size variants',
      'Icon support',
      'Loading states',
      'Disabled states'
    ],
    ru: [
      'Основные и вторичные действия',
      'Несколько вариантов размеров',
      'Поддержка иконок',
      'Состояния загрузки',
      'Отключенные состояния'
    ]
  },
  stories: [
    {
      id: 'primary',
      title: { en: 'Primary Button', ru: 'Основная кнопка' },
      description: {
        en: 'Use for primary actions',
        ru: 'Используйте для основных действий'
      }
    }
  ]
}
```

### Storybook MDX Integration

```mdx
import { Meta } from '@storybook/addon-docs'
import { StorybookMain, StorybookDescriptions } from '@dxtmisha/wiki/storybook'
import { buttonWiki } from './Button.stories'

<Meta title="Components/Button/Documentation" />

<StorybookMain
  name="Button"
  description={buttonWiki.getDescription()}
  story={Default}
/>

## Usage

<StorybookDescriptions componentName="Button" type="usage" />

## Examples

<StorybookDescriptions componentName="Button" type="examples" />

## API

<StorybookDescriptions componentName="Button" type="api" />
```

## 📁 Export Structure

```
@dxtmisha/wiki
├── /                         # Core classes & types
│   ├── WikiStorybook
│   ├── WikiStorybookItem
│   ├── WikiStorybookDescriptions
│   └── storybookTypes
├── /media                    # Props, descriptions & assets
│   ├── wiki                  # All props combined
│   ├── wikiButton            # Button props
│   ├── wikiIcon              # Icon props
│   ├── wikiStatus            # Status props
│   ├── wikiValue             # Value props
│   ├── wikiStyle             # Style props
│   ├── wikiDescriptions      # Component descriptions
│   ├── image1, image2        # Demo images
│   └── demoPdf               # Demo PDF
├── /storybook                # React components
│   ├── StorybookMain
│   └── StorybookDescriptions
└── /storybook/styles         # SCSS styles
    └── storybookStyle.scss
```

## 🔧 Requirements

- **Node.js**: ≥18.0.0
- **TypeScript**: 4.0+ (required - ships raw TS source)
- **Storybook**: ≥7.0.0
- **React**: ≥17.0.0 (for Storybook components)
- **Vue**: ≥3.0.0 (for consuming components)

## 📦 Peer Dependencies

These must be installed in your project:

```json
{
  "@dxtmisha/functional": ">=1.0.0",
  "@dxtmisha/media": ">=0.3.0",
  "@storybook/addon-docs": ">=7.0.0",
  "@mdx-js/react": ">=2.0.0",
  "react": ">=17.0.0",
  "vue": ">=3.0.0"
}
```

Install all at once:
```bash
npm install @dxtmisha/functional @dxtmisha/media @storybook/addon-docs @mdx-js/react react vue
```

## 🤝 Compatibility

| Environment | Support |
|-------------|---------|
| **Storybook** | ✅ 7.0+ |
| **React** | ✅ 17+ (for docs components) |
| **Vue.js** | ✅ 3+ (for target components) |
| **TypeScript** | ✅ 4+ (required) |
| **MDX** | ✅ 2+ |
| **Node.js** | ✅ 18+ |

## 📊 Package Info

- **Type**: ESM module
- **Source Distribution**: Ships raw TypeScript (no pre-built dist)
- **Dependencies**: Zero runtime dependencies
- **Size**: ~50KB (source)
- **Tree-shakeable**: ✅ Full support

## 🎯 Design Philosophy

### Source Distribution

This package ships **raw TypeScript source** from `src/` directory instead of compiled JavaScript. This approach provides:

- ✅ **Maximum transparency** — See exactly what you're using
- ✅ **Compilation flexibility** — Use your own TypeScript/bundler settings
- ✅ **Better debugging** — Direct source maps to original code
- ✅ **Optimal tree-shaking** — Your bundler can optimize better

**Requirements**: Your build tool must support:
- TypeScript compilation
- Native ESM imports
- Module resolution for `.ts` and `.tsx` files

Modern tools that work out-of-the-box:
- Vite
- Next.js 13+
- Webpack 5+ with ts-loader
- Rollup with TypeScript plugin
- esbuild

### Hybrid Ecosystem

Designed for Vue.js component libraries using React-based Storybook documentation:

- 🎨 **Vue Components** — Your actual UI components
- 📚 **React Docs** — Storybook documentation layer
- 🔧 **Shared Utilities** — TypeScript classes for both

### Category System

Props are organized into logical categories for better documentation:

- **Status** — States like disabled, loading, readonly, error
- **Values** — Data props like value, defaultValue, placeholder
- **Styles** — Appearance props like size, color, variant, rounded
- **Adaptive** — Responsive design props
- **Technical** — DOM attributes like class, style, id
- **Hook** — Event handlers like onClick, onChange

## 🏆 Advantages

- ✅ **Structured approach** — Consistent documentation across all components
- ✅ **Strong typing** — Full TypeScript support with detailed types
- ✅ **Multilingual** — Built-in support for multiple languages
- ✅ **Reusable** — Pre-configured props for common patterns
- ✅ **Flexible** — Use only what you need with granular imports
- ✅ **Integration ready** — Designed specifically for Storybook
- ✅ **Source transparency** — Ships raw TypeScript source
- ✅ **Zero dependencies** — Only peer dependencies for integration
- ✅ **Production tested** — Used in real DXT UI projects

## 📖 Additional Documentation

- [GitHub Repository](https://github.com/dxtmisha/dxt-ui)
- [DXT UI Documentation](https://dxtmisha.github.io/dxt-ui/)
- [Storybook Integration Guide](https://github.com/dxtmisha/dxt-ui/tree/main/packages/wiki)
- [@dxtmisha/functional](https://www.npmjs.com/package/@dxtmisha/functional)
- [@dxtmisha/media](https://www.npmjs.com/package/@dxtmisha/media)

## 🐛 Report Issues

Found a bug or have a suggestion?

- [GitHub Issues](https://github.com/dxtmisha/dxt-ui/issues)

## 💡 Best Practices

### 1. Combine Pre-configured Props

```typescript
import { wiki, wikiButton, wikiStatus } from '@dxtmisha/wiki/media'

const args = {
  ...wikiStatus,    // Add status props first
  ...wiki,          // Add common props
  ...wikiButton,    // Add component-specific props
  // Custom overrides
  'custom.prop': { /* ... */ }
}
```

### 2. Use Categories Consistently

```typescript
import { StorybookCategory } from '@dxtmisha/wiki'

// Group related props in the same category
const styleProps = {
  size: { /* ... */ category: StorybookCategory.style },
  color: { /* ... */ category: StorybookCategory.style },
  variant: { /* ... */ category: StorybookCategory.style }
}
```

### 3. Provide Multilingual Descriptions

```typescript
const description = {
  en: 'Enable loading state',
  ru: 'Включить состояние загрузки'
}
```

### 4. Order Categories Logically

The automatic ordering system places categories in this order:
1. Adaptive (0)
2. Status (3000)
3. Values (5000)
4. Styles (9000)
5. Technical/Hook (9999)

Override with custom `order` values if needed.

## 🔧 Troubleshooting

### TypeScript Errors

**Problem**: Cannot find module or type errors

**Solution**: Ensure your `tsconfig.json` includes:
```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "jsx": "react-jsx"
  }
}
```

### Build Tool Issues

**Problem**: Build tool doesn't compile TypeScript from node_modules

**Solution**: Configure your tool to include this package:

**Vite:**
```javascript
// vite.config.ts
export default {
  optimizeDeps: {
    include: ['@dxtmisha/wiki']
  }
}
```

**Webpack:**
```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [{
      test: /\.tsx?$/,
      include: [
        path.resolve('node_modules/@dxtmisha/wiki')
      ]
    }]
  }
}
```

## 📄 License

MIT © [dxtmisha](https://github.com/dxtmisha)

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

For major changes, please open an issue first to discuss what you would like to change.

## ⭐ Support the Project

If this package helps your project, please give it a star on [GitHub](https://github.com/dxtmisha/dxt-ui)!

---

Made with ❤️ by [dxtmisha](https://github.com/dxtmisha)
