import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/AiGoogleCliLite - Google Gemini AI qua CLI`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aigoogleclilite`,children:`Lớp AiGoogleCliLite`}),`
`,(0,c.jsxs)(n.p,{children:[`Một triển khai chuyên biệt của lớp `,(0,c.jsx)(n.code,{children:`AiAbstract`}),` tương tác với Google Gemini AI thông qua giao diện dòng lệnh (CLI) của hệ thống. Cách tiếp cận này hữu ích trong các môi trường mà việc tích hợp trực tiếp SDK không được ưu tiên hoặc khi các công cụ CLI hiện có được tận dụng.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsxs)(n.p,{children:[`Triển khai này yêu cầu tiện ích CLI `,(0,c.jsx)(n.code,{children:`gemini`}),` phải được cài đặt và có thể truy cập được trong đường dẫn hệ thống.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quy trình làm việc qua CLI`}),` — thực hiện các yêu cầu bằng cách xây dựng và chạy các lệnh shell.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý Lời nhắc Lớn`}),` — tự động tạo các tệp tạm thời để chuyển nội dung lời nhắc lớn cho CLI, tránh các giới hạn về độ dài dòng lệnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi Sạch sẽ`}),` — quản lý bộ lưu trữ tạm thời của riêng nó (`,(0,c.jsx)(n.code,{children:`./ai-tmp`}),`) và thực hiện dọn dẹp sau mỗi yêu cầu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chế độ YOLO`}),` — thực thi các lệnh với các cờ đầu ra nghiêm ngặt để đảm bảo kết quả ngắn gọn và không có các nội dung thừa.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo `,(0,c.jsx)(n.code,{children:`AiGoogleCliLite`}),` bằng mã API và mô hình dự định của bạn.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — mã API Google AI của bạn (được chuyển đến CLI qua các biến môi trường).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — mã định danh mô hình cho Gemini CLI.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiGoogleCliLite } from '@dxtmisha/scripts'

const ai = new AiGoogleCliLite('YOUR_API_KEY', 'gemini-1.5-flash')

// Tạo phản hồi
const response = await ai.generate('Kiểm tra đoạn mã này.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`tạo-generation`,children:`Tạo (Generation)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`generate(contents: string): Promise<string>`}),` — phương thức chính để tương tác. Nó biên dịch ngữ cảnh vào các tệp tạm thời, thực thi lệnh CLI và trả về đầu ra đã được cắt tỉa.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình`,children:`Cấu hình`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKey(key: string): this`}),` — cập nhật mã API cho các cuộc gọi CLI tiếp theo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setModel(model: string): this`}),` — chuyển đổi ID mô hình hoạt động.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`xây-dựng-ngữ-cảnh`,children:`Xây dựng Ngữ cảnh`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addPrompt(prompt: string): void`}),` — thiết lập tiền tố văn bản cố định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addContent(content: string): this`}),` — thêm một phần văn bản vào lời nhắc tích lũy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetPrompt(): void`}),` — xóa tiền tố cố định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetContents(): this`}),` — xóa tất cả các phần văn bản đã tích lũy.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`hạn-chế`,children:`Hạn chế`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hình ảnh`}),` — hiện tại, triển khai CLI không hỗ trợ truyền hình ảnh (`,(0,c.jsx)(n.code,{children:`addImage`}),` sẽ không có tác dụng đối với việc tạo).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Môi trường`}),` — dựa trên tính khả dụng của hàm `,(0,c.jsx)(n.code,{children:`exec`}),` và hệ thống tệp cho lưu trữ tạm thời.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};