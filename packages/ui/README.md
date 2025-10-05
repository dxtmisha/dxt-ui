# @dxtmisha/ui

> Complete DXT UI design system - meta-package with all essential libraries for modern Vue.js development

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fui.svg)](https://www.npmjs.com/package/@dxtmisha/ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

The **DXT UI** meta-package provides everything you need to build modern, production-ready Vue.js applications. One simple install gives you access to a complete ecosystem of utilities, components, styles, and documentation tools.

## 📦 Installation

```bash
npm install @dxtmisha/ui vue sass
```

```bash
yarn add @dxtmisha/ui vue sass
```

```bash
pnpm add @dxtmisha/ui vue sass
```

## ✨ What's Included

This meta-package automatically installs and manages all core DXT UI libraries:

### 🔧 [@dxtmisha/functional](https://www.npmjs.com/package/@dxtmisha/functional) `^1.0.9`
Comprehensive functional utilities library with 20+ classes, 100+ helper functions, and Vue 3 composables:
- **Classes**: Api, Cache, Geo, Datetime, Hash, Cookie, DataStorage, Translate
- **Functions**: Array, Object, String, DOM, Validation, Math operations
- **Composables**: useApiRef, useGeoIntlRef, useStorageRef, useHashRef
- **Features**: Geolocation, i18n, caching, HTTP client, date manipulation

### 🏗️ [@dxtmisha/constructor](https://www.npmjs.com/package/@dxtmisha/constructor) `^0.23.0`
Ready-to-use Vue 3 component constructors with TypeScript and SCSS:
- **Components**: Badge, Button, Chip, Field, Icon, Image, List, Menu, Progress, Window
- **Features**: Form controls, navigation, feedback, overlays, animations
- **Styling**: Modular SCSS, customizable design tokens
- **TypeScript**: Full type safety with comprehensive interfaces

### 🎨 [@dxtmisha/styles](https://www.npmjs.com/package/@dxtmisha/styles) `^1.0.3`
SCSS design system with utilities, mixins, and variables:
- **System**: Colors, typography, spacing, dimensions
- **Utilities**: Flexbox, grid, responsive design helpers
- **Mixins**: Reusable style patterns and functions
- **Tokens**: Customizable design tokens

### 📚 [@dxtmisha/wiki](https://www.npmjs.com/package/@dxtmisha/wiki) `^0.24.0`
Storybook documentation toolkit and component metadata:
- **Metadata**: Structured component descriptions
- **Storybook**: Pre-built React components for docs
- **i18n**: Multilingual support (en/ru)
- **Controls**: Type-safe Storybook argument builders

### 🖼️ [@dxtmisha/media](https://www.npmjs.com/package/@dxtmisha/media) `^0.3.3`
Media utilities and flag assets:
- **Flags**: 200+ country flags with localized names
- **Icons**: SVG icon management system
- **Assets**: Demo images and resources

### ⚙️ [@dxtmisha/configuration](https://www.npmjs.com/package/@dxtmisha/configuration) `^0.3.11`
Build configuration and tooling:
- **Vite**: Pre-configured Vite setup
- **TypeScript**: Shared TypeScript configurations
- **Build**: Optimized build settings

### 🛠️ [@dxtmisha/scripts](https://www.npmjs.com/package/@dxtmisha/scripts) `^0.4.1`
Development scripts and CLI tools:
- **Library**: Component library builders
- **Constructor**: Component generation tools
- **Utilities**: Development helpers

## 🚀 Quick Start

### 1. Install the Package

```bash
npm install @dxtmisha/ui vue sass
```

### 2. Import What You Need

```typescript
// Import utilities
import { Cache, Datetime, Geo, Api } from '@dxtmisha/functional'

// Import components
import { Button, Field, Icon } from '@dxtmisha/constructor/Button'

// Import styles
import '@dxtmisha/styles'
import '@dxtmisha/constructor/Button/style'
```

### 3. Use in Your Vue App

```vue
<template>
  <div class="app">
    <Button 
      :label="t('common.submit')"
      :loading="loading"
      @click="handleSubmit"
    />
    
    <Field
      v-model="email"
      type="email"
      :placeholder="t('form.email')"
    />
    
    <div>{{ formattedDate }}</div>
    <div>{{ country }} - {{ language }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button, Field } from '@dxtmisha/constructor'
import { Datetime, Geo, Translate } from '@dxtmisha/functional'
import '@dxtmisha/constructor/Button/style'
import '@dxtmisha/constructor/Field/style'

const email = ref('')
const loading = ref(false)

// Date formatting
const datetime = new Datetime()
const formattedDate = computed(() => datetime.format('YYYY-MM-DD'))

// Geolocation
const country = Geo.getCountry()
const language = Geo.getLanguage()

// Translations
const t = (key: string) => Translate.getSync(key, true)

const handleSubmit = async () => {
  loading.value = true
  // Your logic here
  loading.value = false
}
</script>

<style lang="scss">
@import '@dxtmisha/styles';

.app {
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}
</style>
```

## 📚 Complete Example

### Setup Main Application

```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// Import global styles
import '@dxtmisha/styles'

// Configure API
import { Api, Geo } from '@dxtmisha/functional'

Api.setUrl('/api/v1')
Api.setHeaders({
  'Accept-Language': Geo.getStandard()
})

// Create app
const app = createApp(App)
app.mount('#app')
```

### Component with Full Features

```vue
<template>
  <div class="user-profile">
    <div class="user-header">
      <Image
        :src="userData.avatar"
        :alt="userData.name"
        rounded
      />
      <div class="user-info">
        <h2>{{ userData.name }}</h2>
        <Chip :label="userData.role" />
      </div>
      <Badge :value="unreadCount" />
    </div>

    <List>
      <ListItem
        v-for="item in menuItems"
        :key="item.id"
        :icon="item.icon"
        :label="item.label"
        @click="navigate(item.path)"
      />
    </List>

    <div class="stats">
      <div class="stat-item">
        <Progress 
          :value="stats.completion" 
          :max="100"
        />
        <span>{{ intl.percent(stats.completion / 100) }}</span>
      </div>
      
      <div class="stat-item">
        <Icon name="calendar" />
        <span>{{ formatDate(userData.joinDate) }}</span>
      </div>
    </div>

    <Button
      :label="t('profile.edit')"
      primary
      :loading="saving"
      @click="editProfile"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Button,
  Badge,
  Chip,
  Icon,
  Image,
  List,
  ListItem,
  Progress
} from '@dxtmisha/constructor'
import {
  useApiRef,
  useGeoIntlRef,
  useTranslateRef,
  Datetime
} from '@dxtmisha/functional'

// Import component styles
import '@dxtmisha/constructor/Button/style'
import '@dxtmisha/constructor/Badge/style'
import '@dxtmisha/constructor/Chip/style'
import '@dxtmisha/constructor/Icon/style'
import '@dxtmisha/constructor/Image/style'
import '@dxtmisha/constructor/List/style'
import '@dxtmisha/constructor/Progress/style'

// Reactive API call
const { data: userData, loading } = useApiRef('/user/profile')

// Geolocation and formatting
const { intl } = useGeoIntlRef()

// Translations
const { t } = useTranslateRef()

// Local state
const saving = ref(false)
const unreadCount = ref(5)

const stats = computed(() => ({
  completion: userData.value?.stats?.completion || 0,
  activities: userData.value?.stats?.activities || 0
}))

const menuItems = [
  { id: 1, icon: 'settings', label: t('menu.settings'), path: '/settings' },
  { id: 2, icon: 'notifications', label: t('menu.notifications'), path: '/notifications' },
  { id: 3, icon: 'help', label: t('menu.help'), path: '/help' }
]

const formatDate = (date: string) => {
  const dt = new Datetime(date)
  return dt.format('DD MMMM YYYY')
}

const navigate = (path: string) => {
  // Navigation logic
}

const editProfile = async () => {
  saving.value = true
  // Edit logic
  saving.value = false
}
</script>

<style lang="scss" scoped>
@import '@dxtmisha/styles';

.user-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.user-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.user-info {
  flex: 1;
  
  h2 {
    margin: 0 0 0.5rem;
  }
}

.stats {
  margin: 2rem 0;
  display: grid;
  gap: 1rem;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
```

## 🎯 Usage Patterns

### Functional Utilities

```typescript
import {
  // Caching
  Cache,
  CacheItem,
  
  // Date & Time
  Datetime,
  
  // Geolocation
  Geo,
  GeoIntl,
  GeoFlag,
  GeoPhone,
  
  // HTTP
  Api,
  Loading,
  
  // Storage
  Cookie,
  DataStorage,
  Hash,
  
  // Translations
  Translate,
  
  // Array helpers
  toArray,
  forEach,
  uniqueArray,
  
  // Object helpers
  copyObject,
  isObjectNotArray,
  
  // String helpers
  toCamelCase,
  toKebabCase,
  
  // Validation
  isFilled,
  isArray,
  isDifferent
} from '@dxtmisha/functional'
```

### Component Constructors

```typescript
import {
  // Basic UI
  Badge,
  Button,
  Chip,
  Icon,
  Image,
  
  // Form Controls
  Field,
  FieldCounter,
  FieldLabel,
  FieldMessage,
  Mask,
  
  // Lists & Navigation
  List,
  ListGroup,
  ListItem,
  ListMenu,
  Menu,
  
  // Feedback
  Progress,
  Skeleton,
  Ripple,
  
  // Layout
  Bars,
  Cell,
  Scrollbar,
  Window,
  
  // Animation
  MotionTransform
} from '@dxtmisha/constructor'
```

### Styles

```scss
// Import everything
@import '@dxtmisha/styles';

// Or import specific modules
@import '@dxtmisha/styles/properties';
```

### Storybook Documentation

```typescript
import {
  WikiStorybook,
  StorybookControl,
  StorybookCategory
} from '@dxtmisha/wiki'

import {
  StorybookMain,
  StorybookDescriptions
} from '@dxtmisha/wiki/storybook'

import {
  wiki,
  wikiButton,
  wikiStatus,
  wikiValue
} from '@dxtmisha/wiki/media'
```

## 🔧 Configuration

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "types": ["vue", "@dxtmisha/functional"]
  }
}
```

### Vite Configuration

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@dxtmisha/styles";`
      }
    }
  }
})
```

### Setup API & Geo

```typescript
// config/app.ts
import { Api, Geo, Translate } from '@dxtmisha/functional'

// Configure API
Api.setUrl(import.meta.env.VITE_API_URL || '/api')
Api.setHeaders({
  'Content-Type': 'application/json',
  'Accept-Language': Geo.getStandard()
})

// Set geolocation if needed
Geo.set('en-US') // or auto-detect from browser

// Configure translations endpoint
Translate.setUrl('/api/translations')
```

## 📖 Package Documentation

Each package has comprehensive documentation:

- 📘 [**@dxtmisha/functional**](https://github.com/dxtmisha/dxt-ui/tree/main/packages/functional) - Utilities and composables
- 🏗️ [**@dxtmisha/constructor**](https://github.com/dxtmisha/dxt-ui/tree/main/packages/constructor) - Vue components
- 🎨 [**@dxtmisha/styles**](https://github.com/dxtmisha/dxt-ui/tree/main/packages/styles) - SCSS design system
- 📚 [**@dxtmisha/wiki**](https://github.com/dxtmisha/dxt-ui/tree/main/packages/wiki) - Documentation toolkit
- 🖼️ [**@dxtmisha/media**](https://github.com/dxtmisha/dxt-ui/tree/main/packages/media) - Media utilities
- ⚙️ [**@dxtmisha/configuration**](https://github.com/dxtmisha/dxt-ui/tree/main/packages/configuration) - Build configs
- 🛠️ [**@dxtmisha/scripts**](https://github.com/dxtmisha/dxt-ui/tree/main/packages/scripts) - Dev tools

## 🔧 Requirements

- **Node.js**: ≥18.0.0
- **Vue.js**: ≥3.0.0 (required)
- **Sass**: ^1.50.0 (required)
- **TypeScript**: 4.0+ (recommended)

## 🤝 Compatibility

| Environment | Support |
|-------------|---------|
| **Vue.js** | ✅ 3.0+ |
| **Node.js** | ✅ 18+ |
| **TypeScript** | ✅ 4.0+ |
| **Browsers** | ✅ ES2020+ (Chrome 80+, Firefox 72+, Safari 13.1+, Edge 80+) |
| **Vite** | ✅ 4.0+ |
| **Webpack** | ✅ 5.0+ |
| **SSR** | ✅ Nuxt 3, SSR-ready |

## 📊 Bundle Size

Individual packages are tree-shakeable. Import only what you need:

- **Minimal setup**: ~50KB (functional utilities only)
- **With components**: ~200KB (functional + 5-10 components)
- **Complete**: ~500KB (all packages, before tree-shaking)
- **After tree-shaking**: Depends on usage (typically 100-300KB)

## 🎯 Why DXT UI?

### ✅ Complete Ecosystem
Everything you need in one install - utilities, components, styles, and documentation tools.

### ✅ TypeScript First
Full type safety across all packages with comprehensive interfaces and types.

### ✅ Production Ready
Battle-tested in real applications, actively maintained and updated.

### ✅ Developer Experience
- Intuitive APIs
- Comprehensive documentation
- Rich examples
- Active support

### ✅ Flexibility
- Tree-shakeable
- Modular architecture
- Customizable styling
- Multiple entry points

### ✅ Modern Stack
- Vue 3 Composition API
- TypeScript
- SCSS with design tokens
- Vite optimized

### ✅ i18n Ready
- Built-in geolocation
- Multilingual support
- Locale-aware formatting
- Translation system

### ✅ Zero Config
Works out of the box with sensible defaults, customizable when needed.

## 🚀 Migration from Individual Packages

If you're currently using individual packages:

**Before:**
```bash
npm install @dxtmisha/functional @dxtmisha/constructor @dxtmisha/styles
```

**After:**
```bash
npm install @dxtmisha/ui
```

All imports remain the same - no code changes needed!

## 📖 Additional Resources

- [GitHub Repository](https://github.com/dxtmisha/dxt-ui)
- [DXT UI Documentation](https://dxtmisha.github.io/dxt-ui/)
- [Storybook Examples](https://dxtmisha.github.io/dxt-ui/storybook)
- [API Reference](https://github.com/dxtmisha/dxt-ui/tree/main/packages)

## 🐛 Report Issues

Found a bug or have a suggestion?

- [GitHub Issues](https://github.com/dxtmisha/dxt-ui/issues)

## 💡 Examples & Templates

Check out example projects and starter templates:

- [Basic Vue 3 App](https://github.com/dxtmisha/dxt-ui/tree/main/examples/basic)
- [Admin Dashboard](https://github.com/dxtmisha/dxt-ui/tree/main/examples/admin)
- [E-commerce](https://github.com/dxtmisha/dxt-ui/tree/main/examples/ecommerce)

## 🏆 Features Comparison

| Feature | DXT UI | Other UI Libraries |
|---------|--------|-------------------|
| Complete ecosystem | ✅ | ❌ Fragmented |
| TypeScript first | ✅ | ⚠️ Partial |
| Functional utilities | ✅ 100+ | ❌ Component-only |
| Geolocation & i18n | ✅ Built-in | ❌ External libs |
| Caching system | ✅ Advanced | ❌ None |
| HTTP client | ✅ Integrated | ❌ Separate |
| Documentation toolkit | ✅ Storybook ready | ❌ Basic |
| Source distribution | ✅ Flexible | ❌ Pre-built only |
| Tree-shaking | ✅ Full support | ⚠️ Limited |
| Meta-package | ✅ One install | ❌ Multiple installs |

## 📄 License

MIT © [dxtmisha](https://github.com/dxtmisha)

## 🤝 Contributing

Contributions are welcome! Please see our [Contributing Guide](https://github.com/dxtmisha/dxt-ui/blob/main/CONTRIBUTING.md).

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 🙏 Acknowledgments

Built with ❤️ using:
- Vue.js
- TypeScript
- Vite
- SCSS
- Storybook

## ⭐ Support the Project

If DXT UI helps your project, please give it a star on [GitHub](https://github.com/dxtmisha/dxt-ui)!

---

Made with ❤️ by [dxtmisha](https://github.com/dxtmisha)
