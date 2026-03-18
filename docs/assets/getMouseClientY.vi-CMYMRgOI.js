import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as s}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Functions/getMouseClientY - Lấy tọa độ Y của sự kiện"}),`
`,n.jsx(e.h1,{id:"getmouseclienty",children:n.jsx(e.code,{children:"getMouseClientY"})}),`
`,n.jsx(e.p,{children:"Trích xuất tọa độ Y (vị trí dọc) của con trỏ (chuột hoặc cảm ứng) tương đối với vùng nhìn thấy của cửa sổ trình duyệt (viewport) từ đối tượng sự kiện."}),`
`,n.jsxs(e.p,{children:["Hàm này xử lý cả các sự kiện chuột tiêu chuẩn (",n.jsx(e.code,{children:"MouseEvent"}),") và các sự kiện chạm (",n.jsx(e.code,{children:"TouchEvent"}),"), ưu tiên thuộc tính ",n.jsx(e.code,{children:"clientY"}),". Nếu ",n.jsx(e.code,{children:"clientY"})," không được tìm thấy trực tiếp trên sự kiện, nó sẽ tiếp tục tìm kiếm bên trong các mảng ",n.jsx(e.code,{children:"targetTouches"})," và ",n.jsx(e.code,{children:"touches"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event: MouseEvent & TouchEvent"})," — Đối tượng sự kiện (",n.jsx(e.code,{children:"mousemove"}),", ",n.jsx(e.code,{children:"touchmove"}),", ",n.jsx(e.code,{children:"click"}),", v.v.)."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"number"})," — Tọa độ Y của con trỏ/điểm chạm. Nếu không tìm thấy, nó sẽ trả về ",n.jsx(e.code,{children:"0"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getMouseClientY } from '@dxtmisha/functional-basic'

document.addEventListener('click', (event) => {
  const y = getMouseClientY(event)
  console.log(\`Người dùng đã nhấp vào vị trí cách mép trên cửa sổ \${y}px\`)
})
`})})]})}function m(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{m as default};
