import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/initScrollbarOffset - Initialize scrollbar offset`}),`
`,(0,c.jsx)(n.h1,{id:`initscrollbaroffset`,children:(0,c.jsx)(n.code,{children:`initScrollbarOffset`})}),`
`,(0,c.jsxs)(n.p,{children:[`An asynchronous utility configured to calculate the underlying system width of the browser's scrollbar, safely rendering the result (in pixels) securely via the globally attached CSS custom variable named `,(0,c.jsx)(n.code,{children:`--sys-scrollbar-offset`}),` appended dynamically onto `,(0,c.jsx)(n.code,{children:`<body>`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Dedicating precise numbers for system scrollbar sizing is an imperative design layer for constructing elegant modal overlays, flyouts, and body-scrolling locks without the page layout aggressively jumping back and forth. Resolving this size limits layout shift jitter.`}),`
`,(0,c.jsxs)(n.p,{children:[`The function closely synchronizes with the `,(0,c.jsx)(n.code,{children:`ScrollbarWidth`}),` logic mapping internal to this package for the execution heavy-lifting.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
An asynchronous callback evaluating to `,(0,c.jsx)(n.code,{children:`Promise<void>`}),`, invoking the side-effect DOM-var injections exclusively.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initScrollbarOffset } from '@dxtmisha/functional-basic'

// Triggers sizing capture on app startup
await initScrollbarOffset()

// Utilize styling later implicitly:
// body[data-scroll-locked] { padding-right: var(--sys-scrollbar-offset, 0px); }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};