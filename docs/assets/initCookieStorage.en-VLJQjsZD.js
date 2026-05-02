import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/nitro-basic/Functions/initCookieStorage - Cookie Storage Initialization`}),`
`,(0,c.jsx)(n.h1,{id:`initcookiestorage`,children:(0,c.jsx)(n.code,{children:`initCookieStorage`})}),`
`,(0,c.jsxs)(n.p,{children:[`A function to initialize cookie storage in a Vue application. It extracts the `,(0,c.jsx)(n.code,{children:`Cookie`}),` string from the HTTP request and provides it via the `,(0,c.jsx)(n.code,{children:`provide`}),` mechanism using the `,(0,c.jsx)(n.code,{children:`NITRO_APP_COOKIE`}),` key. This allows components and composables to access cookies during server-side rendering.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`app: App<T>`}),` — The Vue application instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`request: Request`}),` — The HTTP request object.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initCookieStorage } from '@dxtmisha/nitro-basic'

// In a server handler
initCookieStorage(app, request)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};