import{i as e}from"./preload-helper-Cv19cBWa.js";import{a as t,t as n}from"./jsx-runtime-D1H6-shM.js";import{f as r,s as i}from"./blocks-BWgdf4pj.js";import{t as a}from"./mdx-react-shim-B1U8VZv0.js";function o(e){let n={code:`code`,h1:`h1`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`@dxtmisha/vi/functional-basic/Functions/getFirst - Lấy phần tử đầu tiên`}),`
`,(0,c.jsx)(n.h1,{id:`getfirst`,children:(0,c.jsx)(n.code,{children:`getFirst`})}),`
`,(0,c.jsx)(n.p,{children:`Trả về phần tử đầu tiên của một mảng hoặc một đối tượng. Nếu giá trị là kiểu nguyên thủy, trả về chính giá trị đó.`}),`
`,(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:`Tham số:`})}),`
`,(0,c.jsxs)(n.ul,{children:[`
`,(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:`value: T | T[] | Record<string, T>`}),` — giá trị đầu vào.`]}),`
`]}),`
`,(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:`Trả về:`}),`
`,(0,c.jsx)(n.code,{children:`T | undefined`}),` — phần tử đầu tiên của mảng hoặc đối tượng, hoặc chính giá trị đó.`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-typescript`,children:`import { getFirst } from '@dxtmisha/functional-basic'

console.log(getFirst([1, 2, 3])) // 1
console.log(getFirst({ a: 1, b: 2 })) // 1
console.log(getFirst('string')) // 'string'
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=n(),a(),r()}))();export{s as default};