import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/toDate - Chuyển đổi giá trị sang đối tượng Date`}),`
`,(0,c.jsx)(n.h1,{id:`todate`,children:(0,c.jsx)(n.code,{children:`toDate`})}),`
`,(0,c.jsxs)(n.p,{children:[`Chuyển đổi giá trị đầu vào (ngày, số hoặc chuỗi) thành đối tượng `,(0,c.jsx)(n.code,{children:`Date`}),`. Hỗ trợ nhiều định dạng chuỗi khác nhau, bao gồm các chuỗi giống ISO không có dấu phân cách, cũng như tự động thay thế múi giờ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value?: T`}),` — Giá trị đầu vào (đối tượng `,(0,c.jsx)(n.code,{children:`Date`}),`, dấu thời gian tính bằng mili giây hoặc chuỗi ngày tháng).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Date`}),` — Đối tượng ngày tháng kết quả. Nếu giá trị không được cung cấp hoặc là `,(0,c.jsx)(n.code,{children:`null`}),`, ngày hiện tại sẽ được trả về.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toDate } from '@dxtmisha/functional-basic'

console.log(toDate('20231027')) // '2023-10-27T00:00:00.000Z'
console.log(toDate(1672531200000)) // '2023-01-01T00:00:00.000Z'
console.log(toDate('12:00')) // '2000-01-01T12:00:00.000Z'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};