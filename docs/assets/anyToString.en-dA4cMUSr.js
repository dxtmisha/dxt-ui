import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/anyToString - Conversion of a value to a string"}),`
`,n.jsx(t.h1,{id:"anytostring",children:n.jsx(t.code,{children:"anyToString"})}),`
`,n.jsx(t.p,{children:"A utility that safely converts any input data into a string type."}),`
`,n.jsx(t.p,{children:"This is useful when outputting data to the interface when the variable type (object, array, boolean, or null) is not known in advance."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Parameters:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: V"})," — Values for conversion."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Returns:"}),`
`,n.jsx(t.code,{children:"string"})," — The string representation of the provided value."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { anyToString } from '@dxtmisha/functional-basic'

console.log(anyToString(' test ')) // 'test'
console.log(anyToString([1, 2, 3])) // '1,2,3'
console.log(anyToString({ a: 1 })) // '{"a":1}'
console.log(anyToString(true)) // '1'
console.log(anyToString(false)) // '0'
console.log(anyToString(null)) // ''
`})})]})}function u(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o(e)}export{u as default};
