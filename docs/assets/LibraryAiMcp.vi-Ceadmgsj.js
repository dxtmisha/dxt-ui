import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/LibraryAiMcp - Trình tạo module tài nguyên MCP TypeScript`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-libraryaimcp`,children:`Lớp LibraryAiMcp`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryAiMcp`}),` chịu trách nhiệm tạo tệp TypeScript (`,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.ts`}),`) chứa các tài nguyên MCP có cấu trúc dựa trên tệp kê khai tổng hợp `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Biên dịch module TypeScript tự động`}),` — Chuyển đổi danh sách tài nguyên JSON thành tệp TypeScript định kiểu nghiêm ngặt với các import động.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Nhóm theo gói`}),` — Nhóm các tài nguyên theo tên gói npm và tạo các biến có định dạng `,(0,c.jsx)(t.code,{children:`mcp<PackageName>`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ trình xử lý động`}),` — Đăng ký các trình xử lý bất đồng bộ `,(0,c.jsx)(t.code,{children:`read: () => import(...)`}),` cho các tài nguyên văn bản và hình ảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp ai-prompt.md`}),` — Tự động đưa tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` gốc vào danh sách tài nguyên MCP toàn cầu nếu tồn tại.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`source: PropertiesFilePath | Record<string, unknown>[]`}),` — `,(0,c.jsxs)(t.em,{children:[`(tùy chọn, mặc định `,(0,c.jsx)(t.code,{children:`UI_FILE_AI_MCP_ALL`}),`)`]}),` Đường dẫn đến tệp JSON tài nguyên hoặc mảng dữ liệu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`fileTs: PropertiesFilePath`}),` — `,(0,c.jsxs)(t.em,{children:[`(tùy chọn, mặc định `,(0,c.jsx)(t.code,{children:`UI_FILE_AI_MCP_ALL_TS`}),`)`]}),` Đường dẫn đến tệp TypeScript đích.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcp } from '@dxtmisha/scripts'

const mcp = new LibraryAiMcp()
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`getresources-recordstring-unknown`,children:(0,c.jsx)(t.code,{children:`getResources(): Record<string, unknown>[]`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về mảng các tài nguyên MCP đã phân tích cú pháp.`}),`
`,(0,c.jsx)(t.h3,{id:`isprompt-boolean`,children:(0,c.jsx)(t.code,{children:`isPrompt(): boolean`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra sự tồn tại của tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` ở thư mục gốc của dự án.`]}),`
`,(0,c.jsx)(t.h3,{id:`make-void`,children:(0,c.jsx)(t.code,{children:`make(): void`})}),`
`,(0,c.jsxs)(t.p,{children:[`Đọc `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.json`}),` và tạo ra `,(0,c.jsx)(t.code,{children:`ai-mcp-all-resources.ts`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcp } from '@dxtmisha/scripts'

const mcp = new LibraryAiMcp()
mcp.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};