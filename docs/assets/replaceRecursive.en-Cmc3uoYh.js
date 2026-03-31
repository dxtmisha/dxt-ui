import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/replaceRecursive - Recursive merge of objects or arrays`}),`
`,(0,c.jsx)(n.h1,{id:`replacerecursive`,children:(0,c.jsx)(n.code,{children:`replaceRecursive`})}),`
`,(0,c.jsxs)(n.p,{children:[`Performs a deep (recursive) merge of the target object or array with data from a replacement object/array. If the `,(0,c.jsx)(n.code,{children:`isMerge`}),` parameter is enabled, arrays are concatenated with duplicates removed; otherwise, arrays from the replacement overwrite the original ones.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`array: ObjectItem<I>`}),` — The target array or object whose elements will be replaced/merged.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacement?: ObjectOrArray<I>`}),` — Arrays or objects from which elements will be extracted for replacement.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isMerge: boolean`}),` — Flag to merge arrays of the same name (defaults to `,(0,c.jsx)(n.code,{children:`true`}),`). If `,(0,c.jsx)(n.code,{children:`false`}),`, elements are simply overwritten.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`ObjectItem<I>`}),` — A new object or array that is the result of the merge. The original object is not mutated.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { replaceRecursive } from '@dxtmisha/functional-basic'

const target = { a: [1, 2], b: { x: 1 } }
const source = { a: [2, 3], b: { y: 2 } }

console.log(replaceRecursive(target, source)) 
// { a: [1, 2, 3], b: { x: 1, y: 2 } }

console.log(replaceRecursive(target, source, false)) 
// { a: [2, 3], b: { x: 1, y: 2 } }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};