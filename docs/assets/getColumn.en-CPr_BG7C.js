import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/en/functional-basic/Functions/getColumn - Extract a data column"}),`
`,n.jsx(e.h1,{id:"getcolumn",children:n.jsx(e.code,{children:"getColumn"})}),`
`,n.jsxs(e.p,{children:["A utility that iterates over an array of objects and returns a new array consisting only of the values from a specific key (property) of each object. Essentially, this is a strongly-typed equivalent of ",n.jsx(e.code,{children:"Array.prototype.map(item => item[key])"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Parameters:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"array: ObjectOrArray<T>"})," — An array (or a dictionary object) containing items of type ",n.jsx(e.code,{children:"T"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"column: K"})," — The key (property name) whose values you wish to extract."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns:"}),`
`,n.jsx(e.code,{children:"(T[K] | undefined)[]"})," — An array containing the values of the requested ",n.jsx(e.code,{children:"column"}),". If the property is missing in some items, ",n.jsx(e.code,{children:"undefined"})," will be present in those positions."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getColumn } from '@dxtmisha/functional-basic'

const users = [
  { id: 1, name: 'Anna', role: 'admin' },
  { id: 2, name: 'Ivan', role: 'user' },
  { id: 3, name: 'Maria', role: 'user' }
]

const names = getColumn(users, 'name')
console.log(names) // ['Anna', 'Ivan', 'Maria']

const ids = getColumn(users, 'id')
console.log(ids) // [1, 2, 3]
`})})]})}function u(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(s,{...t})}):s(t)}export{u as default};
