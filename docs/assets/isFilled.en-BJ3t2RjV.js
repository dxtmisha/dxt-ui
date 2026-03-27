import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/isFilled - Check if a value is filled`}),`
`,(0,c.jsx)(n.h1,{id:`isfilled`,children:(0,c.jsx)(n.code,{children:`isFilled`})}),`
`,(0,c.jsx)(n.p,{children:`A versatile utility for confirming whether a given variable is meaningfully "filled" with data. This function intelligently inspects an array of types including numbers, strings, booleans, arrays, and standard objects to evaluate emptiness beyond basic JavaScript falsiness.`}),`
`,(0,c.jsxs)(n.p,{children:[`Unlike the generic truthy check (`,(0,c.jsx)(n.code,{children:`if (value)`}),`), `,(0,c.jsx)(n.code,{children:`isFilled`}),`:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[`Resolves arrays as empty (`,(0,c.jsx)(n.code,{children:`false`}),`) if their `,(0,c.jsx)(n.code,{children:`.length`}),` equals 0.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Assesses objects as empty (`,(0,c.jsx)(n.code,{children:`false`}),`) when all of their mapped values strictly result to `,(0,c.jsx)(n.code,{children:`null`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Flags definitive string placeholders like `,(0,c.jsx)(n.code,{children:`'undefined'`}),`, `,(0,c.jsx)(n.code,{children:`'null'`}),`, `,(0,c.jsx)(n.code,{children:`'false'`}),`, `,(0,c.jsx)(n.code,{children:`'[]'`}),` as entirely empty.`]}),`
`,(0,c.jsxs)(n.li,{children:[`Out of the box, treats the string `,(0,c.jsx)(n.code,{children:`'0'`}),` as empty, although this is modularly configurable via the secondary `,(0,c.jsx)(n.code,{children:`zeroTrue`}),` prop.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — The targeted input value of any type anticipating validation.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`zeroTrue: boolean`}),` — (Optional) When flagged as `,(0,c.jsx)(n.code,{children:`true`}),`, interprets the explicit string `,(0,c.jsx)(n.code,{children:`'0'`}),` as meaningfully filled (returns `,(0,c.jsx)(n.code,{children:`true`}),`), avoiding its traditional falsy deduction.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` (`,(0,c.jsx)(n.code,{children:`value is Exclude<T, EmptyValue>`}),`) — Emits `,(0,c.jsx)(n.code,{children:`true`}),` if the variable is populated, or `,(0,c.jsx)(n.code,{children:`false`}),` when empty. This acts as a TypeScript type guard narrowing out `,(0,c.jsx)(n.code,{children:`EmptyValue`}),` definitions.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isFilled } from '@dxtmisha/functional-basic'

console.log(isFilled('Some text')) // true
console.log(isFilled(100)) // true
console.log(isFilled([1, 2, 3])) // true
console.log(isFilled({ data: 'ok' })) // true

// Scenarios evaluated as empty
console.log(isFilled('')) // false
console.log(isFilled([])) // false
console.log(isFilled({ a: null })) // false
console.log(isFilled('null')) // false
console.log(isFilled('0')) // false

// Applying zeroTrue override
console.log(isFilled('0', true)) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};