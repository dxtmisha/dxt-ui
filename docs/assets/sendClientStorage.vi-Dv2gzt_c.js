import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma/Functions/sendClientStorage - Lưu dữ liệu vào bộ nhớ client`}),`
`,(0,l.jsx)(t.h1,{id:`sendclientstorage`,children:(0,l.jsx)(t.code,{children:`sendClientStorage`})}),`
`,(0,l.jsxs)(t.p,{children:[`Một tiện ích để lưu dữ liệu vào bộ nhớ client (`,(0,l.jsx)(t.code,{children:`clientStorage`}),`) của Figma. Nó gửi một tin nhắn từ giao diện người dùng (UI) đến phía plugin để lưu trữ giá trị được cung cấp dưới một tên cụ thể.`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Tên khóa trong bộ nhớ client.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: T`}),` — Giá trị dữ liệu cần lưu trữ.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { sendClientStorage } from '@dxtmisha/figma'

// 1. Lưu một chuỗi đơn giản
sendClientStorage('user-theme', 'dark')

// 2. Lưu một đối tượng (object)
sendClientStorage('settings', { notifications: true, zoom: 100 })
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};