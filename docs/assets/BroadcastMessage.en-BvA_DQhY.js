import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/BroadcastMessage - BroadcastChannel Messaging`}),`
`,(0,c.jsx)(n.h1,{id:`broadcastmessage-class`,children:`BroadcastMessage Class`}),`
`,(0,c.jsxs)(n.p,{children:[`A class for handling messaging between different browser contexts (tabs, windows, iframes) using the `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` API. It provides a convenient interface for sending and receiving data with automatic channel lifecycle management and error handling.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Features automatic prefix naming to prevent conflicts and integrates with `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` for monitoring initialization failures.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cross-Context Communication`}),` — simple data synchronization between all windows of the same origin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Callback-Based`}),` — automatic processing of incoming messages and errors through registered callback functions.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Runtime Safety`}),` — built-in DOM environment checking prevents errors during Server-Side Rendering (SSR).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Channel Isolation`}),` — automatic unique prefixing for channel names via `,(0,c.jsx)(n.code,{children:`DataStorage`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Strong Typing`}),` — full TypeScript generics support to ensure message data integrity.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To initialize the object, call the constructor `,(0,c.jsx)(n.code,{children:`BroadcastMessage(name, callback, callbackError, errorCenter)`}),`.`]}),`
`,(0,c.jsx)(n.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`Message = any`}),` — the type of the message payload.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — unique channel name.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback?: (event: MessageEvent<Message>) => void`}),` — callback function executed when a message is received.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callbackError?: (event: MessageEvent<Message>) => void`}),` — callback function executed when a message error occurs.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`errorCenter: ErrorCenterInstance`}),` — error center instance (defaults to: `,(0,c.jsx)(n.code,{children:`ErrorCenter.getItem()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional-basic'

const messenger = new BroadcastMessage<string>(
  'my-channel',
  (event) => console.log('Received:', event.data)
)
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post(message: Message): this`}),` — Sends a message to all listeners in the same channel.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`destroy(): this`}),` — Closes the channel and stops listening for messages.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration-and-access`,children:`Configuration and Access`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getChannel(): BroadcastChannel | undefined`}),` — Returns the underlying `,(0,c.jsx)(n.code,{children:`BroadcastChannel`}),` instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallback(callback: Function): this`}),` — Updates the function for processing incoming messages.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setCallbackError(callbackError: Function): this`}),` — Updates the function for processing message errors.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`syncing-state-between-tabs`,children:`Syncing State Between Tabs`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional'

// In all application tabs
const authChannel = new BroadcastMessage<string>('auth-status', (event) => {
  if (event.data === 'LOGOUT') {
    authModule.clearSession()
    window.location.reload()
  }
})

// When a user logs out in one of the tabs
function onLogout() {
  authChannel.post('LOGOUT')
}
`})}),`
`,(0,c.jsx)(n.h3,{id:`updating-data-handler-on-the-fly`,children:`Updating Data Handler on the Fly`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const messenger = new BroadcastMessage('data-sync')

messenger.setCallback((event) => {
  console.log('New data received:', event.data)
})

messenger.post({ id: 1, status: 'active' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};