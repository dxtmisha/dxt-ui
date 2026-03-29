import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/transformation - Chuyển đổi chuỗi sang kiểu dữ liệu tương ứng`}),`
`,(0,c.jsx)(n.h1,{id:`transformation`,children:(0,c.jsx)(n.code,{children:`transformation`})}),`
`,(0,c.jsxs)(n.p,{children:[`Chuyển đổi một giá trị chuỗi thành kiểu dữ liệu tương ứng (boolean, số, đối tượng hoặc `,(0,c.jsx)(n.code,{children:`null`}),`/`,(0,c.jsx)(n.code,{children:`undefined`}),`). Nếu cờ `,(0,c.jsx)(n.code,{children:`isFunction`}),` được bật, hàm sẽ kiểm tra sự tồn tại của một hàm có tên đó trong đối tượng toàn cục `,(0,c.jsx)(n.code,{children:`window`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: any`}),` — Giá trị cần chuyển đổi.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`isFunction: boolean`}),` — Cờ tìm kiếm hàm trong `,(0,c.jsx)(n.code,{children:`window`}),` (mặc định là `,(0,c.jsx)(n.code,{children:`false`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`any`}),` — Giá trị đã được chuyển đổi.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { transformation } from '@dxtmisha/functional-basic'

console.log(transformation('true')) // true
console.log(transformation('12.5')) // 12.5
console.log(transformation('{"a":1}')) // { a: 1 }
console.log(transformation('null')) // null
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};