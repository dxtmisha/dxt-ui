import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/CacheStatic - Fast Global Cache`}),`
`,(0,c.jsx)(n.h1,{id:`cachestatic-class`,children:`CacheStatic Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A wrapper class providing a globally accessible, static cache instance. It allows you to perform fast caching operations anywhere during code execution without needing to instantiate or pass around a dedicated `,(0,c.jsx)(n.code,{children:`Cache`}),` object.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Accessibility`}),` — works as a singleton pattern using static methods, meaning the same cache pool is accessible throughout the application context.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Underlying Mechanism`}),` — internally delegates all calls to a standard `,(0,c.jsx)(n.code,{children:`Cache`}),` instance, giving you the same dependency tracking and lazy evaluation benefits.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Convenience`}),` — perfect for simple, shared data caching requirements across multiple unlinked components.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[`Since all methods are `,(0,c.jsx)(n.code,{children:`static`}),`, you never call `,(0,c.jsx)(n.code,{children:`new CacheStatic()`}),`. You interact with the class directly.`]}),`
`,(0,c.jsx)(n.h2,{id:`global-caching`,children:`Global Caching`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsxs)(n.p,{children:[`Use the static `,(0,c.jsx)(n.code,{children:`get()`}),` method to retrieve a cached value or calculate it if missing.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — a unique identifier for the specific global cache entry.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => T`}),` — the function that computes the value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`comparison?: any[]`}),` — optional array of dependencies. Passing a new array (where values or length differ) invalidates the cache and forces a recalculation.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T`}),` — the cached or freshly stringified value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { CacheStatic } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};