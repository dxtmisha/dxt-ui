import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/BroadcastMessage - BroadcastChannel Messaging`}),`
`,(0,c.jsx)(t.h1,{id:`broadcastmessage-class`,children:`BroadcastMessage Class`}),`
`,(0,c.jsxs)(t.p,{children:[`A class for handling messaging between different browser contexts (tabs, windows, iframes) using the `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),` API. It provides a convenient interface for sending and receiving data with automatic channel lifecycle management and error handling.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Features automatic prefix naming to prevent conflicts and integrates with `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` for monitoring initialization failures.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cross-Context Communication`}),` — simple data synchronization between all windows of the same origin.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Callback-Based`}),` — automatic processing of incoming messages and errors through registered callback functions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Runtime Safety`}),` — built-in DOM environment checking prevents errors during Server-Side Rendering (SSR).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Channel Isolation`}),` — automatic unique prefixing for channel names via `,(0,c.jsx)(t.code,{children:`DataStorage`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Strong Typing`}),` — full TypeScript generics support to ensure message data integrity.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To initialize the object, call the constructor `,(0,c.jsx)(t.code,{children:`BroadcastMessage(name, callback, callbackError, errorCenter)`}),`.`]}),`
`,(0,c.jsx)(t.h3,{id:`generic-constraints`,children:`Generic Constraints`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Message = any`}),` — the type of the message payload.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — unique channel name.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback?: (event: MessageEvent<Message>) => void`}),` — callback function executed when a message is received.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callbackError?: (event: MessageEvent<Message>) => void`}),` — callback function executed when a message error occurs.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`errorCenter: ErrorCenterInstance`}),` — error center instance (defaults to: `,(0,c.jsx)(t.code,{children:`ErrorCenter.getItem()`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional-basic'

const messenger = new BroadcastMessage<string>(
  'my-channel',
  (event) => console.log('Received:', event.data)
)
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`post(message: Message): this`}),` — Sends a message to all listeners in the same channel.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`destroy(): this`}),` — Closes the channel and stops listening for messages.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration-and-access`,children:`Configuration and Access`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getChannel(): BroadcastChannel | undefined`}),` — Returns the underlying `,(0,c.jsx)(t.code,{children:`BroadcastChannel`}),` instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCallback(callback: Function): this`}),` — Updates the function for processing incoming messages.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setCallbackError(callbackError: Function): this`}),` — Updates the function for processing message errors.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`syncing-state-between-tabs`,children:`Syncing State Between Tabs`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { BroadcastMessage } from '@dxtmisha/functional'

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
`,(0,c.jsx)(t.h3,{id:`updating-data-handler-on-the-fly`,children:`Updating Data Handler on the Fly`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const messenger = new BroadcastMessage('data-sync')

messenger.setCallback((event) => {
  console.log('New data received:', event.data)
})

messenger.post({ id: 1, status: 'active' })
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};