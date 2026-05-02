import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/StylesToProperty - Trình tạo thuộc tính CSS`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-stylestoproperty`,children:`Lớp StylesToProperty`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`StylesToProperty`}),` chịu trách nhiệm chuyển đổi các thuộc tính thiết kế thành các thuộc tính CSS tiêu chuẩn hoặc các lệnh gọi SCSS mixin. Nó xử lý việc tạo biến, định dạng thuộc tính đặc biệt và các giá trị phụ trợ cho những thứ như độ mờ (opacity).`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thuộc tính CSS tiêu chuẩn`}),` — Tạo các cặp thuộc tính-giá trị (ví dụ: `,(0,c.jsx)(n.code,{children:`margin-top: 10px;`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp SCSS Mixin`}),` — Tự động chuyển đổi các thuộc tính cụ thể thành các lệnh gọi mixin nếu chúng được đăng ký trong `,(0,c.jsx)(n.code,{children:`styleTypes`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo biến CSS`}),` — Có thể tạo các biến CSS tùy chỉnh nếu cờ `,(0,c.jsx)(n.code,{children:`varKey`}),` được đặt trên thuộc tính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo giá trị phụ trợ`}),` — Tự động bao gồm các lệnh gọi khởi tạo cho các thuộc tính liên quan đến độ mờ nếu thuộc tính cơ sở bị thiếu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sắp xếp và Khoảng cách`}),` — Thêm khoảng cách dọc giữa các thuộc tính nếu chỉ số sắp xếp của chúng thay đổi.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo trình chuyển đổi `,(0,c.jsx)(n.code,{children:`StylesToProperty`}),` với nhánh thuộc tính bắt buộc.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`property: PropertyItemsItem`}),` — nhánh hiện tại của cây thuộc tính đang được xử lý.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`space: string`}),` — chuỗi thụt lề.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`content?: () => string[]`}),` — thường không được sử dụng cho các thuộc tính vì chúng là các nút lá.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`first?: boolean`}),` — cho biết đây có phải là phần tử đầu tiên hay không (tùy chọn).`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { StylesToProperty } from '@dxtmisha/scripts'

const converter = new StylesToProperty(property, '  ')
const result = converter.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): string[]`}),` — Điểm bắt đầu chính. Điều phối việc chuyển đổi, bao gồm việc tạo biến và phân giải mixin.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};