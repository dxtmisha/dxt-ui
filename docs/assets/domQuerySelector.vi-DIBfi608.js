import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/domQuerySelector - Chọn phần tử DOM`}),`
`,(0,c.jsx)(t.h1,{id:`domqueryselector`,children:(0,c.jsx)(t.code,{children:`domQuerySelector`})}),`
`,(0,c.jsx)(t.p,{children:`Tìm và trả về phần tử HTML đầu tiên khớp với bộ chọn (selector) CSS được chỉ định.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm kiểm tra sự hiện diện của môi trường trình duyệt (DOM) bằng `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),`. Nếu mã đang chạy trên máy chủ (SSR) hoặc DOM không khả dụng, hàm sẽ trả về `,(0,c.jsx)(t.code,{children:`undefined`}),` một cách an toàn.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selectors: string`}),` — Chuỗi chứa một hoặc nhiều bộ chọn CSS để tìm kiếm.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`E | undefined`}),` — Phần tử đầu tiên được tìm thấy, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu không có phần tử nào khớp hoặc DOM không khả dụng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { domQuerySelector } from '@dxtmisha/functional-basic'

// Tìm theo class
const btn = domQuerySelector('.submit-button')

// Tìm theo ID
const header = domQuerySelector('#main-header')

if (btn) {
  btn.textContent = 'Gửi'
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};