import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/toNumber - Converting a value to a number`}),`
`,(0,c.jsx)(n.h1,{id:`tonumber`,children:(0,c.jsx)(n.code,{children:`toNumber`})}),`
`,(0,c.jsx)(n.p,{children:`Extracts a numeric value from a string or a number. The function removes extra characters and correctly handles various thousands and decimal separators (spaces, commas, periods).`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T`}),` — The input value (a string or a number).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`number`}),` — The transformed float number. If the value is empty or invalid, `,(0,c.jsx)(n.code,{children:`0`}),` is returned.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toNumber } from '@dxtmisha/functional-basic'

console.log(toNumber('1 250,50')) // 1250.5
console.log(toNumber('1,000,000.99')) // 1000000.99
console.log(toNumber('abc-12.5')) // 12.5
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};