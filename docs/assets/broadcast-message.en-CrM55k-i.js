import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/8. Cross-tab messaging`}),`
`,(0,c.jsx)(t.h1,{id:`cross-tab-messaging`,children:`Cross-tab messaging`}),`
`,(0,c.jsxs)(t.p,{children:[`The `,(0,c.jsx)(t.code,{children:`BroadcastMessage`}),` class provides a simple wrapper around the native `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),` API for synchronization and communication between different browser tabs or windows within the same origin.`]}),`
`,(0,c.jsx)(t.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,c.jsx)(t.p,{children:`To start communicating, create an instance of the class by specifying a channel name and a callback function to handle incoming messages.`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`import { BroadcastMessage } from '@dxtmisha/functional-basic'

// 1. Initialize the channel
const messenger = new BroadcastMessage('my-feature-channel', (event) => {
  console.log('Received message:', event.data)
})

// 2. Send a message to other tabs
messenger.post({ action: 'update', id: 123 })
`})}),`
`,(0,c.jsx)(t.p,{children:`The library automatically prefixes channel names with a unique session ID to ensure that messages from different application instances do not conflict.`}),`
`,(0,c.jsx)(t.h2,{id:`handling-messages`,children:`Handling Messages`}),`
`,(0,c.jsx)(t.p,{children:`You can update or set callbacks after initialization using the following methods:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCallback(callback)`}),` — sets the main message handler.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCallbackError(callback)`}),` — sets a handler for message errors (e.g., serialization issues).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`messenger.setCallback((event) => {
  if (event.data.type === 'REFRESH') {
    window.location.reload()
  }
})
`})}),`
`,(0,c.jsx)(t.h2,{id:`advanced-access`,children:`Advanced Access`}),`
`,(0,c.jsxs)(t.p,{children:[`If you need direct access to the underlying `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),` instance, use the `,(0,c.jsx)(t.code,{children:`getChannel()`}),` method.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const nativeChannel = messenger.getChannel()

if (nativeChannel) {
  console.log('Current channel name:', nativeChannel.name)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};