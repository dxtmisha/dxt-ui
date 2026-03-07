import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as c}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(i){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(c,{title:"@dxtmisha/vi/functional-basic/Functions/toNumberByMax - Chuyển đổi sang số với giới hạn tối đa"}),`
`,n.jsx(e.h1,{id:"tonumberbymax",children:n.jsx(e.code,{children:"toNumberByMax"})}),`
`,n.jsxs(e.p,{children:["Chuyển đổi giá trị đầu vào thành một số và nếu giá trị đó vượt quá mức tối đa được chỉ định, hàm sẽ trả về một chuỗi có ký hiệu ",n.jsx(e.code,{children:"+"})," ở cuối. Hàm cũng hỗ trợ thực hiện định dạng cục bộ cho kết quả."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"value: string | number"})," — Giá trị đầu vào."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"max?: string | number"})," — Giá trị tối đa cho phép."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"formatting?: boolean"})," — Cờ bật định dạng thông qua ",n.jsx(e.code,{children:"GeoIntl"}),"."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"language?: string"})," — Mã ngôn ngữ để định dạng (ví dụ: ",n.jsx(e.code,{children:"'vi-VN'"}),")."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"string | number"})," — Một chuỗi đã được định dạng (ví dụ: ",n.jsx(e.code,{children:"'99+'"}),") hoặc một số."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { toNumberByMax } from '@dxtmisha/functional-basic'

console.log(toNumberByMax(150, 99)) // '99+'
console.log(toNumberByMax(50, 99)) // 50
console.log(toNumberByMax(1000, 500, true, 'vi-VN')) // '500+'
`})})]})}function m(i={}){const{wrapper:e}={...r(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(t,{...i})}):t(i)}export{m as default};
