import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiDocItem - Trình Tạo Tài liệu Hàm bằng AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aidocitem`,children:`Lớp AiDocItem`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp chuyên biệt để tạo và cập nhật tài liệu cho các hàm TypeScript bằng AI. Nó giúp hợp lý hóa việc tạo các mô tả hàm chi tiết, giải thích tham số và cung cấp các ví dụ sử dụng.`}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tối ưu cho Hàm`}),` — sử dụng các mẫu chuyên biệt (`,(0,c.jsx)(t.code,{children:`aiDocFunctionPrompt.en.txt`}),`) được thiết kế để viết tài liệu cho các đoạn mã thiên về logic.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính nhất quán Trực quan`}),` — tận dụng dữ liệu tham chiếu từ `,(0,c.jsx)(t.code,{children:`demoDocEn.mdx`}),` để tạo ra tài liệu phù hợp với định dạng tiêu chuẩn của dự án.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quy trình Hoàn chỉnh`}),` — xử lý mọi thứ từ việc đọc hàm nguồn đến việc ghi tệp MDX cuối cùng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Siêu dữ liệu Thông minh`}),` — tự động xác định đường dẫn Wiki chính xác và tạo tiêu đề trang chuẩn hóa.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo `,(0,c.jsx)(t.code,{children:`AiDocItem`}),` bằng cách cung cấp đường dẫn nguồn của dự án và siêu dữ liệu tệp đích.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — đường dẫn thư mục gốc của dự án.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: GitFileItem`}),` — thông tin về tệp hàm cụ thể.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiDocItem } from '@dxtmisha/scripts'

const functionDoc = new AiDocItem('/src/functions', gitFileItem)

// Kích hoạt việc tạo tài liệu
await functionDoc.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): Promise<void>`}),` — quản lý toàn bộ quy trình tài liệu: kiểm tra cập nhật, chuẩn bị ngữ cảnh AI và ghi kết quả.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`siêu-dữ-liệu-metadata`,children:`Siêu dữ liệu (Metadata)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getTitle(): string`}),` — tạo tiêu đề chuẩn hóa cho trang tài liệu hàm.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getPathWiki(): string[]`}),` — tính toán đường dẫn lưu trữ Wiki dựa trên vị trí tệp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`isBuildDisabled(): boolean`}),` — kiểm tra xem tệp nguồn có được đánh dấu `,(0,c.jsx)(t.code,{children:`// wiki:build-none`}),` để bỏ qua việc tạo hay không.`]}),`
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