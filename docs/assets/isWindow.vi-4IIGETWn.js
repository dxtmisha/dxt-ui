import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(o){const i={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/isWindow - Kiểm tra thực thể Window"}),`
`,n.jsx(i.h1,{id:"iswindow",children:n.jsx(i.code,{children:"isWindow"})}),`
`,n.jsxs(i.p,{children:["Loại hình hệ mã thiết kế đặc trị dành cho công cuộc xác minh trực thuộc xem biến tham số đẩy vào có đích thị nhắm trúng đối tượng bản chất chủ đề toàn cục trình duyệt ",n.jsx(i.code,{children:"window"})," hay không."]}),`
`,n.jsxs(i.p,{children:["Phác đồ sẽ đi đường vòng chạy qua quy định môi trường ",n.jsx(i.code,{children:"isDomRuntime()"})," thu nhặt đảm bảo tiến trình ko bị tai biến ngắt mạch sập mạng nếu lỡ sơ suất ngóc đầu trên chốn kết xuất máy chủ Server-Side (SSR). Sau khi được bật đèn thẻ xanh, nó thẳng tay cắm cân đo ",n.jsx(i.code,{children:"==="})," gắt gao giữa thứ bạn mới chèn nộp kề sát với chóp bu toàn cục ",n.jsx(i.code,{children:"window"})," mặc định."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"element: E"})," — Mọi đối thủ nút Node hay thứ tạp pí lù gì đem ra để thi thố khớp lệnh."]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Trả về:"}),`
`,n.jsx(i.code,{children:"boolean"})," — Trả thù lao báo giá chốt ",n.jsx(i.code,{children:"true"})," đặc quyền dành duy cho ứng viên nào tham chiếu sống sót hoàn hảo trong trình duyệt và y xì là cụ tổ đối tượng ",n.jsx(i.code,{children:"window"}),". Đặc công đóng ấn hàm Type Guard (bảo bộ định danh gốc) thu mình ép xác cho cái kiểu kia vỏn vẹn trong áo choàng ",n.jsx(i.code,{children:"Window"}),"."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { isWindow } from '@dxtmisha/functional-basic'

// Đặc cách điểm vinh quang
console.log(isWindow(window)) // true
console.log(isWindow(globalThis.window)) // true

// Khối lượng tạp dân xô bồ DOM bị dập vùi false
console.log(isWindow(document)) // false
console.log(isWindow(document.body)) // false
console.log(isWindow({})) // false
`})})]})}function a(o={}){const{wrapper:i}={...t(),...o.components};return i?n.jsx(i,{...o,children:n.jsx(c,{...o})}):c(o)}export{a as default};
