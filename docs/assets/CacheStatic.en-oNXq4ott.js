import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(a){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...a.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Classes/CacheStatic - Fast Global Cache"}),`
`,e.jsx(n.h1,{id:"cachestatic-class",children:"CacheStatic Class"}),`
`,e.jsxs(n.p,{children:["A wrapper class providing a globally accessible, static cache instance. It allows you to perform fast caching operations anywhere during code execution without needing to instantiate or pass around a dedicated ",e.jsx(n.code,{children:"Cache"})," object."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Global Accessibility"})," — works as a singleton pattern using static methods, meaning the same cache pool is accessible throughout the application context."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Underlying Mechanism"})," — internally delegates all calls to a standard ",e.jsx(n.code,{children:"Cache"})," instance, giving you the same dependency tracking and lazy evaluation benefits."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Convenience"})," — perfect for simple, shared data caching requirements across multiple unlinked components."]}),`
`]}),`
`,e.jsxs(n.p,{children:["Since all methods are ",e.jsx(n.code,{children:"static"}),", you never call ",e.jsx(n.code,{children:"new CacheStatic()"}),". You interact with the class directly."]}),`
`,e.jsx(n.h2,{id:"global-caching",children:"Global Caching"}),`
`,e.jsx(n.h3,{id:"get",children:e.jsx(n.code,{children:"get"})}),`
`,e.jsxs(n.p,{children:["Use the static ",e.jsx(n.code,{children:"get()"})," method to retrieve a cached value or calculate it if missing."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — a unique identifier for the specific global cache entry."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: () => T"})," — the function that computes the value."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"comparison?: any[]"})," — optional array of dependencies. Passing a new array (where values or length differ) invalidates the cache and forces a recalculation."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"T"})," — the cached or freshly stringified value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { CacheStatic } from '@dxtmisha/functional'

// File A.js
function calculateHeavyData(id) {
  return CacheStatic.get(
    \`heavy_data_\${id}\`,
    () => {
      console.log('Calculating...')
      return id * 100
    },
    [id] // Dependency
  )
}

// Will log 'Calculating...' and return 500
const res1 = calculateHeavyData(5) 

// File B.js
// Same function, same id. It hits the global cache.
// Will NOT log 'Calculating...', instantly returns 500
const res2 = calculateHeavyData(5) 
`})})]})}function u(a={}){const{wrapper:n}={...c(),...a.components};return n?e.jsx(n,{...a,children:e.jsx(t,{...a})}):t(a)}export{u as default};
