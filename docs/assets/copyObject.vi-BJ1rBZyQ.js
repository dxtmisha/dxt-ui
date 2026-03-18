import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const c={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/copyObject - Sao chép đối tượng"}),`
`,n.jsx(c.h1,{id:"copyobject",children:n.jsx(c.code,{children:"copyObject"})}),`
`,n.jsx(c.p,{children:"Tạo bản sao sâu (deep copy) của các đối tượng và mảng chứa các kiểu dữ liệu cơ bản."}),`
`,n.jsxs(c.p,{children:["Điều này hữu ích khi bạn cần tránh thay đổi trực tiếp dữ liệu (mutate) của trạng thái ban đầu. Hãy nhớ rằng nó không sao chép các hàm, ký hiệu symbols, giá trị ",n.jsx(c.code,{children:"undefined"})," và không thể xử lý các tham chiếu vòng (circular references) (do tiện ích sử dụng ",n.jsx(c.code,{children:"JSON.parse(JSON.stringify(value))"}),")."]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: T"})," — Đối tượng hoặc giá trị cần sao chép."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"}),`
`,n.jsx(c.code,{children:"T"})," — Bản sao mới của đối tượng."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { copyObject } from '@dxtmisha/functional-basic'

const original = { name: 'John', details: { age: 30 } }
const copy = copyObject(original)

copy.details.age = 31

console.log(original.details.age) // 30 (đối tượng gốc không bị thay đổi)
console.log(copy.details.age) // 31
`})})]})}function p(e={}){const{wrapper:c}={...t(),...e.components};return c?n.jsx(c,{...e,children:n.jsx(i,{...e})}):i(e)}export{p as default};
