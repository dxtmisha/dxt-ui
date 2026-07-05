import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma/Functions/sendClientStorage - Lưu dữ liệu vào bộ nhớ client`}),`
`,(0,l.jsx)(n.h1,{id:`sendclientstorage`,children:(0,l.jsx)(n.code,{children:`sendClientStorage`})}),`
`,(0,l.jsxs)(n.p,{children:[`Một tiện ích để lưu dữ liệu vào bộ nhớ client (`,(0,l.jsx)(n.code,{children:`clientStorage`}),`) của Figma. Nó gửi một tin nhắn từ giao diện người dùng (UI) đến phía plugin để lưu trữ giá trị được cung cấp dưới một tên cụ thể.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Tên khóa trong bộ nhớ client.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: T`}),` — Giá trị dữ liệu cần lưu trữ.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { sendClientStorage } from '@dxtmisha/figma'

// 1. Lưu một chuỗi đơn giản
sendClientStorage('user-theme', 'dark')

// 2. Lưu một đối tượng (object)
sendClientStorage('settings', { notifications: true, zoom: 100 })
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};