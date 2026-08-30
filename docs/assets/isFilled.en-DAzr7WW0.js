import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isFilled - Check if a value is filled`}),`
`,(0,c.jsx)(t.h1,{id:`isfilled`,children:(0,c.jsx)(t.code,{children:`isFilled`})}),`
`,(0,c.jsx)(t.p,{children:`A versatile utility for confirming whether a given variable is meaningfully "filled" with data. This function intelligently inspects an array of types including numbers, strings, booleans, arrays, and standard objects to evaluate emptiness beyond basic JavaScript falsiness.`}),`
`,(0,c.jsxs)(t.p,{children:[`Unlike the generic truthy check (`,(0,c.jsx)(t.code,{children:`if (value)`}),`), `,(0,c.jsx)(t.code,{children:`isFilled`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Resolves arrays as empty (`,(0,c.jsx)(t.code,{children:`false`}),`) if their `,(0,c.jsx)(t.code,{children:`.length`}),` equals 0.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Assesses objects as empty (`,(0,c.jsx)(t.code,{children:`false`}),`) when all of their mapped values strictly result to `,(0,c.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Flags definitive string placeholders like `,(0,c.jsx)(t.code,{children:`'undefined'`}),`, `,(0,c.jsx)(t.code,{children:`'null'`}),`, `,(0,c.jsx)(t.code,{children:`'false'`}),`, `,(0,c.jsx)(t.code,{children:`'[]'`}),` as entirely empty.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Out of the box, treats the string `,(0,c.jsx)(t.code,{children:`'0'`}),` as empty, although this is modularly configurable via the secondary `,(0,c.jsx)(t.code,{children:`zeroTrue`}),` prop.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — The targeted input value of any type anticipating validation.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`zeroTrue: boolean`}),` — (Optional) When flagged as `,(0,c.jsx)(t.code,{children:`true`}),`, interprets the explicit string `,(0,c.jsx)(t.code,{children:`'0'`}),` as meaningfully filled (returns `,(0,c.jsx)(t.code,{children:`true`}),`), avoiding its traditional falsy deduction.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` (`,(0,c.jsx)(t.code,{children:`value is Exclude<T, EmptyValue>`}),`) — Emits `,(0,c.jsx)(t.code,{children:`true`}),` if the variable is populated, or `,(0,c.jsx)(t.code,{children:`false`}),` when empty. This acts as a TypeScript type guard narrowing out `,(0,c.jsx)(t.code,{children:`EmptyValue`}),` definitions.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isFilled } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};