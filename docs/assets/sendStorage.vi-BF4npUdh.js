import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma/Functions/sendStorage - Lưu dữ liệu vào bộ nhớ chung`}),`
`,(0,l.jsx)(t.h1,{id:`sendstorage`,children:(0,l.jsx)(t.code,{children:`sendStorage`})}),`
`,(0,l.jsx)(t.p,{children:`Một tiện ích để lưu dữ liệu vào bộ nhớ chung của Figma. Khác với bộ nhớ client, dữ liệu này có thể được chia sẻ và liên kết với các định danh cụ thể (ví dụ: ID của node).`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Tên của bộ nhớ.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: T`}),` — Giá trị dữ liệu cần lưu trữ.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id?: string`}),` — (Tùy chọn) Định danh để liên kết dữ liệu với một đối tượng cụ thể (ví dụ: ID của node).`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { sendStorage } from '@dxtmisha/figma'

// 1. Lưu dữ liệu toàn cục
sendStorage('app-config', { version: '1.0.0' })

// 2. Lưu dữ liệu cho một node cụ thể
sendStorage('node-custom-data', { label: 'Header' }, '12:34')
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};