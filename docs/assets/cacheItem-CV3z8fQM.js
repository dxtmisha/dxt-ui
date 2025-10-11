import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-Dqnce8mp.js";import{M as t}from"./blocks-6V-3VoLN.js";import"./preload-helper-PPVm8Dsz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-C6i5AnHO.js";function c(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"@dxtmisha/functional/en/Classes/CacheItem"}),`
`,e.jsx(n.h1,{id:"cacheitem-class",children:"CacheItem Class"}),`
`,e.jsx(n.p,{children:"Low-level class for managing a single caching value with automatic invalidation based on comparison data. This class is used internally by the Cache class but can also be used directly for fine-grained cache control."}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Single value caching"})," — manages one cached value with intelligent invalidation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Comparison-based invalidation"})," — automatically invalidates cache when comparison data changes"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Previous value tracking"})," — maintains reference to old cached value during updates"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Synchronous and asynchronous support"})," — both sync and async callback execution"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type safety"})," — full TypeScript support with generics"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Memory efficient"})," — minimal overhead for single value storage"]}),`
`]}),`
`,e.jsx(n.h2,{id:"constructor",children:"Constructor"}),`
`,e.jsx(n.h3,{id:"constructor-1",children:e.jsx(n.code,{children:"constructor"})}),`
`,e.jsx(n.p,{children:"Creates a new CacheItem instance with the provided callback function."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: () => T"})," — function to execute when cache needs to be generated or updated"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { CacheItem } from '@dxtmisha/functional'

// Simple cache item for expensive computation
const expensiveComputation = new CacheItem(() => {
  console.log('Performing expensive computation...')
  return Math.random() * 1000
})

// Cache item for API data
const apiData = new CacheItem(() => {
  console.log('Fetching from API...')
  return fetch('/api/data').then(r => r.json())
})
`})}),`
`,e.jsx(n.h2,{id:"data-retrieval-methods",children:"Data Retrieval Methods"}),`
`,e.jsx(n.h3,{id:"getcache",children:e.jsx(n.code,{children:"getCache"})}),`
`,e.jsx(n.p,{children:"Gets cached data or executes callback to generate new data if cache is invalid."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison: any[]"})," — array of values used for cache invalidation comparison"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T"})," — cached data or result of callback execution"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const userCache = new CacheItem(() => {
  console.log('Loading user data...')
  return { id: 1, name: 'John Doe', role: 'admin' }
})

let userId = 1
let userRole = 'admin'

// First call - executes callback
const user1 = userCache.getCache([userId, userRole])
console.log(user1) // Logs: "Loading user data..." then returns user object

// Second call with same comparison - returns cached data
const user1Cached = userCache.getCache([userId, userRole])
console.log(user1Cached) // Returns cached data without logging

// Change comparison data - cache invalidated
userId = 2
const user2 = userCache.getCache([userId, userRole])
console.log(user2) // Logs: "Loading user data..." then returns new user object
`})}),`
`,e.jsx(n.h3,{id:"getcacheasync",children:e.jsx(n.code,{children:"getCacheAsync"})}),`
`,e.jsx(n.p,{children:"Asynchronously gets cached data or executes async callback to generate new data."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison: any[]"})," — array of values used for cache invalidation comparison"]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})," — promise resolving to cached data or callback result"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const apiCache = new CacheItem(async () => {
  console.log('Fetching user from API...')
  const response = await fetch('/api/user/1')
  return await response.json()
})

// First call - executes async callback
const user = await apiCache.getCacheAsync([])
console.log(user) // Logs: "Fetching user from API..." then returns user data

// Second call - returns cached data
const userCached = await apiCache.getCacheAsync([])
console.log(userCached) // Returns cached data without API call
`})}),`
`,e.jsx(n.h3,{id:"getcacheold",children:e.jsx(n.code,{children:"getCacheOld"})}),`
`,e.jsx(n.p,{children:"Returns the previous cached value (before last update)."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T | undefined"})," — previous cached value or undefined if no previous value"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const dataCache = new CacheItem(() => ({ timestamp: Date.now() }))

// Get initial data
const data1 = dataCache.getCache(['v1'])
console.log(dataCache.getCacheOld()) // undefined (no previous value)

// Update cache with new comparison
const data2 = dataCache.getCache(['v2'])
console.log(dataCache.getCacheOld()) // Returns data1 (previous value)

// Update again
const data3 = dataCache.getCache(['v3'])
console.log(dataCache.getCacheOld()) // Returns data2 (previous value)
`})}),`
`,e.jsx(n.h2,{id:"practical-examples",children:"Practical Examples"}),`
`,e.jsx(n.h3,{id:"computation-caching",children:"Computation Caching"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const expensiveCache = new CacheItem(() => {
  console.log('Performing expensive computation...')
  return Array.from({length: 1000000}, (_, i) => i * i).reduce((a, b) => a + b)
})

let factor = 1
let data = [1, 2, 3]

// First call
const result1 = expensiveCache.getCache([factor, data])
console.log('Result:', result1)

// Cached call
const result2 = expensiveCache.getCache([factor, data])
console.log('Cached:', result2) // No recalculation
`})}),`
`,e.jsx(n.h3,{id:"validation-with-history",children:"Validation with History"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const validationCache = new CacheItem(() => {
  const errors = []
  if (!this.value) errors.push('Field required')
  if (this.value.length < 3) errors.push('Minimum 3 characters')
  return { isValid: errors.length === 0, errors }
})

function validateField(value) {
  this.value = value
  const current = validationCache.getCache([value])
  const previous = validationCache.getCacheOld()

  return { current, previous, hasChanged: previous && current !== previous }
}

// Usage
console.log(validateField('ab')) // Shows errors
console.log(validateField('abc')) // Valid result
`})}),`
`,e.jsx(n.h3,{id:"async-data",children:"Async Data"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const apiCache = new CacheItem(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

async function getData(userId) {
  return await apiCache.getCacheAsync([userId])
}

// Usage
const data = await getData(1) // API call
const cached = await getData(1) // Cached data
`})}),`
`,e.jsx(n.p,{children:"The CacheItem class provides low-level control over caching a single value with powerful invalidation capabilities and change history tracking."})]})}function u(a={}){const{wrapper:n}={...s(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(c,{...a})}):c(a)}export{u as default};
