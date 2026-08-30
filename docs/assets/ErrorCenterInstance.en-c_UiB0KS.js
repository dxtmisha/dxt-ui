import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Classes/ErrorCenterInstance - Error Instance`}),`
`,(0,c.jsx)(t.h1,{id:`errorcenterinstance-class`,children:`ErrorCenterInstance Class`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`ErrorCenterInstance`}),` is the main engine of the error system. It combines an error registry and a handler manager. You can create independent instances of this class for different parts of the application to isolate their error processing logic.`]}),`
`,(0,c.jsx)(t.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Isolated Storage`}),` — maintaining a local list of error causes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Intelligent Merging`}),` — automatic supplementation of error data based on a priority system.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Handling Delegation`}),` — using `,(0,c.jsx)(t.code,{children:`ErrorCenterHandler`}),` to trigger callback functions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chainable API`}),` — support for call chaining for configuration.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`initialization`,children:`Initialization`}),`
`,(0,c.jsxs)(t.p,{children:[`To create an instance, use the constructor `,(0,c.jsx)(t.code,{children:`ErrorCenterInstance(causes, handler)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`causes?: ErrorCenterCauseList`}),` — initial list of error causes.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`handler?: ErrorCenterHandler`}),` — handler instance (if not specified, a new one is created).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ErrorCenterInstance } from '@dxtmisha/functional-basic'

const myErrorCenter = new ErrorCenterInstance([
  { group: 'api', code: '404', label: 'Not Found' }
])
`})}),`
`,(0,c.jsx)(t.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(t.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`on(cause: ErrorCenterCauseItem): this`}),` — Starts the processing. Merges data from the registry with input data and passes it to the handler.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`verification`,children:`Verification`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`has(code: string, group?: string): boolean`}),` — Search in the local registry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(code: string, group?: string): ErrorCenterCauseItem | undefined`}),` — Retrieve data from the registry.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(cause: ErrorCenterCauseItem): this`}),` — Add an error to the local registry.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addList(causes: ErrorCenterCauseList): this`}),` — Batch addition of errors.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addHandler(group: ErrorCenterGroup, handler: ErrorCenterHandlerCallback): this`}),` — Register a reaction to a group.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addHandlerList(handlers: ErrorCenterHandlerList): this`}),` — Batch registration of reactions.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setIsConsole(isConsole: ErrorCenterHandlerIsConsole): this`}),` — Sets the console output flag or filter function.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(t.h4,{id:`errorcentercauseitem`,children:(0,c.jsx)(t.code,{children:`ErrorCenterCauseItem`})}),`
`,(0,c.jsx)(t.p,{children:`Object describing a specific error.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`group?: ErrorCenterGroup`}),` — error group (e.g., 'api').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`code: string`}),` — unique error code.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`priority?: number`}),` — priority level (default `,(0,c.jsx)(t.code,{children:`500`}),`). Used during data merging.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`label?: string`}),` — error title.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`message?: string`}),` — error description.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`details?: any`}),` — additional data.`]}),`
`]}),`
`,(0,c.jsx)(t.h4,{id:`errorcenterhandlercallback`,children:(0,c.jsx)(t.code,{children:`ErrorCenterHandlerCallback`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`(cause: ErrorCenterCauseItem) => void`}),` — processing function.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,c.jsx)(t.h3,{id:`initialization-with-a-dictionary`,children:`Initialization with a Dictionary`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const myEC = new ErrorCenterInstance([
  { group: 'db', code: 'connection_lost', label: 'DB Unavailable' }
]);

myEC.addHandler('db', (cause) => alert(cause.label));
myEC.on({ group: 'db', code: 'connection_lost' });
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};