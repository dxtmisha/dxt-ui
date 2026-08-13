import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Functions/toPathStandardSep - Chuyển đổi dấu phân cách đường dẫn`}),`
`,(0,c.jsx)(t.h1,{id:`topathstandardsep`,children:(0,c.jsx)(t.code,{children:`toPathStandardSep`})}),`
`,(0,c.jsx)(t.p,{children:`Hàm chuyển đổi các dấu gạch chéo xuôi trong một chuỗi đường dẫn thành dấu phân cách đường dẫn tiêu chuẩn của hệ điều hành hiện tại.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`path: string`}),` — chuỗi đường dẫn đầu vào.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — đường dẫn với các dấu phân cách tiêu chuẩn.`]}),`
`,(0,c.jsx)(t.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm sử dụng biểu thức chính quy để tìm tất cả các dấu gạch chéo xuôi (`,(0,c.jsx)(t.code,{children:`/`}),`) trong chuỗi đầu vào và thay thế chúng bằng dấu phân cách dành riêng cho nền tảng (`,(0,c.jsx)(t.code,{children:`path.sep`}),`).`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { toPathStandardSep } from '@dxtmisha/scripts'

// Trên Windows:
toPathStandardSep('src/components/button') // 'src\\\\components\\\\button'

// Trên Unix:
toPathStandardSep('src/components/button') // 'src/components/button'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};