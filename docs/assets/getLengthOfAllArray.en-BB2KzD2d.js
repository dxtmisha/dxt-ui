import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as a}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"@dxtmisha/en/functional-basic/Functions/getLengthOfAllArray - Lengths of all array elements"}),`
`,e.jsx(n.h1,{id:"getlengthofallarray",children:e.jsx(n.code,{children:"getLengthOfAllArray"})}),`
`,e.jsxs(n.p,{children:["Creates and returns a new array consisting of the lengths (the ",e.jsx(n.code,{children:".length"})," property) of all elements in the provided array of strings."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: ObjectOrArray<string>"})," — The input array of strings. If a single string is passed, it acts as an array with one element."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"number[]"})," — An array of numbers where each number corresponds to the length of the string in the source array at that same position."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getLengthOfAllArray } from '@dxtmisha/functional-basic'

const data = ['red', 'blue', 'green']
const lengths = getLengthOfAllArray(data)

console.log(lengths) // [3, 4, 5]
`})})]})}function g(r={}){const{wrapper:n}={...s(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{g as default};
