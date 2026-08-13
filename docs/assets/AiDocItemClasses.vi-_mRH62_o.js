import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiDocItemClasses - Trình Tạo Tài liệu Lớp bằng AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aidocitemclasses`,children:`Lớp AiDocItemClasses`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp chuyên biệt để tạo và cập nhật tài liệu cho các lớp (classes) TypeScript bằng AI. Nó tự động hóa toàn bộ quy trình: từ đọc mã nguồn và thu thập ngữ cảnh đến tương tác với các mô hình AI và tạo tệp tài liệu MDX chuẩn hóa.`}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo Tự động`}),` — quản lý toàn bộ vòng đời tạo tài liệu từ định nghĩa lớp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dựa trên Mẫu`}),` — sử dụng các mẫu lời nhắc chuyên biệt (`,(0,c.jsx)(t.code,{children:`aiDocClassPrompt.en.txt`}),`) để đảm bảo đầu ra AI nhất quán.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ Demo`}),` — tận dụng các tệp trình diễn tham chiếu (`,(0,c.jsx)(t.code,{children:`demoClassEn.mdx`}),`) để hướng dẫn AI trong việc định dạng giao diện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Logic Thông minh`}),` — tự động xác định đường dẫn Wiki và tiêu đề dựa trên cấu trúc tệp nguồn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bảo vệ Bản dựng`}),` — tích hợp với hệ thống bản dựng để đảm bảo chỉ những mã hợp lệ, có thể biên dịch mới được viết tài liệu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo `,(0,c.jsx)(t.code,{children:`AiDocItemClasses`}),` bằng cách cung cấp đường dẫn mã nguồn và thông tin tệp đích.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — đường dẫn thư mục gốc của dự án.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: GitFileItem`}),` — thông tin về tệp lớp TypeScript cụ thể.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiDocItemClasses } from '@dxtmisha/scripts'

const classDoc = new AiDocItemClasses('/src/classes', gitFileItem)

// Kích hoạt việc tạo tài liệu
await classDoc.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — bắt đầu chu trình tài liệu: kiểm tra cập nhật, chuẩn bị ngữ cảnh, gọi AI và ghi kết quả.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`siêu-dữ-liệu-metadata`,children:`Siêu dữ liệu (Metadata)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — tạo tiêu đề chuẩn hóa cho trang tài liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPathWiki(): string[]`}),` — tính toán đường dẫn lưu trữ trong Wiki dựa trên vị trí tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isBuildDisabled(): boolean`}),` — kiểm tra xem tệp nguồn có được đánh dấu `,(0,c.jsx)(t.code,{children:`// wiki:build-none`}),` để bỏ qua xử lý hay không.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(t.p,{children:`Đại diện cho thông tin tệp được quản lý bởi Git.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — Đường dẫn tương đối đến tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pathByOS: string`}),` — Đường dẫn tuyệt đối đặc thù của hệ điều hành.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`date: string`}),` — Ngày sửa đổi cuối cùng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: any`}),` — Dành riêng cho siêu dữ liệu bổ sung.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};