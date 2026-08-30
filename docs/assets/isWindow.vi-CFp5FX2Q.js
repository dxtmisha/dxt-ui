import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isWindow - Kiểm tra thực thể Window`}),`
`,(0,c.jsx)(t.h1,{id:`iswindow`,children:(0,c.jsx)(t.code,{children:`isWindow`})}),`
`,(0,c.jsxs)(t.p,{children:[`Loại hình hệ mã thiết kế đặc trị dành cho công cuộc xác minh trực thuộc xem biến tham số đẩy vào có đích thị nhắm trúng đối tượng bản chất chủ đề toàn cục trình duyệt `,(0,c.jsx)(t.code,{children:`window`}),` hay không.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Phác đồ sẽ đi đường vòng chạy qua quy định môi trường `,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),` thu nhặt đảm bảo tiến trình ko bị tai biến ngắt mạch sập mạng nếu lỡ sơ suất ngóc đầu trên chốn kết xuất máy chủ Server-Side (SSR). Sau khi được bật đèn thẻ xanh, nó thẳng tay cắm cân đo `,(0,c.jsx)(t.code,{children:`===`}),` gắt gao giữa thứ bạn mới chèn nộp kề sát với chóp bu toàn cục `,(0,c.jsx)(t.code,{children:`window`}),` mặc định.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`element: E`}),` — Mọi đối thủ nút Node hay thứ tạp pí lù gì đem ra để thi thố khớp lệnh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Trả thù lao báo giá chốt `,(0,c.jsx)(t.code,{children:`true`}),` đặc quyền dành duy cho ứng viên nào tham chiếu sống sót hoàn hảo trong trình duyệt và y xì là cụ tổ đối tượng `,(0,c.jsx)(t.code,{children:`window`}),`. Đặc công đóng ấn hàm Type Guard (bảo bộ định danh gốc) thu mình ép xác cho cái kiểu kia vỏn vẹn trong áo choàng `,(0,c.jsx)(t.code,{children:`Window`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isWindow } from '@dxtmisha/functional-basic'

// Đặc cách điểm vinh quang
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Khối lượng tạp dân xô bồ DOM bị dập vùi false
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};