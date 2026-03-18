import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(r){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Functions/toArray - Chuyển đổi giá trị thành mảng"}),`
`,n.jsx(t.h1,{id:"toarray",children:n.jsx(t.code,{children:"toArray"})}),`
`,n.jsx(t.p,{children:"Chuyển đổi một giá trị thành một mảng. Nếu giá trị đã là một mảng, nó sẽ trả về chính nó. Ngược lại, nó sẽ bọc giá trị trong một mảng."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: T"})," — Giá trị cần chuyển đổi thành mảng."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"T[]"})," — Một mảng chứa giá trị được cung cấp."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { toArray } from '@dxtmisha/functional-basic'

console.log(toArray([1, 2, 3])) // [1, 2, 3]
console.log(toArray(1)) // [1]
`})})]})}function d(r={}){const{wrapper:t}={...i(),...r.components};return t?n.jsx(t,{...r,children:n.jsx(o,{...r})}):o(r)}export{d as default};
