import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getExp - Tạo cấu trúc RegExp với chuỗi đã đánh dấu (escaped)`}),`
`,(0,c.jsx)(n.h1,{id:`getexp`,children:(0,c.jsx)(n.code,{children:`getExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tiện ích này tạo ra một đối tượng `,(0,c.jsx)(n.code,{children:`RegExp`}),` từ một chuỗi mẫu bằng cách thực hiện "thoát" (escape) tất cả các ký tự đặc biệt của biểu thức chính quy bên trong chuỗi đó (chẳng hạn như `,(0,c.jsx)(n.code,{children:`.`}),` `,(0,c.jsx)(n.code,{children:`*`}),` `,(0,c.jsx)(n.code,{children:`+`}),` `,(0,c.jsx)(n.code,{children:`?`}),` `,(0,c.jsx)(n.code,{children:`^`}),` `,(0,c.jsx)(n.code,{children:`$`}),` `,(0,c.jsx)(n.code,{children:`{`}),` `,(0,c.jsx)(n.code,{children:`}`}),` `,(0,c.jsx)(n.code,{children:`(`}),` `,(0,c.jsx)(n.code,{children:`)`}),` `,(0,c.jsx)(n.code,{children:`|`}),` `,(0,c.jsx)(n.code,{children:`[`}),` `,(0,c.jsx)(n.code,{children:`]`}),` `,(0,c.jsx)(n.code,{children:`\\`}),`).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Điều này rất cần thiết khi chuỗi tìm kiếm đến từ người dùng hoặc chứa các ký tự có thể phá vỡ một biểu thức chính quy. Hàm cho phép bạn chỉ định các cờ (flags) cho `,(0,c.jsx)(n.code,{children:`RegExp`}),` cũng như một chuỗi mẫu nơi đoạn văn bản đã "escape" sẽ thay thế token `,(0,c.jsx)(n.code,{children:`:value`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Chuỗi đích cần escape.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`flags?: string`}),` — (tuỳ chọn) Các cờ cấu hình (ví dụ: `,(0,c.jsx)(n.code,{children:`'ig'`}),`). Mặc định là `,(0,c.jsx)(n.code,{children:`'ig'`}),` (không phân biệt chữ hoa/thường và tìm toàn cục).`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`pattern?: string`}),` — (tuỳ chọn) Chuỗi mẫu biểu thức chính quy. Mặc định chỉ là `,(0,c.jsx)(n.code,{children:`':value'`}),`.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — Đối tượng biểu thức chính quy.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getExp } from '@dxtmisha/functional-basic'

// Tìm kiếm cơ bản
const rx1 = getExp('user.name')
console.log(rx1) // /user\\.name/gi  (dấu chấm đã được escape)

// Tìm kiếm với cờ và chuỗi mẫu tuỳ chỉnh (ví dụ: "bắt đầu bằng")
const rx2 = getExp('query[1]', 'i', '^:value.*')
console.log(rx2) // /^query\\[1\\].*/i
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};