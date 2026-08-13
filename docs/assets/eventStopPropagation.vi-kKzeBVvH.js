import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/eventStopPropagation - Dừng lan truyền sự kiện`}),`
`,(0,c.jsx)(t.h1,{id:`eventstoppropagation`,children:(0,c.jsx)(t.code,{children:`eventStopPropagation`})}),`
`,(0,c.jsx)(t.p,{children:`Dừng việc lan truyền tiếp theo của một sự kiện trong cây DOM (giai đoạn nổi lên / bắt giữ) và hủy bỏ hành động mặc định của trình duyệt.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm này là một trình bao bọc (wrapper) tiện lợi gọi cả hai phương thức `,(0,c.jsx)(t.code,{children:`event.preventDefault()`}),` và `,(0,c.jsx)(t.code,{children:`event.stopPropagation()`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: Event`}),` — Phiên bản sự kiện DOM cần dừng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { eventStopPropagation } from '@dxtmisha/functional-basic'

const link = document.createElement('a')
link.href = 'https://example.com'
link.onclick = (e) => {
  // Sẽ hủy bỏ việc điều hướng đến liên kết và ngăn chặn cú nhấp chuột lan truyền lên các phần tử cha
  eventStopPropagation(e)
  console.log('Cú nhấp chuột bị chặn!')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};