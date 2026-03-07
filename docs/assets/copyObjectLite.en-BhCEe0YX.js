import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(n){const o={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/copyObjectLite - Shallow copy an object"}),`
`,e.jsx(o.h1,{id:"copyobjectlite",children:e.jsx(o.code,{children:"copyObjectLite"})}),`
`,e.jsxs(o.p,{children:["Creates a shallow copy of a simple object using ",e.jsx(o.code,{children:"Object.assign"}),". It can optionally merge additional properties from the second argument ",e.jsx(o.code,{children:"source"}),"."]}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsx(o.p,{children:"Because this is a shallow copy, nested objects and arrays will be copied by reference, not by value."}),`
`]}),`
`,e.jsx(o.p,{children:e.jsx(o.strong,{children:"Parameters:"})}),`
`,e.jsxs(o.ul,{children:[`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"value: T"})," — The object to be copied."]}),`
`,e.jsxs(o.li,{children:[e.jsx(o.code,{children:"source?: any"})," — Additional properties to merge with the base ",e.jsx(o.code,{children:"value"}),". Properties from ",e.jsx(o.code,{children:"source"})," will overwrite those from ",e.jsx(o.code,{children:"value"})," if their keys match."]}),`
`]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Returns:"}),`
`,e.jsx(o.code,{children:"R"})," (defaults to ",e.jsx(o.code,{children:"T"}),") — A new shallow copy of the object."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-typescript",children:`import { copyObjectLite } from '@dxtmisha/functional-basic'

const original = { a: 1, b: { c: 2 } }

// Simple shallow copy
const copy = copyObjectLite(original)
console.log(copy.b === original.b) // true (references the same nested object)

// Copy with additional properties merged
const merged = copyObjectLite(original, { a: 10, d: 4 })
console.log(merged) // { a: 10, b: { c: 2 }, d: 4 }
`})})]})}function p(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(c,{...n})}):c(n)}export{p as default};
