import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function h(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional-basic/Functions/frame - Vòng lặp requestAnimationFrame"}),`
`,n.jsx(t.h1,{id:"frame",children:n.jsx(t.code,{children:"frame"})}),`
`,n.jsxs(t.p,{children:["Tiện ích này sẽ gọi vòng lặp ",n.jsx(t.code,{children:"requestAnimationFrame"})," để thực hiện hoạt ảnh theo từng khung hình (frame-by-frame) trong trình duyệt."]}),`
`,n.jsxs(t.p,{children:["Trình duyệt tự động tối ưu hóa tốc độ khung hình (thường là 60 FPS) và dừng hoạt ảnh khi tab không hoạt động, giúp hiển thị mượt mà. Trong các môi trường không có DOM (chẳng hạn như SSR), ",n.jsx(t.code,{children:"requestAnimationFrame"})," sẽ không được sử dụng và hàm chỉ thực thi lệnh callback một lần đồng bộ."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"callback: () => void"})," — Hàm được gọi khi đến thời điểm cập nhật hoạt ảnh cho lần vẽ lại tiếp theo."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"next?: () => boolean"})," — Hàm điều kiện. Nếu trả về ",n.jsx(t.code,{children:"true"}),", vòng lặp hoạt ảnh tiếp tục. Nếu trả về ",n.jsx(t.code,{children:"false"}),", vòng lặp dừng lại."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"end?: () => void"})," — Hàm được thực thi một lần khi vòng lặp hoạt ảnh dừng lại (nghĩa là ",n.jsx(t.code,{children:"next"})," trả về false)."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"void"})]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { frame } from '@dxtmisha/functional-basic'

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
`})})]})}function a(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(h,{...e})}):h(e)}export{a as default};
