import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-D7dWA4DD.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/removeCommonPrefix - Xóa tiền tố chung`}),`
`,(0,c.jsx)(n.h1,{id:`removecommonprefix`,children:(0,c.jsx)(n.code,{children:`removeCommonPrefix`})}),`
`,(0,c.jsx)(n.p,{children:`Xóa tiền tố chung khỏi phần đầu của chuỗi chính. Nếu chuỗi chính bắt đầu bằng tiền tố được chỉ định, hàm sẽ cắt bỏ nó và trả về chuỗi đã được loại bỏ khoảng trắng dư thừa ở hai đầu.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`mainStr: string`}),` — Chuỗi chính.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`prefix: string`}),` — Chuỗi tiền tố cần xóa.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Một chuỗi mới không có tiền tố và đã được loại bỏ khoảng trắng thừa.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { removeCommonPrefix } from '@dxtmisha/functional-basic'

console.log(removeCommonPrefix('Xin chào, thế giới!', 'Xin chào, ')) // 'thế giới!'
console.log(removeCommonPrefix('user_name', 'user_')) // 'name'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};