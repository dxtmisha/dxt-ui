import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getExactSearchExp - Tạo RegExp để khớp chính xác`}),`
`,(0,c.jsx)(t.h1,{id:`getexactsearchexp`,children:(0,c.jsx)(t.code,{children:`getExactSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tiện ích tạo một `,(0,c.jsx)(t.code,{children:`RegExp`}),` không phân biệt chữ hoa/thường để khớp chính xác cụm từ đã cho (không có ký tự neo `,(0,c.jsx)(t.code,{children:`^`}),` và `,(0,c.jsx)(t.code,{children:`$`}),`).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Khác với `,(0,c.jsx)(t.code,{children:`getSearchExp`}),`, hàm này khớp với toàn bộ cụm từ dưới dạng một chuỗi con liền mạch (với các ký tự đặc biệt được escape) mà không tách nó thành các từ riêng biệt.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string`}),` — Chuỗi tìm kiếm để khớp chính xác cụm từ.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — Biểu thức chính quy với cờ `,(0,c.jsx)(t.code,{children:`i`}),` (không phân biệt chữ hoa/thường) và mẫu `,(0,c.jsx)(t.code,{children:`(:value)`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getExactSearchExp } from '@dxtmisha/functional-basic'

const regex = getExactSearchExp('hello world')

regex.test('say hello world!')      // true — chứa chính xác cụm từ
regex.test('HELLO WORLD')           // true — không phân biệt chữ hoa/thường
regex.test('hello beautiful world') // false — các từ bị tách rời
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};