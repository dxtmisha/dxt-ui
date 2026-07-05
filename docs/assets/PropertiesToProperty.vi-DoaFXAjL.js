import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToProperty - Bộ chuyển đổi thuộc tính CSS tùy chỉnh`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-propertiestoproperty`,children:`Lớp PropertiesToProperty`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`PropertiesToProperty`}),` định dạng các token thiết kế đại diện cho các thuộc tính CSS tiêu chuẩn (như background, padding, margin) thành các bộ chọn thuộc tính ở dạng kebab-case chuẩn hóa. Lớp này kế thừa từ `,(0,c.jsx)(n.code,{children:`PropertiesToVar`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Định dạng thuộc tính CSS`}),` — Chuyển đổi tên thuộc tính thành các khóa biểu diễn bố cục ở định dạng kebab-case.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tính năng kế thừa`}),` — Tận dụng tất cả logic tính toán biến, độ mờ (opacity) và giải quyết giá trị từ lớp cha `,(0,c.jsx)(n.code,{children:`PropertiesToVar`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu bộ đệm`}),` — Lưu các thuộc tính vào tập tin bộ nhớ đệm `,(0,c.jsx)(n.code,{children:`024-property`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { PropertiesToProperty, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToProperty(items)
transformer.to()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`vòng-đời--hỗ-trợ`,children:`Vòng đời & Hỗ trợ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getName({ name, item }: PropertyItemsItem): string`}),` — Ghi đè bộ trợ giúp giải quyết tên để trả về biểu diễn kebab-case của tên thuộc tính đã chuyển đổi.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};