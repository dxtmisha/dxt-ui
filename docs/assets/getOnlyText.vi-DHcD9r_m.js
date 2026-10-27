import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getOnlyText - Trích xuất các chữ cái, số và dấu cách từ một chuỗi`}),`
`,(0,c.jsx)(t.h1,{id:`getonlytext`,children:(0,c.jsx)(t.code,{children:`getOnlyText`})}),`
`,(0,c.jsx)(t.p,{children:`Một tiện ích giúp trích xuất chỉ các chữ cái (Unicode), dấu phụ, con số và dấu cách từ bất kỳ dữ liệu đầu vào nào, loại bỏ các dấu câu, ký tự đặc biệt cùng khoảng trắng ở hai đầu chuỗi.`}),`
`,(0,c.jsx)(t.p,{children:`Điều này rất hữu ích để làm sạch dữ liệu nhập từ người dùng hoặc chuẩn bị văn bản để xử lý đơn giản hơn khi chỉ cần nội dung chữ và số.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`text: unknown`}),` — Giá trị cần xử lý.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`string`}),` — Một chuỗi đã cắt khoảng trắng hai đầu và chỉ chứa các ký tự là chữ cái, dấu phụ, số hoặc dấu cách.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getOnlyText } from '@dxtmisha/functional-basic'

console.log(getOnlyText('Hello, World!')) // 'Hello World'
console.log(getOnlyText('Giá: 100.000đ')) // 'Giá 100000đ'
console.log(getOnlyText('Văn bản với ký tự: #@!%')) // 'Văn bản với ký tự'
console.log(getOnlyText(12345)) // '12345'
console.log(getOnlyText(null)) // ''
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};