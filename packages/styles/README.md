# @dxtmisha/styles

🎨 **SCSS styles and utilities** for DXT UI design system. A comprehensive collection of mixins, variables, and utilities for building consistent user interfaces.

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fstyles.svg)](https://www.npmjs.com/package/@dxtmisha/styles)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## 🚀 Installation

```bash
npm install @dxtmisha/styles
```

## ✨ Features

- 🎨 **Comprehensive color system** with utilities and mixins
- 📐 **Flexible dimension** and spacing utilities
- 🔤 **Typography system** with font utilities
- 📱 **Responsive design** with media query helpers
- 🎯 **Flexbox utilities** for modern layouts
- 🔧 **SCSS mixins** and functions
- 📦 **Modular architecture** - import only what you need
- ⚡ **Tree-shaking** support for optimization

## 📖 Quick Start

### Import all styles

```scss
@import '@dxtmisha/styles';
```

### Import design system properties

```scss
@import '@dxtmisha/styles/properties';
```

### Vue.js example

```vue
<template>
  <div class="card">
    <h2 class="title">Hello World</h2>
    <p class="text">Beautiful styled content</p>
  </div>
</template>

<style lang="scss">
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
</style>
```

## 📚 Available modules

### Main import

```scss
@import '@dxtmisha/styles';           // All utilities and styles
```

### Design system properties

```scss
@import '@dxtmisha/styles/properties';  // Design system properties
```

The main import includes all available utilities:
- Color system and mixins
- Flexbox utilities
- Typography system
- Media query helpers
- Dimension and spacing utilities
- Content utilities
- CSS custom properties
- And more...

## 🛠️ Practical examples

### Color utilities

```scss
@import '@dxtmisha/styles';

.primary-button {
  @include color(primary);
  @include backgroundColor(primary);
  @include backgroundAsColor;
}

.success-text {
  @include color(success);
}
```

### Flexbox utilities

```scss
@import '@dxtmisha/styles';

.container {
  @include flex;
  @include flexDirection(column);
  @include justifyContent(center);
  @include alignItems(center);
}
```

### Responsive design

```scss
@import '@dxtmisha/styles';

.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  
  @include media(md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @include media(lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Typography system

```scss
@import '@dxtmisha/styles';

.heading {
  @include font(displayLarge);
}

.body-text {
  @include font(bodyMedium);
}

.caption {
  @include font(labelSmall);
}
```

## 📊 Bundle information

| Import | Size | Description |
|--------|------|-------------|
| **Main bundle** | ~45KB | All utilities and styles |
| **Properties** | ~12KB | Design system properties only |

## 🔧 Requirements

- **Node.js**: ≥18.0.0
- **Sass/SCSS**: ≥1.50.0
- **Build tool**: Vite, Webpack, Parcel

## 📁 Export structure

```
@dxtmisha/styles
├── /                 # Main styles bundle (all utilities)
└── /properties      # Design system properties
```

## 🤝 Compatibility

| Technology | Support |
|------------|---------|
| **Vite** | ✅ Full support |
| **Webpack** | ✅ Full support |
| **Parcel** | ✅ Full support |
| **Vue.js** | ✅ Recommended |
| **React** | ✅ Compatible |
| **Angular** | ✅ Compatible |

## 🌐 Browser Support

Modern browsers that support:
- CSS custom properties
- Flexbox
- CSS Grid

## 📄 License

MIT © [dxtmisha@gmail.com](mailto:dxtmisha@gmail.com)

## 🔗 Links

- [📦 NPM Package](https://www.npmjs.com/package/@dxtmisha/styles)
- [🏠 Homepage](https://github.com/dxtmisha/dxt-ui/tree/main/packages/styles)
- [🐛 Issues](https://github.com/dxtmisha/dxt-ui/issues)
- [📚 Repository](https://github.com/dxtmisha/dxt-ui)
