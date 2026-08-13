import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/ComponentItem - Trình tạo tệp thành phần`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-componentitem`,children:`Lớp ComponentItem`}),`
`,(0,c.jsx)(t.p,{children:`Một lớp chuyên dụng để tạo các tệp thành phần riêng lẻ dựa trên các mẫu. Nó quản lý toàn bộ quá trình tạo, từ việc đọc các mẫu tệp đến việc thực hiện thay thế chuỗi động và đặt các quyền hệ thống tệp chính xác.`}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Dựa trên mẫu`}),` — sử dụng kho lưu trữ tập trung các mẫu thành phần để tạo tệp nhất quán.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thay thế động`}),` — tự động thay thế các dấu hiệu như `,(0,c.jsx)(t.code,{children:`ComponentDoc`}),`, `,(0,c.jsx)(t.code,{children:`[project]`}),` và `,(0,c.jsx)(t.code,{children:`[path]`}),` bằng các giá trị cụ thể theo ngữ cảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ trình giữ chỗ`}),` — xử lý các chuyển đổi cả camelCase (tên lớp) và kebab-case (tên tệp).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Quản lý quyền`}),` — đảm bảo các tệp được tạo có quyền thực thi và đọc/ghi chính xác.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Để khởi tạo đối tượng, hãy gọi hàm tạo `,(0,c.jsx)(t.code,{children:`ComponentItem(path)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — đường dẫn tương đối hoặc tuyệt đối đến thư mục nơi thành phần sẽ được tạo.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ComponentItem } from '@dxtmisha/scripts'

const component = new ComponentItem('src/components/MyComponent')

// Tạo các tệp
component.make()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`điều-khiển`,children:`Điều khiển`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`make(): void`}),` — Phương thức chính đọc tất cả các tệp mẫu và ghi các phiên bản đã xử lý của chúng vào thư mục thành phần.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.h3,{id:`tạo-dàn-giáo-thủ-công`,children:`Tạo dàn giáo thủ công`}),`
`,(0,c.jsxs)(t.p,{children:[`Trong khi `,(0,c.jsx)(t.code,{children:`ComponentCreator`}),` xử lý việc tạo hàng loạt, `,(0,c.jsx)(t.code,{children:`ComponentItem`}),` có thể được sử dụng trực tiếp để kiểm soát chi tiết một thành phần cụ thể.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-javascript`,children:`const item = new ComponentItem('packages/ui/src/components/Avatar')
item.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};