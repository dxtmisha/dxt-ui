import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/1. Lời nhắc hệ thống`}),`
`,(0,c.jsx)(t.h1,{id:`lời-nhắc-hệ-thống-hợp-nhất-ai-promptmd`,children:`Lời nhắc hệ thống hợp nhất (ai-prompt.md)`}),`
`,(0,c.jsxs)(t.p,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` là tài liệu tổng hợp trung tâm của monorepo, đóng vai trò là `,(0,c.jsx)(t.strong,{children:`Nguồn chân lý duy nhất (Single Source of Truth)`}),` cho tất cả các mô hình trí tuệ nhân tạo và trợ lý lập trình AI (Claude, Gemini, Antigravity, Cursor, Windsurf, Claude Code, GitHub Copilot).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Tệp này được tạo tự động bởi công cụ `,(0,c.jsx)(t.code,{children:`dxt-prompt`}),`, kết hợp các nguyên tắc kỹ thuật cốt lõi, tiêu chuẩn thành phần Vue và tài liệu của tất cả các package trong monorepo cùng các thư viện phụ thuộc.`]}),`
`,(0,c.jsxs)(t.h2,{id:`các-vấn-đề-chính-được-giải-quyết-bởi-ai-promptmd`,children:[`Các vấn đề chính được giải quyết bởi `,(0,c.jsx)(t.code,{children:`ai-prompt.md`})]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Loại bỏ "Chứng hay quên ngữ cảnh"`}),` — Lập trình viên không còn phải viết lời nhắc hệ thống thủ công, giải thích quy tắc BEM hay cấm sử dụng kiểu `,(0,c.jsx)(t.code,{children:`any`}),`. Trợ lý AI tự động nhận được toàn bộ tiêu chuẩn monorepo ngay khi bắt đầu phiên làm việc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bảo vệ chống ảo giác (Zero Hallucinations)`}),` — Tài liệu tích hợp danh mục chính xác của tất cả các thư viện có sẵn kèm theo mô tả mục đích, khả năng chức năng và liên kết đến các khai báo kiểu đã được làm sạch (`,(0,c.jsx)(t.code,{children:`ai-types.md`}),`). AI chỉ sử dụng các phương thức và interface thực sự tồn tại.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Đồng bộ hóa tức thì trong Monorepo`}),` — Khi các phương thức hoặc component công khai được cập nhật trong bất kỳ package nào (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, v.v.), chỉ cần chạy `,(0,c.jsx)(t.code,{children:`npm run prompt`}),`: tệp ở thư mục gốc sẽ được cập nhật và tất cả trợ lý AI lập tức có dữ liệu mới nhất.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Độc lập với môi trường phát triển`}),` — Tệp quy tắc markdown chuẩn hóa hoạt động ổn định và nhất quán trên mọi IDE, trình biên tập mã và mô hình AI.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`cấu-trúc-nội-bộ-của-ai-promptmd`,children:`Cấu trúc nội bộ của ai-prompt.md`}),`
`,(0,c.jsx)(t.p,{children:`Tệp được cấu thành từ bốn khối logic liên kết chặt chẽ:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`System Role & Global Principles (AI Code Promise)`}),`
Các quy tắc nghiêm ngặt về chất lượng mã và kỷ luật của AI:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Chronological Guard`}),` — Trình tự đọc ngữ cảnh bắt buộc (`,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` ➔ `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` ➔ `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Copy-Paste Ready`}),` — Sinh mã hoàn chỉnh, sẵn sàng chạy ngay mà không có phần giữ chỗ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Uncompromising TS`}),` — Kiểu dữ liệu chặt chẽ, cấm `,(0,c.jsx)(t.code,{children:`any`}),`, bắt buộc interface cho mọi I/O.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Strict Scope Lock`}),` — Nghiêm cấm tự ý tái cấu trúc mã hoặc sửa đổi các tệp ngoài phạm vi.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Vue Component Implementation Rules (Vue.js Style Guide)`}),`
Tiêu chuẩn phát triển UI component:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Sử dụng strictly `,(0,c.jsx)(t.code,{children:`<script setup lang="ts">`}),`.`]}),`
`,(0,c.jsx)(t.li,{children:`Tên component dạng PascalCase và class CSS theo chuẩn BEM (kebab-case).`}),`
`,(0,c.jsx)(t.li,{children:`Luồng dữ liệu một chiều (Props Down, Events Up).`}),`
`,(0,c.jsx)(t.li,{children:`Nghiêm cấm sửa đổi trực tiếp style gốc của các UI component có sẵn.`}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Danh mục Package và Thư viện (Package Registry)`}),`
Tổng quan metadata cho từng package được phát hiện:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Tên package và đường dẫn vị trí.`}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Package Description`}),` — Mô tả ngắn gọn về mục đích kỹ thuật của thư viện.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Triggers for Studying ai-types.md`}),` — Điều kiện cụ thể khi AI bắt buộc phải đọc toàn bộ chữ ký kiểu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Key Capabilities`}),` — Danh sách các nhóm tính năng cốt lõi.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Rules`}),` — Danh sách quy tắc chuyên môn bắt buộc kèm trigger nghiên cứu từ `,(0,c.jsx)(t.code,{children:`ai-resources/`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[`Đường dẫn tham chiếu đến `,(0,c.jsx)(t.code,{children:`ai-types.md`}),`, `,(0,c.jsx)(t.code,{children:`ai-developer.md`}),` và thư mục `,(0,c.jsx)(t.code,{children:`ai-screenshot/`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`High-Priority Directives`}),`
Các chỉ thị ưu tiên cao từ tệp `,(0,c.jsx)(t.code,{children:`ai-instruction.md`}),` (nếu có ở thư mục gốc dự án), ghi đè lên mọi quy tắc mặc định.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Mandatory Final Self-Audit`}),`
Danh sách kiểm tra bắt buộc trước khi hoàn thành bất kỳ nhiệm vụ nào.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-trích-đoạn-ai-promptmd`,children:`Ví dụ trích đoạn ai-prompt.md`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`# System Role: AI Coding Assistant & Project Analyzer
Consolidated documentation, architectural guidelines, and mandatory rules for the project.

## Global Code Implementation Rules
### Global Development Principles (AI Code Promise)
0. Mandatory Deep Study (CHRONOLOGICAL GUARD):
   - Step 1: Read/create local ai-memory.md strictly in current package root.
   - Step 2: Read root ai-prompt.md and study library descriptions.
   - Step 3: Study linked ai-types.md BEFORE writing code.
1. "Copy-Paste Ready": Generate complete runnable files. No placeholders.
2. Zero Hallucinations: Strictly use package.json dependencies.
3. Uncompromising TS: No any. Interfaces for all I/O.

# @dxtmisha/d1
## Project location: Root directory
The project is located at: 'node_modules/@dxtmisha/d1'.

## Package Description & Module Overview
This package provides a comprehensive collection of Vue 3 UI components and design system utilities built on top of constructor primitives.

Key Capabilities: UI Components, Form Controls, Navigation Elements, Layout Containers, Data Display

## Mandatory Rules
You MUST evaluate whether your task relates to any of the following topics:
- 'node_modules/@dxtmisha/d1/ai-resources/background.md': Rules and mixins for configuring background colors, surface opacities, and gradients in SCSS.
- 'node_modules/@dxtmisha/d1/ai-resources/border.md': SCSS styling standards and mixins for borders and dividers.

## Package Type Definitions (Must Read in Full When Working with Package)
'node_modules/@dxtmisha/d1/ai-types.md'

## Component Visual References (Screenshots)
- 'node_modules/@dxtmisha/d1/ai-screenshot/screenshot-8_1.webp'
`})}),`
`,(0,c.jsx)(t.h2,{id:`chạy-công-cụ-tạo-lời-nhắc`,children:`Chạy công cụ tạo lời nhắc`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thông qua npm script:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run prompt
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thông qua npx CLI:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt
`})}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kèm theo tạo tài nguyên MCP (Model Context Protocol):`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npx dxt-prompt --mcp
`})}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};