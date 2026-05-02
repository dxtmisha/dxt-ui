import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/strSplit - Chia chuỗi hỗ trợ giới hạn (phong cách PHP)`}),`
`,(0,c.jsx)(n.h1,{id:`strsplit`,children:(0,c.jsx)(n.code,{children:`strSplit`})}),`
`,(0,c.jsxs)(n.p,{children:[`Chia một chuỗi thành một mảng các chuỗi con bằng cách sử dụng dấu phân cách được chỉ định. Khác với `,(0,c.jsx)(n.code,{children:`String.prototype.split`}),` tiêu chuẩn, khi chỉ định giới hạn (limit), phần còn lại của chuỗi sẽ được giữ lại trong phần tử cuối cùng của mảng (tương tự như hàm `,(0,c.jsx)(n.code,{children:`explode`}),` trong PHP).`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: number | string`}),` — Giá trị gốc.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`separator: string`}),` — Dấu phân cách.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`limit?: number`}),` — Số lượng phần tử tối đa. Nếu có nhiều phần tử hơn giới hạn, phần tử cuối cùng sẽ chứa toàn bộ phần còn lại của chuỗi.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string[]`}),` — Một mảng các chuỗi con.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { strSplit } from '@dxtmisha/functional-basic'

// Không có giới hạn
strSplit('a.b.c.d', '.') // ['a', 'b', 'c', 'd']

// Với giới hạn 2
strSplit('a.b.c.d', '.', 2) // ['a', 'b.c.d']

// Với giá trị là số
strSplit(123.456, '.') // ['123', '456']
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};