import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma/Functions/sendFrameSelection - Yêu cầu chọn frame`}),`
`,(0,l.jsx)(n.h1,{id:`sendframeselection`,children:(0,l.jsx)(n.code,{children:`sendFrameSelection`})}),`
`,(0,l.jsx)(n.p,{children:`Một tiện ích để yêu cầu plugin Figma chọn một frame cụ thể trong tài liệu.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — ID của frame cần chọn. Nếu không được cung cấp, lựa chọn có thể bị xóa bỏ.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { sendFrameSelection } from '@dxtmisha/figma'

// Chọn một frame bằng ID của nó
sendFrameSelection('12:34')

// Xóa hoặc đặt lại lựa chọn
sendFrameSelection()
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};