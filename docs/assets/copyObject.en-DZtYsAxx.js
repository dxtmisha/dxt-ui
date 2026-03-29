import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/copyObject - Copy an object`}),`
`,(0,c.jsx)(n.h1,{id:`copyobject`,children:(0,c.jsx)(n.code,{children:`copyObject`})}),`
`,(0,c.jsx)(n.p,{children:`Creates a deep copy of objects and arrays containing basic data types.`}),`
`,(0,c.jsxs)(n.p,{children:[`This is useful when you need to avoid mutating the original state. Keep in mind that it does not copy functions, symbols, or `,(0,c.jsx)(n.code,{children:`undefined`}),` values, and it cannot handle circular references (under the hood it uses `,(0,c.jsx)(n.code,{children:`JSON.parse(JSON.stringify(value))`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — The object or value to be copied.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — A new copy of the object.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { copyObject } from '@dxtmisha/functional-basic'

const original = { name: 'John', details: { age: 30 } }
const copy = copyObject(original)

copy.details.age = 31

console.log(original.details.age) // 30 (the original object did not change)
console.log(copy.details.age) // 31
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};