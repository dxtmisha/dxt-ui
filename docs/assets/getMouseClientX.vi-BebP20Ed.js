import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getMouseClientX - Lấy tọa độ X của sự kiện`}),`
`,(0,c.jsx)(t.h1,{id:`getmouseclientx`,children:(0,c.jsx)(t.code,{children:`getMouseClientX`})}),`
`,(0,c.jsx)(t.p,{children:`Trích xuất tọa độ X (vị trí ngang) của con trỏ (chuột hoặc cảm ứng) tương đối với vùng nhìn thấy của cửa sổ trình duyệt (viewport) từ đối tượng sự kiện.`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm này xử lý cả các sự kiện chuột tiêu chuẩn (`,(0,c.jsx)(t.code,{children:`MouseEvent`}),`) và các sự kiện chạm (`,(0,c.jsx)(t.code,{children:`TouchEvent`}),`), ưu tiên thuộc tính `,(0,c.jsx)(t.code,{children:`clientX`}),`. Nếu `,(0,c.jsx)(t.code,{children:`clientX`}),` không được tìm thấy trực tiếp trên sự kiện, nó sẽ tiếp tục tìm kiếm bên trong các mảng `,(0,c.jsx)(t.code,{children:`targetTouches`}),` và `,(0,c.jsx)(t.code,{children:`touches`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`event: MouseEvent | TouchEvent`}),` — Đối tượng sự kiện (`,(0,c.jsx)(t.code,{children:`mousemove`}),`, `,(0,c.jsx)(t.code,{children:`touchmove`}),`, `,(0,c.jsx)(t.code,{children:`click`}),`, v.v.).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — Tọa độ X của con trỏ/điểm chạm. Nếu không tìm thấy, nó sẽ trả về `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getMouseClientX } from '@dxtmisha/functional-basic'

document.addEventListener('click', (event) => {
  const x = getMouseClientX(event)
  console.log(\`Người dùng đã nhấp vào vị trí cách mép trái cửa sổ \${x}px\`)
})
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};