import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/LibraryAiMcpItem - Trình xử lý tài nguyên MCP cho gói đơn lẻ`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-libraryaimcpitem`,children:`Lớp LibraryAiMcpItem`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`LibraryAiMcpItem`}),` đại diện cho một phần tử gói riêng lẻ trong quá trình tạo tệp kê khai MCP toàn cầu và quản lý việc phát hiện cũng như đọc các tệp cấu hình `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kiểm tra tệp cấu hình`}),` — Kiểm tra sự tồn tại của tệp `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` trong thư mục gói mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đọc dữ liệu an toàn`}),` — Đọc và xác thực mảng định nghĩa tài nguyên MCP.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ phân đoạn đường dẫn`}),` — Xử lý các phân đoạn đường dẫn để đảm bảo tương thích đa nền tảng.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`dir: string[]`}),` — `,(0,c.jsxs)(t.em,{children:[`(tùy chọn, mặc định `,(0,c.jsx)(t.code,{children:`[]`}),`)`]}),` Các phân đoạn đường dẫn đến thư mục gói.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcpItem } from '@dxtmisha/scripts'

const item = new LibraryAiMcpItem(['packages', 'core'])
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`ismcp-boolean`,children:(0,c.jsx)(t.code,{children:`isMcp(): boolean`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tệp `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),` tồn tại trong thư mục gói.`]}),`
`,(0,c.jsx)(t.h3,{id:`make-recordstring-any--undefined`,children:(0,c.jsx)(t.code,{children:`make(): Record<string, any>[] | undefined`})}),`
`,(0,c.jsxs)(t.p,{children:[`Đọc và trả về danh sách định nghĩa tài nguyên MCP hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { LibraryAiMcpItem } from '@dxtmisha/scripts'

const item = new LibraryAiMcpItem(['packages', 'core'])

if (item.isMcp()) {
  const resources = item.make()
  console.log(resources)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};