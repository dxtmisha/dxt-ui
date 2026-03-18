import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-DC9WpFni.js";import{M as t}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function i(e){const s={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"@dxtmisha/vi/functional-basic/Functions/isFloat - Kiểm tra xem giá trị có phải là số hoặc số thực không"}),`
`,n.jsx(s.h1,{id:"isfloat",children:n.jsx(s.code,{children:"isFloat"})}),`
`,n.jsx(s.p,{children:"Kiểm tra xem giá trị có phải là số nguyên hoặc số thực hay không."}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Tham số:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.code,{children:"value: any"})," — giá trị cần kiểm tra."]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Trả về:"}),`
`,n.jsx(s.code,{children:"boolean"})," — ",n.jsx(s.code,{children:"true"})," nếu giá trị là số hoặc chuỗi biểu diễn số, ngược lại là ",n.jsx(s.code,{children:"false"}),"."]}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-typescript",children:`import { isFloat } from '@dxtmisha/functional-basic'

console.log(isFloat(123)) // true
console.log(isFloat('123.45')) // true
console.log(isFloat('abc')) // false
`})})]})}function x(e={}){const{wrapper:s}={...o(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{x as default};
