import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/isString - Check if value is a string"}),`
`,e.jsx(n.h1,{id:"isstring",children:e.jsx(n.code,{children:"isString"})}),`
`,e.jsx(n.p,{children:"A fundamental yet highly reliable utility to assert whether the provided element constitutes a string type."}),`
`,e.jsxs(n.p,{children:["This resource leans on the standard native evaluation ",e.jsx(n.code,{children:"typeof value === 'string'"})," to verify the intrinsic nature of the variable. By strictly enforcing this check, it instinctively filters out extraneous data dimensions including numbers, logic booleans, arrays, complex objects, and undefined traces."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: T"})," — The generic input material submitted for type verification."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"boolean"})," — Emits ",e.jsx(n.code,{children:"true"})," if the evaluated target inherently functions as a string primitive. Spits out ",e.jsx(n.code,{children:"false"})," in every opposing scenario. Further establishes itself as a strict TypeScript type guard, proactively confining the subsequent variable type specifically down to ",e.jsx(n.code,{children:"string"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Hello, World!')) // true
console.log(isString('')) // true (empty strings are inherently valid strings)

// Filtering out dissenting types
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function u(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(t,{...i})}):t(i)}export{u as default};
