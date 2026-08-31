import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-8NMpF0hx.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/en/functional-basic/Functions/anyToString - Conversion of a value to a string`}),`
`,(0,l.jsx)(t.h1,{id:`anytostring`,children:(0,l.jsx)(t.code,{children:`anyToString`})}),`
`,(0,l.jsx)(t.p,{children:`A utility for safely converting any input data into a string type.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: V`}),` — The value for conversion.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`isArrayString: boolean = true`}),` — If `,(0,l.jsx)(t.code,{children:`true`}),`, primitive arrays are joined by commas.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`trim: boolean = true`}),` — If `,(0,l.jsx)(t.code,{children:`true`}),`, trims leading and trailing whitespace (only for strings).`]}),`
`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Conversion Rules:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Strings`}),`: Returned as is (with `,(0,l.jsx)(t.code,{children:`trim`}),` if enabled).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Arrays`}),`: If `,(0,l.jsx)(t.code,{children:`isArrayString: true`}),` and no objects are in the array, elements are joined by commas. Otherwise, JSON stringified.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Objects`}),`: Converted to JSON. In case of error (e.g., circular reference), returns standard `,(0,l.jsx)(t.code,{children:`toString()`}),`.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Boolean`}),`: `,(0,l.jsx)(t.code,{children:`true`}),` converts to `,(0,l.jsx)(t.code,{children:`'1'`}),`, `,(0,l.jsx)(t.code,{children:`false`}),` to `,(0,l.jsx)(t.code,{children:`'0'`}),`.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:`Other types`}),`: `,(0,l.jsx)(t.code,{children:`null`}),` and `,(0,l.jsx)(t.code,{children:`undefined`}),` result in an empty string. Others call `,(0,l.jsx)(t.code,{children:`toString()`}),`.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Returns:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — The string representation of the value.`]}),`
`,(0,l.jsx)(t.h2,{id:`examples`,children:`Examples`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};