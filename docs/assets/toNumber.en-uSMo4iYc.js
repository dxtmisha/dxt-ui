import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-DeABI6Wb.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/toNumber - Converting a value to a number`}),`
`,(0,l.jsx)(n.h1,{id:`tonumber`,children:(0,l.jsx)(n.code,{children:`toNumber`})}),`
`,(0,l.jsx)(n.p,{children:`Converts a string or number into a finite floating-point number. The function is designed to handle various formatting styles, including thousands separators and different decimal markers.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value?: NumberOrString`}),` — The input value for conversion.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`number`}),` — The parsed float number or `,(0,l.jsx)(n.code,{children:`0`}),` if conversion fails or the value is non-finite.`]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { toNumber } from '@dxtmisha/functional-basic'

// 1. Handling various separators
toNumber('1 250,50')       // 1250.5
toNumber('1,000,000.99')   // 1000000.99
toNumber('1.250,50')       // 1250.5

// 2. Stripping non-numeric characters
toNumber('abc-12.5')       // -12.5
toNumber('$1,234.56')      // 1234.56

// 3. Numbers and special values
toNumber(123.45)           // 123.45
toNumber(-0)               // 0 (normalized)
toNumber(Infinity)         // 0
toNumber(undefined)        // 0
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};