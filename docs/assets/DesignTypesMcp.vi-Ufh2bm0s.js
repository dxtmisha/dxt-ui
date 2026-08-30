import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/DesignTypesMcp - Trình tạo tài nguyên máy chủ MCP cho AI`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-designtypesmcp`,children:`Lớp DesignTypesMcp`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`DesignTypesMcp`}),` chịu trách nhiệm tạo, định dạng và lưu tệp kê khai tài nguyên máy chủ MCP (`,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`), giúp tích hợp dự án với giao thức Model Context Protocol (MCP) cho các trợ lý AI.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tính-năng-chính`,children:`Các tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đăng ký tài nguyên tự động`}),` — Đăng ký các tệp `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-description.md`}),`, ảnh chụp màn hình và prompt thành các tài nguyên MCP tiêu chuẩn.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hỗ trợ URI động`}),` — Tạo URI định danh duy nhất cho từng tài nguyên theo định dạng `,(0,c.jsx)(t.code,{children:`<projectName>/<filePath>`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tích hợp ảnh chụp màn hình`}),` — Quét thư mục `,(0,c.jsx)(t.code,{children:`ai-screenshot`}),` và đăng ký các tài nguyên hình ảnh với loại MIME `,(0,c.jsx)(t.code,{children:`image/png`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lưu cấu hình`}),` — Ghi mảng định nghĩa tài nguyên vào `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`ai: DesignTypesAi`}),` — Đối tượng client AI để lấy tên dự án và ngữ cảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prompts: DesignTypesPrompts`}),` — Trình quản lý prompt để nhận danh sách các tệp hướng dẫn chuyên biệt.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import {
  DesignTypesAi,
  DesignTypesPrompts,
  DesignTypesMcp
} from '@dxtmisha/scripts'

const ai = new DesignTypesAi('dist')
const prompts = new DesignTypesPrompts('ai-resources', ai)
const mcp = new DesignTypesMcp(ai, prompts)
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`make-promisethis`,children:(0,c.jsx)(t.code,{children:`make(): Promise<this>`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tổng hợp danh sách tài nguyên MCP (kiểu, mô tả, ảnh màn hình, prompt) và lưu vào `,(0,c.jsx)(t.code,{children:`ai-mcp-resources.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-sử-dụng`,children:`Ví dụ sử dụng`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`const mcp = new DesignTypesMcp(ai, prompts)
await mcp.make()
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};