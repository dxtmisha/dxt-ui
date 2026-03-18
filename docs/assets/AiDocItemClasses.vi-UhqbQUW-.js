import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/scripts/Classes/AiDocItemClasses - Trình Tạo Tài liệu Lớp bằng AI"}),`
`,n.jsx(i.h1,{id:"lớp-aidocitemclasses",children:"Lớp AiDocItemClasses"}),`
`,n.jsx(i.p,{children:"Một lớp chuyên biệt để tạo và cập nhật tài liệu cho các lớp (classes) TypeScript bằng AI. Nó tự động hóa toàn bộ quy trình: từ đọc mã nguồn và thu thập ngữ cảnh đến tương tác với các mô hình AI và tạo tệp tài liệu MDX chuẩn hóa."}),`
`,n.jsx(i.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tạo Tự động"})," — quản lý toàn bộ vòng đời tạo tài liệu từ định nghĩa lớp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Dựa trên Mẫu"})," — sử dụng các mẫu lời nhắc chuyên biệt (",n.jsx(i.code,{children:"aiDocClassPrompt.en.txt"}),") để đảm bảo đầu ra AI nhất quán."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Hỗ trợ Demo"})," — tận dụng các tệp trình diễn tham chiếu (",n.jsx(i.code,{children:"demoClassEn.mdx"}),") để hướng dẫn AI trong việc định dạng giao diện."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Logic Thông minh"})," — tự động xác định đường dẫn Wiki và tiêu đề dựa trên cấu trúc tệp nguồn."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Bảo vệ Bản dựng"})," — tích hợp với hệ thống bản dựng để đảm bảo chỉ những mã hợp lệ, có thể biên dịch mới được viết tài liệu."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Khởi tạo ",n.jsx(i.code,{children:"AiDocItemClasses"})," bằng cách cung cấp đường dẫn mã nguồn và thông tin tệp đích."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — đường dẫn thư mục gốc của dự án."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: GitFileItem"})," — thông tin về tệp lớp TypeScript cụ thể."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { AiDocItemClasses } from '@dxtmisha/scripts'

const classDoc = new AiDocItemClasses('/src/classes', gitFileItem)

// Kích hoạt việc tạo tài liệu
await classDoc.make()
`})}),`
`,n.jsx(i.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(i.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): Promise<void>"})," — bắt đầu chu trình tài liệu: kiểm tra cập nhật, chuẩn bị ngữ cảnh, gọi AI và ghi kết quả."]}),`
`]}),`
`,n.jsx(i.h3,{id:"siêu-dữ-liệu-metadata",children:"Siêu dữ liệu (Metadata)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getTitle(): string"})," — tạo tiêu đề chuẩn hóa cho trang tài liệu."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getPathWiki(): string[]"})," — tính toán đường dẫn lưu trữ trong Wiki dựa trên vị trí tệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"isBuildDisabled(): boolean"})," — kiểm tra xem tệp nguồn có được đánh dấu ",n.jsx(i.code,{children:"// wiki:build-none"})," để bỏ qua xử lý hay không."]}),`
`]}),`
`,n.jsx(i.h2,{id:"các-kiểu-dữ-liệu",children:"Các kiểu dữ liệu"}),`
`,n.jsx(i.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,n.jsx(i.p,{children:"Đại diện cho thông tin tệp được quản lý bởi Git."}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — Đường dẫn tương đối đến tệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"pathByOS: string"})," — Đường dẫn tuyệt đối đặc thù của hệ điều hành."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"date: string"})," — Ngày sửa đổi cuối cùng."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: any"})," — Dành riêng cho siêu dữ liệu bổ sung."]}),`
`]})]})}function u(t={}){const{wrapper:i}={...s(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(c,{...t})}):c(t)}export{u as default};
