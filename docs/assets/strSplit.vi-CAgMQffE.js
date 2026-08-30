import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/strSplit - Chia chuỗi hỗ trợ giới hạn (phong cách PHP)`}),`
`,(0,c.jsx)(t.h1,{id:`strsplit`,children:(0,c.jsx)(t.code,{children:`strSplit`})}),`
`,(0,c.jsxs)(t.p,{children:[`Chia một chuỗi thành một mảng các chuỗi con bằng cách sử dụng dấu phân cách được chỉ định. Khác với `,(0,c.jsx)(t.code,{children:`String.prototype.split`}),` tiêu chuẩn, khi chỉ định giới hạn (limit), phần còn lại của chuỗi sẽ được giữ lại trong phần tử cuối cùng của mảng (tương tự như hàm `,(0,c.jsx)(t.code,{children:`explode`}),` trong PHP).`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: number | string`}),` — Giá trị gốc.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`separator: string`}),` — Dấu phân cách.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit?: number`}),` — Số lượng phần tử tối đa. Nếu có nhiều phần tử hơn giới hạn, phần tử cuối cùng sẽ chứa toàn bộ phần còn lại của chuỗi.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string[]`}),` — Một mảng các chuỗi con.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { strSplit } from '@dxtmisha/functional-basic'

// Không có giới hạn
strSplit('a.b.c.d', '.') // ['a', 'b', 'c', 'd']

// Với giới hạn 2
strSplit('a.b.c.d', '.', 2) // ['a', 'b.c.d']

// Với giá trị là số
strSplit(123.456, '.') // ['123', '456']
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};