import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional/Functions/executeFunctionRef - Giải quyết hàm và tham chiếu`}),`
`,(0,c.jsx)(t.h1,{id:`executefunctionref`,children:(0,c.jsx)(t.code,{children:`executeFunctionRef`})}),`
`,(0,c.jsxs)(t.p,{children:[`Một hàm tiện ích thực thi đối số nếu nó là một hàm, và mở gói (unwrap) biến Vue `,(0,c.jsx)(t.code,{children:`Ref`}),` kết quả nếu nó có tính phản ứng. Nếu đối số là một `,(0,c.jsx)(t.code,{children:`Ref`}),` phản ứng hoặc một giá trị thông thường, nó sẽ mở gói hoặc trả về trực tiếp. Điều này rất hữu ích để giải quyết các giá trị có thể là tĩnh, phản ứng hoặc được trả về động từ một hàm getter.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`data: RefOrNormalOrFunction<T>`}),` — Một biến phản ứng (`,(0,c.jsx)(t.code,{children:`Ref`}),`), một giá trị thông thường, hoặc một hàm trả về chúng.`]}),`
`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`T`}),` — Giá trị đã được giải quyết và mở gói hoàn toàn.`]}),`
`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { executeFunctionRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20
const getter = () => ref(30)

console.log(executeFunctionRef(count))       // 10
console.log(executeFunctionRef(normalValue)) // 20
console.log(executeFunctionRef(getter))      // 30
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};