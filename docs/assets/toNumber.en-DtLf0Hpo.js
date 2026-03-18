import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(r){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/toNumber - Converting a value to a number"}),`
`,e.jsx(n.h1,{id:"tonumber",children:e.jsx(n.code,{children:"toNumber"})}),`
`,e.jsx(n.p,{children:"Extracts a numeric value from a string or a number. The function removes extra characters and correctly handles various thousands and decimal separators (spaces, commas, periods)."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value?: T"})," — The input value (a string or a number)."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"number"})," — The transformed float number. If the value is empty or invalid, ",e.jsx(n.code,{children:"0"})," is returned."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { toNumber } from '@dxtmisha/functional-basic'

console.log(toNumber('1 250,50')) // 1250.5
console.log(toNumber('1,000,000.99')) // 1000000.99
console.log(toNumber('abc-12.5')) // 12.5
`})})]})}function d(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(o,{...r})}):o(r)}export{d as default};
