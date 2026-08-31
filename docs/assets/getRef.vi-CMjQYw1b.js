import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/getRef - Trích xuất giá trị`}),`
`,(0,c.jsx)(t.h1,{id:`getref`,children:(0,c.jsx)(t.code,{children:`getRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một hàm tiện ích trích xuất giá trị cơ bản từ một `,(0,c.jsx)(t.code,{children:`Ref`}),` phản ứng hoặc trả về chính giá trị đó nếu nó không phải là phản ứng. Điều này hữu ích để đảm bảo bạn đang làm việc với dữ liệu thô bất kể trạng thái phản ứng của nó.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`item: RefOrNormal<T>`}),` — Một biến phản ứng (`,(0,c.jsx)(t.code,{children:`Ref`}),`) hoặc một giá trị thông thường.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`T`}),` — Giá trị đã được mở gói của `,(0,c.jsx)(t.code,{children:`Ref`}),` hoặc chính giá trị đầu vào.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { getRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20

console.log(getRef(count))       // 10
console.log(getRef(normalValue)) // 20
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};