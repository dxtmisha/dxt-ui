import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function c(e){const t={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/getSeparatingSearchExp - Tạo RegExp tìm kiếm theo từ tách biệt"}),`
`,n.jsx(t.h1,{id:"getseparatingsearchexp",children:n.jsx(t.code,{children:"getSeparatingSearchExp"})}),`
`,n.jsxs(t.p,{children:["Tiện ích tạo một ",n.jsx(t.code,{children:"RegExp"})," toàn cục, không phân biệt chữ hoa/thường để tìm kiếm các chuỗi chứa ",n.jsx(t.strong,{children:"bất kỳ"})," từ nào từ chuỗi tìm kiếm (phân tách bằng dấu cách)."]}),`
`,n.jsxs(t.p,{children:["Mỗi từ được tách bởi dấu cách, escape và nối với nhau bằng toán tử OR ",n.jsx(t.code,{children:"|"}),". Điều này hữu ích khi bạn muốn tìm kết quả khớp với ít nhất một trong các từ đã nhập."]}),`
`,n.jsx(t.p,{children:n.jsx(t.strong,{children:"Tham số:"})}),`
`,n.jsxs(t.ul,{children:[`
`,n.jsxs(t.li,{children:[n.jsx(t.code,{children:"search: string"})," — Chuỗi tìm kiếm gồm một hoặc nhiều từ phân cách bởi dấu cách."]}),`
`]}),`
`,n.jsxs(t.p,{children:[n.jsx(t.strong,{children:"Trả về:"}),`
`,n.jsx(t.code,{children:"RegExp"})," — Biểu thức chính quy với cờ ",n.jsx(t.code,{children:"ig"})," (toàn cục, không phân biệt chữ hoa/thường)."]}),`
`,n.jsx(t.pre,{children:n.jsx(t.code,{className:"language-typescript",children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

const regex = getSeparatingSearchExp('foo bar')

regex.test('foo')          // true
regex.test('bar')          // true
regex.test('foo bar baz')  // true
regex.test('something')    // false

// Các ký tự đặc biệt được escape tự động
const regex2 = getSeparatingSearchExp('$10 .')
regex2.test('$10') // true
regex2.test('.')   // true
`})})]})}function p(e={}){const{wrapper:t}={...r(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(c,{...e})}):c(e)}export{p as default};
