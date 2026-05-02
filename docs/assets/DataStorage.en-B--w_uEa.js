import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/DataStorage - Local and Session Storage Wrapper`}),`
`,(0,c.jsx)(n.h1,{id:`datastorage-class`,children:`DataStorage Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A versatile class for interacting with the browser's `,(0,c.jsx)(n.code,{children:`localStorage`}),` and `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`. It features built-in prefixes, cache expiration, memory caching for active instances, and automatic JSON serialization.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DataStorage`}),` is an `,(0,c.jsx)(n.strong,{children:`auxiliary class`}),`, designed for low-level interaction with browser storage. In most cases, it is recommended to use higher-level classes like `,(0,c.jsx)(n.code,{children:`Cookie`}),` or `,(0,c.jsx)(n.code,{children:`Api`}),` for specific data needs.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Serialization`}),` — seamlessly handles JSON parsing and stringifying for stored configurations and objects.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Time-based Caching`}),` — allows saving objects with timestamps and respects age constraints during data retrieval.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Prefix Management`}),` — supports global and instance-specific prefixes to isolate and group keys within `,(0,c.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Memory Efficiency`}),` — creates singletons for identical keys, avoiding duplicate reads from disk.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`SSR Ready`}),` — uses request-specific isolation during server-side rendering to prevent data leaks between parallel requests.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`DataStorage(name, isSession)`}),` constructor.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsx)(n.p,{children:`The class supports the following generic to ensure strict typing of the stored value:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — The type of the value being stored.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — the name of the storage key.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSession: boolean = false`}),` — whether to use `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` (defaults to `,(0,c.jsx)(n.code,{children:`localStorage`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DataStorage } from '@dxtmisha/functional-basic'

// 1. Create an instance for localStorage
const settings = new DataStorage('settings')

// 2. Create an instance for sessionStorage
const session = new DataStorage('user_session', true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`storage-access`,children:`Storage Access`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(defaultValue?: T | (() => T), cache?: number): T | undefined`}),` — Retrieves the currently saved value. If a cache time is provided, it returns `,(0,c.jsx)(n.code,{children:`undefined`}),` if the data is stale.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(value?: T | (() => T)): T | undefined`}),` — Sets or updates the value in the storage mechanism. Passing `,(0,c.jsx)(n.code,{children:`undefined`}),` deletes the item.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Clears the corresponding key from the storage environment and the memory instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(): this`}),` — Forces the memory instance to synchronize with the current raw data inside the physical Storage APIs.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static setPrefix(newPrefix: string): void`}),` — Changes the global prefix applied to new instances. The default prefix is `,(0,c.jsx)(n.code,{children:`ui-storage`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ssr-and-hydration`,children:`SSR and Hydration`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`DataStorage`}),` class is fully compatible with Server-Side Rendering (SSR). It uses a special registry to isolate instances between different HTTP requests on the server.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`To avoid hydration mismatches (when the server-rendered HTML differs from the client-rendered one), it is recommended to call `,(0,c.jsx)(n.code,{children:`get()`}),` inside `,(0,c.jsx)(n.code,{children:`useEffect`}),` or other client-only hooks. On the server, `,(0,c.jsx)(n.code,{children:`get()`}),` will return `,(0,c.jsx)(n.code,{children:`undefined`}),` (or the `,(0,c.jsx)(n.code,{children:`defaultValue`}),`), as `,(0,c.jsx)(n.code,{children:`localStorage`}),` is not available.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`using-default-values-and-cache`,children:`Using Default Values and Cache`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const settings = new DataStorage('user_settings')

// Get data, falling back to an empty object if not found
const currentSettings = settings.get({})

// Get data only if it was saved within the last 60 seconds
const cachedItem = settings.get(undefined, 60)
`})}),`
`,(0,c.jsx)(n.h3,{id:`manual-synchronization`,children:`Manual Synchronization`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const storage = new DataStorage('shared_data')

// ... data might be changed in another tab or part of the app
storage.update() // Sync memory instance with disk
console.log(storage.get())
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};