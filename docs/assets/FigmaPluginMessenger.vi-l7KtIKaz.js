import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/figma-code/Classes/FigmaPluginMessenger - Trình nhắn tin plugin (Backend)`}),`
`,(0,c.jsxs)(t.h1,{id:`lớp-figmapluginmessenger`,children:[`Lớp `,(0,c.jsx)(t.code,{children:`FigmaPluginMessenger`})]}),`
`,(0,c.jsxs)(t.p,{children:[`Một trình nhắn tin chuyên dụng cho phía backend của plugin Figma. Nó mở rộng `,(0,c.jsx)(t.code,{children:`FigmaPostAbstract`}),` để cung cấp một lớp giao tiếp mạnh mẽ giữa logic chính của plugin (phía mã) và giao diện người dùng (UI).`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiến trúc Singleton`}),` — Sử dụng `,(0,c.jsx)(t.code,{children:`getInstance()`}),` để đảm bảo tất cả các phần của plugin đều sử dụng cùng một trung tâm giao tiếp.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`API đơn giản hóa`}),` — Bọc các tiêu chuẩn `,(0,c.jsx)(t.code,{children:`figma.ui.postMessage`}),` và `,(0,c.jsx)(t.code,{children:`figma.ui.onmessage`}),` vào một giao diện dễ quản lý hơn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`An toàn kiểu dữ liệu`}),` — Hỗ trợ các kiểu generic cho tin nhắn để đảm bảo tính nhất quán của dữ liệu.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Truy cập thực thể singleton bằng phương thức tĩnh `,(0,c.jsx)(t.code,{children:`getInstance()`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { FigmaPluginMessenger } from '@dxtmisha/figma-code'

const messenger = FigmaPluginMessenger.getInstance()
`})}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức`,children:`Các phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`giao-tiếp-communication`,children:`Giao tiếp (Communication)`}),`
`,(0,c.jsx)(t.p,{children:`Các phương thức để gửi và nhận tin nhắn.`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`post<Message>(type: string, message?: Message): void`}),` — Gửi tin nhắn thuộc một loại cụ thể đến UI của Figma.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`add(type: string, callback: (data: any) => void): this`}),` — (Kế thừa) Đăng ký một trình lắng nghe cho các tin nhắn từ UI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove(type: string): this`}),` — (Kế thừa) Xóa một trình lắng nghe.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};