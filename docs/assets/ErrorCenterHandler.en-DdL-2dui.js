import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ErrorCenterHandler - Handler Management`}),`
`,(0,c.jsx)(n.h1,{id:`errorcenterhandler-class`,children:`ErrorCenterHandler Class`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ErrorCenterHandler`}),` is a manager for handling callback functions (handlers). It allows you to bind logic to specific error groups and execute it when a corresponding event occurs.`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Handler Registration`}),` — convenient addition of callback functions to specific groups.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Handler`}),` — support for the `,(0,c.jsx)(n.code,{children:`undefined`}),` group, which catches any error without a specific handler.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sequential Execution`}),` — triggers all registered functions in the order they were added.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Integrated Logging`}),` — automatically outputs error details to the console.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(n.p,{children:[`To create an instance, use the constructor `,(0,c.jsx)(n.code,{children:`ErrorCenterHandler(handlers)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`handlers?: ErrorCenterHandlerList`}),` — initial list of handlers.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ErrorCenterHandler } from '@dxtmisha/functional-basic'

const handlers = new ErrorCenterHandler([
  {
    group: 'api',
    handlers: [(cause) => console.log('API Error:', cause.code)]
  }
]);
`})}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`on(cause: ErrorCenterCauseItem): this`}),` — Triggers the chain of handlers. Always outputs an error to the console via `,(0,c.jsx)(n.code,{children:`console.error`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`verification`,children:`Verification`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(group: ErrorCenterGroup): boolean`}),` — Checks if there are handlers for a group.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined`}),` — Returns a list of functions for a group.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Adds a single function to a group.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addList(handlers: ErrorCenterHandlerList): this`}),` — Batch registration of handlers.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h4,{id:`errorcentergroup`,children:(0,c.jsx)(n.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(n.p,{children:[`Group name (`,(0,c.jsx)(n.code,{children:`string`}),`) or `,(0,c.jsx)(n.code,{children:`undefined`}),` for global interception.`]}),`
`,(0,c.jsx)(n.h4,{id:`errorcenterhandlercallback`,children:(0,c.jsx)(n.code,{children:`ErrorCenterHandlerCallback`})}),`
`,(0,c.jsxs)(n.p,{children:[`Callback function: `,(0,c.jsx)(n.code,{children:`(cause: ErrorCenterCauseItem) => void`}),`.`]}),`
`,(0,c.jsx)(n.h4,{id:`errorcenterhandleritem`,children:(0,c.jsx)(n.code,{children:`ErrorCenterHandlerItem`})}),`
`,(0,c.jsx)(n.p,{children:`Link between a group and an array of its functions.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`group?: ErrorCenterGroup`}),` — target group.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`handlers: ErrorCenterHandlerCallback[]`}),` — list of functions.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(n.h3,{id:`isolated-manager-for-a-module`,children:`Isolated Manager for a Module`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const uploadHandlers = new ErrorCenterHandler();

uploadHandlers.add('upload', (cause) => {
  if (cause.code === 'retry') {
    restartUpload();
  }
});

uploadHandlers.on({ group: 'upload', code: 'retry' });
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};