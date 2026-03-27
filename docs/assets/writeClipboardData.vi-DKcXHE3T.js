import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/writeClipboardData - Ghi văn bản vào bộ nhớ tạm (clipboard)`}),`
`,(0,c.jsx)(n.h1,{id:`writeclipboarddata`,children:(0,c.jsx)(n.code,{children:`writeClipboardData`})}),`
`,(0,c.jsxs)(n.p,{children:[`Ghi một chuỗi văn bản vào bộ nhớ tạm của người dùng. Hàm sử dụng `,(0,c.jsx)(n.code,{children:`navigator.clipboard API`}),` hiện đại và sẽ chuyển sang sử dụng `,(0,c.jsx)(n.code,{children:`document.execCommand`}),` nếu API trên không khả dụng.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — Văn bản cần ghi.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Promise<void>`}),` — Một promise sẽ hoàn thành sau khi ghi thành công.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { writeClipboardData } from '@dxtmisha/functional-basic'

await writeClipboardData('Văn bản đã sao chép')
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};