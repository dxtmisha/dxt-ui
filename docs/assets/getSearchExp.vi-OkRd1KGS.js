import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getSearchExp - Tạo RegExp khớp tất cả các từ tìm kiếm`}),`
`,(0,c.jsx)(t.h1,{id:`getsearchexp`,children:(0,c.jsx)(t.code,{children:`getSearchExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tiện ích tạo một `,(0,c.jsx)(t.code,{children:`RegExp`}),` không phân biệt chữ hoa/thường, khớp với chuỗi chứa `,(0,c.jsx)(t.strong,{children:`tất cả`}),` các từ trong chuỗi tìm kiếm (theo bất kỳ thứ tự nào).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Mỗi từ được tách bởi khoảng trắng, escape và bọc trong positive lookahead `,(0,c.jsx)(t.code,{children:`(?=.*?từ)`}),`. Rất phù hợp để xây dựng tính năng tìm kiếm trực tiếp hoặc lọc theo nhiều từ.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`search: string`}),` — Chuỗi tìm kiếm gồm một hoặc nhiều từ phân cách bởi khoảng trắng.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`limit: number`}),` (tùy chọn, mặc định: `,(0,c.jsx)(t.code,{children:`128`}),`) — Độ dài tối đa cho phép của chuỗi tìm kiếm.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`RegExp`}),` — Biểu thức chính quy với cờ `,(0,c.jsx)(t.code,{children:`i`}),` (không phân biệt chữ hoa/thường).`]}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Nếu chuỗi `,(0,c.jsx)(t.code,{children:`search`}),` trống, không phải là chuỗi hoặc vượt quá `,(0,c.jsx)(t.code,{children:`limit`}),`, nó trả về `,(0,c.jsx)(t.code,{children:`/^/`}),` (khớp với vị trí bắt đầu của bất kỳ chuỗi nào).`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getSearchExp } from '@dxtmisha/functional-basic'

// Cách dùng cơ bản
const regex = getSearchExp('foo bar')

regex.test('foo bar baz')  // true  — chứa cả hai từ
regex.test('bar foo')      // true  — thứ tự không quan trọng
regex.test('foo only')     // false — thiếu từ "bar"

// Các ký tự đặc biệt được escape tự động
const regex2 = getSearchExp('giá $10.00')
regex2.test('giá $10.00') // true
regex2.test('giá X10Y00') // false

// Sử dụng giới hạn tùy chỉnh
const regex3 = getSearchExp('một chuỗi tìm kiếm rất dài', 10)
regex3.test('bất kỳ chuỗi nào') // true — trả về /^/ vì độ dài tìm kiếm > 10
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};