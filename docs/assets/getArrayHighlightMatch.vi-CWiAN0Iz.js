import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,f as a,s as o}from"./blocks-C5PYTnT8.js";function s(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`@dxtmisha/vi/functional-basic/Functions/getArrayHighlightMatch - Làm nổi bật kết quả khớp dạng cấu trúc`}),`
`,(0,l.jsx)(t.h1,{id:`getarrayhighlightmatch`,children:(0,l.jsx)(t.code,{children:`getArrayHighlightMatch`})}),`
`,(0,l.jsxs)(t.p,{children:[`Tiện ích để chia một chuỗi thành một mảng các đối tượng để làm nổi bật các kết quả khớp. Mỗi đối tượng chứa `,(0,l.jsx)(t.code,{children:`text`}),` và giá trị boolean `,(0,l.jsx)(t.code,{children:`isMatch`}),` cho biết đoạn văn bản đó có khớp với truy vấn tìm kiếm hay không. Điều này rất hữu ích cho các UI framework như Vue hoặc React để hiển thị văn bản được làm nổi bật mà không cần dùng `,(0,l.jsx)(t.code,{children:`v-html`}),`.`]}),`
`,(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,l.jsxs)(t.ul,{children:[`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`value: string`}),` — Chuỗi ban đầu để xử lý.`]}),`
`,(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.code,{children:`search?: string`}),` — Chuỗi tìm kiếm (hỗ trợ tìm kiếm nhiều từ phân tách bằng dấu cách).`]}),`
`]}),`
`,(0,l.jsxs)(t.p,{children:[(0,l.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,l.jsx)(t.code,{children:`{ text: string, isMatch: boolean }[]`}),` — Một mảng các đoạn văn bản với trạng thái khớp.`]}),`
`,(0,l.jsx)(i,{language:`typescript`,code:`
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
`})]})}function c(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}var l;function u(){return(u=e((()=>{l=r(),t(),a()})))()}u();export{c as default};