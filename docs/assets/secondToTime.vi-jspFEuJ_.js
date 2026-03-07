import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as o}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function s(e){const i={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/secondToTime - Chuyển đổi giây sang chuỗi thời gian"}),`
`,n.jsx(i.h1,{id:"secondtotime",children:n.jsx(i.code,{children:"secondToTime"})}),`
`,n.jsxs(i.p,{children:["Chuyển đổi số giây được cung cấp thành chuỗi định dạng thời gian ",n.jsx(i.code,{children:"MM:SS"}),"."]}),`
`,n.jsxs(i.p,{children:["Nếu giá trị số giây nhỏ hơn hoặc bằng 0, hoặc không được cung cấp, hàm sẽ trả về giá trị mặc định là ",n.jsx(i.code,{children:"00:00"}),"."]}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"second: number | string | undefined"})," — Tổng số giây (hỗ trợ cả kiểu số nguyên và kiểu chuỗi biểu diễn số)."]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Trả về:"}),`
`,n.jsx(i.code,{children:"string"})," — Một chuỗi được định dạng với số phút và số giây tương ứng (ví dụ: ",n.jsx(i.code,{children:"12:34"}),")."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { secondToTime } from '@dxtmisha/functional-basic'

console.log(secondToTime(125)) // '02:05'
console.log(secondToTime('65')) // '01:05'
console.log(secondToTime()) // '00:00'
`})})]})}function m(e={}){const{wrapper:i}={...c(),...e.components};return i?n.jsx(i,{...e,children:n.jsx(s,{...e})}):s(e)}export{m as default};
