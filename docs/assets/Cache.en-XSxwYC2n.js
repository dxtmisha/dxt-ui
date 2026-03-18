import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(c){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Classes/Cache - Basic Caching"}),`
`,e.jsx(n.h1,{id:"cache-class",children:"Cache Class"}),`
`,e.jsx(n.p,{children:'A lightweight, memory-based caching mechanism. It provides an efficient way to execute expensive data-fetching functions only when necessary, relying on "comparison arrays" to trigger cache invalidation and recalculation.'}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"On-Demand Evaluation"})," — functions are only executed when the cached value is missing or invalidated."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Comparison Array Invalidation"})," — automatically recalculates the cache if the provided dependency array changes (similar to React's ",e.jsx(n.code,{children:"useMemo"})," or ",e.jsx(n.code,{children:"useEffect"})," dependency arrays)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Asynchronous Support"})," — works seamlessly with ",e.jsx(n.code,{children:"Promise"}),"-based data fetching."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"Cache()"})," constructor."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { Cache } from '@dxtmisha/functional'

// 1. Storage initialization
const cache = new Cache()

// 2. Get or calculate value
const user = cache.get('user', () => 'Admin', [1])
`})}),`
`,e.jsx(n.h2,{id:"data-retrieval",children:"Data Retrieval"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsxs(n.p,{children:["Use the ",e.jsx(n.code,{children:"get()"})," method to retrieve a cached value or calculate it if it doesn't exist or is stale."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — a unique identifier for the cache entry."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: () => T"})," — the function that computes the value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison?: any[]"})," — optional array of dependencies. If any value in this array changes relative to the last call, the cache is invalidated and ",e.jsx(n.code,{children:"callback"})," runs again."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T"})," — the cached or freshly calculated value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`let counter = 0

// Will evaluate and cache "User 1"
const user1 = cache.get('user', () => \`User \${++counter}\`, [1])

// Does NOT evaluate, returns cached "User 1"
const unchanged = cache.get('user', () => \`User \${++counter}\`, [1])

// Dependency array changed from [1] to [2]
// Will evaluate and cache "User 2"
const changed = cache.get('user', () => \`User \${++counter}\`, [2])
`})}),`
`,e.jsx(n.h3,{id:"getasync",children:e.jsx(n.code,{children:"getAsync"})}),`
`,e.jsxs(n.p,{children:["Functions identically to ",e.jsx(n.code,{children:"get()"}),", but designed for async calls."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — a unique identifier for the cache entry."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: () => Promise<T>"})," — the async function that computes the value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison?: any[]"})," — optional array of dependencies."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"Promise<T>"})," — the cached or freshly calculated async value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`async function fetchUser(id) {
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
`})})]})}function u(c={}){const{wrapper:n}={...a(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{u as default};
