import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as i}from"./index-DC9WpFni.js";import{M as o}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function r(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"@dxtmisha/vi/functional-basic/Functions/toPercent - Tính tỷ lệ phần trăm từ một giá trị"}),`
`,n.jsx(t.h1,{id:"topercent",children:n.jsx(t.code,{children:"toPercent"})}),`
`,n.jsx(t.p,{children:"Tính toán tỷ lệ của giá trị hiện tại so với giá trị tối đa. Trả về một số trong phạm vi từ 0 đến 1."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"maxValue: number"})," — Giá trị tối đa có thể (100%)."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"value: number"})," — Giá trị hiện tại."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"number"})," — Kết quả dưới dạng phân số thập phân (ví dụ: ",n.jsx(t.code,{children:"0.5"})," cho 50%)."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { toPercent } from '@dxtmisha/functional-basic'

console.log(toPercent(200, 100)) // 0.5
console.log(toPercent(100, 25)) // 0.25
`})})]})}function x(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(r,{...e})}):r(e)}export{x as default};
