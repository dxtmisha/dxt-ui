import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(i){const c={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Classes/ApiHeaders - Tiêu đề yêu cầu API"}),`
`,n.jsx(c.h1,{id:"lớp-apiheaders",children:"Lớp ApiHeaders"}),`
`,n.jsxs(c.p,{children:["Một lớp để quản lý và gộp các tiêu đề (headers) yêu cầu HTTP. Nó xử lý các tiêu đề mặc định cho toàn bộ ứng dụng, tiêu đề tùy chỉnh cho các yêu cầu cụ thể và việc tự động gán ",n.jsx(c.code,{children:"Content-Type"}),"."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tiêu đề mặc định"})," — thiết lập các tiêu đề chung một lần duy nhất, ví dụ như ",n.jsx(c.code,{children:"Authorization"})," hoặc ",n.jsx(c.code,{children:"X-App-Version"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Content-Type Động"})," — tự động quản lý tiêu đề ",n.jsx(c.code,{children:"Content-Type"})," (mặc định là ",n.jsx(c.code,{children:"application/json;charset=UTF-8"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Gộp an toàn"})," — gộp nhiều nguồn tiêu đề khác nhau mà không làm thay đổi các đối tượng gốc."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xác thực đầu vào"})," — đảm bảo chỉ các đối tượng hợp lệ mới được xử lý dưới dạng tiêu đề."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-javascript",children:`import { ApiHeaders } from '@dxtmisha/functional'

const apiHeaders = new ApiHeaders()
apiHeaders.set({ 'X-App-Platform': 'web' })
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"get(value?: Record<string, string> | null, type = 'application/json;charset=UTF-8'): Record<string, string> | undefined"})," — Giao thoa tiêu đề mặc định với những tiêu đề tùy chỉnh được truyền vào và tiêm ",n.jsx(c.code,{children:"Content-Type"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"set(headers: Record<string, string>): this"})," — Thiết lập hoặc cập nhật mảng đối tượng tiêu đề mặc định."]}),`
`]})]})}function a(i={}){const{wrapper:c}={...e(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(t,{...i})}):t(i)}export{a as default};
