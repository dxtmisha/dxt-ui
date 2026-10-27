import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={blockquote:`blockquote`,code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/encodeLiteAttribute - Mã hóa các ký tự HTML cơ bản`}),`
`,(0,c.jsx)(t.h1,{id:`encodeliteattribute`,children:(0,c.jsx)(t.code,{children:`encodeLiteAttribute`})}),`
`,(0,c.jsxs)(t.p,{children:[`Mã hóa các ký tự đặc biệt cơ bản của HTML trong chuỗi (`,(0,c.jsx)(t.code,{children:`<`}),`, `,(0,c.jsx)(t.code,{children:`>`}),`, `,(0,c.jsx)(t.code,{children:`&`}),`) thành các thực thể HTML tương ứng (`,(0,c.jsx)(t.code,{children:`&lt;`}),`, `,(0,c.jsx)(t.code,{children:`&gt;`}),`, `,(0,c.jsx)(t.code,{children:`&amp;`}),`), đồng thời giữ nguyên dấu ngoặc kép và ngoặc đơn (`,(0,c.jsx)(t.code,{children:`"`}),` và `,(0,c.jsx)(t.code,{children:`'`}),`). Thường được sử dụng cho thẻ tiêu đề HTML và định dạng văn bản nhẹ.`]}),`
`,(0,c.jsxs)(t.blockquote,{children:[`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Lưu ý:`}),` Hàm này chủ đích KHÔNG mã hóa dấu ngoặc kép và ngoặc đơn (`,(0,c.jsx)(t.code,{children:`"`}),` và `,(0,c.jsx)(t.code,{children:`'`}),`). Để mã hóa dữ liệu đầu vào của người dùng bên trong các thuộc tính HTML, hãy sử dụng `,(0,c.jsx)(t.code,{children:`encodeAttribute`}),` để ngăn chặn lỗ hổng chèn thuộc tính.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: string`}),` — Chuỗi cần được mã hóa.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Chuỗi đã được mã hóa.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { encodeLiteAttribute } from '@dxtmisha/functional-basic'

const input = 'Title "Hello & <World>"'
const encoded = encodeLiteAttribute(input)

console.log(encoded)
// 'Title "Hello &amp; &lt;World&gt;"'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};