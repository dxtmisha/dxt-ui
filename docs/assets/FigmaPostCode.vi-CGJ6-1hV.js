import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/figma/Classes/FigmaPostCode - Xác minh tin nhắn`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-figmapostcode`,children:`Lớp FigmaPostCode`}),`
`,(0,c.jsx)(t.p,{children:`Lớp tiện ích để quản lý mã xác minh duy nhất được sử dụng cho tính toàn vẹn của tin nhắn giữa plugin Figma (backend) và UI (frontend). Điều này đảm bảo rằng các tin nhắn được nhận bởi một bên thực sự được gửi bởi bên kia của cùng một phiên plugin.`}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bảo mật`}),` — Ngăn chặn sự can thiệp tin nhắn giữa các plugin khác nhau.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khóa phiên`}),` — Mã chỉ có thể được đặt một lần cho mỗi phiên, đảm bảo tính nhất quán.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tự động tạo`}),` — Một mã ngẫu nhiên được tạo theo mặc định (ví dụ: `,(0,c.jsx)(t.code,{children:`figma-123456`}),`) nếu không được đặt thủ công.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`các-phương-thức-tĩnh`,children:`Các phương thức tĩnh`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`is(code: string): boolean`}),` — Kiểm tra xem mã được cung cấp có khớp với mã tin nhắn hiện tại hay không.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`get(): string`}),` — Trả về mã tin nhắn hiện tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`set(code: string): void`}),` — Đặt một mã tin nhắn mới. Chỉ có thể thành công một lần.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khuyến-nghị`,children:`Khuyến nghị`}),`
`,(0,c.jsxs)(t.p,{children:[`Để đảm bảo xác thực ổn định và duy nhất, bạn nên sử dụng trường `,(0,c.jsx)(t.code,{children:`id`}),` từ tệp `,(0,c.jsx)(t.code,{children:`manifest.json`}),` của plugin làm mã bảo mật.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import manifest from '../manifest.json'
import { FigmaPostCode } from '@dxtmisha/figma'

// Thiết lập mã xác thực bằng ID duy nhất của plugin từ manifest
FigmaPostCode.set(manifest.id)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};