import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as e}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(i){const t={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...e(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/isDomData - Xác minh môi trường URL dữ liệu"}),`
`,n.jsx(t.h1,{id:"isdomdata",children:n.jsx(t.code,{children:"isDomData"})}),`
`,n.jsxs(t.p,{children:["Một tiện ích đơn giản thực hiện công việc xác minh xem bối cảnh thực thi mã hiện thời có được hoạt động trên một đường dẫn (",n.jsx(t.code,{children:"location.href"}),") gắn theo tiền tố ",n.jsx(t.code,{children:"data:"})," hay không. Hàm này thực sự hữu ích nhằm cô lập các khung lập trình có sử dụng luồng dữ liệu liên quan đến mã inline qua data URI hoặc trên các khu vực hộp cát (sandbox) riêng biệt như ",n.jsx(t.code,{children:"iframe"}),"."]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Tham số:"}),`
Hàm này không tiếp nhận bất kỳ đối số nào.`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"boolean"})," — Trả về ",n.jsx(t.code,{children:"true"})," nếu nguồn dẫu nối URL toàn cục của tài liệu (document) bắt đầu bằng nhãn ",n.jsx(t.code,{children:"data:"}),", và lấy giá trị ",n.jsx(t.code,{children:"false"})," đối với những trường hợp khác."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { isDomData } from '@dxtmisha/functional-basic'

// Nếu mã thực thi độc lập trên trang thuần 'https://example.com'
console.log(isDomData()) // false

// Nếu mã phân mảnh trên khối đóng gói 'data:text/html,...'
console.log(isDomData()) // true
`})})]})}function l(i={}){const{wrapper:t}={...e(),...i.components};return t?n.jsx(t,{...i,children:n.jsx(c,{...i})}):c(i)}export{l as default};
