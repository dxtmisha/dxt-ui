import{i as e}from"./preload-helper-CqJKl217.js";import{i as t,t as n}from"./jsx-runtime-BpINW1Kv.js";import{c as r,f as i,s as a}from"./blocks-CQEzKDSL.js";import{t as o}from"./mdx-react-shim-CpDaEZL9.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma/Functions/sendFramesSelected - Cập nhật trạng thái chọn frame`}),`
`,(0,l.jsx)(n.h1,{id:`sendframesselected`,children:(0,l.jsx)(n.code,{children:`sendFramesSelected`})}),`
`,(0,l.jsx)(n.p,{children:`Một tiện ích để thông báo cho plugin Figma cập nhật trạng thái lựa chọn của một frame cụ thể. Điều này thường được sử dụng để thêm hoặc xóa các frame khỏi danh sách đa lựa chọn do plugin quản lý.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — ID của frame.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`selected: boolean`}),` — Trạng thái lựa chọn mong muốn (true để chọn, false để bỏ chọn).`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { sendFramesSelected } from '@dxtmisha/figma'

// Thêm một frame vào lựa chọn
sendFramesSelected('12:34', true)

// Loại bỏ một frame khỏi lựa chọn
sendFramesSelected('12:34', false)
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};