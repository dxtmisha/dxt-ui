import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(e){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/inArray - Kiểm tra giá trị có trong mảng"}),`
`,n.jsx(r.h1,{id:"inarray",children:n.jsx(r.code,{children:"inArray"})}),`
`,n.jsx(r.p,{children:"Kiểm tra xem giá trị có trong mảng hiện tại hay không."}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Tham số:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"array: T[]"})," — mảng để kiểm tra."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"value: T"})," — giá trị cần kiểm tra."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Trả về:"}),`
`,n.jsx(r.code,{children:"boolean"})," — ",n.jsx(r.code,{children:"true"})," nếu giá trị có trong mảng, ngược lại là ",n.jsx(r.code,{children:"false"}),"."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { inArray } from '@dxtmisha/functional-basic'

const array = [1, 2, 3]
console.log(inArray(array, 2)) // true
console.log(inArray(array, 4)) // false
`})})]})}function h(e={}){const{wrapper:r}={...t(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i(e)}export{h as default};
