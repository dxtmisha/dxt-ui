import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{f as r,s as i}from"./blocks-BDI5G1Gi.js";import{t as a}from"./mdx-react-shim-n552quEh.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getOnlyText - Trích xuất các chữ cái, số và dấu cách từ một chuỗi`}),`
`,(0,c.jsx)(n.h1,{id:`getonlytext`,children:(0,c.jsx)(n.code,{children:`getOnlyText`})}),`
`,(0,c.jsx)(n.p,{children:`Một tiện ích giúp trích xuất chỉ các chữ cái, con số và dấu cách từ bất kỳ dữ liệu đầu vào nào, loại bỏ các dấu câu, ký tự đặc biệt và các ký hiệu khác.`}),`
`,(0,c.jsx)(n.p,{children:`Điều này rất hữu ích để làm sạch dữ liệu nhập từ người dùng hoặc chuẩn bị văn bản để xử lý đơn giản hơn khi chỉ cần nội dung chữ và số.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`text: any`}),` — Giá trị cần xử lý.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`string`}),` — Một chuỗi chỉ chứa các ký tự là chữ cái, số hoặc dấu cách.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getOnlyText } from '@dxtmisha/functional-basic'

console.log(getOnlyText('Hello, World!')) // 'Hello World'
console.log(getOnlyText('Giá: 100.000đ')) // 'Giá 100000'
console.log(getOnlyText('Văn bản với ký tự: #@!%')) // 'Văn bản với ký tự'
console.log(getOnlyText(12345)) // '12345'
console.log(getOnlyText(null)) // ''
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};