# @dxtmisha/functional-basic

> Core functional utility library for modern web development without framework dependencies

[![npm version](https://badge.fury.io/js/@dxtmisha%2Ffunctional-basic.svg)](https://www.npmjs.com/package/@dxtmisha/functional-basic)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)

A lightweight, framework-agnostic utility library providing essential classes, functions, and types for modern JavaScript/TypeScript development. This is the core package without Vue dependencies, making it perfect for any JavaScript project.

## 📦 Installation

```bash
npm install @dxtmisha/functional-basic
```

```bash
yarn add @dxtmisha/functional-basic
```

```bash
pnpm add @dxtmisha/functional-basic
```

## ✨ Features

- 🏗️ **30+ Utility Classes** — API, Cache, Geo, Datetime, Hash, Cookie, Meta, Icons, and more
- 🔧 **90+ Helper Functions** — for arrays, objects, strings, DOM, validation, and math
- 📝 **TypeScript Types** — full type coverage for all utilities
- ⚡ **Tree-shakeable** — import only what you use
- 🌍 **Geolocation & i18n** — auto-detect country, language, and formatting
- 🎨 **Country Flags** — 200+ flags with localized country names
- 📞 **Phone Masks** — international codes and number formatting
- 💾 **Caching** — intelligent cache system with invalidation
- 🌐 **HTTP Client** — extended API class with caching and loading indicators
- 🚫 **No Framework Dependencies** — works with vanilla JS, React, Vue, or any framework
- 📦 **Zero Dependencies** — no external runtime dependencies

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
} from '@dxtmisha/functional-basic'

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
} from '@dxtmisha/functional-basic'

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
Api.setUrl('/api/')
const users = await Api.get({ path: 'users' })

// Cookie management
const theme = new Cookie('theme')
theme.set('dark')

// LocalStorage wrapper
const settings = new DataStorage('app-settings')
settings.set({ theme: 'dark' })
```

## 📚 API Documentation

### 🏗️ Classes

#### API & Network

**Api** — Static HTTP client with caching, loading indicators, and locale support
```typescript
Api.setUrl('/api/v1')
Api.setHeaders({ Authorization: 'Bearer token' })

const data = await Api.get({ path: 'users' })
const result = await Api.post({ path: 'users', request: { name: 'John' } })
const updated = await Api.put({ path: 'users/123', request: { name: 'Jane' } })
await Api.delete({ path: 'users/123' })
```

**ApiDefault** — Manage default request data
```typescript
const apiDefault = new ApiDefault()
apiDefault.set({ apiKey: 'key-123', version: '1.0' })
const data = apiDefault.get({ userId: '456' }) // merges with defaults
```

**ApiHeaders** — HTTP headers management
```typescript
const headers = new ApiHeaders()
headers.set({ Authorization: 'Bearer token', 'X-Api-Key': 'key-123' })
const requestHeaders = headers.get({ 'Content-Type': 'application/json' })
```

**ApiPreparation** — Request lifecycle hooks
```typescript
const preparation = new ApiPreparation()
preparation.set(async () => {
  // Called before request
  await refreshToken()
})
preparation.setEnd(async (response) => {
  // Called after request
  return { reset: false, data: null }
})
```

**ApiResponse** — Response caching and management
```typescript
const response = new ApiResponse(apiDefault)
response.add({ path: '/users', method: 'GET', response: userData })
const cached = response.get('/users', 'GET')
```

**ApiStatus** — Track API request status
```typescript
const status = new ApiStatus()
status.setStatus(200, 'OK')
status.setError('Network error')
console.log(status.getStatus()) // 200
console.log(status.getError()) // 'Network error'
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
cache.clear() // clear all caches
```

**CacheItem** — Low-level single cache value management
```typescript
const item = new CacheItem(() => computeValue())
const value = item.getCache([dependencies])
item.clearCache()
```

**CacheStatic** — Static cache for global data
```typescript
CacheStatic.set('config', configuration)
const config = CacheStatic.get('config')
CacheStatic.clear('config')
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
Hash.go({ page: 'products', category: 'electronics' })
```

**Global** — Global configuration storage
```typescript
Global.add({ apiUrl: 'https://api.example.com', version: '1.0' })
const apiUrl = Global.get('apiUrl')
Global.set('apiUrl', 'https://new-api.example.com')
```

#### Geolocation & Internationalization

**Geo** — Location detection and geographic data
```typescript
const country = Geo.getCountry() // 'US'
const language = Geo.getLanguage() // 'en'
const standard = Geo.getStandard() // 'en-US'
Geo.set('en-US') // set locale
const info = Geo.get() // full geo information
```

**GeoIntl** — Locale-aware formatting (Intl API)
```typescript
const intl = new GeoIntl('en-US')
const formatted = intl.number(1234.56) // '1,234.56'
const currency = intl.currency(99.99, 'USD') // '$99.99'
const date = intl.date(new Date(), 'short') // '10/15/2024'
const relative = intl.relative(-2, 'day') // '2 days ago'
const percent = intl.percent(0.75) // '75%'
```

**GeoFlag** — Country flags management
```typescript
const flag = new GeoFlag('en-US')
const usa = flag.get('US')
// { country: 'United States', icon: '@flag-us', value: 'US', ... }
const list = flag.getList() // list of all countries
const filtered = flag.getListByFilter('united') // search countries
```

**GeoPhone** — Phone codes and masks
```typescript
const phone = GeoPhone.get('US')
// { phone: 1, within: 1, mask: ['+1 (***) ***-****'], value: 'US' }
const info = GeoPhone.getByPhone('+14155551234')
// detect country by phone number
const list = GeoPhone.getList() // all phone codes
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
const day = dt.getDay()
const hour = dt.getHour()
```

#### Translations & Meta

**Translate** — Translation system with caching
```typescript
const text = await Translate.get('welcome.message')
const withVars = await Translate.get('hello.user', { name: 'John' })
const texts = await Translate.getList(['save', 'cancel', 'submit'])
const cached = Translate.getSync('button.save') // sync from cache
Translate.init(() => import('./translations.json'))
```

**Meta** — HTML meta tags management
```typescript
const meta = new Meta()
meta.set('title', 'Page Title')
meta.set('description', 'Page description')
meta.set('keywords', 'key1, key2, key3')
meta.render() // apply to DOM
```

**MetaManager** — Manage multiple meta instances
```typescript
MetaManager.add('page1', { title: 'Page 1', description: 'First page' })
MetaManager.add('page2', { title: 'Page 2', description: 'Second page' })
MetaManager.render() // render all
```

**MetaOg** — Open Graph meta tags
```typescript
const og = new MetaOg()
og.set('title', 'Share Title')
og.set('description', 'Share description')
og.set('image', 'https://example.com/image.jpg')
og.render()
```

**MetaTwitter** — Twitter Card meta tags
```typescript
const twitter = new MetaTwitter()
twitter.set('title', 'Tweet Title')
twitter.set('description', 'Tweet description')
twitter.set('image', 'https://example.com/image.jpg')
twitter.render()
```

#### Icons & Communication

**Icons** — SVG icon management
```typescript
Icons.add('user', '/icons/user.svg')
const icon = await Icons.get('user')
const autoPath = await Icons.get('@arrow-left') // auto path
if (Icons.is('settings')) { /* icon exists */ }
Icons.addPath('/assets/icons/')
```

**BroadcastMessage** — Cross-tab communication
```typescript
const broadcast = new BroadcastMessage('app-channel')
broadcast.on('update', (data) => console.log('Received:', data))
broadcast.send('update', { userId: 123, action: 'refresh' })
```

#### Events & DOM

**EventItem** — DOM event management
```typescript
const event = new EventItem(element, 'click', handler)
event.start() // start listening
event.stop() // stop listening
event.toggle(true) // enable/disable
```

**ScrollbarWidth** — Detect scrollbar width
```typescript
const width = await ScrollbarWidth.get() // width in px
const shouldHide = await ScrollbarWidth.is() // thin scrollbar?
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
getLengthOfAllArray(...arrays) // total length of arrays
getMaxLengthAllArray(...arrays) // max length
getMinLengthAllArray(...arrays) // min length
```

#### Object Operations

```typescript
copyObject(obj) // deep copy
isObjectNotArray(value) // check object (not array)
getObjectByKeys(obj, keys) // extract by keys
getObjectNoUndefined(obj) // remove undefined
getObjectOrNone(obj) // get object or empty
replaceRecursive(data, search, replace) // recursive replace
setValues(obj, keys, value) // set values
intersectKey(data1, data2) // key intersection
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
encodeAttribute(value) // encode for HTML attribute
```

#### DOM Operations

```typescript
getElement(selector) // get element
createElement(parent, tag, options) // create element
getElementId(element) // get/generate ID
getAttributes(element) // get attributes
setElementItem(element, name, value) // set attribute
getElementItem(element, name) // get attribute
getElementOrWindow(element) // get element or window
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
isSelectedByList(list, value) // check in list
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
secondToTime(seconds) // seconds to time format
```

#### Execution Utilities

```typescript
executeFunction(callback) // execute function or return value
executePromise(callback) // async execution
frame(callback, next, end) // requestAnimationFrame loop
```

#### Data Operations

```typescript
getItemByPath(obj, path) // get by path
getExp(value, flags) // create RegExp with escaping
getRequestString(data) // object to query string
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
FunctionArgs<Args, Return> // typed function
FunctionReturn<R> // () => R
ObjectOrArray<T> // Record | T[]
ItemList // Record<string, any>
ElementOrString<E> // E | string | Window

// API types
ApiMethodItem // enum: GET, POST, PUT, DELETE
ApiMethod // HTTP method type
ApiFetch // API request options
ApiPreparationEnd // preparation callback result
ApiDefaultValue // default request data
ApiStatusItem // status information
ApiResponseItem // response cache item

// Geo types
GeoItemFull // full country information
GeoFlagItem // flag information
GeoPhoneValue // phone data
GeoDate // date format types

// Meta types
MetaItemType // meta tag types
MetaManagerItemType // meta manager item
```

## 🎯 Usage Examples

### Caching Expensive Operations

```typescript
import { Cache } from '@dxtmisha/functional-basic'

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
import { GeoIntl } from '@dxtmisha/functional-basic'

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

### REST API Client

```typescript
import { Api } from '@dxtmisha/functional-basic'

// Setup
Api.setUrl('/api/v1')
Api.setHeaders({
  Authorization: 'Bearer token',
  'Content-Type': 'application/json'
})

// GET request
const users = await Api.get({ path: 'users' })

// POST with data
const newUser = await Api.post({
  path: 'users',
  request: { name: 'John Doe', email: 'john@example.com' }
})

// PUT
await Api.put({
  path: 'users/123',
  request: { name: 'Jane Doe' }
})

// DELETE
await Api.delete({ path: 'users/123' })

// With query parameters
const filtered = await Api.get({
  path: 'users',
  request: { role: 'admin', active: true }
})
// GET /api/v1/users?role=admin&active=true
```

### URL Hash Management

```typescript
import { Hash } from '@dxtmisha/functional-basic'

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

// Bulk update
Hash.go({ page: 'checkout', step: '1' })
```

### Meta Tags Management

```typescript
import { Meta, MetaOg, MetaTwitter } from '@dxtmisha/functional-basic'

// Basic meta tags
const meta = new Meta()
meta.set('title', 'My Awesome Page')
meta.set('description', 'This is an awesome page description')
meta.set('keywords', 'awesome, page, example')
meta.render()

// Open Graph
const og = new MetaOg()
og.set('title', 'Share Title')
og.set('description', 'Share description for social media')
og.set('image', 'https://example.com/share-image.jpg')
og.set('url', 'https://example.com/page')
og.render()

// Twitter Card
const twitter = new MetaTwitter()
twitter.set('title', 'Tweet Title')
twitter.set('description', 'Tweet description')
twitter.set('image', 'https://example.com/twitter-image.jpg')
twitter.render()
```

### Cross-Tab Communication

```typescript
import { BroadcastMessage } from '@dxtmisha/functional-basic'

const channel = new BroadcastMessage('app-sync')

// Listen for messages
channel.on('user-updated', (data) => {
  console.log('User updated in another tab:', data)
  updateUI(data)
})

// Send message to all tabs
channel.send('user-updated', {
  userId: 123,
  name: 'John Doe',
  timestamp: Date.now()
})
```

### Date Operations

```typescript
import { Datetime } from '@dxtmisha/functional-basic'

const dt = new Datetime('2024-10-15 14:30:00', 'full', 'en-US')

// Formatting
console.log(dt.format('YYYY-MM-DD')) // '2024-10-15'
console.log(dt.format('DD/MM/YYYY HH:mm')) // '15/10/2024 14:30'
console.log(dt.toIso()) // '2024-10-15T14:30:00.000Z'

// Manipulation
dt.moveByDay(7) // +7 days
dt.moveByMonth(-1) // -1 month
dt.moveByHour(3) // +3 hours

// Getters
console.log(dt.getYear()) // 2024
console.log(dt.getMonth()) // 10
console.log(dt.getDay()) // 15
console.log(dt.getDayWeek()) // 2 (Tuesday)
```

## 📁 Export Structure

```
@dxtmisha/functional-basic
├── /                    # All utilities (recommended)
└── /types/*             # TypeScript types
```

## 🔧 Requirements

- **Node.js**: ≥18.0.0
- **TypeScript**: 4.0+ (optional)
- **No Framework Required**: Works with vanilla JS or any framework

## 🤝 Compatibility

| Environment | Support |
|-------------|---------|
| **Browsers** | ✅ ES2020+ (Chrome 80+, Firefox 72+, Safari 13.1+, Edge 80+) |
| **Node.js** | ✅ 18+ |
| **TypeScript** | ✅ 4+ |
| **Vanilla JS** | ✅ Full support |
| **React** | ✅ Full support |
| **Vue** | ✅ Full support |
| **Angular** | ✅ Full support |
| **SSR** | ✅ With environment checks |

## 📊 Bundle Size

- **Full library**: ~90KB (minified)
- **With tree-shaking**: only used functions are imported
- **Minimal import**: ~1KB (single function)
- **Dependencies**: zero runtime dependencies

## 🎯 Tree-shaking

The library fully supports tree-shaking:

```typescript
// ❌ Bad - imports entire library
import * as functional from '@dxtmisha/functional-basic'

// ✅ Good - imports only what's needed
import { toArray, forEach, Cache } from '@dxtmisha/functional-basic'
```

## 🏆 Advantages

- ✅ **Full TypeScript support** — TypeScript out of the box
- ✅ **Zero dependencies** — no external runtime dependencies
- ✅ **Framework agnostic** — works with any framework or vanilla JS
- ✅ **Tree-shakeable** — optimal bundle size
- ✅ **SSR friendly** — safe for server-side rendering
- ✅ **Comprehensive** — everything you need in one library
- ✅ **Well tested** — comprehensive test coverage
- ✅ **Well documented** — complete API documentation
- ✅ **Production ready** — used in production projects
- ✅ **Regular updates** — active development and support

## 📖 Difference from @dxtmisha/functional

- **@dxtmisha/functional-basic**: Core utilities without Vue dependencies
- **@dxtmisha/functional**: Includes Vue composables and reactive utilities

Use `functional-basic` if:
- You're not using Vue.js
- You want minimal dependencies
- You're building a library
- You need maximum compatibility

Use `functional` if:
- You're building a Vue.js application
- You want reactive composables
- You need Vue-specific utilities

## 📖 Additional Documentation

- [GitHub Repository](https://github.com/dxtmisha/dxt-ui)
- [Full API Documentation](https://github.com/dxtmisha/dxt-ui/tree/main/packages/wiki/src/media/functional-basic)
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

