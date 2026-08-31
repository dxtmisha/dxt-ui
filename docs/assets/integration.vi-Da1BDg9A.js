import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/7. Tích hợp vào dự án và IDE`}),`
`,(0,c.jsx)(t.h1,{id:`tích-hợp-aidd-vào-dự-án-và-ide`,children:`Tích hợp AIDD vào Dự án và IDE`}),`
`,(0,c.jsxs)(t.p,{children:[`Để triển khai cơ sở hạ tầng AI-Driven Development (AIDD) trong một ứng dụng mới hoặc dự án bên ngoài sử dụng thư viện `,(0,c.jsx)(t.code,{children:`dxt-ui`}),`, hãy thực hiện các bước cấu hình chuẩn sau đây.`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-1-cài-đặt-package-scripts`,children:`Bước 1: Cài đặt Package Scripts`}),`
`,(0,c.jsxs)(t.p,{children:[`Để dự án có thể tự động tổng hợp tài liệu từ tất cả các dependency `,(0,c.jsx)(t.code,{children:`@dxtmisha/*`}),` đã cài đặt, hãy cài đặt `,(0,c.jsx)(t.code,{children:`@dxtmisha/scripts`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm install @dxtmisha/scripts --save-dev
`})}),`
`,(0,c.jsx)(t.h2,{id:`bước-2-cấu-hình-packagejson`,children:`Bước 2: Cấu hình package.json`}),`
`,(0,c.jsxs)(t.p,{children:[`Thêm các lệnh tạo lời nhắc vào phần `,(0,c.jsx)(t.code,{children:`scripts`}),` trong `,(0,c.jsx)(t.code,{children:`package.json`}),` ở thư mục gốc:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "scripts": {
    "prompt": "dxt-prompt",
    "postinstall": "npm run prompt"
  }
}
`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`"prompt": "dxt-prompt"`})}),` — Chạy thủ công lệnh tạo `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` bất kỳ lúc nào.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`"postinstall": "npm run prompt"`})}),` — Tự động chạy ngay sau khi `,(0,c.jsx)(t.code,{children:`npm install`}),` hoặc `,(0,c.jsx)(t.code,{children:`npm update`}),`, đảm bảo ngữ cảnh AI luôn được cập nhật mỗi khi cài đặt phiên bản mới của các package `,(0,c.jsx)(t.code,{children:`@dxtmisha/*`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`bước-3-cấu-hình-gitignore`,children:`Bước 3: Cấu hình .gitignore`}),`
`,(0,c.jsxs)(t.p,{children:[`Các tệp được sinh tự động và tệp tạm thời không nên đưa vào Git. Thêm chúng vào `,(0,c.jsx)(t.code,{children:`.gitignore`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-gitignore`,children:`ai-prompt.md
ai-types.md
ai-description.md
ai-mcp-resources.json
ai-mcp-all-resources.json
ai-mcp-all-resources.ts
ai-tmp
ai-types-temp
`})}),`
`,(0,c.jsx)(t.h2,{id:`bước-4-cấu-hình-chỉ-thị-hệ-thống-cho-ai-agent`,children:`Bước 4: Cấu hình chỉ thị hệ thống cho AI Agent`}),`
`,(0,c.jsxs)(t.p,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` phát huy hiệu quả cao nhất khi trợ lý AI bắt buộc phải đọc nó ở đầu mỗi phiên làm việc. Hãy tạo tệp quy tắc hệ thống tương ứng với môi trường phát triển:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Antigravity IDE / Agent Customizations:`}),` `,(0,c.jsx)(t.code,{children:`.agents/rules/main.md`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cursor IDE:`}),` `,(0,c.jsx)(t.code,{children:`.cursorrules`}),` hoặc `,(0,c.jsx)(t.code,{children:`.cursor/rules/*.mdc`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Windsurf IDE:`}),` `,(0,c.jsx)(t.code,{children:`.windsurfrules`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Claude Code / CLI:`}),` `,(0,c.jsx)(t.code,{children:`CLAUDE.md`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`GitHub Copilot / Codex:`}),` `,(0,c.jsx)(t.code,{children:`AGENTS.md`})]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:`Thêm khối chỉ thị bắt buộc sau vào tệp quy tắc:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-markdown`,children:`# AI Agent Rules

## Preparation for Work (MANDATORY GUARD)
**🔴 STOP! DO NOT PROCEED UNTIL YOU DO THIS 🔴**
At the beginning of a conversation session or before starting work on code/plans, you MUST read the \`ai-prompt.md\` file located in the project root COMPLETELY in full, from the first line to the very last line, without skipping any sections or reading only partially.
Once \`ai-prompt.md\` has been read during the current session, you do NOT need to re-read it on every single turn, unless you need to refresh your context or verify specific guidelines.
If \`ai-prompt.md\` exceeds the single view line limit, make consecutive calls to view tool parameters to cover every single line of the file.
This is your absolute priority. You must strictly adhere to all rules specified in \`ai-prompt.md\`.
`})}),`
`,(0,c.jsx)(t.h2,{id:`bước-5-tạo-lần-đầu-và-kiểm-tra`,children:`Bước 5: Tạo lần đầu và kiểm tra`}),`
`,(0,c.jsx)(t.p,{children:`Sau khi hoàn tất cấu hình, chạy lệnh tổng hợp ngữ cảnh:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-bash`,children:`npm run prompt
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tệp `,(0,c.jsx)(t.code,{children:`ai-prompt.md`}),` sẽ được tạo ở thư mục gốc, tổng hợp các hợp đồng component `,(0,c.jsx)(t.code,{children:`@dxtmisha/d1`}),`, tiện ích phản ứng `,(0,c.jsx)(t.code,{children:`@dxtmisha/functional`}),`, SCSS token `,(0,c.jsx)(t.code,{children:`@dxtmisha/styles`}),` và các tiêu chuẩn kỹ thuật cốt lõi.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};