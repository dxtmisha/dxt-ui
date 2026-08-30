import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,r as n}from"./lib-BRDOWE9X.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{f as i,s as a}from"./blocks-C5PYTnT8.js";function o(e){let t={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`@dxtmisha/vi/functional-basic/Functions/getFirst - Lấy phần tử đầu tiên`}),`
`,(0,c.jsx)(t.h1,{id:`getfirst`,children:(0,c.jsx)(t.code,{children:`getFirst`})}),`
`,(0,c.jsx)(t.p,{children:`Trả về phần tử đầu tiên của một mảng hoặc một đối tượng. Nếu giá trị là kiểu nguyên thủy, trả về chính giá trị đó.`}),`
`,(0,c.jsx)(t.p,{children:(0,c.jsx)(t.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[(0,c.jsx)(t.code,{children:`value: T | T[] | Record<string, T>`}),` — giá trị đầu vào.`]}),`
`]}),`
`,(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(t.code,{children:`T | undefined`}),` — phần tử đầu tiên của mảng hoặc đối tượng, hoặc chính giá trị đó.`]}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-typescript`,children:`import { getFirst } from '@dxtmisha/functional-basic'

console.log(getFirst([1, 2, 3])) // 1
console.log(getFirst({ a: 1, b: 2 })) // 1
console.log(getFirst('string')) // 'string'
`})})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),t(),i()})))()}l();export{s as default};