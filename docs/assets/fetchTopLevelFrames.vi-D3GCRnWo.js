import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/figma/Functions/fetchTopLevelFrames - Lấy các frame cấp cao nhất`}),`
`,(0,l.jsx)(t.h1,{id:`fetchtoplevelframes`,children:(0,l.jsx)(t.code,{children:`fetchTopLevelFrames`})}),`
`,(0,l.jsx)(t.p,{children:`Một tiện ích để lấy danh sách tất cả các frame cấp cao nhất hiện có trong tài liệu Figma. Nó tạo điều kiện giao tiếp giữa giao diện người dùng (UI) và phần plugin để truy cập vào cấu trúc tài liệu.`}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`callback: (frames: UiFigmaFramesList) => void`}),` — Hàm được thực thi sau khi nhận được danh sách các frame cấp cao nhất.`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`void`})]}),`
`,(0,l.jsx)(t.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframeslist`,children:`UiFigmaFramesList`}),`
`,(0,l.jsxs)(t.p,{children:[`Một mảng gồm các phần tử `,(0,l.jsx)(t.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsx)(t.h3,{id:`uifigmaframesitem`,children:`UiFigmaFramesItem`}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`name: string`}),` — Tên của frame.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`id: string`}),` — Định danh duy nhất của phần tử.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`image?: Uint8Array | string`}),` — (Tùy chọn) Hình ảnh xem trước của frame dưới dạng mảng byte hoặc chuỗi Base64.`]}),`
`]}),`
`,(0,l.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
import { fetchTopLevelFrames } from '@dxtmisha/figma'

// Lấy tất cả các frame cấp cao nhất và log thông tin chi tiết
fetchTopLevelFrames((frames) => {
console.log('Tìm thấy các frame cấp cao nhất:', frames.length)

frames.forEach(frame => {
  console.log(\`Frame: \${frame.name} (ID: \${frame.id})\`)
})
})
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};