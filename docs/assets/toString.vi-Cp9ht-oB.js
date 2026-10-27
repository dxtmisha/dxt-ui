import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-DoUQMcLv.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/functional-basic/Functions/toString - Chuyển đổi một giá trị thành chuỗi`}),`
`,(0,l.jsx)(t.h1,{id:`tostring`,children:(0,l.jsx)(t.code,{children:`toString`})}),`
`,(0,l.jsxs)(t.p,{children:[`Tiện ích chuyển đổi an toàn bất kỳ giá trị nào thành chuỗi. Trả về một chuỗi rỗng `,(0,l.jsx)(t.code,{children:`''`}),` nếu giá trị là `,(0,l.jsx)(t.code,{children:`null`}),` hoặc `,(0,l.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,l.jsxs)(t.p,{children:[`Khác với các cách tiếp cận thông thường (như `,(0,l.jsx)(t.code,{children:`value || ''`}),` hoặc chuỗi nội suy `,(0,l.jsx)(t.code,{children:"${value}"}),`):`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[`Các giá trị falsy (`,(0,l.jsx)(t.code,{children:`0`}),`, `,(0,l.jsx)(t.code,{children:`-0`}),`, `,(0,l.jsx)(t.code,{children:`false`}),`, `,(0,l.jsx)(t.code,{children:`0n`}),`) được giữ nguyên chính xác và chuyển thành `,(0,l.jsx)(t.code,{children:`'0'`}),`, `,(0,l.jsx)(t.code,{children:`'false'`}),`, không bị biến thành chuỗi rỗng.`]}),`
`,(0,l.jsxs)(t.li,{children:[`Symbol (`,(0,l.jsx)(t.code,{children:`Symbol(...)`}),`) được chuyển đổi an toàn thành `,(0,l.jsx)(t.code,{children:`'Symbol(...)'`}),` mà không ném lỗi `,(0,l.jsx)(t.code,{children:`TypeError`}),` (khác với phép nối chuỗi `,(0,l.jsx)(t.code,{children:`value + ''`}),`).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`null`}),` và `,(0,l.jsx)(t.code,{children:`undefined`}),` trả về an toàn chuỗi rỗng `,(0,l.jsx)(t.code,{children:`''`}),` mà không gây lỗi.`]}),`
`,(0,l.jsxs)(t.li,{children:[`Hỗ trợ các đối tượng có phương thức `,(0,l.jsx)(t.code,{children:`toString()`}),` hoặc `,(0,l.jsx)(t.code,{children:`Symbol.toPrimitive`}),` tùy chỉnh.`]}),`
`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: T`}),` — Giá trị cần chuyển đổi.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — Biểu diễn chuỗi của giá trị, hoặc chuỗi rỗng nếu là `,(0,l.jsx)(t.code,{children:`null`}),` / `,(0,l.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { toString } from '@dxtmisha/functional-basic'

// Chuỗi và kiểu nguyên thủy cơ bản
toString('Xin chào')           // 'Xin chào'
toString(123)                  // '123'
toString(true)                 // 'true'

// Xử lý an toàn các giá trị falsy (không bị mất thành chuỗi rỗng)
toString(0)                    // '0'
toString(-0)                   // '0'
toString(false)                // 'false'
toString(0n)                   // '0'

// Giá trị nullish
toString(null)                 // ''
toString(undefined)            // ''

// Symbol (không gây lỗi TypeError)
toString(Symbol('id'))         // 'Symbol(id)'

// Mảng và đối tượng
toString([1, 2, 3])            // '1,2,3'
toString([])                   // ''
toString({ a: 1 })             // '[object Object]'
toString({ toString: () => 'custom' }) // 'custom'
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};