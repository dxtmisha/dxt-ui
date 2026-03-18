import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/AiDocItemComposables - Trình Tạo Tài liệu Composable bằng AI"}),`
`,n.jsx(i.h1,{id:"lớp-aidocitemcomposables",children:"Lớp AiDocItemComposables"}),`
`,n.jsx(i.p,{children:"Một lớp chuyên biệt để tạo và cập nhật tài liệu cho các Vue Composables bằng AI. Nó tự động hóa quy trình phân tích các hàm composition, thu thập ngữ cảnh và tạo tài liệu MDX chất lượng cao."}),`
`,n.jsx(i.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tập trung vào Composable"})," — sử dụng các mẫu chuyên biệt (",n.jsx(i.code,{children:"aiDocComposablePrompt.en.txt"}),") được thiết kế riêng để viết tài liệu cho các hàm composition."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Bản demo Trực quan"})," — tích hợp dữ liệu tham chiếu từ ",n.jsx(i.code,{children:"demoComposableEn.mdx"})," để duy trì giao diện nhất quán cho tài liệu composable."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tự động hóa Hoàn toàn"})," — xử lý các bước kỹ thuật như đọc mã, kiểm tra trạng thái bản dựng và ghi kết quả cuối cùng."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Định tuyến Thông minh"})," — tự động tính toán đường dẫn lưu trữ Wiki phù hợp và tiêu đề trang."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Khởi tạo ",n.jsx(i.code,{children:"AiDocItemComposables"})," bằng cách cung cấp đường dẫn nguồn của dự án và siêu dữ liệu tệp đích."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — đường dẫn thư mục gốc của dự án."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: GitFileItem"})," — thông tin về tệp composable cụ thể."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { AiDocItemComposables } from '@dxtmisha/scripts'

const composableDoc = new AiDocItemComposables('/src/composables', gitFileItem)

// Kích hoạt việc tạo tài liệu
await composableDoc.make()
`})}),`
`,n.jsx(i.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(i.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): Promise<void>"})," — thực hiện chu trình tài liệu đầy đủ: kiểm tra cập nhật, chuẩn bị ngữ cảnh AI và ghi kết quả."]}),`
`]}),`
`,n.jsx(i.h3,{id:"siêu-dữ-liệu-metadata",children:"Siêu dữ liệu (Metadata)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getTitle(): string"})," — tạo tiêu đề chuẩn hóa cho tài liệu composable."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getPathWiki(): string[]"})," — tính toán đường dẫn Wiki dựa trên vị trí của tệp trong dự án."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"isBuildDisabled(): boolean"})," — kiểm tra xem tệp nguồn có chứa ",n.jsx(i.code,{children:"// wiki:build-none"})," để bỏ qua việc tạo hay không."]}),`
`]}),`
`,n.jsx(i.h2,{id:"các-kiểu-dữ-liệu",children:"Các kiểu dữ liệu"}),`
`,n.jsx(i.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,n.jsx(i.p,{children:"Đại diện cho thông tin tệp được quản lý bởi Git."}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — Đường dẫn tương đối đến tệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"pathByOS: string"})," — Đường dẫn tuyệt đối đặc thù của hệ điều hành."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"date: string"})," — Ngày sửa đổi cuối cùng."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: any"})," — Dành riêng cho siêu dữ liệu bổ sung."]}),`
`]})]})}function u(c={}){const{wrapper:i}={...h(),...c.components};return i?n.jsx(i,{...c,children:n.jsx(t,{...c})}):t(c)}export{u as default};
