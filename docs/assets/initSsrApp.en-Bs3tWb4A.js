import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/nitro-basic/Functions/initSsrApp - SSR App Rendering`}),`
`,(0,c.jsx)(n.h1,{id:`initssrapp`,children:(0,c.jsx)(n.code,{children:`initSsrApp`})}),`
`,(0,c.jsx)(n.p,{children:`An asynchronous function that renders a Vue application to an HTML string and extracts additional context data (e.g., teleports). This is a core step in generating a server response.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app: App<T>`}),` — The Vue application instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`context: SSRContext`}),` (default `,(0,c.jsx)(n.code,{children:`{}`}),`) — The server rendering context.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<{ appHtml, teleportsHtml, context }>`}),` — An object containing the application HTML, teleports HTML, and the updated context.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initSsrApp } from '@dxtmisha/nitro-basic'

const { appHtml, teleportsHtml } = await initSsrApp(app)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};