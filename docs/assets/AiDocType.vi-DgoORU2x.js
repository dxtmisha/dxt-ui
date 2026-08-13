import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiDocType - Trình Quản lý Loại Tài liệu AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aidoctype`,children:`Lớp AiDocType`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp quản lý đóng vai trò như một kho đăng ký và trình lựa chọn cho các loại tài liệu khác nhau. Nó xác định trình xử lý tài liệu chuyên biệt nào (ví dụ: cho lớp, hàm hoặc composable) sẽ được sử dụng cho một tệp nhất định dựa trên các đặc điểm của tệp đó.`}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đăng ký Động`}),` — cho phép thêm các loại tài liệu mới vào hệ thống trong thời gian chạy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lựa chọn Thông minh`}),` — tự động xác định trình xử lý tài liệu chính xác cho tệp bằng cách lặp qua các loại đã đăng ký và thực thi logic kiểm tra của chúng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ủy quyền`}),` — điều phối việc khởi tạo và thực thi các trình xử lý tài liệu chuyên biệt (các triển khai của `,(0,c.jsx)(t.code,{children:`AiDocItemAbstract`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`API Tĩnh`}),` — cung cấp một giao diện tĩnh thuận tiện cho việc quản lý tài liệu toàn cầu mà không cần khởi tạo đối tượng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiDocType`}),` được thiết kế để sử dụng thông qua các phương thức tĩnh. Không cần khởi tạo.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiDocType } from '@dxtmisha/scripts'

// Công cụ sử dụng lớp này nội bộ để xử lý các mục tệp:
await AiDocType.make(gitFileItem)
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`quản-lý-tài-liệu`,children:`Quản lý Tài liệu`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(item: GitFileItem): Promise<void>`}),` — (Tĩnh) Phân tích mục tệp được cung cấp, chọn loại tài liệu phù hợp và kích hoạt quy trình tạo.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`kiểm-soát-kho-đăng-ký`,children:`Kiểm soát Kho đăng ký`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(type: AiDocTypeItem): void`}),` — (Tĩnh) Đăng ký một loại tài liệu mới vào đầu danh sách ưu tiên.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`aidoctypeitem`,children:`AiDocTypeItem`}),`
`,(0,c.jsx)(t.p,{children:`Cấu hình cho trình xử lý loại tài liệu.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`check: (item: GitFileItem) => boolean`}),` — hàm xác định xem trình xử lý này có phù hợp với tệp hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: new (path: string, item: GitFileItem) => AiDocItemAbstract`}),` — hàm khởi tạo lớp xử lý.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(t.p,{children:`Đại diện cho thông tin tệp được quản lý bởi Git.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — Đường dẫn tương đối đến tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pathByOS: string`}),` — Đường dẫn tuyệt đối đặc thù của hệ điều hành.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: string`}),` — Ngày sửa đổi cuối cùng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: any`}),` — Dành riêng cho siêu dữ liệu bổ sung.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};