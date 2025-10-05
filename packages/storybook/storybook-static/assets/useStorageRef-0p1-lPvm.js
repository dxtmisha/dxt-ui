import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DB_maGql.js";import{M as r}from"./blocks-BL7C26xN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CpPdPYqc.js";function t(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/functional/en/Composables/useStorageRef"}),`
`,e.jsx(n.h1,{id:"composable-usestorageref",children:"Composable useStorageRef"}),`
`,e.jsx(n.p,{children:"Composable for creating a reactive variable synchronized with localStorage. Automatically manages reading and writing values to browser local storage with caching support, cross-tab synchronization, and singleton pattern for efficient reuse."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Two-way synchronization"})," — automatic sync between ref and localStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic persistence"})," — ref changes automatically saved to localStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Caching with TTL"})," — optional cache lifetime in seconds"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cross-tab synchronization"})," — automatic updates when changes occur in other tabs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Singleton pattern"})," — reuses ref for same keys"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type safety"})," — full TypeScript support with generics"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Default values"})," — supports initial values and factory functions"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"DataStorage integration"})," — uses DataStorage class for storage management"]}),`
`]}),`
`,e.jsx(n.h2,{id:"function",children:"Function"}),`
`,e.jsx(n.h3,{id:"usestorageref",children:e.jsx(n.code,{children:"useStorageRef"})}),`
`,e.jsx(n.p,{children:"Creates a reactive variable synchronized with localStorage."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — key name in localStorage"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultValue?: T | (() => T)"})," — default value or function to generate it (optional)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"cache?: number"})," — cache time in seconds (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Ref<T | undefined>"})," — Vue reactive variable linked to localStorage"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useStorageRef } from '@dxtmisha/functional'

// Simple usage
const theme = useStorageRef('app-theme')

// With default value
const language = useStorageRef('app-language', 'en')

// With factory function
const userId = useStorageRef('user-id', () => Math.random().toString(36))

// With caching (600 seconds = 10 minutes)
const cachedData = useStorageRef('cached-data', null, 600)
`})}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"basic-synchronization",children:"Basic Synchronization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useStorageRef } from '@dxtmisha/functional'

// Create ref synchronized with localStorage
const userTheme = useStorageRef('theme', 'light')

// When ref changes - localStorage automatically updates
userTheme.value = 'dark'
// localStorage: { 'ui-storage__theme': '{"value":"dark","age":1234567890}' }

// On page reload, value is restored
console.log(userTheme.value) // 'dark'
`})}),`
`,e.jsx(n.h3,{id:"singleton-pattern",children:"Singleton Pattern"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Repeated calls with same name return existing ref
const theme1 = useStorageRef('app-theme', 'light')
const theme2 = useStorageRef('app-theme', 'dark')

console.log(theme1 === theme2) // true - same ref

theme1.value = 'blue'
console.log(theme2.value) // 'blue' - both point to same ref
`})}),`
`,e.jsx(n.h2,{id:"usage-in-components",children:"Usage in Components"}),`
`,e.jsx(n.h3,{id:"user-settings",children:"User Settings"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useStorageRef } from '@dxtmisha/functional'

export default {
  setup() {
    const theme = useStorageRef('user-theme', 'light')
    const fontSize = useStorageRef('font-size', 16)
    const notifications = useStorageRef('notifications', true)

    return {
      theme,
      fontSize,
      notifications
    }
  }
}

// Template:
// <div>
//   <select v-model="theme">
//     <option value="light">Light</option>
//     <option value="dark">Dark</option>
//   </select>
//   <input v-model.number="fontSize" type="number" />
//   <input v-model="notifications" type="checkbox" />
// </div>
`})}),`
`,e.jsx(n.h3,{id:"api-data-caching",children:"API Data Caching"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useStorageRef } from '@dxtmisha/functional'

export default {
  setup() {
    // Cache for 10 minutes (600 seconds)
    const userData = useStorageRef('user-data', null, 600)

    const loadUserData = async () => {
      if (userData.value) {
        console.log('Data from cache')
        return userData.value
      }

      console.log('Loading from server')
      const response = await fetch('/api/user')
      userData.value = await response.json()
      return userData.value
    }

    return { userData, loadUserData }
  }
}
`})}),`
`,e.jsx(n.h2,{id:"cross-tab-synchronization",children:"Cross-tab Synchronization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { useStorageRef } from '@dxtmisha/functional'

// In first tab
const counter = useStorageRef('counter', 0)
counter.value = 5

// In second tab automatically updates
// counter.value === 5 (thanks to storage event)

// In third tab
const sameCounter = useStorageRef('counter', 0)
console.log(sameCounter.value) // 5

// Changes in any tab update all others
sameCounter.value = 10
// All open tabs will have counter.value === 10
`})}),`
`,e.jsx(n.h2,{id:"working-with-data-types",children:"Working with Data Types"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Numbers
const count = useStorageRef<number>('count', 0)
count.value = 42

// Booleans
const isActive = useStorageRef<boolean>('active', false)
isActive.value = true

// Objects
const settings = useStorageRef('settings', {
  theme: 'dark',
  language: 'en',
  notifications: true
})
settings.value.theme = 'light'

// Arrays
const items = useStorageRef<string[]>('items', [])
items.value.push('new item')
`})}),`
`,e.jsx(n.h2,{id:"usage-examples",children:"Usage Examples"}),`
`,e.jsx(n.h3,{id:"form-state-persistence",children:"Form State Persistence"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const formData = useStorageRef('contact-form', {
  name: '',
  email: '',
  message: ''
})

// When filling form, data is automatically saved
formData.value.name = 'John'
formData.value.email = 'john@example.com'

// On page reload, data is restored
`})}),`
`,e.jsx(n.h3,{id:"user-favorites",children:"User Favorites"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const favorites = useStorageRef<number[]>('favorites', [])

const addToFavorites = (id: number) => {
  if (!favorites.value.includes(id)) {
    favorites.value = [...favorites.value, id]
  }
}

const removeFromFavorites = (id: number) => {
  favorites.value = favorites.value.filter(fav => fav !== id)
}
`})}),`
`,e.jsx(n.h3,{id:"cache-with-auto-refresh",children:"Cache with Auto-refresh"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Cache for 5 minutes
const newsData = useStorageRef('news', null, 300)

const fetchNews = async () => {
  // If cache is valid - return saved data
  if (newsData.value) return newsData.value

  // Otherwise load fresh data
  const response = await fetch('/api/news')
  newsData.value = await response.json()
  return newsData.value
}

// First call - loads from server
await fetchNews()

// Subsequent calls within 5 minutes - use cache
await fetchNews() // From cache

// After 5+ minutes - loads from server again
`})})]})}function d(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{d as default};
