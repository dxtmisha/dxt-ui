import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/StylesToVar - Trình chuyển đổi biến CSS`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-stylestovar`,children:`Lớp StylesToVar`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`StylesToVar`}),` được sử dụng để chuyển đổi các thuộc tính thiết kế thành các biến CSS. Nó có thể xử lý các biến riêng lẻ hoặc xử lý tất cả các biến lồng nhau trong một nhánh.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xử lý biến theo lô`}),` — Có thể lặp qua một nhánh và tạo các khai báo biến CSS cho tất cả các thuộc tính phụ được đánh dấu là biến.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo biến riêng lẻ`}),` — Cũng có thể được sử dụng để tạo một biến duy nhất cho thuộc tính hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuyển đổi Color sang RGB`}),` — Tự động chuyển đổi các giá trị màu sang định dạng RGB (được bao bọc trong `,(0,c.jsx)(t.code,{children:`ui.toColorRbg`}),`) để tương thích tốt hơn với việc quản lý độ mờ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ độ mờ (Opacity)`}),` — Tạo thêm các biến `,(0,c.jsx)(t.code,{children:`-opacity`}),` nếu thuộc tính có dữ liệu về độ mờ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuẩn hóa giá trị`}),` — Đảm bảo các giá trị được thoát (escape) chính xác và mặc định là `,(0,c.jsx)(t.code,{children:`unset`}),` nếu giá trị bị thiếu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo trình chuyển đổi `,(0,c.jsx)(t.code,{children:`StylesToVar`}),` với nhánh thuộc tính bắt buộc.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`property: PropertyItemsItem`}),` — nhánh hiện tại của cây thuộc tính đang được xử lý.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`space: string`}),` — chuỗi thụt lề.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`content?: () => string[]`}),` — thường không được sử dụng cho các khối biến.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`first?: boolean`}),` — cho biết đây có phải là phần tử đầu tiên hay không (tùy chọn).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { StylesToVar } from '@dxtmisha/scripts'

const converter = new StylesToVar(property, '  ')
const result = converter.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): string[]`}),` — Điểm bắt đầu chính. Điều phối việc tạo một hoặc nhiều biến CSS dựa trên cấu trúc thuộc tính.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};