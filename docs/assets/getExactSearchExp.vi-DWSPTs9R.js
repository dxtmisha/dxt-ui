import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getExactSearchExp - Tạo RegExp để khớp chính xác`}),`
`,(0,c.jsx)(n.h1,{id:`getexactsearchexp`,children:(0,c.jsx)(n.code,{children:`getExactSearchExp`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tiện ích tạo một `,(0,c.jsx)(n.code,{children:`RegExp`}),` không phân biệt chữ hoa/thường để khớp chính xác với chuỗi đã cho.`]}),`
`,(0,c.jsxs)(n.p,{children:[`Khác với `,(0,c.jsx)(n.code,{children:`getSearchExp`}),`, hàm này khớp với toàn bộ chuỗi (với các ký tự đặc biệt được escape) mà không tách nó thành các từ riêng biệt.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`search: string`}),` — Chuỗi tìm kiếm để khớp chính xác.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`RegExp`}),` — Biểu thức chính quy với cờ `,(0,c.jsx)(n.code,{children:`i`}),` (không phân biệt chữ hoa/thường).`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getExactSearchExp } from '@dxtmisha/functional-basic'

const regex = getExactSearchExp('hello')

regex.test('hello')       // true
regex.test('HELLO')       // true
regex.test('hello world') // false — không phải khớp chính xác
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};