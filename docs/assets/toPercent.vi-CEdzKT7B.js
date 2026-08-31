import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/toPercent - Tính tỷ lệ phần trăm từ một giá trị`}),`
`,(0,c.jsx)(t.h1,{id:`topercent`,children:(0,c.jsx)(t.code,{children:`toPercent`})}),`
`,(0,c.jsx)(t.p,{children:`Tính toán tỷ lệ của giá trị hiện tại so với giá trị tối đa. Trả về một số trong phạm vi từ 0 đến 1.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`maxValue: number`}),` — Giá trị tối đa có thể (100%).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number`}),` — Giá trị hiện tại.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — Kết quả dưới dạng phân số thập phân (ví dụ: `,(0,c.jsx)(t.code,{children:`0.5`}),` cho 50%).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toPercent } from '@dxtmisha/functional-basic'

console.log(toPercent(200, 100)) // 0.5
console.log(toPercent(100, 25)) // 0.25
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};