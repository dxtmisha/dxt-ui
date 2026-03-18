import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/getKey - Lấy mã phím vừa nhấn"}),`
`,n.jsx(e.h1,{id:"getkey",children:n.jsx(e.code,{children:"getKey"})}),`
`,n.jsxs(e.p,{children:["Trả về mã số hoặc tên của phím vừa được bấm dựa trên đối tượng sự kiện ",n.jsx(e.code,{children:"KeyboardEvent"}),". Tiện ích này chuẩn hóa cách tìm được định danh của phím nhờ vào cách truy xuất thuộc tính theo thứ tự ưu tiên an toàn như sau: ",n.jsx(e.code,{children:"event.key"})," → ",n.jsx(e.code,{children:"event.code"})," → chuyển ",n.jsx(e.code,{children:"event.keyCode"})," thành chuỗi. Nếu tất cả đều vắng mặt, trả về ",n.jsx(e.code,{children:"undefined"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"event: KeyboardEvent"})," — Đối tượng sự kiện của bàn phím (được kích hoạt từ sự kiện ",n.jsx(e.code,{children:"keydown"}),", ",n.jsx(e.code,{children:"keyup"})," hoặc ",n.jsx(e.code,{children:"keypress"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"string"})," — Mã hoặc tên của phím bấm vừa bị kích bằng số hay chuỗi (ví dụ: ",n.jsx(e.code,{children:"'Enter'"}),", ",n.jsx(e.code,{children:"'Escape'"}),", ",n.jsx(e.code,{children:"'A'"}),")."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getKey } from '@dxtmisha/functional-basic'

document.addEventListener('keydown', (e) => {
  const keyName = getKey(e)
  
  if (keyName === 'Escape') {
    console.log('Người dùng đã bấm nút thoái (Escape)! Chúng ta sẽ tắt menu.')
  }
})
`})})]})}function m(c={}){const{wrapper:e}={...s(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(t,{...c})}):t(c)}export{m as default};
