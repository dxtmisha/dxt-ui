import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/StylesToAbstract - Lớp cơ sở để chuyển đổi Style"}),`
`,n.jsx(t.h1,{id:"lớp-stylestoabstract",children:"Lớp StylesToAbstract"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"StylesToAbstract"})," đóng vai trò là nền tảng cho tất cả các cơ chế chuyển đổi style. Nó cung cấp một giao diện tiêu chuẩn hóa và một bộ các phương thức hỗ trợ để dịch các thuộc tính thiết kế sang các cấu trúc tương thích với CSS."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Luồng xử lý tiêu chuẩn hóa"})," — Đảm bảo tất cả các lớp con đều tuân theo cùng một quy trình xử lý: ",n.jsx(t.code,{children:"make"})," → ",n.jsx(t.code,{children:"treatment"})," → ",n.jsx(t.code,{children:"addSpace"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Quản lý ngữ cảnh thuộc tính"})," — Tự động quản lý thuộc tính thiết kế hiện tại, mức độ thụt lề và vị trí trong cây thư mục."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Ủy quyền nội dung linh hoạt"})," — Hỗ trợ xử lý thuộc tính đệ quy thông qua các hàm có thể gọi (callables)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Phân giải đường dẫn và tên"})," — Các trình hỗ trợ tích hợp để trích xuất và chuẩn hóa tên thuộc tính và giá trị CSS."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Là một lớp trừu tượng (abstract class), ",n.jsx(t.code,{children:"StylesToAbstract"})," không thể được khởi tạo trực tiếp. Nó phục vụ như một lớp cơ sở cho các trình chuyển đổi style cụ thể."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"property: PropertyItemsItem"})," — nhánh hiện tại của cây thuộc tính đang được xử lý."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"space: string"})," — chuỗi thụt lề (ví dụ: ",n.jsx(t.code,{children:'"  "'})," hoặc ",n.jsx(t.code,{children:'"\\t"'}),")."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"content?: () => string[]"})," — một hàm có thể gọi được sử dụng để xử lý các thuộc tính con (tùy chọn)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"first?: boolean"})," — cho biết đây có phải là phần tử đầu tiên trong danh sách/cấp độ cây hiện tại hay không (tùy chọn, mặc định: ",n.jsx(t.code,{children:"true"}),")."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { StylesToAbstract } from '@dxtmisha/scripts'

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
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"make(): string[]"})," — Điểm bắt đầu chính. Điều phối việc chuyển đổi và thêm thụt lề cần thiết vào mỗi dòng."]}),`
`]}),`
`,n.jsx(t.h3,{id:"phương-thức-trừu-tượng",children:"Phương thức trừu tượng"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"treatment(): string[]"})," — Xác định logic chuyển đổi cụ thể để dịch dữ liệu thuộc tính sang cấu trúc style. Các lớp con phải triển khai phương thức này."]}),`
`]})]})}function x(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{x as default};
