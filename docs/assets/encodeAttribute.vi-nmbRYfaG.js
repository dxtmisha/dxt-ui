import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/encodeAttribute - Mã hóa ký tự cho thuộc tính`}),`
`,(0,c.jsx)(n.h1,{id:`encodeattribute`,children:(0,c.jsx)(n.code,{children:`encodeAttribute`})}),`
`,(0,c.jsxs)(n.p,{children:[`Mã hóa các ký tự đặc biệt trong chuỗi (`,(0,c.jsx)(n.code,{children:`&`}),`, `,(0,c.jsx)(n.code,{children:`<`}),`, `,(0,c.jsx)(n.code,{children:`>`}),`, `,(0,c.jsx)(n.code,{children:`"`}),`, `,(0,c.jsx)(n.code,{children:`'`}),`) thành các thực thể HTML tương ứng (`,(0,c.jsx)(n.code,{children:`&amp;`}),`, `,(0,c.jsx)(n.code,{children:`&lt;`}),`, `,(0,c.jsx)(n.code,{children:`&gt;`}),`, `,(0,c.jsx)(n.code,{children:`&quot;`}),`, `,(0,c.jsx)(n.code,{children:`&#39;`}),`). Điều này là cần thiết để chèn văn bản người dùng hoặc văn bản động vào thuộc tính HTML một cách an toàn nhằm phòng chống tấn công XSS.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: string`}),` — Chuỗi cần được mã hóa.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Chuỗi đã được mã hóa.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { encodeAttribute } from '@dxtmisha/functional-basic'

const unsafeInput = ' <script>alert("XSS")<\/script> '
const safeAttr = encodeAttribute(unsafeInput)

console.log(safeAttr)
// '&lt;script&gt;alert(&quot;XSS&quot;)&lt;/script&gt;'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};