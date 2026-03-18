import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as a}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Classes/BroadcastMessage - BroadcastChannel Messaging"}),`
`,e.jsx(n.h1,{id:"broadcastmessage-class",children:"BroadcastMessage Class"}),`
`,e.jsxs(n.p,{children:["A class for handling cross-tab or cross-window messaging using the ",e.jsx(n.code,{children:"BroadcastChannel"})," API. It provides a simple interface to send and receive messages with optional callback support, error handling, and environment-aware initialization."]}),`
`,e.jsx(n.h2,{id:"key-features",children:"Key Features"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Cross-context Communication"})," — easily send messages between different browser tabs, windows, or iframes on the same origin."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Callback Based"})," — register callbacks to handle incoming messages and errors automatically."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Environment Aware"})," — automatically checks for DOM runtime before initializing, preventing errors in non-browser environments."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Prefixed Names"})," — automatically adds a unique prefix to channel names to avoid collisions with other applications."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Type Safety"})," — supports TypeScript generics for message payload typing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Direct Access"})," — provide access to the underlying ",e.jsx(n.code,{children:"BroadcastChannel"})," instance when needed."]}),`
`]}),`
`,e.jsx(n.h2,{id:"initialization",children:"Initialization"}),`
`,e.jsxs(n.p,{children:["To initialize the object, call the ",e.jsx(n.code,{children:"BroadcastMessage(name, callback, callbackError)"})," constructor."]}),`
`,e.jsx(n.h3,{id:"generic-constraints",children:"Generic Constraints"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Message = any"})," — the type of the message payload."]}),`
`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"name: string"})," — unique name of the communication channel."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callback?: (event: MessageEvent<Message>) => void"})," — callback function executed when a message is received."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"callbackError?: (event: MessageEvent<Message>) => void"})," — callback function executed when a message error occurs."]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

// 1. Initialization with incoming data handling
const messenger = new BroadcastMessage(
  'my-channel',
  (event) => console.log('Received:', event.data),
  (error) => console.error('Error:', error)
)

// 2. Sending a message
messenger.post({ type: 'UPDATE', value: 100 })
`})}),`
`,e.jsx(n.h2,{id:"sending-messages",children:"Sending Messages"}),`
`,e.jsx(n.h3,{id:"post",children:e.jsx(n.code,{children:"post"})}),`
`,e.jsx(n.p,{children:"Sends a message to all listeners on the same channel."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"message: Message"})," — the data to send."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"})," ",e.jsx(n.code,{children:"this"})," — for method chaining."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`messenger.post({ type: 'UPDATE', payload: { id: 123 } })
`})}),`
`,e.jsx(n.h2,{id:"configuration--access",children:"Configuration & Access"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"getChannel(): BroadcastChannel | undefined"})," — Returns the underlying ",e.jsx(n.code,{children:"BroadcastChannel"})," instance (or ",e.jsx(n.code,{children:"undefined"})," if not in DOM runtime)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setCallback(callback: (event: MessageEvent<Message>) => void): this"})," — Updates or sets the callback function for receiving messages."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"setCallbackError(callbackError: (event: MessageEvent<Message>) => void): this"})," — Updates or sets the callback function for message errors."]}),`
`]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"synchronizing-state-across-tabs",children:"Synchronizing State Across Tabs"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`import { BroadcastMessage } from '@dxtmisha/functional'

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
`,e.jsx(n.h3,{id:"simple-notification-system-with-error-handling",children:"Simple Notification System with Error Handling"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-javascript",children:`const notifications = new BroadcastMessage(
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
`})})]})}function g(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{g as default};
