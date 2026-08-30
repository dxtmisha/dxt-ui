import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/frame - Vòng lặp requestAnimationFrame`}),`
`,(0,c.jsx)(t.h1,{id:`frame`,children:(0,c.jsx)(t.code,{children:`frame`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tiện ích này sẽ gọi vòng lặp `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` để thực hiện hoạt ảnh theo từng khung hình (frame-by-frame) trong trình duyệt.`]}),`
`,(0,c.jsx)(t.p,{children:`Trình duyệt tự động tối ưu hóa tốc độ khung hình (thường là 60 FPS) và dừng hoạt ảnh khi tab không hoạt động, giúp hiển thị mượt mà.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Hành vi trong SSR:`}),`
Trong các môi trường không có DOM (chẳng hạn như SSR), `,(0,c.jsx)(t.code,{children:`requestAnimationFrame`}),` sẽ không được sử dụng. Hàm thực thi `,(0,c.jsx)(t.code,{children:`callback`}),` một lần đồng bộ và gọi ngay lập tức hàm `,(0,c.jsx)(t.code,{children:`end`}),` (vòng lặp qua `,(0,c.jsx)(t.code,{children:`next`}),` không được bắt đầu) để ngăn chặn tràn ngăn xếp (stack overflow) và chặn luồng trên máy chủ (server thread blocking).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`callback: () => void`}),` — Hàm được gọi để cập nhật hoạt ảnh.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`next?: () => boolean`}),` — Hàm điều kiện. Nếu trả về `,(0,c.jsx)(t.code,{children:`true`}),` (chỉ trong trình duyệt), vòng lặp hoạt ảnh tiếp tục.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`end?: () => void`}),` — Hàm được thực thi một lần khi vòng lặp hoạt ảnh kết thúc.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`void`})]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { frame } from '@dxtmisha/functional-basic'

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
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};