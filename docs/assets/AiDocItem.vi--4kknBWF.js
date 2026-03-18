import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/AiDocItem - Trình Tạo Tài liệu Hàm bằng AI"}),`
`,n.jsx(i.h1,{id:"lớp-aidocitem",children:"Lớp AiDocItem"}),`
`,n.jsx(i.p,{children:"Một lớp chuyên biệt để tạo và cập nhật tài liệu cho các hàm TypeScript bằng AI. Nó giúp hợp lý hóa việc tạo các mô tả hàm chi tiết, giải thích tham số và cung cấp các ví dụ sử dụng."}),`
`,n.jsx(i.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tối ưu cho Hàm"})," — sử dụng các mẫu chuyên biệt (",n.jsx(i.code,{children:"aiDocFunctionPrompt.en.txt"}),") được thiết kế để viết tài liệu cho các đoạn mã thiên về logic."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tính nhất quán Trực quan"})," — tận dụng dữ liệu tham chiếu từ ",n.jsx(i.code,{children:"demoDocEn.mdx"})," để tạo ra tài liệu phù hợp với định dạng tiêu chuẩn của dự án."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Quy trình Hoàn chỉnh"})," — xử lý mọi thứ từ việc đọc hàm nguồn đến việc ghi tệp MDX cuối cùng."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Siêu dữ liệu Thông minh"})," — tự động xác định đường dẫn Wiki chính xác và tạo tiêu đề trang chuẩn hóa."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Khởi tạo ",n.jsx(i.code,{children:"AiDocItem"})," bằng cách cung cấp đường dẫn nguồn của dự án và siêu dữ liệu tệp đích."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — đường dẫn thư mục gốc của dự án."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: GitFileItem"})," — thông tin về tệp hàm cụ thể."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { AiDocItem } from '@dxtmisha/scripts'

const functionDoc = new AiDocItem('/src/functions', gitFileItem)

// Kích hoạt việc tạo tài liệu
await functionDoc.make()
`})}),`
`,n.jsx(i.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(i.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): Promise<void>"})," — quản lý toàn bộ quy trình tài liệu: kiểm tra cập nhật, chuẩn bị ngữ cảnh AI và ghi kết quả."]}),`
`]}),`
`,n.jsx(i.h3,{id:"siêu-dữ-liệu-metadata",children:"Siêu dữ liệu (Metadata)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getTitle(): string"})," — tạo tiêu đề chuẩn hóa cho trang tài liệu hàm."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getPathWiki(): string[]"})," — tính toán đường dẫn lưu trữ Wiki dựa trên vị trí tệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"isBuildDisabled(): boolean"})," — kiểm tra xem tệp nguồn có được đánh dấu ",n.jsx(i.code,{children:"// wiki:build-none"})," để bỏ qua việc tạo hay không."]}),`
`]}),`
`,n.jsx(i.h2,{id:"các-kiểu-dữ-liệu",children:"Các kiểu dữ liệu"}),`
`,n.jsx(i.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,n.jsx(i.p,{children:"Đại diện cho thông tin tệp được quản lý bởi Git."}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — Đường dẫn tương đối đến tệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"pathByOS: string"})," — Đường dẫn tuyệt đối đặc thù của hệ điều hành."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"date: string"})," — Ngày sửa đổi cuối cùng."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: any"})," — Dành riêng cho siêu dữ liệu bổ sung."]}),`
`]})]})}function x(c={}){const{wrapper:i}={...h(),...c.components};return i?n.jsx(i,{...c,children:n.jsx(t,{...c})}):t(c)}export{x as default};
