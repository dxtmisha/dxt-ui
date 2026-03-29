import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/eventStopPropagation - Dừng lan truyền sự kiện`}),`
`,(0,c.jsx)(n.h1,{id:`eventstoppropagation`,children:(0,c.jsx)(n.code,{children:`eventStopPropagation`})}),`
`,(0,c.jsx)(n.p,{children:`Dừng việc lan truyền tiếp theo của một sự kiện trong cây DOM (giai đoạn nổi lên / bắt giữ) và hủy bỏ hành động mặc định của trình duyệt.`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này là một trình bao bọc (wrapper) tiện lợi gọi cả hai phương thức `,(0,c.jsx)(n.code,{children:`event.preventDefault()`}),` và `,(0,c.jsx)(n.code,{children:`event.stopPropagation()`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: Event`}),` — Phiên bản sự kiện DOM cần dừng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { eventStopPropagation } from '@dxtmisha/functional-basic'

const link = document.createElement('a')
link.href = 'https://example.com'
link.onclick = (e) => {
  // Sẽ hủy bỏ việc điều hướng đến liên kết và ngăn chặn cú nhấp chuột lan truyền lên các phần tử cha
  eventStopPropagation(e)
  console.log('Cú nhấp chuột bị chặn!')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};