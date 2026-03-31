import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-AxVGGqmg.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional-basic/Functions/getStepValue - Tính toán giá trị bước tuyệt đối`}),`
`,(0,c.jsx)(n.h1,{id:`getstepvalue`,children:(0,c.jsx)(n.code,{children:`getStepValue`})}),`
`,(0,c.jsxs)(n.p,{children:[`Tính toán giá trị tuyệt đối của một phần trăm (`,(0,c.jsx)(n.code,{children:`1%`}),`) dựa trên toàn bộ phạm vi (sự khác biệt giữa giá trị lớn nhất và nhỏ nhất). Hàm này rất hữu ích để xác định giá trị của thanh trượt hoặc thanh quy trình sẽ thay đổi bao nhiêu đơn vị khi người dùng kéo thay đổi 1%.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`min: number | undefined`}),` — Giá trị tối thiểu của khoảng. Nếu truyền `,(0,c.jsx)(n.code,{children:`undefined`}),`, nó sẽ dùng `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`max: number`}),` — Giá trị tối đa của khoảng.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`number`}),` — Giá trị đại diện cho 1% sự chênh lệch mốc độ dài. Nếu giá trị tối đa nhỏ hơn hoặc bằng giá trị tối thiểu, hàm sẽ trả về `,(0,c.jsx)(n.code,{children:`0`}),`.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getStepValue } from '@dxtmisha/functional-basic'

// Phạm vi từ 0 tới 500, vậy 1% tương ứng là 5 đơn vị
console.log(getStepValue(0, 500)) // 5

// Phạm vi từ 50 tới 150 (chênh lệch 100), 1% là 1 đơn vị
console.log(getStepValue(50, 150)) // 1
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};