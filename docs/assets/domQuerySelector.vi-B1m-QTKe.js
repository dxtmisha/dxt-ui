import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/domQuerySelector - Chọn phần tử DOM"}),`
`,n.jsx(e.h1,{id:"domqueryselector",children:n.jsx(e.code,{children:"domQuerySelector"})}),`
`,n.jsx(e.p,{children:"Tìm và trả về phần tử HTML đầu tiên khớp với bộ chọn (selector) CSS được chỉ định."}),`
`,n.jsxs(e.p,{children:["Hàm kiểm tra sự hiện diện của môi trường trình duyệt (DOM) bằng ",n.jsx(e.code,{children:"isDomRuntime()"}),". Nếu mã đang chạy trên máy chủ (SSR) hoặc DOM không khả dụng, hàm sẽ trả về ",n.jsx(e.code,{children:"undefined"})," một cách an toàn."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selectors: string"})," — Chuỗi chứa một hoặc nhiều bộ chọn CSS để tìm kiếm."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"E | undefined"})," — Phần tử đầu tiên được tìm thấy, hoặc ",n.jsx(e.code,{children:"undefined"})," nếu không có phần tử nào khớp hoặc DOM không khả dụng."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { domQuerySelector } from '@dxtmisha/functional-basic'

// Tìm theo class
const btn = domQuerySelector('.submit-button')

// Tìm theo ID
const header = domQuerySelector('#main-header')

if (btn) {
  btn.textContent = 'Gửi'
}
`})})]})}function u(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{u as default};
