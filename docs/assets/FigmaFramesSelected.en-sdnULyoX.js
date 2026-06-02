import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-code/Classes/FigmaFramesSelected - Managing selected frames`}),`
`,(0,c.jsxs)(n.h1,{id:`class-figmaframesselected`,children:[`Class `,(0,c.jsx)(n.code,{children:`FigmaFramesSelected`})]}),`
`,(0,c.jsx)(n.p,{children:`A static utility class for managing a list of frame identifiers selected by the user within the plugin context. It handles data persistence using Figma's storage and ensures synchronization between the plugin logic and the user interface.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Persistence`}),` — The list of selected IDs is saved via `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),`, allowing the selection to persist across plugin sessions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bi-directional Sync`}),` — The `,(0,c.jsx)(n.code,{children:`send()`}),` method initializes listeners for UI messages, enabling seamless updates to the selection list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Efficient Caching`}),` — Uses an internal cache to provide instant access to the selection list without frequent storage reads.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(n.p,{children:`Since this is a static class, no instantiation is required. Typically, you only need to call the communication setup in your main plugin file.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaFramesSelected } from '@dxtmisha/figma-code'

// Setup listeners for UI messages
FigmaFramesSelected.send()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`selection-management`,children:`Selection Management`}),`
`,(0,c.jsx)(n.p,{children:`Methods for interacting with the current list of selected frame IDs.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(id: string): boolean`}),` — Checks if a specific frame ID is in the selection list.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): string[]`}),` — Retrieves the current list of selected frame IDs (uses cache).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(id: string): void`}),` — Adds a frame ID to the list and persists the change.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(id: string): void`}),` — Removes a frame ID from the list and persists the change.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggle(id: string, selected: boolean): void`}),` — Adds or removes an ID based on the `,(0,c.jsx)(n.code,{children:`selected`}),` flag.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`communication`,children:`Communication`}),`
`,(0,c.jsx)(n.p,{children:`Methods for synchronizing state with the UI.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(): void`}),` — Sets up `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),` listeners to handle selection updates from the UI.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};