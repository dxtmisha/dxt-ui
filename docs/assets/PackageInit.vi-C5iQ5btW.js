import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/PackageInit - Trình khởi tạo gói"}),`
`,n.jsx(c.h1,{id:"lớp-packageinit",children:"Lớp PackageInit"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"PackageInit"})," chịu trách nhiệm khởi tạo cấu trúc gói mới trong hệ thống thiết kế. Nó xử lý việc quét danh mục và ủy quyền khởi tạo tệp riêng lẻ cho lớp ",n.jsx(c.code,{children:"PackageInitItem"}),", đảm bảo thiết lập môi trường nhất quán dựa trên các mẫu và loại được cung cấp."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động triển khai cấu trúc"})," — Tự động tạo hệ thống phân cấp thư mục cần thiết cho các gói mới."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khởi tạo dựa trên mẫu"})," — Hỗ trợ các loại gói và bộ mẫu khác nhau để thiết lập môi trường linh hoạt."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xử lý thư mục đệ quy"})," — Xác định và xử lý các thư mục trống hoặc mới trong thư mục gốc của gói."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý vòng đời"})," — Cung cấp một điểm nhập duy nhất để kích hoạt toàn bộ chuỗi khởi tạo."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(c.code,{children:"PackageInit(type, templates, dir)"}),"."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"type: string"})," — Mã định danh loại gói (ví dụ: ",n.jsx(c.code,{children:"'functional'"}),", ",n.jsx(c.code,{children:"'ui'"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"templates?: string"})," — Danh sách các mẫu tùy chọn cần áp dụng (cách nhau bởi dấu phẩy)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"dir: string"})," — Thư mục cơ sở nơi đặt các gói (mặc định là ",n.jsx(c.code,{children:"UI_DIR_PACKAGES"}),")."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { PackageInit } from '@dxtmisha/scripts'

// Khởi tạo cho gói 'functional' với các mẫu mặc định
const initializer = new PackageInit('functional', 'basic,test')
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): void"})," — Bắt đầu quá trình khởi tạo cho tất cả các thư mục được xác định trong đường dẫn mục tiêu."]}),`
`]}),`
`,n.jsx(c.h2,{id:"các-thao-tác-operations",children:"Các thao tác (Operations)"}),`
`,n.jsx(c.h3,{id:"quy-trình-khởi-tạo-chi-tiết",children:"Quy trình khởi tạo chi tiết"}),`
`,n.jsxs(c.p,{children:["Phương thức ",n.jsx(c.code,{children:"make()"})," tuân theo một trình tự cụ thể để đảm bảo thiết lập gói sạch sẽ:"]}),`
`,n.jsxs(c.ol,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quét"}),": Quét thư mục mục tiêu ",n.jsx(c.code,{children:"dir"})," để xác định các thư mục con yêu cầu khởi tạo (thường là các thư mục trống)."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Ủy quyền"}),": Đối với mỗi thư mục được xác định, nó tạo một thực thể của ",n.jsx(c.code,{children:"PackageInitItem"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thực thi"}),": Kích hoạt phương thức ",n.jsx(c.code,{children:"make()"})," trên mỗi ",n.jsx(c.code,{children:"PackageInitItem"}),", phương thức này xử lý việc tạo tệp thực tế và áp dụng mẫu."]}),`
`]}),`
`,n.jsx(c.h3,{id:"xác-định-thư-mục-mục-tiêu",children:"Xác định thư mục mục tiêu"}),`
`,n.jsxs(c.p,{children:["Lớp sử dụng phương thức nội bộ ",n.jsx(c.code,{children:"getDirs()"}),' để tìm các thư mục "trống" (không chứa thư mục con), sau đó được coi là gốc cho các thành phần gói mới.']}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`protected getDirs(): string[] {
  return PropertiesFile.readDir(this.dir)
    .filter(
      path => PropertiesFile.readDir([this.dir, path]).length === 0
    )
}
`})})]})}function m(i={}){const{wrapper:c}={...h(),...i.components};return c?n.jsx(c,{...i,children:n.jsx(t,{...i})}):t(i)}export{m as default};
