import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{f as r,s as i}from"./blocks-PB3deeuo.js";import{t as a}from"./mdx-react-shim-7_6RcfEr.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Classes/FigmaTopLevelFrames - Quản lý các frame cấp cao nhất`}),`
`,(0,c.jsxs)(n.h1,{id:`lớp-figmatoplevelframes`,children:[`Lớp `,(0,c.jsx)(n.code,{children:`FigmaTopLevelFrames`})]}),`
`,(0,c.jsx)(n.p,{children:`Một lớp tiện ích tĩnh để quản lý và đồng bộ hóa danh sách các frame và section cấp cao nhất trên trang Figma hiện tại. Nó định dạng các node thành một danh sách đơn giản hóa để hiển thị trong giao diện người dùng (UI) của plugin.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo danh sách tự động`}),` — Tự động xác định các frame và section tại gốc của trang hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Dữ liệu hình ảnh`}),` — Xuất ảnh chụp màn hình JPG cho mỗi frame để cung cấp bản xem trước trực quan trong UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tích hợp tin nhắn`}),` — Phương thức `,(0,c.jsx)(n.code,{children:`send()`}),` thiết lập các trình lắng nghe để tự động phản hồi các yêu cầu từ UI về danh sách frame.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(n.p,{children:`Vì đây là một lớp tĩnh, không cần khởi tạo thực thể. Thông thường, bạn chỉ cần gọi thiết lập giao tiếp trong tệp plugin chính của mình.`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaTopLevelFrames } from '@dxtmisha/figma-code'

// Thiết lập trình lắng nghe cho các yêu cầu từ UI
FigmaTopLevelFrames.send()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`truy-xuất-dữ-liệu`,children:`Truy xuất dữ liệu`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static get(): Promise<UiFigmaFramesList>`}),` — Truy xuất, định dạng và lưu tạm danh sách các frame cấp cao nhất.`]}),`
`]}),`
`,(0,c.jsx)(n.h3,{id:`giao-tiếp-communication`,children:`Giao tiếp (Communication)`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`static send(): void`}),` — Khởi tạo các trình lắng nghe `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`}),` để xử lý các yêu cầu danh sách frame từ UI.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,c.jsx)(n.h4,{id:`uifigmaframeslist`,children:(0,c.jsx)(n.code,{children:`UiFigmaFramesList`})}),`
`,(0,c.jsx)(n.p,{children:`Một mảng các đối tượng đại diện cho các frame cấp cao nhất.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`name: string`}),` — Tên của frame.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — ID duy nhất của frame.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`image: Uint8Array | string`}),` — Ảnh chụp màn hình JPG đã xuất của frame.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};