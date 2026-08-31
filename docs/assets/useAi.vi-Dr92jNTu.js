import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Composables/useAi - Nhận phiên bản AI`}),`
`,(0,c.jsx)(t.h1,{id:`useai`,children:(0,c.jsx)(t.code,{children:`useAi`})}),`
`,(0,c.jsx)(t.p,{children:`Composable để nhận phiên bản adapter AI dựa trên cấu hình hiện tại của dự án.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`AiAbstract | undefined`}),` — Một phiên bản của lớp nhà cung cấp AI (như `,(0,c.jsx)(t.code,{children:`AiGoogle`}),`, `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),`, `,(0,c.jsx)(t.code,{children:`AiClaude`}),`, `,(0,c.jsx)(t.code,{children:`AiClaudeAgent`}),`, `,(0,c.jsx)(t.code,{children:`AiClaudeCli`}),`, `,(0,c.jsx)(t.code,{children:`AiOpenAi`}),`, `,(0,c.jsx)(t.code,{children:`AiZAi`}),`) tùy thuộc vào loại AI được cấu hình, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu loại không được nhận dạng hoặc chưa được cấu hình.`]}),`
`,(0,c.jsx)(t.h2,{id:`cách-hoạt-động`,children:`Cách hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Composable đọc loại AI từ `,(0,c.jsx)(t.code,{children:`PropertiesConfig.getAiType()`}),` và khởi tạo lớp tương ứng:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'claude'`}),` — trả về `,(0,c.jsx)(t.code,{children:`AiClaude`}),` (Anthropic Claude API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'claude-agent'`}),` — trả về `,(0,c.jsx)(t.code,{children:`AiClaudeAgent`}),` (Anthropic Claude Agent SDK).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'claude-cli'`}),` — trả về `,(0,c.jsx)(t.code,{children:`AiClaudeCli`}),` (Giao diện dòng lệnh Claude CLI).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'gemini'`}),` — trả về `,(0,c.jsx)(t.code,{children:`AiGoogle`}),` (Google Gemini API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'gemini-cli'`}),` — trả về `,(0,c.jsx)(t.code,{children:`AiGoogleCli`}),` (Giao diện dòng lệnh Google Gemini CLI).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'openai'`}),` — trả về `,(0,c.jsx)(t.code,{children:`AiOpenAi`}),` (OpenAI GPT API).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`'zai'`}),` — trả về `,(0,c.jsx)(t.code,{children:`AiZAi`}),` (xAI / Grok API).`]}),`
`,(0,c.jsxs)(t.li,{children:[`Các loại khác trả về `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useAi } from '@dxtmisha/scripts'

const ai = useAi()

if (ai) {
  const response = await ai.generate('Xin chào, AI!')
  console.log(response)
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};