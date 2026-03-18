import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(o){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...e(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/toNumber - Chuyển đổi giá trị sang kiểu số"}),`
`,n.jsx(t.h1,{id:"tonumber",children:n.jsx(t.code,{children:"toNumber"})}),`
`,n.jsx(t.p,{children:"Trích xuất giá trị số từ một chuỗi hoặc một số. Hàm loại bỏ các ký tự thừa và xử lý chính xác các ký hiệu phân cách phần nghìn và phần thập phân khác nhau (khoảng trắng, dấu phẩy, dấu chấm)."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value?: T"})," — Giá trị đầu vào (chuỗi hoặc số)."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"number"})," — Số thực (float) sau khi chuyển đổi. Nếu giá trị trống hoặc không hợp lệ, hàm trả về ",n.jsx(t.code,{children:"0"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { toNumber } from '@dxtmisha/functional-basic'

console.log(toNumber('1 250,50')) // 1250.5
console.log(toNumber('1,000,000.99')) // 1000000.99
console.log(toNumber('abc-12.5')) // 12.5
`})})]})}function d(o={}){const{wrapper:t}={...e(),...o.components};return t?n.jsx(t,{...o,children:n.jsx(c,{...o})}):c(o)}export{d as default};
