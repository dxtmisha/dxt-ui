import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/ErrorCenterHandler - Handler Management`}),`
`,(0,c.jsx)(t.h1,{id:`errorcenterhandler-class`,children:`ErrorCenterHandler Class`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ErrorCenterHandler`}),` is a manager for handling callback functions (handlers). It allows you to bind logic to specific error groups and execute it when a corresponding event occurs.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Handler Registration`}),` — convenient addition of callback functions to specific groups.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Global Handler`}),` — support for the `,(0,c.jsx)(t.code,{children:`undefined`}),` group, which catches any error without a specific handler.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Sequential Execution`}),` — triggers all registered functions in the order they were added.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Configurable Logging`}),` — outputs error details to the console with support for custom filtering callbacks or complete suppression.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To create an instance, use the constructor `,(0,c.jsx)(t.code,{children:`ErrorCenterHandler(handlers, isConsole)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`handlers?: ErrorCenterHandlerList`}),` — initial list of handlers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isConsole?: ErrorCenterHandlerIsConsole`}),` — flag or filter function for console output (defaults to `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ErrorCenterHandler } from '@dxtmisha/functional-basic'

const handlers = new ErrorCenterHandler(
  [
    {
      group: 'api',
      handlers: [(cause) => console.log('API Error:', cause.code)]
    }
  ],
  false // Disable console logging
);
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`on(cause: ErrorCenterCauseItem): this`}),` — Triggers the chain of handlers and logs to the console if enabled.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`verification`,children:`Verification`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`has(group: ErrorCenterGroup): boolean`}),` — Checks if there are handlers for a group.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(group: ErrorCenterGroup): ErrorCenterHandlerItem | undefined`}),` — Returns a list of functions for a group.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Adds a single function to a group.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addList(handlers: ErrorCenterHandlerList): this`}),` — Batch registration of handlers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this`}),` — Sets the console output flag or filter function.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h4,{id:`errorcentergroup`,children:(0,c.jsx)(t.code,{children:`ErrorCenterGroup`})}),`
`,(0,c.jsxs)(t.p,{children:[`Group name (`,(0,c.jsx)(t.code,{children:`string`}),`) or `,(0,c.jsx)(t.code,{children:`undefined`}),` for global interception.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlercallback`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerCallback`})}),`
`,(0,c.jsxs)(t.p,{children:[`Callback function: `,(0,c.jsx)(t.code,{children:`(cause: ErrorCenterCauseItem) => void`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlerisconsole`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerIsConsole`})}),`
`,(0,c.jsxs)(t.p,{children:[`Console logging configuration option: `,(0,c.jsx)(t.code,{children:`boolean | ((cause: ErrorCenterCauseItem) => boolean)`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlerisconsolecallback`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerIsConsoleCallback`})}),`
`,(0,c.jsxs)(t.p,{children:[`Callback function to check whether to log an error to console: `,(0,c.jsx)(t.code,{children:`(cause: ErrorCenterCauseItem) => boolean`}),`.`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandleritem`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerItem`})}),`
`,(0,c.jsx)(t.p,{children:`Link between a group and an array of its functions.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: ErrorCenterGroup`}),` — target group.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`handlers: ErrorCenterHandlerCallback[]`}),` — list of functions.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`isolated-manager-with-console-filtering`,children:`Isolated Manager with Console Filtering`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const uploadHandlers = new ErrorCenterHandler();

// Filter console logging: only log errors with group 'upload'
uploadHandlers.setIsConsole((cause) => cause.group === 'upload');

uploadHandlers.add('upload', (cause) => {
  if (cause.code === 'retry') {
    restartUpload();
  }
});

uploadHandlers.on({ group: 'upload', code: 'retry' });
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};