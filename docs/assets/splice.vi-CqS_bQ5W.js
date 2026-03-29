import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/splice - Sao chép và hợp nhất các thuộc tính vào đối tượng`}),`
`,(0,c.jsx)(n.h1,{id:`splice`,children:(0,c.jsx)(n.code,{children:`splice`})}),`
`,(0,c.jsx)(n.p,{children:`Sao chép và hợp nhất đệ quy các thuộc tính từ một đối tượng vào một đối tượng khác. Hỗ trợ chèn các thuộc tính mới bắt đầu từ một khóa hoặc chỉ số cụ thể.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`array: ObjectItem<I>`}),` — Đối tượng hoặc mảng mục tiêu.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`replacement?: ObjectItem<I> | I`}),` — Đối tượng nguồn chứa dữ liệu mới.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`indexStart?: string`}),` — Khóa hoặc giá trị phần tử mà từ đó quá trình chèn sẽ bắt đầu.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`ObjectItem<I>`}),` — Một đối tượng hoặc mảng mới với các thay đổi đã được áp dụng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { splice } from '@dxtmisha/functional-basic'

const target = { first: 1, last: 3 }
const source = { second: 2 }

// Chèn đơn giản
console.log(splice(target, source)) // { first: 1, last: 3, second: 2 }

// Chèn sau một khóa cụ thể
console.log(splice(target, source, 'first')) // { first: 1, second: 2, last: 3 }
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};