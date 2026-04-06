import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/Cache - Basic Caching`}),`
`,(0,c.jsx)(n.h1,{id:`cache-class`,children:`Cache Class`}),`
`,(0,c.jsx)(n.p,{children:`A lightweight, memory-based caching mechanism. It provides an efficient way to execute expensive data-fetching functions only when necessary, relying on "comparison arrays" to trigger cache invalidation and recalculation.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`On-Demand Evaluation`}),` — functions are only executed when the cached value is missing or invalidated.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Comparison Array Invalidation`}),` — automatically recalculates the cache if the provided dependency array changes (similar to React's `,(0,c.jsx)(n.code,{children:`useMemo`}),` or `,(0,c.jsx)(n.code,{children:`useEffect`}),` dependency arrays).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Asynchronous Support`}),` — works seamlessly with `,(0,c.jsx)(n.code,{children:`Promise`}),`-based data fetching.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`Cache()`}),` constructor.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Cache } from '@dxtmisha/functional'

// 1. Storage initialization
const cache = new Cache()

// 2. Get or calculate value
const user = cache.get('user', () => 'Admin', [1])
`})}),`
`,(0,c.jsx)(n.h2,{id:`data-retrieval`,children:`Data Retrieval`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Use the `,(0,c.jsx)(n.code,{children:`get()`}),` method to retrieve a cached value or calculate it if it doesn't exist or is stale.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — a unique identifier for the cache entry.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — the function that computes the value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — optional array of dependencies. If any value in this array changes relative to the last call, the cache is invalidated and `,(0,c.jsx)(n.code,{children:`callback`}),` runs again.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T`}),` — the cached or freshly calculated value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`let counter = 0

// Will evaluate and cache "User 1"
const user1 = cache.get('user', () => \`User \${++counter}\`, [1])

// Does NOT evaluate, returns cached "User 1"
const unchanged = cache.get('user', () => \`User \${++counter}\`, [1])

// Dependency array changed from [1] to [2]
// Will evaluate and cache "User 2"
const changed = cache.get('user', () => \`User \${++counter}\`, [2])
`})}),`
`,(0,c.jsx)(n.h3,{id:`getasync`,children:(0,c.jsx)(n.code,{children:`getAsync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Functions identically to `,(0,c.jsx)(n.code,{children:`get()`}),`, but designed for async calls.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — a unique identifier for the cache entry.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => Promise<T>`}),` — the async function that computes the value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — optional array of dependencies.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — the cached or freshly calculated async value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`async function fetchUser(id) {
  return cache.getAsync('user_api', async () => {
    const res = await fetch(\`/api/users/\${id}\`)
    return res.json()
  }, [id])
}

// First call hits the network
const u1 = await fetchUser(5)

// Second call returns cached data immediately (no network hit)
const u1Cached = await fetchUser(5)

// Dependency \`id\` changed (5 !== 6), hits the network again
const u2 = await fetchUser(6)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};