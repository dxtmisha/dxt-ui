import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma-code/Classes/FigmaStorage - Working with document storage`}),`
`,(0,c.jsxs)(t.h1,{id:`class-figmastorage`,children:[`Class `,(0,c.jsx)(t.code,{children:`FigmaStorage`})]}),`
`,(0,c.jsxs)(t.p,{children:[`A high-level wrapper for Figma's `,(0,c.jsx)(t.code,{children:`setPluginData`}),` and `,(0,c.jsx)(t.code,{children:`getPluginData`}),` APIs. It allows for storing structured data directly within the Figma document, either globally (`,(0,c.jsx)(t.code,{children:`figma.root`}),`) or attached to specific nodes. These data are shared among all users collaborating on the file.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Node-Specific Storage`}),` — Data can be bound to any Figma node (Frame, Group, etc.) or the document root.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Shared Access`}),` — Unlike client storage, plugin data is saved inside the `,(0,c.jsx)(t.code,{children:`.fig`}),` file and is synchronized across all users.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Instance Management`}),` — The class uses internal caching to ensure that multiple calls for the same key on the same node return the same instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Automatic Serialization`}),` — Handles JSON conversion for complex data structures transparently.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`Access an instance using static methods. You can provide a raw node or a node ID.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaStorage } from '@dxtmisha/figma-code'

// Get instance for the entire document
const globalStorage = FigmaStorage.getInstance<object>('app-settings')

// Get instance for a specific node by ID
const nodeStorage = await FigmaStorage.getInstanceById<string>('element-name', '1:123')
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`data-access`,children:`Data Access`}),`
`,(0,c.jsx)(t.p,{children:`Methods for managing data stored in the document.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(defaultValue?: T | (() => T)): T | undefined`}),` — Retrieves data from the node. Sets a default value if the storage is empty.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(value?: T | (() => T)): T | undefined`}),` — Updates the data for the node and returns the new value.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove(): this`}),` — Clears the plugin data for the specified key on the node.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`instance-management-static`,children:`Instance Management (Static)`}),`
`,(0,c.jsx)(t.p,{children:`Methods for retrieving class instances.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getInstance<T>(name: string, item: UiFigmaNode): FigmaStorage<T>`}),` — Returns an instance for a specific node.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`static getInstanceById<T>(name: string, id?: string): Promise<FigmaStorage<T>>`}),` — Asynchronously retrieves an instance using a node ID.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};