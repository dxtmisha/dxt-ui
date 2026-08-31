import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/en/functional-basic/Functions/getMinLengthAllArray - Minimum length in array`}),`
`,(0,c.jsx)(t.h1,{id:`getminlengthallarray`,children:(0,c.jsx)(t.code,{children:`getMinLengthAllArray`})}),`
`,(0,c.jsxs)(t.p,{children:[`A utility that finds the shortest string in the provided array and returns its length (as a number). The function uses built-in `,(0,c.jsx)(t.code,{children:`Math.min`}),` combined with `,(0,c.jsx)(t.code,{children:`getLengthOfAllArray`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Parameters:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: ObjectOrArray<string>`}),` — The input array of strings.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Returns:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — The length of the shortest string in the array. If an empty array is passed, it returns `,(0,c.jsx)(t.code,{children:`Infinity`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getMinLengthAllArray } from '@dxtmisha/functional-basic'

const words = ['computer', 'code', 'programming']
const minLength = getMinLengthAllArray(words)

console.log(minLength) // 4 ("code")
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};