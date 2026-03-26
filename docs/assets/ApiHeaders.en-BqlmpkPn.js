import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/ApiHeaders - API Request Headers`}),`
`,(0,c.jsx)(n.h1,{id:`apiheaders-class`,children:`ApiHeaders Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A class for managing and merging HTTP request headers. It handles default application-wide headers, custom headers for specific requests, and default `,(0,c.jsx)(n.code,{children:`Content-Type`}),` assignment.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Default Headers`}),` — set global headers like `,(0,c.jsx)(n.code,{children:`Authorization`}),` or `,(0,c.jsx)(n.code,{children:`X-App-Version`}),` once.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dynamic Content-Type`}),` — automatically manages the `,(0,c.jsx)(n.code,{children:`Content-Type`}),` header (defaults to `,(0,c.jsx)(n.code,{children:`application/json;charset=UTF-8`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Safe Merging`}),` — merges multiple header sources without mutating the original objects.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Validation`}),` — ensures only valid objects are processed as headers.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`ApiHeaders()`}),` constructor.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ApiHeaders } from '@dxtmisha/functional'

// 1. Simple initialization
const apiHeaders = new ApiHeaders()

// 2. Setting default headers
apiHeaders.set({ 'X-App-Platform': 'web' })

// 3. Getting headers for a request
const headers = apiHeaders.get({ 'Authorization': 'Bearer token123' })
// Result: { 'X-App-Platform': 'web', 'Authorization': 'Bearer token123', 'Content-Type': 'application/json;charset=UTF-8' }
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(value?: Record<string, string> | null, type = 'application/json;charset=UTF-8'): Record<string, string> | undefined`}),` — Intersects default headers with custom ones and injects `,(0,c.jsx)(n.code,{children:`Content-Type`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(headers: Record<string, string>): this`}),` — Sets or updates the default headers object.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};