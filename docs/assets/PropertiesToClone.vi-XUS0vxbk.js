import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToClone - Bộ chuyển đổi kế thừa tham số`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestoclone`,children:`Lớp PropertiesToClone`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToClone`}),` nhân bản các tham số cấu hình và cấu trúc cấu hình từ các phần tử cha xuống các thuộc tính con tương ứng. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cấu hình phân cấp (Cascading)`}),` — Nhân bản các cài đặt được đánh dấu bằng `,(0,c.jsx)(t.code,{children:`settingClone`}),` xuống cây thuộc tính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Duyệt sâu`}),` — Quét và kế thừa các thuộc tính một cách đệ quy cho các thuộc tính tương tự ở các phần tử con.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bỏ qua kiểu dữ liệu`}),` — Tự động bỏ qua các kiểu biến và thuộc tính trong quá trình nhân bản để tránh ghi đè giá trị.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu trạng thái của các thuộc tính đã xử lý vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`007-01-clone`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToClone, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToClone(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`thao-tác-nhân-bản`,children:`Thao tác nhân bản`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để duyệt qua tất cả các thuộc tính và áp dụng nhân bản.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`findItem(parent: PropertyItem, name: string): PropertyItem[]`}),` — Tìm kiếm đệ quy các bản ghi thuộc tính tương tự ở các cấp con của phần tử cha.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`update(original: PropertyItem, properties: PropertyItem[]): void`}),` — Thực hiện tiêm thuộc tính, trộn các thuộc tính từ phần tử gốc mà không ghi đè lên dữ liệu hiện có.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};