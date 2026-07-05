import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/nitro-basic/Functions/uiCreateSsrRouter - Create SSR Router`}),`
`,(0,c.jsx)(n.h1,{id:`uicreatessrrouter`,children:(0,c.jsx)(n.code,{children:`uiCreateSsrRouter`})}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a Vue router instance with a history type suitable for the current runtime environment. On the server, it uses `,(0,c.jsx)(n.code,{children:`createMemoryHistory`}),`, and in the browser, it uses `,(0,c.jsx)(n.code,{children:`createWebHistory`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`routes: RouteRecordRaw[]`}),` — A list of routes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: NitroAppRouterOptions`}),` — Additional router options.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { uiCreateSsrRouter } from '@dxtmisha/nitro-basic'

const router = uiCreateSsrRouter(routes)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};