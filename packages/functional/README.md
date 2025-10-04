# @dxtmisha/functional

> Comprehensive functional utility library for modern web development

[![npm version](https://badge.fury.io/js/@dxtmisha%2Ffunctional.svg)](https://www.npmjs.com/package/@dxtmisha/functional)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

A powerful utility library for DXT UI ecosystem, providing classes, composables, functions, and types for modern development with TypeScript and Vue 3. Full tree-shaking support, works with or without Vue.

## 📦 Installation

```bash
npm install @dxtmisha/functional
```

```bash
yarn add @dxtmisha/functional
```

```bash
pnpm add @dxtmisha/functional
```

## ✨ Features

- 🏗️ **20+ Utility Classes** — Api, Cache, Geo, Datetime, Hash, Cookie, DataStorage, and more
- 🎯 **10+ Vue Composables** — useApiRef, useGeoIntlRef, useStorageRef, useHashRef, and more
- 🔧 **100+ Helper Functions** — for arrays, objects, strings, DOM, validation, and math
- 📝 **TypeScript Types** — full type coverage for all utilities
- ⚡ **Tree-shakeable** — import only what you use
- 🌍 **Geolocation & i18n** — auto-detect country, language, and formatting
- 🎨 **Country Flags** — 200+ flags with localized country names
- 📞 **Phone Masks** — international codes and number formatting
- 💾 **Caching** — intelligent cache system with invalidation
- 🌐 **HTTP Client** — extended API class with caching and loading indicators
- 📦 **Optional Vue Integration** — works with or without Vue

## 🚀 Quick Start

### Utility Functions

```typescript
import {
  toArray,
  forEach,
  toCamelCase,
  toKebabCase,
  transformation,
  copyObject,
  isFilled
} from '@dxtmisha/functional'

// Array operations
const items = toArray('single') // ['single']
forEach([1, 2, 3], (item) => console.log(item))

// String case transformations
const camel = toCamelCase('my-variable-name') // 'myVariableName'
const kebab = toKebabCase('myVariableName') // 'my-variable-name'

// Object operations
const data = transformation('{"name":"test"}') // { name: 'test' }
const copy = copyObject({ deep: { object: true } })

// Validation
if (isFilled(value)) {
  // value is not empty
}
```

### Utility Classes

```typescript
import {
  Cache,
  Datetime,
  Geo,
  Hash,
  Api,
  Cookie,
  DataStorage
} from '@dxtmisha/functional'

// Caching
const cache = new Cache()
const userData = cache.get('user', () => fetchUser())

// Date operations
const datetime = new Datetime('2024-10-15')
const formatted = datetime.format('YYYY-MM-DD HH:mm')

// Geolocation
const country = Geo.getCountry() // 'US'
const language = Geo.getLanguage() // 'en'

// URL Hash management
Hash.set('userId', '12345')
const userId = Hash.get('userId')

// HTTP requests
const api = new Api('/api')
const users = await api.get('/users')

// Cookie management
const theme = new Cookie('theme')
theme.set('dark')

// LocalStorage wrapper
const settings = new DataStorage('app-settings')
settings.set({ theme: 'dark' })
```

### Vue Composables (Optional)

```typescript
import {
  useGeoIntlRef,
  useStorageRef,
  useApiRef,
  useHashRef,
  useTranslateRef
} from '@dxtmisha/functional'

export default {
  setup() {
    // Reactive geolocation
    const { country, language } = useGeoIntlRef()

    // Reactive storage
    const { value: theme, set: setTheme } = useStorageRef('theme', 'light')

    // Reactive API requests
    const { data, loading, error } = useApiRef('/api/users')

    // Reactive URL hash
    const { hash, setHash } = useHashRef()

    // Reactive translations
    const { t } = useTranslateRef()

    return { country, language, theme, setTheme, data, loading }
  }
}
```

## 📚 API Documentation

### 🏗️ Classes

#### API & Network

**Api** — HTTP client with caching, loading indicators, and locale support
```typescript
Api.setUrl('/api/v1')
Api.setHeaders({ 'Authorization': 'Bearer token' })
const api = new Api()
const data = await api.get('/users')
const result = await api.post('/users', { name: 'John' })
```

**Loading** — Global loading indicator management
```typescript
Loading.show() // show loading
Loading.hide() // hide loading
if (Loading.is()) { /* is loading */ }
```

#### Caching

**Cache** — Manage multiple caches with automatic invalidation
```typescript
const cache = new Cache()
const data = cache.get('key', () => expensiveOperation(), [dep1, dep2])
const asyncData = await cache.getAsync('key', async () => await fetch())
```

**CacheItem** — Low-level single cache value management
```typescript
const item = new CacheItem(() => computeValue())
const value = item.getCache([dependencies])
```

**CacheStatic** — Static cache for global data
```typescript
CacheStatic.set('config', configuration)
const config = CacheStatic.get('config')
```

#### Data Storage

**Cookie** — Cookie management with automatic serialization
```typescript
const theme = new Cookie('theme')
theme.set('dark', { age: 365 * 24 * 60 * 60 }) // 1 year
const value = theme.get('light') // with default
theme.remove()
```

**CookieBlock** — Cookie consent management
```typescript
CookieBlock.set(true) // allow cookies
if (CookieBlock.isBlock()) { /* cookies blocked */ }
```

**DataStorage** — LocalStorage/SessionStorage wrapper
```typescript
const storage = new DataStorage('settings')
storage.set({ theme: 'dark', lang: 'en' })
const settings = storage.get({ theme: 'light' }) // with default
storage.clear()
```

**Hash** — URL hash parameter management
```typescript
Hash.set('page', 'home')
Hash.set('userId', '123')
const page = Hash.get('page', 'home')
Hash.addWatch('theme', (theme) => applyTheme(theme))
```

**Global** — Global configuration storage
```typescript
Global.add({ apiUrl: 'https://api.example.com', version: '1.0' })
const apiUrl = Global.get('apiUrl')
```

#### Geolocation & Internationalization

**Geo** — Location detection and geographic data
```typescript
const country = Geo.getCountry() // 'US'
const language = Geo.getLanguage() // 'en'
const standard = Geo.getStandard() // 'en-US'
Geo.set('en-US') // set locale
```

**GeoIntl** — Locale-aware formatting (Intl API)
```typescript
const intl = new GeoIntl('en-US')
const formatted = intl.number(1234.56) // '1,234.56'
const currency = intl.currency(99.99, 'USD') // '$99.99'
const date = intl.date(new Date(), 'short') // '10/15/2024'
const relative = intl.relative(-2, 'day') // '2 days ago'
```

**GeoFlag** — Country flags management
```typescript
const flag = new GeoFlag('en-US')
const usa = flag.get('US')
// { country: 'United States', icon: '@flag-us', value: 'US', ... }
const list = flag.getList() // list of all countries
```

**GeoPhone** — Phone codes and masks
```typescript
const phone = GeoPhone.get('US')
// { phone: 1, within: 1, mask: ['+1 (***) ***-****'], value: 'US' }
const info = GeoPhone.getByPhone('+14155551234')
// detect country by phone number
```

#### Date & Time

**Datetime** — Date operations and formatting
```typescript
const dt = new Datetime('2024-10-15', 'full', 'en-US')
const formatted = dt.format('YYYY-MM-DD HH:mm:ss')
const iso = dt.toIso() // ISO 8601 format
dt.moveByDay(5) // +5 days
dt.moveByMonth(-1) // -1 month
const year = dt.getYear()
const month = dt.getMonth()
```

#### Translations

**Translate** — Translation system with caching
```typescript
const text = await Translate.get('welcome.message')
const withVars = await Translate.get('hello.user', { name: 'John' })
const texts = await Translate.getList(['save', 'cancel', 'submit'])
const cached = Translate.getSync('button.save') // sync from cache
```

#### Icons

**Icons** — SVG icon management
```typescript
Icons.add('user', '/icons/user.svg')
const icon = await Icons.get('user')
const autoPath = await Icons.get('@arrow-left') // auto path
if (Icons.is('settings')) { /* icon exists */ }
```

#### Events

**EventItem** — DOM event management
```typescript
const event = new EventItem(element, 'click', handler)
event.start() // start listening
event.stop() // stop listening
event.toggle(true) // enable/disable
```

#### Utilities

**ScrollbarWidth** — Detect scrollbar width
```typescript
const width = await ScrollbarWidth.get() // width in px
const shouldHide = await ScrollbarWidth.is() // thin scrollbar?
```

### 🎯 Vue Composables

**useApiRef** — Reactive HTTP requests
```typescript
const { data, loading, error, reload } = useApiRef('/api/users')
```

**useCookieRef** — Reactive cookies
```typescript
const { value, set } = useCookieRef('theme', 'light')
```

**useGeoIntlRef** — Reactive geolocation
```typescript
const { country, language, intl } = useGeoIntlRef()
```

**useHashRef** — Reactive URL hash
```typescript
const { hash, setHash } = useHashRef()
const userId = useHashRef('userId', '0')
```

**useLazyRef** — Lazy data loading
```typescript
const { value, load, loading } = useLazyRef(async () => await fetchData())
```

**useLoadingRef** — Reactive loading state
```typescript
const { loading, is, show, hide } = useLoadingRef()
```

**useSessionRef** — Reactive sessionStorage
```typescript
const { value, set } = useSessionRef('tempData', {})
```

**useStorageRef** — Reactive localStorage
```typescript
const { value, set, clear } = useStorageRef('settings', { theme: 'dark' })
```

**useTranslateRef** — Reactive translations
```typescript
const { t, locale, setLocale } = useTranslateRef()
const text = t('welcome.message')
```

### 🔧 Functions

#### Array Operations

```typescript
toArray(value) // convert to array
arrFill(value, count) // create array with repetitions
forEach(data, callback) // universal iteration
uniqueArray(array) // remove duplicates
inArray(array, value) // check presence
getColumn(array, column) // extract column
splice(array, start, count) // immutable splice
```

#### Object Operations

```typescript
copyObject(obj) // deep copy
isObjectNotArray(value) // check object (not array)
getObjectByKeys(obj, keys) // extract by keys
getObjectNoUndefined(obj) // remove undefined
replaceRecursive(data, search, replace) // recursive replace
setValues(obj, keys, value) // set values
```

#### String Operations

```typescript
toCamelCase(str) // to camelCase
toKebabCase(str) // to kebab-case
toCamelCaseFirst(str) // capitalize first
anyToString(value) // universal string conversion
strFill(value, length, fill) // fill string
replaceTemplate(str, replacements) // replace templates
applyTemplate(text, data) // apply template
getRandomText(min, max) // generate random text
```

#### DOM Operations

```typescript
getElement(selector) // get element
createElement(parent, tag, options) // create element
getElementId(element) // get/generate ID
getAttributes(element) // get attributes
setElementItem(element, name, value) // set attribute
domQuerySelector(selector) // safe querySelector
domQuerySelectorAll(selector) // safe querySelectorAll
goScroll(element, options) // smooth scroll
initScrollbarOffset() // scrollbar compensation
```

#### Events

```typescript
eventStopPropagation(event) // stop propagation
getKey(event) // get pressed key
getMouseClient(event) // mouse/touch coordinates
getMouseClientX(event) // X coordinate
getMouseClientY(event) // Y coordinate
getClipboardData(event) // clipboard data
writeClipboardData(text) // write to clipboard
```

#### Validation

```typescript
isFilled(value) // check if filled
isArray(value) // check array
isObject(value) // check object
isString(value) // check string
isNumber(value) // check number
isFunction(value) // check function
isFloat(value) // check float
isIntegerBetween(value, min, max) // check range
isDifferent(value1, value2) // check difference
isNull(value) // check null/undefined
isDomRuntime() // check browser environment
isWindow(element) // check window
isInDom(element) // check if in DOM
isSelected(value, check) // check selection
```

#### Math Operations

```typescript
random(min, max) // random number
getStepPercent(value, min, max) // percent from range
getStepValue(percent, min, max) // value by percent
toNumber(value) // convert to number
toNumberByMax(value, max) // with limit
toPercent(value) // to percent
toPercentBy100(value) // to percent (divide by 100)
```

#### Conversions

```typescript
transformation(value) // universal conversion
toDate(value) // to Date object
toBind(extra, value) // merge props
toBinds(list) // merge props list
secondToTime(seconds) // seconds to time format
```

#### Execution Utilities

```typescript
executeFunction(callback) // execute function or return value
executePromise(callback) // async execution
executeUse(callback, options) // caching for Vue composables
frame(callback, next, end) // requestAnimationFrame loop
```

#### Data Operations

```typescript
getItemByPath(obj, path) // get by path
getExp(value, flags) // create RegExp with escaping
getRequestString(data) // object to query string
getLengthOfAllArray(arrays) // total length of arrays
getMaxLengthAllArray(arrays) // max length
getMinLengthAllArray(arrays) // min length
intersectKey(data1, data2) // key intersection
```

#### Vue Utilities

```typescript
getRef(value) // get ref value
setRef(target, value) // set ref value
toRefItem(callback) // convert to ref
toComputed(callback) // create computed
getComputedAsync(callback) // async computed
getBindRef(extra, value) // reactive props merge
render(callback) // render with tracking
getBind(props, options) // get bind attributes
getClassName(classes) // merge classes
getIndexForRender(array) // indexes for render
```

### 📝 TypeScript Types

```typescript
// Basic types
Undefined // undefined | null
EmptyValue // all "empty" values
NumberOrString // number | string
NumberOrStringOrBoolean // number | string | boolean
NumberOrStringOrDate // number | string | Date
NormalOrArray<T> // T | T[]
NormalOrPromise<T> // T | Promise<T>
FunctionArgs<Args, Return> // typed function
FunctionReturn<R> // () => R
ObjectOrArray<T> // Record | T[]
ItemList // Record<string, any>
ElementOrString<E> // E | string | Window

// Geo types
GeoItemFull // full country information
GeoFlagItem // flag information
GeoPhoneValue // phone data
GeoDate // date format types

// List types
ConversionType // conversion types
DataOrCallbackType<T> // data or callback

// Ref types (Vue)
RefOrNormal<T> // Ref<T> | T
RefOrNormalOrCallback<T> // Ref<T> | T | (() => T)
ConversionRefType<T> // ref conversion type

// Constructor types
ClassesItemType // class element types
PropsValueType // props value types
```

## 🎯 Usage Examples

### Caching Expensive Operations

```typescript
import { Cache } from '@dxtmisha/functional'

const cache = new Cache()
let userId = 1

// Data is cached on first call
const userData = cache.get(
  'user-data',
  () => {
    console.log('Loading user data...')
    return fetchUserData(userId)
  },
  [userId] // dependencies for invalidation
)

// When userId changes, cache invalidates
userId = 2
const newUserData = cache.get('user-data', () => fetchUserData(userId), [userId])
```

### Locale-Aware Formatting

```typescript
import { GeoIntl } from '@dxtmisha/functional'

const intl = new GeoIntl('en-US')

// Numbers
console.log(intl.number(1234567.89)) // '1,234,567.89'

// Currency
console.log(intl.currency(99.99, 'USD')) // '$99.99'

// Dates
console.log(intl.date(new Date(), 'long')) // 'October 15, 2024'

// Relative time
console.log(intl.relative(-2, 'day')) // '2 days ago'

// Plural forms
console.log(intl.plural(5, ['item', 'items'])) // '5 items'
```

### REST API with Caching

```typescript
import { Api } from '@dxtmisha/functional'

// Setup
Api.setUrl('/api/v1')
Api.setHeaders({
  'Authorization': 'Bearer token',
  'Content-Type': 'application/json'
})

// Usage
const api = new Api()

// GET with caching
const users = await api.request('/users', { cache: 3600 }) // cache for 1 hour

// POST
const newUser = await api.post('/users', {
  name: 'John Doe',
  email: 'john@example.com'
})

// PUT
await api.put('/users/123', { name: 'Jane Doe' })

// DELETE
await api.delete('/users/123')
```

### URL Parameters via Hash

```typescript
import { Hash } from '@dxtmisha/functional'

// Set parameters
Hash.set('page', 'products')
Hash.set('category', 'electronics')
Hash.set('sort', 'price')

// URL becomes: #page:products/category:electronics/sort:price

// Get parameters
const page = Hash.get('page', 'home')
const category = Hash.get('category')

// Watch for changes
Hash.addWatch('page', (newPage) => {
  console.log(`Page changed to: ${newPage}`)
  loadPageContent(newPage)
})
```

### Reactive State in Vue

```typescript
import { useStorageRef, useGeoIntlRef } from '@dxtmisha/functional'

export default {
  setup() {
    // Reactive localStorage with auto-save
    const { value: settings, set: setSettings } = useStorageRef('app-settings', {
      theme: 'dark',
      notifications: true,
      language: 'en'
    })

    // Reactive geolocation
    const { country, language, intl } = useGeoIntlRef()

    // Format with locale awareness
    const formatPrice = (price: number) => {
      return intl.value.currency(price, 'USD')
    }

    const toggleTheme = () => {
      setSettings({
        ...settings.value,
        theme: settings.value.theme === 'dark' ? 'light' : 'dark'
      })
    }

    return {
      settings,
      country,
      language,
      formatPrice,
      toggleTheme
    }
  }
}
```

## 📁 Export Structure

```
@dxtmisha/functional
├── /                    # All utilities (recommended)
├── /flags               # Flag utilities
└── /types/*             # TypeScript types
```

## 🔧 Requirements

- **Node.js**: ≥18.0.0
- **TypeScript**: 4.0+ (optional)
- **Vue**: ≥3.0.0 (optional, only for composables)

## 🤝 Compatibility

| Environment | Support |
|-------------|---------|
| **Browsers** | ✅ ES2020+ (Chrome 80+, Firefox 72+, Safari 13.1+, Edge 80+) |
| **Node.js** | ✅ 18+ |
| **Vue.js** | ✅ 3+ (optional) |
| **TypeScript** | ✅ 4+ |
| **Vanilla JS** | ✅ Full support |
| **SSR** | ✅ With environment checks |

## 📊 Bundle Size

- **Full library**: ~120KB (minified)
- **With tree-shaking**: only used functions are imported
- **Minimal import**: ~2KB (single function)
- **Vue composables**: optional, only when using Vue
- **Dependencies**: no runtime dependencies

## 🎯 Tree-shaking

The library fully supports tree-shaking:

```typescript
// ❌ Bad - imports entire library
import * as functional from '@dxtmisha/functional'

// ✅ Good - imports only what's needed
import { toArray, forEach, Cache } from '@dxtmisha/functional'
```

## 🏆 Advantages

- ✅ **Full TypeScript support** — TypeScript out of the box
- ✅ **Zero dependencies** — no external runtime dependencies
- ✅ **Tree-shakeable** — optimal bundle size
- ✅ **SSR friendly** — safe for server-side rendering
- ✅ **Vue optional** — works with or without Vue
- ✅ **Comprehensive** — everything you need in one library
- ✅ **Well documented** — complete documentation
- ✅ **Production ready** — used in production projects
- ✅ **Regular updates** — active development and support

## 📖 Additional Documentation

- [GitHub Repository](https://github.com/dxtmisha/dxt-ui)
- [Full API Documentation](https://github.com/dxtmisha/dxt-ui/tree/main/packages/wiki/src/media/functional)
- [DXT UI Documentation](https://dxtmisha.github.io/dxt-ui/)

## 🐛 Report Issues

If you found a bug or want to suggest an improvement:

- [GitHub Issues](https://github.com/dxtmisha/dxt-ui/issues)

## 📄 License

MIT © [dxtmisha](https://github.com/dxtmisha)

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## ⭐ Support the Project

If this library was helpful, please star it on [GitHub](https://github.com/dxtmisha/dxt-ui)!

---

Made with ❤️ by [dxtmisha](https://github.com/dxtmisha)
