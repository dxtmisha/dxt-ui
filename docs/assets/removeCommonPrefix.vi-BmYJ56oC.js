import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/removeCommonPrefix - Xóa tiền tố chung`}),`
`,(0,c.jsx)(t.h1,{id:`removecommonprefix`,children:(0,c.jsx)(t.code,{children:`removeCommonPrefix`})}),`
`,(0,c.jsxs)(t.p,{children:[`Xóa tiền tố chung khỏi phần đầu của chuỗi chính. Nếu `,(0,c.jsx)(t.code,{children:`mainString`}),` bắt đầu bằng toàn bộ `,(0,c.jsx)(t.code,{children:`prefix`}),` hoặc có chuỗi ký tự đầu trùng khớp một phần với `,(0,c.jsx)(t.code,{children:`prefix`}),`, các ký tự trùng khớp ở đầu sẽ bị loại bỏ và kết quả được tùy chọn cắt bỏ khoảng trắng ở hai đầu.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`mainString: string`}),` — Chuỗi chính.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`prefix: string`}),` — Chuỗi tiền tố cần xóa.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`trim?: boolean = true`}),` — Nếu `,(0,c.jsx)(t.code,{children:`true`}),`, loại bỏ khoảng trắng ở đầu và cuối chuỗi kết quả (mặc định là `,(0,c.jsx)(t.code,{children:`true`}),`).`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Một chuỗi mới không có tiền tố chung.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { removeCommonPrefix } from '@dxtmisha/functional-basic'

console.log(removeCommonPrefix('Xin chào, thế giới!', 'Xin chào, ')) // 'thế giới!'
console.log(removeCommonPrefix('user_name', 'user_')) // 'name'
console.log(removeCommonPrefix('prefix   suffix   ', 'prefix', false)) // '   suffix   '
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};