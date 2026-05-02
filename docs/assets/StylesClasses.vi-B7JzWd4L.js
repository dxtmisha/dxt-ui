import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/StylesClasses - Trình tạo Class cơ sở`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-stylesclasses`,children:`Lớp StylesClasses`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`StylesClasses`}),` chịu trách nhiệm tạo các lớp CSS cơ sở từ các thuộc tính thiết kế. Nó lọc danh sách thuộc tính cho các danh mục như `,(0,c.jsx)(n.code,{children:`class`}),` và `,(0,c.jsx)(n.code,{children:`theme`}),` và tạo ra các cấu trúc lớp riêng lẻ.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lọc theo danh mục`}),` — Nhắm mục tiêu cụ thể vào các thuộc tính được phân loại là `,(0,c.jsx)(n.code,{children:`class`}),` hoặc `,(0,c.jsx)(n.code,{children:`theme`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo Class động`}),` — Tạo một từ điển các khối SCSS, trong đó mỗi khóa là tên lớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Điều phối phụ thuộc`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`StylesProperties`}),` để tạo các quy tắc kiểu nội bộ (thuộc tính, mixin, v.v.) cho mỗi lớp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý Import`}),` — Tự động bao gồm các chỉ thị SCSS `,(0,c.jsx)(n.code,{children:`@use`}),` cần thiết để liên kết các tệp lớp được tạo.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`StylesClasses(items)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: PropertiesItems`}),` — một đối tượng để làm việc với danh sách các thuộc tính thiết kế.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesClasses, PropertiesItems } from '@dxtmisha/scripts'

// 1. Khởi tạo PropertiesItems
const items = new PropertiesItems(designData)

// 2. Khởi tạo StylesClasses
const generator = new StylesClasses(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`init(): StylesClassesItem`}),` — Điểm bắt đầu chính. Xử lý danh sách thuộc tính và trả về một đối tượng chứa danh sách các import cần thiết và nội dung lớp được tạo.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h3,{id:`stylesclassesitem`,children:`StylesClassesItem`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: string[]`}),` — Một mảng các câu lệnh SCSS `,(0,c.jsx)(n.code,{children:`@use`}),` cho các tệp lớp được tạo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`classes: Record<string, string[]>`}),` — Một từ điển trong đó mỗi khóa là tên lớp và giá trị là một mảng các chuỗi đại diện cho nội dung SCSS của lớp đó.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};