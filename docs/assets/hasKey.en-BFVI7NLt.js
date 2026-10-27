import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/hasKey - Check if object has own property key`}),`
`,(0,c.jsx)(t.h1,{id:`haskey`,children:(0,c.jsx)(t.code,{children:`hasKey`})}),`
`,(0,c.jsxs)(t.p,{children:[`Checks whether the specified property is an own property of the object or function using a safe `,(0,c.jsx)(t.code,{children:`Object.prototype.hasOwnProperty.call`}),` invocation.`]}),`
`,(0,c.jsxs)(t.p,{children:[`The function provides robust protection against `,(0,c.jsx)(t.strong,{children:`Prototype Pollution`}),` and prevents false positives on prototype chain properties (such as `,(0,c.jsx)(t.code,{children:`toString`}),`, `,(0,c.jsx)(t.code,{children:`valueOf`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`hasOwnProperty`}),`). It is safe to use with `,(0,c.jsx)(t.code,{children:`null`}),`, `,(0,c.jsx)(t.code,{children:`undefined`}),`, primitive values, and objects without a prototype (`,(0,c.jsx)(t.code,{children:`Object.create(null)`}),`). In TypeScript, it acts as a type guard, automatically narrowing the object type for safe property access.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`object: unknown`}),` — the object, function, or value of any type to check.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: K`}),` — the property key to look for (`,(0,c.jsx)(t.code,{children:`K extends PropertyKey`}),`: `,(0,c.jsx)(t.code,{children:`string | number | symbol`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` (`,(0,c.jsx)(t.code,{children:`object is T & Record<K, unknown>`}),`) — `,(0,c.jsx)(t.code,{children:`true`}),` if the property exists and belongs directly to the object (own property), otherwise `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { hasKey } from '@dxtmisha/functional-basic'

const user = { name: 'Alice', age: 30 }
console.log(hasKey(user, 'name')) // true
console.log(hasKey(user, 'email')) // false

// Prototype pollution protection:
console.log(hasKey({}, 'toString')) // false
console.log(hasKey({ toString: 'custom' }, 'toString')) // true

// Safe with null, undefined, and primitives:
console.log(hasKey(null, 'foo')) // false
console.log(hasKey(123, 'foo')) // false

// Objects without prototypes (Object.create(null)):
const dict = Object.create(null)
dict.item = 'value'
console.log(hasKey(dict, 'item')) // true
console.log(hasKey(dict, 'toString')) // false

// TypeScript type narrowing (Type Guard):
const data: unknown = { id: 1, title: 'DXT' }
if (hasKey(data, 'title')) {
  console.log(data.title) // data is narrowed to include title
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};