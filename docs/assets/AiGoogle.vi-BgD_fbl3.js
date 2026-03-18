import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(i){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/scripts/Classes/AiGoogle - Google Gemini AI tự động cấu hình"}),`
`,n.jsx(h.h1,{id:"lớp-aigoogle",children:"Lớp AiGoogle"}),`
`,n.jsxs(h.p,{children:["Một triển khai cấp cao về tích hợp Google Gemini AI. Lớp ",n.jsx(h.code,{children:"AiGoogle"})," mở rộng từ ",n.jsx(h.code,{children:"AiGoogleLite"})," và tự động khởi tạo với mã API và ID mô hình được chỉ định trong các tệp cấu hình của dự án."]}),`
`,n.jsx(h.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Khởi tạo không cần cấu hình"})," — tự động tải thông tin xác thực API và cài đặt mô hình từ môi trường dự án."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Sức mạnh từ Gemini"})," — cung cấp quyền truy cập vào các mô hình tạo nảy tiên tiến nhất của Google."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Độ tin cậy được kế thừa"})," — bao gồm tất cả các tính năng của ",n.jsx(h.code,{children:"AiGoogleLite"}),", chẳng hạn như hỗ trợ đa phương thức (văn bản + hình ảnh) và tích lũy các lời nhắc phức tạp."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Quy trình đơn giản hóa"})," — lý tưởng để sử dụng trong công cụ tài liệu của dự án khi không cần cấu hình thủ công."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Khác với ",n.jsx(h.code,{children:"AiGoogleLite"}),", lớp ",n.jsx(h.code,{children:"AiGoogle"})," không yêu cầu tham số hàm khởi tạo vì nó lấy các cài đặt từ ",n.jsx(h.code,{children:"getConfigAi()"}),"."]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { AiGoogle } from '@dxtmisha/scripts'

const ai = new AiGoogle()

// Tùy chọn thay đổi mô hình nếu cần
ai.setModel('gemini-1.5-pro')

// Tạo phản hồi
const response = await ai.generate('Tạo một mô tả ngắn gọn về dự án.')
`})}),`
`,n.jsx(h.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(h.h3,{id:"tạo-generation",children:"Tạo (Generation)"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"generate(contents: string): Promise<string>"})," — (Kế thừa) Kết hợp ngữ cảnh đã tích lũy và thực hiện yêu cầu tạo AI."]}),`
`]}),`
`,n.jsx(h.h3,{id:"cấu-hình",children:"Cấu hình"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"setKey(key: string): this"})," — (Kế thừa) Cập nhật mã API và khởi tạo lại ứng dụng khách nội bộ."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"setModel(model: string): this"})," — (Kế thừa) Chuyển đổi mô hình hoạt động."]}),`
`]}),`
`,n.jsx(h.h3,{id:"xây-dựng-ngữ-cảnh",children:"Xây dựng Ngữ cảnh"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"addPrompt(prompt: string): void"})," — (Kế thừa) Thêm tiền tố văn bản cố định."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"addContent(content: string): this"})," — (Kế thừa) Thêm một phần văn bản vào lời nhắc."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"addImage(image: AiImageItem): this"})," — (Kế thừa) Thêm một hình ảnh (base64) vào yêu cầu."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"resetPrompt(): void"})," — (Kế thừa) Xóa tiền tố cố định."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"resetContents(): this"})," — (Kế thừa) Xóa các phần văn bản đã tích lũy."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"resetImages(): this"})," — (Kế thừa) Xóa các hình ảnh đã tích lũy."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-kiểu-dữ-liệu",children:"Các kiểu dữ liệu"}),`
`,n.jsx(h.h3,{id:"aiimageitem",children:"AiImageItem"}),`
`,n.jsx(h.p,{children:"Đại diện cho một hình ảnh cho các yêu cầu đa phương thức."}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"mime: string"})," — loại MIME của hình ảnh."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"base64: string"})," — dữ liệu hình ảnh ở định dạng base64."]}),`
`]}),`
`,n.jsx(h.h3,{id:"aiimagelist",children:"AiImageList"}),`
`,n.jsxs(h.p,{children:["Một mảng các ",n.jsx(h.code,{children:"AiImageItem"}),"."]})]})}function x(i={}){const{wrapper:h}={...e(),...i.components};return h?n.jsx(h,{...i,children:n.jsx(c,{...i})}):c(i)}export{x as default};
