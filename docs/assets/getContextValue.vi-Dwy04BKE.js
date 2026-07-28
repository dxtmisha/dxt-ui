import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-CKlddtvc.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/nitro-basic/Functions/getContextValue - Lấy giá trị ngữ cảnh`}),`
`,(0,c.jsx)(n.h1,{id:`getcontextvalue`,children:(0,c.jsx)(n.code,{children:`getContextValue`})}),`
`,(0,c.jsx)(n.p,{children:`Một hàm tiện ích giúp truy xuất một giá trị cụ thể từ ngữ cảnh ứng dụng Server-Side Rendering (SSR) đang hoạt động dựa trên tên khóa của nó.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`key: string`}),` — Khóa của giá trị cần truy xuất (ví dụ: `,(0,c.jsx)(n.code,{children:`'headers'`}),`, `,(0,c.jsx)(n.code,{children:`'storage'`}),`, hoặc `,(0,c.jsx)(n.code,{children:`'cookie'`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`any | undefined`}),` — Giá trị ngữ cảnh được truy xuất, hoặc `,(0,c.jsx)(n.code,{children:`undefined`}),` nếu ngữ cảnh không hoạt động hoặc khóa không tồn tại.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getContextValue } from '@dxtmisha/nitro-basic'

// Lấy cookie hoặc headers từ ngữ cảnh yêu cầu đang hoạt động trong quá trình SSR:
const cookies = getContextValue<string>('cookie')
const headers = getContextValue<Headers>('headers')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};