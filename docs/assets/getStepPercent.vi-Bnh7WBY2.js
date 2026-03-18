import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/getStepPercent - Tính toán phần trăm của một bước"}),`
`,n.jsx(t.h1,{id:"getsteppercent",children:n.jsx(t.code,{children:"getStepPercent"})}),`
`,n.jsx(t.p,{children:"Tính toán xem phần trăm của toàn bộ phạm vi (tính từ giá trị nhỏ nhất đến giá trị lớn nhất) tương ứng với độ dài của một đơn vị (hoặc một bước = 1). Hàm này rất hữu ích khi thiết lập vị trí các thành phần của thanh trượt (slider) hoặc thanh tiến trình tính theo phần trăm."}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"min: number | undefined"})," — Giá trị tối thiểu của khoảng. Nếu truyền ",n.jsx(t.code,{children:"undefined"}),", nó sẽ dùng ",n.jsx(t.code,{children:"0"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"max: number"})," — Giá trị tối đa của khoảng."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"number"})," — Phần trăm (từ 0 đến 100) mà một bước chiếm. Nếu giá trị tối đa nhỏ hơn hoặc bằng giá trị tối thiểu, hàm sẽ trả về ",n.jsx(t.code,{children:"0"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getStepPercent } from '@dxtmisha/functional-basic'

// Phạm vi từ 0 tới 200, vậy 1 bước sẽ bằng 0.5%
console.log(getStepPercent(0, 200)) // 0.5

// Phạm vi từ 50 tới 150 (chênh lệch 100), bước là 1%
console.log(getStepPercent(50, 150)) // 1
`})})]})}function p(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{p as default};
