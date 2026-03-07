import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function r(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"@dxtmisha/en/functional-basic/Functions/getObjectByKeys - Object by key list"}),`
`,e.jsx(n.h1,{id:"getobjectbykeys",children:e.jsx(n.code,{children:"getObjectByKeys"})}),`
`,e.jsxs(n.p,{children:["Creates and returns a new object containing only the properties corresponding to the specified keys from the source object. Properties that do not exist or have a value strictly equal to ",e.jsx(n.code,{children:"undefined"})," are ignored during copying."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: Record<string, any>"})," — The source object containing the initial data."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"keys: string[]"})," — An array of string keys to extract from the source."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"Record<string, any>"})," — A new object containing only the successfully extracted properties. If a property is ",e.jsx(n.code,{children:"undefined"})," in the source, it will not be included in the result."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getObjectByKeys } from '@dxtmisha/functional-basic'

const user = {
  id: 1,
  name: 'Ivan',
  role: 'admin',
  age: undefined, // undefined values are skipped
  active: true
}

const result = getObjectByKeys(user, ['id', 'name', 'age', 'token'])
console.log(result) // { id: 1, name: 'Ivan' }
`})})]})}function h(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{h as default};
