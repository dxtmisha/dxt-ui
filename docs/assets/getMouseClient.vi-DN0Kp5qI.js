import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getMouseClient - Lấy tọa độ X và Y của sự kiện`}),`
`,(0,c.jsx)(n.h1,{id:`getmouseclient`,children:(0,c.jsx)(n.code,{children:`getMouseClient`})}),`
`,(0,c.jsx)(n.p,{children:`Trích xuất tọa độ X và Y của con trỏ (chuột hoặc cảm ứng) tương đối với vùng nhìn thấy của cửa sổ trình duyệt (viewport) từ đối tượng sự kiện.`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm này xử lý cả các sự kiện chuột tiêu chuẩn (`,(0,c.jsx)(n.code,{children:`MouseEvent`}),`) và các sự kiện chạm (`,(0,c.jsx)(n.code,{children:`TouchEvent`}),`), cung cấp một giao diện thống nhất (trả về một đối tượng `,(0,c.jsx)(n.code,{children:`ImageCoordinator`}),` chứa các thuộc tính `,(0,c.jsx)(n.code,{children:`x`}),` và `,(0,c.jsx)(n.code,{children:`y`}),`). Điều này đặc biệt hữu ích khi tạo giao diện kéo và thả (drag-and-drop), thanh trượt hoặc các phần tử tương tác khác có thể hoạt động trên nhiều loại thiết bị.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`event: MouseEvent & TouchEvent`}),` — Đối tượng sự kiện (`,(0,c.jsx)(n.code,{children:`mousemove`}),`, `,(0,c.jsx)(n.code,{children:`touchmove`}),`, `,(0,c.jsx)(n.code,{children:`click`}),`, v.v.).`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`ImageCoordinator`}),` — Một đối tượng chứa thuộc tính tọa độ `,(0,c.jsx)(n.code,{children:`x`}),` và `,(0,c.jsx)(n.code,{children:`y`}),`. Nếu không tìm thấy các tọa độ trong sự kiện, hàm mặc định trả về `,(0,c.jsx)(n.code,{children:`{ x: 0, y: 0 }`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getMouseClient } from '@dxtmisha/functional-basic'

document.addEventListener('mousemove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Con trỏ hiện đang ở X: \${coords.x}, Y: \${coords.y}\`)
})

document.addEventListener('touchmove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Vị trí chạm hiện đang ở X: \${coords.x}, Y: \${coords.y}\`)
})
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};