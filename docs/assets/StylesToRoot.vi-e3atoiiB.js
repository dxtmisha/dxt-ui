import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/scripts/Classes/StylesToRoot - Trình tạo khối At-Root"}),`
`,n.jsx(t.h1,{id:"lớp-stylestoroot",children:"Lớp StylesToRoot"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"StylesToRoot"})," được sử dụng để bao bọc một khối các quy tắc lồng nhau bên trong một chỉ thị CSS ",n.jsx(t.code,{children:"@at-root"}),". Điều này hữu ích cho việc đưa các quy tắc ra khỏi phạm vi hiện tại của chúng vào gốc của bảng kiểu."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Bao bọc At-Root"})," — Tự động bao bọc nội dung được tạo bên trong một khối ",n.jsx(t.code,{children:"@at-root"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Bao gồm Selector động"})," — Thêm tên thuộc tính (đóng vai trò là phần mở rộng của selector) vào chỉ thị ",n.jsx(t.code,{children:"@at-root"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Quản lý thụt lề"})," — Xử lý thụt lề khối tiêu chuẩn và các dòng trống dẫn đầu."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Khởi tạo trình chuyển đổi ",n.jsx(t.code,{children:"StylesToRoot"})," với thuộc tính bắt buộc và hàm gọi nội dung."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"property: PropertyItemsItem"})," — nhánh hiện tại của cây thuộc tính đang được xử lý."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"space: string"})," — chuỗi thụt lề."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"content?: () => string[]"})," — một hàm có thể gọi trả về một mảng các chuỗi đại diện cho các quy tắc style nội bộ."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"first?: boolean"})," — cho biết đây có phải là phần tử đầu tiên hay không (tùy chọn)."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { StylesToRoot } from '@dxtmisha/scripts'

const converter = new StylesToRoot(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"make(): string[]"})," — Điểm bắt đầu chính. Điều phối quá trình bao bọc nội dung trong cấu trúc ",n.jsx(t.code,{children:"@at-root"}),"."]}),`
`]})]})}function u(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{u as default};
