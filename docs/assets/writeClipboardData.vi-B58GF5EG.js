import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/writeClipboardData - Ghi văn bản vào bộ nhớ tạm (clipboard)`}),`
`,(0,c.jsx)(t.h1,{id:`writeclipboarddata`,children:(0,c.jsx)(t.code,{children:`writeClipboardData`})}),`
`,(0,c.jsxs)(t.p,{children:[`Ghi một chuỗi văn bản vào bộ nhớ tạm của người dùng trong môi trường DOM. Hàm sử dụng API `,(0,c.jsx)(t.code,{children:`navigator.clipboard.writeText(text)`}),` hiện đại, và nếu xảy ra lỗi sẽ chuyển sang phương thức dự phòng sử dụng phần tử `,(0,c.jsx)(t.code,{children:`<textarea>`}),` ẩn tạm thời cùng với `,(0,c.jsx)(t.code,{children:`document.execCommand('copy')`}),`, đồng thời báo cáo lỗi qua `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` (nhóm `,(0,c.jsx)(t.code,{children:`'clipboard'`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: string`}),` — Văn bản cần ghi.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Promise<void>`}),` — Một promise sẽ hoàn thành sau khi ghi thành công.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { writeClipboardData } from '@dxtmisha/functional-basic'

await writeClipboardData('Văn bản đã sao chép')
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};