import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma/Functions/fetchFramesSelected - Lấy các frame đang được chọn`}),`
`,(0,l.jsx)(n.h1,{id:`fetchframesselected`,children:(0,l.jsx)(n.code,{children:`fetchFramesSelected`})}),`
`,(0,l.jsx)(n.p,{children:`Một tiện ích để lấy danh sách ID của các frame đang được chọn trong Figma. Nó tạo điều kiện giao tiếp giữa giao diện người dùng (UI) và phần plugin để truy cập vào lựa chọn hiện tại của người dùng.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (selected: string[]) => void`}),` — Hàm được thực thi sau khi nhận được danh sách ID của các frame được chọn.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchFramesSelected } from '@dxtmisha/figma'

// Lấy các frame được chọn và log ID của chúng
fetchFramesSelected((selectedIds) => {
if (selectedIds.length === 0) {
  console.log('Không có frame nào được chọn')
} else {
  console.log('ID các frame được chọn:', selectedIds)
}
})
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};