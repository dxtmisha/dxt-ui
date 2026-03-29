import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/escapeExp - Thoát các ký tự đặc biệt trong RegExp`}),`
`,(0,c.jsx)(n.h1,{id:`escapeexp`,children:(0,c.jsx)(n.code,{children:`escapeExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tiện ích thực hiện "thoát" (escape) tất cả các ký tự đặc biệt của biểu thức chính quy trong một chuỗi (`,(0,c.jsx)(n.code,{children:`.`}),` `,(0,c.jsx)(n.code,{children:`*`}),` `,(0,c.jsx)(n.code,{children:`+`}),` `,(0,c.jsx)(n.code,{children:`?`}),` `,(0,c.jsx)(n.code,{children:`^`}),` `,(0,c.jsx)(n.code,{children:`$`}),` `,(0,c.jsx)(n.code,{children:`{`}),` `,(0,c.jsx)(n.code,{children:`}`}),` `,(0,c.jsx)(n.code,{children:`(`}),` `,(0,c.jsx)(n.code,{children:`)`}),` `,(0,c.jsx)(n.code,{children:`|`}),` `,(0,c.jsx)(n.code,{children:`[`}),` `,(0,c.jsx)(n.code,{children:`]`}),` `,(0,c.jsx)(n.code,{children:`\\`}),` `,(0,c.jsx)(n.code,{children:`/`}),`), để chuỗi đó có thể được sử dụng an toàn bên trong `,(0,c.jsx)(n.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Hữu ích khi chuỗi đến từ người dùng hoặc nguồn bên ngoài và có thể chứa các ký tự mang ý nghĩa đặc biệt trong biểu thức chính quy.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: string`}),` — Chuỗi cần escape.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Chuỗi đã được escape tất cả các ký tự đặc biệt, an toàn để dùng trong `,(0,c.jsx)(n.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { escapeExp } from '@dxtmisha/functional-basic'

// Escape các ký tự đặc biệt
console.log(escapeExp('user.name[0]')) // 'user\\\\.name\\\\[0\\\\]'
console.log(escapeExp('price $10.00')) // 'price \\\\$10\\\\.00'

// Sử dụng an toàn trong RegExp
const regex = new RegExp(escapeExp('user.name[0]'))
regex.test('user.name[0]') // true
regex.test('userXname0')   // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};