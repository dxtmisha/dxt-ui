import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/Styles - Bộ điều phối Style`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-styles`,children:`Lớp Styles`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`Styles`}),` là bộ điều phối trung tâm để tạo tất cả các tệp hệ thống liên quan đến style trong hệ thống thiết kế. Nó quản lý việc khởi tạo các biến gốc, các lớp cơ sở, các thuộc tính SCSS và các thiết lập style cụ thể cho từng thiết kế.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo hệ thống`}),` — Điều phối việc tạo các tệp `,(0,c.jsx)(n.code,{children:`vars`}),`, `,(0,c.jsx)(n.code,{children:`classes`}),`, `,(0,c.jsx)(n.code,{children:`properties`}),`, và `,(0,c.jsx)(n.code,{children:`list`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khởi tạo biến gốc`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`StylesRoot`}),` để tạo các biến CSS toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý lớp cơ sở`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`StylesClasses`}),` để tạo các lớp tiện ích tiêu chuẩn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thiết lập theo thiết kế`}),` — Tự động tạo các tệp `,(0,c.jsx)(n.code,{children:`main`}),`, `,(0,c.jsx)(n.code,{children:`basic`}),`, và `,(0,c.jsx)(n.code,{children:`style`}),` được tùy chỉnh cho các thiết kế cụ thể.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp SCSS`}),` — Chuyển đổi dữ liệu thuộc tính thành các cấu trúc tương thích với SCSS bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`PropertiesScss`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dọn dẹp tự động`}),` — Lọc bỏ dữ liệu dư thừa để giữ cho các tệp danh sách được tạo luôn sạch sẽ.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo bộ điều phối `,(0,c.jsx)(n.code,{children:`Styles`}),`. Nó quản lý nội bộ một phiên bản `,(0,c.jsx)(n.code,{children:`Properties`}),` để truy xuất dữ liệu thiết kế.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Styles } from '@dxtmisha/scripts'

const orchestrator = new Styles()
orchestrator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): this`}),` — Điểm bắt đầu chính. Kích hoạt chu kỳ tạo đầy đủ cho tất cả các thiết kế.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`khởi-tạo-nội-bộ`,children:`Khởi tạo nội bộ`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initRoot(items: PropertiesItems): this`}),` — Tạo các biến toàn cục và ghi chúng vào tệp `,(0,c.jsx)(n.code,{children:`vars`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initClasses(items: PropertiesItems): this`}),` — Tạo các lớp cơ sở và các tệp lớp riêng lẻ.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initProperties(items: PropertiesItems): this`}),` — Tạo cấu trúc thuộc tính SCSS.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initList(items: PropertiesItems): this`}),` — Tạo danh sách thuộc tính đã dọn dẹp để tham chiếu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`initBasic(design: string): this`}),` — Tạo các tệp kết nối cơ bản và các điểm neo style cụ thể cho thiết kế.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};