import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function a(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Classes/CacheItem - Cache Entry Management"}),`
`,e.jsx(n.h1,{id:"cacheitem-class",children:"CacheItem Class"}),`
`,e.jsxs(n.p,{children:["The internal engine driving individual cache entries. While ",e.jsx(n.code,{children:"Cache"})," and ",e.jsx(n.code,{children:"CacheStatic"})," provide the public interfaces for retrieving cached data across your application, it is the ",e.jsx(n.code,{children:"CacheItem"})," class that securely manages the lifecycle, storage, and invalidation rules for each specific value."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Dependency Tracking"})," — maintains the comparison arrays used to determine if a cached value is still valid."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Lazy Evaluation"})," — guarantees that the expensive callback function only runs when absolutely necessary."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Historical Memory"})," — keeps a reference to the previously cached value (",e.jsx(n.code,{children:"getCacheOld"}),") even after recalculation happens."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Async Execution"})," — natively handles both synchronous (",e.jsx(n.code,{children:"getCache"}),") and ",e.jsx(n.code,{children:"Promise"}),"-based asynchronous (",e.jsx(n.code,{children:"getCacheAsync"}),") data loading."]}),`
`]}),`
`,e.jsxs(n.p,{children:["You typically do not instantiate ",e.jsx(n.code,{children:"CacheItem"})," directly in your application code. Instead, you use the ",e.jsx(n.code,{children:"Cache"})," class, which manages ",e.jsx(n.code,{children:"CacheItem"})," instances for you. However, understanding its API is helpful for advanced scenarios."]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { CacheItem } from '@dxtmisha/functional'

// Initialize with the function that will generate the data
const userCache = new CacheItem(() => fetchUserData())
`})}),`
`,e.jsx(n.h2,{id:"cache-retrieval",children:"Cache Retrieval"}),`
`,e.jsx(n.h3,{id:"getcache",children:e.jsx(n.code,{children:"getCache"})}),`
`,e.jsxs(n.p,{children:["Use ",e.jsx(n.code,{children:"getCache"})," to obtain the value. The provided comparison array determines if recalculation is needed."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison?: any[]"})," — array of dependencies. If they change, the callback is re-evaluated."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T"})," — the cached or freshly stringified value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let count = 0
const counterCache = new CacheItem(() => ++count)

// Evaluates and caches 1
counterCache.getCache([1])

// Returns cached 1 (dependencies match)
counterCache.getCache([1])

// Dependencies changed to [2], evaluates and caches 2
counterCache.getCache([2])
`})}),`
`,e.jsx(n.h3,{id:"getcacheasync",children:e.jsx(n.code,{children:"getCacheAsync"})}),`
`,e.jsxs(n.p,{children:["Functions exactly like ",e.jsx(n.code,{children:"getCache"}),", but handles ",e.jsx(n.code,{children:"Promise"})," returns."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison?: any[]"})," — array of dependencies."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})," — the cached or newly fetched promise."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const apiCache = new CacheItem(async () => await fetch('/data').then(res => res.json()))

// Fetches from the network
const data1 = await apiCache.getCacheAsync(['v1'])

// Returns from cache instantly
const data2 = await apiCache.getCacheAsync(['v1'])
`})}),`
`,e.jsx(n.h2,{id:"historical-data",children:"Historical Data"}),`
`,e.jsx(n.h3,{id:"getcacheold",children:e.jsx(n.code,{children:"getCacheOld"})}),`
`,e.jsxs(n.p,{children:["If a cache invalidation occurs and new data is fetched, you can retrieve the immediate prior value using ",e.jsx(n.code,{children:"getCacheOld()"}),"."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T | undefined"})," — the previously cached data, if available."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`counterCache.getCache([1]) // Returns 1
counterCache.getCache([2]) // Returns 2

console.log(counterCache.getCacheOld()) // Returns 1
`})}),`
`,e.jsx(n.h2,{id:"internal-overview",children:"Internal Overview"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CacheItem"})," relies on the internal ",e.jsx(n.code,{children:"isUpdate"})," method to strictly compare the incoming ",e.jsx(n.code,{children:"comparison"})," array against the previous one. If they differ in length or strict equality (",e.jsx(n.code,{children:"==="}),") of their elements, the cache is flagged as stale and the internal ",e.jsx(n.code,{children:"value"})," is regenerated."]})]})}function x(c={}){const{wrapper:n}={...s(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(a,{...c})}):a(c)}export{x as default};
