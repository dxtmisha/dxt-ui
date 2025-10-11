import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-C8vOrmRQ.js";import{M as t}from"./blocks-Cpz0g9q0.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CFZkzvey.js";function c(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/functional/en/Classes/Cache"}),`
`,e.jsx(n.h1,{id:"cache-class",children:"Cache Class"}),`
`,e.jsx(n.p,{children:"High-level class for managing multiple cached values using CacheItem instances internally. Provides a simple interface for caching with automatic CacheItem creation and management, intelligent comparison-based invalidation, and both synchronous and asynchronous operations."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple cache management"})," — manages collection of named cache entries using CacheItem instances"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Automatic CacheItem creation"})," — creates and manages CacheItem instances internally for each cache name"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Comparison-based invalidation"})," — automatic cache invalidation when comparison parameters change"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Sync and async modes"})," — both synchronous and asynchronous text retrieval"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type safety"})," — full TypeScript support with generics for each cache entry"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Memory efficient"})," — reuses CacheItem instances for same cache names"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Simple interface"})," — abstracts CacheItem complexity behind easy-to-use methods"]}),`
`]}),`
`,e.jsx(n.h2,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsx(n.p,{children:"Synchronously retrieves cached data or executes callback to generate and cache new data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — unique cache name/key for this cache entry"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: () => T"})," — function to execute if cache miss or invalidation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison?: any[]"})," — array of values for cache invalidation comparison (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T"})," — cached data or result of callback execution"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { Cache } from '@dxtmisha/functional'

const cache = new Cache()

// Simple caching without comparison
const userData = cache.get('user-profile', () => {
  console.log('Computing user profile...')
  return { id: 1, name: 'John Doe', email: 'john@example.com', computed: Date.now() }
})

// Subsequent calls return cached data without executing callback
const cachedData = cache.get('user-profile', () => {
  console.log('This will not execute')
  return { id: 1, name: 'John Doe', email: 'john@example.com', computed: Date.now() }
})
// Returns exact same cached object

// Different cache name creates separate CacheItem
const settingsData = cache.get('user-settings', () => {
  console.log('Loading user settings...')
  return { theme: 'dark', language: 'en' }
})
`})}),`
`,e.jsx(n.h3,{id:"getasync",children:e.jsx(n.code,{children:"getAsync"})}),`
`,e.jsx(n.p,{children:"Asynchronously retrieves cached data or executes async callback to generate new data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — unique cache name/key for this cache entry"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: () => T | Promise<T>"})," — function to execute if cache miss or invalidation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison?: any[]"})," — array of values for cache invalidation comparison (optional)"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})," — promise resolving to cached data or callback result"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`// Async caching with API calls
const userData = await cache.getAsync('api-user-1', async () => {
  console.log('Fetching from API...')
  const response = await fetch('/api/user/1')
  return await response.json()
})

// Cached on subsequent calls (same CacheItem instance reused)
const cachedUser = await cache.getAsync('api-user-1', async () => {
  console.log('This will not execute')
  return await fetch('/api/user/1').then(r => r.json())
})
// Returns cached data without API call

// Different cache name creates new CacheItem
const userPosts = await cache.getAsync('api-user-posts-1', async () => {
  console.log('Fetching user posts...')
  const response = await fetch('/api/user/1/posts')
  return await response.json()
})
`})}),`
`,e.jsx(n.h2,{id:"cache-invalidation-with-comparison",children:"Cache Invalidation with Comparison"}),`
`,e.jsx(n.p,{children:"Each named cache entry maintains its own CacheItem with independent invalidation:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const cache = new Cache()

// User data cache with dependency tracking
let userId = 1
let includeProfile = true

const getUserData = (id, withProfile) => cache.get(
  'user-data', // Same cache name reuses same CacheItem
  () => {
    console.log(\`Loading user \${id}, profile: \${withProfile}\`)
    return {
      id,
      name: \`User \${id}\`,
      profile: withProfile ? { bio: 'User bio', avatar: 'avatar.jpg' } : null
    }
  },
  [id, withProfile] // CacheItem invalidates when any value changes
)

console.log(getUserData(1, true)) // Creates CacheItem, executes callback
console.log(getUserData(1, true)) // Reuses same CacheItem, returns cached data

// Change dependency - same CacheItem invalidates and regenerates
userId = 2
console.log(getUserData(2, true)) // Same CacheItem, invalidated, executes callback

// Different cache name creates separate CacheItem
const getUserSettings = (id) => cache.get(
  'user-settings', // Different name = different CacheItem
  () => {
    console.log(\`Loading settings for user \${id}\`)
    return { theme: 'dark', notifications: true }
  },
  [id]
)

console.log(getUserSettings(1)) // Creates new CacheItem instance
`})}),`
`,e.jsx(n.h2,{id:"internal-cacheitem-management",children:"Internal CacheItem Management"}),`
`,e.jsx(n.p,{children:"The Cache class automatically manages CacheItem lifecycle:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const cache = new Cache()

// Each unique cache name gets its own CacheItem instance
cache.get('cache-1', () => 'data-1') // Creates CacheItem internally
cache.get('cache-2', () => 'data-2') // Creates different CacheItem
cache.get('cache-1', () => 'data-1-updated') // Reuses existing CacheItem

// Cache instances are completely isolated
const cache2 = new Cache()
cache2.get('cache-1', () => 'different-data') // Independent CacheItem in cache2

// Verify isolation
console.log(cache.get('cache-1', () => 'fallback')) // 'data-1'
console.log(cache2.get('cache-1', () => 'fallback')) // 'different-data'
`})})]})}function m(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(c,{...a})}):c(a)}export{m as default};
