import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(t){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Functions/uniqueArray - Loại bỏ các phần tử trùng lặp khỏi mảng"}),`
`,n.jsx(r.h1,{id:"uniquearray",children:n.jsx(r.code,{children:"uniqueArray"})}),`
`,n.jsx(r.p,{children:"Tạo một mảng mới chỉ chứa các phần tử duy nhất từ mảng gốc."}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Tham số:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"value: T[]"})," — Mảng đầu vào."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Trả về:"}),`
`,n.jsx(r.code,{children:"T[]"})," — Một mảng mới không chứa dữ liệu trùng lặp."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { uniqueArray } from '@dxtmisha/functional-basic'

const list = [1, 2, 2, 3, 1]
console.log(uniqueArray(list)) // [1, 2, 3]
`})})]})}function d(t={}){const{wrapper:r}={...i(),...t.components};return r?n.jsx(r,{...t,children:n.jsx(e,{...t})}):e(t)}export{d as default};
