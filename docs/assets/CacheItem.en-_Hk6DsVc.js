import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/CacheItem - Advanced Cache Management`}),`
`,(0,c.jsx)(n.h1,{id:`cacheitem-class`,children:`CacheItem Class`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`⚠️ Deprecated`}),` — This class is obsolete and should not be used. / Этот класс устарел и не рекомендуется к использованию.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`The internal engine driving individual cache entries. While `,(0,c.jsx)(n.code,{children:`Cache`}),` and `,(0,c.jsx)(n.code,{children:`CacheStatic`}),` provide the public interfaces for retrieving cached data across your application, it is the `,(0,c.jsx)(n.code,{children:`CacheItem`}),` class that securely manages the lifecycle, storage, and invalidation rules for each specific value.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`CacheItem`}),` is an `,(0,c.jsx)(n.strong,{children:`auxiliary class`}),`, designed for internal management of individual cache entries. In most cases, it is recommended to interact with caching through the `,(0,c.jsx)(n.code,{children:`Cache`}),` or `,(0,c.jsx)(n.code,{children:`CacheStatic`}),` classes.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dependency Tracking`}),` — maintains comparison arrays used to determine if a cached value remains valid.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lazy Evaluation`}),` — ensures the expensive callback function only runs when dependencies have changed.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Historical Memory`}),` — keeps a reference to the previously cached value (`,(0,c.jsx)(n.code,{children:`getCacheOld`}),`) even after a recalculation occurs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Async Support`}),` — natively handles both synchronous (`,(0,c.jsx)(n.code,{children:`getCache`}),`) and `,(0,c.jsx)(n.code,{children:`Promise`}),`-based asynchronous (`,(0,c.jsx)(n.code,{children:`getCacheAsync`}),`) data loading.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Strict Invalidation`}),` — uses deep comparison logic to trigger updates only when necessary.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`As an auxiliary component, `,(0,c.jsx)(n.code,{children:`CacheItem`}),` is usually instantiated by higher-level managers. However, it can be created manually if custom, isolated caching logic is required.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsx)(n.p,{children:`The class supports the following generic to ensure strict typing of the cached value:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — The type of the value being cached.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — a function that will generate or fetch data for the cache.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { CacheItem } from '@dxtmisha/functional-basic'

// 1. Initialization with a data retrieval function
const userCache = new CacheItem(() => fetchUserData())

// 2. Using generics for strict typing
const numberCache = new CacheItem<number>(() => Math.random())
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`cache-access`,children:`Cache Access`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCache(comparison?: any[]): T`}),` — Retrieves the value from the cache. If the comparison dependencies have changed, it triggers a recalculation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCacheAsync(comparison?: any[]): Promise<T>`}),` — Asynchronous version of `,(0,c.jsx)(n.code,{children:`getCache`}),`. Returns a Promise that resolves to the cached or newly fetched data.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`history`,children:`History`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCacheOld(): T | undefined`}),` — Returns the value that was stored in the cache immediately prior to the last update.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`dependency-based-invalidation`,children:`Dependency-Based Invalidation`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`let count = 0
const counterCache = new CacheItem(() => ++count)

// First call: evaluates and caches 1
counterCache.getCache([10]) // returns 1

// Second call: dependencies match [10], returns cached 1
counterCache.getCache([10]) // returns 1

// Third call: dependencies changed to [20], evaluates and caches 2
counterCache.getCache([20]) // returns 2

// Check history:
console.log(counterCache.getCacheOld()) // returns 1
`})}),`
`,(0,c.jsx)(n.h3,{id:`async-api-caching`,children:`Async API Caching`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const apiCache = new CacheItem(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Fetches from the network for the first 'v1' request
const data1 = await apiCache.getCacheAsync(['v1'])

// Returns from cache instantly for subsequent 'v1' requests
const data2 = await apiCache.getCacheAsync(['v1'])
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};