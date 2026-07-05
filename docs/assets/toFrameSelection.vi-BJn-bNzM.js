import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma-code/Functions/toFrameSelection - Chọn và tập trung vào frame`}),`
`,(0,l.jsx)(n.h1,{id:`toframeselection`,children:(0,l.jsx)(n.code,{children:`toFrameSelection`})}),`
`,(0,l.jsx)(n.p,{children:`Một tiện ích bất đồng bộ giúp tìm một node Figma bằng ID của nó, di chuyển khung nhìn (viewport) đến đó và chọn nó. Nếu node nằm ở một trang khác, nó sẽ tự động chuyển sang trang đó.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id?: string`}),` — (Tùy chọn) Định danh (ID) của node cần chọn.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`Promise<void>`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { toFrameSelection } from '@dxtmisha/figma-code'

async function jumpToElement(nodeId: string) {
await toFrameSelection(nodeId)
console.log('Đã di chuyển khung nhìn và chọn node')
}
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};