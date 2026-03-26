import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/scripts/Functions/toPathStandardSep - Chuyển đổi dấu phân cách đường dẫn`}),`
`,(0,c.jsx)(n.h1,{id:`topathstandardsep`,children:(0,c.jsx)(n.code,{children:`toPathStandardSep`})}),`
`,(0,c.jsx)(n.p,{children:`Hàm chuyển đổi các dấu gạch chéo xuôi trong một chuỗi đường dẫn thành dấu phân cách đường dẫn tiêu chuẩn của hệ điều hành hiện tại.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`path: string`}),` — chuỗi đường dẫn đầu vào.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — đường dẫn với các dấu phân cách tiêu chuẩn.`]}),`
`,(0,c.jsx)(n.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm sử dụng biểu thức chính quy để tìm tất cả các dấu gạch chéo xuôi (`,(0,c.jsx)(n.code,{children:`/`}),`) trong chuỗi đầu vào và thay thế chúng bằng dấu phân cách dành riêng cho nền tảng (`,(0,c.jsx)(n.code,{children:`path.sep`}),`).`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { toPathStandardSep } from '@dxtmisha/scripts'

// Trên Windows:
toPathStandardSep('src/components/button') // 'src\\\\components\\\\button'

// Trên Unix:
toPathStandardSep('src/components/button') // 'src/components/button'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};