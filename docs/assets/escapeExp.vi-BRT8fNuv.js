import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/escapeExp - Thoát các ký tự đặc biệt trong RegExp`}),`
`,(0,c.jsx)(t.h1,{id:`escapeexp`,children:(0,c.jsx)(t.code,{children:`escapeExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tiện ích thực hiện "thoát" (escape) tất cả các ký tự đặc biệt của biểu thức chính quy trong một chuỗi (`,(0,c.jsx)(t.code,{children:`.`}),` `,(0,c.jsx)(t.code,{children:`*`}),` `,(0,c.jsx)(t.code,{children:`+`}),` `,(0,c.jsx)(t.code,{children:`?`}),` `,(0,c.jsx)(t.code,{children:`^`}),` `,(0,c.jsx)(t.code,{children:`$`}),` `,(0,c.jsx)(t.code,{children:`{`}),` `,(0,c.jsx)(t.code,{children:`}`}),` `,(0,c.jsx)(t.code,{children:`(`}),` `,(0,c.jsx)(t.code,{children:`)`}),` `,(0,c.jsx)(t.code,{children:`|`}),` `,(0,c.jsx)(t.code,{children:`[`}),` `,(0,c.jsx)(t.code,{children:`]`}),` `,(0,c.jsx)(t.code,{children:`\\`}),` `,(0,c.jsx)(t.code,{children:`/`}),` `,(0,c.jsx)(t.code,{children:`-`}),`), để chuỗi đó có thể được sử dụng an toàn bên trong mẫu `,(0,c.jsx)(t.code,{children:`RegExp`}),` hoặc bên trong lớp ký tự (`,(0,c.jsx)(t.code,{children:`[...]`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:`Rất hữu ích khi từ khóa tìm kiếm, truy vấn hoặc chuỗi đến từ người dùng hoặc nguồn bên ngoài và có thể chứa các ký tự mang ý nghĩa đặc biệt trong biểu thức chính quy.`}),`
`,(0,c.jsx)(t.h3,{id:`các-tính-năng-chính`,children:`Các tính năng chính:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Thoát toàn diện 16 ký tự đặc biệt`}),`: Escape tất cả các ký tự cú pháp regex tiêu chuẩn (`,(0,c.jsx)(t.code,{children:`.`}),` `,(0,c.jsx)(t.code,{children:`*`}),` `,(0,c.jsx)(t.code,{children:`+`}),` `,(0,c.jsx)(t.code,{children:`?`}),` `,(0,c.jsx)(t.code,{children:`^`}),` `,(0,c.jsx)(t.code,{children:`$`}),` `,(0,c.jsx)(t.code,{children:`{}`}),` `,(0,c.jsx)(t.code,{children:`()`}),` `,(0,c.jsx)(t.code,{children:`|`}),` `,(0,c.jsx)(t.code,{children:`[]`}),` `,(0,c.jsx)(t.code,{children:`\\`}),`) cùng với dấu gạch chéo (`,(0,c.jsx)(t.code,{children:`/`}),`) và dấu gạch nối (`,(0,c.jsx)(t.code,{children:`-`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsxs)(t.strong,{children:[`An toàn trong lớp ký tự (`,(0,c.jsx)(t.code,{children:`[...]`}),`)`]}),`: Escape dấu gạch nối (`,(0,c.jsx)(t.code,{children:`-`}),`) thành `,(0,c.jsx)(t.code,{children:`\\-`}),`, ngăn chặn việc vô tình mở rộng phạm vi ký tự (ví dụ: `,(0,c.jsx)(t.code,{children:`[0-9]`}),`) hoặc lỗi cú pháp `,(0,c.jsx)(t.code,{children:`SyntaxError: Range out of order in character class`}),` khi nội suy các chuỗi có thứ tự ngược (ví dụ: `,(0,c.jsx)(t.code,{children:`[z-a]`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Ép kiểu an toàn`}),`: Chấp nhận chuỗi, số (bao gồm cả số `,(0,c.jsx)(t.code,{children:`0`}),` và số âm), `,(0,c.jsx)(t.code,{children:`null`}),`, và `,(0,c.jsx)(t.code,{children:`undefined`}),`, xử lý an toàn mà không gây ra ngoại lệ thời gian chạy.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`An toàn trước ReDoS`}),`: Hoạt động với độ phức tạp tuyến tính xác định $O(N)$, không bị lỗi backtracking thảm khốc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Tương thích Isomorphic & SSR`}),`: Hàm thuần túy không có tác dụng phụ, không phụ thuộc vào các đối tượng toàn cục của trình duyệt (`,(0,c.jsx)(t.code,{children:`window`}),` hoặc `,(0,c.jsx)(t.code,{children:`document`}),`).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: string | number | null`}),` — Chuỗi hoặc số cần escape.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Chuỗi đã được escape tất cả các ký tự đặc biệt, an toàn để dùng trong `,(0,c.jsx)(t.code,{children:`RegExp`}),`. Trả về chuỗi rỗng `,(0,c.jsx)(t.code,{children:`''`}),` nếu là `,(0,c.jsx)(t.code,{children:`null`}),` hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { escapeExp } from '@dxtmisha/functional-basic'

// 1. Escape các ký tự đặc biệt của RegExp
console.log(escapeExp('user.name[0]')) // 'user\\\\.name\\\\[0\\\\]'
console.log(escapeExp('price $10.00')) // 'price \\\\$10\\\\.00'
console.log(escapeExp('C++ & C#'))     // 'C\\\\+\\\\+ & C#'
console.log(escapeExp('path/to/*.log')) // 'path\\\\/to\\\\/\\\\*\\\\.log'

// 2. Sử dụng an toàn trong hàm khởi tạo RegExp
const userInput = '[VIP] (Special) *promo*'
const regex = new RegExp(\`^\${escapeExp(userInput)}$\`, 'i')
regex.test('[VIP] (Special) *promo*') // true
regex.test('VIP Special promo')       // false

// 3. An toàn bên trong lớp ký tự ([...])
// Escape dấu gạch nối giúp tránh lỗi Range out of order
const reversedRange = 'z-a'
const safeBracketRegex = new RegExp(\`[\${escapeExp(reversedRange)}]\`)
safeBracketRegex.test('z') // true
safeBracketRegex.test('-') // true
safeBracketRegex.test('a') // true

// 4. Xử lý an toàn cho số và giá trị nullish
escapeExp(0)         // '0'
escapeExp(12345)     // '12345'
escapeExp(-42)       // '\\\\-42'
escapeExp(null)      // ''
escapeExp(undefined) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};