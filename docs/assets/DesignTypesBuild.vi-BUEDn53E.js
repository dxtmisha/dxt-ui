import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignTypesBuild - Động cơ biên dịch khai báo TypeScript và Vue`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designtypesbuild`,children:`Lớp DesignTypesBuild`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`DesignTypesBuild`}),` chịu trách nhiệm biên dịch trước các tệp nguồn TypeScript và thành phần Vue Single File Components (`,(0,c.jsx)(t.code,{children:`.vue`}),`) thành các tệp khai báo kiểu (`,(0,c.jsx)(t.code,{children:`.d.ts`}),`) trong thư mục tạm trước khi thực hiện tối ưu hóa và xuất tài liệu kiểu cho AI.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ TypeScript và Vue`}),`: Tự động phát hiện các thành phần `,(0,c.jsx)(t.code,{children:`.vue`}),` và kích hoạt `,(0,c.jsx)(t.code,{children:`vue-tsc`}),` để trích xuất khai báo kiểu của component, hoặc sử dụng TypeScript Compiler API cho các gói mã nguồn TypeScript tiêu chuẩn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bộ lọc thông minh`}),`: Tuân thủ cấu hình đường dẫn quét (`,(0,c.jsx)(t.code,{children:`typesPaths`}),`), mẫu chấp nhận (`,(0,c.jsx)(t.code,{children:`typesMatch`}),`) và quy tắc loại trừ (`,(0,c.jsx)(t.code,{children:`typesExclude`}),`) từ tệp `,(0,c.jsx)(t.code,{children:`design-ui.json`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dọn dẹp tự động`}),`: Tự động xóa sạch thư mục tạm trước khi biên dịch và loại bỏ các tệp không cần thiết (tệp kiểm thử, tệp Storybook, tệp điểm vào nội bộ).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`hàm-khởi-tạo`,children:`Hàm khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`temporaryDirectory: string`}),` — đường dẫn thư mục tạm cho quá trình biên dịch. Mặc định lấy từ `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getTypesTemporaryDirectory()`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { DesignTypesBuild } from '@dxtmisha/scripts'

const builder = new DesignTypesBuild()
builder.build()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`is-boolean`,children:(0,c.jsx)(t.code,{children:`is(): boolean`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem thư mục biên dịch tạm thời có tồn tại trên đĩa hay không.`}),`
`,(0,c.jsx)(t.h3,{id:`isvue-boolean`,children:(0,c.jsx)(t.code,{children:`isVue(): boolean`})}),`
`,(0,c.jsxs)(t.p,{children:[`Xác định xem dự án có chứa các thành phần Vue (`,(0,c.jsx)(t.code,{children:`.vue`}),`) cần trình biên dịch `,(0,c.jsx)(t.code,{children:`vue-tsc`}),` hay không.`]}),`
`,(0,c.jsx)(t.h3,{id:`build-this`,children:(0,c.jsx)(t.code,{children:`build(): this`})}),`
`,(0,c.jsxs)(t.p,{children:[`Thực thi quy trình biên dịch khai báo kiểu, tự động lựa chọn `,(0,c.jsx)(t.code,{children:`vue-tsc`}),` khi có tệp Vue hoặc trình biên dịch TypeScript tiêu chuẩn.`]}),`
`,(0,c.jsx)(t.h3,{id:`clean-this`,children:(0,c.jsx)(t.code,{children:`clean(): this`})}),`
`,(0,c.jsx)(t.p,{children:`Xóa bỏ thư mục biên dịch tạm cùng toàn bộ các tệp được tạo bên trong.`})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};