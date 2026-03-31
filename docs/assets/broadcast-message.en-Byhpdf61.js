import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/# Cross-tab messaging`}),`
`,(0,c.jsx)(n.h1,{id:`cross-tab-messaging`,children:`Cross-tab messaging`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`BroadcastMessage`}),` class provides a simple wrapper around the native `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` API for synchronization and communication between different browser tabs or windows within the same origin.`]}),`
`,(0,c.jsx)(n.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsx)(n.p,{children:`To start communicating, create an instance of the class by specifying a channel name and a callback function to handle incoming messages.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { BroadcastMessage } from '@dxtmisha/functional-basic'

// 1. Initialize the channel
const messenger = new BroadcastMessage('my-feature-channel', (event) => {
  console.log('Received message:', event.data)
})

// 2. Send a message to other tabs
messenger.post({ action: 'update', id: 123 })
`})}),`
`,(0,c.jsx)(n.p,{children:`The library automatically prefixes channel names with a unique session ID to ensure that messages from different application instances do not conflict.`}),`
`,(0,c.jsx)(n.h2,{id:`handling-messages`,children:`Handling Messages`}),`
`,(0,c.jsx)(n.p,{children:`You can update or set callbacks after initialization using the following methods:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallback(callback)`}),` — sets the main message handler.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallbackError(callback)`}),` — sets a handler for message errors (e.g., serialization issues).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.setCallback((event) => {
  if (event.data.type === 'REFRESH') {
    window.location.reload()
  }
})
`})}),`
`,(0,c.jsx)(n.h2,{id:`advanced-access`,children:`Advanced Access`}),`
`,(0,c.jsxs)(n.p,{children:[`If you need direct access to the underlying `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` instance, use the `,(0,c.jsx)(n.code,{children:`getChannel()`}),` method.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const nativeChannel = messenger.getChannel()

if (nativeChannel) {
  console.log('Current channel name:', nativeChannel.name)
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};