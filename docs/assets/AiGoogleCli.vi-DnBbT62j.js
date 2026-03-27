import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/AiGoogleCli - Google Gemini AI tự động cấu hình qua CLI`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aigooglecli`,children:`Lớp AiGoogleCli`}),`
`,(0,c.jsxs)(n.p,{children:[`Một triển khai cấp cao để tương tác với Google Gemini AI thông qua giao diện dòng lệnh (CLI) của hệ thống. Lớp `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),` mở rộng từ `,(0,c.jsx)(n.code,{children:`AiGoogleCliLite`}),` và đơn giản hóa quy trình bằng cách tự động tải mã API và mã định danh mô hình được yêu cầu từ cấu hình của dự án (`,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`).`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Triển khai này yêu cầu tiện ích CLI `,(0,c.jsx)(n.code,{children:`gemini`}),` phải được cài đặt và có thể truy cập được trong đường dẫn hệ thống.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình Tự động`}),` — không cần khởi tạo thủ công mã khoá hoặc mô hình; nó lấy mọi thứ từ môi trường dự án.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi dựa trên CLI`}),` — tận dụng các lệnh shell để thực hiện các yêu cầu AI, phù hợp cho các môi trường xây dựng cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý Tệp Tạm thời`}),` — tự động xử lý việc tạo và dọn dẹp các tệp lời nhắc tạm thời (`,(0,c.jsx)(n.code,{children:`./ai-tmp`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phản hồi Ngắn gọn`}),` — sử dụng các cờ CLI được tối ưu hóa để đảm bảo AI trả về câu trả lời trực tiếp mà không có phần dẫn dắt rườm rà.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`AiGoogleCli`}),` đã sẵn sàng để sử dụng mà không cần bất kỳ đối số hàm khởi tạo nào.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiGoogleCli } from '@dxtmisha/scripts'

const ai = new AiGoogleCli()

// Tạo phản hồi bằng các cài đặt được xác định trong dự án
const response = await ai.generate('Tóm tắt các thay đổi trong dự án.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`tạo-generation`,children:`Tạo (Generation)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`generate(contents: string): Promise<string>`}),` — (Kế thừa) Phân tích đầu vào, quản lý các tệp tạm thời và thực thi lệnh CLI để lấy phản hồi.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKey(key: string): this`}),` — (Kế thừa) Ghi đè mã API thủ công nếu cần thiết.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setModel(model: string): this`}),` — (Kế thừa) Chuyển đổi sang ID mô hình khác.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`xây-dựng-ngữ-cảnh`,children:`Xây dựng Ngữ cảnh`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addPrompt(prompt: string): void`}),` — (Kế thừa) Thiết lập tiền tố văn bản cố định cho các hướng dẫn hệ thống.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addContent(content: string): this`}),` — (Kế thừa) Thêm một phần văn bản vào yêu cầu tích lũy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetPrompt(): void`}),` — (Kế thừa) Xóa tiền tố cố định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetContents(): this`}),` — (Kế thừa) Xóa tất cả các phần văn bản đã tích lũy.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`hạn-chế`,children:`Hạn chế`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ Đa phương thức`}),` — giống như lớp cơ sở của nó, triển khai này hiện không hỗ trợ đầu vào hình ảnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phụ thuộc Hệ thống`}),` — yêu cầu công cụ CLI `,(0,c.jsx)(n.code,{children:`gemini`}),` và các quyền hệ thống tệp phù hợp cho dữ liệu tạm thời.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};