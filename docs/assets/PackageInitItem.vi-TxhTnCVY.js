import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/PackageInitItem - Trình khởi tạo mục gói"}),`
`,n.jsx(c.h1,{id:"lớp-packageinititem",children:"Lớp PackageInitItem"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PackageInitItem"})," xử lý quá trình khởi tạo chi tiết của một thành phần riêng lẻ hoặc gói con. Nó quản lý vòng đời của tệp — từ việc áp dụng mẫu đến tích hợp với thư viện chính, ",n.jsx(c.code,{children:"package.json"})," và Storybook."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo tệp"})," — Tự động tạo các tệp dựa trên các mẫu có sẵn và các mẫu chuyên dụng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thay thế nội dung động"})," — Tự động phân giải các trình giữ chỗ như ",n.jsx(c.code,{children:"[name]"})," và ",n.jsx(c.code,{children:"@packages/library"})," bên trong các tệp được tạo."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp thư viện"})," — Tự động tạo các điểm nhập và đăng ký thành phần trong thư viện toàn cục."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý phụ thuộc"})," — Cập nhật ",n.jsx(c.code,{children:"package.json"})," gốc để bao gồm gói mới trong các phần phụ thuộc, xuất bản (exports) và danh sách tệp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động hóa Storybook"})," — Tự động chèn các câu chuyện (stories) mới vào cấu hình Storybook."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"PackageInitItem(name, dir, type, templates)"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"name: string"})," — Tên hoặc định danh đường dẫn duy nhất của thành phần."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"dir: string[]"})," — Mảng đường dẫn tuyệt đối đến thư mục mục tiêu của thành phần."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"type: string"})," — Mã định danh loại gói (ví dụ: ",n.jsx(c.code,{children:"'functional'"}),", ",n.jsx(c.code,{children:"'ui'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"templates?: string"})," — Danh sách các mẫu tùy chọn cần áp dụng (cách nhau bởi dấu phẩy)."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PackageInitItem } from '@dxtmisha/scripts'

const item = new PackageInitItem(
  'button',
  ['path', 'to', 'button'],
  'ui'
)
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): void"})," — Thực hiện chu trình khởi tạo đầy đủ: tạo tệp, cập nhật thư viện, ",n.jsx(c.code,{children:"package.json"})," và Storybook."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"quy-trình-khởi-tạo",children:"Quy trình khởi tạo"}),`
`,n.jsxs(c.p,{children:["Khi ",n.jsx(c.code,{children:"make()"})," được gọi, lớp sẽ thực hiện các bước sau theo thứ tự:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuẩn bị file"}),": Nó lấy các tệp mẫu từ thư mục media/templates dựa trên loại gói ",n.jsx(c.code,{children:"type"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Áp dụng mẫu"}),": Nếu các ",n.jsx(c.code,{children:"templates"})," cụ thể được cung cấp, nó sẽ lấy và áp dụng chúng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Ghi tệp"}),": Nó ghi các tệp đã xử lý vào thư mục mục tiêu, thực hiện các thay thế nội dung cần thiết."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp (Thư viện)"}),": Nếu tệp ",n.jsx(c.code,{children:"library.ts"})," được tạo, nó sẽ kích hoạt việc tự động tạo các tệp xuất bản (export) trong thư mục gốc của thư viện."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp (Gói)"}),": Nó cập nhật ",n.jsx(c.code,{children:"package.json"})," gốc để đăng ký phụ thuộc workspace và xuất bản của gói mới."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp (Storybook)"}),": Nó quét cấu hình Storybook và thêm các mẫu để bao gồm các câu chuyện của thành phần mới."]}),`
`]}),`
`,n.jsx(c.h3,{id:"logic-phân-giải-nội-bộ",children:"Logic phân giải nội bộ"}),`
`,n.jsx(c.p,{children:"Lớp sử dụng một số hàm hỗ trợ nội bộ để phân giải các quy ước đặt tên:"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:n.jsx(c.code,{children:"getName()"})}),": Bình thường hóa tên thành phần để sử dụng trong nội dung tệp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:n.jsx(c.code,{children:"getCode()"})}),": Chuyển đổi tên thành mã có gạch nối cho các định danh gói."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:n.jsx(c.code,{children:"getProjectName()"})}),": Phân giải tên gói NPM đầy đủ bao gồm cả tiền tố thiết kế."]}),`
`]})]})}function x(h={}){const{wrapper:c}={...t(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(i,{...h})}):i(h)}export{x as default};
