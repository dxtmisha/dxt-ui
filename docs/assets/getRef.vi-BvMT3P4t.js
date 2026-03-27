import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-DymlrBn2.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/getRef - Trích xuất giá trị`}),`
`,(0,c.jsx)(n.h1,{id:`getref`,children:(0,c.jsx)(n.code,{children:`getRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một hàm tiện ích trích xuất giá trị cơ bản từ một `,(0,c.jsx)(n.code,{children:`Ref`}),` phản ứng hoặc trả về chính giá trị đó nếu nó không phải là phản ứng. Điều này hữu ích để đảm bảo bạn đang làm việc với dữ liệu thô bất kể trạng thái phản ứng của nó.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: RefOrNormal<T>`}),` — Một biến phản ứng (`,(0,c.jsx)(n.code,{children:`Ref`}),`) hoặc một giá trị thông thường.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T`}),` — Giá trị đã được mở gói của `,(0,c.jsx)(n.code,{children:`Ref`}),` hoặc chính giá trị đầu vào.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { getRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20

console.log(getRef(count))       // 10
console.log(getRef(normalValue)) // 20
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};