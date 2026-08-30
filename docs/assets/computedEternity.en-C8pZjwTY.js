import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional/Functions/computedEternity - Persistent computed property`}),`
`,(0,c.jsx)(t.h1,{id:`computedeternity`,children:(0,c.jsx)(t.code,{children:`computedEternity`})}),`
`,(0,c.jsx)(t.p,{children:`Creates a computed property that is computed on demand and cached. The value is updated automatically when dependencies change, but only if it has been accessed at least once. The watcher remains active throughout the application's lifecycle. This is particularly useful for properties that should persist globally after the first access.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getter: () => Promise<T> | T`}),` — A function that returns the value to be computed (can be synchronous or asynchronous).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`initialState?: T`}),` — The initial value of the result.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`CustomRef<T>`}),` — A reactive custom ref containing the resolved result of the getter.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { computedEternity } from '@dxtmisha/functional'

// Initial state
const status = computedEternity(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))
  return 'online'
}, 'offline')
// Status.value is 'offline' until the getter resolves

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};