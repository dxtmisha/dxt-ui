import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/getMouseClient - Lấy tọa độ X và Y của sự kiện"}),`
`,n.jsx(t.h1,{id:"getmouseclient",children:n.jsx(t.code,{children:"getMouseClient"})}),`
`,n.jsx(t.p,{children:"Trích xuất tọa độ X và Y của con trỏ (chuột hoặc cảm ứng) tương đối với vùng nhìn thấy của cửa sổ trình duyệt (viewport) từ đối tượng sự kiện."}),`
`,n.jsxs(t.p,{children:["Hàm này xử lý cả các sự kiện chuột tiêu chuẩn (",n.jsx(t.code,{children:"MouseEvent"}),") và các sự kiện chạm (",n.jsx(t.code,{children:"TouchEvent"}),"), cung cấp một giao diện thống nhất (trả về một đối tượng ",n.jsx(t.code,{children:"ImageCoordinator"})," chứa các thuộc tính ",n.jsx(t.code,{children:"x"})," và ",n.jsx(t.code,{children:"y"}),"). Điều này đặc biệt hữu ích khi tạo giao diện kéo và thả (drag-and-drop), thanh trượt hoặc các phần tử tương tác khác có thể hoạt động trên nhiều loại thiết bị."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"event: MouseEvent & TouchEvent"})," — Đối tượng sự kiện (",n.jsx(t.code,{children:"mousemove"}),", ",n.jsx(t.code,{children:"touchmove"}),", ",n.jsx(t.code,{children:"click"}),", v.v.)."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"ImageCoordinator"})," — Một đối tượng chứa thuộc tính tọa độ ",n.jsx(t.code,{children:"x"})," và ",n.jsx(t.code,{children:"y"}),". Nếu không tìm thấy các tọa độ trong sự kiện, hàm mặc định trả về ",n.jsx(t.code,{children:"{ x: 0, y: 0 }"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getMouseClient } from '@dxtmisha/functional-basic'

document.addEventListener('mousemove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Con trỏ hiện đang ở X: \${coords.x}, Y: \${coords.y}\`)
})

document.addEventListener('touchmove', (event) => {
  const coords = getMouseClient(event)
  console.log(\`Vị trí chạm hiện đang ở X: \${coords.x}, Y: \${coords.y}\`)
})
`})})]})}function a(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{a as default};
