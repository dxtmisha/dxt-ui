import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-8NMpF0hx.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/functional-basic/Functions/toNumber - Converting a value to a number`}),`
`,(0,l.jsx)(t.h1,{id:`tonumber`,children:(0,l.jsx)(t.code,{children:`toNumber`})}),`
`,(0,l.jsx)(t.p,{children:`Converts a string or number into a finite floating-point number. The function is designed to handle various formatting styles, including thousands separators and different decimal markers.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value?: NumberOrString`}),` — The input value for conversion.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`number`}),` — The parsed float number or `,(0,l.jsx)(t.code,{children:`0`}),` if conversion fails or the value is non-finite.`]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};