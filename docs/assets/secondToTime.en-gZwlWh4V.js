import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/secondToTime - Convert seconds to a time string`}),`
`,(0,c.jsx)(n.h1,{id:`secondtotime`,children:(0,c.jsx)(n.code,{children:`secondToTime`})}),`
`,(0,c.jsxs)(n.p,{children:[`Converts a given number of seconds into a time format string `,(0,c.jsx)(n.code,{children:`MM:SS`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`If the value of seconds is less than or equal to zero, or is not provided, the default value `,(0,c.jsx)(n.code,{children:`00:00`}),` is returned.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`second: number | string | undefined`}),` — The total number of seconds (both numbers and string representations of numbers are supported).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — A formatted string with minutes and seconds (e.g., `,(0,c.jsx)(n.code,{children:`12:34`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { secondToTime } from '@dxtmisha/functional-basic'

console.log(secondToTime(125)) // '02:05'
console.log(secondToTime('65')) // '01:05'
console.log(secondToTime()) // '00:00'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};