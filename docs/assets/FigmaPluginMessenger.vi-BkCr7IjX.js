import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma-code/Classes/FigmaPluginMessenger - Trình nhắn tin plugin (Backend)`}),`
`,(0,c.jsxs)(n.h1,{id:`lớp-figmapluginmessenger`,children:[`Lớp `,(0,c.jsx)(n.code,{children:`FigmaPluginMessenger`})]}),`
`,(0,c.jsxs)(n.p,{children:[`Một trình nhắn tin chuyên dụng cho phía backend của plugin Figma. Nó mở rộng `,(0,c.jsx)(n.code,{children:`FigmaPostAbstract`}),` để cung cấp một lớp giao tiếp mạnh mẽ giữa logic chính của plugin (phía mã) và giao diện người dùng (UI).`]}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kiến trúc Singleton`}),` — Sử dụng `,(0,c.jsx)(n.code,{children:`getInstance()`}),` để đảm bảo tất cả các phần của plugin đều sử dụng cùng một trung tâm giao tiếp.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`API đơn giản hóa`}),` — Bọc các tiêu chuẩn `,(0,c.jsx)(n.code,{children:`figma.ui.postMessage`}),` và `,(0,c.jsx)(n.code,{children:`figma.ui.onmessage`}),` vào một giao diện dễ quản lý hơn.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`An toàn kiểu dữ liệu`}),` — Hỗ trợ các kiểu generic cho tin nhắn để đảm bảo tính nhất quán của dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Truy cập thực thể singleton bằng phương thức tĩnh `,(0,c.jsx)(n.code,{children:`getInstance()`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { FigmaPluginMessenger } from '@dxtmisha/figma-code'

const messenger = FigmaPluginMessenger.getInstance()
`})}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(n.h3,{id:`giao-tiếp-communication`,children:`Giao tiếp (Communication)`}),`
`,(0,c.jsx)(n.p,{children:`Các phương thức để gửi và nhận tin nhắn.`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`post<Message>(type: string, message?: Message): void`}),` — Gửi tin nhắn thuộc một loại cụ thể đến UI của Figma.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`add(type: string, callback: (data: any) => void): this`}),` — (Kế thừa) Đăng ký một trình lắng nghe cho các tin nhắn từ UI.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`remove(type: string): this`}),` — (Kế thừa) Xóa một trình lắng nghe.`]}),`
`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};