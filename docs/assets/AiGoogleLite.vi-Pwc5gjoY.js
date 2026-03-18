import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(i){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/scripts/Classes/AiGoogleLite - Tích hợp Google Gemini AI"}),`
`,n.jsx(h.h1,{id:"lớp-aigooglelite",children:"Lớp AiGoogleLite"}),`
`,n.jsxs(h.p,{children:["Một triển khai cụ thể của lớp ",n.jsx(h.code,{children:"AiAbstract"})," cho Google Gemini AI (thông qua ứng dụng khách ",n.jsx(h.code,{children:"GoogleGenAI"}),"). Lớp này cung cấp một cách tinh gọn để tương tác với các mô hình Gemini, xử lý xác thực, tích lũy ngữ cảnh và tạo nội dung."]}),`
`,n.jsx(h.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tích hợp Google Gemini"})," — kết nối liền mạch với các mô hình AI tạo nảy của Google."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Hỗ trợ Đa phương thức"})," — hỗ trợ cả đầu vào văn bản và hình ảnh cho các yêu cầu tạo."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tích lũy Ngữ cảnh"})," — kế thừa cơ chế mạnh mẽ để xây dựng các lời nhắc phức tạp, bao gồm hình ảnh và văn bản nhiều phần."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Quy trình Thống nhất"})," — cung cấp một giao diện nhất quán để lựa chọn mô hình và tạo, trừu tượng hóa các chi tiết cấp thấp của ứng dụng khách."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Khởi tạo ",n.jsx(h.code,{children:"AiGoogleLite"})," bằng cách cung cấp mã API của bạn và ID mô hình mục tiêu."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"key: string"})," — mã API Google AI của bạn."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"model: string"})," — ID của mô hình Gemini sẽ sử dụng (ví dụ: ",n.jsx(h.code,{children:"'gemini-1.5-flash'"}),")."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { AiGoogleLite } from '@dxtmisha/scripts'

const ai = new AiGoogleLite('YOUR_API_KEY', 'gemini-1.5-flash')

// Thiết lập tiền tố lời nhắc hệ thống tùy chọn
ai.addPrompt('Bạn là một người viết tài liệu kỹ thuật.')

// Tạo phản hồi
const response = await ai.generate('Giải thích về lớp AiGoogleLite.')
`})}),`
`,n.jsx(h.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(h.h3,{id:"tạo-generation",children:"Tạo (Generation)"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"generate(contents: string): Promise<string>"})," — điểm khởi đầu chính để tương tác với AI. Nó kết hợp tất cả ngữ cảnh đã tích lũy (tiền tố, hình ảnh, các phần văn bản) và thực hiện yêu cầu."]}),`
`]}),`
`,n.jsx(h.h3,{id:"cấu-hình",children:"Cấu hình"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"setKey(key: string): this"})," — cập nhật mã API và khởi tạo lại ứng dụng khách nội bộ."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"setModel(model: string): this"})," — chuyển đổi mô hình hoạt động cho các yêu cầu tiếp theo."]}),`
`]}),`
`,n.jsx(h.h3,{id:"xây-dựng-ngữ-cảnh",children:"Xây dựng Ngữ cảnh"}),`
`,n.jsxs(h.p,{children:["Các phương thức này cho phép bạn tích lũy dữ liệu trước khi gọi ",n.jsx(h.code,{children:"generate()"}),":"]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"addPrompt(prompt: string): void"})," — thêm tiền tố văn bản cố định (hữu ích cho các hướng dẫn hệ thống)."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"addContent(content: string): this"})," — thêm một phần văn bản vào lời nhắc."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"addImage(image: AiImageItem): this"})," — thêm một hình ảnh (base64) vào yêu cầu."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"resetPrompt(): void"})," — xóa tiền tố cố định."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"resetContents(): this"})," — xóa tất cả các phần văn bản đã tích lũy."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"resetImages(): this"})," — xóa tất cả các hình ảnh đã tích lũy."]}),`
`]}),`
`,n.jsx(h.h3,{id:"thông-tin",children:"Thông tin"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getContents(): string[]"})," — trả về danh sách các phần văn bản đã tích lũy."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getImages(): AiImageList"})," — trả về danh sách các hình ảnh đã tích lũy."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-kiểu-dữ-liệu",children:"Các kiểu dữ liệu"}),`
`,n.jsx(h.h3,{id:"aiimageitem",children:"AiImageItem"}),`
`,n.jsx(h.p,{children:"Đại diện cho một hình ảnh cho các yêu cầu đa phương thức."}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"mime: string"})," — loại MIME của hình ảnh (ví dụ: ",n.jsx(h.code,{children:"'image/png'"}),")."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"base64: string"})," — dữ liệu hình ảnh ở định dạng base64."]}),`
`]}),`
`,n.jsx(h.h3,{id:"aiimagelist",children:"AiImageList"}),`
`,n.jsxs(h.p,{children:["Một mảng các ",n.jsx(h.code,{children:"AiImageItem"}),"."]})]})}function x(i={}){const{wrapper:h}={...e(),...i.components};return h?n.jsx(h,{...i,children:n.jsx(c,{...i})}):c(i)}export{x as default};
