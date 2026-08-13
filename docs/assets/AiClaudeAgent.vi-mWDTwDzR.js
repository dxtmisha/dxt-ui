import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiClaudeAgent - Lớp Dịch vụ Claude Agent SDK`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aiclaudeagent`,children:`Lớp AiClaudeAgent`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiClaudeAgent`}),` là một triển khai cụ thể của `,(0,c.jsx)(t.code,{children:`AiClaudeAgentLite`}),` tích hợp với các cấu hình môi trường của dự án. Nó tự động tải các cấu hình và API key bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),` để khởi tạo Claude trong chế độ tác nhân (agent mode).`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cấu hình Tự động`}),` — tự động tải API key và mô hình mặc định bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kế thừa các Tính năng Tác nhân`}),` — hỗ trợ tất cả các tính năng của `,(0,c.jsx)(t.code,{children:`AiClaudeAgentLite`}),`, bao gồm thực thi truy vấn thông qua Agent SDK, xử lý luồng tin nhắn và chế độ quyền cho phép chỉnh sửa tệp tin.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiClaudeAgent`}),` có thể được khởi tạo trực tiếp mà không cần tham số trong constructor vì nó tự động lấy thông tin xác thực từ môi trường.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiClaudeAgent } from '@dxtmisha/scripts'

const agent = new AiClaudeAgent()

// Tích lũy hướng dẫn/nội dung
agent.addContent('Đảm bảo tất cả các tệp phụ trợ đều nằm trong thư mục utils.')

// Chạy truy vấn trong chế độ tác nhân
const response = await agent.generate('Tối ưu hóa các hàm định dạng bên trong helper.ts.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp này không định nghĩa thêm phương thức public nào khác. Nó kế thừa tất cả các phương thức cấu hình và thực thi từ `,(0,c.jsx)(t.code,{children:`AiClaudeAgentLite`}),` và `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};