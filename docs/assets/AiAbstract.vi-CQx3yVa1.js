import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/AiAbstract - Lớp Cơ sở AI Trừu tượng`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aiabstract`,children:`Lớp AiAbstract`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp cơ sở trừu tượng được thiết kế để cung cấp các cơ chế chung cho các tích hợp AI khác nhau. Nó xử lý việc tích lũy lời nhắc (prompt accumulation), lựa chọn mô hình và cung cấp một quy trình làm việc thống nhất để nhận phản hồi từ các nhà cung cấp AI khác nhau.`}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích lũy Lời nhắc`}),` — các cơ chế để thu thập và soạn thảo ngữ cảnh lời nhắc trước khi gửi đến mô hình.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý Mô hình`}),` — dễ dàng chuyển đổi giữa các mô hình AI khác nhau trong cùng một instance.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quy trình Thống nhất`}),` — phương thức `,(0,c.jsx)(n.code,{children:`generate`}),` chuẩn hóa quy trình nhận phản hồi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ Hình ảnh & Nội dung`}),` — các phương thức tích hợp để tích lũy hình ảnh và nội dung văn bản bổ sung cho các mô hình đa phương thức.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`API dạng Chuỗi (Chainable)`}),` — hầu hết các phương thức cấu hình đều hỗ trợ chuỗi lệnh để mang lại trải nghiệm lập trình mượt mà hơn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điểm mở rộng (Hooks)`}),` — các điểm mở rộng rõ ràng (`,(0,c.jsx)(n.code,{children:`init`}),`, `,(0,c.jsx)(n.code,{children:`response`}),`, `,(0,c.jsx)(n.code,{children:`toImages`}),`, `,(0,c.jsx)(n.code,{children:`toContents`}),`) cho các triển khai dịch vụ AI cụ thể (ví dụ: OpenAI, Anthropic).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Vì `,(0,c.jsx)(n.code,{children:`AiAbstract`}),` là một lớp trừu tượng, nó không thể được khởi tạo trực tiếp. Bạn nên sử dụng một triển khai cụ thể (ví dụ: `,(0,c.jsx)(n.code,{children:`AiOpenAI`}),` hoặc `,(0,c.jsx)(n.code,{children:`AiAnthropic`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — API key cho dịch vụ AI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`model: string`}),` — Định danh mô hình ban đầu (ví dụ: 'gpt-4o').`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Ví dụ về cách sử dụng một triển khai cụ thể
const ai = new AiOpenAI(process.env.OPENAI_API_KEY, 'gpt-4o')

// Thêm ngữ cảnh
ai.addPrompt('Bạn là một trợ lý hữu ích.')
  .addContent('Giải thích vật lý lượng tử bằng các thuật ngữ đơn giản.')

// Tạo phản hồi
const response = await ai.generate('Tập trung vào tính lưỡng tính sóng-hạt.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getImages(): AiImageList`}),` — Trả về danh sách các hình ảnh đã tích lũy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getContents(): string[]`}),` — Trả về danh sách các nội dung bổ sung đã tích lũy.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`cấu-hình-setters`,children:`Cấu hình (Setters)`}),`
`,(0,c.jsx)(n.p,{children:`Các phương thức trong nhóm này hỗ trợ chuỗi lệnh.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setKey(key: string): this`}),` — Thiết lập hoặc thay đổi API key. Khởi tạo lại client nếu nó đã hoạt động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`setModel(model: string): this`}),` — Thay đổi mô hình hiện tại để tạo phản hồi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addPrompt(prompt: string): void`}),` — Thêm một dòng mới vào bộ đệm lời nhắc cố định.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addImage(image: AiImageItem): this`}),` — Thêm một hình ảnh vào danh sách tích lũy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`addContent(content: string): this`}),` — Thêm nội dung văn bản vào danh sách tích lũy.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`generate(contents: string): Promise<string>`}),` — Phương thức chính để kích hoạt việc tạo phản hồi từ AI. Nó kết hợp lời nhắc đã tích lũy với chuỗi văn bản được cung cấp, sau đó gọi triển khai cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetImages(): this`}),` — Xóa danh sách hình ảnh đã tích lũy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetContents(): this`}),` — Xóa danh sách nội dung đã tích lũy.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`resetPrompt(): void`}),` — Xóa tiền tố lời nhắc cố định.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-trừu-tượng-để-triển-khai`,children:`Các phương thức trừu tượng (Để triển khai)`}),`
`,(0,c.jsxs)(n.p,{children:[`Khi kế thừa `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`, bạn phải triển khai các phương thức protected sau:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Xử lý khởi tạo client, xác thực và thiết lập phương thức truyền tải.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toImages(): void`}),` — Logic để chuyển đổi các hình ảnh đã tích lũy sang định dạng cụ thể của nhà cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toContents(): void`}),` — Logic để chuyển đổi các nội dung đã tích lũy sang định dạng cụ thể của nhà cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Logic cốt lõi để gọi mô hình AI cụ thể và trả về kết quả dưới dạng văn bản.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`aiimagelist`,children:`AiImageList`}),`
`,(0,c.jsxs)(n.p,{children:[`Một mảng các đối tượng `,(0,c.jsx)(n.code,{children:`AiImageItem`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`type AiImageList = AiImageItem[]
`})}),`
`,(0,c.jsx)(n.h3,{id:`aiimageitem`,children:`AiImageItem`}),`
`,(0,c.jsx)(n.p,{children:`Đại diện cho một hình ảnh ở định dạng base64.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mime: string`}),` — Kiểu MIME của hình ảnh (ví dụ: 'image/png').`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`base64: string`}),` — Dữ liệu hình ảnh được mã hóa base64.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`type AiImageItem = {
  mime: string
  base64: string
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};