import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getKey - Lấy mã phím vừa nhấn`}),`
`,(0,c.jsx)(n.h1,{id:`getkey`,children:(0,c.jsx)(n.code,{children:`getKey`})}),`
`,(0,c.jsxs)(n.p,{children:[`Trả về mã số hoặc tên của phím vừa được bấm dựa trên đối tượng sự kiện `,(0,c.jsx)(n.code,{children:`KeyboardEvent`}),`. Tiện ích này chuẩn hóa cách tìm được định danh của phím nhờ vào cách truy xuất thuộc tính theo thứ tự ưu tiên an toàn như sau: `,(0,c.jsx)(n.code,{children:`event.key`}),` → `,(0,c.jsx)(n.code,{children:`event.code`}),` → chuyển `,(0,c.jsx)(n.code,{children:`event.keyCode`}),` thành chuỗi. Nếu tất cả đều vắng mặt, trả về `,(0,c.jsx)(n.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: KeyboardEvent`}),` — Đối tượng sự kiện của bàn phím (được kích hoạt từ sự kiện `,(0,c.jsx)(n.code,{children:`keydown`}),`, `,(0,c.jsx)(n.code,{children:`keyup`}),` hoặc `,(0,c.jsx)(n.code,{children:`keypress`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Mã hoặc tên của phím bấm vừa bị kích bằng số hay chuỗi (ví dụ: `,(0,c.jsx)(n.code,{children:`'Enter'`}),`, `,(0,c.jsx)(n.code,{children:`'Escape'`}),`, `,(0,c.jsx)(n.code,{children:`'A'`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getKey } from '@dxtmisha/functional-basic'

document.addEventListener('keydown', (e) => {
  const keyName = getKey(e)
  
  if (keyName === 'Escape') {
    console.log('Người dùng đã bấm nút thoái (Escape)! Chúng ta sẽ tắt menu.')
  }
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};