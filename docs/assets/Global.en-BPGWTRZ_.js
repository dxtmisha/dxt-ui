import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/Global - Global Data`}),`
`,(0,c.jsx)(n.h1,{id:`global-class`,children:`Global Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A static utility class for storing and retrieving application-wide global data. Data is written `,(0,c.jsx)(n.strong,{children:`once`}),` during initialization and is thereafter available as read-only. Used to pass server-side configuration or data to the client-side application.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`One-time initialization`}),` — The `,(0,c.jsx)(n.code,{children:`add`}),` method only works on the first call; subsequent calls are ignored.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Deep copy`}),` — Data is copied via `,(0,c.jsx)(n.code,{children:`copyObjectLite`}),`, isolating it from external mutations.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`No state management`}),` — Intended purely for static configuration.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Static Access`}),` — all methods are static, eliminating the need for instantiation (`,(0,c.jsx)(n.code,{children:`new Global()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsx)(n.p,{children:`Since the class is static, its methods can be called directly.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Global } from '@dxtmisha/functional-basic'

// Set once (e.g., on application load)
Global.add({
  apiUrl: 'https://api.myapp.com',
  appName: 'My Application'
})

// Retrieve value by key
console.log(Global.get('apiUrl')) // 'https://api.myapp.com'
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(data: Record<string, any>): void`}),` — Saves the global data. Only works `,(0,c.jsx)(n.strong,{children:`on the first call`}),`. Subsequent calls are silently ignored.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get<R>(name: string): R`}),` — Returns the value for a given key from the stored global data.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`retrieving-data`,children:`Retrieving Data`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { Global } from '@dxtmisha/functional-basic'

const apiUrl = Global.get<string>('apiUrl')
console.log(apiUrl) // 'https://api.myapp.com'

const flags = Global.get<Record<string, boolean>>('featureFlags')
console.log(flags.darkMode) // true
`})}),`
`,(0,c.jsx)(n.h3,{id:`initialization-on-app-start`,children:`Initialization on App Start`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// main.ts (executed once before mounting the app)
Global.add(window.__SERVER_DATA__ ?? {})

// Anywhere else in the code
const serverId = Global.get('serverId')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};