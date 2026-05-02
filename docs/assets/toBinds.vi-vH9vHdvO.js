import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Functions/toBinds - Hợp nhất nhiều đối tượng thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`tobinds`,children:(0,c.jsx)(n.code,{children:`toBinds`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hợp nhất tuần tự nhiều đối tượng thuộc tính bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`toBind`}),`. Hàm này hữu ích để kết hợp nhiều lớp thuộc tính (ví dụ: mặc định, props của thành phần và các modifier dựa trên trạng thái) trong khi đảm bảo các thuộc tính `,(0,c.jsx)(n.code,{children:`class`}),` và `,(0,c.jsx)(n.code,{children:`style`}),` được kết hợp chính xác thay vì bị ghi đè.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`...values: (ItemList | undefined)[]`}),` — Danh sách các đối tượng thuộc tính cần hợp nhất.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`ConstrBind<R>`}),` — Đối tượng thuộc tính đã hợp nhất cuối cùng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toBinds } from '@dxtmisha/functional'

const defaults = { class: 'btn', id: 'gen-id' }
const props = { class: 'btn--primary', title: 'Nhấp vào tôi' }
const state = { class: 'is-loading', style: { opacity: 0.5 } }

const finalBind = toBinds(defaults, props, state)
/* 
Kết quả: { 
  id: 'gen-id', 
  title: 'Nhấp vào tôi',
  class: [['btn', 'btn--primary'], 'is-loading'], 
  style: { opacity: 0.5 } 
}
*/
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};