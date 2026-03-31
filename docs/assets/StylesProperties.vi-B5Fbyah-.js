import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/StylesProperties - Bộ điều phối chuyển đổi thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-stylesproperties`,children:`Lớp StylesProperties`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`StylesProperties`}),` đóng vai trò là bộ điều phối trung tâm để chuyển đổi các thuộc tính thiết kế thành SCSS. Nó lặp qua các nhánh thuộc tính và ủy quyền việc chuyển đổi thực tế cho các lớp `,(0,c.jsx)(n.code,{children:`StylesTo*`}),` chuyên biệt dựa trên kiểu biến của thuộc tính.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điều phối dựa trên kiểu`}),` — Tự động chọn trình chuyển đổi chính xác (ví dụ: `,(0,c.jsx)(n.code,{children:`StylesToVar`}),`, `,(0,c.jsx)(n.code,{children:`StylesToProperty`}),`, `,(0,c.jsx)(n.code,{children:`StylesToSelector`}),`) dựa trên `,(0,c.jsx)(n.code,{children:`PropertyType`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý đệ quy`}),` — Xử lý các cấu trúc thuộc tính lồng nhau bằng cách tự khởi tạo đệ quy cho các nhánh con.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý khối phụ trợ`}),` — Bao bọc các selector và phần tử giả (pseudo-elements) trong các khối `,(0,c.jsx)(n.code,{children:`& { ... }`}),` một cách thông minh khi chúng là một phần của cấu trúc lồng nhau lớn hơn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Theo dõi thụt lề`}),` — Quản lý và tăng mức thụt lề khi đi sâu vào các nhánh thuộc tính lồng nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bảo toàn trạng thái`}),` — Theo dõi xem nó có đang xử lý phần tử đầu tiên trong một khối hay không để quản lý khoảng cách dọc một cách chính xác.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`StylesProperties(space, property, parent)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — chuỗi thụt lề.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property: PropertyItemsItem`}),` — nhánh hiện tại của cây thuộc tính đang được xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`parent?: PropertyItem`}),` — mục thuộc tính cha (tùy chọn).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesProperties } from '@dxtmisha/scripts'

// 1. Khởi tạo StylesProperties
const dispatcher = new StylesProperties(indentation, propertyBranch, parentItem)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — Điểm bắt đầu chính. Lặp qua các thuộc tính trong nhánh hiện tại và trả về một mảng các chuỗi SCSS đại diện cho các quy tắc đã được chuyển đổi.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};