import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/CacheItem - Cache Entry Management`}),`
`,(0,c.jsx)(n.h1,{id:`cacheitem-class`,children:`CacheItem Class`}),`
`,(0,c.jsxs)(n.p,{children:[`The internal engine driving individual cache entries. While `,(0,c.jsx)(n.code,{children:`Cache`}),` and `,(0,c.jsx)(n.code,{children:`CacheStatic`}),` provide the public interfaces for retrieving cached data across your application, it is the `,(0,c.jsx)(n.code,{children:`CacheItem`}),` class that securely manages the lifecycle, storage, and invalidation rules for each specific value.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dependency Tracking`}),` — maintains the comparison arrays used to determine if a cached value is still valid.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lazy Evaluation`}),` — guarantees that the expensive callback function only runs when absolutely necessary.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Historical Memory`}),` — keeps a reference to the previously cached value (`,(0,c.jsx)(n.code,{children:`getCacheOld`}),`) even after recalculation happens.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Async Execution`}),` — natively handles both synchronous (`,(0,c.jsx)(n.code,{children:`getCache`}),`) and `,(0,c.jsx)(n.code,{children:`Promise`}),`-based asynchronous (`,(0,c.jsx)(n.code,{children:`getCacheAsync`}),`) data loading.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`You typically do not instantiate `,(0,c.jsx)(n.code,{children:`CacheItem`}),` directly in your application code. Instead, you use the `,(0,c.jsx)(n.code,{children:`Cache`}),` class, which manages `,(0,c.jsx)(n.code,{children:`CacheItem`}),` instances for you. However, understanding its API is helpful for advanced scenarios.`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`CacheItem(callback)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — a function that will generate data for the cache.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CacheItem } from '@dxtmisha/functional'

// 1. Initialization with a data retrieval function
const userCache = new CacheItem(() => fetchUserData())
`})}),`
`,(0,c.jsx)(n.h2,{id:`cache-retrieval`,children:`Cache Retrieval`}),`
`,(0,c.jsx)(n.h3,{id:`getcache`,children:(0,c.jsx)(n.code,{children:`getCache`})}),`
`,(0,c.jsxs)(n.p,{children:[`Use `,(0,c.jsx)(n.code,{children:`getCache`}),` to obtain the value. The provided comparison array determines if recalculation is needed.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — array of dependencies. If they change, the callback is re-evaluated.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T`}),` — the cached or freshly stringified value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`let count = 0
const counterCache = new CacheItem(() => ++count)

// Evaluates and caches 1
counterCache.getCache([1])

// Returns cached 1 (dependencies match)
counterCache.getCache([1])

// Dependencies changed to [2], evaluates and caches 2
counterCache.getCache([2])
`})}),`
`,(0,c.jsx)(n.h3,{id:`getcacheasync`,children:(0,c.jsx)(n.code,{children:`getCacheAsync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Functions exactly like `,(0,c.jsx)(n.code,{children:`getCache`}),`, but handles `,(0,c.jsx)(n.code,{children:`Promise`}),` returns.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — array of dependencies.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — the cached or newly fetched promise.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const apiCache = new CacheItem(async () => await fetch('/data').then(res => res.json()))

// Fetches from the network
const data1 = await apiCache.getCacheAsync(['v1'])

// Returns from cache instantly
const data2 = await apiCache.getCacheAsync(['v1'])
`})}),`
`,(0,c.jsx)(n.h2,{id:`historical-data`,children:`Historical Data`}),`
`,(0,c.jsx)(n.h3,{id:`getcacheold`,children:(0,c.jsx)(n.code,{children:`getCacheOld`})}),`
`,(0,c.jsxs)(n.p,{children:[`If a cache invalidation occurs and new data is fetched, you can retrieve the immediate prior value using `,(0,c.jsx)(n.code,{children:`getCacheOld()`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`}),` — the previously cached data, if available.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`counterCache.getCache([1]) // Returns 1
counterCache.getCache([2]) // Returns 2

console.log(counterCache.getCacheOld()) // Returns 1
`})}),`
`,(0,c.jsx)(n.h2,{id:`internal-overview`,children:`Internal Overview`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`CacheItem`}),` relies on the internal `,(0,c.jsx)(n.code,{children:`isUpdate`}),` method to strictly compare the incoming `,(0,c.jsx)(n.code,{children:`comparison`}),` array against the previous one. If they differ in length or strict equality (`,(0,c.jsx)(n.code,{children:`===`}),`) of their elements, the cache is flagged as stale and the internal `,(0,c.jsx)(n.code,{children:`value`}),` is regenerated.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};