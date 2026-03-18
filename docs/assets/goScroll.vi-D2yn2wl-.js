import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(t){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...t.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/goScroll - Thay đổi cuộn nhanh"}),`
`,n.jsx(e.h1,{id:"goscroll",children:n.jsx(e.code,{children:"goScroll"})}),`
`,n.jsx(e.p,{children:"Thay đổi nhanh vị trí cuộn tại phần tử đến phần tử yêu cầu."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"selector: string"})," — phần tử được chọn, vị trí cuộn của nó cần được thay đổi."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"elementTo: HTMLElement | undefined"})," — phần tử mà bạn cần cuộn đến."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"elementCenter: HTMLElement"})," — phần tử cần được căn giữa."]}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { goScroll } from '@dxtmisha/functional-basic'

const container = document.querySelector('.container')
const target = document.querySelector('.target')

goScroll('.container', target)
`})})]})}function m(t={}){const{wrapper:e}={...r(),...t.components};return e?n.jsx(e,{...t,children:n.jsx(c,{...t})}):c(t)}export{m as default};
