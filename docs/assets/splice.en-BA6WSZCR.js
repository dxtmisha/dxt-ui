import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/splice - Copying and merging properties into an object`}),`
`,(0,c.jsx)(t.h1,{id:`splice`,children:(0,c.jsx)(t.code,{children:`splice`})}),`
`,(0,c.jsx)(t.p,{children:`Copies and recursively merges properties from one object into another. Supports replacing properties starting from a specific key or element value while preserving the order of surrounding properties.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array: ObjectItem<I>`}),` — The target object.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replacement?: ObjectItem<I> | I`}),` — The source object containing new data.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`indexStart?: string`}),` — The key or element value from which the replacement will begin.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`ObjectItem<I>`}),` — A new object with the changes applied.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { splice } from '@dxtmisha/functional-basic'

const target = { first: 1, middle: 2, last: 3 }
const replacement = { middleNew: 20 }

// Simple merge without indexStart
console.log(splice(target, replacement))
// { first: 1, middle: 2, last: 3, middleNew: 20 }

// Replace a property by key while preserving order of remaining fields
console.log(splice(target, replacement, 'middle'))
// { first: 1, middleNew: 20, last: 3 }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};