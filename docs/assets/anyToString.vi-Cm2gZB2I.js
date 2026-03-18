import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const i={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Functions/anyToString - Chuyển đổi một giá trị thành chuỗi"}),`
`,n.jsx(i.h1,{id:"anytostring",children:n.jsx(i.code,{children:"anyToString"})}),`
`,n.jsx(i.p,{children:"Một tiện ích chuyển đổi an toàn bất kỳ dữ liệu đầu vào nào thành kiểu chuỗi."}),`
`,n.jsx(i.p,{children:"Điều này rất hữu ích khi xuất dữ liệu ra giao diện mà không biết trước kiểu của biến (đối tượng, mảng, boolean hoặc null)."}),`
`,n.jsx(i.p,{children:n.jsx(i.strong,{children:"Tham số:"})}),`
`,n.jsxs(i.ul,{children:[`
`,n.jsxs(i.li,{children:[n.jsx(i.code,{children:"value: V"})," — Giá trị cần chuyển đổi."]}),`
`]}),`
`,n.jsxs(i.p,{children:[n.jsx(i.strong,{children:"Trả về:"}),`
`,n.jsx(i.code,{children:"string"})," — Biểu diễn chuỗi của giá trị."]}),`
`,n.jsx(i.pre,{children:n.jsx(i.code,{className:"language-typescript",children:`import { anyToString } from '@dxtmisha/functional-basic'

console.log(anyToString(' test ')) // 'test'
console.log(anyToString([1, 2, 3])) // '1,2,3'
console.log(anyToString({ a: 1 })) // '{"a":1}'
console.log(anyToString(true)) // '1'
console.log(anyToString(false)) // '0'
console.log(anyToString(null)) // ''
`})})]})}function d(t={}){const{wrapper:i}={...r(),...t.components};return i?n.jsx(i,{...t,children:n.jsx(o,{...t})}):o(t)}export{d as default};
