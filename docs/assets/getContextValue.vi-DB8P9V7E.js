import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/getContextValue - Lấy giá trị ngữ cảnh`}),`
`,(0,c.jsx)(t.h1,{id:`getcontextvalue`,children:(0,c.jsx)(t.code,{children:`getContextValue`})}),`
`,(0,c.jsx)(t.p,{children:`Một hàm tiện ích giúp truy xuất một giá trị cụ thể từ ngữ cảnh ứng dụng Server-Side Rendering (SSR) đang hoạt động dựa trên tên khóa của nó.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`key: string`}),` — Khóa của giá trị cần truy xuất (ví dụ: `,(0,c.jsx)(t.code,{children:`'headers'`}),`, `,(0,c.jsx)(t.code,{children:`'storage'`}),`, hoặc `,(0,c.jsx)(t.code,{children:`'cookie'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`any | undefined`}),` — Giá trị ngữ cảnh được truy xuất, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu ngữ cảnh không hoạt động hoặc khóa không tồn tại.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getContextValue } from '@dxtmisha/nitro-basic'

// Lấy cookie hoặc headers từ ngữ cảnh yêu cầu đang hoạt động trong quá trình SSR:
const cookies = getContextValue<string>('cookie')
const headers = getContextValue<Headers>('headers')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};