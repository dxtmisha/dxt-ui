import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getCurrentDate - Get current date`}),`
`,(0,c.jsx)(t.h1,{id:`getcurrentdate`,children:(0,c.jsx)(t.code,{children:`getCurrentDate`})}),`
`,(0,c.jsxs)(t.p,{children:[`Returns the current date in the specified format. The function is a wrapper around the `,(0,c.jsx)(t.code,{children:`Datetime`}),` class and allows you to quickly get a formatted string of the current time.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Warning (SSR):`}),` Using this function for rendering in SSR may lead to hydration mismatches because the time or time zone on the server may differ from the time on the client. It is recommended to use this function inside client-side hooks only (e.g., `,(0,c.jsx)(t.code,{children:`onMounted`}),` in Vue or `,(0,c.jsx)(t.code,{children:`useEffect`}),` in React).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`format: GeoDate`}),` — type of date format for output (default `,(0,c.jsx)(t.code,{children:`'datetime'`}),`). Supports values: `,(0,c.jsx)(t.code,{children:`'date'`}),`, `,(0,c.jsx)(t.code,{children:`'time'`}),`, `,(0,c.jsx)(t.code,{children:`'datetime'`}),`, `,(0,c.jsx)(t.code,{children:`'full'`}),`, and others.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
Current date as a string.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getCurrentDate } from '@dxtmisha/functional-basic'

// Standard format (datetime)
const now = getCurrentDate()
// Result: "2024-03-15 14:30"

// Date only
const date = getCurrentDate('date')
// Result: "2024-03-15"
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};