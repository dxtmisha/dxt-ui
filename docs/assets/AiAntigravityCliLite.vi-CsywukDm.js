import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiAntigravityCliLite - Lớp Google Antigravity AI CLI tinh gọn`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aiantigravityclilite`,children:`Lớp AiAntigravityCliLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Triển khai tinh gọn chuyên biệt của `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` để tương tác với Google Antigravity AI thông qua tiện ích dòng lệnh (`,(0,c.jsx)(t.code,{children:`agy`}),`).`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Triển khai này yêu cầu tiện ích `,(0,c.jsx)(t.code,{children:`agy`}),` CLI được cài đặt và có thể truy cập trong biến môi trường PATH của hệ thống.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`đặc-điểm-nổi-bật`,children:`Đặc điểm nổi bật`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi CLI trực tiếp`}),` — thực hiện các yêu cầu thông qua `,(0,c.jsx)(t.code,{children:`execFile`}),` (`,(0,c.jsx)(t.code,{children:`node:child_process`}),`) mà không cần vỏ hệ thống trung gian.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xử lý ngữ cảnh lớn`}),` — ghi dữ liệu lời nhắc lớn vào các tệp tạm thời bằng `,(0,c.jsx)(t.code,{children:`ApiTmp`}),`, vượt qua giới hạn độ dài tham số dòng lệnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động dọn dẹp tài nguyên`}),` — đảm bảo các tệp lời nhắc tạm thời được xóa ngay sau khi nhận kết quả hoặc khi gặp lỗi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chế độ YOLO`}),` — tự động áp dụng cờ `,(0,c.jsx)(t.code,{children:`--yolo`}),` và chỉ thị xuất mã nguồn trực tiếp mà không có hội thoại mở đầu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo `,(0,c.jsx)(t.code,{children:`AiAntigravityCliLite`}),` bằng cách truyền khóa API, mã mô hình và cấu hình tùy chọn qua hàm dựng.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — Khóa API (được truyền vào tiến trình CLI qua biến môi trường).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — Mã định danh mô hình cho Antigravity CLI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`config?: Record<string, any>`}),` — Bản ghi cấu hình tùy chọn.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiAntigravityCliLite } from '@dxtmisha/scripts'

const ai = new AiAntigravityCliLite('KHOA_API_CUA_BAN', 'gemini-3.7-flash')

// Tạo phản hồi
const response = await ai.generate('Phân tích kiến trúc của gói.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`tạo-nội-dung`,children:`Tạo nội dung`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — Phương thức thực thi chính. Biên dịch ngữ cảnh tích lũy vào các tệp tạm, chạy lệnh `,(0,c.jsx)(t.code,{children:`agy`}),` và trả về kết quả.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — Cập nhật khóa API.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — Chuyển đổi mã định danh mô hình đang hoạt động.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`xây-dựng-ngữ-cảnh`,children:`Xây dựng ngữ cảnh`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — Thiết lập tiền tố lời nhắc hệ thống cố định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — Thêm một đoạn văn bản vào ngữ cảnh tích lũy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — Xóa tiền tố lời nhắc cố định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — Xóa tất cả các phần văn bản đã tích lũy.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`giới-hạn`,children:`Giới hạn`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hình ảnh`}),` — các tệp hình ảnh đính kèm hiện bị bỏ qua trong chế độ thực thi CLI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Môi trường`}),` — yêu cầu tệp thực thi `,(0,c.jsx)(t.code,{children:`agy`}),` có trong PATH của hệ thống.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};