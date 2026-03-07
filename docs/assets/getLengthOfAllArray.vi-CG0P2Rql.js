import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(r){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Functions/getLengthOfAllArray - Độ dài của tất cả phần tử trong mảng"}),`
`,n.jsx(t.h1,{id:"getlengthofallarray",children:n.jsx(t.code,{children:"getLengthOfAllArray"})}),`
`,n.jsxs(t.p,{children:["Tạo và trả về một mảng mới chỉ bao gồm độ dài (thuộc tính ",n.jsx(t.code,{children:".length"}),") của tất cả các phần tử trong mảng chuỗi được cung cấp."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: ObjectOrArray<string>"})," — Mảng chuỗi đầu vào. Nếu truyền vào một chuỗi đơn, hàm sẽ xử lý nó như một mảng chứa một phần tử."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"number[]"})," — Một mảng các số, trong đó mỗi số tương ứng với độ dài của chuỗi trong mảng nguồn ở cùng vị trí đó."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getLengthOfAllArray } from '@dxtmisha/functional-basic'

const data = ['đỏ', 'xanh dương', 'xanh lá']
const lengths = getLengthOfAllArray(data)

console.log(lengths) // [2, 10, 7]
`})})]})}function m(r={}){const{wrapper:t}={...c(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(e,{...r})}):e(r)}export{m as default};
