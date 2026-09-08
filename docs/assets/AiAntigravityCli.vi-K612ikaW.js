import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiAntigravityCli - Google Antigravity AI tự động cấu hình qua CLI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aiantigravitycli`,children:`Lớp AiAntigravityCli`}),`
`,(0,c.jsxs)(t.p,{children:[`Triển khai cấp cao để tương tác với Google Antigravity AI thông qua giao diện dòng lệnh (`,(0,c.jsx)(t.code,{children:`agy`}),`). Lớp `,(0,c.jsx)(t.code,{children:`AiAntigravityCli`}),` mở rộng từ `,(0,c.jsx)(t.code,{children:`AiAntigravityCliLite`}),` và đơn giản hóa quy trình bằng cách tự động tải khóa API và mã định danh mô hình từ cấu hình dự án (`,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`).`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[`Triển khai này yêu cầu tiện ích dòng lệnh `,(0,c.jsx)(t.code,{children:`agy`}),` đã được cài đặt và có thể truy cập trong biến môi trường PATH của hệ thống.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`đặc-điểm-nổi-bật`,children:`Đặc điểm nổi bật`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cấu hình tự động`}),` — không cần khởi tạo thủ công; các tham số được lấy trực tiếp từ cấu hình dự án (`,(0,c.jsx)(t.code,{children:`design.config.json`}),` / `,(0,c.jsx)(t.code,{children:`design.config.local.json`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thực thi CLI trực tiếp`}),` — gọi trực tiếp `,(0,c.jsx)(t.code,{children:`agy`}),` mà không qua vỏ hệ thống (shell) để thực thi an toàn và đáng tin cậy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý tệp tạm thời`}),` — tự động xử lý việc tạo và dọn dẹp các tệp lời nhắc tạm thời (`,(0,c.jsx)(t.code,{children:`ApiTmp`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kết quả ngắn gọn`}),` — áp dụng cờ `,(0,c.jsx)(t.code,{children:`--yolo`}),` và chỉ thị xuất kết quả thuần túy mà không có hội thoại mở đầu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiAntigravityCli`}),` sẵn sàng sử dụng mà không cần bất kỳ tham số nào trong hàm dựng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiAntigravityCli } from '@dxtmisha/scripts'

const ai = new AiAntigravityCli()

// Tạo phản hồi bằng các cài đặt của dự án
const response = await ai.generate('Tạo giao diện TypeScript cho component.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`tạo-nội-dung`,children:`Tạo nội dung`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — (Kế thừa) Phân tích dữ liệu đầu vào, quản lý tệp tạm và thực thi lệnh CLI `,(0,c.jsx)(t.code,{children:`agy`}),` để nhận kết quả.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — (Kế thừa) Cho phép ghi đè khóa API theo cách thủ công khi cần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — (Kế thừa) Chuyển đổi mã định danh mô hình đang hoạt động.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`xây-dựng-ngữ-cảnh`,children:`Xây dựng ngữ cảnh`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — (Kế thừa) Thiết lập tiền tố văn bản cố định (chỉ thị hệ thống).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — (Kế thừa) Thêm một phần văn bản vào yêu cầu tích lũy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — (Kế thừa) Xóa tiền tố lời nhắc cố định.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — (Kế thừa) Xóa tất cả các phần văn bản đã tích lũy.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`giới-hạn`,children:`Giới hạn`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ đa phương thức`}),` — triển khai CLI này hiện không hỗ trợ dữ liệu đầu vào là hình ảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Phụ thuộc hệ thống`}),` — yêu cầu công cụ dòng lệnh `,(0,c.jsx)(t.code,{children:`agy`}),` có sẵn trong biến môi trường PATH.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};