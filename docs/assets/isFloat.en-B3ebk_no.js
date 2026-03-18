import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(o){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/isFloat - Check if value is a number or float"}),`
`,e.jsx(n.h1,{id:"isfloat",children:e.jsx(n.code,{children:"isFloat"})}),`
`,e.jsx(n.p,{children:"Checks if the value is an integer or a floating-point number."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — values for checking."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — ",e.jsx(n.code,{children:"true"})," if the value is a number or a string representation of a number, otherwise ",e.jsx(n.code,{children:"false"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isFloat } from '@dxtmisha/functional-basic'

console.log(isFloat(123)) // true
console.log(isFloat('123.45')) // true
console.log(isFloat('abc')) // false
`})})]})}function u(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{u as default};
