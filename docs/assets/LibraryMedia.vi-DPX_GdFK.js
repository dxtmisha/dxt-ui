import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/LibraryMedia - Trình tạo kết nối phương tiện`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-librarymedia`,children:`Lớp LibraryMedia`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryMedia`}),` chịu trách nhiệm tạo các tệp kết nối cho dữ liệu phương tiện (chủ yếu là biểu tượng) và điểm nhập phong cách (style) chính cho dự án hệ thống thiết kế. Điều này đảm bảo rằng các tài nguyên được lập chỉ mục và tối ưu hóa để sử dụng trong thư viện.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kết nối biểu tượng`}),` — Quét các biểu tượng và tạo cơ chế tải không đồng bộ thông qua nhập động (dynamic imports).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp phong cách`}),` — Kết nối các tệp SCSS chính của dự án với công cụ xây dựng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp trình quản lý biểu tượng`}),` — Tự động đăng ký các tài nguyên với trình quản lý `,(0,c.jsx)(t.code,{children:`Icons`}),` toàn cục từ thư viện chức năng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý vòng đời`}),` — Hỗ trợ chuỗi lệnh (chaining) và đăng ký tài nguyên sạch sẽ thông qua tạo mã tự động.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(t.code,{children:`LibraryMedia(items)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`items: LibraryItems`}),` — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryMedia, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryMedia
const mediaGenerator = new LibraryMedia(items)
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Kích hoạt quá trình tạo các tệp kết nối phương tiện và phong cách.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-các-tệp-được-tạo`,children:`Cấu trúc các tệp được tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Phương thức `,(0,c.jsx)(t.code,{children:`make`}),` tạo ra một số tệp để tích hợp các tài nguyên vào thư viện:`]}),`
`,(0,c.jsxs)(t.h3,{id:`1-kết-nối-phương-tiện-mediats`,children:[`1. Kết nối phương tiện (`,(0,c.jsx)(t.code,{children:`media.ts`}),`)`]}),`
`,(0,c.jsxs)(t.p,{children:[`Đăng ký tất cả các biểu tượng từ thư mục `,(0,c.jsx)(t.code,{children:`icons`}),` bằng cách sử dụng nhập động để tối ưu hóa hiệu suất.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Đặc điểm của mã được tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tên:`}),` `,(0,c.jsx)(t.code,{children:`[Design]MakeIcons`}),` (ví dụ: `,(0,c.jsx)(t.code,{children:`dxtMakeIcons`}),`)`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hành động:`}),` Thêm đường dẫn biểu tượng vào sổ đăng ký toàn cục `,(0,c.jsx)(t.code,{children:`Icons`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional'

// Nhập động cho từng biểu tượng
const iconArrow = async () => (await import('../../icons/arrow.svg'))?.default
const iconSearch = async () => (await import('../../icons/search.svg'))?.default

export const dxtMakeIcons = (): void => {
  Icons.add('arrow', iconArrow)
  Icons.add('search', iconSearch)
}
`})}),`
`,(0,c.jsxs)(t.h3,{id:`2-điểm-nhập-phong-cách-stylets`,children:[`2. Điểm nhập phong cách (`,(0,c.jsx)(t.code,{children:`style.ts`}),`)`]}),`
`,(0,c.jsx)(t.p,{children:`Đóng vai trò là điểm nhập SCSS chính, kết nối các phong cách cụ thể của dự án với thư viện.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import '../styles/ProjectName/main.scss'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};