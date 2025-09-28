# @dxtmisha/scripts

🛠️ **Development scripts and CLI tools** for DXT UI projects - automated component generation, library building and project management tools.

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fscripts.svg)](https://www.npmjs.com/package/@dxtmisha/scripts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## 🚀 Installation

```bash
npm install -D @dxtmisha/scripts
```

## 📦 What's included

### CLI Commands:
- **dxt-component** - generate new UI components
- **dxt-component-wiki** - generate component documentation  
- **dxt-constructor** - build component constructors
- **dxt-library** - build component libraries
- **dxt-ui** - build complete UI packages

### Classes & Tools:
- **AI Integration** - Google AI for automated tasks (`AiGoogle`, `AiAbstract`)
- **Component Management** - creation and wiki generation (`ComponentCreator`, `ComponentWiki`)
- **Design System** - structure and styling tools (`DesignComponent`, `DesignStructure`)
- **Library Export** - automated export management (`LibraryExport`)
- **Properties Management** - configuration and properties handling
- **Styles Tools** - SCSS generation and styling utilities

## 🛠️ Usage

### CLI Commands

```bash
# Generate new component
npx dxt-component MyComponent

# Generate component wiki documentation
npx dxt-component-wiki MyComponent

# Build component constructor
npx dxt-constructor

# Build component library
npx dxt-library

# Build complete UI package
npx dxt-ui
```

### Programmatic API

```typescript
import { ComponentCreator, DesignComponent, AiGoogle } from '@dxtmisha/scripts'

// Create new component
const creator = new ComponentCreator()
await creator.create('MyComponent')

// Build design system
const design = new DesignComponent()
await design.build()

// Use AI for code generation
const ai = new AiGoogle()
const result = await ai.generateCode('Create a button component')
```

## 📚 Available tools

| Tool | Description |
|------|-------------|
| `ComponentCreator` | Generate Vue components with TypeScript |
| `ComponentWiki` | Generate Storybook documentation |
| `DesignComponent` | Build design system components |
| `DesignConstructor` | Build component constructors |
| `DesignTypescript` | TypeScript analysis and generation |
| `LibraryExport` | Manage library exports |
| `AiGoogle` | AI-powered code generation |

## 🎯 Who is this package for

- **UI library developers** - component generation tools
- **Design system teams** - automated documentation
- **DXT UI ecosystem** - official development tools
- **Vue.js developers** - optimized for Vue components

## ✨ Features

- ✅ **Component generation** with TypeScript
- ✅ **Automated documentation** via Storybook
- ✅ **AI integration** for smart generation
- ✅ **Library management** and exports
- ✅ **Design system** structure tools
- ✅ **CLI commands** for easy usage
- ✅ **Properties management** and configuration
- ✅ **SCSS/Styles generation** utilities

## 🔧 Requirements

### Core Dependencies
- **Node.js**: ≥18.0.0
- **Vue.js**: 3+ (peer dependency)
- **TypeScript**: ≥4.5.0

### DXT UI Dependencies (peer dependencies)
- **@dxtmisha/functional**: ≥0.3.0 - utility functions
- **@dxtmisha/configuration**: ≥0.3.0 - Vite and TS configurations
- **@dxtmisha/wiki**: ≥0.3.0 - Storybook documentation tools
- **@dxtmisha/constructor**: ≥0.22.0 - component constructors
- **@dxtmisha/styles**: ≥0.3.0 - styling system

## 🤝 Compatibility

| Tool | Version |
|------|---------|
| **Vue** | 3+ |
| **TypeScript** | ≥4.5.0 |
| **Node.js** | ≥18.0.0 |
| **@dxtmisha/functional** | ≥0.3.0 |
| **@dxtmisha/configuration** | ≥0.3.0 |
| **@dxtmisha/wiki** | ≥0.3.0 |
| **@dxtmisha/constructor** | ≥0.22.0 |
| **@dxtmisha/styles** | ≥0.3.0 |

## 📁 Project Structure

```
src/
├── classes/         # Main classes for tools
│   ├── Ai/          # AI integration tools
│   ├── Component/   # Component generation
│   ├── Design/      # Design system tools
│   ├── Library/     # Library management
│   ├── Properties/  # Properties handling
│   └── Styles/      # Styling utilities
├── composables/     # Vue composables
├── functions/       # Utility functions
├── media/           # Templates and properties
└── types/           # TypeScript type definitions

bin/                 # CLI executable scripts
```

## 📄 License

MIT © [dxtmisha](https://github.com/dxtmisha)

## 🐛 Report an issue

[GitHub Issues](https://github.com/dxtmisha/dxt-ui/issues)

---

⭐ **Give us a star** if these scripts were helpful!
