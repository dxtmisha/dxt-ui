import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getElementSafeScript - Tạo một script an toàn cho hydration`}),`
`,(0,c.jsx)(t.h1,{id:`getelementsafescript`,children:(0,c.jsx)(t.code,{children:`getElementSafeScript`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một tiện ích để tạo thẻ `,(0,c.jsx)(t.code,{children:`<script type="application/json">`}),` an toàn, được sử dụng để chuyển dữ liệu từ máy chủ sang máy khách (hydration).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm này tự động tuần tự hóa dữ liệu thành JSON và thoát các thẻ đóng `,(0,c.jsx)(t.code,{children:`<\/script>`}),`, ngăn chặn các cuộc tấn công XSS và lỗi phân tích cú pháp HTML khi nhúng dữ liệu.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — Mã định danh duy nhất (ID) cho thẻ script.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: any`}),` — Dữ liệu cần được tuần tự hóa và lưu trữ trong thẻ.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Một chuỗi chứa thẻ script HTML đã sẵn sàng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getElementSafeScript } from '@dxtmisha/functional-basic'

const data = { 
  user: 'Misha', 
  content: '<\/script><script>alert(1)<\/script>' 
}

console.log(getElementSafeScript('hydration-data', data))
// Kết quả:
// <script id="hydration-data" type="application/json">
//   {"user":"Misha","content":"<\\\\/script><script>alert(1)<\\\\/script>"}
// <\/script>
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};