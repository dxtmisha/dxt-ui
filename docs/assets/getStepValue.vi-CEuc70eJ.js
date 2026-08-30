import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getStepValue - Tính toán giá trị bước tuyệt đối`}),`
`,(0,c.jsx)(t.h1,{id:`getstepvalue`,children:(0,c.jsx)(t.code,{children:`getStepValue`})}),`
`,(0,c.jsxs)(t.p,{children:[`Tính toán giá trị tuyệt đối của một phần trăm (`,(0,c.jsx)(t.code,{children:`1%`}),`) dựa trên toàn bộ phạm vi (sự khác biệt giữa giá trị lớn nhất và nhỏ nhất). Hàm này rất hữu ích để xác định giá trị của thanh trượt hoặc thanh quy trình sẽ thay đổi bao nhiêu đơn vị khi người dùng kéo thay đổi 1%.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`min: number | undefined`}),` — Giá trị tối thiểu của khoảng. Nếu truyền `,(0,c.jsx)(t.code,{children:`undefined`}),`, nó sẽ dùng `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`max: number`}),` — Giá trị tối đa của khoảng.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`number`}),` — Giá trị đại diện cho 1% sự chênh lệch mốc độ dài. Nếu giá trị tối đa nhỏ hơn hoặc bằng giá trị tối thiểu, hàm sẽ trả về `,(0,c.jsx)(t.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getStepValue } from '@dxtmisha/functional-basic'

// Phạm vi từ 0 tới 500, vậy 1% tương ứng là 5 đơn vị
console.log(getStepValue(0, 500)) // 5

// Phạm vi từ 50 tới 150 (chênh lệch 100), 1% là 1 đơn vị
console.log(getStepValue(50, 150)) // 1
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};