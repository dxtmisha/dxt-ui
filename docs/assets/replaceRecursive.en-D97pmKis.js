import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/replaceRecursive - Recursive merge of objects or arrays`}),`
`,(0,c.jsx)(t.h1,{id:`replacerecursive`,children:(0,c.jsx)(t.code,{children:`replaceRecursive`})}),`
`,(0,c.jsxs)(t.p,{children:[`Performs a deep (recursive) merge of the target object with data from a replacement object or array. When `,(0,c.jsx)(t.code,{children:`isMerge`}),` is enabled (`,(0,c.jsx)(t.code,{children:`true`}),` by default), arrays at matching keys are concatenated with duplicates removed via `,(0,c.jsx)(t.code,{children:`uniqueArray`}),`; otherwise, arrays from `,(0,c.jsx)(t.code,{children:`replacement`}),` overwrite the target arrays.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Includes built-in `,(0,c.jsx)(t.strong,{children:`Prototype Pollution`}),` protection via `,(0,c.jsx)(t.code,{children:`isPrototypeKey`}),`, automatically skipping dangerous keys (`,(0,c.jsx)(t.code,{children:`__proto__`}),`, `,(0,c.jsx)(t.code,{children:`constructor`}),`, `,(0,c.jsx)(t.code,{children:`prototype`}),`) during traversal.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`target: ObjectItem<I>`}),` — The target object whose elements will be replaced or merged.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replacement?: ObjectOrArray<I>`}),` — Object or array from which elements will be extracted for replacement.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isMerge?: boolean = true`}),` — Flag to merge arrays (defaults to `,(0,c.jsx)(t.code,{children:`true`}),`). If `,(0,c.jsx)(t.code,{children:`false`}),`, arrays from `,(0,c.jsx)(t.code,{children:`replacement`}),` overwrite the original ones.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`ObjectItem<I>`}),` — A new merged object without mutating `,(0,c.jsx)(t.code,{children:`target`}),`. If `,(0,c.jsx)(t.code,{children:`target`}),` is not an object, returns a copy of `,(0,c.jsx)(t.code,{children:`replacement`}),` (if it is an object) or `,(0,c.jsx)(t.code,{children:`{}`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { replaceRecursive } from '@dxtmisha/functional-basic'

const target = { a: [1, 2], b: { x: 1 } }
const source = { a: [2, 3], b: { y: 2 } }

console.log(replaceRecursive(target, source)) 
// { a: [1, 2, 3], b: { x: 1, y: 2 } }

console.log(replaceRecursive(target, source, false)) 
// { a: [2, 3], b: { x: 1, y: 2 } }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};