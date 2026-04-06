import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional/Functions/computedAsync - Async computed property`}),`
`,(0,c.jsx)(n.h1,{id:`computedasync`,children:(0,c.jsx)(n.code,{children:`computedAsync`})}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a computed property that can handle asynchronous getters. Unlike Vue's standard `,(0,c.jsx)(n.code,{children:`computed`}),`, `,(0,c.jsx)(n.code,{children:`computedAsync`}),` accepts async functions, synchronous functions, or raw values — the result is automatically resolved and exposed as a reactive computed ref. Initialization is lazy and occurs upon first access to the property.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getter: (() => Promise<R>) | (() => R) | R`}),` — An async function, synchronous function, or raw value to compute the result from.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`ignore?: R`}),` — A value to be ignored (will not be set as the result).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`debugOptions?: DebuggerOptions`}),` — Options used for debugging reactive computations, supported by Vue.js.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`ComputedRef<R | undefined>`}),` — A reactive computed ref containing the resolved result of the getter.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedAsync } from '@dxtmisha/functional'

// Async getter
const data = computedAsync(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Sync getter
const label = computedAsync(() => 'Hello, World!')

// Raw value
const count = computedAsync(42)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};