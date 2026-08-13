import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isOnLine - Kiểm tra kết nối mạng`}),`
`,(0,c.jsx)(t.h1,{id:`isonline`,children:(0,c.jsx)(t.code,{children:`isOnLine`})}),`
`,(0,c.jsx)(t.p,{children:`Một công cụ tiện ích đơn giản để xác định trạng thái kết nối mạng hiện tại của thiết bị.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm này kiểm tra thuộc tính `,(0,c.jsx)(t.code,{children:`navigator.onLine`}),`. Nếu môi trường không phải là trình duyệt (ví dụ: trong quá trình Server-Side Rendering - SSR), nó sẽ trả về `,(0,c.jsx)(t.code,{children:`true`}),` theo mặc định để đảm bảo rằng các logic phụ thuộc vào mạng không bị chặn sớm.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu thiết bị đang trực tuyến hoặc nếu môi trường không phải là trình duyệt. Trả về `,(0,c.jsx)(t.code,{children:`false`}),` nếu thiết bị đang ngoại tuyến.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isOnLine } from '@dxtmisha/functional-basic'

if (isOnLine()) {
  console.log('Thiết bị đang trực tuyến!')
} else {
  console.log('Thiết bị đang ngoại tuyến.')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};