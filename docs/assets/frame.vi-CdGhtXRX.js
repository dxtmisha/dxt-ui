import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/frame - Vòng lặp requestAnimationFrame`}),`
`,(0,c.jsx)(n.h1,{id:`frame`,children:(0,c.jsx)(n.code,{children:`frame`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tiện ích này sẽ gọi vòng lặp `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` để thực hiện hoạt ảnh theo từng khung hình (frame-by-frame) trong trình duyệt.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Trình duyệt tự động tối ưu hóa tốc độ khung hình (thường là 60 FPS) và dừng hoạt ảnh khi tab không hoạt động, giúp hiển thị mượt mà. Trong các môi trường không có DOM (chẳng hạn như SSR), `,(0,c.jsx)(n.code,{children:`requestAnimationFrame`}),` sẽ không được sử dụng và hàm chỉ thực thi lệnh callback một lần đồng bộ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`callback: () => void`}),` — Hàm được gọi khi đến thời điểm cập nhật hoạt ảnh cho lần vẽ lại tiếp theo.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`next?: () => boolean`}),` — Hàm điều kiện. Nếu trả về `,(0,c.jsx)(n.code,{children:`true`}),`, vòng lặp hoạt ảnh tiếp tục. Nếu trả về `,(0,c.jsx)(n.code,{children:`false`}),`, vòng lặp dừng lại.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`end?: () => void`}),` — Hàm được thực thi một lần khi vòng lặp hoạt ảnh dừng lại (nghĩa là `,(0,c.jsx)(n.code,{children:`next`}),` trả về false).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`void`})]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { frame } from '@dxtmisha/functional-basic'

const element = document.getElementById('box')
let position = 0

// Hoạt ảnh: di chuyển khối 1px mỗi khung hình cho đến khi đến vị trí 100
frame(
  // callback (cập nhật khung hình)
  () => {
    position += 1
    if (element) {
      element.style.transform = \`translateX(\${position}px)\`
    }
  },
  // next (tiếp tục?)
  () => position < 100,
  // end (kết thúc)
  () => console.log('Hoạt ảnh đã hoàn thành!')
)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};