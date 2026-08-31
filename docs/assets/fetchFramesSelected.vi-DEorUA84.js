import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-8NMpF0hx.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma/Functions/fetchFramesSelected - Lấy các frame đang được chọn`}),`
`,(0,l.jsx)(t.h1,{id:`fetchframesselected`,children:(0,l.jsx)(t.code,{children:`fetchFramesSelected`})}),`
`,(0,l.jsx)(t.p,{children:`Một tiện ích để lấy danh sách ID của các frame đang được chọn trong Figma. Nó tạo điều kiện giao tiếp giữa giao diện người dùng (UI) và phần plugin để truy cập vào lựa chọn hiện tại của người dùng.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (selected: string[]) => void`}),` — Hàm được thực thi sau khi nhận được danh sách ID của các frame được chọn.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { fetchFramesSelected } from '@dxtmisha/figma'

// Lấy các frame được chọn và log ID của chúng
fetchFramesSelected((selectedIds) => {
if (selectedIds.length === 0) {
  console.log('Không có frame nào được chọn')
} else {
  console.log('ID các frame được chọn:', selectedIds)
}
})
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};