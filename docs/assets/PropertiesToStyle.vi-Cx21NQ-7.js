import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToStyle - Bộ chuyển đổi nhóm kiểu tùy chỉnh`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestostyle`,children:`Lớp PropertiesToStyle`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToStyle`}),` xử lý các token thiết kế hỗ trợ các giá trị tùy chỉnh bổ sung, bao bọc chúng thành các nút cấu trúc kiểu dành riêng. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp bộ chọn tùy chỉnh`}),` — Tạo các ghi đè trạng thái tùy chỉnh dưới một khóa `,(0,c.jsx)(n.code,{children:`custom`}),` thống nhất bên trong các bản đồ giá trị thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Chuyển đổi thuộc tính động`}),` — Viết lại các thuộc tính có chỉ thị `,(0,c.jsx)(n.code,{children:`style`}),` để hoạt động như các trạng thái biến.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu các thuộc tính ghi đè tùy chỉnh đã xử lý vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`016-style`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToStyle, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToStyle(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời`,children:`Vòng đời`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để duyệt qua các thuộc tính, kiểm tra các nhãn `,(0,c.jsx)(n.code,{children:`style`}),` và tiêm các bản ghi kiểu `,(0,c.jsx)(n.code,{children:`custom`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};