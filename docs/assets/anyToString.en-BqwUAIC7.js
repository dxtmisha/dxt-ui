import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-BDI5G1Gi.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/anyToString - Conversion of a value to a string`}),`
`,(0,l.jsx)(n.h1,{id:`anytostring`,children:(0,l.jsx)(n.code,{children:`anyToString`})}),`
`,(0,l.jsx)(n.p,{children:`A utility for safely converting any input data into a string type.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: V`}),` — The value for conversion.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`isArrayString: boolean = true`}),` — If `,(0,l.jsx)(n.code,{children:`true`}),`, primitive arrays are joined by commas.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`trim: boolean = true`}),` — If `,(0,l.jsx)(n.code,{children:`true`}),`, trims leading and trailing whitespace (only for strings).`]}),`
`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Conversion Rules:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Strings`}),`: Returned as is (with `,(0,l.jsx)(n.code,{children:`trim`}),` if enabled).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Arrays`}),`: If `,(0,l.jsx)(n.code,{children:`isArrayString: true`}),` and no objects are in the array, elements are joined by commas. Otherwise, JSON stringified.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Objects`}),`: Converted to JSON. In case of error (e.g., circular reference), returns standard `,(0,l.jsx)(n.code,{children:`toString()`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Boolean`}),`: `,(0,l.jsx)(n.code,{children:`true`}),` converts to `,(0,l.jsx)(n.code,{children:`'1'`}),`, `,(0,l.jsx)(n.code,{children:`false`}),` to `,(0,l.jsx)(n.code,{children:`'0'`}),`.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:`Other types`}),`: `,(0,l.jsx)(n.code,{children:`null`}),` and `,(0,l.jsx)(n.code,{children:`undefined`}),` result in an empty string. Others call `,(0,l.jsx)(n.code,{children:`toString()`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Returns:`}),`
`,(0,l.jsx)(n.code,{children:`string`}),` — The string representation of the value.`]}),`
`,(0,l.jsx)(n.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { anyToString } from '@dxtmisha/functional-basic'

// 1. Strings
anyToString('  Hello  ')               // 'Hello'
anyToString('  Hello  ', true, false)  // '  Hello  '

// 2. Arrays
anyToString([1, 2, 3])                 // '1,2,3'
anyToString([1, 2, 3], false)          // '[1,2,3]'

// 3. Objects
anyToString({ a: 1 })                  // '{"a":1}'

// 4. Boolean values (1/0 conversion)
anyToString(true)                      // '1'
anyToString(false)                     // '0'

// 5. Empty values and types
anyToString(null)                      // ''
anyToString(123)                       // '123'
anyToString(Symbol('test'))            // 'Symbol(test)'
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};