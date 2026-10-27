import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isString - Kiểm tra dữ liệu chuỗi ký tự`}),`
`,(0,c.jsx)(t.h1,{id:`isstring`,children:(0,c.jsx)(t.code,{children:`isString`})}),`
`,(0,c.jsxs)(t.p,{children:[`Kiểm tra xem giá trị được cung cấp có thuộc kiểu chuỗi (`,(0,c.jsx)(t.code,{children:`string`}),`) hay không.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Sử dụng phép kiểm tra tiêu chuẩn `,(0,c.jsx)(t.code,{children:`typeof value === 'string'`}),` để xác nhận giá trị là kiểu chuỗi nguyên thủy, loại trừ các kiểu số, boolean, đối tượng, mảng, `,(0,c.jsx)(t.code,{children:`null`}),` và `,(0,c.jsx)(t.code,{children:`undefined`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Giá trị đầu vào cần kiểm tra.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`value is Extract<T, string>`}),` (`,(0,c.jsx)(t.code,{children:`boolean`}),`) — Trả về `,(0,c.jsx)(t.code,{children:`true`}),` nếu `,(0,c.jsx)(t.code,{children:`value`}),` là một chuỗi, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`. Đóng vai trò là bộ bảo vệ kiểu (type guard) trong TypeScript, thu hẹp `,(0,c.jsx)(t.code,{children:`T`}),` thành `,(0,c.jsx)(t.code,{children:`Extract<T, string>`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isString } from '@dxtmisha/functional-basic'

console.log(isString('Chào thế giới!')) // true
console.log(isString('')) // true (chuỗi rỗng vẫn là chuỗi hợp lệ)

// Các kiểu dữ liệu không phải chuỗi
console.log(isString(123)) // false
console.log(isString(null)) // false
console.log(isString({})) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};