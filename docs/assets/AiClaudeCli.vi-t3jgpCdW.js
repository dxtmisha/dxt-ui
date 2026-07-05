import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/AiClaudeCli - Lớp Claude CLI`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aiclaudecli`,children:`Lớp AiClaudeCli`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`AiClaudeCli`}),` là một triển khai cụ thể của `,(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` tích hợp với các cấu hình môi trường của dự án. Nó tự động tải thông tin xác thực bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),` để gọi Claude thông qua terminal shell.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình Tự động`}),` — tự động tải API key và mô hình từ môi trường dự án bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Tạo Phản hồi qua Shell`}),` — kế thừa cơ chế CLI runner của `,(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` để thực thi các lệnh terminal.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`AiClaudeCli`}),` có thể được khởi tạo trực tiếp mà không cần tham số trong constructor vì nó tự động lấy thông tin xác thực từ môi trường.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiClaudeCli } from '@dxtmisha/scripts'

const ai = new AiClaudeCli()

// Tạo văn bản thông qua CLI hệ thống
const response = await ai.generate('Viết thuật toán sắp xếp nhanh (quick sort) bằng TypeScript.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này không định nghĩa thêm phương thức public nào khác. Nó kế thừa tất cả các phương thức cấu hình và thực thi từ `,(0,c.jsx)(n.code,{children:`AiClaudeCliLite`}),` và `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};