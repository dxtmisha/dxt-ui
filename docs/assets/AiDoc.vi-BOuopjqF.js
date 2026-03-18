import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Classes/AiDoc - Công cụ Tài liệu hóa bằng AI"}),`
`,n.jsx(c.h1,{id:"lớp-aidoc",children:"Lớp AiDoc"}),`
`,n.jsx(c.p,{children:"Công cụ trung tâm để điều phối việc tạo tài liệu bằng AI trong toàn bộ dự án. Nó chịu trách nhiệm đọc cấu hình, quét các thư mục và phân phối các nhiệm vụ tài liệu cho các trình xử lý AI chuyên biệt."}),`
`,n.jsx(c.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xử lý Hàng loạt"})," — tự động lặp qua các thư mục đã cấu hình để tạo tài liệu cho nhiều tệp cùng lúc."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp Toàn diện"})," — đọc các thiết lập dự án thông qua ",n.jsx(c.code,{children:"PropertiesConfig"})," để xác định các đường dẫn và phạm vi mục tiêu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp Git"})," — sử dụng ",n.jsx(c.code,{children:"GitRead"})," để nhận diện các tệp liên quan và lọc chúng dựa trên trạng thái của kho lưu trữ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khả năng Chịu lỗi"})," — xử lý lỗi mạnh mẽ trong quá trình tạo tài liệu để đảm bảo hệ thống hoạt động ổn định hoặc báo cáo sự cố một cách rõ ràng."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"AiDoc"})," thường được khởi tạo như một trình điều phối chính để bắt đầu quá trình tạo tài liệu."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { AiDoc } from '@dxtmisha/scripts'

const engine = new AiDoc()

// Bắt đầu xử lý tất cả các thư mục đã cấu hình
await engine.make()
`})}),`
`,n.jsx(c.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): Promise<void>"})," — điểm bắt đầu chính. Đọc cấu hình và bắt đầu xử lý tất cả các thư mục tài liệu đã được xác định."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"makeDirectory(dir: string): Promise<void>"})," — xử lý tất cả các tệp liên quan trong một thư mục cụ thể bằng cách ủy quyền cho các trình xử lý AI chuyên biệt."]}),`
`]}),`
`,n.jsx(c.p,{children:"Một trình điều phối cấp cao không công khai các thuộc tính cấu hình hoặc trạng thái phức tạp."})]})}function x(h={}){const{wrapper:c}={...t(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(i,{...h})}):i(h)}export{x as default};
