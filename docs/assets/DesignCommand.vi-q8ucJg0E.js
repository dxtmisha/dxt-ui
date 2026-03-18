import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/DesignCommand - Lớp lệnh thiết kế cơ sở"}),`
`,n.jsx(c.h1,{id:"lớp-designcommand",children:"Lớp DesignCommand"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"DesignCommand"})," là một lớp trừu tượng cơ sở được thiết kế để tiêu chuẩn hóa việc tạo các tệp và thành phần trong hệ thống thiết kế. Nó cung cấp một khung chung để đọc các mẫu, thực hiện thay thế và ghi mã kết quả vào cấu trúc dự án."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thực thi tiêu chuẩn hóa"})," — Cung cấp một điểm nhập ",n.jsx(c.code,{children:"make()"})," nhất quán cho tất cả các tác vụ tạo liên quan đến thiết kế."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý mẫu (Template Management)"})," — Bao gồm các phương thức tích hợp sẵn để đọc các mẫu và áp dụng các chuyển đổi bằng cách sử dụng các đối tượng thay thế chuyên dụng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quy ước đặt tên"})," — Tự động xử lý các định dạng tên khác nhau (CamelCase, kebab-case, v.v.) cho cả thành phần và dự án."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tính toàn vẹn cấu trúc"})," — Sử dụng ",n.jsx(c.code,{children:"DesignStructure"})," để đảm bảo các tệp được tạo tuân theo hệ thống phân cấp hệ thống thiết kế đã được thiết lập."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp gói"})," — Cung cấp các tiện ích để cập nhật ",n.jsx(c.code,{children:"package.json"})," với dữ liệu cấu hình mới."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Là một lớp trừu tượng, ",n.jsx(c.code,{children:"DesignCommand"})," không được khởi tạo trực tiếp mà được kế thừa bởi các triển khai lệnh cụ thể."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số (cho các lớp kế thừa):"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"command: string"})," — Mã định danh cho thành phần hoặc hành động."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"options: Record<string, string>"})," — Các tham số cấu hình bổ sung."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`// Ví dụ về hàm khởi tạo của lớp kế thừa
class MyDesignCommand extends DesignCommand {
  constructor(command: string, options: Record<string, string>) {
    super(command, options)
  }
}
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): void"})," — Kích hoạt việc thực thi lệnh và logic khởi tạo chính."]}),`
`]}),`
`,n.jsx(c.h3,{id:"api-được-bảo-vệ-cho-các-lớp-kế-thừa",children:"API được bảo vệ (cho các lớp kế thừa)"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"isFile(name): boolean"})," — Kiểm tra xem tệp có tồn tại trong thư mục mục tiêu hay không."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"read(name): string"})," — Đọc nội dung của một tệp từ thư mục mục tiêu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"readSample(name): string"})," — Đọc một tệp mẫu từ thư mục mẫu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"readDefinable(name, callback?): DesignReplace"})," — Đọc một tệp nếu nó tồn tại, nếu không sẽ quay lại tệp mẫu của nó."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"write(name, value): void"})," — Ghi hoặc ghi đè một tệp với nội dung được cung cấp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"updatePackage(path, value): this"})," — Cập nhật một khóa cụ thể trong tệp ",n.jsx(c.code,{children:"package.json"})," của dự án."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"quy-trình-thực-thi-lệnh",children:"Quy trình thực thi lệnh"}),`
`,n.jsxs(c.p,{children:["Phương thức ",n.jsx(c.code,{children:"make()"})," tuân theo một mẫu thực thi nghiêm ngặt:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xác thực"}),": Kiểm tra xem mã định danh lệnh có được cung cấp hay không."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khởi tạo"}),": Gọi phương thức trừu tượng ",n.jsx(c.code,{children:"initMain()"})," (được triển khai bởi các lớp con) để thực hiện các thao tác tệp cụ thể."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Ghi nhật ký (Logging)"}),": Cung cấp phản hồi trên bảng điều khiển (console) về việc bắt đầu và kết thúc lệnh."]}),`
`]}),`
`,n.jsx(c.h3,{id:"phân-giải-tên",children:"Phân giải tên"}),`
`,n.jsxs(c.p,{children:[n.jsx(c.code,{children:"DesignCommand"})," cung cấp một số hàm hỗ trợ để đặt tên nhất quán:"]}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getName()"}),": Trả về tên lệnh ở định dạng CamelCase."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getCode()"}),": Trả về tên lệnh ở định dạng kebab-case."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getFullName()"}),": Kết hợp tiền tố thiết kế với tên lệnh."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"getProjectName()"}),": Trả về mã định danh dự án tiêu chuẩn hóa."]}),`
`]})]})}function g(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{g as default};
