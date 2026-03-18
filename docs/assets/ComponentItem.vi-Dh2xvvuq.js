import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/ComponentItem - Trình tạo tệp thành phần"}),`
`,n.jsx(t.h1,{id:"lớp-componentitem",children:"Lớp ComponentItem"}),`
`,n.jsx(t.p,{children:"Một lớp chuyên dụng để tạo các tệp thành phần riêng lẻ dựa trên các mẫu. Nó quản lý toàn bộ quá trình tạo, từ việc đọc các mẫu tệp đến việc thực hiện thay thế chuỗi động và đặt các quyền hệ thống tệp chính xác."}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Dựa trên mẫu"})," — sử dụng kho lưu trữ tập trung các mẫu thành phần để tạo tệp nhất quán."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Thay thế động"})," — tự động thay thế các dấu hiệu như ",n.jsx(t.code,{children:"ComponentDoc"}),", ",n.jsx(t.code,{children:"[project]"})," và ",n.jsx(t.code,{children:"[path]"})," bằng các giá trị cụ thể theo ngữ cảnh."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Hỗ trợ trình giữ chỗ"})," — xử lý các chuyển đổi cả camelCase (tên lớp) và kebab-case (tên tệp)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Quản lý quyền"})," — đảm bảo các tệp được tạo có quyền thực thi và đọc/ghi chính xác."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm tạo ",n.jsx(t.code,{children:"ComponentItem(path)"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"path: string"})," — đường dẫn tương đối hoặc tuyệt đối đến thư mục nơi thành phần sẽ được tạo."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { ComponentItem } from '@dxtmisha/scripts'

const component = new ComponentItem('src/components/MyComponent')

// Tạo các tệp
component.make()
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"make(): void"})," — Phương thức chính đọc tất cả các tệp mẫu và ghi các phiên bản đã xử lý của chúng vào thư mục thành phần."]}),`
`]}),`
`,n.jsx(t.h2,{id:"ví-dụ",children:"Ví dụ"}),`
`,n.jsx(t.h3,{id:"tạo-dàn-giáo-thủ-công",children:"Tạo dàn giáo thủ công"}),`
`,n.jsxs(t.p,{children:["Trong khi ",n.jsx(t.code,{children:"ComponentCreator"})," xử lý việc tạo hàng loạt, ",n.jsx(t.code,{children:"ComponentItem"})," có thể được sử dụng trực tiếp để kiểm soát chi tiết một thành phần cụ thể."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-javascript",children:`const item = new ComponentItem('packages/ui/src/components/Avatar')
item.make()
`})})]})}function m(c={}){const{wrapper:t}={...e(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{m as default};
