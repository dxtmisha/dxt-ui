import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/scripts/Classes/StylesToVar - Trình chuyển đổi biến CSS"}),`
`,n.jsx(c.h1,{id:"lớp-stylestovar",children:"Lớp StylesToVar"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"StylesToVar"})," được sử dụng để chuyển đổi các thuộc tính thiết kế thành các biến CSS. Nó có thể xử lý các biến riêng lẻ hoặc xử lý tất cả các biến lồng nhau trong một nhánh."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Xử lý biến theo lô"})," — Có thể lặp qua một nhánh và tạo các khai báo biến CSS cho tất cả các thuộc tính phụ được đánh dấu là biến."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo biến riêng lẻ"})," — Cũng có thể được sử dụng để tạo một biến duy nhất cho thuộc tính hiện tại."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuyển đổi Color sang RGB"})," — Tự động chuyển đổi các giá trị màu sang định dạng RGB (được bao bọc trong ",n.jsx(c.code,{children:"ui.toColorRbg"}),") để tương thích tốt hơn với việc quản lý độ mờ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Hỗ trợ độ mờ (Opacity)"})," — Tạo thêm các biến ",n.jsx(c.code,{children:"-opacity"})," nếu thuộc tính có dữ liệu về độ mờ."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Chuẩn hóa giá trị"})," — Đảm bảo các giá trị được thoát (escape) chính xác và mặc định là ",n.jsx(c.code,{children:"unset"})," nếu giá trị bị thiếu."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Khởi tạo trình chuyển đổi ",n.jsx(c.code,{children:"StylesToVar"})," với nhánh thuộc tính bắt buộc."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"property: PropertyItemsItem"})," — nhánh hiện tại của cây thuộc tính đang được xử lý."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"space: string"})," — chuỗi thụt lề."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"content?: () => string[]"})," — thường không được sử dụng cho các khối biến."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"first?: boolean"})," — cho biết đây có phải là phần tử đầu tiên hay không (tùy chọn)."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { StylesToVar } from '@dxtmisha/scripts'

const converter = new StylesToVar(property, '  ')
const result = converter.make()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): string[]"})," — Điểm bắt đầu chính. Điều phối việc tạo một hoặc nhiều biến CSS dựa trên cấu trúc thuộc tính."]}),`
`]})]})}function u(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{u as default};
