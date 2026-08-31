import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/toBinds - Hợp nhất nhiều đối tượng thuộc tính`}),`
`,(0,c.jsx)(t.h1,{id:`tobinds`,children:(0,c.jsx)(t.code,{children:`toBinds`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hợp nhất tuần tự nhiều đối tượng thuộc tính bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`toBind`}),`. Hàm này hữu ích để kết hợp nhiều lớp thuộc tính (ví dụ: mặc định, props của thành phần và các modifier dựa trên trạng thái) trong khi đảm bảo các thuộc tính `,(0,c.jsx)(t.code,{children:`class`}),` và `,(0,c.jsx)(t.code,{children:`style`}),` được kết hợp chính xác thay vì bị ghi đè.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`...values: (ItemList | undefined)[]`}),` — Danh sách các đối tượng thuộc tính cần hợp nhất.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`ConstrBind<R>`}),` — Đối tượng thuộc tính đã hợp nhất cuối cùng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toBinds } from '@dxtmisha/functional'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};