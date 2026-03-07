import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as s}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function e(r){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/getMaxLengthAllArray - Chiều dài lớn nhất trong mảng"}),`
`,n.jsx(t.h1,{id:"getmaxlengthallarray",children:n.jsx(t.code,{children:"getMaxLengthAllArray"})}),`
`,n.jsxs(t.p,{children:["Một tiện ích tìm chuỗi dài nhất trong mảng đã cung cấp và trả về độ dài của nó (dưới dạng một số). Hàm sử dụng hàm dựng sẵn ",n.jsx(t.code,{children:"Math.max"})," kết hợp với ",n.jsx(t.code,{children:"getLengthOfAllArray"}),"."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"data: ObjectOrArray<string>"})," — Mảng chuỗi đầu vào."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"number"})," — Độ dài của chuỗi dài nhất trong mảng. Nếu truyền vào mảng rỗng, hàm sẽ trả về ",n.jsx(t.code,{children:"-Infinity"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getMaxLengthAllArray } from '@dxtmisha/functional-basic'

const phrases = ['Xin chào', 'Chào buổi sáng', 'Chào']
const maxLength = getMaxLengthAllArray(phrases)

console.log(maxLength) // 13 ("Chào buổi sáng")
`})})]})}function g(r={}){const{wrapper:t}={...s(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(e,{...r})}):e(r)}export{g as default};
