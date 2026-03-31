import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isWindow - Kiểm tra thực thể Window`}),`
`,(0,c.jsx)(n.h1,{id:`iswindow`,children:(0,c.jsx)(n.code,{children:`isWindow`})}),`
`,(0,c.jsxs)(n.p,{children:[`Loại hình hệ mã thiết kế đặc trị dành cho công cuộc xác minh trực thuộc xem biến tham số đẩy vào có đích thị nhắm trúng đối tượng bản chất chủ đề toàn cục trình duyệt `,(0,c.jsx)(n.code,{children:`window`}),` hay không.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Phác đồ sẽ đi đường vòng chạy qua quy định môi trường `,(0,c.jsx)(n.code,{children:`isDomRuntime()`}),` thu nhặt đảm bảo tiến trình ko bị tai biến ngắt mạch sập mạng nếu lỡ sơ suất ngóc đầu trên chốn kết xuất máy chủ Server-Side (SSR). Sau khi được bật đèn thẻ xanh, nó thẳng tay cắm cân đo `,(0,c.jsx)(n.code,{children:`===`}),` gắt gao giữa thứ bạn mới chèn nộp kề sát với chóp bu toàn cục `,(0,c.jsx)(n.code,{children:`window`}),` mặc định.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`element: E`}),` — Mọi đối thủ nút Node hay thứ tạp pí lù gì đem ra để thi thố khớp lệnh.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Trả thù lao báo giá chốt `,(0,c.jsx)(n.code,{children:`true`}),` đặc quyền dành duy cho ứng viên nào tham chiếu sống sót hoàn hảo trong trình duyệt và y xì là cụ tổ đối tượng `,(0,c.jsx)(n.code,{children:`window`}),`. Đặc công đóng ấn hàm Type Guard (bảo bộ định danh gốc) thu mình ép xác cho cái kiểu kia vỏn vẹn trong áo choàng `,(0,c.jsx)(n.code,{children:`Window`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isWindow } from '@dxtmisha/functional-basic'

// Đặc cách điểm vinh quang
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Khối lượng tạp dân xô bồ DOM bị dập vùi false
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};