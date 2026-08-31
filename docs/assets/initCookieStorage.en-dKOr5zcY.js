import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/nitro-basic/Functions/initCookieStorage - Cookie Storage Initialization`}),`
`,(0,c.jsx)(t.h1,{id:`initcookiestorage`,children:(0,c.jsx)(t.code,{children:`initCookieStorage`})}),`
`,(0,c.jsxs)(t.p,{children:[`A function to initialize cookie storage in a Vue application. It extracts the `,(0,c.jsx)(t.code,{children:`Cookie`}),` string from the HTTP request and provides it via the `,(0,c.jsx)(t.code,{children:`provide`}),` mechanism using the `,(0,c.jsx)(t.code,{children:`NITRO_APP_COOKIE`}),` key. This allows components and composables to access cookies during server-side rendering.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`app: App<T>`}),` — The Vue application instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`request: Request`}),` — The HTTP request object.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initCookieStorage } from '@dxtmisha/nitro-basic'

// In a server handler
initCookieStorage(app, request)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};