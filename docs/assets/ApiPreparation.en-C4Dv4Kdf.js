import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/ApiPreparation - API Request Preparation`}),`
`,(0,c.jsx)(n.h1,{id:`apipreparation-class`,children:`ApiPreparation Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A class specifically designed to handle tasks and side effects immediately running before and after an API request execution. It serves to intercept requests globally via tracking hooks (`,(0,c.jsx)(n.code,{children:`callback`}),` and `,(0,c.jsx)(n.code,{children:`callbackEnd`}),`), perform state manipulations, or trigger global logic like loading indicators.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Pre-request Execution`}),` — hook into the API lifecycle immediately before the actual `,(0,c.jsx)(n.code,{children:`fetch`}),` call is made.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Post-request Analysis`}),` — execute logic exactly after a request completes, with proper access to the `,(0,c.jsx)(n.code,{children:`Response`}),` object and the original request configuration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Concurrency Control`}),` — ensures overlapping hooks are resolved collectively without collision.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Injection`}),` — post-request hooks optionally return data or a `,(0,c.jsx)(n.code,{children:`reset`}),` flag that can manipulate downstream handlers.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`ApiPreparation()`}),` constructor.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiPreparation } from '@dxtmisha/functional'

// 1. Simple initialization
const preparation = new ApiPreparation()

// 2. Setting pre-request callback
preparation.set(async (apiFetch) => {
  console.log('Preparing request to:', apiFetch.path)
})

// 3. Setting post-request callback
preparation.setEnd(async (query, apiFetch) => {
  console.log('Request finished with status:', query.status)
  return { reset: false }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(active: boolean, apiFetch: ApiFetch): Promise<void>`}),` — Executes the preparation callback before executing the request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`makeEnd(active: boolean, query: Response, apiFetch: ApiFetch): Promise<ApiPreparationEnd>`}),` — Executes analysis logically after the request finishes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(callback: (apiFetch: ApiFetch) => Promise<void>): this`}),` — Connects a callback function triggered right before a request execution.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this`}),` — Connects a callback function executed after request termination.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};