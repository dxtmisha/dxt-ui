import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional/Functions/computedEternity - Persistent computed property`}),`
`,(0,c.jsx)(n.h1,{id:`computedeternity`,children:(0,c.jsx)(n.code,{children:`computedEternity`})}),`
`,(0,c.jsx)(n.p,{children:`Creates a computed property that is computed on demand and cached. The value is updated automatically when dependencies change, but only if it has been accessed at least once. The watcher remains active throughout the application's lifecycle. This is particularly useful for properties that should persist globally after the first access.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getter: () => Promise<T> | T`}),` — A function that returns the value to be computed (can be synchronous or asynchronous).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`CustomRef<T>`}),` — A reactive custom ref containing the resolved result of the getter.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { computedEternity } from '@dxtmisha/functional'

// Async getter - will only be called when 'data.value' is first accessed
const data = computedEternity(async () => {
  const response = await fetch('/api/data')
  return response.json()
})

// Sync getter
const i = ref(0)
const double = computedEternity(() => i.value * 2)

console.log(double.value) // 0
i.value = 5
// double.value will be 10 on next access
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};