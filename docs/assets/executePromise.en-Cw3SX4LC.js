import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/executePromise - Execute Promise or function`}),`
`,(0,c.jsx)(n.h1,{id:`executepromise`,children:(0,c.jsx)(n.code,{children:`executePromise`})}),`
`,(0,c.jsx)(n.p,{children:`A utility that safely executes a function and/or awaits the resolution of an asynchronous result (Promise).`}),`
`,(0,c.jsxs)(n.p,{children:[`Under the hood, it uses the `,(0,c.jsx)(n.code,{children:`executeFunction`}),` utility. If passed a function returning a Promise, `,(0,c.jsx)(n.code,{children:`executePromise`}),` executes it and waits for the `,(0,c.jsx)(n.code,{children:`Promise`}),` to resolve. If a synchronous value or a regular function returning a synchronous value is passed, the utility immediately returns that result.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (() => Promise<T>) | (() => T) | T`}),` — A value, a `,(0,c.jsx)(n.code,{children:`Promise`}),`, or a function capable of returning a `,(0,c.jsx)(n.code,{children:`Promise`}),` or a plain value.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<T>`}),` — A promise resolving to the provided or computed value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { executePromise } from '@dxtmisha/functional-basic'

// With an async function
const fetchData = async () => {
  return await fetch('/api/data').then(res => res.json())
}
const result1 = await executePromise(fetchData)

// With a synchronous function
const staticData = () => 'Sync data'
const result2 = await executePromise(staticData)

// With a static value
const result3 = await executePromise('Data')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};