import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/ApiPreparation - API Request Preparation"}),`
`,e.jsx(n.h1,{id:"apipreparation-class",children:"ApiPreparation Class"}),`
`,e.jsxs(n.p,{children:["A class specifically designed to handle tasks and side effects immediately running before and after an API request execution. It serves to intercept requests globally via tracking hooks (",e.jsx(n.code,{children:"callback"})," and ",e.jsx(n.code,{children:"callbackEnd"}),"), perform state manipulations, or trigger global logic like loading indicators."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pre-request Execution"})," — hook into the API lifecycle immediately before the actual ",e.jsx(n.code,{children:"fetch"})," call is made."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Post-request Analysis"})," — execute logic exactly after a request completes, with proper access to the ",e.jsx(n.code,{children:"Response"})," object and the original request configuration."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Concurrency Control"})," — ensures overlapping hooks are resolved collectively without collision."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Data Injection"})," — post-request hooks optionally return data or a ",e.jsx(n.code,{children:"reset"})," flag that can manipulate downstream handlers."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { ApiPreparation } from '@dxtmisha/functional'

const preparation = new ApiPreparation()
`})}),`
`,e.jsx(n.h2,{id:"methods",children:"Methods"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"make(active: boolean, apiFetch: ApiFetch): Promise<void>"})," — Executes the preparation callback before executing the request."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>"})," — Executes analysis logically after the request finishes."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"set(callback: (apiFetch: ApiFetch) => Promise<void>): this"})," — Connects a callback function triggered right before a request execution."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this"})," — Connects a callback function executed after request termination."]}),`
`]})]})}function p(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{p as default};
