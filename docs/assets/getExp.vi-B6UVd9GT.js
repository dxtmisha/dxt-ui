import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getExp - Tạo cấu trúc RegExp với chuỗi đã đánh dấu (escaped)`}),`
`,(0,c.jsx)(t.h1,{id:`getexp`,children:(0,c.jsx)(t.code,{children:`getExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tiện ích này tạo ra một đối tượng `,(0,c.jsx)(t.code,{children:`RegExp`}),` từ một chuỗi mẫu bằng cách thực hiện "thoát" (escape) tất cả các ký tự đặc biệt của biểu thức chính quy bên trong chuỗi đó (chẳng hạn như `,(0,c.jsx)(t.code,{children:`.`}),` `,(0,c.jsx)(t.code,{children:`*`}),` `,(0,c.jsx)(t.code,{children:`+`}),` `,(0,c.jsx)(t.code,{children:`?`}),` `,(0,c.jsx)(t.code,{children:`^`}),` `,(0,c.jsx)(t.code,{children:`$`}),` `,(0,c.jsx)(t.code,{children:`{`}),` `,(0,c.jsx)(t.code,{children:`}`}),` `,(0,c.jsx)(t.code,{children:`(`}),` `,(0,c.jsx)(t.code,{children:`)`}),` `,(0,c.jsx)(t.code,{children:`|`}),` `,(0,c.jsx)(t.code,{children:`[`}),` `,(0,c.jsx)(t.code,{children:`]`}),` `,(0,c.jsx)(t.code,{children:`\\`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Điều này rất cần thiết khi chuỗi tìm kiếm đến từ người dùng hoặc chứa các ký tự có thể phá vỡ một biểu thức chính quy. Hàm cho phép bạn chỉ định các cờ (flags) cho `,(0,c.jsx)(t.code,{children:`RegExp`}),` cũng như một chuỗi mẫu nơi đoạn văn bản đã "escape" sẽ thay thế token `,(0,c.jsx)(t.code,{children:`:value`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — Chuỗi đích cần escape.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`flags?: string`}),` — (tuỳ chọn) Các cờ cấu hình (ví dụ: `,(0,c.jsx)(t.code,{children:`'ig'`}),`). Mặc định là `,(0,c.jsx)(t.code,{children:`'ig'`}),` (không phân biệt chữ hoa/thường và tìm toàn cục).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`pattern?: string`}),` — (tuỳ chọn) Chuỗi mẫu biểu thức chính quy. Mặc định chỉ là `,(0,c.jsx)(t.code,{children:`':value'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — Đối tượng biểu thức chính quy.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getExp } from '@dxtmisha/functional-basic'

// Tìm kiếm cơ bản
const rx1 = getExp('user.name')
console.log(rx1) // /user\\.name/gi  (dấu chấm đã được escape)

// Tìm kiếm với cờ và chuỗi mẫu tuỳ chỉnh (ví dụ: "bắt đầu bằng")
const rx2 = getExp('query[1]', 'i', '^:value.*')
console.log(rx2) // /^query\\[1\\].*/i
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};