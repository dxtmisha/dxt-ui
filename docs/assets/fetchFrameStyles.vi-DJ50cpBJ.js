import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-CFkguG7U.js";import{t as n}from"./jsx-runtime-CDg9WaeQ.js";import{c as r,f as i,s as a}from"./blocks-PB3deeuo.js";import{t as o}from"./mdx-react-shim-7_6RcfEr.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma/Functions/fetchFrameStyles - Lấy styles của frame`}),`
`,(0,l.jsx)(n.h1,{id:`fetchframestyles`,children:(0,l.jsx)(n.code,{children:`fetchFrameStyles`})}),`
`,(0,l.jsx)(n.p,{children:`Một tiện ích để lấy thông tin style của các frame được chỉ định từ Figma plugin. Nó cho phép truy cập vào CSS styles, dữ liệu JSON và nội dung văn bản cho các node và các node con của chúng.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (value: UiFigmaFrameStylesMessengerResponse) => void`}),` — Hàm được thực thi sau khi nhận được dữ liệu style cho các frame được yêu cầu.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchFrameStyles } from '@dxtmisha/figma'

// Lấy styles cho các frame và log kết quả
fetchFrameStyles((response) => {
response.forEach(item => {
  console.log('Frame ID:', item.id)
  console.log('Dữ liệu style:', item.data)
})
})
`}),`
`,(0,l.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframestylesmessengerresponse`,children:`UiFigmaFrameStylesMessengerResponse`}),`
`,(0,l.jsxs)(n.p,{children:[`Một mảng các đối tượng `,(0,l.jsx)(n.code,{children:`UiFigmaFrameStylesMessengerResponseItem`}),`.`]}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframestylesmessengerresponseitem`,children:`UiFigmaFrameStylesMessengerResponseItem`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Định danh duy nhất của frame.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`data: UiFigmaFrameStylesList`}),` — Danh sách dữ liệu style cho frame.`]}),`
`]}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframestylesitem`,children:`UiFigmaFrameStylesItem`}),`
`,(0,l.jsxs)(n.p,{children:[`Mở rộng từ `,(0,l.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Tên của frame.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Định danh duy nhất của phần tử.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`json?: UiFigmaFrameStylesData`}),` — (Tùy chọn) Dữ liệu node thu gọn dưới định dạng JSON.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`text?: string`}),` — (Tùy chọn) Nội dung văn bản (đối với các node văn bản).`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`styles?: UiFigmaFrameStylesCssItem`}),` — (Tùy chọn) Bản đồ các style CSS cho phần tử.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`childrenStyles?: UiFigmaFrameStylesCssList`}),` — (Tùy chọn) Bản đồ các style CSS của các phần tử con.`]}),`
`]})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};