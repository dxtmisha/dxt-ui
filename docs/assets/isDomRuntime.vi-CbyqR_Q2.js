import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isDomRuntime - Xác định ngữ cảnh chạy trên trình duyệt`}),`
`,(0,c.jsx)(t.h1,{id:`isdomruntime`,children:(0,c.jsx)(t.code,{children:`isDomRuntime`})}),`
`,(0,c.jsx)(t.p,{children:`Xác định xem mã hiện được thực thi có nằm trong bối cảnh chạy của một trình duyệt web (browser) hay không.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hoạt động kiểm tra này nhắm đến sự tồn tại của đối tượng toàn cục `,(0,c.jsx)(t.code,{children:`window`}),` cũng như thuộc tính song song `,(0,c.jsx)(t.code,{children:`window.document`}),`. Tích hợp giải pháp này là cách thức thông dụng để đảm bảo hệ thống gọi các hàm thực thi DOM-API riêng biệt (như điều chỉnh thanh kéo trượt, bắt sự kiện, điều hướng thẻ Element) sẽ không tạo lỗi sập quá trình (crash) đối với kịch bản Kết xuất Phía máy chủ (Server-Side Rendering — SSR) hay trên các bộ lọc Node.js đóng gói.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Tham số:`}),`
Cấu trúc lập trình này vận hành hoàn toàn không cần cấp ghép tham số.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Nhận `,(0,c.jsx)(t.code,{children:`true`}),` nếu đoạn mã thi công trong trình duyệt (có biểu thị đối tượng `,(0,c.jsx)(t.code,{children:`window`}),` và `,(0,c.jsx)(t.code,{children:`document`}),`). Nó chuyển lại `,(0,c.jsx)(t.code,{children:`false`}),` nếu kích chạy ở mạn máy chủ (ví dụ quy trình của Node.js hay xây dựng tĩnh — static generation).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isDomRuntime } from '@dxtmisha/functional-basic'

if (isDomRuntime()) {
  // Tương tác cực kì an toàn đến cửa sổ window.localStorage hay hàm DOM
  window.localStorage.setItem('visited', 'yes')
  document.body.classList.add('client-rendered')
} else {
  // Xử lý dữ liệu định tuyến logic dành riêng cho máy chủ (SSR)
  console.log('Rendering on server...')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};