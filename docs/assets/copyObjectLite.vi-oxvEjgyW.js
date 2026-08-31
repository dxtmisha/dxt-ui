import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/copyObjectLite - Sao chép nông đối tượng`}),`
`,(0,c.jsx)(t.h1,{id:`copyobjectlite`,children:(0,c.jsx)(t.code,{children:`copyObjectLite`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tạo một bản sao nông (shallow copy) của một đối tượng đơn giản bằng cách sử dụng `,(0,c.jsx)(t.code,{children:`Object.assign`}),`. Nó có thể tùy chọn hợp nhất các thuộc tính bổ sung từ đối số thứ hai `,(0,c.jsx)(t.code,{children:`source`}),`.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsx)(t.p,{children:`Vì đây là sao chép nông, các đối tượng và mảng lồng nhau sẽ được sao chép theo tham chiếu (reference), chứ không phải theo giá trị.`}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Đối tượng cần sao chép.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`source?: any`}),` — Các thuộc tính bổ sung để hợp nhất với đối tượng `,(0,c.jsx)(t.code,{children:`value`}),`. Các thuộc tính từ `,(0,c.jsx)(t.code,{children:`source`}),` sẽ ghi đè các thuộc tính từ `,(0,c.jsx)(t.code,{children:`value`}),` nếu chúng có cùng khóa (key).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`R`}),` (mặc định là `,(0,c.jsx)(t.code,{children:`T`}),`) — Bản sao nông mới của đối tượng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { copyObjectLite } from '@dxtmisha/functional-basic'

const original = { a: 1, b: { c: 2 } }

// Sao chép nông đợn giản
const copy = copyObjectLite(original)
console.log(copy.b === original.b) // true (tham chiếu đến cùng một đối tượng lồng nhau)

// Sao chép với các thuộc tính hợp nhất bổ sung
const merged = copyObjectLite(original, { a: 10, d: 4 })
console.log(merged) // { a: 10, b: { c: 2 }, d: 4 }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};