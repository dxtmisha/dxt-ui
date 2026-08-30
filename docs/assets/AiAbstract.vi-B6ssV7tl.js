import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiAbstract - Lớp Cơ sở AI Trừu tượng`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aiabstract`,children:`Lớp AiAbstract`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp cơ sở trừu tượng được thiết kế để cung cấp các cơ chế chung cho các tích hợp AI khác nhau. Nó xử lý việc tích lũy lời nhắc (prompt accumulation), lựa chọn mô hình và cung cấp một quy trình làm việc thống nhất để nhận phản hồi từ các nhà cung cấp AI khác nhau.`}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích lũy Lời nhắc`}),` — các cơ chế để thu thập và soạn thảo ngữ cảnh lời nhắc trước khi gửi đến mô hình.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý Mô hình`}),` — dễ dàng chuyển đổi giữa các mô hình AI khác nhau trong cùng một instance.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quy trình Thống nhất`}),` — phương thức `,(0,c.jsx)(t.code,{children:`generate`}),` chuẩn hóa quy trình nhận phản hồi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ Hình ảnh & Nội dung`}),` — các phương thức tích hợp để tích lũy hình ảnh và nội dung văn bản bổ sung cho các mô hình đa phương thức.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`API dạng Chuỗi (Chainable)`}),` — hầu hết các phương thức cấu hình đều hỗ trợ chuỗi lệnh để mang lại trải nghiệm lập trình mượt mà hơn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Điểm mở rộng (Hooks)`}),` — các điểm mở rộng rõ ràng (`,(0,c.jsx)(t.code,{children:`init`}),`, `,(0,c.jsx)(t.code,{children:`response`}),`, `,(0,c.jsx)(t.code,{children:`toImages`}),`, `,(0,c.jsx)(t.code,{children:`toContents`}),`) cho các triển khai dịch vụ AI cụ thể (ví dụ: OpenAI, Anthropic).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Vì `,(0,c.jsx)(t.code,{children:`AiAbstract`}),` là một lớp trừu tượng, nó không thể được khởi tạo trực tiếp. Bạn nên sử dụng một triển khai cụ thể (ví dụ: `,(0,c.jsx)(t.code,{children:`AiOpenAI`}),` hoặc `,(0,c.jsx)(t.code,{children:`AiAnthropic`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — Khóa API cho dịch vụ AI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — Mã định danh mô hình ban đầu (ví dụ: 'gpt-4o').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`config: Record<string, any>`}),` — Đối tượng cấu hình tùy chọn (mặc định `,(0,c.jsx)(t.code,{children:`{}`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`// Ví dụ sử dụng một triển khai cụ thể
const ai = new AiOpenAI(process.env.OPENAI_API_KEY, 'gpt-4o')

// Thêm ngữ cảnh
ai.addPrompt('Bạn là một trợ lý hữu ích.')
  .addContent('Giải thích vật lý lượng tử bằng những thuật ngữ đơn giản.')

// Tạo phản hồi
const response = await ai.generate('Tập trung vào tính lưỡng dụng sóng hạt.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getImages(): AiImageList`}),` — Trả về danh sách hình ảnh đã tích lũy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getContents(): string[]`}),` — Trả về danh sách nội dung bổ sung đã tích lũy.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`cấu-hình-setters`,children:`Cấu hình (Setters)`}),`
`,(0,c.jsx)(t.p,{children:`Các phương thức trong nhóm này hỗ trợ chuỗi lệnh (chaining).`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setKey(key: string): this`}),` — Đặt hoặc chuyển đổi khóa API. Khởi tạo lại client nếu nó đang hoạt động.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setModel(model: string): this`}),` — Chuyển đổi mô hình hiện tại để tạo phản hồi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`setConfig(config: Record<string, any>): this`}),` — Đặt hoặc cập nhật đối tượng cấu hình.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addPrompt(prompt: string): void`}),` — Nối thêm một dòng mới vào bộ đệm prompt liên tục.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addImage(image: AiImageItem): this`}),` — Thêm hình ảnh vào danh sách tích lũy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`addContent(content: string): this`}),` — Thêm nội dung văn bản vào danh sách tích lũy.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`generate(contents: string): Promise<string>`}),` — Phương thức chính để kích hoạt việc tạo phản hồi từ AI. Nó kết hợp lời nhắc đã tích lũy với chuỗi văn bản được cung cấp, sau đó gọi triển khai cụ thể.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetImages(): this`}),` — Xóa danh sách hình ảnh đã tích lũy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetContents(): this`}),` — Xóa danh sách nội dung đã tích lũy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`resetPrompt(): void`}),` — Xóa tiền tố lời nhắc cố định.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức-trừu-tượng-để-triển-khai`,children:`Các phương thức trừu tượng (Để triển khai)`}),`
`,(0,c.jsxs)(t.p,{children:[`Khi kế thừa `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`, bạn phải triển khai các phương thức protected sau:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Xử lý khởi tạo client, xác thực và thiết lập phương thức truyền tải.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toImages(): void`}),` — Logic để chuyển đổi các hình ảnh đã tích lũy sang định dạng cụ thể của nhà cung cấp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`toContents(): void`}),` — Logic để chuyển đổi các nội dung đã tích lũy sang định dạng cụ thể của nhà cung cấp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`response(model: string, contents: string): Promise<string>`}),` — Logic cốt lõi để gọi mô hình AI cụ thể và trả về kết quả dưới dạng văn bản.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(t.h3,{id:`aiimagelist`,children:`AiImageList`}),`
`,(0,c.jsxs)(t.p,{children:[`Một mảng các đối tượng `,(0,c.jsx)(t.code,{children:`AiImageItem`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type AiImageList = AiImageItem[]
`})}),`
`,(0,c.jsx)(t.h3,{id:`aiimageitem`,children:`AiImageItem`}),`
`,(0,c.jsx)(t.p,{children:`Đại diện cho một hình ảnh ở định dạng base64.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mime: string`}),` — Kiểu MIME của hình ảnh (ví dụ: 'image/png').`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`base64: string`}),` — Dữ liệu hình ảnh được mã hóa base64.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`type AiImageItem = {
  mime: string
  base64: string
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};