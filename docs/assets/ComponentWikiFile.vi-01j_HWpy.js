import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Classes/ComponentWikiFile - Tiện ích tệp Wiki`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-componentwikifile`,children:`Lớp ComponentWikiFile`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp tiện ích chuyên dụng được thiết kế để xử lý các tệp riêng lẻ trong quá trình tạo wiki. Nó cung cấp các phương pháp mạnh mẽ để đọc, ghi và quản lý siêu dữ liệu như ngày cập nhật và phiên bản tệp.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý siêu dữ liệu`}),` — tự động trích xuất và cập nhật dấu "`,(0,c.jsx)(n.strong,{children:`Date: ...`}),`" trong nội dung tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Ghi thông minh`}),` — tự động loại bỏ các hàng rào mã markdown khi lưu và chỉ ghi nếu nội dung đã thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ lập phiên bản`}),` — tùy chọn bảo tồn phiên bản trước của tệp bằng cách đổi tên tệp với hậu tố `,(0,c.jsx)(n.code,{children:`__old.txt`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Trừu tượng hóa đường dẫn`}),` — tích hợp với `,(0,c.jsx)(n.code,{children:`PropertiesFile`}),` để xử lý các hoạt động tệp bằng các phân đoạn đường dẫn nhất quán.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Khởi tạo với các phân đoạn đường dẫn và cấu hình để xử lý ngày tháng và lập phiên bản.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`paths: string[]`}),` — các phân đoạn của đường dẫn tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isDate: boolean = false`}),` — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, tự động quản lý dấu ngày tháng trong nội dung.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isOld: boolean = true`}),` — nếu `,(0,c.jsx)(n.code,{children:`true`}),`, lưu phiên bản trước đó trước khi ghi đè.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ComponentWikiFile } from '@dxtmisha/scripts'

const file = new ComponentWikiFile(['docs', 'Guide.mdx'], true, true)
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`thông-tin`,children:`Thông tin`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getPath(): string`}),` — Trả về đường dẫn tuyệt đối đầy đủ đến tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`getDate(): Datetime`}),` — Trích xuất và trả về ngày từ nội dung tệp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`read(): string`}),` — Đọc và trả về toàn bộ nội dung tệp.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`write(content: string): void`}),` — Ghi nội dung đã xử lý vào tệp, xử lý việc lập phiên bản và cập nhật ngày tháng nếu được cấu hình.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý-cập-nhật-tài-liệu`,children:`Quản lý cập nhật tài liệu`}),`
`,(0,c.jsx)(n.p,{children:`Tự động cập nhật tài liệu trong khi giữ bản sao lưu của phiên bản trước.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`const docFile = new ComponentWikiFile(['wiki', 'MyComponent.mdx'], true, true)
docFile.write('# Nội dung mới')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};