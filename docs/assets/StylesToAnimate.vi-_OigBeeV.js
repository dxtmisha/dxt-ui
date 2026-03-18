import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function h(c){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/scripts/Classes/StylesToAnimate - Trình tạo hiệu ứng (Animation)"}),`
`,n.jsx(t.h1,{id:"lớp-stylestoanimate",children:"Lớp StylesToAnimate"}),`
`,n.jsxs(t.p,{children:["Lớp ",n.jsx(t.code,{children:"StylesToAnimate"})," chịu trách nhiệm tạo các hiệu ứng CSS ",n.jsx(t.code,{children:"@keyframes"})," từ các thuộc tính thiết kế. Nó triển khai logic để bao bọc các quy tắc khung hình chính (keyframes) lồng nhau trong một khối animation có tên."]}),`
`,n.jsx(t.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Bao bọc Keyframes"})," — Tự động bao bọc nội dung style được tạo bên trong một khối ",n.jsx(t.code,{children:"@keyframes"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Đặt tên động"})," — Sử dụng tên của thuộc tính thiết kế để định nghĩa định danh cho hiệu ứng."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.strong,{children:"Quản lý thụt lề"})," — Xử lý chính xác thụt lề khối và các dòng trống dẫn đầu tùy chọn."]}),`
`]}),`
`,n.jsx(t.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(t.p,{children:["Khởi tạo trình chuyển đổi ",n.jsx(t.code,{children:"StylesToAnimate"})," với thuộc tính bắt buộc và một hàm gọi nội dung cho các bước khung hình chính (keyframes)."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"property: PropertyItemsItem"})," — nhánh hiện tại của cây thuộc tính đang được xử lý."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"space: string"})," — chuỗi thụt lề (ví dụ: ",n.jsx(t.code,{children:'"  "'})," hoặc ",n.jsx(t.code,{children:'"\\t"'}),")."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"content?: () => string[]"})," — một hàm có thể gọi trả về một mảng các chuỗi đại diện cho các keyframes."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"first?: boolean"})," — cho biết đây có phải là phần tử đầu tiên trong cấp độ hiện tại hay không (tùy chọn, mặc định: ",n.jsx(t.code,{children:"true"}),")."]}),`
`]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { StylesToAnimate } from '@dxtmisha/scripts'

// Sử dụng trong logic chuyển đổi
const converter = new StylesToAnimate(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,n.jsx(t.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(t.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"make(): string[]"})," — Điểm bắt đầu chính. Điều phối việc chuyển đổi và thêm thụt lề cần thiết vào mỗi dòng."]}),`
`]})]})}function a(c={}){const{wrapper:t}={...i(),...c.components};return t?n.jsx(t,{...c,children:n.jsx(h,{...c})}):h(c)}export{a as default};
