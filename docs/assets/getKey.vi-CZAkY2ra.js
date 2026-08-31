import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getKey - Lấy mã phím vừa nhấn`}),`
`,(0,c.jsx)(t.h1,{id:`getkey`,children:(0,c.jsx)(t.code,{children:`getKey`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về mã số hoặc tên của phím vừa được bấm dựa trên đối tượng sự kiện `,(0,c.jsx)(t.code,{children:`KeyboardEvent`}),`. Tiện ích này chuẩn hóa cách tìm được định danh của phím nhờ vào cách truy xuất thuộc tính theo thứ tự ưu tiên an toàn như sau: `,(0,c.jsx)(t.code,{children:`event.key`}),` → `,(0,c.jsx)(t.code,{children:`event.code`}),` → chuyển `,(0,c.jsx)(t.code,{children:`event.keyCode`}),` thành chuỗi. Nếu tất cả đều vắng mặt, trả về `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: KeyboardEvent`}),` — Đối tượng sự kiện của bàn phím (được kích hoạt từ sự kiện `,(0,c.jsx)(t.code,{children:`keydown`}),`, `,(0,c.jsx)(t.code,{children:`keyup`}),` hoặc `,(0,c.jsx)(t.code,{children:`keypress`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Mã hoặc tên của phím bấm vừa bị kích bằng số hay chuỗi (ví dụ: `,(0,c.jsx)(t.code,{children:`'Enter'`}),`, `,(0,c.jsx)(t.code,{children:`'Escape'`}),`, `,(0,c.jsx)(t.code,{children:`'A'`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getKey } from '@dxtmisha/functional-basic'

document.addEventListener('keydown', (e) => {
  const keyName = getKey(e)
  
  if (keyName === 'Escape') {
    console.log('Người dùng đã bấm nút thoái (Escape)! Chúng ta sẽ tắt menu.')
  }
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};