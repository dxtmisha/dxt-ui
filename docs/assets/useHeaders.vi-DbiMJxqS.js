import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/nitro-basic/Composables/useHeaders - Lấy Header`}),`
`,(0,c.jsx)(t.h1,{id:`useheaders`,children:(0,c.jsx)(t.code,{children:`useHeaders`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một hàm composable cung cấp quyền truy cập vào các header API của yêu cầu hiện tại. Nó có thể trả về toàn bộ đối tượng `,(0,c.jsx)(t.code,{children:`Headers`}),` hoặc giá trị của một header cụ thể theo tên của nó.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`name?: string`}),` — Tên header (tùy chọn).`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`Headers | undefined`}),` — Nếu không cung cấp tên, trả về toàn bộ đối tượng headers.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`string | undefined`}),` — Nếu cung cấp tên, trả về giá trị của header đó.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Ví dụ sử dụng:`})}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { useHeaders } from '@dxtmisha/nitro-basic'

// Lấy một header cụ thể
const contentType = useHeaders('Content-Type')

// Lấy tất cả các header
const headers = useHeaders()
if (headers) {
  console.log(headers.get('Authorization'))
}
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};