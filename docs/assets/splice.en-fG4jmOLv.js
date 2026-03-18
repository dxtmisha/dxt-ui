import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/splice - Copying and merging properties into an object"}),`
`,e.jsx(n.h1,{id:"splice",children:e.jsx(n.code,{children:"splice"})}),`
`,e.jsx(n.p,{children:"Copies and recursively merges properties from one object into another. Supports inserting new properties starting from a specific key or index."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"array: ObjectItem<I>"})," — The target object or array."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"replacement?: ObjectItem<I> | I"})," — The source object containing new data."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"indexStart?: string"})," — The key or element value from which the insertion will begin."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"ObjectItem<I>"})," — A new object or array with the changes applied."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { splice } from '@dxtmisha/functional-basic'

const target = { first: 1, last: 3 }
const source = { second: 2 }

// Simple insertion
console.log(splice(target, source)) // { first: 1, last: 3, second: 2 }

// Insertion after a specific key
console.log(splice(target, source, 'first')) // { first: 1, second: 2, last: 3 }
`})})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default};
