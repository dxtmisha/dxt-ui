import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/initScrollbarOffset - Initialize scrollbar offset`}),`
`,(0,c.jsx)(t.h1,{id:`initscrollbaroffset`,children:(0,c.jsx)(t.code,{children:`initScrollbarOffset`})}),`
`,(0,c.jsxs)(t.p,{children:[`An asynchronous utility configured to calculate the underlying system width of the browser's scrollbar, safely rendering the result (in pixels) securely via the globally attached CSS custom variable named `,(0,c.jsx)(t.code,{children:`--sys-scrollbar-offset`}),` appended dynamically onto `,(0,c.jsx)(t.code,{children:`<body>`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Dedicating precise numbers for system scrollbar sizing is an imperative design layer for constructing elegant modal overlays, flyouts, and body-scrolling locks without the page layout aggressively jumping back and forth. Resolving this size limits layout shift jitter.`}),`
`,(0,c.jsxs)(t.p,{children:[`The function closely synchronizes with the `,(0,c.jsx)(t.code,{children:`ScrollbarWidth`}),` logic mapping internal to this package for the execution heavy-lifting.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
An asynchronous callback evaluating to `,(0,c.jsx)(t.code,{children:`Promise<void>`}),`, invoking the side-effect DOM-var injections exclusively.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initScrollbarOffset } from '@dxtmisha/functional-basic'

// Triggers sizing capture on app startup
await initScrollbarOffset()

// Utilize styling later implicitly:
// body[data-scroll-locked] { padding-right: var(--sys-scrollbar-offset, 0px); }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};