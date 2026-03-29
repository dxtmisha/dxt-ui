import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Classes/ErrorCenter - Error Management`}),`
`,(0,c.jsx)(n.h1,{id:`errorcenter`,children:`ErrorCenter`}),`
`,(0,c.jsxs)(n.p,{children:[`A static wrapper for `,(0,c.jsx)(n.code,{children:`ErrorCenterInstance`}),` providing centralized management for error storage, retrieval, and event-based handling. It acts as a global registry for error causes and provides a mechanism to register and trigger custom handlers for different error groups.`]}),`
`,(0,c.jsx)(n.p,{children:`The class follows the "Static Bridge" pattern, delegating all operations to a singleton instance while maintaining a clean, globally accessible API.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Static Access`}),` — Global access to error management without the need for manual instantiation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Centralized Registry`}),` — Stores standardized error causes (labels and messages) for consistent UI feedback.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Group-Based Handling`}),` — Allows registering multiple callbacks for specific error categories.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chainable API`}),` — Methods for adding causes and handlers support fluent interface design.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Predefined Defaults`}),` — Comes pre-configured with standard network error causes (`,(0,c.jsx)(n.code,{children:`timeout`}),`, `,(0,c.jsx)(n.code,{children:`offline`}),`, `,(0,c.jsx)(n.code,{children:`notFound`}),`, etc.).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`check-methods`,children:`Check Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(code: string, group?: string): boolean`}),` — Checks if an error cause exists in the registry.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Retrieves the full error cause object.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`instance-retrieval`,children:`Instance Retrieval`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItem(): ErrorCenterInstance`}),` — Returns the underlying instance used by the static wrapper.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(cause: ErrorCenterCauseItem): this`}),` — Adds a single error cause to the global storage.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(causes: ErrorCenterCauseList): this`}),` — Adds multiple error causes to the registry at once.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Registers a callback function for a specific group.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): this`}),` — Registers a batch of handlers.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`action-methods`,children:`Action Methods`}),`
`,(0,c.jsx)(n.h3,{id:`on`,children:(0,c.jsx)(n.code,{children:`on`})}),`
`,(0,c.jsx)(n.p,{children:`Triggers error handling for the specified cause. It merges the provided cause with stored data (if any), executes all registered handlers for the group, and logs the error to the console.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cause: ErrorCenterCauseItem`}),` — The cause to trigger. Only `,(0,c.jsx)(n.code,{children:`code`}),` and `,(0,c.jsx)(n.code,{children:`group`}),` are required if the cause was previously registered via `,(0,c.jsx)(n.code,{children:`add()`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`errorcentercauseitem`,children:(0,c.jsx)(n.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsx)(n.p,{children:`The main object used to define an error cause.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group?: ErrorCenterGroup`}),` — The category/group the error belongs to.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`code: string`}),` — Unique identifier for the error.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`label?: string`}),` — Human-readable name of the error.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`message?: string`}),` — Detailed description of the error.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`details?: any`}),` — Optional object for additional context or technical data.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`errorcentergroup`,children:(0,c.jsx)(n.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(n.p,{children:[`A simple type definition for categorizing errors: `,(0,c.jsx)(n.code,{children:`string | undefined`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`default-error-causes`,children:`Default Error Causes`}),`
`,(0,c.jsxs)(n.p,{children:[`The `,(0,c.jsx)(n.code,{children:`ErrorCenter`}),` is automatically populated with these standard network-related causes:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`unknown`}),` — `,(0,c.jsx)(n.strong,{children:`Unknown Error`}),`: An unexpected error occurred. Please try again.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`timeout`}),` — `,(0,c.jsx)(n.strong,{children:`Request Timeout`}),`: The request took too long. Please check your connection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`offline`}),` — `,(0,c.jsx)(n.strong,{children:`No Connection`}),`: You are offline. Please check your internet connection.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`notFound`}),` — `,(0,c.jsx)(n.strong,{children:`Not Found`}),`: The requested resource could not be found.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`server`}),` — `,(0,c.jsx)(n.strong,{children:`Server Error`}),`: Internal server error occurred.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenter } from '@dxtmisha/functional-basic'

// 1. Configure global handlers
ErrorCenter.addHandler('api', (cause) => {
  notification.error({
    title: cause.label,
    message: cause.message
  })
})

// 2. Register specific error causes
ErrorCenter.add({
  group: 'auth',
  code: 'token_expired',
  label: 'Session Expired',
  message: 'Your session has timed out. Please log in again.'
})

// 3. Trigger errors via code and group
ErrorCenter.on({ group: 'auth', code: 'token_expired' })
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};