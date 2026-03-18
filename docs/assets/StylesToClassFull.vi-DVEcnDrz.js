import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function s(t){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/StylesToClassFull - Trình tạo tên Class đầy đủ"}),`
`,n.jsx(c.h1,{id:"lớp-stylestoclassfull",children:"Lớp StylesToClassFull"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"StylesToClassFull"})," được thiết kế để tạo các quy tắc CSS trong đó selector được cung cấp dưới dạng một chuỗi đầy đủ. Khác với ",n.jsx(c.code,{children:"StylesToClass"}),", lớp này luôn tạo khối CSS, ngay cả khi nó không chứa các thuộc tính nội bộ."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo bắt buộc"})," — Luôn tạo một khối CSS với selector được chỉ định."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hỗ trợ Selector đầy đủ"})," — Sử dụng trực tiếp chuỗi được cung cấp làm CSS selector mà không cần xử lý thêm."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tự động bao bọc khối"})," — Bao bọc chính xác nội dung bên trong dấu ngoặc nhọn CSS tiêu chuẩn ",n.jsx(c.code,{children:"{}"}),"."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Khởi tạo trình chuyển đổi ",n.jsx(c.code,{children:"StylesToClassFull"})," với thuộc tính bắt buộc và một hàm gọi nội dung cho các quy tắc style."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"property: PropertyItemsItem"})," — nhánh hiện tại của cây thuộc tính đang được xử lý."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"space: string"})," — chuỗi thụt lề (ví dụ: ",n.jsx(c.code,{children:'"  "'})," hoặc ",n.jsx(c.code,{children:'"\\t"'}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"content?: () => string[]"})," — một hàm có thể gọi trả về một mảng các chuỗi đại diện cho các quy tắc style nội bộ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"first?: boolean"})," — cho biết đây có phải là phần tử đầu tiên trong cấp độ hiện tại hay không (tùy chọn, mặc định: ",n.jsx(c.code,{children:"true"}),")."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { StylesToClassFull } from '@dxtmisha/scripts'

// Sử dụng trong logic chuyển đổi
const converter = new StylesToClassFull(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): string[]"})," — Điểm bắt đầu chính. Điều phối việc chuyển đổi và thêm thụt lề cần thiết vào mỗi dòng."]}),`
`]})]})}function x(t={}){const{wrapper:c}={...h(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(s,{...t})}):s(t)}export{x as default};
