import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/encodeAttribute - Mã hóa ký tự cho thuộc tính`}),`
`,(0,c.jsx)(t.h1,{id:`encodeattribute`,children:(0,c.jsx)(t.code,{children:`encodeAttribute`})}),`
`,(0,c.jsxs)(t.p,{children:[`Mã hóa các ký tự đặc biệt trong chuỗi (`,(0,c.jsx)(t.code,{children:`&`}),`, `,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`, `,(0,c.jsx)(t.code,{children:`"`}),`, `,(0,c.jsx)(t.code,{children:`'`}),`) thành các thực thể HTML tương ứng (`,(0,c.jsx)(t.code,{children:`&amp;`}),`, `,(0,c.jsx)(t.code,{children:`&lt;`}),`, `,(0,c.jsx)(t.code,{children:`&gt;`}),`, `,(0,c.jsx)(t.code,{children:`&quot;`}),`, `,(0,c.jsx)(t.code,{children:`&#39;`}),`). Điều này là cần thiết để chèn văn bản người dùng hoặc văn bản động vào thuộc tính HTML một cách an toàn nhằm phòng chống tấn công XSS.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: string`}),` — Chuỗi cần được mã hóa.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Chuỗi đã được mã hóa.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { encodeAttribute } from '@dxtmisha/functional-basic'

const unsafeInput = ' <script>alert("XSS")<\/script> '
const safeAttr = encodeAttribute(unsafeInput)

console.log(safeAttr)
// '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};