import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(e){const o={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/en/functional-basic/Functions/transformation - Transforming a string into a data type"}),`
`,n.jsx(o.h1,{id:"transformation",children:n.jsx(o.code,{children:"transformation"})}),`
`,n.jsxs(o.p,{children:["Transforms a string value into its corresponding data type (boolean, numeric, object, or ",n.jsx(o.code,{children:"null"}),"/",n.jsx(o.code,{children:"undefined"}),"). If the ",n.jsx(o.code,{children:"isFunction"})," flag is enabled, it checks for a function with that name in the global ",n.jsx(o.code,{children:"window"})," object."]}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"Parameters:"})}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"value: any"})," — The value to transform."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"isFunction: boolean"})," — Flag to search for a function in ",n.jsx(o.code,{children:"window"})," (defaults to ",n.jsx(o.code,{children:"false"}),")."]}),`
`]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"Returns:"}),`
`,n.jsx(o.code,{children:"any"})," — The transformed value."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`import { transformation } from '@dxtmisha/functional-basic'

console.log(transformation('true')) // true
console.log(transformation('12.5')) // 12.5
console.log(transformation('{"a":1}')) // { a: 1 }
console.log(transformation('null')) // null
`})})]})}function m(e={}){const{wrapper:o}={...r(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{m as default};
