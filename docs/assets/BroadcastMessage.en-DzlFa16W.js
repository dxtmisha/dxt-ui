import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/BroadcastMessage - BroadcastChannel Messaging`}),`
`,(0,c.jsx)(n.h1,{id:`broadcastmessage-class`,children:`BroadcastMessage Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A class for handling cross-tab or cross-window messaging using the `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` API. It provides a simple interface to send and receive messages with optional callback support, error handling, and environment-aware initialization.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cross-context Communication`}),` — easily send messages between different browser tabs, windows, or iframes on the same origin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Callback Based`}),` — register callbacks to handle incoming messages and errors automatically.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Environment Aware`}),` — automatically checks for DOM runtime before initializing, preventing errors in non-browser environments.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Prefixed Names`}),` — automatically adds a unique prefix to channel names to avoid collisions with other applications.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Type Safety`}),` — supports TypeScript generics for message payload typing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`ErrorCenter Integration`}),` — centralized error reporting when the `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` fails to initialize.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Direct Access`}),` — provide access to the underlying `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` instance when needed.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the `,(0,c.jsx)(n.code,{children:`BroadcastMessage(name, callback, callbackError, errorCenter)`}),` constructor.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Message = any`}),` — the type of the message payload.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — unique name of the communication channel.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback?: (event: MessageEvent<Message>) => void`}),` — callback function executed when a message is received.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callbackError?: (event: MessageEvent<Message>) => void`}),` — callback function executed when a message error occurs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCenter: ErrorCenterInstance`}),` — instance of the error center for triggering events (defaults to `,(0,c.jsx)(n.code,{children:`ErrorCenter.getItem()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional'

// 1. Initialization with incoming data handling
const messenger = new BroadcastMessage(
  'my-channel',
  (event) => console.log('Received:', event.data),
  (error) => console.error('Error:', error)
)

// 2. Sending a message
messenger.post({ type: 'UPDATE', value: 100 })
`})}),`
`,(0,c.jsx)(n.h2,{id:`sending-messages`,children:`Sending Messages`}),`
`,(0,c.jsx)(n.h3,{id:`post`,children:(0,c.jsx)(n.code,{children:`post`})}),`
`,(0,c.jsx)(n.p,{children:`Sends a message to all listeners on the same channel.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message: Message`}),` — the data to send.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`}),` — for method chaining.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`messenger.post({ type: 'UPDATE', payload: { id: 123 } })
`})}),`
`,(0,c.jsx)(n.h2,{id:`configuration--access`,children:`Configuration & Access`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChannel(): BroadcastChannel | undefined`}),` — Returns the underlying `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` instance (or `,(0,c.jsx)(n.code,{children:`undefined`}),` if not in DOM runtime).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallback(callback: (event: MessageEvent<Message>) => void): this`}),` — Updates or sets the callback function for receiving messages.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this`}),` — Updates or sets the callback function for message errors.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`synchronizing-state-across-tabs`,children:`Synchronizing State Across Tabs`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { BroadcastMessage } from '@dxtmisha/functional'

// In Tab A and Tab B
const authChannel = new BroadcastMessage('auth-status', (event) => {
  if (event.data === 'LOGOUT') {
    authModule.clearSession()
    window.location.href = '/login'
  }
})

// When user logs out in Tab A
function onLogout() {
  authChannel.post('LOGOUT')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`simple-notification-system-with-error-handling`,children:`Simple Notification System with Error Handling`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const notifications = new BroadcastMessage(
  'notifications',
  (event) => showToast(event.data.message),
  (error) => console.error('Failed to receive notification:', error)
)

// Update error handler later
notifications.setCallbackError((error) => {
  logToService(error)
})

// Trigger notification from anywhere in the app
notifications.post({ message: 'New message received!' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};