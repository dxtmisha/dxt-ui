import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/figma/Classes/FigmaPostCode - Xác minh tin nhắn`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-figmapostcode`,children:`Lớp FigmaPostCode`}),`
`,(0,c.jsx)(n.p,{children:`Lớp tiện ích để quản lý mã xác minh duy nhất được sử dụng cho tính toàn vẹn của tin nhắn giữa plugin Figma (backend) và UI (frontend). Điều này đảm bảo rằng các tin nhắn được nhận bởi một bên thực sự được gửi bởi bên kia của cùng một phiên plugin.`}),`
`,(0,c.jsx)(n.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Bảo mật`}),` — Ngăn chặn sự can thiệp tin nhắn giữa các plugin khác nhau.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Khóa phiên`}),` — Mã chỉ có thể được đặt một lần cho mỗi phiên, đảm bảo tính nhất quán.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tự động tạo`}),` — Một mã ngẫu nhiên được tạo theo mặc định (ví dụ: `,(0,c.jsx)(n.code,{children:`figma-123456`}),`) nếu không được đặt thủ công.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`các-phương-thức-tĩnh`,children:`Các phương thức tĩnh`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`is(code: string): boolean`}),` — Kiểm tra xem mã được cung cấp có khớp với mã tin nhắn hiện tại hay không.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`get(): string`}),` — Trả về mã tin nhắn hiện tại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`set(code: string): void`}),` — Đặt một mã tin nhắn mới. Chỉ có thể thành công một lần.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khuyến-nghị`,children:`Khuyến nghị`}),`
`,(0,c.jsxs)(n.p,{children:[`Để đảm bảo xác thực ổn định và duy nhất, bạn nên sử dụng trường `,(0,c.jsx)(n.code,{children:`id`}),` từ tệp `,(0,c.jsx)(n.code,{children:`manifest.json`}),` của plugin làm mã bảo mật.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import manifest from '../manifest.json'
import { FigmaPostCode } from '@dxtmisha/figma'

// Thiết lập mã xác thực bằng ID duy nhất của plugin từ manifest
FigmaPostCode.set(manifest.id)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};