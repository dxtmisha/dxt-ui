import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/computedAsync - Async computed property`}),`
`,(0,c.jsx)(t.h1,{id:`computedasync`,children:(0,c.jsx)(t.code,{children:`computedAsync`})}),`
`,(0,c.jsxs)(t.p,{children:[`Creates a computed property that can handle asynchronous getters. Unlike Vue's standard `,(0,c.jsx)(t.code,{children:`computed`}),`, `,(0,c.jsx)(t.code,{children:`computedAsync`}),` accepts async functions, synchronous functions, or raw values — the result is automatically resolved and exposed as a reactive computed ref. Initialization is lazy and occurs upon first access to the property.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getter: (() => Promise<R>) | (() => R) | R`}),` — An async function, synchronous function, or raw value to compute the result from.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initialState?: R`}),` — The initial value of the result.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ignore?: R`}),` — A value to be ignored (will not be set as the result).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`debugOptions?: DebuggerOptions`}),` — Options used for debugging reactive computations, supported by Vue.js.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`ComputedRef<R | undefined>`}),` — A reactive computed ref containing the resolved result of the getter.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedAsync } from '@dxtmisha/functional'

// Initial state
const status = computedAsync(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 'online'
}, 'offline')
// status.value is 'offline' immediately, and 'online' after 1 second

// Async getter
const data = computedAsync(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Sync getter
const label = computedAsync(() => 'Hello, World!')

// Raw value
const count = computedAsync(42)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};