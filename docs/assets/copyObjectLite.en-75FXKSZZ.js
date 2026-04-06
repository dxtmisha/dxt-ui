import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/en/functional-basic/Functions/copyObjectLite - Shallow copy an object`}),`
`,(0,c.jsx)(n.h1,{id:`copyobjectlite`,children:(0,c.jsx)(n.code,{children:`copyObjectLite`})}),`
`,(0,c.jsxs)(n.p,{children:[`Creates a shallow copy of a simple object using `,(0,c.jsx)(n.code,{children:`Object.assign`}),`. It can optionally merge additional properties from the second argument `,(0,c.jsx)(n.code,{children:`source`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsx)(n.p,{children:`Because this is a shallow copy, nested objects and arrays will be copied by reference, not by value.`}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — The object to be copied.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`source?: any`}),` — Additional properties to merge with the base `,(0,c.jsx)(n.code,{children:`value`}),`. Properties from `,(0,c.jsx)(n.code,{children:`source`}),` will overwrite those from `,(0,c.jsx)(n.code,{children:`value`}),` if their keys match.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`R`}),` (defaults to `,(0,c.jsx)(n.code,{children:`T`}),`) — A new shallow copy of the object.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { copyObjectLite } from '@dxtmisha/functional-basic'

const original = { a: 1, b: { c: 2 } }

// Simple shallow copy
const copy = copyObjectLite(original)
console.log(copy.b === original.b) // true (references the same nested object)

// Copy with additional properties merged
const merged = copyObjectLite(original, { a: 10, d: 4 })
console.log(merged) // { a: 10, b: { c: 2 }, d: 4 }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};