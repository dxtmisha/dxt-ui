import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional-basic/Functions/eventStopPropagation - Dừng lan truyền sự kiện"}),`
`,n.jsx(t.h1,{id:"eventstoppropagation",children:n.jsx(t.code,{children:"eventStopPropagation"})}),`
`,n.jsx(t.p,{children:"Dừng việc lan truyền tiếp theo của một sự kiện trong cây DOM (giai đoạn nổi lên / bắt giữ) và hủy bỏ hành động mặc định của trình duyệt."}),`
`,n.jsxs(t.p,{children:["Hàm này là một trình bao bọc (wrapper) tiện lợi gọi cả hai phương thức ",n.jsx(t.code,{children:"event.preventDefault()"})," và ",n.jsx(t.code,{children:"event.stopPropagation()"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"event: Event"})," — Phiên bản sự kiện DOM cần dừng."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"void"})]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { eventStopPropagation } from '@dxtmisha/functional-basic'

const link = document.createElement('a')
link.href = 'https://example.com'
link.onclick = (e) => {
  // Sẽ hủy bỏ việc điều hướng đến liên kết và ngăn chặn cú nhấp chuột lan truyền lên các phần tử cha
  eventStopPropagation(e)
  console.log('Cú nhấp chuột bị chặn!')
}
`})})]})}function d(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{d as default};
