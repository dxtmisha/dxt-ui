import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(t){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/BuildItem - Trình quản lý Build Component"}),`
`,n.jsx(h.h1,{id:"lớp-builditem",children:"Lớp BuildItem"}),`
`,n.jsx(h.p,{children:"Chịu trách nhiệm điều phối quy trình build của từng component riêng lẻ bằng Vite. Nó quản lý các cấu hình build tạm thời, thực thi quy trình build và tổng hợp đầu ra thu được thành một snapshot mã duy nhất."}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Cô lập cấu hình"})," — Đổi tên các cấu hình Vite hiện có một cách an toàn trước khi build và khôi phục chúng sau khi hoàn tất."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tích hợp Vite"})," — Tạo các cấu hình Vite động dựa trên một template dành riêng cho component."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tổng hợp đầu ra"})," — Đọc đệ quy tất cả các tệp từ thư mục phân phối tạm thời và kết hợp chúng thành một tệp ",n.jsx(h.code,{children:"code.txt"})," duy nhất."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Lan truyền lỗi"})," — Theo dõi trạng thái build và xử lý các mã thoát (exit code) khi thất bại."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Quản lý lưu trữ"})," — Cung cấp các phương thức để lấy và dọn dẹp các đường dẫn phân phối tạm thời."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Khởi tạo ",n.jsx(h.code,{children:"BuildItem"})," bằng cách cung cấp đường dẫn component mục tiêu."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"path: string"})," — đường dẫn đích đến thư mục component cần build."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { BuildItem } from '@dxtmisha/scripts'

const builder = new BuildItem('packages/components/Button')

// Kích hoạt quy trình build
await builder.make()
`})}),`
`,n.jsx(h.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(h.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"make(): Promise<boolean>"})," — điều phối toàn bộ vòng đời build: sao lưu cấu hình, thực thi build và khôi phục tệp."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getCode(): string"})," — lấy nội dung của snapshot mã tổng hợp được tạo ra trong quy trình build."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"removeDir(): void"})," — xóa vĩnh viễn thư mục phân phối tạm thời."]}),`
`]}),`
`,n.jsx(h.h2,{id:"quy-trình-làm-việc-nội-bộ",children:"Quy trình làm việc nội bộ"}),`
`,n.jsx(h.p,{children:"Quá trình build tuân theo một vòng đời nghiêm ngặt để đảm bảo an toàn cho môi trường và tính nhất quán của đầu ra:"}),`
`,n.jsxs(h.ol,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Sao lưu cấu hình"})," — Đổi tên ",n.jsx(h.code,{children:"vite.config.ts"})," hiện có thành ",n.jsx(h.code,{children:"vite.config.workers.ts"})," để ngăn nó bị ghi đè hoặc gây nhiễu cho quá trình build."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tổng hợp Template"})," — Đọc template Vite cụ thể của component và chèn đường dẫn đích một cách động."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Thực thi Shell"})," — Kích hoạt lệnh ",n.jsx(h.code,{children:"npm run build"})," thông qua một tiến trình con, thu thập và ghi lại toàn bộ đầu ra."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Khôi phục"})," — Khôi phục an toàn ",n.jsx(h.code,{children:"vite.config.ts"})," ban đầu từ bản sao lưu sau khi quá trình build hoàn tất."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tổng hợp"})," — Quét đệ quy thư mục phân phối, bao bọc nội dung của mỗi tệp trong một comment định danh và ghi kết quả kết hợp cuối cùng vào ",n.jsx(h.code,{children:"code.txt"}),"."]}),`
`]})]})}function p(t={}){const{wrapper:h}={...c(),...t.components};return h?n.jsx(h,{...t,children:n.jsx(i,{...t})}):i(t)}export{p as default};
