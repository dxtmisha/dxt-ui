import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToClass - Bộ chuyển đổi bộ chọn CSS Class`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestoclass`,children:`Lớp PropertiesToClass`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToClass`}),` xử lý việc chuyển đổi các phần tử thiết kế (tokens) đại diện cho các lớp CSS thành các bộ chọn lớp (class selectors) SCSS tiêu chuẩn. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp bộ chọn lớp`}),` — Chuyển đổi tên cấu hình thô thuộc kiểu `,(0,c.jsx)(n.code,{children:`PropertyType.classType`}),` thành bộ chọn lớp SCSS với không gian tên của cha.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ cấu trúc BEM`}),` — Giải quyết cấu trúc lớp cha-con bằng cách kiểm tra thuộc tính của cha.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu các cấu hình bộ chọn đã xử lý vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`030-class`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToClass, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToClass(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời--hỗ-trợ`,children:`Vòng đời & Hỗ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để tìm tất cả các biến thuộc kiểu `,(0,c.jsx)(n.code,{children:`classType`}),` và viết lại bộ chọn của chúng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Định dạng tên bộ chọn lớp, thêm tiền tố `,(0,c.jsx)(n.code,{children:`& .`}),` và giới hạn phạm vi theo phần tử cha cấp cao nhất nếu thuộc tính `,(0,c.jsx)(n.code,{children:`fullName`}),` là false.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};