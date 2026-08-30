import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/CacheStatic - Fast Global Cache`}),`
`,(0,c.jsx)(t.h1,{id:`cachestatic-class`,children:`CacheStatic Class`}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`⚠️ Deprecated`}),` — This class is obsolete and should not be used. / Этот класс устарел и не рекомендуется к использованию.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`A wrapper class providing a globally accessible, static cache instance. It allows you to perform fast caching operations anywhere during code execution without needing to instantiate or pass around a dedicated `,(0,c.jsx)(t.code,{children:`Cache`}),` object.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Global Accessibility`}),` — works as a singleton pattern using static methods, meaning the same cache pool is accessible throughout the application context.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Underlying Mechanism`}),` — internally delegates all calls to a standard `,(0,c.jsx)(t.code,{children:`Cache`}),` instance, giving you the same dependency tracking and lazy evaluation benefits.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Convenience`}),` — perfect for simple, shared data caching requirements across multiple unlinked components.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[`Since all methods are `,(0,c.jsx)(t.code,{children:`static`}),`, you never call `,(0,c.jsx)(t.code,{children:`new CacheStatic()`}),`. You interact with the class directly.`]}),`
`,(0,c.jsx)(t.h2,{id:`global-caching`,children:`Global Caching`}),`
`,(0,c.jsx)(t.h3,{id:`get`,children:(0,c.jsx)(t.code,{children:`get`})}),`
`,(0,c.jsxs)(t.p,{children:[`Use the static `,(0,c.jsx)(t.code,{children:`get()`}),` method to retrieve a cached value or calculate it if missing.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — a unique identifier for the specific global cache entry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => T`}),` — the function that computes the value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison?: any[]`}),` — optional array of dependencies. Passing a new array (where values or length differ) invalidates the cache and forces a recalculation.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`T`}),` — the cached or freshly stringified value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { CacheStatic } from '@dxtmisha/functional'

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
// Will NOT log 'Calculating...', instantly returns 500
const res2 = calculateHeavyData(5) 
`})}),`
`,(0,c.jsx)(t.h3,{id:`getasync`,children:(0,c.jsx)(t.code,{children:`getAsync`})}),`
`,(0,c.jsxs)(t.p,{children:[`Asynchronous version of the `,(0,c.jsx)(t.code,{children:`get()`}),` method. Useful when the callback function returns a `,(0,c.jsx)(t.code,{children:`Promise`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — a unique identifier for the specific global cache entry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => Promise<T> | T`}),` — the asynchronous function that computes the value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`comparison?: any[]`}),` — optional array of dependencies. Passing a new array (where values or length differ) invalidates the cache and forces a recalculation.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`Promise<T>`}),` — a promise that resolves to the cached or computed value.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};