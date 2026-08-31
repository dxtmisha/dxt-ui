import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-8NMpF0hx.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getRandomItem - Lấy một phần tử ngẫu nhiên`}),`
`,(0,c.jsx)(t.h1,{id:`getrandomitem`,children:(0,c.jsx)(t.code,{children:`getRandomItem`})}),`
`,(0,c.jsxs)(t.p,{children:[`Trả về một phần tử ngẫu nhiên từ một mảng hoặc một đối tượng. Nếu mảng hoặc đối tượng rỗng hoặc không có giá trị, trả về `,(0,c.jsx)(t.code,{children:`undefined`}),`. Đối với các giá trị nguyên thủy, trả về chính giá trị đó.`]}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value?: T | T[] | Record<string, T>`}),` — (Tùy chọn) mảng, đối tượng hoặc giá trị đầu vào.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`T | undefined`}),` — phần tử ngẫu nhiên từ mảng hoặc đối tượng, hoặc `,(0,c.jsx)(t.code,{children:`undefined`}),` nếu rỗng.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getRandomItem } from '@dxtmisha/functional-basic'

console.log(getRandomItem([1, 2, 3, 4, 5])) // Ví dụ: 3
console.log(getRandomItem({ a: 10, b: 20 })) // Ví dụ: 20
console.log(getRandomItem([])) // undefined
console.log(getRandomItem({})) // undefined
console.log(getRandomItem('text')) // 'text'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};