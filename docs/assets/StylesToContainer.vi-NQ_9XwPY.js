import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as h}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(h,{title:"@dxtmisha/vi/scripts/Classes/StylesToContainer - Trình tạo Container Query"}),`
`,n.jsx(t.h1,{id:"lớp-stylestocontainer",children:"Lớp StylesToContainer"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"StylesToContainer"})," chịu trách nhiệm tạo các truy vấn CSS ",n.jsx(t.code,{children:"@container"})," từ các thuộc tính thiết kế. Nó triển khai logic để bao bọc các quy tắc style lồng nhau bên trong một khối container query."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Bao bọc Container Query"})," — Tự động bao bọc nội dung style được tạo bên trong một quy tắc ",n.jsx(t.code,{children:"@container"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Phân giải truy vấn động"})," — Sử dụng giá trị thuộc tính thiết kế để định nghĩa điều kiện của container query."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Quản lý thụt lề"})," — Xử lý chính xác thụt lề khối và các dòng trống dẫn đầu tùy chọn."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Khởi tạo trình chuyển đổi ",n.jsx(t.code,{children:"StylesToContainer"})," với thuộc tính bắt buộc và một hàm gọi nội dung cho các quy tắc lồng nhau."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"property: PropertyItemsItem"})," — nhánh hiện tại của cây thuộc tính đang được xử lý."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"space: string"})," — chuỗi thụt lề (ví dụ: ",n.jsx(t.code,{children:'"  "'})," hoặc ",n.jsx(t.code,{children:'"\\t"'}),")."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"content?: () => string[]"})," — một hàm có thể gọi trả về một mảng các chuỗi đại diện cho các quy tắc style nội bộ."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"first?: boolean"})," — cho biết đây có phải là phần tử đầu tiên trong cấp độ hiện tại hay không (tùy chọn, mặc định: ",n.jsx(t.code,{children:"true"}),")."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { StylesToContainer } from '@dxtmisha/scripts'

// Sử dụng trong logic chuyển đổi
const converter = new StylesToContainer(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"make(): string[]"})," — Điểm bắt đầu chính. Điều phối việc chuyển đổi và thêm thụt lề cần thiết vào mỗi dòng."]}),`
`]})]})}function x(c={}){const{wrapper:t}={...e(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(i,{...c})}):i(c)}export{x as default};
