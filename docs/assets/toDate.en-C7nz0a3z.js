import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/toDate - Converting a value to a Date object`}),`
`,(0,c.jsx)(n.h1,{id:`todate`,children:(0,c.jsx)(n.code,{children:`toDate`})}),`
`,(0,c.jsxs)(n.p,{children:[`Converts the input value (date, number, or string) into a `,(0,c.jsx)(n.code,{children:`Date`}),` object. Supports various string formats, including ISO-like strings without delimiters, as well as automatic timezone substitution.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T`}),` — The input value (a `,(0,c.jsx)(n.code,{children:`Date`}),` object, timestamp in milliseconds, or a date string).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`Date`}),` — The resulting date object. If the value is not provided or is `,(0,c.jsx)(n.code,{children:`null`}),`, the current date is returned.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toDate } from '@dxtmisha/functional-basic'

console.log(toDate('20231027')) // '2023-10-27T00:00:00.000Z'
console.log(toDate(1672531200000)) // '2023-01-01T00:00:00.000Z'
console.log(toDate('12:00')) // '2000-01-01T12:00:00.000Z'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};