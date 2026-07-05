import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Classes/AiClaudeAgent - Lớp Dịch vụ Claude Agent SDK`}),`
`,(0,c.jsx)(n.h1,{id:`lớp-aiclaudeagent`,children:`Lớp AiClaudeAgent`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`AiClaudeAgent`}),` là một triển khai cụ thể của `,(0,c.jsx)(n.code,{children:`AiClaudeAgentLite`}),` tích hợp với các cấu hình môi trường của dự án. Nó tự động tải các cấu hình và API key bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),` để khởi tạo Claude trong chế độ tác nhân (agent mode).`]}),`
`,(0,c.jsx)(n.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Cấu hình Tự động`}),` — tự động tải API key và mô hình mặc định bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:`Kế thừa các Tính năng Tác nhân`}),` — hỗ trợ tất cả các tính năng của `,(0,c.jsx)(n.code,{children:`AiClaudeAgentLite`}),`, bao gồm thực thi truy vấn thông qua Agent SDK, xử lý luồng tin nhắn và chế độ quyền cho phép chỉnh sửa tệp tin.`]}),`
`]}),`
`,(0,c.jsx)(n.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp `,(0,c.jsx)(n.code,{children:`AiClaudeAgent`}),` có thể được khởi tạo trực tiếp mà không cần tham số trong constructor vì nó tự động lấy thông tin xác thực từ môi trường.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { AiClaudeAgent } from '@dxtmisha/scripts'

const agent = new AiClaudeAgent()

// Tích lũy hướng dẫn/nội dung
agent.addContent('Đảm bảo tất cả các tệp phụ trợ đều nằm trong thư mục utils.')

// Chạy truy vấn trong chế độ tác nhân
const response = await agent.generate('Tối ưu hóa các hàm định dạng bên trong helper.ts.')
`})}),`
`,(0,c.jsx)(n.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(n.p,{children:[`Lớp này không định nghĩa thêm phương thức public nào khác. Nó kế thừa tất cả các phương thức cấu hình và thực thi từ `,(0,c.jsx)(n.code,{children:`AiClaudeAgentLite`}),` và `,(0,c.jsx)(n.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};