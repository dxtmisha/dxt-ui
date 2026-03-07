import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(e){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Functions/isArray - Kiểm tra xem giá trị có phải là mảng không"}),`
`,n.jsx(r.h1,{id:"isarray",children:n.jsx(r.code,{children:"isArray"})}),`
`,n.jsx(r.p,{children:"Kiểm tra xem các giá trị có phải là mảng hay không."}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Tham số:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"value: T"})," — giá trị đầu vào."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Trả về:"}),`
`,n.jsx(r.code,{children:"boolean"})," — ",n.jsx(r.code,{children:"true"})," nếu giá trị là mảng, ngược lại là ",n.jsx(r.code,{children:"false"}),"."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { isArray } from '@dxtmisha/functional-basic'

console.log(isArray([1, 2, 3])) // true
console.log(isArray({})) // false
`})})]})}function m(e={}){const{wrapper:r}={...s(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{m as default};
