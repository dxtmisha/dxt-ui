import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/DesignConstructor - Trình tạo hàm khởi tạo thiết kế"}),`
`,n.jsx(c.h1,{id:"lớp-designconstructor",children:"Lớp DesignConstructor"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"DesignConstructor"})," là một triển khai chuyên biệt của ",n.jsx(c.code,{children:"DesignCommand"}),' tập trung vào việc tạo logic nội bộ và các "constructor" cho các thành phần. Nó tự động hóa việc tạo các định nghĩa thuộc tính, loại TypeScript và các điểm nối (hooks) kiểu dáng hình thành nên nền tảng của lớp hành vi của thành phần.']}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo khung Constructor"})," — Tự động tạo toàn bộ bộ tệp cần thiết cho logic hành vi của thành phần."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động hóa an toàn kiểu (Type Safety)"})," — Tạo các tệp ",n.jsx(c.code,{children:"props.ts"}),", ",n.jsx(c.code,{children:"types.ts"})," và ",n.jsx(c.code,{children:"basicTypes.ts"})," để đảm bảo định kiểu nghiêm ngặt trong toàn bộ thành phần."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Nền tảng kiểu dáng"})," — Tạo tệp ",n.jsx(c.code,{children:"style.scss"})," ban đầu tương thích với hệ thống lớp của constructor."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo logic thống nhất"})," — Tạo cả tệp ",n.jsx(c.code,{children:".ts"})," và ",n.jsx(c.code,{children:".tsx"})," để triển khai logic thành phần linh hoạt."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp hệ thống"})," — Tự động cập nhật ",n.jsx(c.code,{children:"package.json"})," và tạo các xuất bản thư viện cho constructor mới."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo một thực thể trình tạo, hãy sử dụng hàm khởi tạo. Nó tự động phân giải thư mục mục tiêu trong thư mục ",n.jsx(c.code,{children:"src/constructors"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"command: string"})," — Mã định danh duy nhất cho thành phần (ví dụ: ",n.jsx(c.code,{children:"'button'"}),", ",n.jsx(c.code,{children:"'list'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options: Record<string, string>"})," — Các cặp khóa-giá trị cấu hình tùy chọn."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { DesignConstructor } from '@dxtmisha/scripts'

const generator = new DesignConstructor('button')
generator.make()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): void"})," — Thực hiện toàn bộ chuỗi tạo thư mục, tạo tệp và đăng ký hệ thống."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"cấu-trúc-các-tệp-được-tạo",children:"Cấu trúc các tệp được tạo"}),`
`,n.jsxs(c.p,{children:["Khi được khởi tạo, ",n.jsx(c.code,{children:"DesignConstructor"})," xử lý một số tệp do mẫu điều khiển:"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"properties.json"})," — Cấu hình ánh xạ cho các thuộc tính nội bộ của constructor."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"props.ts"})," — Định nghĩa thuộc tính bao gồm các kiểu và giá trị mặc định."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"types.ts"})," & ",n.jsx(c.code,{children:"basicTypes.ts"})," — Các giao diện TypeScript và định nghĩa kiểu cho trạng thái và cấu hình thành phần."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"style.scss"})," — Định nghĩa kiểu dáng ban đầu được liên kết với cấu trúc lớp của constructor."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"Constructors.ts"})," — Tệp triển khai logic chính."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"ConstructorsDesign.tsx"})," — Triển khai lớp hiển thị/render bằng TSX."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"index.ts"})," — Điểm nhập cho các xuất bản của constructor."]}),`
`]}),`
`,n.jsx(c.h3,{id:"vòng-đời-thực-thi",children:"Vòng đời thực thi"}),`
`,n.jsxs(c.p,{children:["Quy trình ",n.jsx(c.code,{children:"make()"})," thực thi theo một thứ tự chính xác để duy trì tính toàn vẹn của dữ liệu:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thiết lập thư mục"}),": Phân giải và xác nhận đường dẫn mục tiêu trong thư mục ",n.jsx(c.code,{children:"src/constructors"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo tệp"}),": Lần lượt gọi các phương thức ",n.jsx(c.code,{children:"make[File]()"})," chuyên biệt để chuyển đổi các mẫu thành mã dự án."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp nội bộ"}),": Cập nhật tệp ",n.jsx(c.code,{children:"package.json"})," gốc của dự án để hiển thị constructor mới."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xuất bản thư viện"}),": Tạo một tệp xuất bản trong thư mục gốc của thư viện để cho phép sử dụng toàn cầu."]}),`
`]})]})}function j(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{j as default};
