import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function e(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/StylesToSelector - Trình tạo CSS Selector"}),`
`,n.jsx(c.h1,{id:"lớp-stylestoselector",children:"Lớp StylesToSelector"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"StylesToSelector"})," chịu trách nhiệm tạo các bộ chọn (selectors) CSS cho các thuộc tính phụ, chẳng hạn như pseudo-classes (",n.jsx(c.code,{children:":hover"}),", ",n.jsx(c.code,{children:":active"}),") hoặc các trạng thái đích của component. Nó xác định một cách thông minh nên sử dụng pseudo-class trực tiếp hay mixin."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo Selector động"})," — Tự động chuyển đổi tên thuộc tính thành các bộ chọn CSS phù hợp."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp Mixin"})," — Nhận dạng các trạng thái cụ thể như ",n.jsx(c.code,{children:"hover"}),", ",n.jsx(c.code,{children:"active"}),", ",n.jsx(c.code,{children:"focus"}),", ",n.jsx(c.code,{children:"disabled"}),", và ",n.jsx(c.code,{children:"readonly"}),", và sử dụng các SCSS mixin tương ứng."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Phân giải Class theo ngữ cảnh"})," — Phát hiện xem thuộc tính phụ có thuộc về class component chính hay không để tối ưu hóa các tham số của mixin."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Quản lý thụt lề"})," — Đảm bảo cấu trúc khối chính xác và khoảng cách theo chiều dọc."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Khởi tạo trình chuyển đổi ",n.jsx(c.code,{children:"StylesToSelector"})," với thuộc tính bắt buộc và hàm gọi nội dung."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"property: PropertyItemsItem"})," — nhánh hiện tại của cây thuộc tính đang được xử lý."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"space: string"})," — chuỗi thụt lề."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"content?: () => string[]"})," — một hàm có thể gọi trả về một mảng các chuỗi đại diện cho các quy tắc style nội bộ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"first?: boolean"})," — cho biết đây có phải là phần tử đầu tiên hay không (tùy chọn)."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { StylesToSelector } from '@dxtmisha/scripts'

const converter = new StylesToSelector(property, '  ', contentCallable)
const result = converter.make()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): string[]"})," — Điểm bắt đầu chính. Điều phối việc phân giải selector và bao bọc khối. Chỉ tạo đầu ra nếu có nội dung bên trong."]}),`
`]})]})}function j(h={}){const{wrapper:c}={...t(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(e,{...h})}):e(h)}export{j as default};
