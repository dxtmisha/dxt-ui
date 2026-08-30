import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/LibraryFlags - Trình tạo kết nối cờ (Flags)`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-libraryflags`,children:`Lớp LibraryFlags`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryFlags`}),` chịu trách nhiệm tạo các tệp để kết nối cờ quốc gia với hệ thống thiết kế. Nó tạo ra một điểm nhập TypeScript để đăng ký cờ dưới dạng biểu tượng và một tệp JSON chứa danh sách tất cả các mã định danh cờ có sẵn.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo kết nối cờ`}),` — Tạo tệp khởi tạo TypeScript đăng ký các cờ dưới dạng biểu tượng toàn cục.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo danh sách mã định danh`}),` — Tạo tệp JSON cho siêu dữ liệu và lựa chọn cờ tự động.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tiêu chuẩn hóa đặt tên`}),` — Tự động định dạng mã định danh cờ theo quy ước `,(0,c.jsx)(t.code,{children:`flag-[code]`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Xử lý tự động`}),` — Quét và xử lý tất cả các cờ có sẵn từ thư viện phương tiện.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`LibraryFlags(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryFlags, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryFlags
const flagGenerator = new LibraryFlags(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Kích hoạt quá trình tạo các tệp kết nối cờ (TS và JSON).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-các-tệp-được-tạo`,children:`Cấu trúc các tệp được tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Phương thức `,(0,c.jsx)(t.code,{children:`make`}),` tạo ra hai tệp chính để tích hợp cờ vào thư viện:`]}),`
`,(0,c.jsxs)(t.h3,{id:`1-kết-nối-cờ-flagsts`,children:[`1. Kết nối cờ (`,(0,c.jsx)(t.code,{children:`flags.ts`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Đăng ký cờ dưới dạng biểu tượng toàn cục bằng trình quản lý `,(0,c.jsx)(t.code,{children:`Icons`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional'
import flags from '@dxtmisha/media/flags'

export const makeFlags = (): void => {
  Icons.add('flag-vn', flags.vn)
  Icons.add('flag-us', flags.us)
}
`})}),`
`,(0,c.jsxs)(t.h3,{id:`2-mã-định-danh-cờ-flagsjson`,children:[`2. Mã định danh cờ (`,(0,c.jsx)(t.code,{children:`flags.json`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Một mảng chuỗi đơn giản chứa tất cả các khóa cờ được tạo.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`["flag-vn", "flag-us"]
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};