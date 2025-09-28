# @dxtmisha/scripts

🛠️ **Development scripts and CLI tools** for DXT UI projects - automated component generation, library building and project management tools.

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fscripts.svg)](https://www.npmjs.com/package/@dxtmisha/scripts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## 🚀 Installation

```bash
npm install -D @dxtmisha/scripts
```

> **Note:** TypeScript sources are shipped directly. Requires a TypeScript runner like `vite-node`, `tsx` or manual transpilation.

## ✨ Features

- 🏗️ **Component scaffolding** - automatic Vue component generation with TypeScript
- 🎯 **AI integration** - Google AI (Gemini) powered code generation
- 🔧 **CLI commands** - ready-to-use command line tools
- 📝 **Documentation generation** - automatic Storybook and MDX creation  
- ⚡ **Library management** - export barrel file maintenance
- 🎨 **Design system tools** - constructor and properties management
- 📦 **TypeScript source** - no build step required

## 📖 Quick Start

### CLI Commands

```bash
# Generate component scaffolds in empty directories
npx dxt-component

# Generate wiki documentation for specific component
npx dxt-component-wiki MyButton

# Build component constructors
npx dxt-constructor

# Rebuild library exports
npx dxt-library

# Full UI project build
npx dxt-ui
```

### Programmatic Usage

```typescript
import { 
  ComponentCreator, 
  DesignComponent, 
  AiGoogle,
  LibraryExport 
} from '@dxtmisha/scripts'

// Generate component scaffolds
const creator = new ComponentCreator()
creator.make() // Scans and creates templates for empty component dirs

// AI-powered generation
const ai = new AiGoogle()
ai.addPrompt('You are a Vue component expert')
ai.setModel('gemini-1.5-flash')
const result = await ai.generate('Create props interface for Button component')

// Library export management
const library = new LibraryExport()
library.make() // Rebuilds barrel export files
```

## 📚 Available utilities

### 🏗️ Core Classes

#### Component Generation
```typescript
import { ComponentCreator, ComponentItem, ComponentWiki } from '@dxtmisha/scripts'

// Bulk component scaffolding
const creator = new ComponentCreator()
creator.make() // Creates templates in all empty component directories

// Single component generation
const item = new ComponentItem('/path/to/component')
item.make() // Creates complete component file set

// Documentation generation
const wiki = new ComponentWiki('Button')
wiki.make() // Generates Storybook files
```

#### AI Integration
```typescript
import { AiAbstract, AiGoogle } from '@dxtmisha/scripts'

const ai = new AiGoogle()

// Prompt management
ai.addPrompt('Context line 1')
ai.addPrompt('Context line 2')
ai.resetPrompt() // Clear all prompts

// Configuration
ai.setKey('your-api-key')
ai.setModel('gemini-1.5-flash')

// Generation
const response = await ai.generate('Generate TypeScript interface')
```

#### Design System Tools
```typescript
import { 
  DesignComponent, 
  DesignConstructor, 
  DesignTypescript,
  DesignStructure 
} from '@dxtmisha/scripts'

// Component orchestration
const component = new DesignComponent('Button', { variant: 'primary' })
component.make() // Creates: props.ts, styleToken.scss, Component.vue, etc.

// TypeScript analysis
const ts = new DesignTypescript('/path/to/props.ts')
const props = ts.getType('ButtonProps')?.props // Extract prop definitions
```

### 🎯 Vue Composables

```typescript
import { useAi } from '@dxtmisha/scripts'

// Reactive AI integration
const { ai, generate, loading, error } = useAi()

// Usage in Vue component
const result = await generate('Create component documentation')
```

### 🔧 Utility Functions

```typescript
import { 
  getComponentPaths, 
  getConstructorProperties,
  getNameDirByPaths 
} from '@dxtmisha/scripts'

// Path utilities
const paths = getComponentPaths('/components/Button')
const properties = getConstructorProperties()
const dirName = getNameDirByPaths(['src', 'components', 'Button'])
```

## 🎯 CLI Commands Reference

| Command | Purpose | Arguments | Output |
|---------|---------|-----------|---------|
| `dxt-component` | Component scaffolding | None (scans all) | Creates templates in empty dirs |
| `dxt-component-wiki` | Wiki generation | `<ComponentName>` | Generates .stories.ts and .mdx |
| `dxt-constructor` | Constructor build | None | Updates constructor files |
| `dxt-library` | Library exports | None | Rebuilds barrel exports |
| `dxt-ui` | Full UI build | None | Complete project generation |

## 🏗️ Generated File Structure

When using `DesignComponent`, the following files are created:

```
MyComponent/
├── properties.json         # Design tokens binding
├── props.ts                # TypeScript props + defaults
├── styleToken.scss         # SCSS tokens and imports
├── MyComponent.vue         # Vue SFC template
├── index.ts                # Component export
├── wiki.ts                 # Storybook controls
├── MyComponent.stories.ts  # Storybook configuration
└── MyComponent.mdx         # MDX documentation
```

## 🎯 Use cases

### AI-Assisted Development
```typescript
import { AiGoogle } from '@dxtmisha/scripts'

async function generateComponentDocs(componentName: string) {
  const ai = new AiGoogle()
  ai.addPrompt('You are a technical writer for Vue components')
  ai.addPrompt('Write clear, concise documentation')
  
  const docs = await ai.generate(`
    Create documentation for ${componentName} component.
    Include usage examples and prop descriptions.
  `)
  
  return docs
}
```

## 📦 Requirements

**Core Dependencies:**
- Node.js ≥18.0.0
- TypeScript ≥5.0.0

**Peer Dependencies (install separately):**
- `@dxtmisha/functional` ≥1.0.3 - utility functions
- `@dxtmisha/configuration` ≥0.3.9 - build configurations
- `@dxtmisha/wiki` ≥0.23.5 - storybook utilities
- `@dxtmisha/styles` ≥1.0.2 - styling system
- `vue` ≥3.0.0 - Vue framework (when needed)

## 📄 License

MIT © [dxtmisha](https://github.com/dxtmisha)

## 🐛 Report an issue

[GitHub Issues](https://github.com/dxtmisha/dxt-ui/issues)

---

⭐ **Give us a star** if these scripts helped accelerate your development!
