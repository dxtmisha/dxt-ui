import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(e){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/en/functional-basic/Functions/inArray - Check if value is in array"}),`
`,n.jsx(r.h1,{id:"inarray",children:n.jsx(r.code,{children:"inArray"})}),`
`,n.jsx(r.p,{children:"Checks if the value is in the current array."}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Parameters:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"array: T[]"})," — array for checking."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"value: T"})," — value to be checked."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Returns:"}),`
`,n.jsx(r.code,{children:"boolean"})," — ",n.jsx(r.code,{children:"true"})," if the value is in the array, otherwise ",n.jsx(r.code,{children:"false"}),"."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { inArray } from '@dxtmisha/functional-basic'

const array = [1, 2, 3]
console.log(inArray(array, 2)) // true
console.log(inArray(array, 4)) // false
`})})]})}function x(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{x as default};
