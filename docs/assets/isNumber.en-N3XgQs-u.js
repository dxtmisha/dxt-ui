import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isNumber - Check if value is a number`}),`
`,(0,c.jsx)(t.h1,{id:`isnumber`,children:(0,c.jsx)(t.code,{children:`isNumber`})}),`
`,(0,c.jsx)(t.p,{children:`A versatile utility engineered to ascertain if an incoming argument acts effectively as a valid numerical entity.`}),`
`,(0,c.jsxs)(t.p,{children:[`This evaluation effortlessly handles the native numeric typing (`,(0,c.jsx)(t.code,{children:`typeof value === 'number'`}),`), meaning it natively clears primitive numbers (inclusive of unique types like `,(0,c.jsx)(t.code,{children:`NaN`}),`). Simultaneously, it expands validation to test strings by running a robust RegEx check ensuring that the entirety of the string constitutes a valid numeric format (including negative values and fractional decimals).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: any`}),` — The arbitrary data item to screen.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Emits `,(0,c.jsx)(t.code,{children:`true`}),` if the subject naturally belongs to the quantitative number type or if it's a completely digital string structure. Displays `,(0,c.jsx)(t.code,{children:`false`}),` in every alternative state.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isNumber } from '@dxtmisha/functional-basic'

console.log(isNumber(150)) // true
console.log(isNumber(3.14)) // true
console.log(isNumber('720')) // true (Numeric String allowed natively)

console.log(isNumber('-50')) // true (Negative numbers are supported)
console.log(isNumber('3.14')) // true (Decimals are allowed too)
console.log(isNumber('15a')) // false (Fails due to alphanumeric content)
console.log(isNumber(null)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};