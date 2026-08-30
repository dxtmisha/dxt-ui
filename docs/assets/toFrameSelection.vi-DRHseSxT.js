import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-LSqYfV8h.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma-code/Functions/toFrameSelection - Chọn và tập trung vào frame`}),`
`,(0,l.jsx)(t.h1,{id:`toframeselection`,children:(0,l.jsx)(t.code,{children:`toFrameSelection`})}),`
`,(0,l.jsx)(t.p,{children:`Một tiện ích bất đồng bộ giúp tìm một node Figma bằng ID của nó, di chuyển khung nhìn (viewport) đến đó và chọn nó. Nếu node nằm ở một trang khác, nó sẽ tự động chuyển sang trang đó.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id?: string`}),` — (Tùy chọn) Định danh (ID) của node cần chọn.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`Promise<void>`})]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { toFrameSelection } from '@dxtmisha/figma-code'

async function jumpToElement(nodeId: string) {
await toFrameSelection(nodeId)
console.log('Đã di chuyển khung nhìn và chọn node')
}
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};