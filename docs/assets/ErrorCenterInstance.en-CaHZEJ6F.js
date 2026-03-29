import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/ErrorCenterInstance - Error Instance`}),`
`,(0,c.jsx)(n.h1,{id:`errorcenterinstance`,children:`ErrorCenterInstance`}),`
`,(0,c.jsx)(n.p,{children:`A class for managing error storage and handling within a specific instance. It provides the core logic for maintaining a registry of error causes and orchestrating their notification through a handler manager.`}),`
`,(0,c.jsxs)(n.p,{children:[`While `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` provides a global static bridge, `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` can be used directly for isolated error tracking or custom error management systems.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Isolated Storage`}),` — Maintain a local list of error causes separate from the global state.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Data Merging`}),` — Automatically supplements triggered errors with pre-registered label and message data.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Handler Delegation`}),` — Uses a dedicated `,(0,c.jsx)(n.code,{children:`ErrorCenterHandler`}),` to manage and execute callbacks.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Predefined Causes`}),` — Can be initialized with a list of default error causes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable Methods`}),` — Supports fluent configuration for adding causes and handlers.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`check-methods`,children:`Check Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(code: string, group?: string): boolean`}),` — Checks if a cause exists in the instance's registry.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Retrieves the stored error cause object.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(cause: ErrorCenterCauseItem): this`}),` — Adds a single error cause to the storage.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(causes: ErrorCenterCauseList): this`}),` — Adds multiple error causes.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Registers a callback for a specific error group.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): this`}),` — Registers a collection of handlers.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`action-methods`,children:`Action Methods`}),`
`,(0,c.jsx)(n.h3,{id:`on`,children:(0,c.jsx)(n.code,{children:`on`})}),`
`,(0,c.jsxs)(n.p,{children:[`Triggers error handling. It looks up the pre-registered data for the provided error code, merges it with the input `,(0,c.jsx)(n.code,{children:`cause`}),`, and passes it to the internal handler.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cause: ErrorCenterCauseItem`}),` — The error information to trigger.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`errorcentercauseitem`,children:(0,c.jsx)(n.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsx)(n.p,{children:`The main object used to define an error cause in this instance.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group?: ErrorCenterGroup`}),` — The category/group the error belongs to.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — Unique identifier for the error.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label?: string`}),` — Human-readable name of the error.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string`}),` — Detailed description of the error.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`details?: any`}),` — Optional object for additional context or technical data.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`guide-managing-errors-and-listeners`,children:`Guide: Managing Errors and Listeners`}),`
`,(0,c.jsxs)(n.p,{children:[`Using the `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` involves three main steps: defining error causes, setting up listeners (handlers), and triggering the errors.`]}),`
`,(0,c.jsx)(n.h3,{id:`1-adding-error-causes`,children:`1. Adding Error Causes`}),`
`,(0,c.jsx)(n.p,{children:`Error causes act as a dictionary for your application. By pre-registering them, you ensure that consistent labels and messages are used throughout your platform.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenterInstance } from '@dxtmisha/functional-basic'

const myErrorCenter = new ErrorCenterInstance()

// Register a single error cause
myErrorCenter.add({
  group: 'auth',
  code: 'token_expired',
  label: 'Session Expired',
  message: 'Your login session has expired. Please log in again.'
})

// Register multiple causes at once
myErrorCenter.addList([
  { group: 'api', code: '404', label: 'Not Found', message: 'The requested data does not exist.' },
  { group: 'api', code: '500', label: 'Server Error', message: 'Something went wrong on the server.' }
])
`})}),`
`,(0,c.jsx)(n.h3,{id:`2-adding-listeners`,children:`2. Adding Listeners`}),`
`,(0,c.jsxs)(n.p,{children:[`Listeners (handlers) are callback functions that execute when a specific error occurs. You assign listeners to a specific `,(0,c.jsx)(n.code,{children:`group`}),` so they only react to relevant errors.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Add a listener specifically for the "auth" group
myErrorCenter.addHandler('auth', (cause) => {
  // E.g., redirect to login or show an alert
  console.log(\`[AUTH ERROR] \${cause.label}: \${cause.message}\`)
})

// Add a listener for the "api" group
myErrorCenter.addHandler('api', (cause) => {
  // E.g., show a toast notification
  console.error(\`[API ERROR \${cause.code}] \${cause.message}\`)
})

// Add a global fallback listener (catches errors without a specific group handler)
myErrorCenter.addHandler(undefined, (cause) => {
  console.warn(\`[UNKNOWN ERROR]\`, cause)
})
`})}),`
`,(0,c.jsx)(n.h3,{id:`3-triggering-errors`,children:`3. Triggering Errors`}),`
`,(0,c.jsxs)(n.p,{children:[`When an error occurs in your application, you trigger the handling process using the `,(0,c.jsx)(n.code,{children:`on`}),` method. You only need to provide the `,(0,c.jsx)(n.code,{children:`code`}),` and the `,(0,c.jsx)(n.code,{children:`group`}),`. The `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` will automatically merge this with the pre-registered `,(0,c.jsx)(n.code,{children:`label`}),` and `,(0,c.jsx)(n.code,{children:`message`}),` before passing it to the listeners.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`// Trigger an authentication error
// The listeners for "auth" will receive the full ErrorCenterCauseItem
myErrorCenter.on({
  group: 'auth',
  code: 'token_expired'
})

// Trigger an unregistered error (will fallback to the undefined group listener)
myErrorCenter.on({
  group: 'database',
  code: 'connection_lost',
  message: 'Lost connection to DB.' // You can pass inline data as well
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};