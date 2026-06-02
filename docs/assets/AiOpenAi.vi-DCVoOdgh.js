import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{f as r,s as i}from"./blocks-CQEzKDSL.js";import{t as a}from"./mdx-react-shim-CpDaEZL9.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/AiOpenAi - Lớp OpenAI`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aiopenai`,children:`Lớp AiOpenAi`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`AiOpenAi`}),` là một triển khai cụ thể của `,(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),` tích hợp với các cấu hình môi trường của dự án. Nó tự động tải thông tin xác thực bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),` để khởi tạo client OpenAI.`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình Tự động`}),` — tự động tải API key và mô hình mặc định bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kế thừa các Tính năng của OpenAI`}),` — hỗ trợ tất cả các tính năng của `,(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),`, bao gồm đầu vào đa phương thức (hình ảnh), tích lũy lời nhắc và tạo văn bản.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`AiOpenAi`}),` có thể được khởi tạo trực tiếp mà không cần tham số trong constructor vì nó tự động lấy thông tin xác thực từ môi trường.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiOpenAi } from '@dxtmisha/scripts'

const ai = new AiOpenAi()

// Thiết lập mô hình (tùy chọn, nếu mô hình mặc định chưa được đặt hoặc cần ghi đè)
ai.setModel('gpt-4o')

// Tích lũy ngữ cảnh
ai.addPrompt('Bạn là một nhà phát triển TypeScript chuyên nghiệp.')

// Tạo văn bản
const response = await ai.generate('Tạo một enum cho các vai trò người dùng (user roles).')
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này không định nghĩa thêm phương thức public nào khác. Nó kế thừa tất cả các phương thức cấu hình và thực thi từ `,(0,c.jsx)(n.code,{children:`AiOpenAiLite`}),` và `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};