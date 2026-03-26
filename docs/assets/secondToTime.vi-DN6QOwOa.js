import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/secondToTime - Chuyển đổi giây sang chuỗi thời gian`}),`
`,(0,c.jsx)(n.h1,{id:`secondtotime`,children:(0,c.jsx)(n.code,{children:`secondToTime`})}),`
`,(0,c.jsxs)(n.p,{children:[`Chuyển đổi số giây được cung cấp thành chuỗi định dạng thời gian `,(0,c.jsx)(n.code,{children:`MM:SS`}),`.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Nếu giá trị số giây nhỏ hơn hoặc bằng 0, hoặc không được cung cấp, hàm sẽ trả về giá trị mặc định là `,(0,c.jsx)(n.code,{children:`00:00`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`second: number | string | undefined`}),` — Tổng số giây (hỗ trợ cả kiểu số nguyên và kiểu chuỗi biểu diễn số).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Một chuỗi được định dạng với số phút và số giây tương ứng (ví dụ: `,(0,c.jsx)(n.code,{children:`12:34`}),`).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { secondToTime } from '@dxtmisha/functional-basic'

console.log(secondToTime(125)) // '02:05'
console.log(secondToTime('65')) // '01:05'
console.log(secondToTime()) // '00:00'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};