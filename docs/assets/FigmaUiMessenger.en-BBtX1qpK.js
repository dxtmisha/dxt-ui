import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/figma/Classes/FigmaUiMessenger - Frontend Messenger`}),`
`,(0,c.jsx)(t.h1,{id:`figmauimessenger-class`,children:`FigmaUiMessenger Class`}),`
`,(0,c.jsxs)(t.p,{children:[`Messenger for the Figma UI side (frontend). It handles sending messages to the Figma plugin and listening for messages from the plugin using the browser's `,(0,c.jsx)(t.code,{children:`postMessage`}),` API.`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`Extends `,(0,c.jsx)(t.code,{children:`FigmaPostAbstract`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaUiMessenger } from '@dxtmisha/figma'

const messenger = new FigmaUiMessenger()
  .make()
  .add('plugin-update', (data) => console.log('Plugin:', data))
`})}),`
`,(0,c.jsx)(t.h2,{id:`public-methods`,children:`Public Methods`}),`
`,(0,c.jsx)(t.h3,{id:`make`,children:(0,c.jsx)(t.code,{children:`make`})}),`
`,(0,c.jsxs)(t.p,{children:[`Initializes the message listener using the `,(0,c.jsx)(t.code,{children:`window`}),` message event. Should be called once to start receiving messages from the plugin (backend).`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`this`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.make()
`})}),`
`,(0,c.jsx)(t.h3,{id:`add`,children:(0,c.jsx)(t.code,{children:`add`})}),`
`,(0,c.jsx)(t.p,{children:`Registers a listener for a specific message type coming from the plugin (backend).`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — Unique identifier for the message type to listen for.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: (message: Message) => void`}),` — function to execute when a matching message arrives from the plugin.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`this`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.add('selection-changed', (data) => {
  renderSidebar(data.nodes)
})
`})}),`
`,(0,c.jsx)(t.h3,{id:`post`,children:(0,c.jsx)(t.code,{children:`post`})}),`
`,(0,c.jsx)(t.p,{children:`Sends a message to the Figma plugin backend.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`type: string`}),` — The identifier of the message (type).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`message: Message`}),` — (Optional) Data payload to send to the plugin.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),` `,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.post('create-rectangles', { count: 5, color: '#FF0000' })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};