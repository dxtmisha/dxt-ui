import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-DeABI6Wb.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getMouseClientY - Lấy tọa độ Y của sự kiện`}),`
`,(0,c.jsx)(n.h1,{id:`getmouseclienty`,children:(0,c.jsx)(n.code,{children:`getMouseClientY`})}),`
`,(0,c.jsx)(n.p,{children:`Trích xuất tọa độ Y (vị trí dọc) của con trỏ (chuột hoặc cảm ứng) tương đối với vùng nhìn thấy của cửa sổ trình duyệt (viewport) từ đối tượng sự kiện.`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này xử lý cả các sự kiện chuột tiêu chuẩn (`,(0,c.jsx)(n.code,{children:`MouseEvent`}),`) và các sự kiện chạm (`,(0,c.jsx)(n.code,{children:`TouchEvent`}),`), ưu tiên thuộc tính `,(0,c.jsx)(n.code,{children:`clientY`}),`. Nếu `,(0,c.jsx)(n.code,{children:`clientY`}),` không được tìm thấy trực tiếp trên sự kiện, nó sẽ tiếp tục tìm kiếm bên trong các mảng `,(0,c.jsx)(n.code,{children:`targetTouches`}),` và `,(0,c.jsx)(n.code,{children:`touches`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: MouseEvent & TouchEvent`}),` — Đối tượng sự kiện (`,(0,c.jsx)(n.code,{children:`mousemove`}),`, `,(0,c.jsx)(n.code,{children:`touchmove`}),`, `,(0,c.jsx)(n.code,{children:`click`}),`, v.v.).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`number`}),` — Tọa độ Y của con trỏ/điểm chạm. Nếu không tìm thấy, nó sẽ trả về `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getMouseClientY } from '@dxtmisha/functional-basic'

document.addEventListener('click', (event) => {
  const y = getMouseClientY(event)
  console.log(\`Người dùng đã nhấp vào vị trí cách mép trên cửa sổ \${y}px\`)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};