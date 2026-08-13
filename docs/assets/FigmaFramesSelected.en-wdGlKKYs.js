import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma-code/Classes/FigmaFramesSelected - Managing selected frames`}),`
`,(0,c.jsxs)(t.h1,{id:`class-figmaframesselected`,children:[`Class `,(0,c.jsx)(t.code,{children:`FigmaFramesSelected`})]}),`
`,(0,c.jsx)(t.p,{children:`A static utility class for managing a list of frame identifiers selected by the user within the plugin context. It handles data persistence using Figma's storage and ensures synchronization between the plugin logic and the user interface.`}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Data Persistence`}),` — The list of selected IDs is saved via `,(0,c.jsx)(t.code,{children:`FigmaStorage`}),`, allowing the selection to persist across plugin sessions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bi-directional Sync`}),` — The `,(0,c.jsx)(t.code,{children:`send()`}),` method initializes listeners for UI messages, enabling seamless updates to the selection list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Efficient Caching`}),` — Uses an internal cache to provide instant access to the selection list without frequent storage reads.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsx)(t.p,{children:`Since this is a static class, no instantiation is required. Typically, you only need to call the communication setup in your main plugin file.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaFramesSelected } from '@dxtmisha/figma-code'

// Setup listeners for UI messages
FigmaFramesSelected.send()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`selection-management`,children:`Selection Management`}),`
`,(0,c.jsx)(t.p,{children:`Methods for interacting with the current list of selected frame IDs.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`has(id: string): boolean`}),` — Checks if a specific frame ID is in the selection list.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): string[]`}),` — Retrieves the current list of selected frame IDs (uses cache).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(id: string): void`}),` — Adds a frame ID to the list and persists the change.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove(id: string): void`}),` — Removes a frame ID from the list and persists the change.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toggle(id: string, selected: boolean): void`}),` — Adds or removes an ID based on the `,(0,c.jsx)(t.code,{children:`selected`}),` flag.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`communication`,children:`Communication`}),`
`,(0,c.jsx)(t.p,{children:`Methods for synchronizing state with the UI.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`send(): void`}),` — Sets up `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`}),` listeners to handle selection updates from the UI.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};