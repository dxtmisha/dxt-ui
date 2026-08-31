import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-8NMpF0hx.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma/Functions/sendFramesSelected - Cập nhật trạng thái chọn frame`}),`
`,(0,l.jsx)(t.h1,{id:`sendframesselected`,children:(0,l.jsx)(t.code,{children:`sendFramesSelected`})}),`
`,(0,l.jsx)(t.p,{children:`Một tiện ích để thông báo cho plugin Figma cập nhật trạng thái lựa chọn của một frame cụ thể. Điều này thường được sử dụng để thêm hoặc xóa các frame khỏi danh sách đa lựa chọn do plugin quản lý.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — ID của frame.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`selected: boolean`}),` — Trạng thái lựa chọn mong muốn (true để chọn, false để bỏ chọn).`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { sendFramesSelected } from '@dxtmisha/figma'

// Thêm một frame vào lựa chọn
sendFramesSelected('12:34', true)

// Loại bỏ một frame khỏi lựa chọn
sendFramesSelected('12:34', false)
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};