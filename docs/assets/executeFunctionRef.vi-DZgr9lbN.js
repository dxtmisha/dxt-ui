import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional/Functions/executeFunctionRef - Giải quyết hàm và tham chiếu`}),`
`,(0,c.jsx)(n.h1,{id:`executefunctionref`,children:(0,c.jsx)(n.code,{children:`executeFunctionRef`})}),`
`,(0,c.jsxs)(n.p,{children:[`Một hàm tiện ích thực thi đối số nếu nó là một hàm, và mở gói (unwrap) biến Vue `,(0,c.jsx)(n.code,{children:`Ref`}),` kết quả nếu nó có tính phản ứng. Nếu đối số là một `,(0,c.jsx)(n.code,{children:`Ref`}),` phản ứng hoặc một giá trị thông thường, nó sẽ mở gói hoặc trả về trực tiếp. Điều này rất hữu ích để giải quyết các giá trị có thể là tĩnh, phản ứng hoặc được trả về động từ một hàm getter.`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`data: RefOrNormalOrFunction<T>`}),` — Một biến phản ứng (`,(0,c.jsx)(n.code,{children:`Ref`}),`), một giá trị thông thường, hoặc một hàm trả về chúng.`]}),`
`]}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Trả về:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`T`}),` — Giá trị đã được giải quyết và mở gói hoàn toàn.`]}),`
`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { ref } from 'vue'
import { executeFunctionRef } from '@dxtmisha/functional'

const count = ref(10)
const normalValue = 20
const getter = () => ref(30)

console.log(executeFunctionRef(count))       // 10
console.log(executeFunctionRef(normalValue)) // 20
console.log(executeFunctionRef(getter))      // 30
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};