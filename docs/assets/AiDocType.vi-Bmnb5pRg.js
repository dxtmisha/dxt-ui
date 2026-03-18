import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(h){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/AiDocType - Trình Quản lý Loại Tài liệu AI"}),`
`,n.jsx(i.h1,{id:"lớp-aidoctype",children:"Lớp AiDocType"}),`
`,n.jsx(i.p,{children:"Một lớp quản lý đóng vai trò như một kho đăng ký và trình lựa chọn cho các loại tài liệu khác nhau. Nó xác định trình xử lý tài liệu chuyên biệt nào (ví dụ: cho lớp, hàm hoặc composable) sẽ được sử dụng cho một tệp nhất định dựa trên các đặc điểm của tệp đó."}),`
`,n.jsx(i.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Đăng ký Động"})," — cho phép thêm các loại tài liệu mới vào hệ thống trong thời gian chạy."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Lựa chọn Thông minh"})," — tự động xác định trình xử lý tài liệu chính xác cho tệp bằng cách lặp qua các loại đã đăng ký và thực thi logic kiểm tra của chúng."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Ủy quyền"})," — điều phối việc khởi tạo và thực thi các trình xử lý tài liệu chuyên biệt (các triển khai của ",n.jsx(i.code,{children:"AiDocItemAbstract"}),")."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"API Tĩnh"})," — cung cấp một giao diện tĩnh thuận tiện cho việc quản lý tài liệu toàn cầu mà không cần khởi tạo đối tượng."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:[n.jsx(i.code,{children:"AiDocType"})," được thiết kế để sử dụng thông qua các phương thức tĩnh. Không cần khởi tạo."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { AiDocType } from '@dxtmisha/scripts'

// Công cụ sử dụng lớp này nội bộ để xử lý các mục tệp:
await AiDocType.make(gitFileItem)
`})}),`
`,n.jsx(i.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(i.h3,{id:"quản-lý-tài-liệu",children:"Quản lý Tài liệu"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(item: GitFileItem): Promise<void>"})," — (Tĩnh) Phân tích mục tệp được cung cấp, chọn loại tài liệu phù hợp và kích hoạt quy trình tạo."]}),`
`]}),`
`,n.jsx(i.h3,{id:"kiểm-soát-kho-đăng-ký",children:"Kiểm soát Kho đăng ký"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"add(type: AiDocTypeItem): void"})," — (Tĩnh) Đăng ký một loại tài liệu mới vào đầu danh sách ưu tiên."]}),`
`]}),`
`,n.jsx(i.h2,{id:"các-kiểu-dữ-liệu",children:"Các kiểu dữ liệu"}),`
`,n.jsx(i.h3,{id:"aidoctypeitem",children:"AiDocTypeItem"}),`
`,n.jsx(i.p,{children:"Cấu hình cho trình xử lý loại tài liệu."}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"check: (item: GitFileItem) => boolean"})," — hàm xác định xem trình xử lý này có phù hợp với tệp hay không."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: new (path: string, item: GitFileItem) => AiDocItemAbstract"})," — hàm khởi tạo lớp xử lý."]}),`
`]}),`
`,n.jsx(i.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,n.jsx(i.p,{children:"Đại diện cho thông tin tệp được quản lý bởi Git."}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — Đường dẫn tương đối đến tệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"pathByOS: string"})," — Đường dẫn tuyệt đối đặc thù của hệ điều hành."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"date: string"})," — Ngày sửa đổi cuối cùng."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: any"})," — Dành riêng cho siêu dữ liệu bổ sung."]}),`
`]})]})}function p(h={}){const{wrapper:i}={...t(),...h.components};return i?n.jsx(i,{...h,children:n.jsx(c,{...h})}):c(h)}export{p as default};
