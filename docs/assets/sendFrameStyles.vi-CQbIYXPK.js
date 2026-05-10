import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{c as r,f as i,s as a}from"./blocks-PB3deeuo.js";import{t as o}from"./mdx-react-shim-7_6RcfEr.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma/Functions/sendFrameStyles - Gửi yêu cầu lấy style của frame`}),`
`,(0,l.jsx)(n.h1,{id:`sendframestyles`,children:(0,l.jsx)(n.code,{children:`sendFrameStyles`})}),`
`,(0,l.jsx)(n.p,{children:`Một tiện ích để gửi yêu cầu đến Figma plugin để lấy thông tin style của các frame được chỉ định.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`attributes: UiFigmaFrameStylesMessengerAttributes`}),` — Các thuộc tính cho yêu cầu, bao gồm ID của frame và các tùy chọn.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
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
`,(0,l.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframestylesmessengerattributes`,children:`UiFigmaFrameStylesMessengerAttributes`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`ids: string | string[]`}),` — ID duy nhất của frame hoặc mảng các ID.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`children?: boolean`}),` — (Tùy chọn) Có bao gồm style của các phần tử con hay không.`]}),`
`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};