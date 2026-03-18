import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(h){const c={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...h.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/scripts/Classes/StylesToProperty - Trình tạo thuộc tính CSS"}),`
`,n.jsx(c.h1,{id:"lớp-stylestoproperty",children:"Lớp StylesToProperty"}),`
`,n.jsxs(c.p,{children:["Lớp ",n.jsx(c.code,{children:"StylesToProperty"})," chịu trách nhiệm chuyển đổi các thuộc tính thiết kế thành các thuộc tính CSS tiêu chuẩn hoặc các lệnh gọi SCSS mixin. Nó xử lý việc tạo biến, định dạng thuộc tính đặc biệt và các giá trị phụ trợ cho những thứ như độ mờ (opacity)."]}),`
`,n.jsx(c.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Thuộc tính CSS tiêu chuẩn"})," — Tạo các cặp thuộc tính-giá trị (ví dụ: ",n.jsx(c.code,{children:"margin-top: 10px;"}),")."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tích hợp SCSS Mixin"})," — Tự động chuyển đổi các thuộc tính cụ thể thành các lệnh gọi mixin nếu chúng được đăng ký trong ",n.jsx(c.code,{children:"styleTypes"}),"."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Tạo biến CSS"})," — Có thể tạo các biến CSS tùy chỉnh nếu cờ ",n.jsx(c.code,{children:"varKey"})," được đặt trên thuộc tính."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Khởi tạo giá trị phụ trợ"})," — Tự động bao gồm các lệnh gọi khởi tạo cho các thuộc tính liên quan đến độ mờ nếu thuộc tính cơ sở bị thiếu."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.strong,{children:"Sắp xếp và Khoảng cách"})," — Thêm khoảng cách dọc giữa các thuộc tính nếu chỉ số sắp xếp của chúng thay đổi."]}),`
`]}),`
`,n.jsx(c.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(c.p,{children:["Khởi tạo trình chuyển đổi ",n.jsx(c.code,{children:"StylesToProperty"})," với nhánh thuộc tính bắt buộc."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"property: PropertyItemsItem"})," — nhánh hiện tại của cây thuộc tính đang được xử lý."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"space: string"})," — chuỗi thụt lề."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"content?: () => string[]"})," — thường không được sử dụng cho các thuộc tính vì chúng là các nút lá."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"first?: boolean"})," — cho biết đây có phải là phần tử đầu tiên hay không (tùy chọn)."]}),`
`]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { StylesToProperty } from '@dxtmisha/scripts'

const converter = new StylesToProperty(property, '  ')
const result = converter.make()
`})}),`
`,n.jsx(c.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(c.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"make(): string[]"})," — Điểm bắt đầu chính. Điều phối việc chuyển đổi, bao gồm việc tạo biến và phân giải mixin."]}),`
`]})]})}function p(h={}){const{wrapper:c}={...i(),...h.components};return c?n.jsx(c,{...h,children:n.jsx(t,{...h})}):t(h)}export{p as default};
