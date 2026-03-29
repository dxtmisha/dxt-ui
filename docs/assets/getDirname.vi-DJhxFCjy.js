import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-CoCJbYxC.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Functions/getDirname - Lấy tên thư mục hiện tại`}),`
`,(0,c.jsx)(n.h1,{id:`getdirname`,children:(0,c.jsx)(n.code,{children:`getDirname`})}),`
`,(0,c.jsx)(n.p,{children:`Hàm trả về tên của thư mục hiện tại, xử lý cả môi trường CommonJS và ESM.`}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — tên thư mục hiện tại.`]}),`
`,(0,c.jsx)(n.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm kiểm tra xem môi trường có hỗ trợ `,(0,c.jsx)(n.code,{children:`__dirname`}),` gốc hay không (sử dụng `,(0,c.jsx)(n.code,{children:`hasNativeDirname`}),`). Nếu có, nó sẽ trả về `,(0,c.jsx)(n.code,{children:`__dirname`}),`. Nếu không, nó sẽ lấy tên thư mục từ `,(0,c.jsx)(n.code,{children:`import.meta.url`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getDirname } from '@dxtmisha/scripts'

const dirname = getDirname()
console.log(dirname)
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};