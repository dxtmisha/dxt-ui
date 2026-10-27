import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/isObjectNotArray - Strict object verification`}),`
`,(0,c.jsx)(t.h1,{id:`isobjectnotarray`,children:(0,c.jsx)(t.code,{children:`isObjectNotArray`})}),`
`,(0,c.jsxs)(t.p,{children:[`Checks if the provided value is a plain object (Record) and `,(0,c.jsx)(t.strong,{children:`not an array`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Since the base `,(0,c.jsx)(t.code,{children:`isObject`}),` utility returns `,(0,c.jsx)(t.code,{children:`true`}),` for arrays as well (in accordance with JavaScript's `,(0,c.jsx)(t.code,{children:`typeof`}),` behavior), `,(0,c.jsx)(t.code,{children:`isObjectNotArray`}),` combines `,(0,c.jsx)(t.code,{children:`isObject(value)`}),` with `,(0,c.jsx)(t.code,{children:`!isArray(value)`}),` to strictly exclude arrays.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — The value to check.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`value is Exclude<Extract<T, ObjectItem>, unknown[] | undefined | null>`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Returns `,(0,c.jsx)(t.code,{children:`true`}),` only for non-null, non-array objects (such as `,(0,c.jsx)(t.code,{children:`{ key: 'value' }`}),`), and `,(0,c.jsx)(t.code,{children:`false`}),` for arrays `,(0,c.jsx)(t.code,{children:`[]`}),`, `,(0,c.jsx)(t.code,{children:`null`}),`, `,(0,c.jsx)(t.code,{children:`undefined`}),`, functions, and primitives. Acts as a TypeScript type guard narrowing `,(0,c.jsx)(t.code,{children:`T`}),` to `,(0,c.jsx)(t.code,{children:`ObjectItem`}),` while excluding arrays, `,(0,c.jsx)(t.code,{children:`undefined`}),`, and `,(0,c.jsx)(t.code,{children:`null`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isObjectNotArray } from '@dxtmisha/functional-basic'

// Valid object
console.log(isObjectNotArray({ id: 1, name: 'Test' })) // true

// Filtered out values
console.log(isObjectNotArray([1, 2, 3])) // false (arrays are excluded)
console.log(isObjectNotArray(null)) // false
console.log(isObjectNotArray('string')) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};