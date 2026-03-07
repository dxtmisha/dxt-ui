import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(c){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...h(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/isDomRuntime - Xác định ngữ cảnh chạy trên trình duyệt"}),`
`,n.jsx(t.h1,{id:"isdomruntime",children:n.jsx(t.code,{children:"isDomRuntime"})}),`
`,n.jsx(t.p,{children:"Xác định xem mã hiện được thực thi có nằm trong bối cảnh chạy của một trình duyệt web (browser) hay không."}),`
`,n.jsxs(t.p,{children:["Hoạt động kiểm tra này nhắm đến sự tồn tại của đối tượng toàn cục ",n.jsx(t.code,{children:"window"})," cũng như thuộc tính song song ",n.jsx(t.code,{children:"window.document"}),". Tích hợp giải pháp này là cách thức thông dụng để đảm bảo hệ thống gọi các hàm thực thi DOM-API riêng biệt (như điều chỉnh thanh kéo trượt, bắt sự kiện, điều hướng thẻ Element) sẽ không tạo lỗi sập quá trình (crash) đối với kịch bản Kết xuất Phía máy chủ (Server-Side Rendering — SSR) hay trên các bộ lọc Node.js đóng gói."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Tham số:"}),`
Cấu trúc lập trình này vận hành hoàn toàn không cần cấp ghép tham số.`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"boolean"})," — Nhận ",n.jsx(t.code,{children:"true"})," nếu đoạn mã thi công trong trình duyệt (có biểu thị đối tượng ",n.jsx(t.code,{children:"window"})," và ",n.jsx(t.code,{children:"document"}),"). Nó chuyển lại ",n.jsx(t.code,{children:"false"})," nếu kích chạy ở mạn máy chủ (ví dụ quy trình của Node.js hay xây dựng tĩnh — static generation)."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { isDomRuntime } from '@dxtmisha/functional-basic'

if (isDomRuntime()) {
  // Tương tác cực kì an toàn đến cửa sổ window.localStorage hay hàm DOM
  window.localStorage.setItem('visited', 'yes')
  document.body.classList.add('client-rendered')
} else {
  // Xử lý dữ liệu định tuyến logic dành riêng cho máy chủ (SSR)
  console.log('Rendering on server...')
}
`})})]})}function a(c={}){const{wrapper:t}={...h(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(e,{...c})}):e(c)}export{a as default};
