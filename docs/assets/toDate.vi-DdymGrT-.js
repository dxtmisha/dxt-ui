import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(i){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/toDate - Chuyển đổi giá trị sang đối tượng Date"}),`
`,n.jsx(t.h1,{id:"todate",children:n.jsx(t.code,{children:"toDate"})}),`
`,n.jsxs(t.p,{children:["Chuyển đổi giá trị đầu vào (ngày, số hoặc chuỗi) thành đối tượng ",n.jsx(t.code,{children:"Date"}),". Hỗ trợ nhiều định dạng chuỗi khác nhau, bao gồm các chuỗi giống ISO không có dấu phân cách, cũng như tự động thay thế múi giờ."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value?: T"})," — Giá trị đầu vào (đối tượng ",n.jsx(t.code,{children:"Date"}),", dấu thời gian tính bằng mili giây hoặc chuỗi ngày tháng)."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"Date"})," — Đối tượng ngày tháng kết quả. Nếu giá trị không được cung cấp hoặc là ",n.jsx(t.code,{children:"null"}),", ngày hiện tại sẽ được trả về."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { toDate } from '@dxtmisha/functional-basic'

console.log(toDate('20231027')) // '2023-10-27T00:00:00.000Z'
console.log(toDate(1672531200000)) // '2023-01-01T00:00:00.000Z'
console.log(toDate('12:00')) // '2000-01-01T12:00:00.000Z'
`})})]})}function d(i={}){const{wrapper:t}={...c(),...i.components};return t?n.jsx(t,{...i,children:n.jsx(e,{...i})}):e(i)}export{d as default};
