import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/isString - Check if value is a string`}),`
`,(0,c.jsx)(n.h1,{id:`isstring`,children:(0,c.jsx)(n.code,{children:`isString`})}),`
`,(0,c.jsx)(n.p,{children:`A fundamental yet highly reliable utility to assert whether the provided element constitutes a string type.`}),`
`,(0,c.jsxs)(n.p,{children:[`This resource leans on the standard native evaluation `,(0,c.jsx)(n.code,{children:`typeof value === 'string'`}),` to verify the intrinsic nature of the variable. By strictly enforcing this check, it instinctively filters out extraneous data dimensions including numbers, logic booleans, arrays, complex objects, and undefined traces.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — The generic input material submitted for type verification.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Emits `,(0,c.jsx)(n.code,{children:`true`}),` if the evaluated target inherently functions as a string primitive. Spits out `,(0,c.jsx)(n.code,{children:`false`}),` in every opposing scenario. Further establishes itself as a strict TypeScript type guard, proactively confining the subsequent variable type specifically down to `,(0,c.jsx)(n.code,{children:`string`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Hello, World!')) // true
console.log(isString('')) // true (empty strings are inherently valid strings)

// Filtering out dissenting types
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};