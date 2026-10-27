import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-CeTLcoZk.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-DoUQMcLv.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/isSelectedByList - Kiểm tra lựa chọn theo danh sách`}),`
`,(0,c.jsx)(t.h1,{id:`isselectedbylist`,children:(0,c.jsx)(t.code,{children:`isSelectedByList`})}),`
`,(0,c.jsxs)(t.p,{children:[`Mở rộng phép kiểm tra `,(0,c.jsx)(t.code,{children:`isSelected`}),` cho toàn bộ danh sách giá trị. Hàm xác minh xem `,(0,c.jsx)(t.strong,{children:`tất cả các phần tử`}),` trong `,(0,c.jsx)(t.code,{children:`values`}),` có khớp với tiêu chí lựa chọn `,(0,c.jsx)(t.code,{children:`selected`}),` hay không.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Nếu `,(0,c.jsx)(t.code,{children:`values`}),` là một giá trị đơn lẻ thay vì mảng, hàm sẽ chuyển tiếp trực tiếp sang `,(0,c.jsx)(t.code,{children:`isSelected(values, selected)`}),`. Nếu `,(0,c.jsx)(t.code,{children:`values`}),` là một mảng, hàm sử dụng `,(0,c.jsx)(t.code,{children:`.every()`}),` để đảm bảo mọi phần tử đều thỏa mãn `,(0,c.jsx)(t.code,{children:`isSelected(item, selected)`}),`.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`values: T | T[]`}),` — Một giá trị đơn hoặc mảng các giá trị cần kiểm tra.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`selected: T | T[]`}),` — Giá trị đích hoặc mảng các giá trị đã chọn để so sánh.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`boolean`}),` — `,(0,c.jsx)(t.code,{children:`true`}),` nếu tất cả các giá trị trong `,(0,c.jsx)(t.code,{children:`values`}),` đều được chọn, ngược lại là `,(0,c.jsx)(t.code,{children:`false`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { isSelectedByList } from '@dxtmisha/functional-basic'

// Kiểm tra danh sách với một giá trị đích duy nhất
console.log(isSelectedByList(['apple', 'apple'], 'apple')) // true

// Kiểm tra mọi phần tử trong values đều nằm trong mảng selected
console.log(isSelectedByList(['apple', 'cherry'], ['banana', 'apple', 'cherry'])) // true

// Trả về false vì 'date' không có trong mảng selected
console.log(isSelectedByList(['apple', 'date'], ['banana', 'apple', 'cherry'])) // false

// Giá trị đơn hoạt động tương tự như isSelected
console.log(isSelectedByList('apple', 'apple')) // true
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};