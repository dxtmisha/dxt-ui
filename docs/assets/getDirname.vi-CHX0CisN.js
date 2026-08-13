import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Functions/getDirname - Lấy tên thư mục hiện tại`}),`
`,(0,c.jsx)(t.h1,{id:`getdirname`,children:(0,c.jsx)(t.code,{children:`getDirname`})}),`
`,(0,c.jsx)(t.p,{children:`Hàm trả về tên của thư mục hiện tại, xử lý cả môi trường CommonJS và ESM.`}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — tên thư mục hiện tại.`]}),`
`,(0,c.jsx)(t.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm kiểm tra xem môi trường có hỗ trợ `,(0,c.jsx)(t.code,{children:`__dirname`}),` gốc hay không (sử dụng `,(0,c.jsx)(t.code,{children:`hasNativeDirname`}),`). Nếu có, nó sẽ trả về `,(0,c.jsx)(t.code,{children:`__dirname`}),`. Nếu không, nó sẽ lấy tên thư mục từ `,(0,c.jsx)(t.code,{children:`import.meta.url`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getDirname } from '@dxtmisha/scripts'

const dirname = getDirname()
console.log(dirname)
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};