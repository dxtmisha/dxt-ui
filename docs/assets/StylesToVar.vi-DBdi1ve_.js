import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/StylesToVar - Trình chuyển đổi biến CSS`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-stylestovar`,children:`Lớp StylesToVar`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`StylesToVar`}),` được sử dụng để chuyển đổi các thuộc tính thiết kế thành các biến CSS. Nó có thể xử lý các biến riêng lẻ hoặc xử lý tất cả các biến lồng nhau trong một nhánh.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý biến theo lô`}),` — Có thể lặp qua một nhánh và tạo các khai báo biến CSS cho tất cả các thuộc tính phụ được đánh dấu là biến.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo biến riêng lẻ`}),` — Cũng có thể được sử dụng để tạo một biến duy nhất cho thuộc tính hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi Color sang RGB`}),` — Tự động chuyển đổi các giá trị màu sang định dạng RGB (được bao bọc trong `,(0,c.jsx)(n.code,{children:`ui.toColorRbg`}),`) để tương thích tốt hơn với việc quản lý độ mờ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ độ mờ (Opacity)`}),` — Tạo thêm các biến `,(0,c.jsx)(n.code,{children:`-opacity`}),` nếu thuộc tính có dữ liệu về độ mờ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuẩn hóa giá trị`}),` — Đảm bảo các giá trị được thoát (escape) chính xác và mặc định là `,(0,c.jsx)(n.code,{children:`unset`}),` nếu giá trị bị thiếu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo trình chuyển đổi `,(0,c.jsx)(n.code,{children:`StylesToVar`}),` với nhánh thuộc tính bắt buộc.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property: PropertyItemsItem`}),` — nhánh hiện tại của cây thuộc tính đang được xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — chuỗi thụt lề.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`content?: () => string[]`}),` — thường không được sử dụng cho các khối biến.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`first?: boolean`}),` — cho biết đây có phải là phần tử đầu tiên hay không (tùy chọn).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesToVar } from '@dxtmisha/scripts'

const converter = new StylesToVar(property, '  ')
const result = converter.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — Điểm bắt đầu chính. Điều phối việc tạo một hoặc nhiều biến CSS dựa trên cấu trúc thuộc tính.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};