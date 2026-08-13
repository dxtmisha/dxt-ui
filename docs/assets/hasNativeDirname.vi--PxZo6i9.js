import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-WIGGT2yz.js";function o(e){let t={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/scripts/Functions/hasNativeDirname - Kiểm tra tính khả dụng của __dirname`}),`
`,(0,c.jsx)(t.h1,{id:`hasnativedirname`,children:(0,c.jsx)(t.code,{children:`hasNativeDirname`})}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm kiểm tra xem biến toàn cục `,(0,c.jsx)(t.code,{children:`__dirname`}),` có sẵn trong môi trường hiện tại hay không.`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu `,(0,c.jsx)(t.code,{children:`__dirname`}),` được xác định, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`cơ-chế-hoạt-động`,children:`Cơ chế hoạt động`}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm sử dụng `,(0,c.jsx)(t.code,{children:`typeof __dirname !== 'undefined'`}),` để xác định xem môi trường có hỗ trợ việc xác định tên thư mục gốc hay không (thường là môi trường CommonJS).`]}),`
`,(0,c.jsx)(t.h2,{id:`ví-dụ`,children:`Ví dụ`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { hasNativeDirname } from '@dxtmisha/scripts'

if (hasNativeDirname()) {
  console.log('Môi trường hỗ trợ __dirname gốc')
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};