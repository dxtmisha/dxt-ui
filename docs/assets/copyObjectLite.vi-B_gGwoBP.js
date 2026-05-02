import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/copyObjectLite - Sao chép nông đối tượng`}),`
`,(0,c.jsx)(n.h1,{id:`copyobjectlite`,children:(0,c.jsx)(n.code,{children:`copyObjectLite`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tạo một bản sao nông (shallow copy) của một đối tượng đơn giản bằng cách sử dụng `,(0,c.jsx)(n.code,{children:`Object.assign`}),`. Nó có thể tùy chọn hợp nhất các thuộc tính bổ sung từ đối số thứ hai `,(0,c.jsx)(n.code,{children:`source`}),`.`]}),`
`,(0,c.jsxs)(n.blockquote,{children:[`
`,(0,c.jsx)(n.p,{children:`Vì đây là sao chép nông, các đối tượng và mảng lồng nhau sẽ được sao chép theo tham chiếu (reference), chứ không phải theo giá trị.`}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Đối tượng cần sao chép.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`source?: any`}),` — Các thuộc tính bổ sung để hợp nhất với đối tượng `,(0,c.jsx)(n.code,{children:`value`}),`. Các thuộc tính từ `,(0,c.jsx)(n.code,{children:`source`}),` sẽ ghi đè các thuộc tính từ `,(0,c.jsx)(n.code,{children:`value`}),` nếu chúng có cùng khóa (key).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`R`}),` (mặc định là `,(0,c.jsx)(n.code,{children:`T`}),`) — Bản sao nông mới của đối tượng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { copyObjectLite } from '@dxtmisha/functional-basic'

const original = { a: 1, b: { c: 2 } }

// Sao chép nông đợn giản
const copy = copyObjectLite(original)
console.log(copy.b === original.b) // true (tham chiếu đến cùng một đối tượng lồng nhau)

// Sao chép với các thuộc tính hợp nhất bổ sung
const merged = copyObjectLite(original, { a: 10, d: 4 })
console.log(merged) // { a: 10, b: { c: 2 }, d: 4 }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};