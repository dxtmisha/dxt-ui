import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/Global - Global Data`}),`
`,(0,c.jsx)(t.h1,{id:`global-class`,children:`Global Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A static utility class for storing and retrieving application-wide global data. Data is written `,(0,c.jsx)(t.strong,{children:`once`}),` during initialization and is thereafter available as read-only. Used to pass server-side configuration or data to the client-side application.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`One-time initialization`}),` — The `,(0,c.jsx)(t.code,{children:`add`}),` method only works on the first call; subsequent calls are ignored.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Deep copy`}),` — Data is copied via `,(0,c.jsx)(t.code,{children:`copyObjectLite`}),`, isolating it from external mutations.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`No state management`}),` — Intended purely for static configuration.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Static Access`}),` — all methods are static, eliminating the need for instantiation (`,(0,c.jsx)(t.code,{children:`new Global()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsx)(t.p,{children:`Since the class is static, its methods can be called directly.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Global } from '@dxtmisha/functional-basic'

// Set once (e.g., on application load)
Global.add({
  apiUrl: 'https://api.myapp.com',
  appName: 'My Application'
})

// Retrieve value by key
console.log(Global.get('apiUrl')) // 'https://api.myapp.com'
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(data: Record<string, any>): void`}),` — Saves the global data. Only works `,(0,c.jsx)(t.strong,{children:`on the first call`}),`. Subsequent calls are silently ignored.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get<R>(name: string): R`}),` — Returns the value for a given key from the stored global data.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`retrieving-data`,children:`Retrieving Data`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { Global } from '@dxtmisha/functional-basic'

const apiUrl = Global.get<string>('apiUrl')
console.log(apiUrl) // 'https://api.myapp.com'

const flags = Global.get<Record<string, boolean>>('featureFlags')
console.log(flags.darkMode) // true
`})}),`
`,(0,c.jsx)(t.h3,{id:`initialization-on-app-start`,children:`Initialization on App Start`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`// main.ts (executed once before mounting the app)
Global.add(window.__SERVER_DATA__ ?? {})

// Anywhere else in the code
const serverId = Global.get('serverId')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};