# @dxtmisha/media

🏳️ **Media resources library** containing country flags and geographical data for UI projects.

[![npm version](https://badge.fury.io/js/@dxtmisha%2Fmedia.svg)](https://www.npmjs.com/package/@dxtmisha/media)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

## 🚀 Installation

```bash
npm install @dxtmisha/media
```

## ✨ Features

- 🏳️ **250+ country flags** in high-quality SVG format
- 🌍 **Geographical data** (timezones, phone codes, languages)
- ⚡ **Tree-shaking** support for optimization
- 📦 **TypeScript** full typing support
- 🎯 **ESM** modern ES modules

## 📖 Quick Start

### Import flags

```typescript
// Specific flags (recommended)
import { UsSvg, RuSvg, DeSvg } from '@dxtmisha/media/flags'

// All flags
import flags from '@dxtmisha/media/flags'
const usFlag = flags.UsSvg
```

### Geographical data

```typescript
import { geo } from '@dxtmisha/media'

// Find country by code
const usa = geo.find(country => country.country === 'US')
console.log(usa.phoneCode) // "1"
console.log(usa.zone) // "America/New_York"
```

### Vue.js example

```vue
<template>
  <div class="country-selector">
    <img :src="UsSvg" alt="United States" class="flag" />
    <select v-model="selected">
      <option v-for="country in countries" :value="country.country">
        {{ country.country }} (+{{ country.phoneCode }})
      </option>
    </select>
  </div>
</template>

<script setup>
import { UsSvg } from '@dxtmisha/media/flags'
import { geo } from '@dxtmisha/media'

const countries = geo
const selected = ref('US')
</script>

<style>
.flag { width: 24px; height: 18px; }
</style>
```

## 📚 API

### Country flags

```typescript
import { 
  UsSvg,  // United States
  RuSvg,  // Russia
  DeSvg,  // Germany
  FrSvg,  // France
  GbSvg   // United Kingdom
  // ... all countries ISO 3166-1 alpha-2
} from '@dxtmisha/media/flags'
```

### Geographical data

```typescript
interface GeoData {
  country: string              // "US", "RU", "DE"
  countryAlternative?: string[] // ["EN"]
  language: string            // "en", "ru", "de"
  languageAlternative?: string[]
  firstDay: string | null     // "Su", "Mo" 
  zone: string               // "America/New_York"
  phoneCode: string          // "1", "7", "49"
  phoneMask: string[]        // ["+1-***-***-****"]
}

import { geo } from '@dxtmisha/media'
```

## 🛠️ Practical examples

### Phone input with mask

```javascript
import { geo } from '@dxtmisha/media'

function getPhoneMask(countryCode) {
  const country = geo.find(c => c.country === countryCode)
  return country?.phoneMask?.[0] || ''
}

console.log(getPhoneMask('US')) // "+1-***-***-****"
```

### Group by timezones

```javascript
import { geo } from '@dxtmisha/media'

const timeZones = geo.reduce((acc, country) => {
  if (!acc[country.zone]) acc[country.zone] = []
  acc[country.zone].push(country.country)
  return acc
}, {})
```

### React component with flags

```jsx
import { UsSvg, RuSvg } from '@dxtmisha/media/flags'

function CountryFlag({ code }) {
  const flags = { US: UsSvg, RU: RuSvg }
  return <img src={flags[code]} alt={code} width="24" height="18" />
}
```

## 🌍 Available countries

Package includes flags for **all countries** according to ISO 3166-1 alpha-2 standard:

| Code | Country | Code | Country |
|------|---------|------|---------|
| US | United States | RU | Russia |
| DE | Germany | FR | France |
| GB | United Kingdom | CN | China |
| JP | Japan | IN | India |
| ... | +240 others | ... | ... |

## 📊 Bundle sizes

- **Geographical data**: ~15KB
- **Single flag**: 1-3KB (SVG)
- **With tree-shaking**: only selected flags
- **Entire package**: ~800KB (if importing all flags)

## 🔧 Requirements

- **Node.js**: ≥18.0.0
- **ESM support**: Vite, Webpack 5, Rollup
- **TypeScript**: 4.0+ (optional)

## 📁 Export structure

```
@dxtmisha/media
├── /                 # geo data
├── /flags           # all country flags
├── /types/*         # TypeScript types
└── /types/**/*.d.ts # Subtypes
```

## 🤝 Compatibility

| Technology | Support |
|------------|---------|
| **Vue.js** | ✅ 3+ |
| **React** | ✅ 16+ |
| **Angular** | ✅ 12+ |
| **Svelte** | ✅ 3+ |
| **Vanilla JS** | ✅ ES2020+ |

## 📄 License

MIT © [dxtmisha](https://github.com/dxtmisha)

## 🐛 Report an issue

[GitHub Issues](https://github.com/dxtmisha/dxt-ui/issues)

---

⭐ **Give us a star** if this project was helpful!
