import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as h}from"./index-DC9WpFni.js";import{M as i}from"./blocks-DrZFBXp-.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-okvuAVTt.js";function t(c){const e={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...h(),...c.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"@dxtmisha/vi/functional-basic/Functions/getExactSearchExp - Tạo RegExp để khớp chính xác"}),`
`,n.jsx(e.h1,{id:"getexactsearchexp",children:n.jsx(e.code,{children:"getExactSearchExp"})}),`
`,n.jsxs(e.p,{children:["Tiện ích tạo một ",n.jsx(e.code,{children:"RegExp"})," không phân biệt chữ hoa/thường để khớp chính xác với chuỗi đã cho."]}),`
`,n.jsxs(e.p,{children:["Khác với ",n.jsx(e.code,{children:"getSearchExp"}),", hàm này khớp với toàn bộ chuỗi (với các ký tự đặc biệt được escape) mà không tách nó thành các từ riêng biệt."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Tham số:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"search: string"})," — Chuỗi tìm kiếm để khớp chính xác."]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Trả về:"}),`
`,n.jsx(e.code,{children:"RegExp"})," — Biểu thức chính quy với cờ ",n.jsx(e.code,{children:"i"})," (không phân biệt chữ hoa/thường)."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { getExactSearchExp } from '@dxtmisha/functional-basic'

const regex = getExactSearchExp('hello')

regex.test('hello')       // true
regex.test('HELLO')       // true
regex.test('hello world') // false — không phải khớp chính xác
`})})]})}function a(c={}){const{wrapper:e}={...h(),...c.components};return e?n.jsx(e,{...c,children:n.jsx(t,{...c})}):t(c)}export{a as default};
