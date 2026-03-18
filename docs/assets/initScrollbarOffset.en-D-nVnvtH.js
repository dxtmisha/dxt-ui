import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/initScrollbarOffset - Initialize scrollbar offset"}),`
`,e.jsx(n.h1,{id:"initscrollbaroffset",children:e.jsx(n.code,{children:"initScrollbarOffset"})}),`
`,e.jsxs(n.p,{children:["An asynchronous utility configured to calculate the underlying system width of the browser's scrollbar, safely rendering the result (in pixels) securely via the globally attached CSS custom variable named ",e.jsx(n.code,{children:"--sys-scrollbar-offset"})," appended dynamically onto ",e.jsx(n.code,{children:"<body>"}),"."]}),`
`,e.jsx(n.p,{children:"Dedicating precise numbers for system scrollbar sizing is an imperative design layer for constructing elegant modal overlays, flyouts, and body-scrolling locks without the page layout aggressively jumping back and forth. Resolving this size limits layout shift jitter."}),`
`,e.jsxs(n.p,{children:["The function closely synchronizes with the ",e.jsx(n.code,{children:"ScrollbarWidth"})," logic mapping internal to this package for the execution heavy-lifting."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
An asynchronous callback evaluating to `,e.jsx(n.code,{children:"Promise<void>"}),", invoking the side-effect DOM-var injections exclusively."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { initScrollbarOffset } from '@dxtmisha/functional-basic'

// Triggers sizing capture on app startup
await initScrollbarOffset()

// Utilize styling later implicitly:
// body[data-scroll-locked] { padding-right: var(--sys-scrollbar-offset, 0px); }
`})})]})}function f(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{f as default};
