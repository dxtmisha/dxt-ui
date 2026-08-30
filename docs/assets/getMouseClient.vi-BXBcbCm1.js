import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getMouseClient - Lấy tọa độ X và Y của sự kiện`}),`
`,(0,c.jsx)(t.h1,{id:`getmouseclient`,children:(0,c.jsx)(t.code,{children:`getMouseClient`})}),`
`,(0,c.jsx)(t.p,{children:`Trích xuất tọa độ X và Y của con trỏ (chuột hoặc cảm ứng) tương đối với vùng nhìn thấy của cửa sổ trình duyệt (viewport) từ đối tượng sự kiện.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm này xử lý cả các sự kiện chuột tiêu chuẩn (`,(0,c.jsx)(t.code,{children:`MouseEvent`}),`) và các sự kiện chạm (`,(0,c.jsx)(t.code,{children:`TouchEvent`}),`), cung cấp một giao diện thống nhất (trả về một đối tượng `,(0,c.jsx)(t.code,{children:`ImageCoordinator`}),` chứa các thuộc tính `,(0,c.jsx)(t.code,{children:`x`}),` và `,(0,c.jsx)(t.code,{children:`y`}),`). Điều này đặc biệt hữu ích khi tạo giao diện kéo và thả (drag-and-drop), thanh trượt hoặc các phần tử tương tác khác có thể hoạt động trên nhiều loại thiết bị.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent | TouchEvent`}),` — Đối tượng sự kiện (`,(0,c.jsx)(t.code,{children:`mousemove`}),`, `,(0,c.jsx)(t.code,{children:`touchmove`}),`, `,(0,c.jsx)(t.code,{children:`click`}),`, v.v.).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`ImageCoordinator`}),` — Một đối tượng chứa thuộc tính tọa độ `,(0,c.jsx)(t.code,{children:`x`}),` và `,(0,c.jsx)(t.code,{children:`y`}),`. Nếu không tìm thấy các tọa độ trong sự kiện, hàm mặc định trả về `,(0,c.jsx)(t.code,{children:`{ x: 0, y: 0 }`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getMouseClient } from '@dxtmisha/functional-basic'

document.addEventListener('mousemove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Con trỏ hiện đang ở X: \${coords.x}, Y: \${coords.y}\`)
})

document.addEventListener('touchmove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Vị trí chạm hiện đang ở X: \${coords.x}, Y: \${coords.y}\`)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};