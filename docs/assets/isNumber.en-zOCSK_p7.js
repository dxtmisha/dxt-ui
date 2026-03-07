import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/isNumber - Check if value is a number"}),`
`,e.jsx(n.h1,{id:"isnumber",children:e.jsx(n.code,{children:"isNumber"})}),`
`,e.jsx(n.p,{children:"A versatile utility engineered to ascertain if an incoming argument acts effectively as a valid numerical entity."}),`
`,e.jsxs(n.p,{children:["This evaluation effortlessly handles the native numeric typing (",e.jsx(n.code,{children:"typeof value === 'number'"}),"), meaning it natively clears primitive numbers (inclusive of unique types like ",e.jsx(n.code,{children:"NaN"}),"). Simultaneously, it expands validation to test strings by running a robust RegEx check ensuring that the entirety of the string constitutes a valid numeric format (including negative values and fractional decimals)."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: any"})," — The arbitrary data item to screen."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Emits ",e.jsx(n.code,{children:"true"})," if the subject naturally belongs to the quantitative number type or if it's a completely digital string structure. Displays ",e.jsx(n.code,{children:"false"})," in every alternative state."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isNumber } from '@dxtmisha/functional-basic'

console.log(isNumber(150)) // true
console.log(isNumber(3.14)) // true
console.log(isNumber('720')) // true (Numeric String allowed natively)

console.log(isNumber('-50')) // true (Negative numbers are supported)
console.log(isNumber('3.14')) // true (Decimals are allowed too)
console.log(isNumber('15a')) // false (Fails due to alphanumeric content)
console.log(isNumber(null)) // false
`})})]})}function d(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(i,{...t})}):i(t)}export{d as default};
