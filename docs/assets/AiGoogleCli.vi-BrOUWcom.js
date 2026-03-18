import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(i){const h={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/AiGoogleCli - Google Gemini AI tự động cấu hình qua CLI"}),`
`,n.jsx(h.h1,{id:"lớp-aigooglecli",children:"Lớp AiGoogleCli"}),`
`,n.jsxs(h.p,{children:["Một triển khai cấp cao để tương tác với Google Gemini AI thông qua giao diện dòng lệnh (CLI) của hệ thống. Lớp ",n.jsx(h.code,{children:"AiGoogleCli"})," mở rộng từ ",n.jsx(h.code,{children:"AiGoogleCliLite"})," và đơn giản hóa quy trình bằng cách tự động tải mã API và mã định danh mô hình được yêu cầu từ cấu hình của dự án (",n.jsx(h.code,{children:"getConfigAi()"}),")."]}),`
`,n.jsxs(h.blockquote,{children:[`
`,n.jsxs(h.p,{children:["Triển khai này yêu cầu tiện ích CLI ",n.jsx(h.code,{children:"gemini"})," phải được cài đặt và có thể truy cập được trong đường dẫn hệ thống."]}),`
`]}),`
`,n.jsx(h.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Cấu hình Tự động"})," — không cần khởi tạo thủ công mã khoá hoặc mô hình; nó lấy mọi thứ từ môi trường dự án."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Thực thi dựa trên CLI"})," — tận dụng các lệnh shell để thực hiện các yêu cầu AI, phù hợp cho các môi trường xây dựng cụ thể."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Quản lý Tệp Tạm thời"})," — tự động xử lý việc tạo và dọn dẹp các tệp lời nhắc tạm thời (",n.jsx(h.code,{children:"./ai-tmp"}),")."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Phản hồi Ngắn gọn"})," — sử dụng các cờ CLI được tối ưu hóa để đảm bảo AI trả về câu trả lời trực tiếp mà không có phần dẫn dắt rườm rà."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Lớp ",n.jsx(h.code,{children:"AiGoogleCli"})," đã sẵn sàng để sử dụng mà không cần bất kỳ đối số hàm khởi tạo nào."]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { AiGoogleCli } from '@dxtmisha/scripts'

const ai = new AiGoogleCli()

// Tạo phản hồi bằng các cài đặt được xác định trong dự án
const response = await ai.generate('Tóm tắt các thay đổi trong dự án.')
`})}),`
`,n.jsx(h.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(h.h3,{id:"tạo-generation",children:"Tạo (Generation)"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"generate(contents: string): Promise<string>"})," — (Kế thừa) Phân tích đầu vào, quản lý các tệp tạm thời và thực thi lệnh CLI để lấy phản hồi."]}),`
`]}),`
`,n.jsx(h.h3,{id:"cấu-hình",children:"Cấu hình"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"setKey(key: string): this"})," — (Kế thừa) Ghi đè mã API thủ công nếu cần thiết."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"setModel(model: string): this"})," — (Kế thừa) Chuyển đổi sang ID mô hình khác."]}),`
`]}),`
`,n.jsx(h.h3,{id:"xây-dựng-ngữ-cảnh",children:"Xây dựng Ngữ cảnh"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"addPrompt(prompt: string): void"})," — (Kế thừa) Thiết lập tiền tố văn bản cố định cho các hướng dẫn hệ thống."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"addContent(content: string): this"})," — (Kế thừa) Thêm một phần văn bản vào yêu cầu tích lũy."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"resetPrompt(): void"})," — (Kế thừa) Xóa tiền tố cố định."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"resetContents(): this"})," — (Kế thừa) Xóa tất cả các phần văn bản đã tích lũy."]}),`
`]}),`
`,n.jsx(h.h2,{id:"hạn-chế",children:"Hạn chế"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Hỗ trợ Đa phương thức"})," — giống như lớp cơ sở của nó, triển khai này hiện không hỗ trợ đầu vào hình ảnh."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Phụ thuộc Hệ thống"})," — yêu cầu công cụ CLI ",n.jsx(h.code,{children:"gemini"})," và các quyền hệ thống tệp phù hợp cho dữ liệu tạm thời."]}),`
`]})]})}function x(i={}){const{wrapper:h}={...t(),...i.components};return h?n.jsx(h,{...i,children:n.jsx(c,{...i})}):c(i)}export{x as default};
