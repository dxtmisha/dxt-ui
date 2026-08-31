import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToClass - Bộ chuyển đổi bộ chọn CSS Class`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestoclass`,children:`Lớp PropertiesToClass`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToClass`}),` xử lý việc chuyển đổi các phần tử thiết kế (tokens) đại diện cho các lớp CSS thành các bộ chọn lớp (class selectors) SCSS tiêu chuẩn. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToAbstract`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tổng hợp bộ chọn lớp`}),` — Chuyển đổi tên cấu hình thô thuộc kiểu `,(0,c.jsx)(t.code,{children:`PropertyType.classType`}),` thành bộ chọn lớp SCSS với không gian tên của cha.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ cấu trúc BEM`}),` — Giải quyết cấu trúc lớp cha-con bằng cách kiểm tra thuộc tính của cha.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu các cấu hình bộ chọn đã xử lý vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`030-class`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToClass, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToClass(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`vòng-đời--hỗ-trợ`,children:`Vòng đời & Hỗ trợ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Ghi đè phương thức vòng đời trừu tượng để tìm tất cả các biến thuộc kiểu `,(0,c.jsx)(t.code,{children:`classType`}),` và viết lại bộ chọn của chúng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName(name: string, item: PropertyItem, parents: PropertyItemsItem['parents']): string`}),` — Định dạng tên bộ chọn lớp, thêm tiền tố `,(0,c.jsx)(t.code,{children:`& .`}),` và giới hạn phạm vi theo phần tử cha cấp cao nhất nếu thuộc tính `,(0,c.jsx)(t.code,{children:`fullName`}),` là false.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};