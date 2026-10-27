import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isString - Check if value is a string`}),`
`,(0,c.jsx)(t.h1,{id:`isstring`,children:(0,c.jsx)(t.code,{children:`isString`})}),`
`,(0,c.jsxs)(t.p,{children:[`Checks whether the provided value is of type `,(0,c.jsx)(t.code,{children:`string`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Uses the native `,(0,c.jsx)(t.code,{children:`typeof value === 'string'`}),` check to confirm that the value is a string primitive, filtering out numbers, booleans, objects, arrays, `,(0,c.jsx)(t.code,{children:`null`}),`, and `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — The input value to check.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`value is Extract<T, string>`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Returns `,(0,c.jsx)(t.code,{children:`true`}),` if `,(0,c.jsx)(t.code,{children:`value`}),` is a string, otherwise `,(0,c.jsx)(t.code,{children:`false`}),`. Acts as a TypeScript type guard narrowing `,(0,c.jsx)(t.code,{children:`T`}),` to `,(0,c.jsx)(t.code,{children:`Extract<T, string>`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Hello, World!')) // true
console.log(isString('')) // true (empty strings are valid strings)

// Non-string types
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};