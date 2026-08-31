import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/PropertiesToProperty - Bộ chuyển đổi thuộc tính CSS tùy chỉnh`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-propertiestoproperty`,children:`Lớp PropertiesToProperty`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`PropertiesToProperty`}),` định dạng các token thiết kế đại diện cho các thuộc tính CSS tiêu chuẩn (như background, padding, margin) thành các bộ chọn thuộc tính ở dạng kebab-case chuẩn hóa. Lớp này kế thừa từ `,(0,c.jsx)(t.code,{children:`PropertiesToVar`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Định dạng thuộc tính CSS`}),` — Chuyển đổi tên thuộc tính thành các khóa biểu diễn bố cục ở định dạng kebab-case.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tính năng kế thừa`}),` — Tận dụng tất cả logic tính toán biến, độ mờ (opacity) và giải quyết giá trị từ lớp cha `,(0,c.jsx)(t.code,{children:`PropertiesToVar`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu bộ đệm`}),` — Lưu các thuộc tính vào tập tin bộ nhớ đệm `,(0,c.jsx)(t.code,{children:`024-property`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { PropertiesToProperty, PropertiesItems } from '@dxtmisha/scripts'

const transformer = new PropertiesToProperty(items)
transformer.to()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`vòng-đời--hỗ-trợ`,children:`Vòng đời & Hỗ trợ`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getName({ name, item }: PropertyItemsItem): string`}),` — Ghi đè bộ trợ giúp giải quyết tên để trả về biểu diễn kebab-case của tên thuộc tính đã chuyển đổi.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};