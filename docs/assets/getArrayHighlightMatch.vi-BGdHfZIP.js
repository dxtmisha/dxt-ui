import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-Ornc7p8c.js";import{t as n}from"./jsx-runtime-DNNexOQt.js";import{c as r,f as i,s as a}from"./blocks-DeABI6Wb.js";import{t as o}from"./mdx-react-shim-n552quEh.js";function s(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getArrayHighlightMatch - Làm nổi bật kết quả khớp dạng cấu trúc`}),`
`,(0,l.jsx)(n.h1,{id:`getarrayhighlightmatch`,children:(0,l.jsx)(n.code,{children:`getArrayHighlightMatch`})}),`
`,(0,l.jsxs)(n.p,{children:[`Tiện ích để chia một chuỗi thành một mảng các đối tượng để làm nổi bật các kết quả khớp. Mỗi đối tượng chứa `,(0,l.jsx)(n.code,{children:`text`}),` và giá trị boolean `,(0,l.jsx)(n.code,{children:`isMatch`}),` cho biết đoạn văn bản đó có khớp với truy vấn tìm kiếm hay không. Điều này rất hữu ích cho các UI framework như Vue hoặc React để hiển thị văn bản được làm nổi bật mà không cần dùng `,(0,l.jsx)(n.code,{children:`v-html`}),`.`]}),`
`,(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(n.ul,{children:[`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`value: string`}),` — Chuỗi ban đầu để xử lý.`]}),`
`,(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:`search?: string`}),` — Chuỗi tìm kiếm (hỗ trợ tìm kiếm nhiều từ phân tách bằng dấu cách).`]}),`
`]}),`
`,(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(n.code,{children:`{ text: string, isMatch: boolean }[]`}),` — Một mảng các đoạn văn bản với trạng thái khớp.`]}),`
`,(0,l.jsx)(r,{language:`typescript`,code:`
import { getArrayHighlightMatch } from '@dxtmisha/functional-basic'

const result = getArrayHighlightMatch('Xin chào thế giới', 'chào')
/*
[
{ text: 'Xin ', isMatch: false },
{ text: 'chào', isMatch: true },
{ text: ' thế giới', isMatch: false }
]
*/

// Ví dụ trong Vue template:
// <template v-for="item in getArrayHighlightMatch(text, search)">
//   <span :class="{ 'sys-highlight-match': item.isMatch }">{{ item.text }}</span>
// </template>
`})]})}function c(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;e((()=>{l=n(),o(),i()}))();export{c as default};