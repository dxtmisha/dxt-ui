import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getSearchExp - Tạo RegExp khớp tất cả các từ tìm kiếm`}),`
`,(0,c.jsx)(n.h1,{id:`getsearchexp`,children:(0,c.jsx)(n.code,{children:`getSearchExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tiện ích tạo một `,(0,c.jsx)(n.code,{children:`RegExp`}),` không phân biệt chữ hoa/thường, khớp với chuỗi chứa `,(0,c.jsx)(n.strong,{children:`tất cả`}),` các từ trong chuỗi tìm kiếm (theo bất kỳ thứ tự nào).`]}),`
`,(0,c.jsxs)(n.p,{children:[`Mỗi từ được tách bởi khoảng trắng, escape và bọc trong lookahead `,(0,c.jsx)(n.code,{children:`(?=.*?từ)`}),`. Rất phù hợp để xây dựng tính năng tìm kiếm trực tiếp hoặc lọc theo nhiều từ.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: string`}),` — Chuỗi tìm kiếm gồm một hoặc nhiều từ phân cách bởi khoảng trắng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — Biểu thức chính quy với cờ `,(0,c.jsx)(n.code,{children:`ig`}),` (toàn cục, không phân biệt chữ hoa/thường).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getSearchExp } from '@dxtmisha/functional-basic'

const regex = getSearchExp('foo bar')

regex.test('foo bar baz')  // true  — chứa cả hai từ
regex.test('bar foo')      // true  — thứ tự không quan trọng
regex.test('foo only')     // false — thiếu từ bar

// Các ký tự đặc biệt được escape tự động
const regex2 = getSearchExp('price $10.00')
regex2.test('price $10.00') // true
regex2.test('price X10Y00') // false
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};