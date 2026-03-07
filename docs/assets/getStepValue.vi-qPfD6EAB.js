import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function i(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional-basic/Functions/getStepValue - Tính toán giá trị bước tuyệt đối"}),`
`,n.jsx(t.h1,{id:"getstepvalue",children:n.jsx(t.code,{children:"getStepValue"})}),`
`,n.jsxs(t.p,{children:["Tính toán giá trị tuyệt đối của một phần trăm (",n.jsx(t.code,{children:"1%"}),") dựa trên toàn bộ phạm vi (sự khác biệt giữa giá trị lớn nhất và nhỏ nhất). Hàm này rất hữu ích để xác định giá trị của thanh trượt hoặc thanh quy trình sẽ thay đổi bao nhiêu đơn vị khi người dùng kéo thay đổi 1%."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"min: number | undefined"})," — Giá trị tối thiểu của khoảng. Nếu truyền ",n.jsx(t.code,{children:"undefined"}),", nó sẽ dùng ",n.jsx(t.code,{children:"0"}),"."]}),`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"max: number"})," — Giá trị tối đa của khoảng."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"number"})," — Giá trị đại diện cho 1% sự chênh lệch mốc độ dài. Nếu giá trị tối đa nhỏ hơn hoặc bằng giá trị tối thiểu, hàm sẽ trả về ",n.jsx(t.code,{children:"0"}),"."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getStepValue } from '@dxtmisha/functional-basic'

// Phạm vi từ 0 tới 500, vậy 1% tương ứng là 5 đơn vị
console.log(getStepValue(0, 500)) // 5

// Phạm vi từ 50 tới 150 (chênh lệch 100), 1% là 1 đơn vị
console.log(getStepValue(50, 150)) // 1
`})})]})}function u(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(i,{...e})}):i(e)}export{u as default};
