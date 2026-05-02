import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/nitro-basic/Functions/uiCreateServerApp - Full Server Initialization`}),`
`,(0,c.jsx)(n.h1,{id:`uicreateserverapp`,children:(0,c.jsx)(n.code,{children:`uiCreateServerApp`})}),`
`,(0,c.jsx)(n.p,{children:`A comprehensive asynchronous function to initialize the application on the server side. It configures everything necessary for SSR: headers, storage, API, routing, and performs HTML rendering.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Key Stages:`})}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsx)(n.li,{children:`Initialization of headers, storage, and cookies.`}),`
`,(0,c.jsx)(n.li,{children:`Configuration of the API client and functional plugins.`}),`
`,(0,c.jsx)(n.li,{children:`Synchronization of the router with the current URL.`}),`
`,(0,c.jsx)(n.li,{children:`Rendering the application into a string.`}),`
`,(0,c.jsx)(n.li,{children:`Substitution of data (language, meta, scripts, content) into the HTML template.`}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
An object with the rendered page body, metadata, and headers.`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`nitroappoptions`,children:`NitroAppOptions`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`api?: ApiConfig`}),` — configuration for the API client.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`translate?: TranslateConfig`}),` — configuration for the translation service.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`metaSuffix?: string`}),` — suffix to be appended to all page titles.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`icons?: IconsConfig`}),` — configuration for the icon management service.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`router?: Router`}),` — Vue Router instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCauses?: ErrorCenterCauseList`}),` — error causes list for the error center.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { uiCreateServerApp } from '@dxtmisha/nitro-basic'

const data = await uiCreateServerApp(app, request, router, options, action, context, htmlTemplate)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};