import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/LibraryMedia - Trình tạo kết nối phương tiện`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-librarymedia`,children:`Lớp LibraryMedia`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`LibraryMedia`}),` chịu trách nhiệm tạo các tệp kết nối cho dữ liệu phương tiện (chủ yếu là biểu tượng) và điểm nhập phong cách (style) chính cho dự án hệ thống thiết kế. Điều này đảm bảo rằng các tài nguyên được lập chỉ mục và tối ưu hóa để sử dụng trong thư viện.`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kết nối biểu tượng`}),` — Quét các biểu tượng và tạo cơ chế tải không đồng bộ thông qua nhập động (dynamic imports).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp phong cách`}),` — Kết nối các tệp SCSS chính của dự án với công cụ xây dựng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp trình quản lý biểu tượng`}),` — Tự động đăng ký các tài nguyên với trình quản lý `,(0,c.jsx)(n.code,{children:`Icons`}),` toàn cục từ thư viện chức năng.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý vòng đời`}),` — Hỗ trợ chuỗi lệnh (chaining) và đăng ký tài nguyên sạch sẽ thông qua tạo mã tự động.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm khởi tạo `,(0,c.jsx)(n.code,{children:`LibraryMedia(items)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`items: LibraryItems`}),` — một đối tượng để làm việc với danh sách các thành phần và quản lý việc ghi tệp.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { LibraryMedia, LibraryItems } from '@dxtmisha/scripts'

// 1. Khởi tạo LibraryItems
const items = new LibraryItems()

// 2. Khởi tạo LibraryMedia
const mediaGenerator = new LibraryMedia(items)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Kích hoạt quá trình tạo các tệp kết nối phương tiện và phong cách.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`cấu-trúc-các-tệp-được-tạo`,children:`Cấu trúc các tệp được tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Phương thức `,(0,c.jsx)(n.code,{children:`make`}),` tạo ra một số tệp để tích hợp các tài nguyên vào thư viện:`]}),`
`,(0,c.jsxs)(n.h3,{id:`1-kết-nối-phương-tiện-mediats`,children:[`1. Kết nối phương tiện (`,(0,c.jsx)(n.code,{children:`media.ts`}),`)`]}),`
`,(0,c.jsxs)(n.p,{children:[`Đăng ký tất cả các biểu tượng từ thư mục `,(0,c.jsx)(n.code,{children:`icons`}),` bằng cách sử dụng nhập động để tối ưu hóa hiệu suất.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Đặc điểm của mã được tạo:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tên:`}),` `,(0,c.jsx)(n.code,{children:`[Design]MakeIcons`}),` (ví dụ: `,(0,c.jsx)(n.code,{children:`dxtMakeIcons`}),`)`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hành động:`}),` Thêm đường dẫn biểu tượng vào sổ đăng ký toàn cục `,(0,c.jsx)(n.code,{children:`Icons`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { Icons } from '@dxtmisha/functional'

// Nhập động cho từng biểu tượng
const iconArrow = async () => (await import('../../icons/arrow.svg'))?.default
const iconSearch = async () => (await import('../../icons/search.svg'))?.default

export const dxtMakeIcons = (): void => {
  Icons.add('arrow', iconArrow)
  Icons.add('search', iconSearch)
}
`})}),`
`,(0,c.jsxs)(n.h3,{id:`2-điểm-nhập-phong-cách-stylets`,children:[`2. Điểm nhập phong cách (`,(0,c.jsx)(n.code,{children:`style.ts`}),`)`]}),`
`,(0,c.jsx)(n.p,{children:`Đóng vai trò là điểm nhập SCSS chính, kết nối các phong cách cụ thể của dự án với thư viện.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Cấu trúc ví dụ:`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import '../styles/ProjectName/main.scss'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};