import{j as e}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(c){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...c.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/escapeExp - Thoát các ký tự đặc biệt trong RegExp"}),`
`,e.jsx(n.h1,{id:"escapeexp",children:e.jsx(n.code,{children:"escapeExp"})}),`
`,e.jsxs(n.p,{children:['Tiện ích thực hiện "thoát" (escape) tất cả các ký tự đặc biệt của biểu thức chính quy trong một chuỗi (',e.jsx(n.code,{children:"."})," ",e.jsx(n.code,{children:"*"})," ",e.jsx(n.code,{children:"+"})," ",e.jsx(n.code,{children:"?"})," ",e.jsx(n.code,{children:"^"})," ",e.jsx(n.code,{children:"$"})," ",e.jsx(n.code,{children:"{"})," ",e.jsx(n.code,{children:"}"})," ",e.jsx(n.code,{children:"("})," ",e.jsx(n.code,{children:")"})," ",e.jsx(n.code,{children:"|"})," ",e.jsx(n.code,{children:"["})," ",e.jsx(n.code,{children:"]"})," ",e.jsx(n.code,{children:"\\"})," ",e.jsx(n.code,{children:"/"}),"), để chuỗi đó có thể được sử dụng an toàn bên trong ",e.jsx(n.code,{children:"RegExp"}),"."]}),`
`,e.jsx(n.p,{children:"Hữu ích khi chuỗi đến từ người dùng hoặc nguồn bên ngoài và có thể chứa các ký tự mang ý nghĩa đặc biệt trong biểu thức chính quy."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Tham số:"})}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"value: string"})," — Chuỗi cần escape."]}),`
`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Trả về:"}),`
`,e.jsx(n.code,{children:"string"})," — Chuỗi đã được escape tất cả các ký tự đặc biệt, an toàn để dùng trong ",e.jsx(n.code,{children:"RegExp"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`import { escapeExp } from '@dxtmisha/functional-basic'

// Escape các ký tự đặc biệt
console.log(escapeExp('user.name[0]')) // 'user\\\\.name\\\\[0\\\\]'
console.log(escapeExp('price $10.00')) // 'price \\\\$10\\\\.00'

// Sử dụng an toàn trong RegExp
const regex = new RegExp(escapeExp('user.name[0]'))
regex.test('user.name[0]') // true
regex.test('userXname0')   // false
`})})]})}function a(c={}){const{wrapper:n}={...t(),...c.components};return n?e.jsx(n,{...c,children:e.jsx(s,{...c})}):s(c)}export{a as default};
