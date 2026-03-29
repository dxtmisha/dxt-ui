import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/LibraryExport - Trình tạo xuất bản (Export)`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-libraryexport`,children:`Lớp LibraryExport`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`LibraryExport`}),` chịu trách nhiệm tổng hợp và tạo ra một tệp xuất bản (export) thống nhất cho thư viện. Nó quét các thư mục được chỉ định để tìm các tệp TypeScript và Vue, tạo ra một điểm nhập duy nhất giúp đơn giản hóa việc nhập thư viện.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo xuất bản thống nhất`}),` — tạo ra một điểm nhập toàn diện cho tất cả các thành phần và tiện ích có thể xuất bản.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Nhận dạng tệp thông minh`}),` — tự động xử lý xuất bản cho các tệp `,(0,c.jsx)(n.code,{children:`.ts`}),` (sử dụng `,(0,c.jsx)(n.code,{children:`export *`}),`) và các tệp `,(0,c.jsx)(n.code,{children:`.vue`}),` (sử dụng `,(0,c.jsx)(n.code,{children:`import`}),` sau đó là `,(0,c.jsx)(n.code,{children:`export const`}),`).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp phong cách (Style)`}),` — tự động bao gồm các kiểu CSS hoặc SCSS toàn cục nếu chúng tồn tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bộ lọc`}),` — loại trừ các tệp kiểm thử (`,(0,c.jsx)(n.code,{children:`.test.`}),`) và các tệp được đánh dấu bằng cờ `,(0,c.jsx)(n.code,{children:`UI_FLAG_NOT_EXPORT`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo và chạy trình tạo xuất bản bằng phương thức `,(0,c.jsx)(n.code,{children:`make`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryExport } from '@dxtmisha/scripts'

const generator = new LibraryExport()
generator.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`tạo-dữ-liệu`,children:`Tạo dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — điểm nhập chính kích hoạt quá trình khám phá và tạo tệp.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ-về-đầu-ra-được-tạo`,children:`Ví dụ về đầu ra được tạo`}),`
`,(0,c.jsx)(n.p,{children:`Tệp được tạo tổng hợp các lệnh nhập và xuất bản như sau:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import './style.css'

// Components
import _DxtButton from './components/DxtButton/DxtButton.vue'
export const DxtButton = _DxtButton

// Utilities
export * from './functions/myFunction'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};