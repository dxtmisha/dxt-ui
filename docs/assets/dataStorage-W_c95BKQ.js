import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-C8vOrmRQ.js";import{M as r}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function a(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/en/Classes/DataStorage"}),`
`,e.jsx(n.h1,{id:"datastorage-class",children:"DataStorage Class"}),`
`,e.jsx(n.p,{children:"Class for working with browser localStorage and sessionStorage with automatic serialization, caching, and singleton pattern. Provides type-safe storage operations with cache time validation and automatic prefix management."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type-safe storage"})," — full TypeScript support with generics for stored data"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dual storage support"})," — works with both localStorage and sessionStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic serialization"})," — JSON serialization/deserialization handled automatically"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cache time validation"})," — optional cache expiration with automatic cleanup"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singleton pattern"})," — reuses instances for same storage keys"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prefix management"})," — configurable prefix for all storage keys (default 'ui-storage')"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Function value support"})," — accepts functions as values for dynamic data generation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Browser compatibility"})," — safe usage with server-side rendering"]}),`
`]}),`
`,e.jsx(n.h2,{id:"configuration",children:"Configuration"}),`
`,e.jsx(n.h3,{id:"static-setprefix",children:e.jsx(n.code,{children:"static setPrefix"})}),`
`,e.jsx(n.p,{children:"Sets the global prefix for all storage keys. Should be called at application startup."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"newPrefix: string"})," — new prefix for storage keys"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"void"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { DataStorage } from '@dxtmisha/functional'

// Set application-wide prefix
DataStorage.setPrefix('myapp-storage')

// All storage keys will now use this prefix:
// 'user-settings' → 'myapp-storage__user-settings'
// Default prefix: 'ui-storage'
`})}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates DataStorage instance for specified key. Uses singleton pattern."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — storage key name"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"isSession?: boolean"})," — use sessionStorage instead of localStorage (default: false)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"DataStorage<T>"})," — class instance (or existing from cache)"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// localStorage instance
const userPrefs = new DataStorage('user-preferences')

// sessionStorage instance
const tempData = new DataStorage('temp-data', true)

// Singleton behavior
const sameInstance = new DataStorage('user-preferences')
console.log(userPrefs === sameInstance) // true
`})}),`
`,e.jsx(n.h2,{id:"data-operations",children:"Data Operations"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Retrieves data from storage with optional default value and cache validation."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — default value or function if no data found (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cache?: number"})," — cache time in ",e.jsx(n.strong,{children:"seconds"})," for validation (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T | undefined"})," — stored data, default value, or undefined"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const settings = new DataStorage('app-settings')

// Get data without default
const theme = settings.get()
console.log(theme) // undefined if no data stored

// Get with default value
const language = settings.get('en')
console.log(language) // 'en' if no stored data, or stored value

// Get with default function
const config = settings.get(() => ({
  theme: 'dark',
  notifications: true,
  created: Date.now()
}))

// Get with cache validation (600 seconds = 10 minutes)
const cachedData = settings.get(null, 600)
// Returns undefined if data older than 10 minutes
// Returns stored data if cache is valid
`})}),`
`,e.jsx(n.h3,{id:"set",children:e.jsx(n.code,{children:"set"})}),`
`,e.jsx(n.p,{children:"Stores data in storage with automatic serialization."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: T | (() => T)"})," — value to store or function that returns value (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T | undefined"})," — stored value"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const userStorage = new DataStorage('user-data')

// Store simple value
const stored = userStorage.set({ name: 'John', age: 30 })
console.log(stored) // { name: 'John', age: 30 }

// Store with function
userStorage.set(() => ({
  timestamp: Date.now(),
  sessionId: Math.random().toString(36)
}))

// Store undefined to clear
userStorage.set(undefined) // Removes from storage
`})}),`
`,e.jsx(n.h3,{id:"remove",children:e.jsx(n.code,{children:"remove"})}),`
`,e.jsx(n.p,{children:"Removes data from storage."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — DataStorage instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const userStorage = new DataStorage('user-data')

// First set data
userStorage.set({ name: 'John', preferences: { theme: 'dark' } })
console.log(userStorage.get()) // { name: 'John', preferences: { theme: 'dark' } }

// Remove
userStorage.remove()
console.log(userStorage.get()) // undefined

// Method chaining
userStorage
  .set({ temp: 'data' })
  .remove() // Removes just saved data
`})}),`
`,e.jsx(n.h3,{id:"update",children:e.jsx(n.code,{children:"update"})}),`
`,e.jsx(n.p,{children:"Updates data from storage by re-reading it."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — DataStorage instance for method chaining"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const storage = new DataStorage('shared-data')

// Set data
storage.set({ value: 'initial' })
console.log(storage.get()) // { value: 'initial' }

// Data changed in another tab/browser window
// or directly via localStorage.setItem()

// Update data from storage
storage.update()
console.log(storage.get()) // Gets actual data from storage

// Method chaining
storage.update().get() // Update and get fresh data
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"user-settings",children:"User Settings"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const settings = new DataStorage('user-settings')

// Get with default value
const theme = settings.get(() => 'light')
console.log(theme) // 'light' or saved value

// Save new value
settings.set('dark')

// Remove settings
settings.remove()
`})}),`
`,e.jsx(n.h3,{id:"data-cache-with-ttl",children:"Data Cache with TTL"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`async function fetchWithCache(url, cacheDuration = 300) {
  const storage = new DataStorage(\`api_\${url}\`)

  // Try to get from cache (cacheDuration in seconds)
  const cached = storage.get(undefined, cacheDuration)
  if (cached) return cached

  // Load fresh data
  const response = await fetch(url)
  const data = await response.json()

  // Save to cache
  storage.set(data)
  return data
}

// Usage
const users = await fetchWithCache('/api/users', 600) // Cache for 10 minutes
`})}),`
`,e.jsx(n.p,{children:"DataStorage class provides a unified interface for working with browser storage, ensuring type safety, automatic serialization, and flexible data lifetime management with singleton pattern support for efficient memory usage."})]})}function g(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{g as default};
