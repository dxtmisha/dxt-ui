import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function o(t){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/getObjectNoUndefined - Remove properties with an exception value"}),`
`,e.jsx(n.h1,{id:"getobjectnoundefined",children:e.jsx(n.code,{children:"getObjectNoUndefined"})}),`
`,e.jsxs(n.p,{children:["Creates and returns a new object containing only the properties from the source object or array whose values are ",e.jsx(n.strong,{children:"not strictly equal"})," to the exception value. By default, the exception value is ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`,e.jsx(n.p,{children:"This function is useful for cleaning up data before sending it to a server or for object normalization. When an array is passed, its indices will be converted into string keys in the resulting object."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Parameters:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"data: T"})," — The source object or array (where ",e.jsx(n.code,{children:"T extends Record<string | number, any>"}),")."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"exception: any"})," — The value used as criteria for removal. Defaults to ",e.jsx(n.code,{children:"undefined"}),"."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Returns:"}),`
`,e.jsx(n.code,{children:"T"})," — A new object devoid of properties containing the specified exception value."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { getObjectNoUndefined } from '@dxtmisha/functional-basic'

const user = {
  name: 'John',
  age: 25,
  description: undefined, // Will be removed automatically (by default)
  status: 'guest'
}

console.log(getObjectNoUndefined(user)) 
// { name: 'John', age: 25, status: 'guest' }

// Remove all properties mapped to the value 'guest'
console.log(getObjectNoUndefined(user, 'guest'))
// { name: 'John', age: 25, description: undefined }
`})})]})}function h(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{h as default};
