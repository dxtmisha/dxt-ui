import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/nitro-basic/Functions/uiCreateServerApp - Full Server Initialization`}),`
`,(0,c.jsx)(t.h1,{id:`uicreateserverapp`,children:(0,c.jsx)(t.code,{children:`uiCreateServerApp`})}),`
`,(0,c.jsx)(t.p,{children:`A comprehensive asynchronous function to initialize the application on the server side. It configures everything necessary for SSR: headers, storage, API, routing, and performs HTML rendering.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Key Stages:`})}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsx)(t.li,{children:`Initialization of headers, storage, and cookies.`}),`
`,(0,c.jsx)(t.li,{children:`Configuration of the API client and functional plugins.`}),`
`,(0,c.jsx)(t.li,{children:`Synchronization of the router with the current URL.`}),`
`,(0,c.jsx)(t.li,{children:`Rendering the application into a string.`}),`
`,(0,c.jsx)(t.li,{children:`Substitution of data (language, meta, scripts, content) into the HTML template.`}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
An object with the rendered page body, metadata, and headers.`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h3,{id:`nitroappoptions`,children:`NitroAppOptions`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`api?: ApiConfig`}),` — configuration for the API client.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`translate?: TranslateConfig`}),` — configuration for the translation service.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`metaSuffix?: string`}),` — suffix to be appended to all page titles.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`icons?: IconsConfig`}),` — configuration for the icon management service.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`router?: Router`}),` — Vue Router instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorCauses?: ErrorCenterCauseList`}),` — error causes list for the error center.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { uiCreateServerApp } from '@dxtmisha/nitro-basic'

const data = await uiCreateServerApp(app, request, router, options, action, context, htmlTemplate)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};