import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/encodeAttribute - Mã hóa ký tự cho thuộc tính`}),`
`,(0,c.jsx)(t.h1,{id:`encodeattribute`,children:(0,c.jsx)(t.code,{children:`encodeAttribute`})}),`
`,(0,c.jsxs)(t.p,{children:[`Mã hóa các ký tự đặc biệt trong chuỗi (`,(0,c.jsx)(t.code,{children:`&`}),`, `,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`, `,(0,c.jsx)(t.code,{children:`"`}),`, `,(0,c.jsx)(t.code,{children:`'`}),`) thành các thực thể HTML tương ứng (`,(0,c.jsx)(t.code,{children:`&amp;`}),`, `,(0,c.jsx)(t.code,{children:`&lt;`}),`, `,(0,c.jsx)(t.code,{children:`&gt;`}),`, `,(0,c.jsx)(t.code,{children:`&quot;`}),`, `,(0,c.jsx)(t.code,{children:`&#39;`}),`). Điều này là cần thiết để chèn giá trị động hoặc dữ liệu người dùng vào các thuộc tính HTML một cách an toàn nhằm ngăn chặn các cuộc tấn công XSS và chèn thuộc tính (attribute breakout).`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Mẹo:`}),` Nếu bạn chỉ cần mã hóa các ký tự HTML cơ bản (`,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`, `,(0,c.jsx)(t.code,{children:`&`}),`) mà không muốn thay đổi dấu ngoặc kép (ví dụ: bên trong thẻ `,(0,c.jsx)(t.code,{children:`<title>`}),` hoặc nội dung văn bản), hãy sử dụng `,(0,c.jsx)(t.code,{children:`encodeLiteAttribute`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`tính-năng-chính`,children:`Tính năng chính:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bảo vệ toàn diện cho thuộc tính`}),`: Mã hóa cả dấu ngoặc kép (`,(0,c.jsx)(t.code,{children:`"`}),`), dấu ngoặc đơn (`,(0,c.jsx)(t.code,{children:`'`}),`), dấu và (`,(0,c.jsx)(t.code,{children:`&`}),`) và dấu ngoặc nhọn (`,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Hiệu năng cao (Fast-Path)`}),`: Sử dụng kiểm tra nhanh trước khi thay thế chuỗi, trả về chuỗi gốc ngay lập tức nếu không tìm thấy ký tự đặc biệt, tránh cấp phát bộ nhớ dư thừa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ép kiểu an toàn & Hỗ trợ Nullish`}),`: Xử lý an toàn chuỗi, số (bao gồm `,(0,c.jsx)(t.code,{children:`0`}),` và số âm), `,(0,c.jsx)(t.code,{children:`null`}),` và `,(0,c.jsx)(t.code,{children:`undefined`}),` mà không gây ra lỗi ngoại lệ runtime.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Giữ nguyên khoảng trắng`}),`: Không tự động cắt tỉa (trim), giữ nguyên hoàn toàn các khoảng trắng, tab và xuống dòng.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text?: string | number | null`}),` — Giá trị cần mã hóa (chuỗi, số hoặc giá trị nullish).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Chuỗi đã được mã hóa, hoặc chuỗi rỗng `,(0,c.jsx)(t.code,{children:`''`}),` nếu giá trị là `,(0,c.jsx)(t.code,{children:`null`}),` hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { encodeAttribute } from '@dxtmisha/functional-basic'

// 1. Ngăn chặn tấn công XSS và thoát thuộc tính
const unsafeInput = '<script>alert("XSS")<\/script>'
const safeAttr = encodeAttribute(unsafeInput)
console.log(safeAttr)
// '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'

// Nội suy an toàn vào các thuộc tính HTML
const userInput = '"><img src=x onerror=alert(1)>'
const html = \`<input type="text" name="query" value="\${encodeAttribute(userInput)}">\`
// '<input type="text" name="query" value="&quot;&gt;&lt;img src=x onerror=alert(1)&gt;">'

// 2. Xử lý an toàn số và các giá trị nullish
encodeAttribute(0)         // '0'
encodeAttribute(123)       // '123'
encodeAttribute(null)      // ''
encodeAttribute(undefined) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};