import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/figma-code/Classes/FigmaPluginMessenger - Plugin messenger (Backend)`}),`
`,(0,c.jsxs)(n.h1,{id:`class-figmapluginmessenger`,children:[`Class `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`})]}),`
`,(0,c.jsxs)(n.p,{children:[`A specialized messenger for the Figma plugin backend. It extends `,(0,c.jsx)(n.code,{children:`FigmaPostAbstract`}),` to provide a robust communication layer between the plugin's main logic (code side) and its user interface (UI).`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Singleton Architecture`}),` — Use `,(0,c.jsx)(n.code,{children:`getInstance()`}),` to ensure all parts of the plugin use the same communication hub.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Simplified API`}),` — Wraps standard `,(0,c.jsx)(n.code,{children:`figma.ui.postMessage`}),` and `,(0,c.jsx)(n.code,{children:`figma.ui.onmessage`}),` into a more manageable interface.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Safety`}),` — Supports generic types for messages to ensure data consistency.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Access the singleton instance using the static `,(0,c.jsx)(n.code,{children:`getInstance()`}),` method.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPluginMessenger } from '@dxtmisha/figma-code'

const messenger = FigmaPluginMessenger.getInstance()
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`communication`,children:`Communication`}),`
`,(0,c.jsx)(n.p,{children:`Methods for sending and receiving messages.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post<Message>(type: string, message?: Message): void`}),` — Sends a message of a specific type to the Figma UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(type: string, callback: (data: any) => void): this`}),` — (Inherited) Registers a listener for messages from the UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(type: string): this`}),` — (Inherited) Removes a listener.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};