import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getStepPercent - Tính toán phần trăm của một bước`}),`
`,(0,c.jsx)(t.h1,{id:`getsteppercent`,children:(0,c.jsx)(t.code,{children:`getStepPercent`})}),`
`,(0,c.jsx)(t.p,{children:`Tính toán xem phần trăm của toàn bộ phạm vi (tính từ giá trị nhỏ nhất đến giá trị lớn nhất) tương ứng với độ dài của một đơn vị (hoặc một bước = 1). Hàm này rất hữu ích khi thiết lập vị trí các thành phần của thanh trượt (slider) hoặc thanh tiến trình tính theo phần trăm.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min: number | undefined`}),` — Giá trị tối thiểu của khoảng. Nếu truyền `,(0,c.jsx)(t.code,{children:`undefined`}),`, nó sẽ dùng `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max: number`}),` — Giá trị tối đa của khoảng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — Phần trăm (từ 0 đến 100) mà một bước chiếm. Nếu giá trị tối đa nhỏ hơn hoặc bằng giá trị tối thiểu, hàm sẽ trả về `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getStepPercent } from '@dxtmisha/functional-basic'

// Phạm vi từ 0 tới 200, vậy 1 bước sẽ bằng 0.5%
console.log(getStepPercent(0, 200)) // 0.5

// Phạm vi từ 50 tới 150 (chênh lệch 100), bước là 1%
console.log(getStepPercent(50, 150)) // 1
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};