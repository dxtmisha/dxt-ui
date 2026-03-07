import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as t}from"./index-BaLriJNq.js";import{M as e}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(c){const r={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Functions/arrFill - Tạo mảng được điền giá trị"}),`
`,n.jsx(r.h1,{id:"arrfill",children:n.jsx(r.code,{children:"arrFill"})}),`
`,n.jsx(r.p,{children:"Định hình và trả về một mảng có kích thước được chỉ định, chứa toàn các giá trị giống nhau."}),`
`,n.jsx(r.p,{children:"Điều này hữu ích cho việc nhanh chóng tạo các bộ khung (skeletons) chờ tải trang, khởi tạo trạng thái ban đầu hoặc danh sách mặc định."}),`
`,n.jsx(r.p,{children:n.jsx(r.strong,{children:"Tham số:"})}),`
`,n.jsxs(r.ul,{children:[`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"value: T"})," — giá trị để điền vào mảng."]}),`
`,n.jsxs(r.li,{children:[n.jsx(r.code,{children:"count: number"})," — số lượng phần tử trong mảng đó."]}),`
`]}),`
`,n.jsxs(r.p,{children:[n.jsx(r.strong,{children:"Trả về:"}),`
`,n.jsx(r.code,{children:"T[]"})," — một mảng được điền với giá trị đã chỉ định."]}),`
`,n.jsx(r.pre,{children:n.jsx(r.code,{className:"language-typescript",children:`import { arrFill } from '@dxtmisha/functional-basic'

const array = arrFill('a', 3)
console.log(array) // ['a', 'a', 'a']
`})})]})}function m(c={}){const{wrapper:r}={...t(),...c.components};return r?n.jsx(r,{...c,children:n.jsx(i,{...c})}):i(c)}export{m as default};
