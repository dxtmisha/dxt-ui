# @dxtmisha/functional

🛠️ **Comprehensive functional utilities library** for DXT UI - classes, composables, functions and types for modern web development.

[![npm version](https://badge.fury.io/js/@dxtmisha%2Ffunctional.svg)](https://www.npmjs.com/package/@dxtmisha/functional)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## 🚀 Installation

```bash
npm install @dxtmisha/functional
```

## ✨ Features

- 🏗️ **Utility classes** - Api, Cache, Geo, Datetime, Hash and more
- 🎯 **Vue composables** - useApiRef, useGeoIntlRef, useStorageRef and more
- 🔧 **Helper functions** - 80+ utility functions for common operations
- 📝 **TypeScript types** - Complete type definitions for all utilities
- ⚡ **Tree-shaking** support for optimization
- 🎯 **ESM** modern ES modules
- 📦 **Optional Vue integration** - works with or without Vue

## 📖 Quick Start

### Utility Functions

```typescript
import { 
  toArray, 
  isObjectNotArray, 
  transformation,
  forEach,
  toCamelCase,
  toKebabCase 
} from '@dxtmisha/functional'

// Array utilities
const items = toArray('single') // ['single']
const numbers = toArray([1, 2, 3]) // [1, 2, 3]

// Object utilities
const isObj = isObjectNotArray({ key: 'value' }) // true
const data = transformation('{"name": "test"}') // { name: 'test' }

// Enhanced forEach with break support
forEach([1, 2, 3], (item, index) => {
  if (item > 1) return 'break' // Break on condition
  console.log(item)
})

// String case conversion
const kebab = toKebabCase('myVariableName') // 'my-variable-name'
const camel = toCamelCase('my-variable-name') // 'myVariableName'
```

### Utility Classes

```typescript
import { 
  Cache, 
  Datetime, 
  Geo, 
  Hash,
  Api 
} from '@dxtmisha/functional'

// Cache management
const cache = new Cache()
cache.set('key', 'value', 3600) // Cache for 1 hour
const value = cache.get('key')

// Date and time utilities
const datetime = new Datetime()
const formatted = datetime.format('YYYY-MM-DD')

// Geolocation and internationalization
const geo = new Geo()
const country = geo.getCountry() // Get current country

// Hash management
const hash = new Hash()
hash.set('param', 'value') // Updates URL hash

// API utilities
const api = new Api('https://api.example.com')
const response = await api.get('/users')
```

### Vue Composables (Optional)

```typescript
import { 
  useGeoIntlRef, 
  useStorageRef, 
  useApiRef,
  useHashRef 
} from '@dxtmisha/functional'

// Reactive geolocation
const { country, language } = useGeoIntlRef()

// Reactive local storage
const { value: theme, set: setTheme } = useStorageRef('theme', 'light')

// Reactive API calls
const { data, loading, error } = useApiRef('/api/users')

// Reactive URL hash
const { hash, setHash } = useHashRef()
```

## 📚 Available utilities

### 🏗️ Classes (25+)
- **Api** - HTTP client with interceptors
- **Cache** - Memory and persistent caching
- **Datetime** - Date manipulation and formatting
- **Geo** - Geolocation and country detection
- **Hash** - URL hash management
- **Cookie** - Cookie management utilities
- **Global** - Global state management
- **Loading** - Loading state management
- **Translate** - Internationalization utilities

### 🎯 Vue Composables (10+)
- **useApiRef** - Reactive API calls
- **useGeoIntlRef** - Reactive geolocation
- **useStorageRef** - Reactive storage
- **useHashRef** - Reactive URL hash
- **useLazyRef** - Lazy loading utilities
- **useTranslateRef** - Reactive translations

### 🔧 Functions (80+)

#### Array & Object utilities
```typescript
// Array operations
toArray, forEach, inArray, uniqueArray, arrFill

// Object operations  
isObjectNotArray, copyObject, getObjectByKeys, replaceRecursive

// Data transformation
transformation, getItemByPath, setValues
```

#### String utilities
```typescript
// Case conversion
toCamelCase, toKebabCase, toCamelCaseFirst

// String manipulation
anyToString, replaceTemplate, strFill, getRandomText
```

#### DOM utilities
```typescript
// Element operations
getElement, createElement, getElementId, setElementItem

// Event handling
eventStopPropagation, getMouseClient, frame

// Scrolling
goScroll, initScrollbarOffset
```

#### Validation utilities
```typescript
// Type checking
isArray, isObject, isString, isNumber, isFunction, isWindow

// Value validation  
isFilled, isFloat, isIntegerBetween, isDifferent
```

## 🎯 Use cases

### Component Development
```typescript
import { toArray, isObjectNotArray, forEach } from '@dxtmisha/functional'

function normalizeProps(props: { items?: string | string[] }) {
  return {
    ...props,
    items: toArray(props.items || []) // Always array
  }
}
```

### Data Processing
```typescript
import { transformation, copyObject, replaceRecursive } from '@dxtmisha/functional'

function mergeConfigs(base: any, override: any) {
  const baseConfig = transformation(base)
  const overrideConfig = transformation(override)
  return replaceRecursive(copyObject(baseConfig), overrideConfig)
}
```

### Vue Application
```typescript
import { useGeoIntlRef, useStorageRef } from '@dxtmisha/functional'

export default {
  setup() {
    const { country, language } = useGeoIntlRef()
    const { value: theme, set: setTheme } = useStorageRef('theme', 'auto')
    
    return { country, language, theme, setTheme }
  }
}
```

## 📁 Export structure

```
@dxtmisha/functional
├── /           # All utilities (classes, composables, functions, types)
├── /flags      # Flag-related utilities  
└── /types/*    # TypeScript type definitions
```

## 🔧 Requirements

- **Node.js**: ≥18.0.0
- **TypeScript**: 4.0+ (optional)
- **Vue**: ≥3.0.0 (optional, only for composables)

## 🤝 Compatibility

| Environment | Support |
|-------------|---------|
| **Browser** | ✅ ES2020+ |
| **Node.js** | ✅ 18+ |
| **Vue.js** | ✅ 3+ (optional) |
| **TypeScript** | ✅ 4+ |
| **Vanilla JS** | ✅ Full support |

## 📊 Bundle size

- **Core utilities**: ~50KB (minified)
- **With tree-shaking**: only imported functions
- **Vue composables**: Optional, only if Vue is used
- **Zero dependencies**: no external runtime dependencies

## 📄 License

MIT © [dxtmisha](https://github.com/dxtmisha)

## 🐛 Report an issue

[GitHub Issues](https://github.com/dxtmisha/dxt-ui/issues)

---

⭐ **Give us a star** if this library was helpful!
