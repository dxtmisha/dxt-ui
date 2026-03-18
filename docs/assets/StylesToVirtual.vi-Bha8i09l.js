import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(t){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/StylesToVirtual - Trình tạo Pseudo-Element"}),`
`,n.jsx(c.h1,{id:"lớp-stylestovirtual",children:"Lớp StylesToVirtual"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"StylesToVirtual"})," chịu trách nhiệm tạo các phần tử giả CSS (như ",n.jsx(c.code,{children:"::before"}),", ",n.jsx(c.code,{children:"::after"}),") và các kiểu liên quan của chúng."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Bao bọc Pseudo-Element"})," — Tự động bao bọc nội dung bên trong bộ chọn ",n.jsx(c.code,{children:"&::[name]"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thuộc tính Content tự động"})," — Đối với các phần tử giả như ",n.jsx(c.code,{children:"before"})," và ",n.jsx(c.code,{children:"after"}),", nó tự động chèn ",n.jsx(c.code,{children:"content: ' ';"})," nếu không có quy định khác."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý thụt lề"})," — Xử lý chính xác thụt lề khối và các dòng trống dẫn đầu tùy chọn."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Khởi tạo trình chuyển đổi ",n.jsx(c.code,{children:"StylesToVirtual"})," với thuộc tính bắt buộc và hàm gọi nội dung."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"property: PropertyItemsItem"})," — nhánh hiện tại của cây thuộc tính đang được xử lý."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"space: string"})," — chuỗi thụt lề."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"content?: () => string[]"})," — một hàm có thể gọi trả về một mảng các chuỗi đại diện cho các quy tắc style cho phần tử giả."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"first?: boolean"})," — cho biết đây có phải là phần tử đầu tiên hay không (tùy chọn)."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { StylesToVirtual } from '@dxtmisha/scripts'

const converter = new StylesToVirtual(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): string[]"})," — Điểm bắt đầu chính. Điều phối quá trình bao bọc các style lồng nhau trong một khối phần tử giả."]}),`
`]})]})}function u(t={}){const{wrapper:c}={...h(),...t.components};return c?n.jsx(c,{...t,children:n.jsx(e,{...t})}):e(t)}export{u as default};
