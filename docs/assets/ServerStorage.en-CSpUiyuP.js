import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ServerStorage - Data Isolation in SSR`}),`
`,(0,c.jsx)(n.h1,{id:`serverstorage-class`,children:`ServerStorage Class`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ServerStorage`}),` is a mechanism for managing `,(0,c.jsx)(n.strong,{children:`isolated global state`}),` in applications with SSR (Server-Side Rendering) support.`]}),`
`,(0,c.jsx)(n.p,{children:`The class allows you to work with data as easily as with static variables, but ensures that user data on the server does not intermingle between parallel requests.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Request Isolation`}),` — data on the server is bound to the context of the current human or machine request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hydration`}),` — ability to automatically transfer state from the server to the client via JSON.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Security`}),` — automatic XSS escaping during data transfer.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ServerStorage } from '@dxtmisha/functional-basic'

// Save data with a hydration flag (will be available on the client)
ServerStorage.set('theme', () => 'dark', true)

// Retrieve data
const theme = ServerStorage.get('theme') // 'dark'
`})}),`
`,(0,c.jsx)(n.h2,{id:`data-access-methods`,children:`Data Access Methods`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Retrieves a value by key. If it doesn't exist, creates it using the default value factory.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — unique storage key.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: () => T`}),` — function that returns the default value if not found.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hydration: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, the value will be included in the JSON for the client (default: `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T`})]}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsx)(n.p,{children:`Saves a value to the storage.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — unique storage key.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: () => T`}),` — function that returns the value to save.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`hydration: boolean`}),` — if `,(0,c.jsx)(n.code,{children:`true`}),`, the value will be included in the JSON for the client (default: `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T`})]}),`
`,(0,c.jsx)(n.h2,{id:`utility--lifecycle-methods`,children:`Utility & Lifecycle Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(listener: () => Record<string, any>): typeof ServerStorage`}),` — Initializes the storage with a context listener. On the server, this listener should return an object unique to each request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(key: string): boolean`}),` — Checks for the existence of a key in the current context.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(key: string): void`}),` — Removes a value by key from the storage.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setErrorStatus(hide: boolean): void`}),` — Sets whether to hide context missing errors in the console/error center.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset(): void`}),` — Resets the storage, clearing all stored data and the listener. Useful for performing cleanup.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toString(): string`}),` — Generates an HTML `,(0,c.jsx)(n.code,{children:`<script type="application/json">`}),` tag containing all data marked for hydration.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`isolation-in-ssr`,children:`Isolation in SSR`}),`
`,(0,c.jsxs)(n.p,{children:[`In standard client-side applications, global state belongs to a single user. However, in an SSR environment, one Node.js process handles many concurrent requests simultaneously. To prevent user data from "leaking" between these requests (State Pollution), `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` must be correctly isolated.`]}),`
`,(0,c.jsxs)(n.p,{children:[`To achieve this, you must initialize `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` with the `,(0,c.jsx)(n.code,{children:`init`}),` method. This method accepts a listener function that returns a data object unique to the current request context.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsx)(n.p,{children:`Important: Correct isolation is critical for security. If not configured, data from one user could be served to another.`}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`nodejs-asynclocalstorage`,children:`Node.js (AsyncLocalStorage)`}),`
`,(0,c.jsxs)(n.p,{children:[`The recommended way for Node.js is to use `,(0,c.jsx)(n.code,{children:`AsyncLocalStorage`}),` to store context throughout an asynchronous request.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AsyncLocalStorage } from 'node:async_hooks'
import { ServerStorage } from '@dxtmisha/functional-basic'

const als = new AsyncLocalStorage<Record<string, any>>()

// Initialization
ServerStorage.init(() => als.getStore() || {})

// Usage in server
http.createServer((req, res) => {
  als.run({}, () => {
    // All calls to ServerStorage inside this block will be isolated
    ServerStorage.set('requestId', () => req.id)
  })
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`nuxt--nitro`,children:`Nuxt / Nitro`}),`
`,(0,c.jsxs)(n.p,{children:[`In Nuxt/Nitro, isolation is managed via the `,(0,c.jsx)(n.code,{children:`h3`}),` event context using `,(0,c.jsx)(n.code,{children:`useEvent()`}),` within a server plugin.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// server/plugins/server-storage.ts
import { ServerStorage } from '@dxtmisha/functional-basic'

export default defineNitroPlugin(() => {
  ServerStorage.init(() => {
    try {
      return useEvent().context
    } catch {
      return {}
    }
  })
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`hydration-transferring-data-to-client`,children:`Hydration (Transferring Data to Client)`}),`
`,(0,c.jsx)(n.p,{children:`Hydration is the process of transferring the application state set on the server to the client. This allows the browser to pick up where the server left off, ensuring consistency and preventing redundant data fetching or "flickering" during page load.`}),`
`,(0,c.jsx)(n.h3,{id:`1-identify-data-for-hydration`,children:`1. Identify Data for Hydration`}),`
`,(0,c.jsxs)(n.p,{children:[`When using `,(0,c.jsx)(n.code,{children:`set()`}),` or `,(0,c.jsx)(n.code,{children:`get()`}),`, pass `,(0,c.jsx)(n.code,{children:`true`}),` as the third parameter (`,(0,c.jsx)(n.code,{children:`hydration`}),`). Only values marked this way will be transferred to the client.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Set on server
ServerStorage.set('userSettings', () => ({ fontSize: 16 }), true)
`})}),`
`,(0,c.jsx)(n.h3,{id:`2-injecting-state-into-html`,children:`2. Injecting State into HTML`}),`
`,(0,c.jsxs)(n.p,{children:[`On the server, you must call `,(0,c.jsx)(n.code,{children:`ServerStorage.toString()`}),` and insert its result into your page template (usually at the very end of the `,(0,c.jsx)(n.code,{children:`<body>`}),` tag, before your application scripts).`]}),`
`,(0,c.jsx)(n.p,{children:`This method generates a special script tag:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-html`,children:`<script id="__ui:server:storage:id__" type="application/json">
  {"userSettings":{"fontSize":16}}
<\/script>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};