import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-DeABI6Wb.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/copyObject - Sao chép đối tượng`}),`
`,(0,l.jsx)(n.h1,{id:`copyobject`,children:(0,l.jsx)(n.code,{children:`copyObject`})}),`
`,(0,l.jsx)(n.p,{children:`Tạo bản sao sâu của đối tượng để quản lý dữ liệu độc lập. Mục tiêu của phương thức là có được một phiên bản riêng biệt hoàn toàn mới của dữ liệu để tránh các thay đổi ngoài ý muốn đối với đối tượng gốc.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: T`}),` — Đối tượng hoặc mảng cần sao chép.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`T`}),` — Bản sao mới của đối tượng.`]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { copyObject } from '@dxtmisha/functional-basic'

const original = { 
name: 'John', 
age: 30,
details: { role: 'admin' }
}

const copy = copyObject(original)
// copy là một phiên bản hoàn toàn mới để quản lý độc lập
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};