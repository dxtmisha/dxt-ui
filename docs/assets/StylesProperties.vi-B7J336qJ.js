import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const h={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/scripts/Classes/StylesProperties - Bộ điều phối chuyển đổi thuộc tính"}),`
`,n.jsx(h.h1,{id:"lớp-stylesproperties",children:"Lớp StylesProperties"}),`
`,n.jsxs(h.p,{children:["Lớp ",n.jsx(h.code,{children:"StylesProperties"})," đóng vai trò là bộ điều phối trung tâm để chuyển đổi các thuộc tính thiết kế thành SCSS. Nó lặp qua các nhánh thuộc tính và ủy quyền việc chuyển đổi thực tế cho các lớp ",n.jsx(h.code,{children:"StylesTo*"})," chuyên biệt dựa trên kiểu biến của thuộc tính."]}),`
`,n.jsx(h.h2,{id:"các-tính-năng-chính",children:"Các tính năng chính"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Điều phối dựa trên kiểu"})," — Tự động chọn trình chuyển đổi chính xác (ví dụ: ",n.jsx(h.code,{children:"StylesToVar"}),", ",n.jsx(h.code,{children:"StylesToProperty"}),", ",n.jsx(h.code,{children:"StylesToSelector"}),") dựa trên ",n.jsx(h.code,{children:"PropertyType"}),"."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Xử lý đệ quy"})," — Xử lý các cấu trúc thuộc tính lồng nhau bằng cách tự khởi tạo đệ quy cho các nhánh con."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Quản lý khối phụ trợ"})," — Bao bọc các selector và phần tử giả (pseudo-elements) trong các khối ",n.jsx(h.code,{children:"& { ... }"})," một cách thông minh khi chúng là một phần của cấu trúc lồng nhau lớn hơn."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Theo dõi thụt lề"})," — Quản lý và tăng mức thụt lề khi đi sâu vào các nhánh thuộc tính lồng nhau."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.strong,{children:"Bảo toàn trạng thái"})," — Theo dõi xem nó có đang xử lý phần tử đầu tiên trong một khối hay không để quản lý khoảng cách dọc một cách chính xác."]}),`
`]}),`
`,n.jsx(h.h2,{id:"khởi-tạo",children:"Khởi tạo"}),`
`,n.jsxs(h.p,{children:["Để khởi tạo đối tượng, hãy gọi hàm khởi tạo ",n.jsx(h.code,{children:"StylesProperties(space, property, parent)"}),"."]}),`
`,n.jsx(h.p,{children:n.jsx(h.strong,{children:"Tham số:"})}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"space: string"})," — chuỗi thụt lề."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"property: PropertyItemsItem"})," — nhánh hiện tại của cây thuộc tính đang được xử lý."]}),`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"parent?: PropertyItem"})," — mục thuộc tính cha (tùy chọn)."]}),`
`]}),`
`,n.jsx(h.pre,{children:n.jsx(h.code,{className:"language-typescript",children:`import { StylesProperties } from '@dxtmisha/scripts'

// 1. Khởi tạo StylesProperties
const dispatcher = new StylesProperties(indentation, propertyBranch, parentItem)
`})}),`
`,n.jsx(h.h2,{id:"các-phương-thức",children:"Các phương thức"}),`
`,n.jsx(h.h3,{id:"điều-khiển",children:"Điều khiển"}),`
`,n.jsxs(h.ul,{children:[`
`,n.jsxs(h.li,{children:[n.jsx(h.code,{children:"make(): string[]"})," — Điểm bắt đầu chính. Lặp qua các thuộc tính trong nhánh hiện tại và trả về một mảng các chuỗi SCSS đại diện cho các quy tắc đã được chuyển đổi."]}),`
`]})]})}function u(c={}){const{wrapper:h}={...e(),...c.components};return h?n.jsx(h,{...c,children:n.jsx(t,{...c})}):t(c)}export{u as default};
