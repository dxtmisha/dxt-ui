import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/getElementOrWindow - Truy xuất Element hoặc Window"}),`
`,n.jsx(t.h1,{id:"getelementorwindow",children:n.jsx(t.code,{children:"getElementOrWindow"})}),`
`,n.jsxs(t.p,{children:["Tiện ích này tương tự như ",n.jsx(t.code,{children:"getElement"}),", nhưng có một điểm khác biệt đáng kể: nếu đối tượng toàn cục ",n.jsx(t.code,{children:"window"})," được truyền vào dưới dạng một tham số, hàm sẽ trả về chính xác đối tượng đó. (Trái ngược với ",n.jsx(t.code,{children:"getElement"}),", khi ",n.jsx(t.code,{children:"getElement"})," sẽ trả về ",n.jsx(t.code,{children:"document.body"}),")."]}),`
`,n.jsxs(t.p,{children:["Nếu truyền vào một chuỗi hoặc một phần tử khác, hàm sẽ hoạt động giống hệt như tiện ích ",n.jsx(t.code,{children:"getElement"})," tiêu chuẩn."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"element?: ElementOrString<E>"})," — Một bộ chọn để tìm kiếm, một nút ",n.jsx(t.code,{children:"Element"}),", hoặc đối tượng ",n.jsx(t.code,{children:"Window"}),"."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"E | undefined"})," — Phần tử được tìm thấy, phần tử được truyền vào ban đầu, bản thân đối tượng ",n.jsx(t.code,{children:"window"})," (nếu đối tượng này được truyền vào), hoặc ",n.jsx(t.code,{children:"undefined"})," nếu không có phần tử nào khớp."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getElementOrWindow } from '@dxtmisha/functional-basic'

// Việc truyền vào Window sẽ trả về Window (ngược lại, getElement sẽ trả về document.body)
const win = getElementOrWindow(window)

// Tìm kiếm bình thường bằng bộ chọn
const btn = getElementOrWindow('.submit-btn')
`})})]})}function g(e={}){const{wrapper:t}={...c(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{g as default};
