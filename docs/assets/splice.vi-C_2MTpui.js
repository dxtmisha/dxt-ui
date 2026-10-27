import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/splice - Sao chép và hợp nhất thuộc tính vào đối tượng`}),`
`,(0,c.jsx)(t.h1,{id:`splice`,children:(0,c.jsx)(t.code,{children:`splice`})}),`
`,(0,c.jsx)(t.p,{children:`Sao chép và hợp nhất đệ quy các thuộc tính từ đối tượng này sang đối tượng khác. Hỗ trợ thay thế thuộc tính bắt đầu từ một khóa hoặc giá trị phần tử cụ thể trong khi vẫn duy trì thứ tự của các trường còn lại.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array: ObjectItem<I>`}),` — Đối tượng đích.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replacement?: ObjectItem<I> | I`}),` — Đối tượng nguồn chứa dữ liệu mới.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`indexStart?: string`}),` — Khóa hoặc giá trị phần tử bắt đầu thực hiện thay thế.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`ObjectItem<I>`}),` — Đối tượng mới với các thay đổi đã được áp dụng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { splice } from '@dxtmisha/functional-basic'

const target = { first: 1, middle: 2, last: 3 }
const replacement = { middleNew: 20 }

// Hợp nhất đơn giản khi không có indexStart
console.log(splice(target, replacement))
// { first: 1, middle: 2, last: 3, middleNew: 20 }

// Thay thế thuộc tính theo khóa trong khi vẫn giữ nguyên thứ tự các trường khác
console.log(splice(target, replacement, 'middle'))
// { first: 1, middleNew: 20, last: 3 }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};