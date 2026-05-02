import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/nitro-basic/Functions/initScriptsJson - Tạo kịch bản Hydrat hóa`}),`
`,(0,c.jsx)(n.h1,{id:`initscriptsjson`,children:(0,c.jsx)(n.code,{children:`initScriptsJson`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một hàm để tạo các kịch bản JSON cần thiết cho việc hydrat hóa dữ liệu ở phía client. Nó thu thập trạng thái hiện tại từ `,(0,c.jsx)(n.code,{children:`ServerStorage`}),` và dữ liệu hydrat hóa của `,(0,c.jsx)(n.code,{children:`Api`}),`, kết hợp chúng thành một chuỗi duy nhất của các script HTML.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Một chuỗi chứa các script JSON (ví dụ: `,(0,c.jsx)(n.code,{children:`<script type="application/json">...<\/script>`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { initScriptsJson } from '@dxtmisha/nitro-basic'

const hydrationScripts = initScriptsJson()
// Chèn hydrationScripts vào template HTML của bạn trước thẻ đóng </body>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};