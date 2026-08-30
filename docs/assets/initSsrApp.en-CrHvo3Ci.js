import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/nitro-basic/Functions/initSsrApp - SSR App Rendering`}),`
`,(0,c.jsx)(t.h1,{id:`initssrapp`,children:(0,c.jsx)(t.code,{children:`initSsrApp`})}),`
`,(0,c.jsx)(t.p,{children:`An asynchronous function that renders a Vue application to an HTML string and extracts additional context data (e.g., teleports). This is a core step in generating a server response.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`app: App<T>`}),` — The Vue application instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`context: SSRContext`}),` (default `,(0,c.jsx)(t.code,{children:`{}`}),`) — The server rendering context.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<{ appHtml, teleportsHtml, context }>`}),` — An object containing the application HTML, teleports HTML, and the updated context.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initSsrApp } from '@dxtmisha/nitro-basic'

const { appHtml, teleportsHtml } = await initSsrApp(app)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};