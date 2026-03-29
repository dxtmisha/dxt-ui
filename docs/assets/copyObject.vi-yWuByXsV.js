import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/copyObject - Sao chép đối tượng`}),`
`,(0,c.jsx)(n.h1,{id:`copyobject`,children:(0,c.jsx)(n.code,{children:`copyObject`})}),`
`,(0,c.jsx)(n.p,{children:`Tạo bản sao sâu (deep copy) của các đối tượng và mảng chứa các kiểu dữ liệu cơ bản.`}),`
`,(0,c.jsxs)(n.p,{children:[`Điều này hữu ích khi bạn cần tránh thay đổi trực tiếp dữ liệu (mutate) của trạng thái ban đầu. Hãy nhớ rằng nó không sao chép các hàm, ký hiệu symbols, giá trị `,(0,c.jsx)(n.code,{children:`undefined`}),` và không thể xử lý các tham chiếu vòng (circular references) (do tiện ích sử dụng `,(0,c.jsx)(n.code,{children:`JSON.parse(JSON.stringify(value))`}),`).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T`}),` — Đối tượng hoặc giá trị cần sao chép.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — Bản sao mới của đối tượng.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { copyObject } from '@dxtmisha/functional-basic'

const original = { name: 'John', details: { age: 30 } }
const copy = copyObject(original)

copy.details.age = 31

console.log(original.details.age) // 30 (đối tượng gốc không bị thay đổi)
console.log(copy.details.age) // 31
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};