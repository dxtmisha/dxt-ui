import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/AiAbstract - Lớp Cơ sở AI Trừu tượng"}),`
`,n.jsx(h.h1,{id:"lớp-aiabstract",children:"Lớp AiAbstract"}),`
`,n.jsx(h.p,{children:"Một lớp cơ sở trừu tượng được thiết kế để cung cấp các cơ chế chung cho các tích hợp AI khác nhau. Nó xử lý việc tích lũy lời nhắc (prompt accumulation), lựa chọn mô hình và cung cấp một quy trình làm việc thống nhất để nhận phản hồi từ các nhà cung cấp AI khác nhau."}),`
`,n.jsx(h.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Tích lũy Lời nhắc"})," — các cơ chế để thu thập và soạn thảo ngữ cảnh lời nhắc trước khi gửi đến mô hình."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Quản lý Mô hình"})," — dễ dàng chuyển đổi giữa các mô hình AI khác nhau trong cùng một instance."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Quy trình Thống nhất"})," — phương thức ",n.jsx(h.code,{children:"generate"})," chuẩn hóa quy trình nhận phản hồi."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Hỗ trợ Hình ảnh & Nội dung"})," — các phương thức tích hợp để tích lũy hình ảnh và nội dung văn bản bổ sung cho các mô hình đa phương thức."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"API dạng Chuỗi (Chainable)"})," — hầu hết các phương thức cấu hình đều hỗ trợ chuỗi lệnh để mang lại trải nghiệm lập trình mượt mà hơn."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Điểm mở rộng (Hooks)"})," — các điểm mở rộng rõ ràng (",n.jsx(h.code,{children:"init"}),", ",n.jsx(h.code,{children:"response"}),", ",n.jsx(h.code,{children:"toImages"}),", ",n.jsx(h.code,{children:"toContents"}),") cho các triển khai dịch vụ AI cụ thể (ví dụ: OpenAI, Anthropic)."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Vì ",n.jsx(h.code,{children:"AiAbstract"})," là một lớp trừu tượng, nó không thể được khởi tạo trực tiếp. Bạn nên sử dụng một triển khai cụ thể (ví dụ: ",n.jsx(h.code,{children:"AiOpenAI"})," hoặc ",n.jsx(h.code,{children:"AiAnthropic"}),")."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số khởi tạo:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"key: string"})," — API key cho dịch vụ AI."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"model: string"})," — Định danh mô hình ban đầu (ví dụ: 'gpt-4o')."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`// Ví dụ về cách sử dụng một triển khai cụ thể
const ai = new AiOpenAI(process.env.OPENAI_API_KEY, 'gpt-4o')

// Thêm ngữ cảnh
ai.addPrompt('Bạn là một trợ lý hữu ích.')
  .addContent('Giải thích vật lý lượng tử bằng các thuật ngữ đơn giản.')

// Tạo phản hồi
const response = await ai.generate('Tập trung vào tính lưỡng tính sóng-hạt.')
`})}),`
`,n.jsx(h.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(h.h3,{id:"thông-tin",children:"Thông tin"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getImages(): AiImageList"})," — Trả về danh sách các hình ảnh đã tích lũy."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"getContents(): string[]"})," — Trả về danh sách các nội dung bổ sung đã tích lũy."]}),`
`]}),`
`,n.jsx(h.h3,{id:"cấu-hình-setters",children:"Cấu hình (Setters)"}),`
`,n.jsx(h.p,{children:"Các phương thức trong nhóm này hỗ trợ chuỗi lệnh."}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"setKey(key: string): this"})," — Thiết lập hoặc thay đổi API key. Khởi tạo lại client nếu nó đã hoạt động."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"setModel(model: string): this"})," — Thay đổi mô hình hiện tại để tạo phản hồi."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"addPrompt(prompt: string): void"})," — Thêm một dòng mới vào bộ đệm lời nhắc cố định."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"addImage(image: AiImageItem): this"})," — Thêm một hình ảnh vào danh sách tích lũy."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"addContent(content: string): this"})," — Thêm nội dung văn bản vào danh sách tích lũy."]}),`
`]}),`
`,n.jsx(h.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"generate(contents: string): Promise<string>"})," — Phương thức chính để kích hoạt việc tạo phản hồi từ AI. Nó kết hợp lời nhắc đã tích lũy với chuỗi văn bản được cung cấp, sau đó gọi triển khai cụ thể."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"resetImages(): this"})," — Xóa danh sách hình ảnh đã tích lũy."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"resetContents(): this"})," — Xóa danh sách nội dung đã tích lũy."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"resetPrompt(): void"})," — Xóa tiền tố lời nhắc cố định."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-phương-thức-trừu-tượng-để-triển-khai",children:"Các phương thức trừu tượng (Để triển khai)"}),`
`,n.jsxs(h.p,{children:["Khi kế thừa ",n.jsx(h.code,{children:"AiAbstract"}),", bạn phải triển khai các phương thức protected sau:"]}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"init(): void"})," — Xử lý khởi tạo client, xác thực và thiết lập phương thức truyền tải."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"toImages(): void"})," — Logic để chuyển đổi các hình ảnh đã tích lũy sang định dạng cụ thể của nhà cung cấp."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"toContents(): void"})," — Logic để chuyển đổi các nội dung đã tích lũy sang định dạng cụ thể của nhà cung cấp."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"response(model: string, contents: string): Promise<string>"})," — Logic cốt lõi để gọi mô hình AI cụ thể và trả về kết quả dưới dạng văn bản."]}),`
`]}),`
`,n.jsx(h.h2,{id:"các-kiểu-dữ-liệu",children:"Các kiểu dữ liệu"}),`
`,n.jsx(h.h3,{id:"aiimagelist",children:"AiImageList"}),`
`,n.jsxs(h.p,{children:["Một mảng các đối tượng ",n.jsx(h.code,{children:"AiImageItem"}),"."]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`type AiImageList = AiImageItem[]
`})}),`
`,n.jsx(h.h3,{id:"aiimageitem",children:"AiImageItem"}),`
`,n.jsx(h.p,{children:"Đại diện cho một hình ảnh ở định dạng base64."}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"mime: string"})," — Kiểu MIME của hình ảnh (ví dụ: 'image/png')."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"base64: string"})," — Dữ liệu hình ảnh được mã hóa base64."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`type AiImageItem = {
  mime: string
  base64: string
}
`})})]})}function a(c={}){const{wrapper:h}={...t(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(i,{...c})}):i(c)}export{a as default};
