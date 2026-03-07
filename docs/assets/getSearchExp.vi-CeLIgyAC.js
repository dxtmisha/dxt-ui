import{j as t}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as r}from"./index-BaLriJNq.js";import{M as h}from"./blocks-SOxllcy3.js";import"./preload-helper-DV8odVq5.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-B21bnPHY.js";function c(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(h,{title:"@dxtmisha/vi/functional-basic/Functions/getSearchExp - Tạo RegExp khớp tất cả các từ tìm kiếm"}),`
`,t.jsx(n.h1,{id:"getsearchexp",children:t.jsx(n.code,{children:"getSearchExp"})}),`
`,t.jsxs(n.p,{children:["Tiện ích tạo một ",t.jsx(n.code,{children:"RegExp"})," không phân biệt chữ hoa/thường, khớp với chuỗi chứa ",t.jsx(n.strong,{children:"tất cả"})," các từ trong chuỗi tìm kiếm (theo bất kỳ thứ tự nào)."]}),`
`,t.jsxs(n.p,{children:["Mỗi từ được tách bởi khoảng trắng, escape và bọc trong lookahead ",t.jsx(n.code,{children:"(?=.*?từ)"}),". Rất phù hợp để xây dựng tính năng tìm kiếm trực tiếp hoặc lọc theo nhiều từ."]}),`
`,t.jsx(n.p,{children:t.jsx(n.strong,{children:"Tham số:"})}),`
`,t.jsxs(n.ul,{children:[`
`,t.jsxs(n.li,{children:[t.jsx(n.code,{children:"search: string"})," — Chuỗi tìm kiếm gồm một hoặc nhiều từ phân cách bởi khoảng trắng."]}),`
`]}),`
`,t.jsxs(n.p,{children:[t.jsx(n.strong,{children:"Trả về:"}),`
`,t.jsx(n.code,{children:"RegExp"})," — Biểu thức chính quy với cờ ",t.jsx(n.code,{children:"ig"})," (toàn cục, không phân biệt chữ hoa/thường)."]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-typescript",children:`import { getSearchExp } from '@dxtmisha/functional-basic'

const regex = getSearchExp('foo bar')

regex.test('foo bar baz')  // true  — chứa cả hai từ
regex.test('bar foo')      // true  — thứ tự không quan trọng
regex.test('foo only')     // false — thiếu từ bar

// Các ký tự đặc biệt được escape tự động
const regex2 = getSearchExp('price $10.00')
regex2.test('price $10.00') // true
regex2.test('price X10Y00') // false
`})})]})}function p(e={}){const{wrapper:n}={...r(),...e.components};return n?t.jsx(n,{...e,children:t.jsx(c,{...e})}):c(e)}export{p as default};
