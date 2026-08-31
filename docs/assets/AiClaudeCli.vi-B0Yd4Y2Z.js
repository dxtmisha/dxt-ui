import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiClaudeCli - Lớp Claude CLI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aiclaudecli`,children:`Lớp AiClaudeCli`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiClaudeCli`}),` là một triển khai cụ thể của `,(0,c.jsx)(t.code,{children:`AiClaudeCliLite`}),` tích hợp với các cấu hình môi trường của dự án. Nó tự động tải thông tin xác thực bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),` để gọi Claude thông qua terminal shell.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cấu hình Tự động`}),` — tự động tải API key và mô hình từ môi trường dự án bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tạo Phản hồi qua Shell`}),` — kế thừa cơ chế CLI runner của `,(0,c.jsx)(t.code,{children:`AiClaudeCliLite`}),` để thực thi các lệnh terminal.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiClaudeCli`}),` có thể được khởi tạo trực tiếp mà không cần tham số trong constructor vì nó tự động lấy thông tin xác thực từ môi trường.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaudeCli } from '@dxtmisha/scripts'

const ai = new AiClaudeCli()

// Tạo văn bản thông qua CLI hệ thống
const response = await ai.generate('Viết thuật toán sắp xếp nhanh (quick sort) bằng TypeScript.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp này không định nghĩa thêm phương thức public nào khác. Nó kế thừa tất cả các phương thức cấu hình và thực thi từ `,(0,c.jsx)(t.code,{children:`AiClaudeCliLite`}),` và `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};