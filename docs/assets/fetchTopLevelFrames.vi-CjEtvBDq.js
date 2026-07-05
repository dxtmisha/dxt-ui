import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{c as r,f as i,s as a}from"./blocks-BWgdf4pj.js";import{t as o}from"./mdx-react-shim-B1U8VZv0.js";function s(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/figma/Functions/fetchTopLevelFrames - Lấy các frame cấp cao nhất`}),`
`,(0,l.jsx)(n.h1,{id:`fetchtoplevelframes`,children:(0,l.jsx)(n.code,{children:`fetchTopLevelFrames`})}),`
`,(0,l.jsx)(n.p,{children:`Một tiện ích để lấy danh sách tất cả các frame cấp cao nhất hiện có trong tài liệu Figma. Nó tạo điều kiện giao tiếp giữa giao diện người dùng (UI) và phần plugin để truy cập vào cấu trúc tài liệu.`}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`callback: (frames: UiFigmaFramesList) => void`}),` — Hàm được thực thi sau khi nhận được danh sách các frame cấp cao nhất.`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`void`})]}),`
`,(0,l.jsx)(n.h2,{id:`các-kiểu-dữ-liệu`,children:`Các kiểu dữ liệu`}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframeslist`,children:`UiFigmaFramesList`}),`
`,(0,l.jsxs)(n.p,{children:[`Một mảng gồm các phần tử `,(0,l.jsx)(n.code,{children:`UiFigmaFramesItem`}),`.`]}),`
`,(0,l.jsx)(n.h3,{id:`uifigmaframesitem`,children:`UiFigmaFramesItem`}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`name: string`}),` — Tên của frame.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`id: string`}),` — Định danh duy nhất của phần tử.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`image?: Uint8Array | string`}),` — (Tùy chọn) Hình ảnh xem trước của frame dưới dạng mảng byte hoặc chuỗi Base64.`]}),`
`]}),`
`,(0,l.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { fetchTopLevelFrames } from '@dxtmisha/figma'

// Lấy tất cả các frame cấp cao nhất và log thông tin chi tiết
fetchTopLevelFrames((frames) => {
console.log('Tìm thấy các frame cấp cao nhất:', frames.length)

frames.forEach(frame => {
  console.log(\`Frame: \${frame.name} (ID: \${frame.id})\`)
})
})
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};