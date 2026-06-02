import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-code/Classes/FigmaClientStorage - Working with client storage`}),`
`,(0,c.jsxs)(n.h1,{id:`class-figmaclientstorage`,children:[`Class `,(0,c.jsx)(n.code,{children:`FigmaClientStorage`})]}),`
`,(0,c.jsxs)(n.p,{children:[`A high-level wrapper for Figma's `,(0,c.jsx)(n.code,{children:`clientStorage`}),` API. It provides a convenient interface for persistent data storage on the user's machine, supporting caching, default values, and automatic data management.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Singleton Access`}),` — Use `,(0,c.jsx)(n.code,{children:`getInstance()`}),` to ensure consistent access to the same storage key across different parts of the plugin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Default Values`}),` — The `,(0,c.jsx)(n.code,{children:`get()`}),` method can accept a default value or an asynchronous function to initialize the storage if it's empty.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cache Support`}),` — Integrates with `,(0,c.jsx)(n.code,{children:`FigmaStorageData`}),` to manage data freshness and minimize redundant API calls.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Access an instance using the static `,(0,c.jsx)(n.code,{children:`getInstance()`}),` method.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaClientStorage } from '@dxtmisha/figma-code'

// Get instance for 'user-settings'
const storage = FigmaClientStorage.getInstance<object>('user-settings')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`data-access`,children:`Data Access`}),`
`,(0,c.jsx)(n.h4,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Retrieves data from the storage. If the storage is empty and a default value is provided, it sets and returns that value.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue?: T | (() => T | Promise<T>)`}),` — (Optional) A value or function to initialize storage if no data is found.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T | undefined>`}),` — The stored value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const theme = await storage.get('light')
`})}),`
`,(0,c.jsx)(n.h4,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsx)(n.p,{children:`Updates the data in the storage.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T | (() => T | Promise<T>)`}),` — The new value or a function that returns it.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<T | undefined>`}),` — The newly set value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await storage.set('dark')
`})}),`
`,(0,c.jsx)(n.h4,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsx)(n.p,{children:`Deletes the data associated with the storage key.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<this>`}),` — The current instance.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`await storage.remove()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};