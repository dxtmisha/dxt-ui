import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as c}from"./index-BaLriJNq.js";import{M as s}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...c(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"@dxtmisha/vi/functional-basic/Functions/isInput - Kiểm tra phần tử đầu vào"}),`
`,n.jsx(e.h1,{id:"isinput",children:n.jsx(e.code,{children:"isInput"})}),`
`,n.jsxs(e.p,{children:["Kiểm tra xem phần tử có phải là trường nhập liệu (",n.jsx(e.code,{children:"input"}),", ",n.jsx(e.code,{children:"textarea"}),", ",n.jsx(e.code,{children:"select"}),") hoặc phần tử có thuộc tính ",n.jsx(e.code,{children:"contenteditable"})," hay không."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"element: HTMLElement | EventTarget | null"})," — phần tử cần kiểm tra."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"boolean"})," — ",n.jsx(e.code,{children:"true"})," nếu phần tử là trường nhập liệu hoặc có thể chỉnh sửa, ngược lại là ",n.jsx(e.code,{children:"false"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { isInput } from '@dxtmisha/functional-basic'

const input = document.createElement('input')
isInput(input) // true

const div = document.createElement('div')
isInput(div) // false
`})})]})}function u(t={}){const{wrapper:e}={...c(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(i,{...t})}):i(t)}export{u as default};
