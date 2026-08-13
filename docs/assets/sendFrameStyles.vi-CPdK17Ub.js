import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-WIGGT2yz.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma/Functions/sendFrameStyles - Gửi yêu cầu lấy style của frame`}),`
`,(0,l.jsx)(t.h1,{id:`sendframestyles`,children:(0,l.jsx)(t.code,{children:`sendFrameStyles`})}),`
`,(0,l.jsx)(t.p,{children:`Một tiện ích để gửi yêu cầu đến Figma plugin để lấy thông tin style của các frame được chỉ định.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`attributes: UiFigmaFrameStylesMessengerAttributes`}),` — Các thuộc tính cho yêu cầu, bao gồm ID của frame và các tùy chọn.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { sendFrameStyles } from '@dxtmisha/figma'

// Yêu cầu style cho một frame cụ thể
sendFrameStyles({
ids: '12:34'
})

// Yêu cầu style cho nhiều frame bao gồm cả các phần tử con
sendFrameStyles({
ids: ['12:34', '56:78'],
children: true
})
`}),`
`,(0,l.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesmessengerattributes`,children:`UiFigmaFrameStylesMessengerAttributes`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`ids: string | string[]`}),` — ID duy nhất của frame hoặc mảng các ID.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`children?: boolean`}),` — (Tùy chọn) Có bao gồm style của các phần tử con hay không.`]}),`
`]})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};