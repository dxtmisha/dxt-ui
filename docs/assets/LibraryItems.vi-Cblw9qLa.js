import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/LibraryItems - Trình quản lý danh sách thành phần`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-libraryitems`,children:`Lớp LibraryItems`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`LibraryItems`}),` chịu trách nhiệm quản lý danh sách các thành phần (components) trong hệ thống thiết kế. Nó cung cấp các tiện ích để lấy dữ liệu thành phần, đếm số lượng thành phần, xác định đường dẫn và ghi dữ liệu vào thư mục thư viện.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý thành phần`}),` — Lấy và sắp xếp các thành phần theo nhóm thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xác định đường dẫn`}),` — Xác định đường dẫn tuyệt đối chính xác cho các thành phần của hệ thống thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tiện ích ghi tệp`}),` — Cung cấp cách thức chuẩn hóa để ghi các tệp TypeScript và JSON vào thư viện, bao gồm cả tiêu đề được tạo tự động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp cấu hình thiết kế`}),` — Tích hợp liền mạch với `,(0,c.jsx)(n.code,{children:`PropertiesConfig`}),` và `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` cho các cài đặt cụ thể của dự án.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Khởi tạo lớp `,(0,c.jsx)(n.code,{children:`LibraryItems`}),` mà không cần đối số.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryItems } from '@dxtmisha/scripts'

const items = new LibraryItems()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-xuất-dữ-liệu`,children:`Truy xuất dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): LibraryAll`}),` — trả về danh sách đầy đủ các thành phần được sắp xếp theo nhóm thiết kế.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentList(): LibraryData[]`}),` — trả về một mảng phẳng của tất cả các thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getCount(): number`}),` — trả về tổng số lượng thành phần.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getComponentsPath(): string[]`}),` — trả về các thành phần đường dẫn cho thư mục thành phần.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(n.h3,{id:`write`,children:(0,c.jsx)(n.code,{children:`write`})}),`
`,(0,c.jsx)(n.p,{children:`Ghi dữ liệu được cung cấp vào một tệp trong thư mục thư viện. Tự động thêm tiêu đề cảnh báo tạo tự động cho các tệp TypeScript.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — tên tệp (không bao gồm phần mở rộng).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: string[]`}),` — một mảng các chuỗi để ghi. Mỗi chuỗi sẽ được phân tách bởi một ký tự xuống dòng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`extension: string = 'ts'`}),` — phần mở rộng tệp. Mặc định là `,(0,c.jsx)(n.code,{children:`ts`}),`. `,(0,c.jsx)(n.code,{children:`json`}),` cũng được hỗ trợ.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`items.write('my-feature', [
  'export const active = true',
  'export const count = 10'
])
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};