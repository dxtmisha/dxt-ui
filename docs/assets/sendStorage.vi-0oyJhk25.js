import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma/Functions/sendStorage - Lưu dữ liệu vào bộ nhớ chung`}),`
`,(0,l.jsx)(n.h1,{id:`sendstorage`,children:(0,l.jsx)(n.code,{children:`sendStorage`})}),`
`,(0,l.jsx)(n.p,{children:`Một tiện ích để lưu dữ liệu vào bộ nhớ chung của Figma. Khác với bộ nhớ client, dữ liệu này có thể được chia sẻ và liên kết với các định danh cụ thể (ví dụ: ID của node).`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Tên của bộ nhớ.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: T`}),` — Giá trị dữ liệu cần lưu trữ.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — (Tùy chọn) Định danh để liên kết dữ liệu với một đối tượng cụ thể (ví dụ: ID của node).`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { sendStorage } from '@dxtmisha/figma'

// 1. Lưu dữ liệu toàn cục
sendStorage('app-config', { version: '1.0.0' })

// 2. Lưu dữ liệu cho một node cụ thể
sendStorage('node-custom-data', { label: 'Header' }, '12:34')
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};