import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-CMQ2J9Vz.js";import{t as n}from"./jsx-runtime-4HHWW5MW.js";import{d as r,s as i}from"./blocks-iqnfDd2R.js";import{t as a}from"./mdx-react-shim-DxOIa4NS.js";function o(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/scripts/Functions/hasNativeDirname - Kiểm tra tính khả dụng của __dirname`}),`
`,(0,c.jsx)(n.h1,{id:`hasnativedirname`,children:(0,c.jsx)(n.code,{children:`hasNativeDirname`})}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm kiểm tra xem biến toàn cục `,(0,c.jsx)(n.code,{children:`__dirname`}),` có sẵn trong môi trường hiện tại hay không.`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`boolean`}),` — `,(0,c.jsx)(n.code,{children:`true`}),` nếu `,(0,c.jsx)(n.code,{children:`__dirname`}),` được xác định, ngược lại là `,(0,c.jsx)(n.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(n.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(n.p,{children:[`Hàm sử dụng `,(0,c.jsx)(n.code,{children:`typeof __dirname !== 'undefined'`}),` để xác định xem môi trường có hỗ trợ việc xác định tên thư mục gốc hay không (thường là môi trường CommonJS).`]}),`
`,(0,c.jsx)(n.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { hasNativeDirname } from '@dxtmisha/scripts'

if (hasNativeDirname()) {
  console.log('Môi trường hỗ trợ __dirname gốc')
}
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};