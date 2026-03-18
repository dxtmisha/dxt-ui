import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const i={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/AiDocItemAbstract - Lớp Cơ sở Tự động hóa Tài liệu"}),`
`,n.jsx(i.h1,{id:"lớp-aidocitemabstract",children:"Lớp AiDocItemAbstract"}),`
`,n.jsx(i.p,{children:"Một lớp cơ sở trừu tượng để tự động hóa việc tạo tài liệu bằng AI. Nó quản lý vòng đời của việc đọc các tệp nguồn, thu thập ngữ cảnh (mã nguồn, bản demo, lời nhắc) và phối hợp với dịch vụ AI để tạo hoặc cập nhật các tệp MDX và tệp nguồn."}),`
`,n.jsx(i.h2,{id:"tính-năng-chính",children:"Tính năng chính"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Vòng đời Tự động"})," — điều phối việc đọc mã nguồn, chạy bản dựng và tạo các bản cập nhật tài liệu."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Quản lý Ngữ cảnh"})," — logic tích hợp để thu thập mã thành phần, mã nguồn gốc và dữ liệu demo giả cho ngữ cảnh AI."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Cập nhật Thông minh"})," — tự động so sánh ngày sửa đổi để xác định xem có cần tạo lại hay không."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Hệ thống Mẫu"})," — hỗ trợ các mẫu lời nhắc và thay đổi tiêu đề động (ví dụ: ",n.jsx(i.code,{children:"[title]"}),")."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tích hợp Bản dựng"})," — tích hợp với ",n.jsx(i.code,{children:"BuildItem"})," để đảm bảo mã có thể dựng được trước khi viết tài liệu."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.strong,{children:"Tạo có Chọn lọc"})," — hỗ trợ bỏ qua việc tạo tài liệu bằng cách sử dụng đánh dấu ",n.jsx(i.code,{children:"// wiki:build-none"}),"."]}),`
`]}),`
`,n.jsx(i.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(i.p,{children:["Vì ",n.jsx(i.code,{children:"AiDocItemAbstract"})," là một lớp trừu tượng, nó phải được kế thừa. Các lớp cụ thể phải cung cấp đường dẫn cho các tệp demo và mẫu lời nhắc."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số khởi tạo:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — Đường dẫn thư mục gốc cho các tệp nguồn."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: GitFileItem"})," — Thông tin về tệp cụ thể đang được viết tài liệu."]}),`
`]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`// Ví dụ về việc kế thừa và sử dụng AiDocItemAbstract
class MyComponentDoc extends AiDocItemAbstract {
  protected pathDemo = ['path', 'to', 'demo.ts']
  protected pathPrompt = ['path', 'to', 'prompt.txt']
}

const doc = new MyComponentDoc('/source/dir', gitFileItem)
await doc.make() // Kích hoạt chu trình tạo tài liệu
`})}),`
`,n.jsx(i.h2,{id:"phương-thức",children:"Phương thức"}),`
`,n.jsx(i.h3,{id:"vòng-đời",children:"Vòng đời"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"make(): Promise<void>"})," — Điểm bắt đầu chính. Kiểm tra xem có cần cập nhật không, chuẩn bị ngữ cảnh, gọi AI và ghi kết quả."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"isBuildDisabled(): boolean"})," — Kiểm tra xem tệp nguồn có chứa đánh dấu ",n.jsx(i.code,{children:"// wiki:build-none"})," hay không."]}),`
`]}),`
`,n.jsx(i.h2,{id:"các-phương-thức-trừu-tượng-để-triển-khai",children:"Các phương thức trừu tượng (Để triển khai)"}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getPathWiki(): string[]"})," — Logic để xác định đường dẫn tệp Wiki mục tiêu dựa trên vị trí tệp nguồn."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getItemDate(): Date"})," — Lấy ngày sửa đổi tệp từ ",n.jsx(i.code,{children:"GitFileItem"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"getTitle(): string"})," — Soạn thảo tiêu đề chuẩn hóa cho tài liệu."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"readDemo(): string"})," — Đọc nội dung của tệp demo đã cấu hình."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"readPrompt(): string"})," — Đọc và chuẩn bị mẫu lời nhắc, thay thế các trình giữ chỗ như ",n.jsx(i.code,{children:"[wikiLanguage]"}),"."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"makeAi(): void"})," — Hỗ trợ cung cấp cho instance AI các ngữ cảnh liên quan (mã, bản demo, v.v.)."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"initName(content: string): string"})," — Thay thế trình giữ chỗ ",n.jsx(i.code,{children:"[title]"})," trong nội dung được tạo."]}),`
`]}),`
`,n.jsx(i.h2,{id:"các-kiểu-dữ-liệu",children:"Các kiểu dữ liệu"}),`
`,n.jsx(i.h3,{id:"gitfileitem",children:"GitFileItem"}),`
`,n.jsx(i.p,{children:"Đại diện cho thông tin tệp được quản lý bởi Git."}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"path: string"})," — Đường dẫn tương đối đến tệp."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"pathByOS: string"})," — Đường dẫn tuyệt đối đặc thù của hệ điều hành."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"date: string"})," — Ngày sửa đổi cuối cùng."]}),`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"item: any"})," — Dành riêng cho siêu dữ liệu bổ sung."]}),`
`]})]})}function x(c={}){const{wrapper:i}={...h(),...c.components};return i?n.jsx(i,{...c,children:n.jsx(t,{...c})}):t(c)}export{x as default};
