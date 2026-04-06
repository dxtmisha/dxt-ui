import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/DesignCommand - Lớp lệnh thiết kế cơ sở`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-designcommand`,children:`Lớp DesignCommand`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`DesignCommand`}),` là một lớp trừu tượng cơ sở được thiết kế để tiêu chuẩn hóa việc tạo các tệp và thành phần trong hệ thống thiết kế. Nó cung cấp một khung chung để đọc các mẫu, thực hiện thay thế và ghi mã kết quả vào cấu trúc dự án.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi tiêu chuẩn hóa`}),` — Cung cấp một điểm nhập `,(0,c.jsx)(n.code,{children:`make()`}),` nhất quán cho tất cả các tác vụ tạo liên quan đến thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý mẫu (Template Management)`}),` — Bao gồm các phương thức tích hợp sẵn để đọc các mẫu và áp dụng các chuyển đổi bằng cách sử dụng các đối tượng thay thế chuyên dụng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quy ước đặt tên`}),` — Tự động xử lý các định dạng tên khác nhau (CamelCase, kebab-case, v.v.) cho cả thành phần và dự án.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính toàn vẹn cấu trúc`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`DesignStructure`}),` để đảm bảo các tệp được tạo tuân theo hệ thống phân cấp hệ thống thiết kế đã được thiết lập.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp gói`}),` — Cung cấp các tiện ích để cập nhật `,(0,c.jsx)(n.code,{children:`package.json`}),` với dữ liệu cấu hình mới.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Là một lớp trừu tượng, `,(0,c.jsx)(n.code,{children:`DesignCommand`}),` không được khởi tạo trực tiếp mà được kế thừa bởi các triển khai lệnh cụ thể.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số (cho các lớp kế thừa):`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`command: string`}),` — Mã định danh cho thành phần hoặc hành động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`options: Record<string, string>`}),` — Các tham số cấu hình bổ sung.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`// Ví dụ về hàm khởi tạo của lớp kế thừa
class MyDesignCommand extends DesignCommand {
  constructor(command: string, options: Record<string, string>) {
    super(command, options)
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Kích hoạt việc thực thi lệnh và logic khởi tạo chính.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`api-được-bảo-vệ-cho-các-lớp-kế-thừa`,children:`API được bảo vệ (cho các lớp kế thừa)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFile(name): boolean`}),` — Kiểm tra xem tệp có tồn tại trong thư mục mục tiêu hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(name): string`}),` — Đọc nội dung của một tệp từ thư mục mục tiêu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readSample(name): string`}),` — Đọc một tệp mẫu từ thư mục mẫu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`readDefinable(name, callback?): DesignReplace`}),` — Đọc một tệp nếu nó tồn tại, nếu không sẽ quay lại tệp mẫu của nó.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`write(name, value): void`}),` — Ghi hoặc ghi đè một tệp với nội dung được cung cấp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`updatePackage(path, value): this`}),` — Cập nhật một khóa cụ thể trong tệp `,(0,c.jsx)(n.code,{children:`package.json`}),` của dự án.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`quy-trình-thực-thi-lệnh`,children:`Quy trình thực thi lệnh`}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`make()`}),` tuân theo một mẫu thực thi nghiêm ngặt:`]}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác thực`}),`: Kiểm tra xem mã định danh lệnh có được cung cấp hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo`}),`: Gọi phương thức trừu tượng `,(0,c.jsx)(n.code,{children:`initMain()`}),` (được triển khai bởi các lớp con) để thực hiện các thao tác tệp cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ghi nhật ký (Logging)`}),`: Cung cấp phản hồi trên bảng điều khiển (console) về việc bắt đầu và kết thúc lệnh.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`phân-giải-tên`,children:`Phân giải tên`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:`DesignCommand`}),` cung cấp một số hàm hỗ trợ để đặt tên nhất quán:`]}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName()`}),`: Trả về tên lệnh ở định dạng CamelCase.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode()`}),`: Trả về tên lệnh ở định dạng kebab-case.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getFullName()`}),`: Kết hợp tiền tố thiết kế với tên lệnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getProjectName()`}),`: Trả về mã định danh dự án tiêu chuẩn hóa.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};