import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/functional-basic/Functions/copyObject - Sao chép đối tượng`}),`
`,(0,l.jsx)(t.h1,{id:`copyobject`,children:(0,l.jsx)(t.code,{children:`copyObject`})}),`
`,(0,l.jsx)(t.p,{children:`Tạo bản sao sâu của đối tượng để quản lý dữ liệu độc lập. Mục tiêu của phương thức là có được một phiên bản riêng biệt hoàn toàn mới của dữ liệu để tránh các thay đổi ngoài ý muốn đối với đối tượng gốc.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: T`}),` — Đối tượng hoặc mảng cần sao chép.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`T`}),` — Bản sao mới của đối tượng.`]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { copyObject } from '@dxtmisha/functional-basic'

const original = { 
name: 'John', 
age: 30,
details: { role: 'admin' }
}

const copy = copyObject(original)
// copy là một phiên bản hoàn toàn mới để quản lý độc lập
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};