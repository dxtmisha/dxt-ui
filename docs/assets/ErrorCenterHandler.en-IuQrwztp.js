import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ErrorCenterHandler - Handler Management`}),`
`,(0,c.jsx)(n.h1,{id:`errorcenterhandler`,children:`ErrorCenterHandler`}),`
`,(0,c.jsx)(n.p,{children:`A core utility class for managing and triggering error handlers based on defined groups. It allows for flexible error response strategies, such as showing global notifications for API errors while performing silent logging for background tasks.`}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Handler Registration`}),` — Easily add multiple callback functions to specific error groups.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Group Filtering`}),` — Target specific categories of errors (e.g., `,(0,c.jsx)(n.code,{children:`api`}),`, `,(0,c.jsx)(n.code,{children:`auth`}),`, `,(0,c.jsx)(n.code,{children:`validation`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Fallback`}),` — Support for an `,(0,c.jsx)(n.code,{children:`undefined`}),` group handler that catches any error without a specific handler.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sequential Execution`}),` — Triggers all registered callbacks for a group in the order they were added.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Integrated Logging`}),` — Automatically outputs error details to the browser console for debugging.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`check-methods`,children:`Check Methods`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(group: ErrorCenterGroup): boolean`}),` — Checks if any handlers are registered for a specific group.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined`}),` — Retrieves the handler mapping for a group.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Adds a single callback function to a group.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(handlers: ErrorCenterHandlerList): this`}),` — Registers a batch of handlers.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`action-methods`,children:`Action Methods`}),`
`,(0,c.jsx)(n.h3,{id:`on`,children:(0,c.jsx)(n.code,{children:`on`})}),`
`,(0,c.jsxs)(n.p,{children:[`Triggers all registered handlers for the provided error cause's group. If no specific handlers are found, it falls back to the handlers registered for the `,(0,c.jsx)(n.code,{children:`undefined`}),` group (if any). Always logs the error details to the console internally.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`cause: ErrorCenterCauseItem`}),` — The error details to pass to handlers.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`this`})]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h3,{id:`errorcenterhandlercallback`,children:(0,c.jsx)(n.code,{children:`ErrorCenterHandlerCallback`})}),`
`,(0,c.jsx)(n.p,{children:`The function signature for error handling callbacks.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`(cause: ErrorCenterCauseItem) => void`}),` — Receives the merged error cause object.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`usage-example`,children:`Usage Example`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`import { ErrorCenterHandler } from '@dxtmisha/functional-basic'

const handlerManager = new ErrorCenterHandler()

// 1. Register a specific group handler
handlerManager.add('api', (cause) => {
  console.log('[API Handler]', cause.message)
})

// 2. Register a global fallback handler
handlerManager.add(undefined, (cause) => {
  console.error('[Global Fallback]', cause.code)
})

// 3. Triggering an error
handlerManager.on({
  group: 'api',
  code: '500',
  message: 'Internal Server Error'
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};