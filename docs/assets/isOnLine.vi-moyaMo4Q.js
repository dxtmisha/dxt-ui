import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/isOnLine - Kiểm tra kết nối mạng`}),`
`,(0,c.jsx)(n.h1,{id:`isonline`,children:(0,c.jsx)(n.code,{children:`isOnLine`})}),`
`,(0,c.jsx)(n.p,{children:`Một công cụ tiện ích đơn giản để xác định trạng thái kết nối mạng hiện tại của thiết bị.`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này kiểm tra thuộc tính `,(0,c.jsx)(n.code,{children:`navigator.onLine`}),`. Nếu môi trường không phải là trình duyệt (ví dụ: trong quá trình Server-Side Rendering - SSR), nó sẽ trả về `,(0,c.jsx)(n.code,{children:`true`}),` theo mặc định để đảm bảo rằng các logic phụ thuộc vào mạng không bị chặn sớm.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu thiết bị đang trực tuyến hoặc nếu môi trường không phải là trình duyệt. Trả về `,(0,c.jsx)(n.code,{children:`false`}),` nếu thiết bị đang ngoại tuyến.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isOnLine } from '@dxtmisha/functional-basic'

if (isOnLine()) {
  console.log('Thiết bị đang trực tuyến!')
} else {
  console.log('Thiết bị đang ngoại tuyến.')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};