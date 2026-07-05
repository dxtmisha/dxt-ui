import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-code/Classes/FigmaStorage - Working with document storage`}),`
`,(0,c.jsxs)(n.h1,{id:`class-figmastorage`,children:[`Class `,(0,c.jsx)(n.code,{children:`FigmaStorage`})]}),`
`,(0,c.jsxs)(n.p,{children:[`A high-level wrapper for Figma's `,(0,c.jsx)(n.code,{children:`setPluginData`}),` and `,(0,c.jsx)(n.code,{children:`getPluginData`}),` APIs. It allows for storing structured data directly within the Figma document, either globally (`,(0,c.jsx)(n.code,{children:`figma.root`}),`) or attached to specific nodes. These data are shared among all users collaborating on the file.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Node-Specific Storage`}),` — Data can be bound to any Figma node (Frame, Group, etc.) or the document root.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Shared Access`}),` — Unlike client storage, plugin data is saved inside the `,(0,c.jsx)(n.code,{children:`.fig`}),` file and is synchronized across all users.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Instance Management`}),` — The class uses internal caching to ensure that multiple calls for the same key on the same node return the same instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Automatic Serialization`}),` — Handles JSON conversion for complex data structures transparently.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`Access an instance using static methods. You can provide a raw node or a node ID.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaStorage } from '@dxtmisha/figma-code'

// Get instance for the entire document
const globalStorage = FigmaStorage.getInstance<object>('app-settings')

// Get instance for a specific node by ID
const nodeStorage = await FigmaStorage.getInstanceById<string>('element-name', '1:123')
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`data-access`,children:`Data Access`}),`
`,(0,c.jsx)(n.p,{children:`Methods for managing data stored in the document.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(defaultValue?: T | (() => T)): T | undefined`}),` — Retrieves data from the node. Sets a default value if the storage is empty.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(value?: T | (() => T)): T | undefined`}),` — Updates the data for the node and returns the new value.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(): this`}),` — Clears the plugin data for the specified key on the node.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`instance-management-static`,children:`Instance Management (Static)`}),`
`,(0,c.jsx)(n.p,{children:`Methods for retrieving class instances.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static getInstance<T>(name: string, item: UiFigmaNode): FigmaStorage<T>`}),` — Returns an instance for a specific node.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static getInstanceById<T>(name: string, id?: string): Promise<FigmaStorage<T>>`}),` — Asynchronously retrieves an instance using a node ID.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};