import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/LibraryFlags - Trình tạo kết nối cờ (Flags)`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-libraryflags`,children:`Lớp LibraryFlags`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`LibraryFlags`}),` chịu trách nhiệm tạo các tệp để kết nối cờ quốc gia với hệ thống thiết kế. Nó tạo ra một điểm nhập TypeScript để đăng ký cờ dưới dạng biểu tượng và một tệp JSON chứa danh sách tất cả các mã định danh cờ có sẵn.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo kết nối cờ`}),` — Tạo tệp khởi tạo TypeScript đăng ký các cờ dưới dạng biểu tượng toàn cục.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo danh sách mã định danh`}),` — Tạo tệp JSON cho siêu dữ liệu và lựa chọn cờ tự động.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tiêu chuẩn hóa đặt tên`}),` — Tự động định dạng mã định danh cờ theo quy ước `,(0,c.jsx)(n.code,{children:`flag-[code]`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Xử lý tự động`}),` — Quét và xử lý tất cả các cờ có sẵn từ thư viện phương tiện.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`LibraryFlags(items)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: LibraryItems`}),` — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryFlags, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryFlags
const flagGenerator = new LibraryFlags(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Kích hoạt quá trình tạo các tệp kết nối cờ (TS và JSON).`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-các-tệp-được-tạo`,children:`Cấu trúc các tệp được tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`make`}),` tạo ra hai tệp chính để tích hợp cờ vào thư viện:`]}),`
`,(0,c.jsxs)(n.h3,{id:`1-kết-nối-cờ-flagsts`,children:[`1. Kết nối cờ (`,(0,c.jsx)(n.code,{children:`flags.ts`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Đăng ký cờ dưới dạng biểu tượng toàn cục bằng trình quản lý `,(0,c.jsx)(n.code,{children:`Icons`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional'
import flags from '@dxtmisha/media/flags'

export const makeFlags = (): void => {
  Icons.add('flag-vn', flags.vn)
  Icons.add('flag-us', flags.us)
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`2-mã-định-danh-cờ-flagsjson`,children:[`2. Mã định danh cờ (`,(0,c.jsx)(n.code,{children:`flags.json`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Một mảng chuỗi đơn giản chứa tất cả các khóa cờ được tạo.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-json`,children:`["flag-vn", "flag-us"]
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};