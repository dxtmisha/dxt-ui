import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(t){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/uint8ArrayToBase64 - Chuyển đổi Uint8Array sang Base64"}),`
`,n.jsx(r.h1,{id:"uint8arraytobase64",children:n.jsx(r.code,{children:"uint8ArrayToBase64"})}),`
`,n.jsxs(r.p,{children:["Chuyển đổi một mảng dữ liệu nhị phân ",n.jsx(r.code,{children:"Uint8Array"})," thành một chuỗi được mã hóa Base64. Hỗ trợ cả môi trường trình duyệt (thông qua ",n.jsx(r.code,{children:"btoa"}),") và môi trường Node.js (thông qua ",n.jsx(r.code,{children:"Buffer"}),")."]}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Tham số:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"bytes: Uint8Array"})," — Dữ liệu nhị phân."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Trả về:"}),`
`,n.jsx(r.code,{children:"string"})," — Chuỗi định dạng Base64."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { uint8ArrayToBase64 } from '@dxtmisha/functional-basic'

const data = new Uint8Array([72, 101, 108, 108, 111])
console.log(uint8ArrayToBase64(data)) // 'SGVsbG8='
`})})]})}function u(t={}){const{wrapper:r}={...s(),...t.components};return r?n.jsx(r,{...t,children:n.jsx(e,{...t})}):e(t)}export{u as default};
