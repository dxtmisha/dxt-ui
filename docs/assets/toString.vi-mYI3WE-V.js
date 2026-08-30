import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/functional-basic/Functions/toString - Chuyển đổi một giá trị thành chuỗi`}),`
`,(0,l.jsx)(t.h1,{id:`tostring`,children:(0,l.jsx)(t.code,{children:`toString`})}),`
`,(0,l.jsx)(t.p,{children:`Một tiện ích để chuyển đổi một giá trị thành chuỗi. Trả về một chuỗi rỗng nếu giá trị là null hoặc undefined.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: string | null | undefined`}),` — Giá trị cần chuyển đổi.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`string`}),` — Biểu diễn chuỗi của giá trị.`]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { toString } from '@dxtmisha/functional-basic'

toString('Xin chào')      // 'Xin chào'
toString(null)            // ''
toString(undefined)       // ''

`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};