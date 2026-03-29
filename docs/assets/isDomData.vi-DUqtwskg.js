import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isDomData - Xác minh môi trường URL dữ liệu`}),`
`,(0,c.jsx)(n.h1,{id:`isdomdata`,children:(0,c.jsx)(n.code,{children:`isDomData`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một tiện ích đơn giản thực hiện công việc xác minh xem bối cảnh thực thi mã hiện thời có được hoạt động trên một đường dẫn (`,(0,c.jsx)(n.code,{children:`location.href`}),`) gắn theo tiền tố `,(0,c.jsx)(n.code,{children:`data:`}),` hay không. Hàm này thực sự hữu ích nhằm cô lập các khung lập trình có sử dụng luồng dữ liệu liên quan đến mã inline qua data URI hoặc trên các khu vực hộp cát (sandbox) riêng biệt như `,(0,c.jsx)(n.code,{children:`iframe`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Tham số:`}),`
Hàm này không tiếp nhận bất kỳ đối số nào.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Trả về `,(0,c.jsx)(n.code,{children:`true`}),` nếu nguồn dẫu nối URL toàn cục của tài liệu (document) bắt đầu bằng nhãn `,(0,c.jsx)(n.code,{children:`data:`}),`, và lấy giá trị `,(0,c.jsx)(n.code,{children:`false`}),` đối với những trường hợp khác.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isDomData } from '@dxtmisha/functional-basic'

// Nếu mã thực thi độc lập trên trang thuần 'https://example.com'
console.log(isDomData()) // false

// Nếu mã phân mảnh trên khối đóng gói 'data:text/html,...'
console.log(isDomData()) // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};