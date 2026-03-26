import{n as e}from"./chunk-BneVvdWh.js";import{r as t}from"./react-C7Xu3oTM.js";import{t as n}from"./jsx-runtime-BRDTPpDF.js";import{s as r,u as i}from"./blocks-BMjJZNM4.js";import{t as a}from"./mdx-react-shim-CwKyAxtk.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`@dxtmisha/vi/functional/Functions/toRefItem - Chuẩn hóa Ref phản ứng`}),`
`,(0,c.jsx)(n.h1,{id:`torefitem`,children:(0,c.jsx)(n.code,{children:`toRefItem`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một hàm tiện ích đảm bảo một giá trị là một `,(0,c.jsx)(n.code,{children:`Ref`}),` phản ứng. Nếu đầu vào đã là một `,(0,c.jsx)(n.code,{children:`Ref`}),`, nó sẽ được trả về nguyên trạng. Nếu đầu vào là một giá trị thông thường, nó sẽ được bao bọc trong một `,(0,c.jsx)(n.code,{children:`Ref`}),` mới. Điều này hữu ích cho các hàm mong đợi một tham chiếu phản ứng làm đối số.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`item: RefOrNormal<T>`}),` — Một biến phản ứng (`,(0,c.jsx)(n.code,{children:`Ref`}),`) hoặc một giá trị thông thường.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`Ref<T>`}),` — Một `,(0,c.jsx)(n.code,{children:`Ref`}),` phản ứng chứa giá trị.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { toRefItem } from '@dxtmisha/functional'

const existingRef = ref(10)
const ordinaryValue = 20

const normalized1 = toRefItem(existingRef)   // Trả về ref gốc
const normalized2 = toRefItem(ordinaryValue) // Trả về ref(20) mới

console.log(normalized1.value) // 10
console.log(normalized2.value) // 20
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),i()}))();export{s as default};