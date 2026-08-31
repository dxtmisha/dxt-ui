import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/executePromise - Execute Promise or function`}),`
`,(0,c.jsx)(t.h1,{id:`executepromise`,children:(0,c.jsx)(t.code,{children:`executePromise`})}),`
`,(0,c.jsx)(t.p,{children:`A robust utility for safely executing and awaiting results from flexible sources. It handles synchronous values, Promises, and functions (both synchronous and asynchronous) by ensuring the final result is always resolved and returned as a Promise.`}),`
`,(0,c.jsxs)(t.p,{children:[`Under the hood, it leverages `,(0,c.jsx)(t.code,{children:`executeFunction`}),` to resolve callables and then ensures that if the result is a `,(0,c.jsx)(t.code,{children:`Promise`}),`, it is properly awaited.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: ((...args: any[]) => Promise<T>) | ((...args: any[]) => T) | T`}),` — The source to execute or resolve.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`...args: any[]`}),` (optional) — Arguments to pass to the function if `,(0,c.jsx)(t.code,{children:`callback`}),` is callable.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<T>`}),` — A promise that resolves to the final computed or provided value.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { executePromise } from '@dxtmisha/functional-basic'

// 1. Awaiting an async function
const fetchData = async (id: number) => {
  return await fetch(\`/api/user/\${id}\`).then(res => res.json())
}
const user = await executePromise(fetchData, 123)

// 2. Handling a synchronous function
const getName = () => 'John Doe'
const name = await executePromise(getName) // returns Promise resolving to 'John Doe'

// 3. Resolving a static value
const result = await executePromise('Immediate Data')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};