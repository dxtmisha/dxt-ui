import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as r}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/domQuerySelectorAll - Chọn các phần tử DOM"}),`
`,n.jsx(t.h1,{id:"domqueryselectorall",children:n.jsx(t.code,{children:"domQuerySelectorAll"})}),`
`,n.jsxs(t.p,{children:["Tìm và trả về một danh sách tất cả các phần tử HTML khớp với bộ chọn CSS được chỉ định. Kết quả trả về là một ",n.jsx(t.code,{children:"NodeList"})," tĩnh (không tự động cập nhật)."]}),`
`,n.jsxs(t.p,{children:["Hàm kiểm tra sự tồn tại của môi trường trình duyệt (DOM) thông qua ",n.jsx(t.code,{children:"isDomRuntime()"}),". Nếu được thực thi trên máy chủ hoặc môi trường không có DOM, hàm sẽ trả về ",n.jsx(t.code,{children:"undefined"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"selectors: string"})," — Một chuỗi chứa một hoặc nhiều bộ chọn để tìm kiếm."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"NodeListOf<E> | undefined"})," — Một tập hợp các phần tử khớp (có thể là một mảng rỗng nếu không tìm thấy), hoặc ",n.jsx(t.code,{children:"undefined"})," nếu không có quyền truy cập DOM."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { domQuerySelectorAll } from '@dxtmisha/functional-basic'

// Tìm tất cả phần tử có class nhất định
const items = domQuerySelectorAll('.list-item')

if (items) {
  items.forEach(item => {
    item.classList.add('active')
  })
}
`})})]})}function u(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{u as default};
