import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/getElement - Truy xuất phần tử HTML"}),`
`,n.jsx(e.h1,{id:"getelement",children:n.jsx(e.code,{children:"getElement"})}),`
`,n.jsxs(e.p,{children:["Trả về một ",n.jsx(e.code,{children:"Element"})," (nút HTML) từ tài liệu. Tiện ích này nhận vào một chuỗi bộ chọn CSS, đối tượng ",n.jsx(e.code,{children:"Window"})," hoặc một ",n.jsx(e.code,{children:"Element"})," có sẵn và trả về nút DOM tương ứng nếu được thực thi trong môi trường trình duyệt. Trong các môi trường không có DOM (ví dụ: SSR), nó trả về ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element?: ElementOrString<E>"})," — Bộ chọn CSS (ví dụ: ",n.jsx(e.code,{children:"'.btn'"}),"), đối tượng ",n.jsx(e.code,{children:"Window"}),", hoặc một nút ",n.jsx(e.code,{children:"Element"})," đã có."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"R | undefined"})," — Nút DOM được tìm thấy hoặc được cung cấp, hoặc ",n.jsx(e.code,{children:"document.body"})," nếu truyền vào là ",n.jsx(e.code,{children:"Window"}),". Trả về ",n.jsx(e.code,{children:"undefined"})," nếu không tìm thấy phần tử hoặc môi trường DOM không khả dụng."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getElement } from '@dxtmisha/functional-basic'

// Tìm kiếm theo bộ chọn CSS
const btn = getElement('.submit-btn')

// Truyền vào một phần tử đã có sẵn
const sameBtn = getElement(btn)

// Truyền vào Window sẽ trả về document.body
const body = getElement(window)
`})})]})}function x(t={}){const{wrapper:e}={...o(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{x as default};
