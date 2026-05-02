import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getElementSafeScript - Tạo một script an toàn cho hydration`}),`
`,(0,c.jsx)(n.h1,{id:`getelementsafescript`,children:(0,c.jsx)(n.code,{children:`getElementSafeScript`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một tiện ích để tạo thẻ `,(0,c.jsx)(n.code,{children:`<script type="application/json">`}),` an toàn, được sử dụng để chuyển dữ liệu từ máy chủ sang máy khách (hydration).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này tự động tuần tự hóa dữ liệu thành JSON và thoát các thẻ đóng `,(0,c.jsx)(n.code,{children:`<\/script>`}),`, ngăn chặn các cuộc tấn công XSS và lỗi phân tích cú pháp HTML khi nhúng dữ liệu.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`id: string`}),` — Mã định danh duy nhất (ID) cho thẻ script.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: any`}),` — Dữ liệu cần được tuần tự hóa và lưu trữ trong thẻ.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Một chuỗi chứa thẻ script HTML đã sẵn sàng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getElementSafeScript } from '@dxtmisha/functional-basic'

const data = { 
  user: 'Misha', 
  content: '<\/script><script>alert(1)<\/script>' 
}

console.log(getElementSafeScript('hydration-data', data))
// Kết quả:
// <script id="hydration-data" type="application/json">
//   {"user":"Misha","content":"<\\\\/script><script>alert(1)<\\\\/script>"}
// <\/script>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};