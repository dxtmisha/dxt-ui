import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as a}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(e){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"@dxtmisha/en/functional-basic/Functions/toArray - Convert value to array"}),`
`,n.jsx(r.h1,{id:"toarray",children:n.jsx(r.code,{children:"toArray"})}),`
`,n.jsx(r.p,{children:"Converts a value to an array. If the value is already an array, it returns it as is. Otherwise, it wraps the value in an array."}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Parameters:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"value: T"})," — The value to be converted into an array."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Returns:"}),`
`,n.jsx(r.code,{children:"T[]"})," — An array containing the provided value."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { toArray } from '@dxtmisha/functional-basic'

console.log(toArray([1, 2, 3])) // [1, 2, 3]
console.log(toArray(1)) // [1]
`})})]})}function u(e={}){const{wrapper:r}={...o(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(t,{...e})}):t(e)}export{u as default};
