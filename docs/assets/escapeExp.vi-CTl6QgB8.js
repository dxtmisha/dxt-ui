import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/escapeExp - Thoát các ký tự đặc biệt trong RegExp`}),`
`,(0,c.jsx)(t.h1,{id:`escapeexp`,children:(0,c.jsx)(t.code,{children:`escapeExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tiện ích thực hiện "thoát" (escape) tất cả các ký tự đặc biệt của biểu thức chính quy trong một chuỗi (`,(0,c.jsx)(t.code,{children:`.`}),` `,(0,c.jsx)(t.code,{children:`*`}),` `,(0,c.jsx)(t.code,{children:`+`}),` `,(0,c.jsx)(t.code,{children:`?`}),` `,(0,c.jsx)(t.code,{children:`^`}),` `,(0,c.jsx)(t.code,{children:`$`}),` `,(0,c.jsx)(t.code,{children:`{`}),` `,(0,c.jsx)(t.code,{children:`}`}),` `,(0,c.jsx)(t.code,{children:`(`}),` `,(0,c.jsx)(t.code,{children:`)`}),` `,(0,c.jsx)(t.code,{children:`|`}),` `,(0,c.jsx)(t.code,{children:`[`}),` `,(0,c.jsx)(t.code,{children:`]`}),` `,(0,c.jsx)(t.code,{children:`\\`}),` `,(0,c.jsx)(t.code,{children:`/`}),`), để chuỗi đó có thể được sử dụng an toàn bên trong `,(0,c.jsx)(t.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:`Hữu ích khi chuỗi đến từ người dùng hoặc nguồn bên ngoài và có thể chứa các ký tự mang ý nghĩa đặc biệt trong biểu thức chính quy.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: string`}),` — Chuỗi cần escape.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Chuỗi đã được escape tất cả các ký tự đặc biệt, an toàn để dùng trong `,(0,c.jsx)(t.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { escapeExp } from '@dxtmisha/functional-basic'

// Escape các ký tự đặc biệt
console.log(escapeExp('user.name[0]')) // 'user\\\\.name\\\\[0\\\\]'
console.log(escapeExp('price $10.00')) // 'price \\\\$10\\\\.00'

// Sử dụng an toàn trong RegExp
const regex = new RegExp(escapeExp('user.name[0]'))
regex.test('user.name[0]') // true
regex.test('userXname0')   // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};