import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/getCurrentDate - Get current date`}),`
`,(0,c.jsx)(n.h1,{id:`getcurrentdate`,children:(0,c.jsx)(n.code,{children:`getCurrentDate`})}),`
`,(0,c.jsxs)(n.p,{children:[`Returns the current date in the specified format. The function is a wrapper around the `,(0,c.jsx)(n.code,{children:`Datetime`}),` class and allows you to quickly get a formatted string of the current time.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Warning (SSR):`}),` Using this function for rendering in SSR may lead to hydration mismatches because the time or time zone on the server may differ from the time on the client. It is recommended to use this function inside client-side hooks only (e.g., `,(0,c.jsx)(n.code,{children:`onMounted`}),` in Vue or `,(0,c.jsx)(n.code,{children:`useEffect`}),` in React).`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`format: GeoDate`}),` — type of date format for output (default `,(0,c.jsx)(n.code,{children:`'datetime'`}),`). Supports values: `,(0,c.jsx)(n.code,{children:`'date'`}),`, `,(0,c.jsx)(n.code,{children:`'time'`}),`, `,(0,c.jsx)(n.code,{children:`'datetime'`}),`, `,(0,c.jsx)(n.code,{children:`'full'`}),`, and others.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
Current date as a string.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getCurrentDate } from '@dxtmisha/functional-basic'

// Standard format (datetime)
const now = getCurrentDate()
// Result: "2024-03-15 14:30"

// Date only
const date = getCurrentDate('date')
// Result: "2024-03-15"
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};