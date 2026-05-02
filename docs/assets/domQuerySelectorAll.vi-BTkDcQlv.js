import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/domQuerySelectorAll - Chọn các phần tử DOM`}),`
`,(0,c.jsx)(n.h1,{id:`domqueryselectorall`,children:(0,c.jsx)(n.code,{children:`domQuerySelectorAll`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tìm và trả về một danh sách tất cả các phần tử HTML khớp với bộ chọn CSS được chỉ định. Kết quả trả về là một `,(0,c.jsx)(n.code,{children:`NodeList`}),` tĩnh (không tự động cập nhật).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm kiểm tra sự tồn tại của môi trường trình duyệt (DOM) thông qua `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),`. Nếu được thực thi trên máy chủ hoặc môi trường không có DOM, hàm sẽ trả về `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectors: string`}),` — Một chuỗi chứa một hoặc nhiều bộ chọn để tìm kiếm.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`NodeListOf<E> | undefined`}),` — Một tập hợp các phần tử khớp (có thể là một mảng rỗng nếu không tìm thấy), hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không có quyền truy cập DOM.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { domQuerySelectorAll } from '@dxtmisha/functional-basic'

// Tìm tất cả phần tử có class nhất định
const items = domQuerySelectorAll('.list-item')

if (items) {
  items.forEach(item => {
    item.classList.add('active')
  })
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};