import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToStyle - Bộ chuyển đổi nhóm kiểu tùy chỉnh`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestostyle`,children:`Lớp PropertiesToStyle`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToStyle`}),` xử lý các token thiết kế hỗ trợ các giá trị tùy chỉnh bổ sung, bao bọc chúng thành các nút cấu trúc kiểu dành riêng. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tổng hợp bộ chọn tùy chỉnh`}),` — Tạo các ghi đè trạng thái tùy chỉnh dưới một khóa `,(0,c.jsx)(t.code,{children:`custom`}),` thống nhất bên trong các bản đồ giá trị thuộc tính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chuyển đổi thuộc tính động`}),` — Viết lại các thuộc tính có chỉ thị `,(0,c.jsx)(t.code,{children:`style`}),` để hoạt động như các trạng thái biến.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu các thuộc tính ghi đè tùy chỉnh đã xử lý vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`016-style`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToStyle, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToStyle(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`vòng-đời`,children:`Vòng đời`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để duyệt qua các thuộc tính, kiểm tra các nhãn `,(0,c.jsx)(t.code,{children:`style`}),` và tiêm các bản ghi kiểu `,(0,c.jsx)(t.code,{children:`custom`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};