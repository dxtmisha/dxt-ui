import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/removeCommonPrefix - Xóa tiền tố chung`}),`
`,(0,c.jsx)(t.h1,{id:`removecommonprefix`,children:(0,c.jsx)(t.code,{children:`removeCommonPrefix`})}),`
`,(0,c.jsx)(t.p,{children:`Xóa tiền tố chung khỏi phần đầu của chuỗi chính. Nếu chuỗi chính bắt đầu bằng tiền tố được chỉ định, hàm sẽ cắt bỏ nó và trả về chuỗi đã được loại bỏ khoảng trắng dư thừa ở hai đầu.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mainStr: string`}),` — Chuỗi chính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prefix: string`}),` — Chuỗi tiền tố cần xóa.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Một chuỗi mới không có tiền tố và đã được loại bỏ khoảng trắng thừa.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { removeCommonPrefix } from '@dxtmisha/functional-basic'

console.log(removeCommonPrefix('Xin chào, thế giới!', 'Xin chào, ')) // 'thế giới!'
console.log(removeCommonPrefix('user_name', 'user_')) // 'name'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};