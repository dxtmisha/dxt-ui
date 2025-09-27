# @dxt-ui/media

Библиотека медиа-ресурсов для DXT UI, содержащая флаги стран и географические данные.

## Содержимое

### 🏳️ Флаги стран
Полная коллекция SVG-флагов всех стран мира в формате ISO 3166-1 alpha-2 (двухбуквенные коды стран).

**Особенности:**
- 🎨 SVG векторные изображения высокого качества
- 📏 Единый стиль и размер для всех флагов
- 🌍 Поддержка всех стран и территорий (250+ флагов)
- ⚡ Tree-shaking поддержка для оптимизации

### 🌎 Географические данные
JSON-файл с информацией о странах, включая локализацию, временные зоны и телефонные коды.

## Установка

```bash
npm install @dxt-ui/media
```

## Использование

### Импорт флагов

```typescript
// Импорт всех флагов (объект с флагами)
import flags from '@dxt-ui/media/flags'

// Использование конкретного флага
const usFlag = flags.UsSvg
const ruFlag = flags.RuSvg

// Или прямой импорт конкретного флага (рекомендуется для tree-shaking)
import { UsSvg, RuSvg, DeSvg } from '@dxt-ui/media/flags'
```

### Импорт географических данных

```typescript
import { geo } from '@dxt-ui/media'

// geo содержит массив объектов с данными о странах
console.log(geo) // [{ country: "US", language: "en", zone: "America/New_York", ... }]
```

### Использование в Vue компонентах

```vue
<template>
  <div class="country-selector">
    <!-- Статический флаг -->
    <img :src="UsSvg" alt="США" class="flag" />
    
    <!-- Динамический выбор флага -->
    <img :src="getFlag(selectedCountry)" :alt="selectedCountry" class="flag" />
    
    <!-- Селектор стран -->
    <select v-model="selectedCountry">
      <option 
        v-for="country in countries" 
        :key="country.country"
        :value="country.country"
      >
        {{ country.country }} - {{ country.language }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { UsSvg, RuSvg, DeSvg } from '@dxt-ui/media/flags'
import { geo } from '@dxt-ui/media'

const selectedCountry = ref('US')
const countries = ref(geo)

// Карта флагов для динамического доступа
const flagMap = {
  US: UsSvg,
  RU: RuSvg,
  DE: DeSvg,
  // ... добавить нужные флаги
}

const getFlag = (countryCode: string) => {
  return flagMap[countryCode as keyof typeof flagMap] || UsSvg
}
</script>

<style scoped>
.flag {
  width: 32px;
  height: 24px;
  object-fit: cover;
}
</style>
```

### Работа с географическими данными

```typescript
import { geo } from '@dxt-ui/media'

// Получение информации о стране по коду
const getCountryInfo = (countryCode: string) => {
  return geo.find(country => country.country === countryCode)
}

// Пример использования
const usaInfo = getCountryInfo('US')
console.log(usaInfo)
// {
//   country: "US",
//   countryAlternative: ["EN"],
//   language: "en", 
//   languageAlternative: ["us"],
//   firstDay: "Su",
//   zone: "America/New_York",
//   phoneCode: "1",
//   phoneMask: ["+1-***-***-****"]
// }

// Получение всех стран с определенным языком
const getCountriesByLanguage = (lang: string) => {
  return geo.filter(country => country.language === lang)
}

// Получение телефонной маски для страны
const getPhoneMask = (countryCode: string) => {
  const country = getCountryInfo(countryCode)
  return country?.phoneMask?.[0] || ''
}
```

## API

### Флаги

```typescript
// Все доступные флаги экспортируются как именованные экспорты
import {
  AdSvg, // Андорра
  AeSvg, // ОАЭ
  AfSvg, // Афганистан
  UsSvg, // США
  RuSvg, // Россия
  DeSvg, // Германия
  // ... и многие другие
} from '@dxt-ui/media/flags'

// Или импорт всех флагов как объект
import flags from '@dxt-ui/media/flags'
const usFlag = flags.UsSvg
```

### Географические данные

```typescript
interface GeoData {
  country: string                    // ISO код страны (US, RU, DE)
  countryAlternative?: string[]      // Альтернативные коды
  language: string                   // Основной язык (en, ru, de)
  languageAlternative?: string[]     // Альтернативные языки
  firstDay: string | null           // Первый день недели (Su, Mo)
  zone: string                      // Временная зона (America/New_York)
  phoneCode: string                 // Телефонный код (1, 7, 49)
  phoneMask: string[]               // Маски для телефона (["+1-***-***-****"])
}

// Импорт данных
import { geo } from '@dxt-ui/media'
const geoData: GeoData[] = geo
```

## Примеры использования

### 1. Селектор стран с флагами

```vue
<template>
  <div class="country-picker">
    <div 
      v-for="country in displayCountries" 
      :key="country.country"
      class="country-item"
      @click="selectCountry(country.country)"
    >
      <img :src="getCountryFlag(country.country)" class="flag" />
      <span>{{ country.country }}</span>
      <small>({{ country.language }})</small>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { UsSvg, RuSvg, DeSvg, FrSvg, EsSvg } from '@dxt-ui/media/flags'
import { geo } from '@dxt-ui/media'

// Ограниченный набор поддерживаемых стран
const supportedFlags = {
  US: UsSvg, RU: RuSvg, DE: DeSvg, 
  FR: FrSvg, ES: EsSvg
}

const displayCountries = computed(() => 
  geo.filter(country => country.country in supportedFlags)
)

const getCountryFlag = (code: string) => {
  return supportedFlags[code as keyof typeof supportedFlags]
}

const selectCountry = (code: string) => {
  console.log('Выбрана страна:', code)
}
</script>
```

### 2. Телефонное поле с автоматической маской

```vue
<template>
  <div class="phone-input">
    <select v-model="selectedCountry" @change="updatePhoneMask">
      <option 
        v-for="country in countries" 
        :key="country.country"
        :value="country.country"
      >
        +{{ country.phoneCode }} {{ country.country }}
      </option>
    </select>
    
    <input 
      v-model="phoneNumber"
      :placeholder="currentMask"
      type="tel"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { geo } from '@dxt-ui/media'

const selectedCountry = ref('US')
const phoneNumber = ref('')
const countries = ref(geo)

const currentCountryData = computed(() => 
  geo.find(c => c.country === selectedCountry.value)
)

const currentMask = computed(() => 
  currentCountryData.value?.phoneMask?.[0] || ''
)

const updatePhoneMask = () => {
  phoneNumber.value = '' // Очистить при смене страны
}
</script>
```

### 3. Карта временных зон

```typescript
import { geo } from '@dxt-ui/media'

// Группировка стран по временным зонам
const getCountriesByTimezone = () => {
  const timezoneMap = new Map<string, string[]>()
  
  geo.forEach(country => {
    const zone = country.zone
    if (!timezoneMap.has(zone)) {
      timezoneMap.set(zone, [])
    }
    timezoneMap.get(zone)?.push(country.country)
  })
  
  return timezoneMap
}

// Получение текущего времени для страны
const getCountryTime = (countryCode: string) => {
  const country = geo.find(c => c.country === countryCode)
  if (!country) return null
  
  return new Intl.DateTimeFormat('en-US', {
    timeZone: country.zone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(new Date())
}
```

## Список доступных стран

Пакет включает флаги для всех стран по стандарту ISO 3166-1 alpha-2:

**Популярные страны:**
- `US` - США
- `RU` - Россия  
- `DE` - Германия
- `FR` - Франция
- `GB` - Великобритания
- `CN` - Китай
- `JP` - Япония
- `IN` - Индия
- `BR` - Бразилия
- `CA` - Канада

И более 240 других стран и территорий.

## Структура файлов

```
packages/media/
├── src/
│   ├── flags.ts              # Экспорт всех флагов
│   ├── library.ts            # Основной экспорт (geo данные)
│   ├── assets/
│   │   └── flags/           # SVG флаги (AD.svg, AE.svg, ...)
│   └── media/
│       └── geo.json         # Географические данные
├── dist/                    # Собранные файлы
└── package.json            # Конфигурация пакета
```

## Особенности

- **🎯 Tree-shaking**: Импортируйте только нужные флаги
- **📦 Легковесность**: Geo данные ~15KB, каждый флаг ~1-3KB
- **🔧 TypeScript**: Полная типизация всех экспортов
- **🎨 Качество**: SVG флаги в векторном формате
- **🌍 Полнота**: Поддержка всех стран и территорий
- **⚡ Производительность**: Оптимизированные SVG файлы

## Размеры

- **Geo данные**: ~15KB
- **Один флаг**: 1-3KB (SVG)
- **Все флаги**: ~800KB (при импорте всех)
- **Рекомендуется**: импортировать только нужные флаги

## Совместимость

- Vue 3+
- Vite
- TypeScript 4+
- Все современные бандлеры с поддержкой ES modules
- Node.js 18+

## Лицензия

MIT
