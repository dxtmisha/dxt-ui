import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as e}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(i){const o={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(e,{title:"@dxtmisha/vi/functional-basic/Functions/transformation - Chuyển đổi chuỗi sang kiểu dữ liệu tương ứng"}),`
`,n.jsx(o.h1,{id:"transformation",children:n.jsx(o.code,{children:"transformation"})}),`
`,n.jsxs(o.p,{children:["Chuyển đổi một giá trị chuỗi thành kiểu dữ liệu tương ứng (boolean, số, đối tượng hoặc ",n.jsx(o.code,{children:"null"}),"/",n.jsx(o.code,{children:"undefined"}),"). Nếu cờ ",n.jsx(o.code,{children:"isFunction"})," được bật, hàm sẽ kiểm tra sự tồn tại của một hàm có tên đó trong đối tượng toàn cục ",n.jsx(o.code,{children:"window"}),"."]}),`
`,n.jsx(o.p,{children:n.jsx(o.strong,{children:"Tham số:"})}),`
`,n.jsxs(o.ul,{children:[`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"value: any"})," — Giá trị cần chuyển đổi."]}),`
`,n.jsxs(o.li,{children:[n.jsx(o.code,{children:"isFunction: boolean"})," — Cờ tìm kiếm hàm trong ",n.jsx(o.code,{children:"window"})," (mặc định là ",n.jsx(o.code,{children:"false"}),")."]}),`
`]}),`
`,n.jsxs(o.p,{children:[n.jsx(o.strong,{children:"Trả về:"}),`
`,n.jsx(o.code,{children:"any"})," — Giá trị đã được chuyển đổi."]}),`
`,n.jsx(o.pre,{children:n.jsx(o.code,{className:"language-typescript",children:`import { transformation } from '@dxtmisha/functional-basic'

console.log(transformation('true')) // true
console.log(transformation('12.5')) // 12.5
console.log(transformation('{"a":1}')) // { a: 1 }
console.log(transformation('null')) // null
`})})]})}function m(i={}){const{wrapper:o}={...r(),...i.components};return o?n.jsx(o,{...i,children:n.jsx(t,{...i})}):t(i)}export{m as default};
