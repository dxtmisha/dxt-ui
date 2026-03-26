import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/figma-code/Classes/FigmaStorage - Storage Manager`}),`
`,(0,c.jsx)(n.h1,{id:`figmastorage-class`,children:`FigmaStorage Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A class for robust management of Figma's `,(0,c.jsx)(n.code,{children:`PluginData`}),`. It provides a high-level API for storing, retrieving, and expiring data on Figma nodes (defaulting to the root node), with support for in-memory caching and default values.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Persistence`}),` — Wraps `,(0,c.jsx)(n.code,{children:`getPluginData`}),` and `,(0,c.jsx)(n.code,{children:`setPluginData`}),` for seamless data storage.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`In-Memory Caching`}),` — Stores values in the instance for fast access during the current execution context.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Expiration Logic`}),` — Supports age-based caching to invalidate stale data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Functional Values`}),` — Supports passing functions as values or default values for dynamic data generation.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`FigmaStorage(name, item, cache)`}),` constructor.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-parameters`,children:`Generic Parameters`}),`
`,(0,c.jsx)(n.p,{children:`The class supports a generic parameter for typed data management:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — The type of the value being stored and retrieved.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — The unique key name for the storage item.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: PluginDataMixin = figma.root`}),` — The Figma node where the data will be stored. Defaults to `,(0,c.jsx)(n.code,{children:`figma.root`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cache: number`}),` — (Optional) TTL in seconds for the stored data.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaStorage } from '@dxtmisha/figma-code'

// 1. Initialize with implicit typing
const settings = new FigmaStorage('plugin-settings')

// 2. Initialize with explicit generic for strict typing
interface MyData { theme: string; version: number }
const typedSettings = new FigmaStorage<MyData>('app-data')

// 3. Initialize with a 1-hour cache
const cacheSettings = new FigmaStorage('cache', figma.root, 3600)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`get`,children:(0,c.jsx)(n.code,{children:`get`})}),`
`,(0,c.jsx)(n.p,{children:`Retrieves data from storage with support for default values and cache validation.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`defaultValue: T | (() => T)`}),` — (Optional) Value returned (and saved) if storage is empty or expired.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const val = settings.get('default_val')
`})}),`
`,(0,c.jsx)(n.h3,{id:`set`,children:(0,c.jsx)(n.code,{children:`set`})}),`
`,(0,c.jsxs)(n.p,{children:[`Updates the data in both the in-memory cache and the Figma node's `,(0,c.jsx)(n.code,{children:`PluginData`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T | (() => T)`}),` — (Optional) New value or a function that returns the new value.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`T | undefined`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`settings.set({ theme: 'dark' })
`})}),`
`,(0,c.jsx)(n.h3,{id:`remove`,children:(0,c.jsx)(n.code,{children:`remove`})}),`
`,(0,c.jsxs)(n.p,{children:[`Clears the data from both the in-memory cache and the Figma node's `,(0,c.jsx)(n.code,{children:`PluginData`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`settings.remove()
`})}),`
`,(0,c.jsx)(n.h3,{id:`getname`,children:(0,c.jsx)(n.code,{children:`getName`})}),`
`,(0,c.jsx)(n.p,{children:`Returns the key name used for this storage instance.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`string`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`console.log(settings.getName())
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};