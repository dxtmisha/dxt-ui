import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/LibraryItems - Trình quản lý danh sách thành phần`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-libraryitems`,children:`Lớp LibraryItems`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryItems`}),` chịu trách nhiệm quản lý danh sách các thành phần (components) trong hệ thống thiết kế. Nó cung cấp các tiện ích để lấy dữ liệu thành phần, đếm số lượng thành phần, xác định đường dẫn và ghi dữ liệu vào thư mục thư viện.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý thành phần`}),` — Lấy và sắp xếp các thành phần theo nhóm thiết kế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xác định đường dẫn`}),` — Xác định đường dẫn tuyệt đối chính xác cho các thành phần của hệ thống thiết kế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiện ích ghi tệp`}),` — Cung cấp cách thức chuẩn hóa để ghi các tệp TypeScript và JSON vào thư viện, bao gồm cả tiêu đề được tạo tự động.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp cấu hình thiết kế`}),` — Tích hợp liền mạch với `,(0,c.jsx)(t.code,{children:`PropertiesConfig`}),` và `,(0,c.jsx)(t.code,{children:`PropertiesFile`}),` cho các cài đặt cụ thể của dự án.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Khởi tạo lớp `,(0,c.jsx)(t.code,{children:`LibraryItems`}),` mà không cần đối số.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryItems } from '@dxtmisha/scripts'

const items = new LibraryItems()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`truy-xuất-dữ-liệu`,children:`Truy xuất dữ liệu`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): LibraryAll`}),` — trả về danh sách đầy đủ các thành phần được sắp xếp theo nhóm thiết kế.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentList(): LibraryData[]`}),` — trả về một mảng phẳng của tất cả các thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getCount(): number`}),` — trả về tổng số lượng thành phần.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`getComponentsPath(): string[]`}),` — trả về các thành phần đường dẫn cho thư mục thành phần.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-thao-tác-operations`,children:`Các thao tác (Operations)`}),`
`,(0,c.jsx)(t.h3,{id:`write`,children:(0,c.jsx)(t.code,{children:`write`})}),`
`,(0,c.jsx)(t.p,{children:`Ghi dữ liệu được cung cấp vào một tệp trong thư mục thư viện. Tự động thêm tiêu đề cảnh báo tạo tự động cho các tệp TypeScript.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name: string`}),` — tên tệp (không bao gồm phần mở rộng).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: string[]`}),` — một mảng các chuỗi để ghi. Mỗi chuỗi sẽ được phân tách bởi một ký tự xuống dòng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`extension: string = 'ts'`}),` — phần mở rộng tệp. Mặc định là `,(0,c.jsx)(t.code,{children:`ts`}),`. `,(0,c.jsx)(t.code,{children:`json`}),` cũng được hỗ trợ.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`items.write('my-feature', [
  'export const active = true',
  'export const count = 10'
])
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};