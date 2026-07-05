import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToClone - Bộ chuyển đổi kế thừa tham số`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestoclone`,children:`Lớp PropertiesToClone`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToClone`}),` nhân bản các tham số cấu hình và cấu trúc cấu hình từ các phần tử cha xuống các thuộc tính con tương ứng. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình phân cấp (Cascading)`}),` — Nhân bản các cài đặt được đánh dấu bằng `,(0,c.jsx)(n.code,{children:`settingClone`}),` xuống cây thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Duyệt sâu`}),` — Quét và kế thừa các thuộc tính một cách đệ quy cho các thuộc tính tương tự ở các phần tử con.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bỏ qua kiểu dữ liệu`}),` — Tự động bỏ qua các kiểu biến và thuộc tính trong quá trình nhân bản để tránh ghi đè giá trị.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu trạng thái của các thuộc tính đã xử lý vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`007-01-clone`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToClone, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToClone(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thao-tác-nhân-bản`,children:`Thao tác nhân bản`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để duyệt qua tất cả các thuộc tính và áp dụng nhân bản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`findItem(parent: PropertyItem, name: string): PropertyItem[]`}),` — Tìm kiếm đệ quy các bản ghi thuộc tính tương tự ở các cấp con của phần tử cha.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`update(original: PropertyItem, properties: PropertyItem[]): void`}),` — Thực hiện tiêm thuộc tính, trộn các thuộc tính từ phần tử gốc mà không ghi đè lên dữ liệu hiện có.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};