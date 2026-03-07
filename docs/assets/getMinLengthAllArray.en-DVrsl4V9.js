import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/getMinLengthAllArray - Minimum length in array"}),`
`,n.jsx(e.h1,{id:"getminlengthallarray",children:n.jsx(e.code,{children:"getMinLengthAllArray"})}),`
`,n.jsxs(e.p,{children:["A utility that finds the shortest string in the provided array and returns its length (as a number). The function uses built-in ",n.jsx(e.code,{children:"Math.min"})," combined with ",n.jsx(e.code,{children:"getLengthOfAllArray"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"data: ObjectOrArray<string>"})," — The input array of strings."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"}),`
`,n.jsx(e.code,{children:"number"})," — The length of the shortest string in the array. If an empty array is passed, it returns ",n.jsx(e.code,{children:"Infinity"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getMinLengthAllArray } from '@dxtmisha/functional-basic'

const words = ['computer', 'code', 'programming']
const minLength = getMinLengthAllArray(words)

console.log(minLength) // 4 ("code")
`})})]})}function m(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(r,{...t})}):r(t)}export{m as default};
