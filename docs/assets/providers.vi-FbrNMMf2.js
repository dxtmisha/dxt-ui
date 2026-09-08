import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DTffVoCm.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/2. AI/11. Các nhà cung cấp AI được hỗ trợ`}),`
`,(0,c.jsx)(t.h1,{id:`các-nhà-cung-cấp-ai-được-hỗ-trợ`,children:`Các nhà cung cấp AI được hỗ trợ`}),`
`,(0,c.jsxs)(t.p,{children:[`Tài liệu tham khảo nhanh các thông số cấu hình và danh sách các nhà cung cấp AI được hỗ trợ trong `,(0,c.jsx)(t.code,{children:`design.config.json`}),` hoặc `,(0,c.jsx)(t.code,{children:`design.config.local.json`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`các-tham-số-cấu-hình`,children:`Các tham số cấu hình`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiType`})}),` — Loại nhà cung cấp hoặc công cụ chạy CLI.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiModel`})}),` — Mã định danh mô hình mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiKey`})}),` — Khóa API để xác thực (không bắt buộc đối với công cụ CLI nếu đã xác thực trong hệ thống).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:(0,c.jsx)(t.code,{children:`aiConfig`})}),` — Các tùy chọn tạo bổ sung (nhiệt độ, giới hạn token, tiêu đề tùy chỉnh).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`danh-sách-nhà-cung-cấp-aitype`,children:`Danh sách nhà cung cấp (aiType)`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`gemini`}),` (Google Gemini API)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lớp`}),`: `,(0,c.jsx)(t.code,{children:`AiGoogle`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SDK`}),`: `,(0,c.jsx)(t.code,{children:`@google/genai`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mô hình`}),`: `,(0,c.jsx)(t.code,{children:`gemini-3.7-flash`}),`, `,(0,c.jsx)(t.code,{children:`gemini-2.5-pro`}),`, `,(0,c.jsx)(t.code,{children:`gemini-2.5-flash`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Yêu cầu`}),`: Khóa Google AI API trong `,(0,c.jsx)(t.code,{children:`aiKey`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`gemini-cli`}),` (Google Gemini CLI)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lớp`}),`: `,(0,c.jsx)(t.code,{children:`AiGoogleCli`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Yêu cầu`}),`: Tiện ích `,(0,c.jsx)(t.code,{children:`gemini`}),` CLI được cài đặt trong PATH.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mô hình`}),`: `,(0,c.jsx)(t.code,{children:`gemini-3.7-flash`}),`, `,(0,c.jsx)(t.code,{children:`gemini-2.5-flash`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`antigravity-cli`}),` (Google Antigravity CLI)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lớp`}),`: `,(0,c.jsx)(t.code,{children:`AiAntigravityCli`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Yêu cầu`}),`: Tiện ích `,(0,c.jsx)(t.code,{children:`agy`}),` CLI được cài đặt trong PATH.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mô hình`}),`: `,(0,c.jsx)(t.code,{children:`gemini-3.7-flash`}),`, `,(0,c.jsx)(t.code,{children:`gemini-2.5-flash`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`claude`}),` (Anthropic Claude API)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lớp`}),`: `,(0,c.jsx)(t.code,{children:`AiClaude`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SDK`}),`: `,(0,c.jsx)(t.code,{children:`@anthropic-ai/sdk`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mô hình`}),`: `,(0,c.jsx)(t.code,{children:`claude-3-7-sonnet-20250219`}),`, `,(0,c.jsx)(t.code,{children:`claude-3-5-sonnet-20241022`}),`, `,(0,c.jsx)(t.code,{children:`claude-3-5-haiku-20241022`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Yêu cầu`}),`: Khóa Anthropic API trong `,(0,c.jsx)(t.code,{children:`aiKey`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`claude-cli`}),` (Anthropic Claude CLI)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lớp`}),`: `,(0,c.jsx)(t.code,{children:`AiClaudeCli`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Yêu cầu`}),`: Tiện ích `,(0,c.jsx)(t.code,{children:`claude`}),` CLI được cài đặt trong PATH.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mô hình`}),`: `,(0,c.jsx)(t.code,{children:`claude-3-7-sonnet`}),`, `,(0,c.jsx)(t.code,{children:`claude-3-5-sonnet`})]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`claude-agent`}),` (Anthropic Claude Agent SDK)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lớp`}),`: `,(0,c.jsx)(t.code,{children:`AiClaudeAgent`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SDK`}),`: `,(0,c.jsx)(t.code,{children:`@anthropic-ai/claude-agent-sdk`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Yêu cầu`}),`: Khóa Anthropic API trong `,(0,c.jsx)(t.code,{children:`aiKey`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`openai`}),` (OpenAI API)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lớp`}),`: `,(0,c.jsx)(t.code,{children:`AiOpenAi`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SDK`}),`: `,(0,c.jsx)(t.code,{children:`openai`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mô hình`}),`: `,(0,c.jsx)(t.code,{children:`gpt-4o`}),`, `,(0,c.jsx)(t.code,{children:`gpt-4o-mini`}),`, `,(0,c.jsx)(t.code,{children:`o3-mini`}),`, `,(0,c.jsx)(t.code,{children:`o1`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Yêu cầu`}),`: Khóa OpenAI API trong `,(0,c.jsx)(t.code,{children:`aiKey`}),`. Hỗ trợ các điểm cuối tương thích qua `,(0,c.jsx)(t.code,{children:`aiConfig.baseURL`}),`.`]}),`
`]}),`
`]}),`
`,(0,c.jsxs)(t.li,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsxs)(t.strong,{children:[(0,c.jsx)(t.code,{children:`zai`}),` (xAI Grok)`]}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Lớp`}),`: `,(0,c.jsx)(t.code,{children:`AiZAi`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`SDKs`}),`: `,(0,c.jsx)(t.code,{children:`@ai-sdk/xai`}),`, `,(0,c.jsx)(t.code,{children:`ai`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Mô hình`}),`: `,(0,c.jsx)(t.code,{children:`grok-4.5`}),`, `,(0,c.jsx)(t.code,{children:`grok-2`})]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Yêu cầu`}),`: Khóa xAI API trong `,(0,c.jsx)(t.code,{children:`aiKey`}),`.`]}),`
`]}),`
`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ-cấu-hình-designconfigjson`,children:`Ví dụ cấu hình (design.config.json)`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy...",
  "aiConfig": {
    "temperature": 0.2
  }
}
`})}),`
`,(0,c.jsxs)(t.p,{children:[`Để phát triển cục bộ mà không commit khóa lên Git, hãy sử dụng `,(0,c.jsx)(t.code,{children:`design.config.local.json`}),`:`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-json`,children:`{
  "aiType": "gemini",
  "aiModel": "gemini-3.7-flash",
  "aiKey": "AIzaSy..."
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};