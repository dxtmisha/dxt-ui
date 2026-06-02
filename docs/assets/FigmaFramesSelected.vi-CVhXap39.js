import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Classes/FigmaFramesSelected - Quản lý các frame được chọn`}),`
`,(0,c.jsxs)(n.h1,{id:`lớp-figmaframesselected`,children:[`Lớp `,(0,c.jsx)(n.code,{children:`FigmaFramesSelected`})]}),`
`,(0,c.jsx)(n.p,{children:`Một lớp tiện ích tĩnh để quản lý danh sách các định danh frame được người dùng chọn trong ngữ cảnh của plugin. Nó xử lý việc lưu trữ dữ liệu bền vững bằng cách sử dụng bộ nhớ của Figma và đảm bảo đồng bộ hóa giữa logic của plugin và giao diện người dùng.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Lưu trữ dữ liệu bền vững`}),` — Danh sách các ID được chọn được lưu qua `,(0,c.jsx)(n.code,{children:`FigmaStorage`}),`, cho phép lựa chọn tồn tại qua các phiên làm việc của plugin.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Đồng bộ hóa hai chiều`}),` — Phương thức `,(0,c.jsx)(n.code,{children:`send()`}),` khởi tạo các trình lắng nghe tin nhắn từ UI, cho phép cập nhật danh sách lựa chọn một cách liền mạch.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Caching hiệu quả`}),` — Sử dụng bộ nhớ đệm nội bộ để cung cấp quyền truy cập tức thì vào danh sách lựa chọn mà không cần đọc bộ nhớ thường xuyên.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Vì đây là một lớp tĩnh, không cần khởi tạo thực thể. Thông thường, bạn chỉ cần gọi thiết lập giao tiếp trong tệp plugin chính của mình.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaFramesSelected } from '@dxtmisha/figma-code'

// Thiết lập các trình lắng nghe tin nhắn từ UI
FigmaFramesSelected.send()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`quản-lý-lựa-chọn-selection-management`,children:`Quản lý lựa chọn (Selection Management)`}),`
`,(0,c.jsx)(n.p,{children:`Các phương thức để tương tác với danh sách ID frame được chọn hiện tại.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`has(id: string): boolean`}),` — Kiểm tra xem một ID frame cụ thể có nằm trong danh sách lựa chọn hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): string[]`}),` — Truy xuất danh sách ID frame được chọn hiện tại (sử dụng cache).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(id: string): void`}),` — Thêm một ID frame vào danh sách và lưu thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(id: string): void`}),` — Xóa một ID frame khỏi danh sách và lưu thay đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`toggle(id: string, selected: boolean): void`}),` — Thêm hoặc xóa một ID dựa trên cờ `,(0,c.jsx)(n.code,{children:`selected`}),`.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`giao-tiếp-communication`,children:`Giao tiếp (Communication)`}),`
`,(0,c.jsx)(n.p,{children:`Các phương thức để đồng bộ hóa trạng thái với UI.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`send(): void`}),` — Thiết lập các trình lắng nghe `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),` để xử lý các bản cập nhật lựa chọn từ UI.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};