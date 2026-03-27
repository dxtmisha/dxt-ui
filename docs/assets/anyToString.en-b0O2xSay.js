import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/anyToString - Conversion of a value to a string`}),`
`,(0,c.jsx)(n.h1,{id:`anytostring`,children:(0,c.jsx)(n.code,{children:`anyToString`})}),`
`,(0,c.jsx)(n.p,{children:`A utility that safely converts any input data into a string type.`}),`
`,(0,c.jsx)(n.p,{children:`This is useful when outputting data to the interface when the variable type (object, array, boolean, or null) is not known in advance.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: V`}),` — Values for conversion.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isArrayString: boolean`}),` (optional, default: `,(0,c.jsx)(n.code,{children:`true`}),`) — If `,(0,c.jsx)(n.code,{children:`true`}),`, arrays of primitives will be joined by commas. If `,(0,c.jsx)(n.code,{children:`false`}),`, they will be stringified as JSON.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — The string representation of the provided value.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { anyToString } from '@dxtmisha/functional-basic'

console.log(anyToString(' test ')) // 'test' (trimmed)
console.log(anyToString([1, 2, 3])) // '1,2,3' (isArrayString = true)
console.log(anyToString([1, 2, 3], false)) // '[1,2,3]' (isArrayString = false)

console.log(anyToString([[1], [2]])) // '[[1],[2]]' (nested arrays are stringified as JSON)
console.log(anyToString([{ a: 1 }, 2])) // '[{"a":1},2]' (arrays with objects are stringified as JSON)

console.log(anyToString({ a: 1 })) // '{"a":1}'
console.log(anyToString(true)) // '1'
console.log(anyToString(false)) // '0'
console.log(anyToString(123)) // '123'
console.log(anyToString(null)) // ''
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};