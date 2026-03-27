import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/AiDocItemAbstract - Lớp Cơ sở Tự động hóa Tài liệu`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aidocitemabstract`,children:`Lớp AiDocItemAbstract`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp cơ sở trừu tượng để tự động hóa việc tạo tài liệu bằng AI. Nó quản lý vòng đời của việc đọc các tệp nguồn, thu thập ngữ cảnh (mã nguồn, bản demo, lời nhắc) và phối hợp với dịch vụ AI để tạo hoặc cập nhật các tệp MDX và tệp nguồn.`}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Vòng đời Tự động`}),` — điều phối việc đọc mã nguồn, chạy bản dựng và tạo các bản cập nhật tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý Ngữ cảnh`}),` — logic tích hợp để thu thập mã thành phần, mã nguồn gốc và dữ liệu demo giả cho ngữ cảnh AI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cập nhật Thông minh`}),` — tự động so sánh ngày sửa đổi để xác định xem có cần tạo lại hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hệ thống Mẫu`}),` — hỗ trợ các mẫu lời nhắc và thay đổi tiêu đề động (ví dụ: `,(0,c.jsx)(n.code,{children:`[title]`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Bản dựng`}),` — tích hợp với `,(0,c.jsx)(n.code,{children:`BuildItem`}),` để đảm bảo mã có thể dựng được trước khi viết tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo có Chọn lọc`}),` — hỗ trợ bỏ qua việc tạo tài liệu bằng cách sử dụng đánh dấu `,(0,c.jsx)(n.code,{children:`// wiki:build-none`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Vì `,(0,c.jsx)(n.code,{children:`AiDocItemAbstract`}),` là một lớp trừu tượng, nó phải được kế thừa. Các lớp cụ thể phải cung cấp đường dẫn cho các tệp demo và mẫu lời nhắc.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn thư mục gốc cho các tệp nguồn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: GitFileItem`}),` — Thông tin về tệp cụ thể đang được viết tài liệu.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Ví dụ về việc kế thừa và sử dụng AiDocItemAbstract
class MyComponentDoc extends AiDocItemAbstract {
  protected pathDemo = ['path', 'to', 'demo.ts']
  protected pathPrompt = ['path', 'to', 'prompt.txt']
}

const doc = new MyComponentDoc('/source/dir', gitFileItem)
await doc.make() // Kích hoạt chu trình tạo tài liệu
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời`,children:`Vòng đời`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<void>`}),` — Điểm bắt đầu chính. Kiểm tra xem có cần cập nhật không, chuẩn bị ngữ cảnh, gọi AI và ghi kết quả.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isBuildDisabled(): boolean`}),` — Kiểm tra xem tệp nguồn có chứa đánh dấu `,(0,c.jsx)(n.code,{children:`// wiki:build-none`}),` hay không.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-trừu-tượng-để-triển-khai`,children:`Các phương thức trừu tượng (Để triển khai)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPathWiki(): string[]`}),` — Logic để xác định đường dẫn tệp Wiki mục tiêu dựa trên vị trí tệp nguồn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getItemDate(): Date`}),` — Lấy ngày sửa đổi tệp từ `,(0,c.jsx)(n.code,{children:`GitFileItem`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getTitle(): string`}),` — Soạn thảo tiêu đề chuẩn hóa cho tài liệu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readDemo(): string`}),` — Đọc nội dung của tệp demo đã cấu hình.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readPrompt(): string`}),` — Đọc và chuẩn bị mẫu lời nhắc, thay thế các trình giữ chỗ như `,(0,c.jsx)(n.code,{children:`[wikiLanguage]`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`makeAi(): void`}),` — Hỗ trợ cung cấp cho instance AI các ngữ cảnh liên quan (mã, bản demo, v.v.).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initName(content: string): string`}),` — Thay thế trình giữ chỗ `,(0,c.jsx)(n.code,{children:`[title]`}),` trong nội dung được tạo.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`gitfileitem`,children:`GitFileItem`}),`
`,(0,c.jsx)(n.p,{children:`Đại diện cho thông tin tệp được quản lý bởi Git.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — Đường dẫn tương đối đến tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pathByOS: string`}),` — Đường dẫn tuyệt đối đặc thù của hệ điều hành.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`date: string`}),` — Ngày sửa đổi cuối cùng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: any`}),` — Dành riêng cho siêu dữ liệu bổ sung.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};