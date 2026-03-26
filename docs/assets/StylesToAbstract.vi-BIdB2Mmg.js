import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/StylesToAbstract - Lớp cơ sở để chuyển đổi Style`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-stylestoabstract`,children:`Lớp StylesToAbstract`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`StylesToAbstract`}),` đóng vai trò là nền tảng cho tất cả các cơ chế chuyển đổi style. Nó cung cấp một giao diện tiêu chuẩn hóa và một bộ các phương thức hỗ trợ để dịch các thuộc tính thiết kế sang các cấu trúc tương thích với CSS.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Luồng xử lý tiêu chuẩn hóa`}),` — Đảm bảo tất cả các lớp con đều tuân theo cùng một quy trình xử lý: `,(0,c.jsx)(n.code,{children:`make`}),` → `,(0,c.jsx)(n.code,{children:`treatment`}),` → `,(0,c.jsx)(n.code,{children:`addSpace`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý ngữ cảnh thuộc tính`}),` — Tự động quản lý thuộc tính thiết kế hiện tại, mức độ thụt lề và vị trí trong cây thư mục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ủy quyền nội dung linh hoạt`}),` — Hỗ trợ xử lý thuộc tính đệ quy thông qua các hàm có thể gọi (callables).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Phân giải đường dẫn và tên`}),` — Các trình hỗ trợ tích hợp để trích xuất và chuẩn hóa tên thuộc tính và giá trị CSS.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Là một lớp trừu tượng (abstract class), `,(0,c.jsx)(n.code,{children:`StylesToAbstract`}),` không thể được khởi tạo trực tiếp. Nó phục vụ như một lớp cơ sở cho các trình chuyển đổi style cụ thể.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property: PropertyItemsItem`}),` — nhánh hiện tại của cây thuộc tính đang được xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — chuỗi thụt lề (ví dụ: `,(0,c.jsx)(n.code,{children:`"  "`}),` hoặc `,(0,c.jsx)(n.code,{children:`"\\t"`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`content?: () => string[]`}),` — một hàm có thể gọi được sử dụng để xử lý các thuộc tính con (tùy chọn).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`first?: boolean`}),` — cho biết đây có phải là phần tử đầu tiên trong danh sách/cấp độ cây hiện tại hay không (tùy chọn, mặc định: `,(0,c.jsx)(n.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesToAbstract } from '@dxtmisha/scripts'

// Ví dụ: Tạo một triển khai cụ thể
class StylesToCustom extends StylesToAbstract {
  protected treatment(): string[] {
    // Xác định logic chuyển đổi tùy chỉnh tại đây
    return [
      \`\${this.getName()} {\`,
      \`  content: \${this.getValue()};\`,
      '}'
    ]
  }
}
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — Điểm bắt đầu chính. Điều phối việc chuyển đổi và thêm thụt lề cần thiết vào mỗi dòng.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`phương-thức-trừu-tượng`,children:`Phương thức trừu tượng`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`treatment(): string[]`}),` — Xác định logic chuyển đổi cụ thể để dịch dữ liệu thuộc tính sang cấu trúc style. Các lớp con phải triển khai phương thức này.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};