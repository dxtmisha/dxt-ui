import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Functions/initScriptsJson - Tạo kịch bản Hydrat hóa`}),`
`,(0,c.jsx)(t.h1,{id:`initscriptsjson`,children:(0,c.jsx)(t.code,{children:`initScriptsJson`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một hàm để tạo các kịch bản JSON cần thiết cho việc hydrat hóa dữ liệu ở phía client. Nó thu thập trạng thái hiện tại từ `,(0,c.jsx)(t.code,{children:`ServerStorage`}),` và dữ liệu hydrat hóa của `,(0,c.jsx)(t.code,{children:`Api`}),`, kết hợp chúng thành một chuỗi duy nhất của các script HTML.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Một chuỗi chứa các script JSON (ví dụ: `,(0,c.jsx)(t.code,{children:`<script type="application/json">...<\/script>`}),`).`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { initScriptsJson } from '@dxtmisha/nitro-basic'

const hydrationScripts = initScriptsJson()
// Chèn hydrationScripts vào template HTML của bạn trước thẻ đóng </body>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};