# @dxtmisha/configuration

🔧 **Shared configuration files** for DXT UI projects - ready-to-use Vite and TypeScript configurations for building UI components.

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fconfiguration.svg)](https://www.npmjs.com/package/@dxtmisha/configuration)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## 🚀 Installation

```bash
npm install @dxtmisha/configuration
```

## 📦 What's included

### Vite configurations:
- **viteBasic** - basic configuration for UI components
- **viteBasicFunction** - functional version of basic configuration
- **viteComponentOnly** - for components only, without application
- **viteFlags** - specialized for packages with flags/icons
- **viteMdx** - MDX files support

### TypeScript configurations:
- **tsconfig.app.json** - for applications
- **tsconfig.node.json** - for Node.js environment

## 🛠️ Usage

### Vite configurations

```javascript
// vite.config.js - basic configuration
import { viteBasic } from '@dxtmisha/configuration/viteBasic'
export default viteBasic

// vite.config.js - functional version with customization
import { viteBasicFunction } from '@dxtmisha/configuration/viteBasicFunction'
export default viteBasicFunction({
  // your additional settings
})

// vite.config.js - components only
import { viteComponentOnly } from '@dxtmisha/configuration/viteComponentOnly'
export default viteComponentOnly

// vite.config.js - for packages with flags
import { viteFlags } from '@dxtmisha/configuration/viteFlags'
export default viteFlags

// vite.config.js - with MDX support
import { viteMdx } from '@dxtmisha/configuration/viteMdx'
export default viteMdx
```

### TypeScript configurations

```json
{
  "extends": "@dxtmisha/configuration/tsconfig/tsconfig.app.json",
  "compilerOptions": {
  }
}
```

```json
{
  "extends": "@dxtmisha/configuration/tsconfig/tsconfig.node.json"
}
```

## 📚 Available exports

| Export | Description |
|--------|-------------|
| `./viteBasic` | Ready-to-use basic Vite configuration |
| `./viteBasicFunction` | Function for creating Vite configuration |
| `./viteComponentOnly` | Configuration for components only |
| `./viteFlags` | Configuration for packages with flags |
| `./viteMdx` | Configuration with MDX support |
| `./tsconfig/*` | All TypeScript configurations |

## 🎯 Who is this package for

- **UI library developers** - standardized configurations
- **Monorepo projects** - unified settings for all packages  
- **DXT UI ecosystem** - official configurations
- **Vue.js developers** - optimized for Vue components

## ✨ Features

- ✅ **TypeScript support** out of the box
- ✅ **Vue.js optimizations** for components
- ✅ **MDX support** for documentation
- ✅ **Tree-shaking** and bundle optimization
- ✅ **ESM modules** modern standard
- ✅ **Ready-made presets** for different tasks

## 🔧 Requirements

- **Node.js**: ≥18.0.0
- **Vite**: ≥4.0.0 (peer dependency)
- **TypeScript**: ≥4.5.0 (peer dependency)

## 🤝 Compatibility

| Tool | Version |
|------|---------|
| **Vite** | ≥4.0.0 |
| **Vue** | 3+ |
| **TypeScript** | ≥4.5.0 |
| **Node.js** | ≥18.0.0 |

## 📄 License

MIT © [dxtmisha](https://github.com/dxtmisha)

## 🐛 Report an issue

[GitHub Issues](https://github.com/dxtmisha/dxt-ui/issues)

---

⭐ **Give us a star** if these configurations were helpful!
