import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isDifferent - Kiểm tra sự khác biệt của đối tượng`}),`
`,(0,c.jsx)(t.h1,{id:`isdifferent`,children:(0,c.jsx)(t.code,{children:`isDifferent`})}),`
`,(0,c.jsx)(t.p,{children:`Tiến hành so sánh nông (shallow comparison) để xác định xem hai đối tượng được cung cấp có khác biệt với nhau hay không.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm trước tiên thực hiện kiểm tra nhanh tính đồng nhất tham chiếu $O(1)$. Nếu các tham chiếu khác nhau, hàm sẽ so sánh số lượng khóa thuộc sở hữu riêng (own keys) của hai đối tượng. Khi số lượng khóa khớp nhau, hàm kiểm tra sự tồn tại của từng khóa và đối chiếu giá trị theo ngữ nghĩa `,(0,c.jsx)(t.code,{children:`Object.is`}),` (xử lý chính xác giá trị `,(0,c.jsx)(t.code,{children:`NaN`}),` và phân biệt rõ giữa khóa bị thiếu với giá trị `,(0,c.jsx)(t.code,{children:`undefined`}),`).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: ObjectItem<T>`}),` — Đối tượng chính (dữ liệu mới) được đem ra làm chủ thể xác nhận.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`old: ObjectItem<T>`}),` — Đối tượng tham chiếu (yếu tố lấy dữ liệu cũ).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — Trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu tìm thấy sự khác biệt giữa hai đối tượng (về số lượng khóa, sự hiện diện của khóa hoặc giá trị của thuộc tính), hoặc `,(0,c.jsx)(t.code,{children:`false`}),` nếu chúng giống nhau.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isDifferent } from '@dxtmisha/functional-basic'

const oldState = { id: 1, active: false }
const newState = { id: 1, active: true }

// Đối tượng khác biệt tại trường phân tích \`active\`
console.log(isDifferent(newState, oldState)) // true

const sameState = { id: 1, active: false }

// Mẫu đối tượng giống y hệt ở tất cả thông số
console.log(isDifferent(sameState, oldState)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};