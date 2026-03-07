import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-BaLriJNq.js";import{M as i}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function t(e){const c={blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/copyObjectLite - Sao chép nông đối tượng"}),`
`,n.jsx(c.h1,{id:"copyobjectlite",children:n.jsx(c.code,{children:"copyObjectLite"})}),`
`,n.jsxs(c.p,{children:["Tạo một bản sao nông (shallow copy) của một đối tượng đơn giản bằng cách sử dụng ",n.jsx(c.code,{children:"Object.assign"}),". Nó có thể tùy chọn hợp nhất các thuộc tính bổ sung từ đối số thứ hai ",n.jsx(c.code,{children:"source"}),"."]}),`
`,n.jsxs(c.blockquote,{children:[`
`,n.jsx(c.p,{children:"Vì đây là sao chép nông, các đối tượng và mảng lồng nhau sẽ được sao chép theo tham chiếu (reference), chứ không phải theo giá trị."}),`
`]}),`
`,n.jsx(c.p,{children:n.jsx(c.strong,{children:"Tham số:"})}),`
`,n.jsxs(c.ul,{children:[`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"value: T"})," — Đối tượng cần sao chép."]}),`
`,n.jsxs(c.li,{children:[n.jsx(c.code,{children:"source?: any"})," — Các thuộc tính bổ sung để hợp nhất với đối tượng ",n.jsx(c.code,{children:"value"}),". Các thuộc tính từ ",n.jsx(c.code,{children:"source"})," sẽ ghi đè các thuộc tính từ ",n.jsx(c.code,{children:"value"})," nếu chúng có cùng khóa (key)."]}),`
`]}),`
`,n.jsxs(c.p,{children:[n.jsx(c.strong,{children:"Trả về:"}),`
`,n.jsx(c.code,{children:"R"})," (mặc định là ",n.jsx(c.code,{children:"T"}),") — Bản sao nông mới của đối tượng."]}),`
`,n.jsx(c.pre,{children:n.jsx(c.code,{className:"language-typescript",children:`import { copyObjectLite } from '@dxtmisha/functional-basic'

const original = { a: 1, b: { c: 2 } }

// Sao chép nông đợn giản
const copy = copyObjectLite(original)
console.log(copy.b === original.b) // true (tham chiếu đến cùng một đối tượng lồng nhau)

// Sao chép với các thuộc tính hợp nhất bổ sung
const merged = copyObjectLite(original, { a: 10, d: 4 })
console.log(merged) // { a: 10, b: { c: 2 }, d: 4 }
`})})]})}function g(e={}){const{wrapper:c}={...o(),...e.components};return c?n.jsx(c,{...e,children:n.jsx(t,{...e})}):t(e)}export{g as default};
