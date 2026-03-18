import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as r}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function o(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"@dxtmisha/vi/functional-basic/Functions/isInDom - Kiểm tra xem phần tử có trong DOM không"}),`
`,n.jsx(e.h1,{id:"isindom",children:n.jsx(e.code,{children:"isInDom"})}),`
`,n.jsx(e.p,{children:"Kiểm tra xem một phần tử có còn trong cây DOM hay không."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element: ElementOrString<E>"})," — bộ chọn để khớp hoặc một Element."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"})," nếu phần tử có trong DOM, ngược lại là ",n.jsx(e.code,{children:"false"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isInDom } from '@dxtmisha/functional-basic'

const div = document.createElement('div')
document.body.appendChild(div)
console.log(isInDom(div)) // true
`})})]})}function a(t={}){const{wrapper:e}={...i(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(o,{...t})}):o(t)}export{a as default};
