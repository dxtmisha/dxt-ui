import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/isNumber - Check if value is a number`}),`
`,(0,c.jsx)(n.h1,{id:`isnumber`,children:(0,c.jsx)(n.code,{children:`isNumber`})}),`
`,(0,c.jsx)(n.p,{children:`A versatile utility engineered to ascertain if an incoming argument acts effectively as a valid numerical entity.`}),`
`,(0,c.jsxs)(n.p,{children:[`This evaluation effortlessly handles the native numeric typing (`,(0,c.jsx)(n.code,{children:`typeof value === 'number'`}),`), meaning it natively clears primitive numbers (inclusive of unique types like `,(0,c.jsx)(n.code,{children:`NaN`}),`). Simultaneously, it expands validation to test strings by running a robust RegEx check ensuring that the entirety of the string constitutes a valid numeric format (including negative values and fractional decimals).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: any`}),` — The arbitrary data item to screen.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Emits `,(0,c.jsx)(n.code,{children:`true`}),` if the subject naturally belongs to the quantitative number type or if it's a completely digital string structure. Displays `,(0,c.jsx)(n.code,{children:`false`}),` in every alternative state.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isNumber } from '@dxtmisha/functional-basic'

console.log(isNumber(150)) // true
console.log(isNumber(3.14)) // true
console.log(isNumber('720')) // true (Numeric String allowed natively)

console.log(isNumber('-50')) // true (Negative numbers are supported)
console.log(isNumber('3.14')) // true (Decimals are allowed too)
console.log(isNumber('15a')) // false (Fails due to alphanumeric content)
console.log(isNumber(null)) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};