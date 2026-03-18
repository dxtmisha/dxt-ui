import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(i){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/functional-basic/Classes/ApiHeaders - Tiêu đề yêu cầu API"}),`
`,n.jsx(t.h1,{id:"lớp-apiheaders",children:"Lớp ApiHeaders"}),`
`,n.jsxs(t.p,{children:["Một lớp để quản lý và gộp các tiêu đề (headers) yêu cầu HTTP. Nó xử lý các tiêu đề mặc định cho toàn bộ ứng dụng, tiêu đề tùy chỉnh cho các yêu cầu cụ thể và việc tự động gán ",n.jsx(t.code,{children:"Content-Type"}),"."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Tiêu đề mặc định"})," — thiết lập các tiêu đề chung một lần duy nhất, ví dụ như ",n.jsx(t.code,{children:"Authorization"})," hoặc ",n.jsx(t.code,{children:"X-App-Version"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Content-Type Động"})," — tự động quản lý tiêu đề ",n.jsx(t.code,{children:"Content-Type"})," (mặc định là ",n.jsx(t.code,{children:"application/json;charset=UTF-8"}),")."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Gộp an toàn"})," — gộp nhiều nguồn tiêu đề khác nhau mà không làm thay đổi các đối tượng gốc."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Xác thực đầu vào"})," — đảm bảo chỉ các đối tượng hợp lệ mới được xử lý dưới dạng tiêu đề."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(t.code,{children:"ApiHeaders()"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { ApiHeaders } from '@dxtmisha/functional'

// 1. Khởi tạo đơn giản
const apiHeaders = new ApiHeaders()

// 2. Thiết lập các tiêu đề mặc định
apiHeaders.set({ 'X-App-Platform': 'web' })

// 3. Lấy các tiêu đề cho yêu cầu
const headers = apiHeaders.get({ 'Authorization': 'Bearer token123' })
// Kết quả: { 'X-App-Platform': 'web', 'Authorization': 'Bearer token123', 'Content-Type': 'application/json;charset=UTF-8' }
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"get(value?: Record<string, string> | null, type = 'application/json;charset=UTF-8'): Record<string, string> | undefined"})," — Giao thoa tiêu đề mặc định với những tiêu đề tùy chỉnh được truyền vào và tiêm ",n.jsx(t.code,{children:"Content-Type"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"set(headers: Record<string, string>): this"})," — Thiết lập hoặc cập nhật mảng đối tượng tiêu đề mặc định."]}),`
`]})]})}function a(i={}){const{wrapper:t}={...c(),...i.components};return t?n.jsx(t,{...i,children:n.jsx(e,{...i})}):e(i)}export{a as default};
