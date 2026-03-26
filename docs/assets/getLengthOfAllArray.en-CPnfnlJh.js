import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/en/functional-basic/Functions/getLengthOfAllArray - Lengths of all array elements`}),`
`,(0,c.jsx)(n.h1,{id:`getlengthofallarray`,children:(0,c.jsx)(n.code,{children:`getLengthOfAllArray`})}),`
`,(0,c.jsxs)(n.p,{children:[`Creates and returns a new array consisting of the lengths (the `,(0,c.jsx)(n.code,{children:`.length`}),` property) of all elements in the provided array of strings.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: ObjectOrArray<string>`}),` — The input array of strings. If a single string is passed, it acts as an array with one element.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Returns:`}),`
`,(0,c.jsx)(n.code,{children:`number[]`}),` — An array of numbers where each number corresponds to the length of the string in the source array at that same position.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getLengthOfAllArray } from '@dxtmisha/functional-basic'

const data = ['red', 'blue', 'green']
const lengths = getLengthOfAllArray(data)

console.log(lengths) // [3, 4, 5]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};