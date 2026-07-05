import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/nitro-basic/Functions/initApi - API Client Initialization`}),`
`,(0,c.jsx)(n.h1,{id:`initapi`,children:(0,c.jsx)(n.code,{children:`initApi`})}),`
`,(0,c.jsx)(n.p,{children:`A utility function that initializes the API client for the current request on the server. It sets the base origin extracted from the request object to ensure that absolute URLs are correctly formed when making API requests during server-side rendering (SSR).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: Request`}),` — The incoming server HTTP request object.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Usage Example:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initApi } from '@dxtmisha/nitro-basic'

export default defineEventHandler((event) => {
  const request = toWebRequest(event)
  initApi(request)
  
  // Now the Api client is configured with the correct origin
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};