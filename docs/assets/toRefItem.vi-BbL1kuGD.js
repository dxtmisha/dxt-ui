import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-LSqYfV8h.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/toRefItem - Chuẩn hóa Ref phản ứng`}),`
`,(0,c.jsx)(t.h1,{id:`torefitem`,children:(0,c.jsx)(t.code,{children:`toRefItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một hàm tiện ích đảm bảo một giá trị là một `,(0,c.jsx)(t.code,{children:`Ref`}),` phản ứng. Nếu đầu vào đã là một `,(0,c.jsx)(t.code,{children:`Ref`}),`, nó sẽ được trả về nguyên trạng. Nếu đầu vào là một giá trị thông thường, nó sẽ được bao bọc trong một `,(0,c.jsx)(t.code,{children:`Ref`}),` mới. Điều này hữu ích cho các hàm mong đợi một tham chiếu phản ứng làm đối số.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: RefOrNormal<T>`}),` — Một biến phản ứng (`,(0,c.jsx)(t.code,{children:`Ref`}),`) hoặc một giá trị thông thường.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`Ref<T>`}),` — Một `,(0,c.jsx)(t.code,{children:`Ref`}),` phản ứng chứa giá trị.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { toRefItem } from '@dxtmisha/functional'

const existingRef = ref(10)
const ordinaryValue = 20

const normalized1 = toRefItem(existingRef)   // Trả về ref gốc
const normalized2 = toRefItem(ordinaryValue) // Trả về ref(20) mới

console.log(normalized1.value) // 10
console.log(normalized2.value) // 20
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};