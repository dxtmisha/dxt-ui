import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Classes/ApiPreparation - API Request Preparation`}),`
`,(0,c.jsx)(n.h1,{id:`apipreparation-class`,children:`ApiPreparation Class`}),`
`,(0,c.jsx)(n.p,{children:`A specialized class designed to handle tasks and side effects immediately before and after an API request execution. It serves to intercept requests globally via tracking hooks, enabling state manipulation or triggering of global logic like token refreshes or logging.`}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`ApiPreparation`}),` is an `,(0,c.jsx)(n.strong,{children:`auxiliary class`}),`, designed for managing request lifecycles. In most cases, it is recommended to interact with hooks through the `,(0,c.jsx)(n.code,{children:`setPreparation`}),` and `,(0,c.jsx)(n.code,{children:`setEnd`}),` methods of the main `,(0,c.jsx)(n.code,{children:`Api`}),` instance.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`key-features`,children:`Key Features`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sequential Execution`}),` — ensures that preparation hooks resolve one at a time, preventing collisions during concurrent operations (e.g., duplicate token refreshes).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Global Interception`}),` — provides a single point of entry and exit for all network traffic initiated by its parent manager.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Request Replay`}),` — post-request hooks can signal the system to automatically retry a request after state changes.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`methods`,children:`Methods`}),`
`,(0,c.jsx)(n.h3,{id:`action`,children:`Action`}),`
`,(0,c.jsx)(n.h4,{id:`make`,children:(0,c.jsx)(n.code,{children:`make`})}),`
`,(0,c.jsx)(n.p,{children:`Executes the registered preparation callback. If another preparation is currently in progress, it waits for it to complete.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`active: boolean`}),` — Whether the hook is enabled for the current request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiFetch: ApiFetch`}),` — The configuration for the upcoming request.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,c.jsx)(n.h4,{id:`makeend`,children:(0,c.jsx)(n.code,{children:`makeEnd`})}),`
`,(0,c.jsx)(n.p,{children:`Executes the registered analysis callback after a request completes.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`active: boolean`}),` — Whether the hook is enabled for the current request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`query: Response`}),` — The native Fetch API response object.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`apiFetch: ApiFetch`}),` — The configuration used for the request.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),` `,(0,c.jsx)(n.code,{children:`Promise<ApiPreparationEnd>`}),` — An object controlling the next steps (e.g., reset, data injection).`]}),`
`,(0,c.jsx)(n.h3,{id:`configuration`,children:`Configuration`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(callback: (apiFetch: ApiFetch) => Promise<void>): this`}),` — Registers a function to run before every enabled request.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setEnd(callback: (query: Response, apiFetch: ApiFetch) => Promise<ApiPreparationEnd>): this`}),` — Registers a function to run after every enabled response.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`types`,children:`Types`}),`
`,(0,c.jsx)(n.h4,{id:`apipreparationend`,children:(0,c.jsx)(n.code,{children:`ApiPreparationEnd`})}),`
`,(0,c.jsx)(n.p,{children:`Result of the analysis hook execution.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`reset?: boolean`}),` — If true, the request will be aborted and restarted.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data?: any`}),` — Custom data to pass along.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`guide-mechanics-of-hooks`,children:`Guide: Mechanics of Hooks`}),`
`,(0,c.jsx)(n.p,{children:`The following rules and conditions define how the preparation system synchronizes and manages lifecycle hooks:`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Synchronization`}),` — the system uses a polling mechanism (160ms interval) to ensure that only one `,(0,c.jsx)(n.code,{children:`setPreparation`}),` hook executes at a time. If multiple requests start concurrently, subsequent calls will wait up to 32 polling attempts (~5 seconds) for the first one to finish.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Context Injection`}),` — the `,(0,c.jsx)(n.code,{children:`apiFetch`}),` object is passed to the hooks by reference. Modifying its properties (like headers or request body) inside `,(0,c.jsx)(n.code,{children:`setPreparation`}),` directly affects the physical network call that follows.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Flow Control (Reset)`}),` — the `,(0,c.jsx)(n.code,{children:`setEnd`}),` hook can return `,(0,c.jsx)(n.code,{children:`{ reset: true }`}),`. When this flag is detected, the `,(0,c.jsx)(n.code,{children:`ApiInstance`}),` will abort the current request chain and immediately restart it from the preparation phase. This is primarily used for silent, automatic token refreshing.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Execution Scope`}),` — hooks only run if they are explicitly enabled in the request configuration. By default, `,(0,c.jsx)(n.code,{children:`globalPreparation`}),` and `,(0,c.jsx)(n.code,{children:`globalEnd`}),` are set to true in `,(0,c.jsx)(n.code,{children:`ApiFetch`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};