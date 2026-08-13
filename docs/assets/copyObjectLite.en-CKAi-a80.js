import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/copyObjectLite - Shallow copy an object`}),`
`,(0,c.jsx)(t.h1,{id:`copyobjectlite`,children:(0,c.jsx)(t.code,{children:`copyObjectLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Creates a shallow copy of a simple object using `,(0,c.jsx)(t.code,{children:`Object.assign`}),`. It can optionally merge additional properties from the second argument `,(0,c.jsx)(t.code,{children:`source`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Because this is a shallow copy, nested objects and arrays will be copied by reference, not by value.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — The object to be copied.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`source?: any`}),` — Additional properties to merge with the base `,(0,c.jsx)(t.code,{children:`value`}),`. Properties from `,(0,c.jsx)(t.code,{children:`source`}),` will overwrite those from `,(0,c.jsx)(t.code,{children:`value`}),` if their keys match.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`R`}),` (defaults to `,(0,c.jsx)(t.code,{children:`T`}),`) — A new shallow copy of the object.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { copyObjectLite } from '@dxtmisha/functional-basic'

const original = { a: 1, b: { c: 2 } }

// Simple shallow copy
const copy = copyObjectLite(original)
console.log(copy.b === original.b) // true (references the same nested object)

// Copy with additional properties merged
const merged = copyObjectLite(original, { a: 10, d: 4 })
console.log(merged) // { a: 10, b: { c: 2 }, d: 4 }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};