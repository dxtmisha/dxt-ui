import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/figma-code/Classes/FigmaPluginMessenger - Backend Messenger`}),`
`,(0,c.jsx)(n.h1,{id:`figmapluginmessenger-class`,children:`FigmaPluginMessenger Class`}),`
`,(0,c.jsxs)(n.p,{children:[`Messenger for the Figma plugin side (backend). It handles sending messages to the Figma UI and listening for messages from the UI using the internal Figma `,(0,c.jsx)(n.code,{children:`figma.ui`}),` API.`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`Extends `,(0,c.jsx)(n.code,{children:`FigmaPostAbstract`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPluginMessenger } from '@dxtmisha/figma-code'

const messenger = new FigmaPluginMessenger()
  .make()
  .add('hello-ui', (msg) => console.log('UI:', msg))
`})}),`
`,(0,c.jsx)(n.h2,{id:`public-methods`,children:`Public Methods`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsxs)(n.p,{children:[`Initializes the message listener using the `,(0,c.jsx)(n.code,{children:`figma.ui.onmessage`}),` API. Should be called once to start receiving messages from the UI.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.make()
`})}),`
`,(0,c.jsx)(n.h3,{id:`add`,children:(0,c.jsx)(n.code,{children:`add`})}),`
`,(0,c.jsx)(n.p,{children:`Registers a listener for a specific message type coming from the UI.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — Unique identifier for the message type to listen for.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: (message: Message) => void`}),` — function to execute when a matching message arrives.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.add('resize-ui', (data) => {
  figma.ui.resize(data.width, data.height)
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`post`,children:(0,c.jsx)(n.code,{children:`post`})}),`
`,(0,c.jsx)(n.p,{children:`Sends a message to the Figma UI side.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`type: string`}),` — The identifier of the message (type).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message: Message`}),` — (Optional) Data payload to send to the UI.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.post('selection-data', { 
  ids: figma.currentPage.selection.map(node => node.id) 
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};