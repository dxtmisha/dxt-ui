import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(o){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/copyObject - Copy an object"}),`
`,e.jsx(n.h1,{id:"copyobject",children:e.jsx(n.code,{children:"copyObject"})}),`
`,e.jsx(n.p,{children:"Creates a deep copy of objects and arrays containing basic data types."}),`
`,e.jsxs(n.p,{children:["This is useful when you need to avoid mutating the original state. Keep in mind that it does not copy functions, symbols, or ",e.jsx(n.code,{children:"undefined"})," values, and it cannot handle circular references (under the hood it uses ",e.jsx(n.code,{children:"JSON.parse(JSON.stringify(value))"}),")."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — The object or value to be copied."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"T"})," — A new copy of the object."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { copyObject } from '@dxtmisha/functional-basic'

const original = { name: 'John', details: { age: 30 } }
const copy = copyObject(original)

copy.details.age = 31

console.log(original.details.age) // 30 (the original object did not change)
console.log(copy.details.age) // 31
`})})]})}function h(o={}){const{wrapper:n}={...c(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{h as default};
