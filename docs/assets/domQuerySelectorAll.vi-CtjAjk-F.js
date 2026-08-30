import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/domQuerySelectorAll - Chọn các phần tử DOM`}),`
`,(0,c.jsx)(t.h1,{id:`domqueryselectorall`,children:(0,c.jsx)(t.code,{children:`domQuerySelectorAll`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tìm và trả về một danh sách tất cả các phần tử HTML khớp với bộ chọn CSS được chỉ định. Kết quả trả về là một `,(0,c.jsx)(t.code,{children:`NodeList`}),` tĩnh (không tự động cập nhật).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm kiểm tra sự tồn tại của môi trường trình duyệt (DOM) thông qua `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),`. Nếu được thực thi trên máy chủ hoặc môi trường không có DOM, hàm sẽ trả về `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectors: string`}),` — Một chuỗi chứa một hoặc nhiều bộ chọn để tìm kiếm.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`NodeListOf<E> | undefined`}),` — Một tập hợp các phần tử khớp (có thể là một mảng rỗng nếu không tìm thấy), hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu không có quyền truy cập DOM.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { domQuerySelectorAll } from '@dxtmisha/functional-basic'

// Tìm tất cả phần tử có class nhất định
const items = domQuerySelectorAll('.list-item')

if (items) {
  items.forEach(item => {
    item.classList.add('active')
  })
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};