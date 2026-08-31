import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiZAiLite - Lớp Z.ai (Zhipu AI) Rút gọn`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aizailite`,children:`Lớp AiZAiLite`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiZAiLite`}),` là một triển khai gọn nhẹ của `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` được định cấu hình riêng cho Zhipu AI (Z.ai). Nó ghi đè phương thức khởi tạo client để điều hướng tất cả các yêu cầu dịch vụ đến endpoint tương thích với OpenAI của Z.ai.`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Khả năng Tương thích OpenAI`}),` — kế thừa tất cả các khả năng của `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` bao gồm tạo văn bản, bộ đệm lời nhắc và cấu trúc đa phương thức.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Endpoint Chuyên dụng`}),` — tự động định cấu hình client OpenAI với URL cơ sở của Z.ai (`,(0,c.jsx)(t.code,{children:`https://api.z.ai/api/paas/v4`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.code,{children:`AiZAiLite`}),` yêu cầu truyền thông tin xác thực thủ công thông qua constructor.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số khởi tạo:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — API key cho dịch vụ Z.ai.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`model: string`}),` — Định danh mô hình ban đầu (ví dụ: 'glm-4').`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiZAiLite } from '@dxtmisha/scripts'

const ai = new AiZAiLite(process.env.ZAI_API_KEY, 'glm-4')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsx)(t.h3,{id:`các-hook-triển-khai-nội-bộ`,children:`Các Hook Triển khai Nội bộ`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp này ghi đè hook khởi tạo của `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),`:`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`init(): void`}),` — Khởi tạo client `,(0,c.jsx)(t.code,{children:`OpenAI`}),` với URL cơ sở của Z.ai và key được cung cấp.`]}),`
`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};