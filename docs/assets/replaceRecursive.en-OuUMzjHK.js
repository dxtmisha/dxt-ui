import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function n(t){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"@dxtmisha/en/functional-basic/Functions/replaceRecursive - Recursive merge of objects or arrays"}),`
`,e.jsx(r.h1,{id:"replacerecursive",children:e.jsx(r.code,{children:"replaceRecursive"})}),`
`,e.jsxs(r.p,{children:["Performs a deep (recursive) merge of the target object or array with data from a replacement object/array. If the ",e.jsx(r.code,{children:"isMerge"})," parameter is enabled, arrays are concatenated with duplicates removed; otherwise, arrays from the replacement overwrite the original ones."]}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Parameters:"})}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"array: ObjectItem<I>"})," — The target array or object whose elements will be replaced/merged."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"replacement?: ObjectOrArray<I>"})," — Arrays or objects from which elements will be extracted for replacement."]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.code,{children:"isMerge: boolean"})," — Flag to merge arrays of the same name (defaults to ",e.jsx(r.code,{children:"true"}),"). If ",e.jsx(r.code,{children:"false"}),", elements are simply overwritten."]}),`
`]}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Returns:"}),`
`,e.jsx(r.code,{children:"ObjectItem<I>"})," — A new object or array that is the result of the merge. The original object is not mutated."]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-typescript",children:`import { replaceRecursive } from '@dxtmisha/functional-basic'

const target = { a: [1, 2], b: { x: 1 } }
const source = { a: [2, 3], b: { y: 2 } }

console.log(replaceRecursive(target, source)) 
// { a: [1, 2, 3], b: { x: 1, y: 2 } }

console.log(replaceRecursive(target, source, false)) 
// { a: [2, 3], b: { x: 1, y: 2 } }
`})})]})}function h(t={}){const{wrapper:r}={...s(),...t.components};return r?e.jsx(r,{...t,children:e.jsx(n,{...t})}):n(t)}export{h as default};
