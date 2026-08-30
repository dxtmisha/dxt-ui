import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isString - Check if value is a string`}),`
`,(0,c.jsx)(t.h1,{id:`isstring`,children:(0,c.jsx)(t.code,{children:`isString`})}),`
`,(0,c.jsx)(t.p,{children:`A fundamental yet highly reliable utility to assert whether the provided element constitutes a string type.`}),`
`,(0,c.jsxs)(t.p,{children:[`This resource leans on the standard native evaluation `,(0,c.jsx)(t.code,{children:`typeof value === 'string'`}),` to verify the intrinsic nature of the variable. By strictly enforcing this check, it instinctively filters out extraneous data dimensions including numbers, logic booleans, arrays, complex objects, and undefined traces.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — The generic input material submitted for type verification.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Emits `,(0,c.jsx)(t.code,{children:`true`}),` if the evaluated target inherently functions as a string primitive. Spits out `,(0,c.jsx)(t.code,{children:`false`}),` in every opposing scenario. Further establishes itself as a strict TypeScript type guard, proactively confining the subsequent variable type specifically down to `,(0,c.jsx)(t.code,{children:`string`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Hello, World!')) // true
console.log(isString('')) // true (empty strings are inherently valid strings)

// Filtering out dissenting types
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};