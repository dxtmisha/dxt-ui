import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Classes/AiZAi - Lớp Z.ai (Zhipu AI)`}),`
`,(0,c.jsx)(t.h1,{id:`lớp-aizai`,children:`Lớp AiZAi`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiZAi`}),` là một triển khai cụ thể của `,(0,c.jsx)(t.code,{children:`AiZAiLite`}),` tích hợp với các cấu hình môi trường của dự án. Nó tự động tải thông tin xác thực bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),` để khởi tạo client Zhipu AI (Z.ai).`]}),`
`,(0,c.jsx)(t.h2,{id:`tính-năng-chính`,children:`Tính năng chính`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Cấu hình Tự động`}),` — tự động tải API key và mô hình mặc định bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`getConfigAi()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Kế thừa các Tính năng của Z.ai`}),` — hỗ trợ tất cả các tính năng của `,(0,c.jsx)(t.code,{children:`AiZAiLite`}),` và `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` thông qua các endpoint tương thích với OpenAI được định cấu hình bằng URL cơ sở của Z.ai.`]}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`khởi-tạo`,children:`Khởi tạo`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp `,(0,c.jsx)(t.code,{children:`AiZAi`}),` có thể được khởi tạo trực tiếp mà không cần tham số trong constructor vì nó tự động lấy thông tin xác thực từ môi trường.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { AiZAi } from '@dxtmisha/scripts'

const ai = new AiZAi()

// Thiết lập mô hình (tùy chọn, nếu mô hình mặc định chưa được đặt hoặc cần ghi đè)
ai.setModel('glm-4')

// Tích lũy ngữ cảnh
ai.addPrompt('Bạn là một trợ lý hữu ích.')

// Tạo văn bản
const response = await ai.generate('Giải thích khái niệm về monad.')
`})}),`
`,(0,c.jsx)(t.h2,{id:`phương-thức`,children:`Phương thức`}),`
`,(0,c.jsxs)(t.p,{children:[`Lớp này không định nghĩa thêm phương thức public nào khác. Nó kế thừa tất cả các phương thức cấu hình và thực thi từ `,(0,c.jsx)(t.code,{children:`AiZAiLite`}),`, `,(0,c.jsx)(t.code,{children:`AiOpenAiLite`}),` và `,(0,c.jsx)(t.code,{children:`AiAbstract`}),`.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};