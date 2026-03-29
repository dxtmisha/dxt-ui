import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/BuildFunctional - Bộ xây dựng thư viện chức năng`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-buildfunctional`,children:`Lớp BuildFunctional`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`BuildFunctional`}),` là một tiện ích chịu trách nhiệm tạo tệp xuất trung tâm cho thư viện chức năng. Nó quét gói `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),` và tạo tệp `,(0,c.jsx)(n.code,{children:`functional.ts`}),` trong thư mục thư viện, xuất lại tất cả các thành viên được tìm thấy.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động xuất lại`}),` — Tự động phát hiện và xuất lại tất cả các thành viên từ gói chức năng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ Type`}),` — Bao gồm `,(0,c.jsx)(n.code,{children:`export type *`}),` để đảm bảo tính khả dụng đầy đủ của kiểu TypeScript.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp thư viện`}),` — Tích hợp với cấu trúc thư viện của dự án bằng cách ghi vào thư mục thư viện đã định cấu hình.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Bạn có thể tạo một phiên bản của `,(0,c.jsx)(n.code,{children:`BuildFunctional`}),` mà không cần bất kỳ tham số nào.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BuildFunctional } from './BuildFunctional'

const builder = new BuildFunctional()
builder.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`make`,children:`make`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Kích hoạt quá trình xây dựng. Nó lấy danh sách các thành viên, định dạng mã xuất và ghi nó vào `,(0,c.jsx)(n.code,{children:`src/library/functional.ts`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`getlist`,children:`getList`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getList(): string[]`}),` — Trả về một mảng các khóa (thành viên được xuất) từ gói `,(0,c.jsx)(n.code,{children:`@dxtmisha/functional`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};