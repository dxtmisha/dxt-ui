import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"@dxtmisha/en/functional-basic/Functions/executePromise - Execute Promise or function"}),`
`,e.jsx(n.h1,{id:"executepromise",children:e.jsx(n.code,{children:"executePromise"})}),`
`,e.jsx(n.p,{children:"A utility that safely executes a function and/or awaits the resolution of an asynchronous result (Promise)."}),`
`,e.jsxs(n.p,{children:["Under the hood, it uses the ",e.jsx(n.code,{children:"executeFunction"})," utility. If passed a function returning a Promise, ",e.jsx(n.code,{children:"executePromise"})," executes it and waits for the ",e.jsx(n.code,{children:"Promise"})," to resolve. If a synchronous value or a regular function returning a synchronous value is passed, the utility immediately returns that result."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback: (() => Promise<T>) | (() => T) | T"})," — A value, a ",e.jsx(n.code,{children:"Promise"}),", or a function capable of returning a ",e.jsx(n.code,{children:"Promise"})," or a plain value."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"Promise<T>"})," — A promise resolving to the provided or computed value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { executePromise } from '@dxtmisha/functional-basic'

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
`})})]})}function h(t={}){const{wrapper:n}={...r(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{h as default};
