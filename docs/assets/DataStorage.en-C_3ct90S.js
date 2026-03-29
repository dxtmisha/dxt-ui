import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/DataStorage - Local and Session Storage Wrapper`}),`
`,(0,c.jsx)(n.h1,{id:`datastorage-class`,children:`DataStorage Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A versatile class for interacting with the browser's `,(0,c.jsx)(n.code,{children:`localStorage`}),` and `,(0,c.jsx)(n.code,{children:`sessionStorage`}),`. It features built-in prefixes, cache expiration, memory caching for active instances, and automatic JSON serialization.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Serialization`}),` — seamlessly handles JSON parsing and stringifying for stored configurations and objects.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Time-based Caching`}),` — allows saving objects with timestamps and respects age constraints during data retrieval.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Prefix Management`}),` — supports global and instance-specific prefixes to isolate and group keys within `,(0,c.jsx)(n.code,{children:`localStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Memory Efficiency`}),` — creates singletons for identical keys, avoiding duplicate reads from disk.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`DataStorage(name, isSession)`}),` constructor.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — the name of the storage key.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isSession: boolean = false`}),` — whether to use `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` (defaults to `,(0,c.jsx)(n.code,{children:`localStorage`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { DataStorage } from '@dxtmisha/functional'

// 1. Create an instance for localStorage
const settings = new DataStorage('settings')

// 2. Create an instance for sessionStorage
const session = new DataStorage('user_session', true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`global-settings`,children:`Global Settings`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setPrefix(newPrefix: string): void`}),` (static) — Changes the global prefix applied to new instances attempting to use `,(0,c.jsx)(n.code,{children:`localStorage`}),`. The default prefix is `,(0,c.jsx)(n.code,{children:`ui-storage`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`data-management`,children:`Data Management`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Retrieves the currently saved structured configuration.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T)`}),` — a fallback value to return if the storage is empty.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cache?: number`}),` — maximum allowed age (in seconds). If the data is older, it behaves as if nothing was stored.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`}),` — the stored value or `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Get data, falling back to an empty object if not found
const currentSettings = settings.get({})

// Get data only if it was saved within the last 60 seconds
const cachedItem = settings.get(undefined, 60)
`})}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsx)(n.p,{children:`Sets or updates the value in the storage mechanism.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T | (() => T)`}),` — the value to save. Passing `,(0,c.jsx)(n.code,{children:`undefined`}),` will delete the item from storage.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`}),` — the stored value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`settings.set({ theme: 'dark', notifications: true })
`})}),`
`,(0,c.jsx)(n.h2,{id:`additional-methods`,children:`Additional Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Clears the corresponding key actively from the `,(0,c.jsx)(n.code,{children:`localStorage`}),` or `,(0,c.jsx)(n.code,{children:`sessionStorage`}),` environments, and immediately unsets the existing memory instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(): this`}),` — Forces the memory instance to synchronize tightly with the current raw data inside the physical Storage APIs.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};