import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/splice - Sao chép và hợp nhất các thuộc tính vào đối tượng`}),`
`,(0,c.jsx)(t.h1,{id:`splice`,children:(0,c.jsx)(t.code,{children:`splice`})}),`
`,(0,c.jsx)(t.p,{children:`Sao chép và hợp nhất đệ quy các thuộc tính từ một đối tượng vào một đối tượng khác. Hỗ trợ chèn các thuộc tính mới bắt đầu từ một khóa hoặc chỉ số cụ thể.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`array: ObjectItem<I>`}),` — Đối tượng hoặc mảng mục tiêu.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`replacement?: ObjectItem<I> | I`}),` — Đối tượng nguồn chứa dữ liệu mới.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`indexStart?: string`}),` — Khóa hoặc giá trị phần tử mà từ đó quá trình chèn sẽ bắt đầu.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`ObjectItem<I>`}),` — Một đối tượng hoặc mảng mới với các thay đổi đã được áp dụng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { splice } from '@dxtmisha/functional-basic'

const target = { first: 1, last: 3 }
const source = { second: 2 }

// Chèn đơn giản
console.log(splice(target, source)) // { first: 1, last: 3, second: 2 }

// Chèn sau một khóa cụ thể
console.log(splice(target, source, 'first')) // { first: 1, second: 2, last: 3 }
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};