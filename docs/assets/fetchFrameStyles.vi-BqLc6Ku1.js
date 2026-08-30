import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma/Functions/fetchFrameStyles - Lấy styles của frame`}),`
`,(0,l.jsx)(t.h1,{id:`fetchframestyles`,children:(0,l.jsx)(t.code,{children:`fetchFrameStyles`})}),`
`,(0,l.jsx)(t.p,{children:`Một tiện ích để lấy thông tin style của các frame được chỉ định từ Figma plugin. Nó cho phép truy cập vào CSS styles, dữ liệu JSON và nội dung văn bản cho các node và các node con của chúng.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (value: UiFigmaFrameStylesMessengerResponse) => void`}),` — Hàm được thực thi sau khi nhận được dữ liệu style cho các frame được yêu cầu.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { fetchFrameStyles } from '@dxtmisha/figma'

// Lấy styles cho các frame và log kết quả
fetchFrameStyles((response) => {
response.forEach(item => {
  console.log('Frame ID:', item.id)
  console.log('Dữ liệu style:', item.data)
})
})
`}),`
`,(0,l.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesmessengerresponse`,children:`UiFigmaFrameStylesMessengerResponse`}),`
`,(0,l.jsxs)(t.p,{children:[`Một mảng các đối tượng `,(0,l.jsx)(t.code,{children:`UiFigmaFrameStylesMessengerResponseItem`}),`.`]}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesmessengerresponseitem`,children:`UiFigmaFrameStylesMessengerResponseItem`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — Định danh duy nhất của frame.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`data: UiFigmaFrameStylesList`}),` — Danh sách dữ liệu style cho frame.`]}),`
`]}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframestylesitem`,children:`UiFigmaFrameStylesItem`}),`
`,(0,l.jsxs)(t.p,{children:[`Mở rộng từ `,(0,l.jsx)(t.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Tên của frame.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — Định danh duy nhất của phần tử.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`json?: UiFigmaFrameStylesData`}),` — (Tùy chọn) Dữ liệu node thu gọn dưới định dạng JSON.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`text?: string`}),` — (Tùy chọn) Nội dung văn bản (đối với các node văn bản).`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`styles?: UiFigmaFrameStylesCssItem`}),` — (Tùy chọn) Bản đồ các style CSS cho phần tử.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`childrenStyles?: UiFigmaFrameStylesCssList`}),` — (Tùy chọn) Bản đồ các style CSS của các phần tử con.`]}),`
`]})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};