import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getHydrationData - Truy xuất dữ liệu hydration từ thẻ script`}),`
`,(0,c.jsx)(t.h1,{id:`gethydrationdata`,children:(0,c.jsx)(t.code,{children:`getHydrationData`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một tiện ích để truy xuất và phân tích cú pháp dữ liệu JSON từ thẻ `,(0,c.jsx)(t.code,{children:`<script>`}),` trong DOM theo `,(0,c.jsx)(t.code,{children:`id`}),` (thường được tạo trên máy chủ thông qua `,(0,c.jsx)(t.code,{children:`getElementSafeScript`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Trong môi trường trình duyệt (`,(0,c.jsx)(t.code,{children:`isDomRuntime()`}),`), hàm tìm phần tử `,(0,c.jsx)(t.code,{children:`<script>`}),` theo `,(0,c.jsx)(t.code,{children:`id`}),`, phân tích cú pháp `,(0,c.jsx)(t.code,{children:`textContent`}),` của nó dưới dạng JSON và tùy chọn xóa thẻ `,(0,c.jsx)(t.code,{children:`<script>`}),` khỏi DOM (mặc định `,(0,c.jsx)(t.code,{children:`remove = true`}),`). Nếu không tìm thấy phần tử, không phải là thẻ `,(0,c.jsx)(t.code,{children:`<script>`}),`, được gọi trong môi trường SSR, hoặc nếu phân tích cú pháp JSON thất bại (được báo cáo qua `,(0,c.jsx)(t.code,{children:`ErrorCenter`}),` với `,(0,c.jsx)(t.code,{children:`group: 'hydration'`}),`, `,(0,c.jsx)(t.code,{children:`code: 'error'`}),`), hàm sẽ trả về `,(0,c.jsx)(t.code,{children:`defaultValue`}),` một cách an toàn.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`id: string`}),` — Mã định danh duy nhất (ID) của thẻ script.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`defaultValue: T`}),` — Giá trị mặc định trả về nếu không tìm thấy thẻ script hoặc dữ liệu không hợp lệ.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`remove?: boolean`}),` — Có xóa phần tử script khỏi DOM sau khi đọc hay không (mặc định: `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`T`}),` — Dữ liệu đã phân tích cú pháp từ thẻ script, hoặc `,(0,c.jsx)(t.code,{children:`defaultValue`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getHydrationData } from '@dxtmisha/functional-basic'

// Giả sử trong DOM có:
// <script id="hydration-data" type="application/json">{"user":"Misha"}<\/script>

const data = getHydrationData('hydration-data', { user: 'Guest' })
console.log(data) // { user: 'Misha' }
// Thẻ <script id="hydration-data"> tự động bị xóa khỏi DOM
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};