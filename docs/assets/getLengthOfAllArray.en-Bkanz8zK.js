import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getLengthOfAllArray - Lengths of all array elements`}),`
`,(0,c.jsx)(t.h1,{id:`getlengthofallarray`,children:(0,c.jsx)(t.code,{children:`getLengthOfAllArray`})}),`
`,(0,c.jsxs)(t.p,{children:[`Creates and returns a new array consisting of the lengths (the `,(0,c.jsx)(t.code,{children:`.length`}),` property) of all elements in the provided array of strings.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: ObjectOrArray<string>`}),` — The input array of strings. If a single string is passed, it acts as an array with one element.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`number[]`}),` — An array of numbers where each number corresponds to the length of the string in the source array at that same position.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getLengthOfAllArray } from '@dxtmisha/functional-basic'

const data = ['red', 'blue', 'green']
const lengths = getLengthOfAllArray(data)

console.log(lengths) // [3, 4, 5]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};