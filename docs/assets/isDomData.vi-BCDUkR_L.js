import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isDomData - Xác minh môi trường URL dữ liệu`}),`
`,(0,c.jsx)(t.h1,{id:`isdomdata`,children:(0,c.jsx)(t.code,{children:`isDomData`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một tiện ích đơn giản thực hiện công việc xác minh xem bối cảnh thực thi mã hiện thời có được hoạt động trên một đường dẫn (`,(0,c.jsx)(t.code,{children:`location.href`}),`) gắn theo tiền tố `,(0,c.jsx)(t.code,{children:`data:`}),` hay không. Hàm này thực sự hữu ích nhằm cô lập các khung lập trình có sử dụng luồng dữ liệu liên quan đến mã inline qua data URI hoặc trên các khu vực hộp cát (sandbox) riêng biệt như `,(0,c.jsx)(t.code,{children:`iframe`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Tham số:`}),`
Hàm này không tiếp nhận bất kỳ đối số nào.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu nguồn dẫu nối URL toàn cục của tài liệu (document) bắt đầu bằng nhãn `,(0,c.jsx)(t.code,{children:`data:`}),`, và lấy giá trị `,(0,c.jsx)(t.code,{children:`false`}),` đối với những trường hợp khác.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isDomData } from '@dxtmisha/functional-basic'

// Nếu mã thực thi độc lập trên trang thuần 'https://example.com'
console.log(isDomData()) // false

// Nếu mã phân mảnh trên khối đóng gói 'data:text/html,...'
console.log(isDomData()) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};