import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/toDate - Chuyển đổi giá trị sang đối tượng Date`}),`
`,(0,c.jsx)(t.h1,{id:`todate`,children:(0,c.jsx)(t.code,{children:`toDate`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chuyển đổi giá trị đầu vào (ngày, số hoặc chuỗi) thành đối tượng `,(0,c.jsx)(t.code,{children:`Date`}),`. Hỗ trợ nhiều định dạng chuỗi khác nhau, bao gồm các chuỗi giống ISO không có dấu phân cách, cũng như tự động thay thế múi giờ.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: T`}),` — Giá trị đầu vào (đối tượng `,(0,c.jsx)(t.code,{children:`Date`}),`, dấu thời gian tính bằng mili giây hoặc chuỗi ngày tháng).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Date`}),` — Đối tượng ngày tháng kết quả. Nếu giá trị không được cung cấp hoặc là `,(0,c.jsx)(t.code,{children:`null`}),`, ngày hiện tại sẽ được trả về.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toDate } from '@dxtmisha/functional-basic'

console.log(toDate('20231027')) // '2023-10-27T00:00:00.000Z'
console.log(toDate(1672531200000)) // '2023-01-01T00:00:00.000Z'
console.log(toDate('12:00')) // '2000-01-01T12:00:00.000Z'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};