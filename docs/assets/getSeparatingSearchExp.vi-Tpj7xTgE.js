import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getSeparatingSearchExp - Tạo RegExp tìm kiếm theo từ tách biệt`}),`
`,(0,c.jsx)(n.h1,{id:`getseparatingsearchexp`,children:(0,c.jsx)(n.code,{children:`getSeparatingSearchExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tiện ích tạo một `,(0,c.jsx)(n.code,{children:`RegExp`}),` toàn cục, không phân biệt chữ hoa/thường để tìm kiếm các chuỗi chứa `,(0,c.jsx)(n.strong,{children:`bất kỳ`}),` từ nào từ chuỗi tìm kiếm (phân tách bằng dấu cách).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Mỗi từ được tách bởi dấu cách, escape và nối với nhau bằng toán tử OR `,(0,c.jsx)(n.code,{children:`|`}),`. Điều này hữu ích khi bạn muốn tìm kết quả khớp với ít nhất một trong các từ đã nhập.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: string`}),` — Chuỗi tìm kiếm gồm một hoặc nhiều từ phân cách bởi dấu cách.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — Biểu thức chính quy với cờ `,(0,c.jsx)(n.code,{children:`ig`}),` (toàn cục, không phân biệt chữ hoa/thường).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getSeparatingSearchExp } from '@dxtmisha/functional-basic'

const regex = getSeparatingSearchExp('foo bar')

regex.test('foo')          // true
regex.test('bar')          // true
regex.test('foo bar baz')  // true
regex.test('something')    // false

// Các ký tự đặc biệt được escape tự động
const regex2 = getSeparatingSearchExp('$10 .')
regex2.test('$10') // true
regex2.test('.')   // true
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};