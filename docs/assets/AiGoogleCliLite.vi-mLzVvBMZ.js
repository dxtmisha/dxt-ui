import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(h){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/AiGoogleCliLite - Google Gemini AI qua CLI"}),`
`,n.jsx(i.h1,{id:"lớp-aigoogleclilite",children:"Lớp AiGoogleCliLite"}),`
`,n.jsxs(i.p,{children:["Một triển khai chuyên biệt của lớp ",n.jsx(i.code,{children:"AiAbstract"})," tương tác với Google Gemini AI thông qua giao diện dòng lệnh (CLI) của hệ thống. Cách tiếp cận này hữu ích trong các môi trường mà việc tích hợp trực tiếp SDK không được ưu tiên hoặc khi các công cụ CLI hiện có được tận dụng."]}),`
`,n.jsxs(i.blockquote,{children:[`
`,n.jsxs(i.p,{children:["Triển khai này yêu cầu tiện ích CLI ",n.jsx(i.code,{children:"gemini"})," phải được cài đặt và có thể truy cập được trong đường dẫn hệ thống."]}),`
`]}),`
`,n.jsx(i.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Quy trình làm việc qua CLI"})," — thực hiện các yêu cầu bằng cách xây dựng và chạy các lệnh shell."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Xử lý Lời nhắc Lớn"})," — tự động tạo các tệp tạm thời để chuyển nội dung lời nhắc lớn cho CLI, tránh các giới hạn về độ dài dòng lệnh."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Thực thi Sạch sẽ"})," — quản lý bộ lưu trữ tạm thời của riêng nó (",n.jsx(i.code,{children:"./ai-tmp"}),") và thực hiện dọn dẹp sau mỗi yêu cầu."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Chế độ YOLO"})," — thực thi các lệnh với các cờ đầu ra nghiêm ngặt để đảm bảo kết quả ngắn gọn và không có các nội dung thừa."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Khởi tạo ",n.jsx(i.code,{children:"AiGoogleCliLite"})," bằng mã API và mô hình dự định của bạn."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"key: string"})," — mã API Google AI của bạn (được chuyển đến CLI qua các biến môi trường)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"model: string"})," — mã định danh mô hình cho Gemini CLI."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { AiGoogleCliLite } from '@dxtmisha/scripts'

const ai = new AiGoogleCliLite('YOUR_API_KEY', 'gemini-1.5-flash')

// Tạo phản hồi
const response = await ai.generate('Kiểm tra đoạn mã này.')
`})}),`
`,n.jsx(i.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(i.h3,{id:"tạo-generation",children:"Tạo (Generation)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"generate(contents: string): Promise<string>"})," — phương thức chính để tương tác. Nó biên dịch ngữ cảnh vào các tệp tạm thời, thực thi lệnh CLI và trả về đầu ra đã được cắt tỉa."]}),`
`]}),`
`,n.jsx(i.h3,{id:"cấu-hình",children:"Cấu hình"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"setKey(key: string): this"})," — cập nhật mã API cho các cuộc gọi CLI tiếp theo."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"setModel(model: string): this"})," — chuyển đổi ID mô hình hoạt động."]}),`
`]}),`
`,n.jsx(i.h3,{id:"xây-dựng-ngữ-cảnh",children:"Xây dựng Ngữ cảnh"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"addPrompt(prompt: string): void"})," — thiết lập tiền tố văn bản cố định."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"addContent(content: string): this"})," — thêm một phần văn bản vào lời nhắc tích lũy."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"resetPrompt(): void"})," — xóa tiền tố cố định."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"resetContents(): this"})," — xóa tất cả các phần văn bản đã tích lũy."]}),`
`]}),`
`,n.jsx(i.h2,{id:"hạn-chế",children:"Hạn chế"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Hình ảnh"})," — hiện tại, triển khai CLI không hỗ trợ truyền hình ảnh (",n.jsx(i.code,{children:"addImage"})," sẽ không có tác dụng đối với việc tạo)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Môi trường"})," — dựa trên tính khả dụng của hàm ",n.jsx(i.code,{children:"exec"})," và hệ thống tệp cho lưu trữ tạm thời."]}),`
`]})]})}function x(h={}){const{wrapper:i}={...t(),...h.components};return i?n.jsx(i,{...h,children:n.jsx(c,{...h})}):c(h)}export{x as default};
