import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/domQuerySelector - Chọn phần tử DOM`}),`
`,(0,c.jsx)(n.h1,{id:`domqueryselector`,children:(0,c.jsx)(n.code,{children:`domQuerySelector`})}),`
`,(0,c.jsx)(n.p,{children:`Tìm và trả về phần tử HTML đầu tiên khớp với bộ chọn (selector) CSS được chỉ định.`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm kiểm tra sự hiện diện của môi trường trình duyệt (DOM) bằng `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),`. Nếu mã đang chạy trên máy chủ (SSR) hoặc DOM không khả dụng, hàm sẽ trả về `,(0,c.jsx)(n.code,{children:`undefined`}),` một cách an toàn.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`selectors: string`}),` — Chuỗi chứa một hoặc nhiều bộ chọn CSS để tìm kiếm.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`E | undefined`}),` — Phần tử đầu tiên được tìm thấy, hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu không có phần tử nào khớp hoặc DOM không khả dụng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { domQuerySelector } from '@dxtmisha/functional-basic'

// Tìm theo class
const btn = domQuerySelector('.submit-button')

// Tìm theo ID
const header = domQuerySelector('#main-header')

if (btn) {
  btn.textContent = 'Gửi'
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};