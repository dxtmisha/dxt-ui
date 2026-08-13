import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma-code/Classes/FigmaPluginMessenger - Plugin messenger (Backend)`}),`
`,(0,c.jsxs)(t.h1,{id:`class-figmapluginmessenger`,children:[`Class `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`})]}),`
`,(0,c.jsxs)(t.p,{children:[`A specialized messenger for the Figma plugin backend. It extends `,(0,c.jsx)(t.code,{children:`FigmaPostAbstract`}),` to provide a robust communication layer between the plugin's main logic (code side) and its user interface (UI).`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Singleton Architecture`}),` — Use `,(0,c.jsx)(t.code,{children:`getInstance()`}),` to ensure all parts of the plugin use the same communication hub.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Simplified API`}),` — Wraps standard `,(0,c.jsx)(t.code,{children:`figma.ui.postMessage`}),` and `,(0,c.jsx)(t.code,{children:`figma.ui.onmessage`}),` into a more manageable interface.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Type Safety`}),` — Supports generic types for messages to ensure data consistency.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Access the singleton instance using the static `,(0,c.jsx)(t.code,{children:`getInstance()`}),` method.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaPluginMessenger } from '@dxtmisha/figma-code'

const messenger = FigmaPluginMessenger.getInstance()
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`communication`,children:`Communication`}),`
`,(0,c.jsx)(t.p,{children:`Methods for sending and receiving messages.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`post<Message>(type: string, message?: Message): void`}),` — Sends a message of a specific type to the Figma UI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(type: string, callback: (data: any) => void): this`}),` — (Inherited) Registers a listener for messages from the UI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove(type: string): this`}),` — (Inherited) Removes a listener.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};