import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/3. Bộ nhớ dự án`}),`
`,(0,c.jsx)(t.h1,{id:`bộ-nhớ-cục-bộ-của-package-ai-memorymd`,children:`Bộ nhớ cục bộ của Package (ai-memory.md)`}),`
`,(0,c.jsxs)(t.p,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` là cơ chế lưu giữ bộ nhớ dài hạn cho các trợ lý AI ở cấp độ từng package riêng biệt trong monorepo. Nó cho phép ghi nhớ kinh nghiệm kiến trúc, các quyết định thiết kế, ràng buộc phát hiện được và sở thích của lập trình viên qua các phiên làm việc.`]}),`
`,(0,c.jsx)(t.p,{children:`Khác với các tệp lời nhắc toàn cục tĩnh, bộ nhớ package được bổ sung động trong quá trình cộng tác và có quyền ưu tiên cục bộ cao nhất khi AI đưa ra quyết định.`}),`
`,(0,c.jsx)(t.h2,{id:`tại-sao-bộ-nhớ-cục-bộ-lại-quan-trọng-trong-monorepo`,children:`Tại sao bộ nhớ cục bộ lại quan trọng trong Monorepo`}),`
`,(0,c.jsxs)(t.p,{children:[`Trong một dự án monorepo phức tạp với nhiều package độc lập (`,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/constructor`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),`, `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, v.v.), mỗi phần của mã nguồn đều có những đặc thù riêng:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cô lập ngữ cảnh`}),` — Các quy tắc và ràng buộc định kiểu của `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` không được làm ô nhiễm hoặc gây nhiễu ngữ cảnh của `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional-basic`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ngăn ngừa lỗi lặp lại`}),` — Khi lập trình viên chỉ ra một lưu ý đặc thù (ví dụ: không dùng bảng trong MDX cho `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),`), AI sẽ ghi lại ràng buộc này vào bộ nhớ và không bao giờ lặp lại lỗi đó nữa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Không phụ thuộc vào lịch sử chat`}),` — Khi làm mới ngữ cảnh hoặc mở phiên làm việc mới, AI đọc `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` ở bước đầu tiên và lập tức nắm bắt toàn bộ thỏa thuận cục bộ.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`quy-tắc-nghiêm-ngặt-khi-duy-trì-ai-memorymd`,children:`Quy tắc nghiêm ngặt khi duy trì ai-memory.md`}),`
`,(0,c.jsx)(t.p,{children:`Để duy trì tính trong sạch và hiệu quả của bộ nhớ, các quy tắc sau bắt buộc phải tuân thủ:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Vị trí cục bộ (Bắt buộc ở thư mục gốc của package)`}),`
Tệp `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` chỉ được đặt trực tiếp trong thư mục gốc của package tương ứng (ví dụ: `,(0,c.jsx)(t.code,{children:`packages/scripts/ai-memory.md`}),`). Nghiêm cấm ghi quy tắc của từng package vào tệp bộ nhớ ở gốc monorepo.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Kích hoạt rõ ràng từ lập trình viên`}),`
AI `,(0,c.jsx)(t.strong,{children:`chỉ`}),` cập nhật `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` khi có lệnh trực tiếp từ lập trình viên (từ khóa: «Запомни», «Remember», «Save to memory») hoặc khi xác nhận các sửa đổi kiến trúc quan trọng.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Bảo toàn tính toàn vẹn và loại bỏ trùng lặp (Integrity & Deduplication)`}),`
Khi thêm quy tắc mới, AI `,(0,c.jsx)(t.strong,{children:`chỉ được phép loại bỏ các câu trùng lặp hoặc giải quyết các xung đột trực tiếp`}),`. Nội dung và cách diễn đạt của các quy tắc hiện có không được thay đổi, rút gọn hoặc viết lại. Nghiêm cấm xóa bỏ các quy tắc và ràng buộc đã thiết lập trước đó.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Chỉ ghi quy tắc kiến trúc quan trọng`}),`
Nghiêm cấm ghi nhật ký thay đổi thông thường, đoạn hội thoại chat hoặc ghi chú tạm thời vào tệp bộ nhớ. Tệp chỉ chứa các ràng buộc kiến trúc, hợp đồng kiểu và quy ước định dạng thực tế.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Đường dẫn tương đối`}),`
Chỉ sử dụng đường dẫn tương đối từ thư mục gốc của package; nghiêm cấm sử dụng đường dẫn tuyệt đối của máy tính.`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-tệp-ai-memorymd`,children:`Ví dụ tệp ai-memory.md`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`# AI Workspace Memory (packages/scripts)

This file contains package-specific guidelines for @dxtmisha/scripts.

## Guidelines
- Follow strictly all global development principles from root ai-prompt.md.
- Documentation formatting rules for Storybook:
  - Do NOT use horizontal lines (---).
  - Do NOT use markdown tables (| ... |) — format all structured items as bullet lists (- **Key**: description).
  - Focus on practical developer workflows and actions, not internal engine details.
`})}),`
`,(0,c.jsx)(t.h2,{id:`cách-sử-dụng-bộ-nhớ-trong-công-việc`,children:`Cách sử dụng bộ nhớ trong công việc`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Lưu lại quy ước:`}),`
Lập trình viên: `,(0,c.jsx)(t.em,{children:`«Hãy nhớ: trong tất cả tài liệu storybook của package này, không bao giờ dùng dấu gạch ngang phân cách và bảng markdown»`}),`.
AI: Ghi thêm mục này vào tệp `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` của package hiện tại.`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Đọc khi bắt đầu phiên:`}),`
Khi nhận bất kỳ nhiệm vụ nào trong package, AI tuân theo quy tắc `,(0,c.jsx)(t.strong,{children:`Chronological Guard`}),`, mở `,(0,c.jsx)(t.code,{children:`ai-memory.md`}),` đầu tiên để áp dụng mọi ràng buộc đã lưu.`]}),`
`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};