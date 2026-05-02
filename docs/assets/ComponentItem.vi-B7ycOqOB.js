import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/ComponentItem - Trình tạo tệp thành phần`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-componentitem`,children:`Lớp ComponentItem`}),`
`,(0,c.jsx)(n.p,{children:`Một lớp chuyên dụng để tạo các tệp thành phần riêng lẻ dựa trên các mẫu. Nó quản lý toàn bộ quá trình tạo, từ việc đọc các mẫu tệp đến việc thực hiện thay thế chuỗi động và đặt các quyền hệ thống tệp chính xác.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dựa trên mẫu`}),` — sử dụng kho lưu trữ tập trung các mẫu thành phần để tạo tệp nhất quán.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Thay thế động`}),` — tự động thay thế các dấu hiệu như `,(0,c.jsx)(n.code,{children:`ComponentDoc`}),`, `,(0,c.jsx)(n.code,{children:`[project]`}),` và `,(0,c.jsx)(n.code,{children:`[path]`}),` bằng các giá trị cụ thể theo ngữ cảnh.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Hỗ trợ trình giữ chỗ`}),` — xử lý các chuyển đổi cả camelCase (tên lớp) và kebab-case (tên tệp).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Quản lý quyền`}),` — đảm bảo các tệp được tạo có quyền thực thi và đọc/ghi chính xác.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm tạo `,(0,c.jsx)(n.code,{children:`ComponentItem(path)`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — đường dẫn tương đối hoặc tuyệt đối đến thư mục nơi thành phần sẽ được tạo.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ComponentItem } from '@dxtmisha/scripts'

const component = new ComponentItem('src/components/MyComponent')

// Tạo các tệp
component.make()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`make(): void`}),` — Phương thức chính đọc tất cả các tệp mẫu và ghi các phiên bản đã xử lý của chúng vào thư mục thành phần.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.h3,{id:`tạo-dàn-giáo-thủ-công`,children:`Tạo dàn giáo thủ công`}),`
`,(0,c.jsxs)(n.p,{children:[`Trong khi `,(0,c.jsx)(n.code,{children:`ComponentCreator`}),` xử lý việc tạo hàng loạt, `,(0,c.jsx)(n.code,{children:`ComponentItem`}),` có thể được sử dụng trực tiếp để kiểm soát chi tiết một thành phần cụ thể.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-javascript`,children:`const item = new ComponentItem('packages/ui/src/components/Avatar')
item.make()
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};