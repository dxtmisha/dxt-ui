import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getElement - Truy xuất phần tử HTML`}),`
`,(0,c.jsx)(n.h1,{id:`getelement`,children:(0,c.jsx)(n.code,{children:`getElement`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về một `,(0,c.jsx)(n.code,{children:`Element`}),` (nút HTML) từ tài liệu. Tiện ích này nhận vào một chuỗi bộ chọn CSS, đối tượng `,(0,c.jsx)(n.code,{children:`Window`}),` hoặc một `,(0,c.jsx)(n.code,{children:`Element`}),` có sẵn và trả về nút DOM tương ứng nếu được thực thi trong môi trường trình duyệt. Trong các môi trường không có DOM (ví dụ: SSR), nó trả về `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element?: ElementOrString<E>`}),` — Bộ chọn CSS (ví dụ: `,(0,c.jsx)(n.code,{children:`'.btn'`}),`), đối tượng `,(0,c.jsx)(n.code,{children:`Window`}),`, hoặc một nút `,(0,c.jsx)(n.code,{children:`Element`}),` đã có.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`R | undefined`}),` — Nút DOM được tìm thấy hoặc được cung cấp, hoặc `,(0,c.jsx)(n.code,{children:`document.body`}),` nếu truyền vào là `,(0,c.jsx)(n.code,{children:`Window`}),`. Trả về `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không tìm thấy phần tử hoặc môi trường DOM không khả dụng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElement } from '@dxtmisha/functional-basic'

// Tìm kiếm theo bộ chọn CSS
const btn = getElement('.submit-btn')

// Truyền vào một phần tử đã có sẵn
const sameBtn = getElement(btn)

// Truyền vào Window sẽ trả về document.body
const body = getElement(window)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};