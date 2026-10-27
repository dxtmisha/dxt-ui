import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isRegExp - Kiểm tra dữ liệu biểu thức chính quy`}),`
`,(0,c.jsx)(t.h1,{id:`isregexp`,children:(0,c.jsx)(t.code,{children:`isRegExp`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem giá trị được cung cấp có phải là đối tượng biểu thức chính quy (`,(0,c.jsx)(t.code,{children:`RegExp`}),`) hay không, bao gồm cả các thể hiện đa ngữ cảnh (cross-realm từ `,(0,c.jsx)(t.code,{children:`iframe`}),`, Web Workers hoặc ngữ cảnh `,(0,c.jsx)(t.code,{children:`node:vm`}),` riêng biệt).`]}),`
`,(0,c.jsxs)(t.p,{children:[`Hàm kết hợp phép kiểm tra `,(0,c.jsx)(t.code,{children:`value instanceof RegExp`}),` cùng với thẻ nguyên mẫu `,(0,c.jsx)(t.code,{children:`Object.prototype.toString.call(value) === '[object RegExp]'`}),`. Điều này đảm bảo nhận diện chính xác trong các môi trường biệt lập (chẳng hạn như giao diện plugin Figma hoặc micro-frontends), nơi toán tử `,(0,c.jsx)(t.code,{children:`instanceof`}),` trả về `,(0,c.jsx)(t.code,{children:`false`}),` do nguyên mẫu toàn cục khác nhau.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: unknown`}),` — Giá trị đầu vào thuộc bất kỳ kiểu dữ liệu nào cần kiểm tra.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`value is RegExp`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu `,(0,c.jsx)(t.code,{children:`value`}),` là một biểu thức chính quy, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`. Đóng vai trò là bộ bảo vệ kiểu (type guard) trong TypeScript, thu hẹp kiểu biến thành `,(0,c.jsx)(t.code,{children:`RegExp`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isRegExp } from '@dxtmisha/functional-basic'

// Các thể hiện biểu thức chính quy
console.log(isRegExp(/^[a-z]+$/i)) // true
console.log(isRegExp(new RegExp('test'))) // true

// Các thể hiện từ ngữ cảnh khác (ví dụ từ iframe)
console.log(isRegExp(iframeWindow.RegExp('foo'))) // true

// Các kiểu không phải RegExp
console.log(isRegExp('/^[a-z]+$/')) // false (chuỗi ký tự, không phải RegExp)
console.log(isRegExp({ source: 'test', flags: 'i' })) // false
console.log(isRegExp(null)) // false
console.log(isRegExp(undefined)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};