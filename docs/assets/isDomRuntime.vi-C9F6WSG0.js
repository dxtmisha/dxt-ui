import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/isDomRuntime - Xác định ngữ cảnh chạy trên trình duyệt`}),`
`,(0,c.jsx)(n.h1,{id:`isdomruntime`,children:(0,c.jsx)(n.code,{children:`isDomRuntime`})}),`
`,(0,c.jsx)(n.p,{children:`Xác định xem mã hiện được thực thi có nằm trong bối cảnh chạy của một trình duyệt web (browser) hay không.`}),`
`,(0,c.jsxs)(n.p,{children:[`Hoạt động kiểm tra này nhắm đến sự tồn tại của đối tượng toàn cục `,(0,c.jsx)(n.code,{children:`window`}),` cũng như thuộc tính song song `,(0,c.jsx)(n.code,{children:`window.document`}),`. Tích hợp giải pháp này là cách thức thông dụng để đảm bảo hệ thống gọi các hàm thực thi DOM-API riêng biệt (như điều chỉnh thanh kéo trượt, bắt sự kiện, điều hướng thẻ Element) sẽ không tạo lỗi sập quá trình (crash) đối với kịch bản Kết xuất Phía máy chủ (Server-Side Rendering — SSR) hay trên các bộ lọc Node.js đóng gói.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Tham số:`}),`
Cấu trúc lập trình này vận hành hoàn toàn không cần cấp ghép tham số.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — Nhận `,(0,c.jsx)(n.code,{children:`true`}),` nếu đoạn mã thi công trong trình duyệt (có biểu thị đối tượng `,(0,c.jsx)(n.code,{children:`window`}),` và `,(0,c.jsx)(n.code,{children:`document`}),`). Nó chuyển lại `,(0,c.jsx)(n.code,{children:`false`}),` nếu kích chạy ở mạn máy chủ (ví dụ quy trình của Node.js hay xây dựng tĩnh — static generation).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { isDomRuntime } from '@dxtmisha/functional-basic'

if (isDomRuntime()) {
  // Tương tác cực kì an toàn đến cửa sổ window.localStorage hay hàm DOM
  window.localStorage.setItem('visited', 'yes')
  document.body.classList.add('client-rendered')
} else {
  // Xử lý dữ liệu định tuyến logic dành riêng cho máy chủ (SSR)
  console.log('Rendering on server...')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};