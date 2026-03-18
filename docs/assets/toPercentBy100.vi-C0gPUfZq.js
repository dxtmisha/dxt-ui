import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/toPercentBy100 - Chuyển đổi giá trị sang phần trăm (0 đến 100)"}),`
`,n.jsx(t.h1,{id:"topercentby100",children:n.jsx(t.code,{children:"toPercentBy100"})}),`
`,n.jsx(t.p,{children:"Tính toán giá trị phần trăm của số hiện tại so với giá trị tối đa theo định dạng tiêu chuẩn (từ 0 đến 100)."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"maxValue: number"})," — Giá trị tối đa có thể."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: number"})," — Giá trị hiện tại."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"number"})," — Giá trị số phần trăm."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { toPercentBy100 } from '@dxtmisha/functional-basic'

console.log(toPercentBy100(200, 100)) // 50
console.log(toPercentBy100(1000, 10)) // 1
`})})]})}function a(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{a as default};
