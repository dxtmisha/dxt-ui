import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/StylesRoot - Trình tạo biến Root`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-stylesroot`,children:`Lớp StylesRoot`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`StylesRoot`}),` chịu trách nhiệm tạo khối CSS `,(0,c.jsx)(n.code,{children:`:root`}),` toàn cục từ các token thiết kế. Nó chuyển đổi các token thành các biến CSS và giải quyết các biểu thức `,(0,c.jsx)(n.code,{children:`calc()`}),` phức tạp một cách thông minh để đảm bảo tính tương thích của trình duyệt.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo khối Root`}),` — Tạo cấu trúc `,(0,c.jsx)(n.code,{children:`:root { ... }`}),` tiêu chuẩn chứa tất cả các token thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi biến`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`StylesToVar`}),` để chuyển đổi các mục thuộc tính thành các biến CSS hợp lệ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Giải quyết tính toán động`}),` — Giải quyết đệ quy các biểu thức `,(0,c.jsx)(n.code,{children:`calc()`}),` tham chiếu đến các biến khác, đảm bảo rằng các giá trị cuối cùng được tính toán trước nếu có thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp SCSS`}),` — Tự động bao gồm các chỉ thị SCSS `,(0,c.jsx)(n.code,{children:`@use`}),` cần thiết cho các định nghĩa thuộc tính.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`StylesRoot(items)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: PropertiesItems`}),` — một đối tượng để làm việc với danh sách các thuộc tính thiết kế.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesRoot, PropertiesItems } from '@dxtmisha/scripts'

// 1. Khởi tạo PropertiesItems
const items = new PropertiesItems(designData)

// 2. Khởi tạo StylesRoot
const generator = new StylesRoot(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): string[]`}),` — Điểm bắt đầu chính. Xử lý danh sách thuộc tính, giải quyết các tính toán và trả về một mảng các chuỗi đại diện cho khối `,(0,c.jsx)(n.code,{children:`:root`}),` hoàn chỉnh cùng với các import của nó.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};