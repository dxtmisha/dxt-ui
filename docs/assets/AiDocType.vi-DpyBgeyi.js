import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/AiDocType - Trình Quản lý Loại Tài liệu AI`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aidoctype`,children:`Lớp AiDocType`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp quản lý đóng vai trò như một kho đăng ký và trình lựa chọn cho các loại tài liệu khác nhau. Nó xác định trình xử lý tài liệu chuyên biệt nào (ví dụ: cho lớp, hàm hoặc composable) sẽ được sử dụng cho một tệp nhất định dựa trên các đặc điểm của tệp đó.`}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đăng ký Động`}),` — cho phép thêm các loại tài liệu mới vào hệ thống trong thời gian chạy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lựa chọn Thông minh`}),` — tự động xác định trình xử lý tài liệu chính xác cho tệp bằng cách lặp qua các loại đã đăng ký và thực thi logic kiểm tra của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ủy quyền`}),` — điều phối việc khởi tạo và thực thi các trình xử lý tài liệu chuyên biệt (các triển khai của `,(0,c.jsx)(n.code,{children:`AiDocItemAbstract`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`API Tĩnh`}),` — cung cấp một giao diện tĩnh thuận tiện cho việc quản lý tài liệu toàn cầu mà không cần khởi tạo đối tượng.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`AiDocType`}),` được thiết kế để sử dụng thông qua các phương thức tĩnh. Không cần khởi tạo.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiDocType } from '@dxtmisha/scripts'

// Công cụ sử dụng lớp này nội bộ để xử lý các mục tệp:
await AiDocType.make(gitFileItem)
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý-tài-liệu`,children:`Quản lý Tài liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(item: GitFileItem): Promise<void>`}),` — (Tĩnh) Phân tích mục tệp được cung cấp, chọn loại tài liệu phù hợp và kích hoạt quy trình tạo.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`kiểm-soát-kho-đăng-ký`,children:`Kiểm soát Kho đăng ký`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(type: AiDocTypeItem): void`}),` — (Tĩnh) Đăng ký một loại tài liệu mới vào đầu danh sách ưu tiên.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`aidoctypeitem`,children:`AiDocTypeItem`}),`
`,(0,c.jsx)(n.p,{children:`Cấu hình cho trình xử lý loại tài liệu.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`check: (item: GitFileItem) => boolean`}),` — hàm xác định xem trình xử lý này có phù hợp với tệp hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: new (path: string, item: GitFileItem) => AiDocItemAbstract`}),` — hàm khởi tạo lớp xử lý.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(n.p,{children:`Đại diện cho thông tin tệp được quản lý bởi Git.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn tương đối đến tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathByOS: string`}),` — Đường dẫn tuyệt đối đặc thù của hệ điều hành.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: string`}),` — Ngày sửa đổi cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: any`}),` — Dành riêng cho siêu dữ liệu bổ sung.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};