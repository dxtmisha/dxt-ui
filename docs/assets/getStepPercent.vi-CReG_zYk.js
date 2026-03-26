import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getStepPercent - Tính toán phần trăm của một bước`}),`
`,(0,c.jsx)(n.h1,{id:`getsteppercent`,children:(0,c.jsx)(n.code,{children:`getStepPercent`})}),`
`,(0,c.jsx)(n.p,{children:`Tính toán xem phần trăm của toàn bộ phạm vi (tính từ giá trị nhỏ nhất đến giá trị lớn nhất) tương ứng với độ dài của một đơn vị (hoặc một bước = 1). Hàm này rất hữu ích khi thiết lập vị trí các thành phần của thanh trượt (slider) hoặc thanh tiến trình tính theo phần trăm.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min: number | undefined`}),` — Giá trị tối thiểu của khoảng. Nếu truyền `,(0,c.jsx)(n.code,{children:`undefined`}),`, nó sẽ dùng `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max: number`}),` — Giá trị tối đa của khoảng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`number`}),` — Phần trăm (từ 0 đến 100) mà một bước chiếm. Nếu giá trị tối đa nhỏ hơn hoặc bằng giá trị tối thiểu, hàm sẽ trả về `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getStepPercent } from '@dxtmisha/functional-basic'

// Phạm vi từ 0 tới 200, vậy 1 bước sẽ bằng 0.5%
console.log(getStepPercent(0, 200)) // 0.5

// Phạm vi từ 50 tới 150 (chênh lệch 100), bước là 1%
console.log(getStepPercent(50, 150)) // 1
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};