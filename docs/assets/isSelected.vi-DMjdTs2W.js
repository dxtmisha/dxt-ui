import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isSelected - Kiểm tra dữ liệu được lựa chọn`}),`
`,(0,c.jsx)(t.h1,{id:`isselected`,children:(0,c.jsx)(t.code,{children:`isSelected`})}),`
`,(0,c.jsx)(t.p,{children:`Kiểm tra xem một giá trị có được chọn hay không bằng cách so sánh nó với một giá trị đích đơn lẻ hoặc một mảng các phần tử đã chọn. Hỗ trợ so sánh số thông minh cho cả số và chuỗi số:`}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`Bảo vệ Null / Undefined:`}),` Nếu `,(0,c.jsx)(t.code,{children:`value`}),` là `,(0,c.jsx)(t.code,{children:`null`}),` hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` (kiểm tra qua `,(0,c.jsx)(t.code,{children:`isNull(value)`}),`), hàm trả về `,(0,c.jsx)(t.code,{children:`false`}),` ngay lập tức.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`So sánh với mảng:`}),` Nếu `,(0,c.jsx)(t.code,{children:`selected`}),` là một mảng `,(0,c.jsx)(t.code,{children:`[]`}),`, hàm kiểm tra sự tồn tại trực tiếp qua `,(0,c.jsx)(t.code,{children:`.includes(value)`}),` và đối với giá trị số (`,(0,c.jsx)(t.code,{children:`isNumber(value)`}),`), thực hiện đối chiếu tương đương số học với các phần tử số trong mảng qua `,(0,c.jsx)(t.code,{children:`toNumber()`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`So sánh số học:`}),` Nếu cả `,(0,c.jsx)(t.code,{children:`value`}),` và `,(0,c.jsx)(t.code,{children:`selected`}),` đều là dạng số (`,(0,c.jsx)(t.code,{children:`isNumber(value) && isNumber(selected)`}),`), chúng được chuyển đổi qua `,(0,c.jsx)(t.code,{children:`toNumber()`}),` và so sánh theo giá trị số (ví dụ: `,(0,c.jsx)(t.code,{children:`'5'`}),` khớp với `,(0,c.jsx)(t.code,{children:`5`}),`).`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.strong,{children:`So sánh bằng nghiêm ngặt:`}),` Trong các trường hợp còn lại, hàm sử dụng phép so sánh `,(0,c.jsx)(t.code,{children:`value === selected`}),`.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T`}),` — Giá trị đầu vào cần kiểm tra.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected?: unknown`}),` — Giá trị đích hoặc mảng các giá trị đã chọn.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu `,(0,c.jsx)(t.code,{children:`value`}),` khớp với `,(0,c.jsx)(t.code,{children:`selected`}),`, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isSelected } from '@dxtmisha/functional-basic'

// So sánh giá trị đơn
console.log(isSelected('apple', 'apple')) // true
console.log(isSelected('apple', 'banana')) // false

// So sánh với mảng
console.log(isSelected(2, [1, 2, 3])) // true
console.log(isSelected('5', [1, 2, 5])) // true
console.log(isSelected('dog', ['cat', 'mouse'])) // false

// So sánh số thông minh (chuỗi và số)
console.log(isSelected('5', 5)) // true

// Kiểm tra null / undefined
console.log(isSelected(null, 1)) // false
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};