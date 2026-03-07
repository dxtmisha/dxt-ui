import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as t}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function o(e){const i={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Functions/removeCommonPrefix - Xóa tiền tố chung"}),`
`,n.jsx(i.h1,{id:"removecommonprefix",children:n.jsx(i.code,{children:"removeCommonPrefix"})}),`
`,n.jsx(i.p,{children:"Xóa tiền tố chung khỏi phần đầu của chuỗi chính. Nếu chuỗi chính bắt đầu bằng tiền tố được chỉ định, hàm sẽ cắt bỏ nó và trả về chuỗi đã được loại bỏ khoảng trắng dư thừa ở hai đầu."}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"mainStr: string"})," — Chuỗi chính."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"prefix: string"})," — Chuỗi tiền tố cần xóa."]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Trả về:"}),`
`,n.jsx(i.code,{children:"string"})," — Một chuỗi mới không có tiền tố và đã được loại bỏ khoảng trắng thừa."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { removeCommonPrefix } from '@dxtmisha/functional-basic'

console.log(removeCommonPrefix('Xin chào, thế giới!', 'Xin chào, ')) // 'thế giới!'
console.log(removeCommonPrefix('user_name', 'user_')) // 'name'
`})})]})}function a(e={}){const{wrapper:i}={...r(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(o,{...e})}):o(e)}export{a as default};
