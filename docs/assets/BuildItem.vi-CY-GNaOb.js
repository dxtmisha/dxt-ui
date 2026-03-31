import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/BuildItem - Trình quản lý Build Component`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-builditem`,children:`Lớp BuildItem`}),`
`,(0,c.jsx)(n.p,{children:`Chịu trách nhiệm điều phối quy trình build của từng component riêng lẻ bằng Vite. Nó quản lý các cấu hình build tạm thời, thực thi quy trình build và tổng hợp đầu ra thu được thành một snapshot mã duy nhất.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cô lập cấu hình`}),` — Đổi tên các cấu hình Vite hiện có một cách an toàn trước khi build và khôi phục chúng sau khi hoàn tất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp Vite`}),` — Tạo các cấu hình Vite động dựa trên một template dành riêng cho component.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp đầu ra`}),` — Đọc đệ quy tất cả các tệp từ thư mục phân phối tạm thời và kết hợp chúng thành một tệp `,(0,c.jsx)(n.code,{children:`code.txt`}),` duy nhất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lan truyền lỗi`}),` — Theo dõi trạng thái build và xử lý các mã thoát (exit code) khi thất bại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý lưu trữ`}),` — Cung cấp các phương thức để lấy và dọn dẹp các đường dẫn phân phối tạm thời.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo `,(0,c.jsx)(n.code,{children:`BuildItem`}),` bằng cách cung cấp đường dẫn component mục tiêu.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — đường dẫn đích đến thư mục component cần build.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { BuildItem } from '@dxtmisha/scripts'

const builder = new BuildItem('packages/components/Button')

// Kích hoạt quy trình build
await builder.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): Promise<boolean>`}),` — điều phối toàn bộ vòng đời build: sao lưu cấu hình, thực thi build và khôi phục tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCode(): string`}),` — lấy nội dung của snapshot mã tổng hợp được tạo ra trong quy trình build.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`removeDir(): void`}),` — xóa vĩnh viễn thư mục phân phối tạm thời.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`quy-trình-làm-việc-nội-bộ`,children:`Quy trình làm việc nội bộ`}),`
`,(0,c.jsx)(n.p,{children:`Quá trình build tuân theo một vòng đời nghiêm ngặt để đảm bảo an toàn cho môi trường và tính nhất quán của đầu ra:`}),`
`,(0,c.jsxs)(n.ol,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Sao lưu cấu hình`}),` — Đổi tên `,(0,c.jsx)(n.code,{children:`vite.config.ts`}),` hiện có thành `,(0,c.jsx)(n.code,{children:`vite.config.workers.ts`}),` để ngăn nó bị ghi đè hoặc gây nhiễu cho quá trình build.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp Template`}),` — Đọc template Vite cụ thể của component và chèn đường dẫn đích một cách động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thực thi Shell`}),` — Kích hoạt lệnh `,(0,c.jsx)(n.code,{children:`npm run build`}),` thông qua một tiến trình con, thu thập và ghi lại toàn bộ đầu ra.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khôi phục`}),` — Khôi phục an toàn `,(0,c.jsx)(n.code,{children:`vite.config.ts`}),` ban đầu từ bản sao lưu sau khi quá trình build hoàn tất.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tổng hợp`}),` — Quét đệ quy thư mục phân phối, bao bọc nội dung của mỗi tệp trong một comment định danh và ghi kết quả kết hợp cuối cùng vào `,(0,c.jsx)(n.code,{children:`code.txt`}),`.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};