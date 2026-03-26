import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getCurrentDate - Get current date`}),`
`,(0,c.jsx)(n.h1,{id:`getcurrentdate`,children:(0,c.jsx)(n.code,{children:`getCurrentDate`})}),`
`,(0,c.jsxs)(n.p,{children:[`Returns the current date in the specified format. The function is a wrapper around the `,(0,c.jsx)(n.code,{children:`Datetime`}),` class and allows you to quickly get a formatted string of the current time.`]}),`
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
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};