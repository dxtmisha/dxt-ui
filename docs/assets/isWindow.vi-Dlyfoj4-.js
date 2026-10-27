import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isWindow - Kiểm tra thực thể Window`}),`
`,(0,c.jsx)(t.h1,{id:`iswindow`,children:(0,c.jsx)(t.code,{children:`isWindow`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem phần tử hoặc giá trị được truyền vào có phải là đối tượng `,(0,c.jsx)(t.code,{children:`window`}),` toàn cục của trình duyệt hay không.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Trước tiên hàm kiểm tra qua `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),` để đảm bảo mã đang chạy trong môi trường DOM (ngăn ngừa lỗi trong quá trình Server-Side Rendering - SSR), sau đó so sánh `,(0,c.jsx)(t.code,{children:`element === window`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: E`}),` — Phần tử hoặc giá trị cần kiểm tra.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`element is Extract<E, Window>`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu đang chạy trong môi trường trình duyệt và `,(0,c.jsx)(t.code,{children:`element`}),` bằng nghiêm ngặt với `,(0,c.jsx)(t.code,{children:`window`}),`, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`. Đóng vai trò là bộ bảo vệ kiểu (type guard) trong TypeScript, thu hẹp `,(0,c.jsx)(t.code,{children:`E`}),` thành `,(0,c.jsx)(t.code,{children:`Extract<E, Window>`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isWindow } from '@dxtmisha/functional-basic'

// Đối tượng window hợp lệ
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Các nút DOM và giá trị khác
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};